"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[8226],{90110:(e,t,i)=>{i.d(t,{c:()=>n});var r=i(62272),a=i(80613),s=i(64510);class n extends s.Z{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[r.U.bitmap],target:()=>this.children,drawPhase:a.jx.MAP});return[...super.prepareRenderPasses(e),t]}_manageFade(){this.children.reduce(((e,t)=>e+(t.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}},8226:(e,t,i)=>{i.r(t),i.d(t,{default:()=>J});var r=i(27366),a=i(52639),s=i(40281),n=i(42537),o=i(94172),l=i(49861),h=(i(25243),i(63780),i(93169),i(69912)),d=i(78983),c=i(34930),p=i(95986),u=i(77318),y=i(83978),m=i(7138),g=i(32718),x=i(66978),v=i(17314),w=i(90110),_=i(33624),b=i(10978),f=i(9229);let P=class extends m.Z{constructor(){super(...arguments),this.attached=!1,this.container=new _.W,this.updateRequested=!1,this.type="imagery",this._bitmapView=new w.c}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{(0,x.D_)(e)||g.Z.getLogger(this).error(e)}))}hitTest(e){return new a.Z({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new f.Z({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports((async e=>{var t;const{source:i}=e;if(!i||i instanceof ImageBitmap)return;const r=await this.layer.applyRenderer({extent:i.extent,pixelBlock:null!==(t=i.originalPixelBlock)&&void 0!==t?t:i.pixelBlock});i.filter=e=>this.layer.pixelFilter?this.layer.applyFilter(e):{...r,extent:i.extent}})).catch((e=>{(0,x.D_)(e)||g.Z.getLogger(this).error(e)}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),r=(0,v.Kh)(i,t);return null!=r?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(e,t,i,r){var a;(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const s=await this.layer.fetchImage(e,t,i,r);if(s.imageBitmap)return s.imageBitmap;const n=await this.layer.applyRenderer(s.pixelData,{signal:r.signal}),o=new b.Z(n.pixelBlock,null===(a=n.extent)||void 0===a?void 0:a.clone(),s.pixelData.pixelBlock);return o.filter=e=>this.layer.applyFilter(e),o}};(0,r._)([(0,l.Cb)()],P.prototype,"attached",void 0),(0,r._)([(0,l.Cb)()],P.prototype,"container",void 0),(0,r._)([(0,l.Cb)()],P.prototype,"layer",void 0),(0,r._)([(0,l.Cb)()],P.prototype,"strategy",void 0),(0,r._)([(0,l.Cb)()],P.prototype,"timeExtent",void 0),(0,r._)([(0,l.Cb)()],P.prototype,"view",void 0),(0,r._)([(0,l.Cb)()],P.prototype,"updateRequested",void 0),(0,r._)([(0,l.Cb)()],P.prototype,"updating",null),(0,r._)([(0,l.Cb)()],P.prototype,"type",void 0),P=(0,r._)([(0,h.j)("esri.views.2d.layers.imagery.ImageryView2D")],P);const C=P;var R=i(76200),S=i(53866),E=i(92975),Z=i(80394),V=i(64145),B=i(57874),D=i(80613),k=i(64510);class q extends k.Z{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(e){const t=e.registerRenderPass({name:"imagery (vf)",brushes:[B.Z],target:()=>this.children,drawPhase:D.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===D.jx.MAP&&this.symbolTypes.forEach((t=>{e.renderPass=t,super.doRender(e)}))}}var z=i(60831);let M=class extends m.Z{constructor(e){super(e),this._loading=null,this.update=(0,x.Ds)(((e,t)=>this._update(e,t).catch((e=>{(0,x.D_)(e)||g.Z.getLogger(this).error(e)}))))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:a}=e.state,s=new S.Z({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:a}),[n,o]=e.state.size;this._loading=this.fetchPixels(s,n,o,i);const l=await this._loading;this._addToDisplay(l,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(null==e.pixelBlock)return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:r,pixelBlock:a}=e,s=new z.F(a);s.offset=[0,0],s.symbolizerParameters=t,s.rawPixelData=e,s.invalidateVAO(),s.x=r.xmin,s.y=r.ymax,s.pixelRatio=i.pixelRatio,s.rotation=i.rotation,s.resolution=i.resolution,s.width=a.width*t.symbolTileSize,s.height=a.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(s)}};(0,r._)([(0,l.Cb)()],M.prototype,"fetchPixels",void 0),(0,r._)([(0,l.Cb)()],M.prototype,"container",void 0),(0,r._)([(0,l.Cb)()],M.prototype,"_loading",void 0),(0,r._)([(0,l.Cb)()],M.prototype,"updating",null),M=(0,r._)([(0,h.j)("esri.views.2d.layers.imagery.ImageryVFStrategy")],M);const T=M;let F=class extends m.Z{constructor(){super(...arguments),this.attached=!1,this.container=new q,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,r)=>{const a=await this._projectFullExtentPromise,{symbolTileSize:s}=this.layer.renderer,{extent:n,width:o,height:l}=(0,V.BH)(e,t,i,s,a);if(null!=a&&!a.intersects(e))return{extent:n,pixelBlock:null};const h={bbox:"".concat(n.xmin,", ").concat(n.ymin,", ").concat(n.xmax,", ").concat(n.ymax),exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:s,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(h)){const e=this.getPixelData();if(null!=e&&"".concat(e.extent.xmin,", ").concat(e.extent.ymin,", ").concat(e.extent.xmax,", ").concat(e.extent.ymax)===h.bbox)return e}const{pixelData:d}=await this.layer.fetchImage(n,o,l,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=h;const c=null===d||void 0===d?void 0:d.pixelBlock;return null==c?{extent:n,pixelBlock:null}:{extent:n,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?(0,V.KC)(c,"vector-uv"):c}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new T({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles((0,o.YP)((()=>this.layer.renderer),(e=>this._updateSymbolizerParams(e)),o.tX),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var e;const t=null===(e=this.container.children[0])||void 0===e?void 0:e.rawPixelData;if(this.updating||!t)return null;const{extent:i,pixelBlock:r}=t;return{extent:i,pixelBlock:r}}hitTest(e){return new a.Z({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams).catch((e=>{(0,x.D_)(e)||g.Z.getLogger(this).error(e)}))}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=this._dataParameters.symbolTileSize===e.symbolTileSize,a=this._dataParameters.bbox===e.bbox;return t&&i&&r&&a}async _getProjectedFullExtent(e){try{return(0,Z.tB)(this.layer.fullExtent,e)}catch(t){try{const t=(await(0,R.Z)(this.layer.url,{query:{option:"footprints",outSR:(0,E.B9)(e),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?S.Z.fromJSON(t):null}catch{return null}}}_updateSymbolizerParams(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};(0,r._)([(0,l.Cb)()],F.prototype,"attached",void 0),(0,r._)([(0,l.Cb)()],F.prototype,"container",void 0),(0,r._)([(0,l.Cb)()],F.prototype,"layer",void 0),(0,r._)([(0,l.Cb)()],F.prototype,"timeExtent",void 0),(0,r._)([(0,l.Cb)()],F.prototype,"type",void 0),(0,r._)([(0,l.Cb)()],F.prototype,"view",void 0),(0,r._)([(0,l.Cb)()],F.prototype,"updating",null),F=(0,r._)([(0,h.j)("esri.views.2d.layers.imagery.VectorFieldView2D")],F);const I=F;var A=i(10064),U=i(585),j=i(45948),H=i(86638),N=i(24405);const O=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)throw new A.Z("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:r}=i,a=(0,N.V5)(i,t);if(!r||null==a)throw new A.Z("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:r,popupTemplate:a});const s=await a.getRequiredFields(),n=new H.Z;n.timeExtent=this.timeExtent,n.geometry=e,n.outFields=s,n.outSpatialReference=e.spatialReference;const{resolution:o,spatialReference:l}=this.view,h="2d"===this.view.type?new U.Z(o,o,l):new U.Z(.5*o,.5*o,l),{returnTopmostRaster:d,showNoDataRecords:c}=a.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},p={returnDomainValues:!0,returnTopmostRaster:d,pixelSize:h,showNoDataRecords:c,signal:null!=t?t.signal:null};return i.queryVisibleRasters(n,p).then((e=>e))}canResume(){var e;return!!super.canResume()&&!(null!==(e=this.timeExtent)&&void 0!==e&&e.isEmpty)}};return(0,r._)([(0,l.Cb)()],t.prototype,"layer",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"suspended",void 0),(0,r._)([(0,l.Cb)(j.qG)],t.prototype,"timeExtent",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"view",void 0),t=(0,r._)([(0,h.j)("esri.views.layers.ImageryLayerView")],t),t};var W=i(67581),L=i(13107);let G=class extends(O((0,L.Z)((0,p.y)(W.Z)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new d.J,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}async hitTest(e,t){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){var t;null===(t=this.subview)||void 0===t||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new u.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new y.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([(0,o.YP)((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())}),o.Z_),(0,o.YP)((()=>this.timeExtent),(e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())}),o.Z_),this.layer.on("redraw",(()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())})),(0,o.YP)((()=>this.layer.renderer),(()=>this._setSubView()))])}detach(){var e,t;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),null!==(e=this.subview)&&void 0!==e&&e.destroy(),this.subview=null,null!==(t=this._highlightView)&&void 0!==t&&t.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:s.Z.isCollection(e)?e.at(0):e)instanceof a.Z))return(0,n.kB)();let i=[];return Array.isArray(e)||s.Z.isCollection(e)?i=e.map((e=>e.clone())):e instanceof a.Z&&(i=[e.clone()]),this._highlightGraphics.addMany(i),(0,n.kB)((()=>this._highlightGraphics.removeMany(i)))}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){var e;if(!this.view)return;const t=null===(e=this.layer.renderer)||void 0===e?void 0:e.type;let i="imagery";if("vector-field"===t?i="imageryVF":"flow"===t&&(i="flow"),this.subview){var r;const{type:e}=this.subview;if(e===i)return this._attachSubview(this.subview),void("flow"===e?this.subview.redrawOrRefetch():"imagery"===e&&"lerc"===this.layer.format?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),null===(r=this.subview)||void 0===r||r.destroy()}this.subview="imagery"===i?new C({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===i?new I({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new c.Z({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0))}_detachSubview(e){(null===e||void 0===e?void 0:e.attached)&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};(0,r._)([(0,l.Cb)()],G.prototype,"pixelData",null),(0,r._)([(0,l.Cb)()],G.prototype,"subview",void 0),G=(0,r._)([(0,h.j)("esri.views.2d.layers.ImageryLayerView2D")],G);const J=G},9229:(e,t,i)=>{i.d(t,{Z:()=>S});var r=i(27366),a=i(7138),s=(i(93169),i(66978)),n=i(49861),o=(i(25243),i(63780),i(69912)),l=i(65156),h=i(92975),d=i(22824);const c=Math.PI/180;function p(e){return e*c}function u(e,t){const i=p(t.rotation),r=Math.abs(Math.cos(i)),a=Math.abs(Math.sin(i)),[s,n]=t.size;return e[0]=Math.round(n*a+s*r),e[1]=Math.round(n*r+s*a),e}var y=i(45956),m=i(37995),g=i(73828);const x=(0,l.Ue)(),v=[0,0],w=new g.Z(0,0,0,0),_=2048,b=2048,f=!1,P=!1,C=!1;let R=class extends a.Z{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=C,this.imageMaxWidth=_,this.imageMaxHeight=b,this.imageRotationSupported=f,this.imageNormalizationSupported=P,this.update=(0,s.Ds)((async(e,t)=>{var i,r;if((0,s.k_)(t),!e.stationary||this.destroyed)return;const a=e.state,n=(0,h.C5)(a.spatialReference),o=this.hidpi?e.pixelRatio:1,l=this.imageNormalizationSupported&&a.worldScreenWidth&&a.worldScreenWidth<a.size[0],d=null!==(i=this.imageMaxWidth)&&void 0!==i?i:0,c=null!==(r=this.imageMaxHeight)&&void 0!==r?r:0;l?(v[0]=a.worldScreenWidth,v[1]=a.size[1]):this.imageRotationSupported?(v[0]=a.size[0],v[1]=a.size[1]):u(v,a);const p=Math.floor(v[0]*o)>d||Math.floor(v[1]*o)>c,y=n&&(a.extent.xmin<n.valid[0]||a.extent.xmax>n.valid[1]),m=!this.imageNormalizationSupported&&y,g=!p&&!m,x=this.imageRotationSupported?a.rotation:0,_=this.container.children.slice();if(g){const e=l?a.paddedViewState.center:a.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(a,v,e,a.resolution,x,o,t)}else{let e=Math.min(d,c);m&&(e=Math.min(a.worldScreenWidth,e)),this._imagePromise=this._tiledExport(a,e,o,t)}try{var b;const e=null!==(b=await this._imagePromise)&&void 0!==b?b:[];(0,s.k_)(t);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=e;for(const t of _)e.includes(t)||i.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)i.push(t.fadeIn());await Promise.all(i)}catch(w){this._imagePromise=null,(0,s.r9)(w)}}),5e3),this.updateExports=(0,s.Ds)((async e=>{const t=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;t.push(e(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,s.as)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,i,r,a,n){const o=await this.fetchSource(e,Math.floor(t*a),Math.floor(i*a),{rotation:r,pixelRatio:a,signal:n});(0,s.k_)(n);const l=new y.eY(null,!0);return l.x=e.xmin,l.y=e.ymax,l.resolution=e.width/t,l.rotation=r,l.pixelRatio=a,l.opacity=0,this.container.addChild(l),await l.setSourceAsync(o,n),(0,s.k_)(n),l}async _singleExport(e,t,i,r,a,s,n){!function(e,t,i,r){const[a,s]=t,[n,o]=r,l=.5*i;e[0]=a-l*n,e[1]=s-l*o,e[2]=a+l*n,e[3]=s+l*o}(x,i,r,t);const o=(0,l.HH)(x,e.spatialReference);return[await this._export(o,t[0],t[1],a,s,n)]}_tiledExport(e,t,i,r){const a=d.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),s=new m.Z(a),n=s.getTileCoverage(e);if(!n)return null;const o=[];return n.forEach(((a,n,h,d)=>{w.set(a,n,h,0),s.getTileBounds(x,w);const c=(0,l.HH)(x,e.spatialReference);o.push(this._export(c,t,t,0,i,r).then((e=>(0!==d&&(w.set(a,n,h,d),s.getTileBounds(x,w),e.x=x[0],e.y=x[3]),e))))})),Promise.all(o)}};(0,r._)([(0,n.Cb)()],R.prototype,"_imagePromise",void 0),(0,r._)([(0,n.Cb)()],R.prototype,"bitmaps",void 0),(0,r._)([(0,n.Cb)()],R.prototype,"container",void 0),(0,r._)([(0,n.Cb)()],R.prototype,"fetchSource",void 0),(0,r._)([(0,n.Cb)()],R.prototype,"hidpi",void 0),(0,r._)([(0,n.Cb)()],R.prototype,"imageMaxWidth",void 0),(0,r._)([(0,n.Cb)()],R.prototype,"imageMaxHeight",void 0),(0,r._)([(0,n.Cb)()],R.prototype,"imageRotationSupported",void 0),(0,r._)([(0,n.Cb)()],R.prototype,"imageNormalizationSupported",void 0),(0,r._)([(0,n.Cb)()],R.prototype,"requestUpdate",void 0),(0,r._)([(0,n.Cb)()],R.prototype,"updating",null),R=(0,r._)([(0,o.j)("esri.views.2d.layers.support.ExportStrategy")],R);const S=R}}]);
//# sourceMappingURL=8226.21b459e6.chunk.js.map