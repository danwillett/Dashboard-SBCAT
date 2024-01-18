import React, { useEffect, useRef, useState } from "react";
import { loadModules } from "esri-loader";
import {Container, Grid} from "@mui/material";
import VolumeSliderOptions from "./VolumeSliderOptions";
import VolumeChart from "./VolumeChart";


export default function VolumeSliderMap() {

  const [filterOptions, setFilterOptions] = useState({
    bikes: true,
    peds: false,
  });
  const [chartData, setChartData] = useState(null)
  const [showForm, setShowForm] = useState(true)
  const handleApplyOptions = (options) => {
    // Update the filter options when the user applies changes
    setFilterOptions(options);
  };

  const mapRef = useRef();
  const infoRef = useRef();
  const sliderRef = useRef();
  const slider = useRef(null);
  const legendRef = useRef()
  const legend = useRef(null);
  const chartRef = useRef()

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const symbolRange = (count) => {
    let size = 0
    if (count) {
      size = Math.sqrt(count)
    } else {
      size = 0
    }
    return size
  }

  useEffect(() => {

    const initMap = async () => {

      const [Map, FeatureLayer, LayerView, MapView, esriConfig, FeatureTable, Query, GraphicsLayer, Graphic, Slider, Legend, Expand, UniqueValueRenderer] =
        await loadModules([
          "esri/Map",
          "esri/layers/FeatureLayer",
          "esri/views/layers/LayerView",
          "esri/views/MapView",
          "esri/config",
          "esri/widgets/FeatureTable",
          "esri/rest/support/Query",
          "esri/layers/GraphicsLayer",
          "esri/Graphic",
          'esri/widgets/Slider',
          "esri/widgets/Legend",
          "esri/widgets/Expand",
          "esri/renderers/UniqueValueRenderer"

        ]);
      console.log(esriConfig);

      const walkingUrl = "https://services1.arcgis.com/4TXrdeWh0RyCqPgB/arcgis/rest/services/ATP_Volumes_SB/FeatureServer/0"
      const bikingUrl = "https://services1.arcgis.com/4TXrdeWh0RyCqPgB/arcgis/rest/services/ATP_Volumes_SB/FeatureServer/2"
      let url
      let name
   
      if (filterOptions.bikes) {
        url = bikingUrl
        name = "bike"
        console.log(name)
      } else if (filterOptions.peds) {
        url = walkingUrl
        name = "ped"
        console.log(name)
      }
      
      const volumes = new FeatureLayer({
        url: url
      })


      const sites = new FeatureLayer({
        url: "https://services1.arcgis.com/4TXrdeWh0RyCqPgB/arcgis/rest/services/ATP_Volumes_SB/FeatureServer/1"
      })

      const hourFields = ["h_00", "h_01", "h_02", "h_03", "h_04", "h_05", "h_06", "h_07", "h_08", "h_09", "h_10", "h_11", "h_12", "h_13", "h_14", "h_15", "h_16", "h_17", "h_18", "h_19", "h_20", "h_21", "h_22", "h_23"]
      const resultsLayer = new GraphicsLayer()

      const sitesQuery = new Query();
      sitesQuery.where = "";  // query all
      sitesQuery.outFields = ["*"];  // get all fields
      sitesQuery.returnGeometry = true

      sites.queryFeatures(sitesQuery).then((result) => {
        let siteFeatures = result.features
        let siteObj = {}
        siteFeatures.forEach(feature => {
          let siteLocation = feature.attributes.location
          siteObj[siteLocation] = {}
          siteObj[siteLocation]['attributes'] = feature.attributes
          siteObj[siteLocation]['geometry'] = feature.geometry
        })


        let statsObj = hourFields.map((field) => (
          {
            onStatisticField: `${name}_volumes_${field}`,
            outStatisticFieldName: "avg" + field,
            statisticType: "avg",
          }
        ))


        const statsQuery = new Query({
          outStatistics: statsObj,
          groupByFieldsForStatistics: [`${name}_volumes_location`],
          returnGeometry: false,
        });

        volumes.queryFeatures(statsQuery).then((result) => {
          
          const volumeFeatures = result.features

          volumeFeatures.forEach(feature => {

            let volumeLocation = feature.attributes[`${name}_volumes_location`]
            if (volumeLocation) {
              let graphicFeature = siteObj[volumeLocation]

            hourFields.forEach(hour => {
              let hourKey = `avg${hour}`
              graphicFeature['attributes'][hourKey] = feature.attributes[hourKey]
            })
 
            graphicFeature['attributes']['type'] = name
            let countAmount = graphicFeature.attributes['avgh_12']
            let symbolSize = symbolRange(countAmount)
            
            let symbol = {
                type: "simple-marker",
                color: "blue",
                size: symbolSize,
                outline: {
                  color: "white",
                  width: 1
                }
            
              }

            if (graphicFeature['geometry']) {
              let graphic = new Graphic({
                geometry: graphicFeature.geometry,
                attributes: graphicFeature.attributes,
                symbol: symbol
              })
              resultsLayer.add(graphic)
            }
            }
            
          })
      

        }).catch(error => {
          console.error("Query error:", error)
          console.error("Query details:", error.details)
        })

      }).catch((error) => {
        console.error("Couldn't get sites: ", error)
      })
      // Create a map
      const map = new Map({
        basemap: "streets-vector",
        layers: [resultsLayer]
      });

      // Create a view
      const view = new MapView({
        map: map,
        center: [-119.8, 34.45],
        zoom: 11,
        container: mapRef.current,
      });

      
      view.ui.add(
        new Expand({
          view: view,
          content: infoRef.current,
          expandIcon: "list-bullet",
          expanded: true
        }),
        "top-right"
      );
      
      view.whenLayerView(resultsLayer).then((layerView) => {

        if (!legend.current) {
          legend.current = new Legend({
            view: view,
            container: legendRef.current,
            // layerInfos: [
            //   {
            //     layer: dummyFeatureLayer,
            //     title: "Hourly Bike Counts", // Add your desired title
            //   },
            // ],
          });
        }
        
        if (!slider.current) {
          slider.current = new Slider({
            min: 0,
            max: 23,
            values: [0,23],
            container: sliderRef.current,
            visibleElements: {
              rangeLabels: true
            },
            precision: 0,
            rangeSlider: true
          });
        }

        const sliderValue = document.getElementById("sliderValue");
        let thumbValueMin = 0
        let thumbValueMax = 23
        slider.current.on(["thumb-change", "thumb-drag"], (event) => {
          
          let thumbIndex = event.index // if 0, its the min thumb, if 1 its the max thumb
          let thumbValue = event.value
          console.log(thumbValue)
          if (thumbIndex == 0) {
            thumbValueMin = thumbValue            
          } else if (thumbIndex == 1) {
            thumbValueMax = thumbValue          
          }
          let fieldsToShow = []
          for (let i = thumbValueMin; i <=thumbValueMax; i++) {
            fieldsToShow.push(`avg${hourFields[i]}`)
          }
  
          let pointsAmount = resultsLayer.graphics.items.length
          let updatedGraphics = []
          for (let i = 0; i < pointsAmount; i++) {
            let countAmount = 0;
            fieldsToShow.forEach((field) => {
              countAmount += resultsLayer.graphics.items[i].attributes[field]
            })
            let symbolSize = symbolRange(countAmount)
            let symbol = {
                type: "simple-marker",
                color: "blue",
                size: symbolSize,
                outline: {
                  color: "white",
                  width: 1
                }
            
              }
              
              resultsLayer.graphics.items[i].symbol = symbol
              let updatedGraphic = new Graphic({
                geometry: resultsLayer.graphics.items[i].geometry,
                symbol: symbol,
                attributes: resultsLayer.graphics.items[i].attributes,
              });
              updatedGraphic['attributes']['current_count'] = countAmount
          
              updatedGraphics.push(updatedGraphic);
          }
  
          sliderValue.innerText = event.value;
  
          // Remove all graphics from the layer
          resultsLayer.graphics.removeAll();

          // Add the updated graphics to the layer
          resultsLayer.graphics.addMany(updatedGraphics);
          
          // update charts with location counts
          let chart_labels =[];
          let chart_counts =[];
          updatedGraphics.forEach((graphic) => {
            chart_labels.push(graphic.attributes.location)
            chart_counts.push(graphic.attributes.current_count)
          })

          setChartData({        
            labels: chart_labels, 
            datasets: [{
              label: 'Counts',
              data: chart_counts
          }]
          })
        
        });
  
  
      });

    };

    initMap();

    
  }, [filterOptions]);


  const handleCloseForm = () => {
    setShowForm(false);
    console.log("closing form")
  };

  return (
    <Container maxWidth='lg'>
    <Grid container direction="column" style={{width: '100%', justifyContent: 'center'}}>
      <Grid item xs={12} md={8}>
        
        <div ref={mapRef} style={{ height: "60vh", width: "100%", padding: '30px', boxSizing: "border-box"}}></div>
            
        <div ref={infoRef}>
          <div id="description">
            Counts at <span id="sliderValue">12</span> h
          </div>
          <div id="sliderContainer">
            <div ref={sliderRef}></div>
          </div>
          <div ref={legendRef}></div>
        </div>
      </Grid>
        
       <Grid item alignContent="center" >
       { chartData && <VolumeChart data={chartData} /> }
        </Grid> 
        
        
    
      {showForm && <VolumeSliderOptions showForm={showForm} onApplyOptions={handleApplyOptions} onClose={handleCloseForm} />}
    </Grid>
    </Container>
  );
}
