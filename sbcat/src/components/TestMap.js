import {React, useEffect} from 'react'

import Map from '@arcgis/core/Map.js'
import WebMap from '@arcgis/core/WebMap.js'
import MapView from '@arcgis/core/views/MapView.js';
import ScaleBar from '@arcgis/core/widgets/ScaleBar.js'
import Legend from '@arcgis/core/widgets/Legend'
import LayerList from '@arcgis/core/widgets/LayerList'
import esriConfig from '@arcgis/core/config.js'

const styles = {
  mapWidth: {
    width: "900px"
  }
}

function TestMap() {

  // need to use Effect to load map after the div element has been loaded first
  const loadMap = () => {
    esriConfig.apiKey = process.env.ARC_API

    // const map = new Map({
    //   basemap: "topo-vector"
    // })

    // const view = new MapView({
    //   container: "viewDiv",
    //   map: map,
    //   center: [-119.98395256918998, 34.762137045818235],
    //   zoom: 9
    // })

    const webmap = new WebMap({
      portalItem: {
        id: "b3d1b71c82bc4f9a9db9e5eb31d54d5a"
      }
    });

    const view = new MapView({
      container: "viewDiv",
      map: webmap
    })

    const scalebar = new ScaleBar({
      view: view
    })

    view.ui.add(scalebar, "bottom-left")

    const legend = new Legend ({
      view: view
    });
    view.ui.add(legend, "top-right");

    const layerList = new LayerList({
      view:view
    })

    view.ui.add(layerList, {
      position: "top-left"
    })
  
    
  }
  
  useEffect(() => {
    loadMap();
  }, [])

  return (
    <div id='viewDiv' style={styles.mapWidth}></div>
  )
}

export default TestMap