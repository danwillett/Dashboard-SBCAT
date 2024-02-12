"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[8143],{84848:(e,t,r)=>{r.d(t,{VF:()=>$,Uf:()=>Y});var i=r(27366),n=r(52639),o=r(7138),s=r(63780),l=r(40281),a=r(10064),u=r(42537),p=r(93169),c=r(77427),y=r(66978),d=r(94172),h=r(68860),f=r(49861),m=r(25243),g=r(69912),v=r(53866),b=r(82582),w=r(37270),x=r(87072);function _(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function S(e,t){var r;return"number"==typeof e?e:null!==e&&void 0!==e&&null!==(r=e.stops)&&void 0!==r&&r.length?function(e){let t=0,r=0;for(let i=0;i<e.length;i++){const n=e[i].size;"number"==typeof n&&(t+=n,r++)}return t/r}(e.stops):t}function F(e,t){if(!t)return e;const r=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:r,minSize:i}=t;return(S(r,e)+S(i,e))/2}));let i=0;const n=r.length;if(0===n)return e;for(let s=0;s<n;s++)i+=r[s];const o=Math.floor(i/n);return Math.max(o,e)}function C(e){var t;const r=null===e||void 0===e?void 0:e.renderer,i="touch"===(null===e||void 0===e||null===(t=e.event)||void 0===t?void 0:t.pointerType)?9:6;if(!r)return i;const n="visualVariables"in r?F(i,r.visualVariables):i;if("simple"===r.type)return _(n,r.symbol);if("unique-value"===r.type){var o;let e=n;return null!==(o=r.uniqueValueInfos)&&void 0!==o&&o.forEach((t=>{e=_(e,t.symbol)})),e}if("class-breaks"===r.type){let e=n;return r.classBreakInfos.forEach((t=>{e=_(e,t.symbol)})),e}return"dot-density"===r.type||r.type,n}var j=r(76200),R=r(91340),E=r(23084),O=r(76672),P=r(77981),I=r(92975),N=r(58132);function V(e){var t;const{mapExtent:r,floors:i,width:n,sublayers:o,layerIds:s,layerOption:l,gdbVersion:a}=e,u=null===o||void 0===o||null===(t=o.find((e=>null!=e.layer)))||void 0===t||null===(t=t.layer)||void 0===t?void 0:t.serviceSublayers,p="popup"===l,c={},y=(0,b.yZ)({extent:r,width:n,spatialReference:null===r||void 0===r?void 0:r.spatialReference}),d=[],h=e=>{const t=0===y,r=0===e.minScale||y<=e.minScale,i=0===e.maxScale||y>=e.maxScale;if(e.visible&&(t||r&&i))if(e.sublayers)e.sublayers.forEach(h);else{if(!1===(null===s||void 0===s?void 0:s.includes(e.id))||p&&(!e.popupTemplate||!e.popupEnabled))return;d.unshift(e)}};if(null!==o&&void 0!==o&&o.forEach(h),o&&!d.length)c.layerIds=[];else{const e=(0,N.FN)(d,u,a),t=d.map((e=>{const t=(0,x.f)(i,e);return e.toExportImageJSON(t)}));if(e)c.dynamicLayers=JSON.stringify(t);else{if(o){let e=d.map((e=>{let{id:t}=e;return t}));s&&(e=e.filter((e=>s.includes(e)))),c.layerIds=e}else(null===s||void 0===s?void 0:s.length)&&(c.layerIds=s);const e=function(e,t){const r=!(null===e||void 0===e||!e.length),i=t.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return i.length?i.map((t=>{const r=(0,x.f)(e,t),i=(0,O._)(r,t.definitionExpression);return{id:t.id,definitionExpression:null!==i&&void 0!==i?i:void 0}})):null}(i,d);if(null!=e&&e.length){const t={};for(const r of e)r.definitionExpression&&(t[r.id]=r.definitionExpression);Object.keys(t).length&&(c.layerDefs=JSON.stringify(t))}}}return c}var G,M=r(59486),Z=r(62044),A=r(46784),T=r(78952);let L=G=class extends A.wq{static from(e){return(0,m.TJ)(G,e)}constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};(0,i._)([(0,f.Cb)({type:Number,json:{write:!0}})],L.prototype,"dpi",void 0),(0,i._)([(0,f.Cb)()],L.prototype,"floors",void 0),(0,i._)([(0,f.Cb)({type:String,json:{write:!0}})],L.prototype,"gdbVersion",void 0),(0,i._)([(0,f.Cb)({types:M.qM,json:{read:P.im,write:!0}})],L.prototype,"geometry",void 0),(0,i._)([(0,f.Cb)({type:Number,json:{write:!0}})],L.prototype,"geometryPrecision",void 0),(0,i._)([(0,f.Cb)({type:Number,json:{write:!0}})],L.prototype,"height",void 0),(0,i._)([(0,f.Cb)({type:[Number],json:{write:!0}})],L.prototype,"layerIds",void 0),(0,i._)([(0,f.Cb)({type:["top","visible","all","popup"],json:{write:!0}})],L.prototype,"layerOption",void 0),(0,i._)([(0,f.Cb)({type:v.Z,json:{write:!0}})],L.prototype,"mapExtent",void 0),(0,i._)([(0,f.Cb)({type:Number,json:{write:!0}})],L.prototype,"maxAllowableOffset",void 0),(0,i._)([(0,f.Cb)({type:Boolean,json:{write:!0}})],L.prototype,"returnFieldName",void 0),(0,i._)([(0,f.Cb)({type:Boolean,json:{write:!0}})],L.prototype,"returnGeometry",void 0),(0,i._)([(0,f.Cb)({type:Boolean,json:{write:!0}})],L.prototype,"returnM",void 0),(0,i._)([(0,f.Cb)({type:Boolean,json:{write:!0}})],L.prototype,"returnUnformattedValues",void 0),(0,i._)([(0,f.Cb)({type:Boolean,json:{write:!0}})],L.prototype,"returnZ",void 0),(0,i._)([(0,f.Cb)({type:T.Z,json:{write:!0}})],L.prototype,"spatialReference",void 0),(0,i._)([(0,f.Cb)()],L.prototype,"sublayers",void 0),(0,i._)([(0,f.Cb)({type:Z.Z,json:{write:!0}})],L.prototype,"timeExtent",void 0),(0,i._)([(0,f.Cb)({type:Number,json:{write:!0}})],L.prototype,"tolerance",void 0),(0,i._)([(0,f.Cb)({type:Number,json:{write:!0}})],L.prototype,"width",void 0),L=G=(0,i._)([(0,g.j)("esri.rest.support.IdentifyParameters")],L);const U=L;var k=r(38511),q=r(31201),J=r(27823);let z=class extends A.wq{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return n.Z.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:r,geometry:i}=e;r&&(t.attributes={...r}),null!=i&&(t.geometry=i.toJSON(),t.geometryType=J.P.toJSON(i.type))}};(0,i._)([(0,f.Cb)({type:String,json:{write:!0}})],z.prototype,"displayFieldName",void 0),(0,i._)([(0,f.Cb)({type:n.Z})],z.prototype,"feature",void 0),(0,i._)([(0,k.r)("feature",["attributes","geometry"])],z.prototype,"readFeature",null),(0,i._)([(0,q.c)("feature")],z.prototype,"writeFeature",null),(0,i._)([(0,f.Cb)({type:Number,json:{write:!0}})],z.prototype,"layerId",void 0),(0,i._)([(0,f.Cb)({type:String,json:{write:!0}})],z.prototype,"layerName",void 0),z=(0,i._)([(0,g.j)("esri.rest.support.IdentifyResult")],z);const B=z;async function H(e,t,r){const i=(t=function(e){return U.from(e)}(t)).geometry?[t.geometry]:[],n=(0,E.en)(e);return n.path+="/identify",(0,R.aX)(i).then((e=>{const i=function(e,t){var r;const{dpi:i,gdbVersion:n,geometry:o,geometryPrecision:s,height:l,layerOption:a,mapExtent:u,maxAllowableOffset:p,returnFieldName:c,returnGeometry:y,returnUnformattedValues:d,returnZ:h,spatialReference:f,timeExtent:m,tolerance:g,width:v}=e.toJSON(),{dynamicLayers:b,layerDefs:w,layerIds:x}=V(e),_=null!=(null===t||void 0===t?void 0:t.geometry)?t.geometry:null,S={geometryPrecision:s,maxAllowableOffset:p,returnFieldName:c,returnGeometry:y,returnUnformattedValues:d,returnZ:h,tolerance:g},F=_&&_.toJSON()||o;S.imageDisplay="".concat(v,",").concat(l,",").concat(i),n&&(S.gdbVersion=n),F&&(delete F.spatialReference,S.geometry=JSON.stringify(F),S.geometryType=(0,P.Ji)(F));const C=null!==(r=null!==f&&void 0!==f?f:null===F||void 0===F?void 0:F.spatialReference)&&void 0!==r?r:null===u||void 0===u?void 0:u.spatialReference;if(C&&(S.sr=(0,I.B9)(C)),S.time=m?[m.start,m.end].join(","):null,u){const{xmin:e,ymin:t,xmax:r,ymax:i}=u;S.mapExtent="".concat(e,",").concat(t,",").concat(r,",").concat(i)}return w&&(S.layerDefs=w),b&&!w&&(S.dynamicLayers=b),S.layers="popup"===a?"visible":a,x&&!b&&(S.layers+=":".concat(x.join(","))),S}(t,{geometry:null===e||void 0===e?void 0:e[0]}),o=(0,E.cv)({...n.query,f:"json",...i}),s=(0,E.lA)(o,r);return(0,j.Z)(n.path,s).then(Q).then((e=>function(e,t){if(null===t||void 0===t||!t.length)return e;const r=new Map;function i(e){r.set(e.id,e),e.sublayers&&e.sublayers.forEach(i)}t.forEach(i);for(const n of e.results)n.feature.sourceLayer=r.get(n.layerId);return e}(e,t.sublayers)))}))}function Q(e){const t=e.data;return t.results=t.results||[],t.exceededTransferLimit=Boolean(t.exceededTransferLimit),t.results=t.results.map((e=>B.fromJSON(e))),t}var D=r(819),K=r(16072),W=r(24405);let X=null;function Y(e,t){return"tile"===t.type||"map-image"===t.type}let $=class extends o.Z{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=(0,y.Ds)((async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch((()=>{})))}))}initialize(){const e=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch((()=>{}))),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([(0,d.on)((()=>this.highlightGraphics),"change",(t=>e(t.added)),{onListenerAdd:t=>e(t)})])}async fetchPopupFeatures(e,t){var r,i;const{layerView:{layer:n,view:{scale:o}}}=this;if(!e)throw new a.Z("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:n});const s=function(e,t,r){const i=[];if(!e)return i;const n=e=>{const o=0===e.minScale||t<=e.minScale,s=0===e.maxScale||t>=e.maxScale;if(e.visible&&o&&s)if(e.sublayers)e.sublayers.forEach(n);else if(e.popupEnabled){const t=(0,W.V5)(e,{...r,defaultPopupTemplateEnabled:!1});null!=t&&i.unshift({sublayer:e,popupTemplate:t})}};return e.map(n),i}(n.sublayers,o,t);if(!s.length)return[];const l=await async function(e,t){var r;if(null!==(r=e.capabilities)&&void 0!==r&&null!==(r=r.operations)&&void 0!==r&&r.supportsQuery)return!0;try{return await Promise.any(t.map((e=>{let{sublayer:t}=e;return t.load().then((()=>t.capabilities.operations.supportsQuery))})))}catch{return!1}}(n,s);if((null!==(r=null===(i=n.capabilities)||void 0===i||null===(i=i.operations)||void 0===i?void 0:i.supportsIdentify)&&void 0!==r&&!r||!(n.version>=10.5))&&!l)throw new a.Z("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:n});return l?this._fetchPopupFeaturesUsingQueries(e,s,t):this._fetchPopupFeaturesUsingIdentify(e,s,t)}clearHighlights(){var e;null===(e=this.highlightGraphics)||void 0===e||e.removeAll()}highlight(e){var t,r;const i=this.highlightGraphics;if(!i)return(0,u.kB)();let o=null;if(e instanceof n.Z?o=[e]:l.Z.isCollection(e)&&e.length>0?o=e.toArray():Array.isArray(e)&&e.length>0&&(o=e),o=null===(t=o)||void 0===t?void 0:t.filter(s.pC),null===(r=o)||void 0===r||!r.length)return(0,u.kB)();for(const n of o){const e=n.sourceLayer;null!=e&&"geometryType"in e&&"point"===e.geometryType&&(n.visible=!1)}return i.addMany(o),(0,u.kB)((()=>{var e;return i.removeMany(null!==(e=o)&&void 0!==e?e:[])}))}async _updateHighlightedFeaturesSymbols(e){const{layerView:{view:t},highlightGraphics:i,highlightGraphicUpdated:n}=this;if(i&&n)for(const o of e){const e=o.sourceLayer&&"renderer"in o.sourceLayer&&o.sourceLayer.renderer;o.sourceLayer&&"geometryType"in o.sourceLayer&&"point"===o.sourceLayer.geometryType&&e&&"getSymbolAsync"in e&&e.getSymbolAsync(o).then((async s=>{var l;s||(s=new K.Z);let a=null;const u="visualVariables"in e?null===(l=e.visualVariables)||void 0===l?void 0:l.find((e=>"size"===e.type)):void 0;u&&(X||(X=(await Promise.resolve().then(r.bind(r,56011))).getSize),a=X(u,o,{view:t.type,scale:t.scale,shape:"simple-marker"===s.type?s.style:null})),a||(a="width"in s&&"height"in s&&null!=s.width&&null!=s.height?Math.max(s.width,s.height):"size"in s?s.size:16),i.includes(o)&&(o.symbol=new K.Z({style:"square",size:a,xoffset:"xoffset"in s?s.xoffset:0,yoffset:"yoffset"in s?s.yoffset:0}),n(o,"symbol"),o.visible=!0)}))}}async _updateHighlightedFeaturesGeometries(e){const{layerView:{layer:t,view:r},highlightGraphics:i,highlightGraphicUpdated:n}=this;if(this._highlightGeometriesResolution=e,!n||null===i||void 0===i||!i.length||!t.capabilities.operations.supportsQuery)return;const o=this._getTargetResolution(e),s=new Map;for(const u of i)if(!this._featuresResolutions.has(u)||this._featuresResolutions.get(u)>o){const e=u.sourceLayer;(0,c.s1)(s,e,(()=>new Map)).set(u.getObjectId(),u)}const l=Array.from(s,(e=>{let[t,i]=e;const n=t.createQuery();return n.objectIds=[...i.keys()],n.outFields=[t.objectIdField],n.returnGeometry=!0,n.maxAllowableOffset=o,n.outSpatialReference=r.spatialReference,t.queryFeatures(n)})),a=await Promise.all(l);if(!this.destroyed)for(const{features:u}of a)for(const e of u){const t=e.sourceLayer,r=s.get(t).get(e.getObjectId());r&&i.includes(r)&&(r.geometry=e.geometry,n(r,"geometry"),this._featuresResolutions.set(r,o))}}_getTargetResolution(e){const t=e*(0,h.c9)(this.layerView.view.spatialReference),r=t/16;return r<=10?0:e/t*r}async _fetchPopupFeaturesUsingIdentify(e,t,r){const i=await this._createIdentifyParameters(e,t,r);if(null==i)return[];const{results:n}=await H(this.layerView.layer.parsedUrl,i);return n.map((e=>e.feature))}async _createIdentifyParameters(e,t,r){const{floors:i,layer:n,timeExtent:o,view:{spatialReference:s,scale:l}}=this.layerView,a=null!=r?r.event:null;if(!t.length)return null;await Promise.all(t.map((e=>{let{sublayer:t}=e;return t.load().catch((()=>{}))})));const u=Math.min((0,p.Z)("mapservice-popup-identify-max-tolerance"),n.allSublayers.reduce(((e,t)=>t.renderer?C({renderer:t.renderer,event:a}):e),2)),c=this.createFetchPopupFeaturesQueryGeometry(e,u),y=(0,b.dp)(l,s),d=Math.round(c.width/y),h=new v.Z({xmin:c.center.x-y*d,ymin:c.center.y-y*d,xmax:c.center.x+y*d,ymax:c.center.y+y*d,spatialReference:c.spatialReference});return new U({floors:i,gdbVersion:"gdbVersion"in n?n.gdbVersion:void 0,geometry:e,height:d,layerOption:"popup",mapExtent:h,returnGeometry:!0,spatialReference:s,sublayers:n.sublayers,timeExtent:o,tolerance:u,width:d})}async _fetchPopupFeaturesUsingQueries(e,t,r){const{layerView:{floors:i,timeExtent:n}}=this,o=null!=r?r.event:null,l=t.map((async t=>{var r;let{sublayer:s,popupTemplate:l}=t;if(await s.load().catch((()=>{})),s.capabilities&&!s.capabilities.operations.supportsQuery)return[];const a=s.createQuery(),u=C({renderer:s.renderer,event:o}),p=this.createFetchPopupFeaturesQueryGeometry(e,u),c=new Set,[y]=await Promise.all([(0,W.e7)(s,l),null===(r=s.renderer)||void 0===r?void 0:r.collectRequiredFields(c,s.fieldsIndex)]);(0,w.gd)(c,s.fieldsIndex,y);const d=Array.from(c).sort();if(a.geometry=p,a.outFields=d,a.timeExtent=n,i){const e=i.clone(),t=(0,x.f)(e,s);null!=t&&(a.where=a.where?"(".concat(a.where,") AND (").concat(t,")"):t)}const h=this._getTargetResolution(p.width/u),f=await function(e){var t;return null!==(t=e.expressionInfos)&&void 0!==t&&t.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?(0,D.LC)():Promise.resolve()}(l),m="point"===s.geometryType||f&&f.arcadeUtils.hasGeometryOperations(l);m||(a.maxAllowableOffset=h);let{features:g}=await s.queryFeatures(a);const v=m?0:h;g=await async function(e,t){const r=e.renderer;return r&&"defaultSymbol"in r&&!r.defaultSymbol&&(t=r.valueExpression?await Promise.all(t.map((e=>r.getSymbolAsync(e).then((t=>t?e:null))))).then((e=>e.filter((e=>null!=e)))):t.filter((e=>null!=r.getSymbol(e)))),t}(s,g);for(const e of g)this._featuresResolutions.set(e,v);return g}));return(await Promise.allSettled(l)).reduce(((e,t)=>"fulfilled"===t.status?[...e,...t.value]:e),[]).filter(s.pC)}};(0,i._)([(0,f.Cb)({constructOnly:!0})],$.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),(0,i._)([(0,f.Cb)({constructOnly:!0})],$.prototype,"layerView",void 0),(0,i._)([(0,f.Cb)({constructOnly:!0})],$.prototype,"highlightGraphics",void 0),(0,i._)([(0,f.Cb)({constructOnly:!0})],$.prototype,"highlightGraphicUpdated",void 0),(0,i._)([(0,f.Cb)({constructOnly:!0})],$.prototype,"updatingHandles",void 0),$=(0,i._)([(0,g.j)("esri.views.layers.support.MapService")],$)},45008:(e,t,r)=>{r.d(t,{K:()=>o});r(59486);var i=r(68860),n=r(53866);function o(e,t,r){var o;let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new n.Z,l=0;if("2d"===r.type)l=t*(null!==(o=r.resolution)&&void 0!==o?o:0);else if("3d"===r.type){const n=r.overlayPixelSizeInMapUnits(e),o=r.basemapSpatialReference;l=null==o||o.equals(r.spatialReference)?t*n:(0,i.c9)(o)/(0,i.c9)(r.spatialReference)}const a=e.x-l,u=e.y-l,p=e.x+l,c=e.y+l,{spatialReference:y}=r;return s.xmin=Math.min(a,p),s.ymin=Math.min(u,c),s.xmax=Math.max(a,p),s.ymax=Math.max(u,c),s.spatialReference=y,s}new n.Z}}]);
//# sourceMappingURL=8143.ff4c2ae8.chunk.js.map