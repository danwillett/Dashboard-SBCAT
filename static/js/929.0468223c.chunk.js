"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[929],{21857:(e,t,i)=>{i.d(t,{CS:()=>g,Cw:()=>f,Yu:()=>w,j5:()=>m,lm:()=>y});var s=i(42265),n=i(19545),r=i(44055),a=i(76200),o=i(84652),l=i(35995),h=i(78952),u=i(41414),c=i(376),d=i(9014),p=i(49818);const _={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function f(e){var t;const i=e.folders||[],s=i.slice(),n=new Map,r=new Map,a=new Map,l=new Map,h=new Map,u={esriGeometryPoint:r,esriGeometryPolyline:a,esriGeometryPolygon:l};((null===(t=e.featureCollection)||void 0===t?void 0:t.layers)||[]).forEach((e=>{const t=(0,o.d9)(e);t.featureSet.features=[];const i=e.featureSet.geometryType;n.set(i,t);const s=e.layerDefinition.objectIdField;"esriGeometryPoint"===i?v(r,s,e.featureSet.features):"esriGeometryPolyline"===i?v(a,s,e.featureSet.features):"esriGeometryPolygon"===i&&v(l,s,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{h.set(e.id,e)})),i.forEach((t=>{t.networkLinkIds.forEach((i=>{const n=function(e,t,i){const s=function(e,t){let i;return t.some((t=>t.id===e&&(i=t,!0))),i}(e,i);return s&&(s.parentFolderId=t,s.networkLink=s),s}(i,t.id,e.networkLinks);n&&s.push(n)}))})),s.forEach((e=>{if(e.featureInfos){e.points=(0,o.d9)(n.get("esriGeometryPoint")),e.polylines=(0,o.d9)(n.get("esriGeometryPolyline")),e.polygons=(0,o.d9)(n.get("esriGeometryPolygon")),e.mapImages=[];for(const i of e.featureInfos)switch(i.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{var t;const s=u[i.type].get(i.id);s&&(null===(t=e[_[i.type]])||void 0===t||t.featureSet.features.push(s));break}case"GroundOverlay":{const t=h.get(i.id);t&&e.mapImages.push(t);break}}e.fullExtent=y([e])}}));const c=y(s);return{folders:i,sublayers:s,extent:c}}function g(e,t,i,r){const o=null===n.id||void 0===n.id?void 0:n.id.findCredential(e);e=(0,l.fl)(e,{token:null===o||void 0===o?void 0:o.token});const h=s.default.kmlServiceUrl;return(0,a.Z)(h,{query:{url:e,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:r})}function m(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];const n=[],r={},a=t.sublayers,o=new Set(t.folders.map((e=>e.id)));return a.forEach((t=>{const a=new e;if(i?a.read(t,i):a.read(t),s.length&&o.has(a.id)&&(a.visible=s.includes(a.id)),r[t.id]=a,null!=t.parentFolderId&&-1!==t.parentFolderId){var l;const e=r[t.parentFolderId];e.sublayers||(e.sublayers=[]),null===(l=e.sublayers)||void 0===l||l.unshift(a)}else n.unshift(a)})),n}function v(e,t,i){i.forEach((i=>{e.set(i.attributes[t],i)}))}async function w(e){const t=p.Z.fromJSON(e.featureSet).features,i=e.layerDefinition,s=(0,d.i)(i.drawingInfo.renderer),n=r.Z.fromJSON(e.popupInfo),a=[];for(const r of t){const e=await s.getSymbolAsync(r);r.symbol=e,r.popupTemplate=n,r.visible=!0,a.push(r)}return a}function y(e){const t=(0,u.Ue)(u.G_),i=(0,u.Ue)(u.G_);for(const a of e){var s,n,r;if(null!==(s=a.polygons)&&void 0!==s&&null!==(s=s.featureSet)&&void 0!==s&&s.features)for(const e of a.polygons.featureSet.features)(0,c.Yg)(t,e.geometry),(0,u.TC)(i,t);if(null!==(n=a.polylines)&&void 0!==n&&null!==(n=n.featureSet)&&void 0!==n&&n.features)for(const e of a.polylines.featureSet.features)(0,c.Yg)(t,e.geometry),(0,u.TC)(i,t);if(null!==(r=a.points)&&void 0!==r&&null!==(r=r.featureSet)&&void 0!==r&&r.features)for(const e of a.points.featureSet.features)(0,c.Yg)(t,e.geometry),(0,u.TC)(i,t);if(a.mapImages)for(const e of a.mapImages)(0,c.Yg)(t,e.extent),(0,u.TC)(i,t)}return(0,u.fS)(i,u.G_)?void 0:{xmin:i[0],ymin:i[1],zmin:i[2],xmax:i[3],ymax:i[4],zmax:i[5],spatialReference:h.Z.WGS84}}},45956:(e,t,i)=>{i.d(t,{JZ:()=>p,RL:()=>_,eY:()=>f});var s=i(66978),n=i(22753),r=i(23588),a=i(15245),o=i(87422),l=i(10978),h=i(83826),u=i(8548),c=i(57808),d=i(52311);function p(e){return e&&"render"in e}function _(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class f extends o.s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const i=new AbortController,n=(0,s.hh)();return(0,s.$F)(t,(()=>i.abort())),(0,s.$F)(i,(e=>n.reject(e))),this._uploadStatus={controller:i,resolver:n},this.source=e,n.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}updateTransitionProperties(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(e,t)}setTransform(e){const t=(0,n.g)(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/e.resolution,o=r*this.width,l=r*this.height,h=Math.PI*this.rotation/180;(0,n.h)(t,t,(0,a.f)(i,s)),(0,n.h)(t,t,(0,a.f)(o/2,l/2)),(0,n.r)(t,t,-h),(0,n.h)(t,t,(0,a.f)(-o/2,-l/2)),(0,n.l)(t,t,(0,a.f)(o,l)),(0,n.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture(e){let{context:t,painter:i}=e;if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(t)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const n=function(e){var t;return p(e)?e instanceof l.Z?null===(t=e.getRenderedRasterPixels())||void 0===t?void 0:t.renderedRasterPixels:_(e):e}(this.source);try{if(null!=this._uploadStatus){const{controller:e,resolver:t}=this._uploadStatus,s={signal:e.signal},{width:r,height:a}=this,o=this._texture,l=i.textureUploadManager;await l.enqueueTextureUpdate({data:n,texture:o,width:r,height:a},s),t.resolve(),this._uploadStatus=null}else this._texture.setData(n);this.ready()}catch(r){(0,s.H9)(r)}}onDetach(){this.destroy()}_createTransforms(){return{dvs:(0,r.c)()}}_createTexture(e){const t=this.immutable&&e.type===h.zO.WEBGL2,i=new d.X;return i.internalFormat=t?u.lP.RGBA8:u.VI.RGBA,i.wrapMode=u.e8.CLAMP_TO_EDGE,i.isImmutable=t,i.width=this._sourceWidth,i.height=this._sourceHeight,new c.x(e,i)}}},90110:(e,t,i)=>{i.d(t,{c:()=>a});var s=i(62272),n=i(80613),r=i(64510);class a extends r.Z{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[s.U.bitmap],target:()=>this.children,drawPhase:n.jx.MAP});return[...super.prepareRenderPasses(e),t]}_manageFade(){this.children.reduce(((e,t)=>e+(t.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}},10978:(e,t,i)=>{i.d(t,{Z:()=>s});class s{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(e){var t;const i=this.pixelBlock;if(null==i)return;const s=this.filter({extent:this.extent,pixelBlock:null!==(t=this.originalPixelBlock)&&void 0!==t?t:i});if(null==s.pixelBlock)return;s.pixelBlock.maskIsAlpha&&(s.pixelBlock.premultiplyAlpha=!0);const n=s.pixelBlock.getAsRGBA(),r=e.createImageData(s.pixelBlock.width,s.pixelBlock.height);r.data.set(n),e.putImageData(r,0,0)}getRenderedRasterPixels(){const e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==e.pixelBlock?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}},6326:(e,t,i)=>{i.r(t),i.d(t,{default:()=>U});var s=i(27366),n=i(19545),r=i(40281),a=i(92026),o=i(94172),l=i(35995),h=i(49861),u=(i(25243),i(63780),i(93169),i(69912)),c=i(53866),d=i(45925),p=i(78952),_=i(21857),f=i(23084),g=i(78983),m=i(45956),v=i(90110),w=i(95986),y=i(75391),x=i(77318),b=i(67581),S=i(76200),T=i(585),I=i(80394),E=i(25866),C=i(40658),A=i(8548),O=i(53634),R=i(48673),P=i(20396),B=i(57808),V=i(52311);class D{constructor(e){if(this._ownsRctx=!1,e)this._ownsRctx=!1,this._rctx=e;else{if(D._instance)return D._instanceRefCount++,D._instance;D._instanceRefCount=1,D._instance=this,this._ownsRctx=!0;const e=document.createElement("canvas").getContext("webgl");e.getExtension("OES_texture_float"),this._rctx=new P.x(e,{})}const t=(0,C.s)("raster/reproject","raster/reproject",new Map([["a_position",0]]),{applyProjection:!0,bilinear:!1,bicubic:!1});this._program=this._rctx.programCache.acquire(t.shaders.vertexShader,t.shaders.fragmentShader,t.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new E.Z(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=(0,d.project)(e.extent,t),n=new T.Z({x:(e.extent.xmax-e.extent.xmin)/e.texture.descriptor.width,y:(e.extent.ymax-e.extent.ymin)/e.texture.descriptor.height,spatialReference:e.extent.spatialReference}),{x:r,y:a}=(0,I.VO)(n,t,e.extent);let o=(r+a)/2;const l=Math.round((s.xmax-s.xmin)/o),h=Math.round((s.ymax-s.ymin)/o);o=(s.width/l+s.height/h)/2;const u=new T.Z({x:o,y:o,spatialReference:s.spatialReference}),c=(0,I.Qp)({projectedExtent:s,srcBufferExtent:e.extent,pixelSize:u,hasWrapAround:!0,spacing:[16,16]}),p=(0,R.Br)(this._rctx,c),_=new V.X(l,h);_.wrapMode=A.e8.CLAMP_TO_EDGE;const f=new O.X(this._rctx,_);this._rctx.bindFramebuffer(f),this._rctx.setViewport(0,0,l,h),this._rctx.useProgram(this._program),this._rctx.bindTexture(e.texture,0),this._rctx.bindTexture(p,1),this._quad.bind();const{width:g=0,height:m=0}=e.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",g,m),this._program.setUniform2fv("u_transformSpacing",c.spacing),this._program.setUniform2fv("u_transformGridSize",c.size),this._program.setUniform2f("u_targetImageSize",l,h),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),p.dispose(),i){const{width:e,height:t}=f,i=new ImageData(null!==e&&void 0!==e?e:0,null!==t&&void 0!==t?t:0);f.readPixels(0,0,null!==e&&void 0!==e?e:0,null!==t&&void 0!==t?t:0,A.VI.RGBA,A.Br.UNSIGNED_BYTE,i.data);const n=f.detachColorTexture(A.VY.COLOR_ATTACHMENT0);return f.dispose(),{texture:n,extent:s,imageData:i}}const v=f.detachColorTexture(A.VY.COLOR_ATTACHMENT0);return f.dispose(),{texture:v,extent:s}}reprojectBitmapData(e,t){const i=(0,m.JZ)(e.bitmapData)?(0,m.RL)(e.bitmapData):e.bitmapData,s=new V.X;s.wrapMode=A.e8.CLAMP_TO_EDGE,s.width=e.bitmapData.width,s.height=e.bitmapData.height;const n=new B.x(this._rctx,s,i),r=this.reprojectTexture({texture:n,extent:e.extent},t,!0);r.texture.dispose();const a=document.createElement("canvas"),o=r.imageData;return a.width=o.width,a.height=o.height,a.getContext("2d").putImageData(o,0,0),{bitmapData:a,extent:r.extent}}async loadAndReprojectBitmapData(e,t,i){const s=(await(0,S.Z)(e,{responseType:"image"})).data,n=document.createElement("canvas");n.width=s.width,n.height=s.height;const r=n.getContext("2d");r.drawImage(s,0,0);const a=r.getImageData(0,0,n.width,n.height);if(t.spatialReference.equals(i))return{bitmapData:a,extent:t};const o=this.reprojectBitmapData({bitmapData:a,extent:t},i);return{bitmapData:o.bitmapData,extent:o.extent}}destroy(){this._ownsRctx?(D._instanceRefCount--,0===D._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),D._instance=null)):(this._quad.dispose(),this._program.dispose())}}D._instanceRefCount=0;class M{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let k=class extends((0,w.y)(b.Z)){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new v.c,this._kmlVisualData=new M,this._fetchController=null,this.allVisiblePoints=new g.J,this.allVisiblePolylines=new g.J,this.allVisiblePolygons=new g.J,this.allVisibleMapImages=new r.Z}async hitTest(e,t){var i,s,n;const r=this.layer;return[null===(i=this._pointsView)||void 0===i?void 0:i.hitTest(e),null===(s=this._polylinesView)||void 0===s?void 0:s.hitTest(e),null===(n=this._polygonsView)||void 0===n?void 0:n.hitTest(e)].flat().filter(Boolean).map((t=>(t.layer=r,t.sourceLayer=r,{type:"graphic",graphic:t,layer:r,mapPoint:e})))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new x.Z({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new y.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new x.Z({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new y.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new x.Z({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new y.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)))})),(0,o.YP)((()=>this.layer.visibleSublayers),(e=>{for(const[t,i]of this._kmlVisualData.allSublayers)i.visibility=0;for(const t of e){const e=this._kmlVisualData.allSublayers.get(t.id);e&&(e.visibility=1)}this._refreshCollections()}))]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new D}detach(){this._fetchController=(0,a.IM)(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=(0,a.SC)(this._polygonsView),this._polylinesView=(0,a.SC)(this._polylinesView),this._pointsView=(0,a.SC)(this._pointsView),this._imageReprojector=(0,a.SC)(this._imageReprojector)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){var t,i;((null===(t=this.view.spatialReference)||void 0===t?void 0:t.isWGS84)||(null===(i=this.view.spatialReference)||void 0===i?void 0:i.isWebMercator))&&this._imageReprojector.loadAndReprojectBitmapData(e.href,c.Z.fromJSON(e.extent),this.view.spatialReference).then((t=>{const i=new m.eY(t.bitmapData);i.x=t.extent.xmin,i.y=t.extent.ymax,i.resolution=t.extent.width/t.bitmapData.width,i.rotation=e.rotation,this._mapImageContainer.addChild(i),this._bitmapIndex.set(e,i)}))}async _getViewDependentUrl(e,t){const{viewFormat:i,viewBoundScale:s,httpQuery:r}=e;if(null!=i){if(null==t)throw new Error("Loading this network link requires a view state.");let a;if(await(0,d.load)(),null!=s&&1!==s){const e=new c.Z(t.extent);e.expand(s),a=e}else a=t.extent;a=(0,d.project)(a,p.Z.WGS84);const o=(0,d.project)(a,p.Z.WebMercator),h=a.xmin,u=a.xmax,_=a.ymin,g=a.ymax,m=t.size[0]*t.pixelRatio,v=t.size[1]*t.pixelRatio,w=Math.max(o.width,o.height),y={"[bboxWest]":h.toString(),"[bboxEast]":u.toString(),"[bboxSouth]":_.toString(),"[bboxNorth]":g.toString(),"[lookatLon]":a.center.x.toString(),"[lookatLat]":a.center.y.toString(),"[lookatRange]":w.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":a.center.x.toString(),"[lookatTerrainLat]":a.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":a.center.x.toString(),"[cameraLat]":a.center.y.toString(),"[cameraAlt]":w.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":m.toString(),"[vertPixels]":v.toString(),"[terrainEnabled]":"0","[clientVersion]":n.i8,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},x=e=>{for(const t in e){let i;for(i in y)e[t]=e[t].replace(i,y[i])}},b=(0,l.u0)(i);x(b);let S={};null!=r&&(S=(0,l.u0)(r),x(S));const T=(0,f.en)(e.href);return T.query={...T.query,...b,...S},"".concat(T.path,"?").concat((0,l.B7)(b))}return e.href}async _fetchService(e){const t=new M;await this._loadVisualData(this.layer.url,t,e),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((e=>{let{item:t}=e;return t}))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((e=>{let{item:t}=e;return t}))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((e=>{let{item:t}=e;return t}))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((e=>{let{item:t}=e;return t})))}_isSublayerVisible(e){const t=this._kmlVisualData.allSublayers.get(e);return!(null===t||void 0===t||!t.visibility)&&(-1===t.parentFolderId||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(e,t,i){return this._fetchParsedKML(e,i).then((async e=>{for(const s of e.sublayers){t.allSublayers.set(s.id,s);const e=s.points?await(0,_.Yu)(s.points):[],n=s.polylines?await(0,_.Yu)(s.polylines):[],r=s.polygons?await(0,_.Yu)(s.polygons):[],a=s.mapImages||[];if(t.allPoints.push(...e.map((e=>({item:e,sublayerId:s.id})))),t.allPolylines.push(...n.map((e=>({item:e,sublayerId:s.id})))),t.allPolygons.push(...r.map((e=>({item:e,sublayerId:s.id})))),t.allMapImages.push(...a.map((e=>({item:e,sublayerId:s.id})))),s.networkLink){const e=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(e,t,i)}}}))}_fetchParsedKML(e,t){return(0,_.CS)(e,this.layer.spatialReference,this.layer.refreshInterval,t).then((e=>(0,_.Cw)(e.data)))}_removeMapImage(e){const t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}};(0,s._)([(0,h.Cb)()],k.prototype,"_pointsView",void 0),(0,s._)([(0,h.Cb)()],k.prototype,"_polylinesView",void 0),(0,s._)([(0,h.Cb)()],k.prototype,"_polygonsView",void 0),(0,s._)([(0,h.Cb)()],k.prototype,"updating",void 0),k=(0,s._)([(0,u.j)("esri.views.2d.layers.KMLLayerView2D")],k);const U=k},98634:(e,t,i)=>{i.d(t,{H:()=>n,K:()=>s});const s=class{};function n(e){let t="";for(let i=0;i<(arguments.length<=1?0:arguments.length-1);i++)t+=e[i]+(i+1<1||arguments.length<=i+1?void 0:arguments[i+1]);return t+=e[e.length-1],t}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(n||(n={}))},78041:(e,t,i)=>{i.d(t,{Bh:()=>p,IB:()=>l,j7:()=>h,je:()=>d,ve:()=>u,wu:()=>a});var s=i(25920),n=i(8548),r=i(36207);const a=(0,r.wK)(n.zi.SRC_ALPHA,n.zi.ONE,n.zi.ONE_MINUS_SRC_ALPHA,n.zi.ONE_MINUS_SRC_ALPHA),o=(0,r.if)(n.zi.ONE,n.zi.ONE),l=(0,r.if)(n.zi.ZERO,n.zi.ONE_MINUS_SRC_ALPHA);function h(e){return e===s.A.FrontFace?null:e===s.A.Alpha?l:o}const u=5e5,c={factor:-1,units:-2};function d(e){return e?c:null}function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.wb.LESS;return e===s.A.NONE||e===s.A.FrontFace?t:n.wb.LEQUAL}},25920:(e,t,i)=>{var s;i.d(t,{A:()=>s}),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(s||(s={}))},68401:(e,t,i)=>{var s,n,r,a,o,l,h,u,c;i.d(t,{Gv:()=>n,Iq:()=>u,JJ:()=>h,Rw:()=>a,Ti:()=>c,V_:()=>l,Vr:()=>s,hU:()=>o}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(s||(s={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(r||(r={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(o||(o={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(l||(l={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(h||(h={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(u||(u={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(c||(c={}))},81152:(e,t,i)=>{i.d(t,{G:()=>n});var s=i(92026);class n{constructor(){this._result=!1}dispose(){this._program=(0,s.M2)(this._program)}get result(){return null!=this._program&&(this._result=this._test(this._program),this.dispose()),this._result}}},40235:(e,t,i)=>{i.d(t,{mO:()=>a});var s=i(30308);class n{constructor(e,t,i,s,n,r,a,o,l){this.createQuery=e,this.deleteQuery=t,this.resultAvailable=i,this.getResult=s,this.disjoint=n,this.beginTimeElapsed=r,this.endTimeElapsed=a,this.createTimestamp=o,this.timestampBits=l}}let r=!1;function a(e,t){if(t.disjointTimerQuery)return null;let i=e.getExtension("EXT_disjoint_timer_query_webgl2");return i&&(0,s.Z)(e)?new n((()=>e.createQuery()),(t=>{e.deleteQuery(t),r=!1}),(t=>e.getQueryParameter(t,e.QUERY_RESULT_AVAILABLE)),(t=>e.getQueryParameter(t,e.QUERY_RESULT)),(()=>e.getParameter(i.GPU_DISJOINT_EXT)),(t=>{r||(r=!0,e.beginQuery(i.TIME_ELAPSED_EXT,t))}),(()=>{e.endQuery(i.TIME_ELAPSED_EXT),r=!1}),(e=>i.queryCounterEXT(e,i.TIMESTAMP_EXT)),(()=>e.getQuery(i.TIMESTAMP_EXT,i.QUERY_COUNTER_BITS_EXT))):(i=e.getExtension("EXT_disjoint_timer_query"),i?new n((()=>i.createQueryEXT()),(e=>{i.deleteQueryEXT(e),r=!1}),(e=>i.getQueryObjectEXT(e,i.QUERY_RESULT_AVAILABLE_EXT)),(e=>i.getQueryObjectEXT(e,i.QUERY_RESULT_EXT)),(()=>e.getParameter(i.GPU_DISJOINT_EXT)),(e=>{r||(r=!0,i.beginQueryEXT(i.TIME_ELAPSED_EXT,e))}),(()=>{i.endQueryEXT(i.TIME_ELAPSED_EXT),r=!1}),(e=>i.queryCounterEXT(e,i.TIMESTAMP_EXT)),(()=>i.getQueryEXT(i.TIMESTAMP_EXT,i.QUERY_COUNTER_BITS_EXT))):null)}},48673:(e,t,i)=>{i.d(t,{Br:()=>h,Fm:()=>f,N9:()=>m,RA:()=>v,Tc:()=>c,Ue:()=>d,iC:()=>u,s9:()=>l,v:()=>g,xW:()=>_,zS:()=>p});var s=i(6394),n=i(83826),r=i(8548),a=i(57808),o=i(52311);function l(e,t){var i;let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"nearest";const l=!(arguments.length>3&&void 0!==arguments[3]&&arguments[3]&&"u8"===t.pixelType),h=l?r.Br.FLOAT:r.Br.UNSIGNED_BYTE,u=null==t.pixels||0===t.pixels.length?null:l?t.getAsRGBAFloat():t.getAsRGBA(),c=null===(i=e.capabilities.textureFloat)||void 0===i?void 0:i.textureFloatLinear,d=new o.X;return d.width=t.width,d.height=t.height,d.internalFormat=e.type===n.zO.WEBGL2&&l?r.lP.RGBA32F:r.VI.RGBA,d.samplingMode=!c||"bilinear"!==s&&"cubic"!==s?r.cw.NEAREST:r.cw.LINEAR,d.dataType=h,d.wrapMode=r.e8.CLAMP_TO_EDGE,new a.x(e,d,u)}function h(e,t){const{spacing:i,offsets:s,coefficients:l,size:[h,u]}=t,c=i[0]>1,d=new o.X;d.width=c?4*h:h,d.height=u,d.internalFormat=e.type===n.zO.WEBGL2?r.lP.RGBA32F:r.VI.RGBA,d.dataType=r.Br.FLOAT,d.samplingMode=r.cw.NEAREST,d.wrapMode=r.e8.CLAMP_TO_EDGE;const p=new Float32Array(c?h*u*16:2*s.length);if(c&&null!=l)for(let n=0,r=0;n<l.length;n++)p[r++]=l[n],n%3==2&&(p[r++]=1);else for(let n=0;n<u;n++)for(let e=0;e<h;e++){const t=4*(n*h+e),i=2*(e*u+n);p[t]=s[i],p[t+1]=s[i+1],p[t+3]=-1===s[i]?0:1}return new a.x(e,d,p)}function u(e,t){const i=new o.X;return i.internalFormat=r.VI.RGBA,i.width=t.length/4,i.height=1,i.samplingMode=r.cw.NEAREST,i.wrapMode=r.e8.CLAMP_TO_EDGE,new a.x(e,i,t)}function c(e,t,i){return{u_flipY:!(arguments.length>4&&void 0!==arguments[4])||arguments[4],u_applyTransform:!!e,u_opacity:arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,u_transformSpacing:e?e.spacing:s.Z,u_transformGridSize:e?e.size:s.Z,u_targetImageSize:t,u_srcImageSize:i}}function d(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:0}}function p(e,t){return{u_scale:e,u_offset:t}}function _(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function f(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function g(e,t){const i=e.gl,s=t.glName,n=new Map;if(null==s)return n;const r=i.getProgramParameter(s,i.ACTIVE_UNIFORMS);let a;for(let o=0;o<r;o++)a=i.getActiveUniform(s,o),a&&n.set(a.name,{location:i.getUniformLocation(s,a.name),info:a});return n}function m(e,t,i){Object.keys(i).forEach((s=>{const n=t.get(s)||t.get(s+"[0]");n&&function(e,t,i,s){if(null===s||null==i)return!1;const{info:n}=s;switch(n.type){case r.Se.FLOAT:n.size>1?e.setUniform1fv(t,i):e.setUniform1f(t,i);break;case r.Se.FLOAT_VEC2:e.setUniform2fv(t,i);break;case r.Se.FLOAT_VEC3:e.setUniform3fv(t,i);break;case r.Se.FLOAT_VEC4:e.setUniform4fv(t,i);break;case r.Se.FLOAT_MAT3:e.setUniformMatrix3fv(t,i);break;case r.Se.FLOAT_MAT4:e.setUniformMatrix4fv(t,i);break;case r.Se.INT:n.size>1?e.setUniform1iv(t,i):e.setUniform1i(t,i);break;case r.Se.BOOL:e.setUniform1i(t,i?1:0);break;case r.Se.INT_VEC2:case r.Se.BOOL_VEC2:e.setUniform2iv(t,i);break;case r.Se.INT_VEC3:case r.Se.BOOL_VEC3:e.setUniform3iv(t,i);break;case r.Se.INT_VEC4:case r.Se.BOOL_VEC4:e.setUniform4iv(t,i);break;default:return!1}}(e,s,i[s],n)}))}function v(e,t,i,s){i.length===s.length&&(s.some((e=>null==e))||i.some((e=>null==e))||i.forEach(((i,n)=>{t.setUniform1i(i,n),e.bindTexture(s[n],n)})))}},36207:(e,t,i)=>{i.d(t,{BK:()=>c,LZ:()=>u,if:()=>r,jp:()=>z,sm:()=>x,wK:()=>a,zp:()=>h});var s=i(68401),n=i(8548);function r(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.db.ADD,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0,0];return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:i,opAlpha:i,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}function a(e,t,i,s){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.db.ADD,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:n.db.ADD,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[0,0,0,0];return{srcRgb:e,srcAlpha:t,dstRgb:i,dstAlpha:s,opRgb:r,opAlpha:a,color:{r:o[0],g:o[1],b:o[2],a:o[3]}}}const o={face:n.LR.BACK,mode:n.Wf.CCW},l={face:n.LR.FRONT,mode:n.Wf.CCW},h=e=>e===s.Vr.Back?o:e===s.Vr.Front?l:null,u={zNear:0,zFar:1},c={r:!0,g:!0,b:!0,a:!0};function d(e){return T.intern(e)}function p(e){return E.intern(e)}function _(e){return A.intern(e)}function f(e){return R.intern(e)}function g(e){return B.intern(e)}function m(e){return D.intern(e)}function v(e){return k.intern(e)}function w(e){return L.intern(e)}function y(e){return F.intern(e)}function x(e){return W.intern(e)}class b{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){var t;if(!e)return null;const i=this._makeKey(e),s=this._interns;return s.has(i)||s.set(i,this._makeRef(e)),null!==(t=s.get(i))&&void 0!==t?t:null}}function S(e){return"["+e.join(",")+"]"}const T=new b(I,(e=>({__tag:"Blending",...e})));function I(e){return e?S([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const E=new b(C,(e=>({__tag:"Culling",...e})));function C(e){return e?S([e.face,e.mode]):null}const A=new b(O,(e=>({__tag:"PolygonOffset",...e})));function O(e){return e?S([e.factor,e.units]):null}const R=new b(P,(e=>({__tag:"DepthTest",...e})));function P(e){return e?S([e.func]):null}const B=new b(V,(e=>({__tag:"StencilTest",...e})));function V(e){return e?S([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const D=new b(M,(e=>({__tag:"DepthWrite",...e})));function M(e){return e?S([e.zNear,e.zFar]):null}const k=new b(U,(e=>({__tag:"ColorWrite",...e})));function U(e){return e?S([e.r,e.g,e.b,e.a]):null}const L=new b(N,(e=>({__tag:"StencilWrite",...e})));function N(e){return e?S([e.mask]):null}const F=new b(G,(e=>({__tag:"DrawBuffers",...e})));function G(e){return e?S(e.buffers):null}const W=new b((function(e){return e?S([I(e.blending),C(e.culling),O(e.polygonOffset),P(e.depthTest),V(e.stencilTest),M(e.depthWrite),U(e.colorWrite),N(e.stencilWrite),G(e.drawBuffers)]):null}),(e=>({blending:d(e.blending),culling:p(e.culling),polygonOffset:_(e.polygonOffset),depthTest:f(e.depthTest),stencilTest:g(e.stencilTest),depthWrite:m(e.depthWrite),colorWrite:v(e.colorWrite),stencilWrite:w(e.stencilWrite),drawBuffers:y(e.drawBuffers)})));class z{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._setDrawBuffers(e.drawBuffers),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(e){this._drawBuffers=this._setSubState(e,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(e,t,i,s){return(i||e!==t)&&(s(e),this._pipelineInvalid=!0),e}}},39416:(e,t,i)=>{i.d(t,{d:()=>c});var s=i(61441),n=i(44070),r=i(8548),a=i(53634),o=i(57808),l=i(52311),h=i(45412),u=i(81152);class c extends u.G{constructor(e){super(),this._rctx=e;this._program=e.programCache.acquire("\n    precision highp float;\n\n    attribute vec2 a_pos;\n    varying vec2 v_uv;\n\n    void main() {\n      v_uv = a_pos;\n      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ","\n    precision highp float;\n\n    varying vec2 v_uv;\n\n    uniform sampler2D u_texture;\n\n    void main() {\n      gl_FragColor = texture2D(u_texture, v_uv);\n    }\n    ",new Map([["a_pos",0]]))}dispose(){super.dispose()}_test(e){const t=this._rctx;if(!t.gl)return e.dispose(),!0;const i=new l.X(1);i.wrapMode=r.e8.CLAMP_TO_EDGE,i.samplingMode=r.cw.NEAREST;const u=new a.X(t,i),c=n.f.createVertex(t,r.l1.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),p=new h.U(t,new Map([["a_pos",0]]),s.cD,{geometry:c}),_=new l.X;_.samplingMode=r.cw.LINEAR,_.wrapMode=r.e8.CLAMP_TO_EDGE;const f=new o.x(t,_,d);t.useProgram(e),t.bindTexture(f,0),e.setUniform1i("u_texture",0);const g=t.getBoundFramebufferObject(),{x:m,y:v,width:w,height:y}=t.getViewport();t.bindFramebuffer(u),t.setViewport(0,0,1,1),t.setClearColor(0,0,0,0),t.setBlendingEnabled(!1),t.clearSafe(r.lk.COLOR_BUFFER_BIT),t.bindVAO(p),t.drawArrays(r.MX.TRIANGLE_STRIP,0,4);const x=new Uint8Array(4);return u.readPixels(0,0,1,1,r.VI.RGBA,r.Br.UNSIGNED_BYTE,x),p.dispose(),u.dispose(),f.dispose(),t.setViewport(m,v,w,y),t.bindFramebuffer(g),255!==x[0]}}const d=new Image;d.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",d.width=5,d.height=5,d.decode()}}]);
//# sourceMappingURL=929.0468223c.chunk.js.map