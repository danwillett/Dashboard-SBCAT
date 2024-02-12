"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[8178],{58178:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(14921),s=r(10064),i=r(32718),a=r(66978),o=r(92975),u=r(83406),l=r(33960),h=r(19995),c=r(76143),d=r(47615),p=r(68808),y=r(45927),g=r(52410),f=r(6701);class m{constructor(){this._queryEngine=null,this._customParameters=null}destroy(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:r,getFeatureOutputFormat:n,fields:i,geometryType:o,featureType:u,objectIdField:d,customParameters:p}=e,{spatialReference:m,getFeatureSpatialReference:_}=(0,y.fU)(r,u,e.spatialReference);this._featureType=u,this._customParameters=p,this._getFeatureUrl=r,this._getFeatureOutputFormat=n,this._getFeatureSpatialReference=_;try{await(0,h._W)(_,m)}catch{throw new s.Z("unsupported-projection","Projection not supported",{inSpatialReference:_,outSpatialReference:m})}(0,a.k_)(t);const w=g.Z.fromLayerJSON({fields:i,dateFieldsTimeReference:i.some((e=>"esriFieldTypeDate"===e.type))?{timeZoneIANA:f.pt}:null}),F=await this._snapshotFeatures({fieldsIndex:w,geometryType:o,objectIdField:d,spatialReference:m},t.signal);return this._queryEngine=new c.q({fieldsIndex:w,geometryType:o,hasM:!1,hasZ:!1,objectIdField:d,spatialReference:m,timeInfo:null,featureStore:new l.Z({geometryType:o,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(F),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new s.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,null!==(t=this._snapshotTask)&&void 0!==t&&t.abort(),this._snapshotTask=(0,n.vr)((e=>this._snapshotFeatures(this._queryEngine,e))),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),(0,a.D_)(e)||i.Z.getLogger("esri.layers.WFSLayer").error(new s.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures(e,t){var r;let{objectIdField:n,geometryType:s,spatialReference:i,fieldsIndex:l}=e;const c=await(0,y.Bm)(null!==(r=this._getFeatureUrl)&&void 0!==r?r:"",this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:t});(0,d.O3)(c,this._getFeatureSpatialReference.wkid),(0,a.k_)(t);const g=(0,d.lG)(c,{geometryType:s,hasZ:!1,objectIdField:n});if(!(0,o.fS)(i,this._getFeatureSpatialReference))for(const a of g)null!=a.geometry&&(a.geometry=(0,u.GH)((0,h.iV)((0,u.di)(a.geometry,s,!1,!1),this._getFeatureSpatialReference,i)));let f=1;for(const a of g){const e={};(0,p.O0)(l,e,a.attributes,!0),a.attributes=e,null==e[n]&&(a.objectId=e[n]=f++)}return g}}},68808:(e,t,r)=>{r.d(t,{O0:()=>d,av:()=>u,b:()=>f,d1:()=>h,og:()=>g});var n=r(63231),s=r(92975),i=r(37270);class a{constructor(){this.code=null,this.description=null}}class o{constructor(e){this.error=new a,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new o(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function h(e){return new l(e)}const c=new Set;function d(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];c.clear();for(const a in r){const s=e.get(a);if(!s)continue;const o=p(s,r[a]);if(c.add(s.name),s&&(n||s.editable)){const e=(0,i.Qc)(s,o);if(e)return u((0,i.vP)(e,s,o));t[s.name]=o}}for(const i of null!==(s=null===e||void 0===e?void 0:e.requiredFields)&&void 0!==s?s:[]){var s;if(!c.has(i.name))return u('missing required field "'.concat(i.name,'"'))}return null}function p(e,t){let r=t;return(0,i.H7)(e)&&"string"==typeof t?r=parseFloat(t):(0,i.qN)(e)&&null!=t&&"string"!=typeof t?r=String(t):(0,i.y2)(e)&&"string"==typeof t&&(r=(0,n.sG)(t)),(0,i.Pz)(r)}let y;function g(e,t){if(!e||!(0,s.JY)(t))return e;if("rings"in e||"paths"in e){if(null==y)throw new TypeError("geometry engine not loaded");return y.simplify(t,e)}return e}async function f(e,t){!(0,s.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==y&&(y=await Promise.all([r.e(9058),r.e(3645)]).then(r.bind(r,50309))),y}()}}}]);
//# sourceMappingURL=8178.1fd11eb7.chunk.js.map