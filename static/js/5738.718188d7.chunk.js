"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[5738],{45956:(e,t,i)=>{i.d(t,{JZ:()=>p,RL:()=>f,eY:()=>g});var s=i(66978),r=i(22753),l=i(23588),a=i(15245),h=i(87422),n=i(10978),o=i(83826),u=i(8548),d=i(57808),c=i(52311);function p(e){return e&&"render"in e}function f(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class g extends h.s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const i=new AbortController,r=(0,s.hh)();return(0,s.$F)(t,(()=>i.abort())),(0,s.$F)(i,(e=>r.reject(e))),this._uploadStatus={controller:i,resolver:r},this.source=e,r.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}updateTransitionProperties(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(e,t)}setTransform(e){const t=(0,r.g)(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),l=this.resolution/this.pixelRatio/e.resolution,h=l*this.width,n=l*this.height,o=Math.PI*this.rotation/180;(0,r.h)(t,t,(0,a.f)(i,s)),(0,r.h)(t,t,(0,a.f)(h/2,n/2)),(0,r.r)(t,t,-o),(0,r.h)(t,t,(0,a.f)(-h/2,-n/2)),(0,r.l)(t,t,(0,a.f)(h,n)),(0,r.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture(e){let{context:t,painter:i}=e;if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(t)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const r=function(e){var t;return p(e)?e instanceof n.Z?null===(t=e.getRenderedRasterPixels())||void 0===t?void 0:t.renderedRasterPixels:f(e):e}(this.source);try{if(null!=this._uploadStatus){const{controller:e,resolver:t}=this._uploadStatus,s={signal:e.signal},{width:l,height:a}=this,h=this._texture,n=i.textureUploadManager;await n.enqueueTextureUpdate({data:r,texture:h,width:l,height:a},s),t.resolve(),this._uploadStatus=null}else this._texture.setData(r);this.ready()}catch(l){(0,s.H9)(l)}}onDetach(){this.destroy()}_createTransforms(){return{dvs:(0,l.c)()}}_createTexture(e){const t=this.immutable&&e.type===o.zO.WEBGL2,i=new c.X;return i.internalFormat=t?u.lP.RGBA8:u.VI.RGBA,i.wrapMode=u.e8.CLAMP_TO_EDGE,i.isImmutable=t,i.width=this._sourceWidth,i.height=this._sourceHeight,new d.x(e,i)}}},9849:(e,t,i)=>{i.d(t,{s:()=>d});var s=i(65156),r=i(23588),l=i(45956),a=i(72900);class h extends a.I{constructor(e,t,i,s,r,a){let h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;super(e,t,i,s,r,a),this.bitmap=new l.eY(h),this.bitmap.coordScale=[r,a],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){this.bitmap.beforeRender(e),super.beforeRender(e)}afterRender(e){this.bitmap.afterRender(e),super.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:(0,r.c)(),tileMat3:(0,r.c)()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var n=i(62272),o=i(80613),u=i(55067);class d extends u.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const t=this._tileInfoView.getTileBounds((0,s.Ue)(),e),i=this._tileInfoView.getTileResolution(e.level),[r,l]=this._tileInfoView.tileInfo.size;return new h(e,i,t[0],t[3],r,l)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[n.U.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:o.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===o.jx.MAP&&super.doRender(e)}}},10978:(e,t,i)=>{i.d(t,{Z:()=>s});class s{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(e){var t;const i=this.pixelBlock;if(null==i)return;const s=this.filter({extent:this.extent,pixelBlock:null!==(t=this.originalPixelBlock)&&void 0!==t?t:i});if(null==s.pixelBlock)return;s.pixelBlock.maskIsAlpha&&(s.pixelBlock.premultiplyAlpha=!0);const r=s.pixelBlock.getAsRGBA(),l=e.createImageData(s.pixelBlock.width,s.pixelBlock.height);l.data.set(r),e.putImageData(l,0,0)}getRenderedRasterPixels(){const e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==e.pixelBlock?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}},55067:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(93169),r=i(80613),l=i(64510),a=i(52424),h=i(40655);const n=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class o extends l.Z{constructor(e){super(),this._tileInfoView=e}renderChildren(e){this.sortChildren(n),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[h.Z],drawPhase:r.jx.DEBUG|r.jx.MAP|r.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,s.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[a.Z],drawPhase:r.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const i of this.children)i.stencilRef=t++}}},72900:(e,t,i)=>{i.d(t,{I:()=>a});var s=i(22753),r=i(87422),l=i(73828);class a extends r.s{constructor(e,t,i,s,r,a){let h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:r,n=arguments.length>7&&void 0!==arguments[7]?arguments[7]:a;super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new l.Z(e),this.resolution=t,this.x=i,this.y=s,this.width=r,this.height=a,this.rangeX=h,this.rangeY=n}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e){const t=this.resolution/(e.resolution*e.pixelRatio),i=this.transforms.tileMat3,[r,l]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*t,h=this.height/this.rangeY*t;(0,s.s)(i,a,0,0,0,h,0,r,l,1),(0,s.m)(this.transforms.dvs,e.displayViewMat3,i)}}},4321:(e,t,i)=>{i.d(t,{Y:()=>a});var s=i(27366),r=(i(32718),i(25243),i(63780),i(93169),i(10064),i(69912)),l=i(9849);const a=e=>{let t=class extends e{attach(){this.view.timeline.record("".concat(this.layer.title," (BitmapTileLayer) Attach")),this._bitmapView=new l.s(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var e;this.container.removeChild(this._bitmapView),null!==(e=this._bitmapView)&&void 0!==e&&e.removeAllChildren(),this._bitmapView=null}};return t=(0,s._)([(0,r.j)("esri.views.2d.layers.BitmapTileLayerView2D")],t),t}},5738:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var s=i(27366),r=i(32718),l=i(66978),a=i(49861),h=(i(25243),i(63780),i(93169),i(69912)),n=i(92975),o=i(4321),u=i(95986),d=i(34622),c=i(37995),p=i(73828),f=i(32344),g=i(85269),_=i(67581),m=i(13107);const v=new Set([102113,102100,3857,3785,900913]),x=[0,0];let w=class extends((0,m.Z)((0,o.Y)((0,u.y)(_.Z)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){var e;const t=null===(e=this.tileMatrixSet)||void 0===e?void 0:e.tileInfo;t&&(this._tileInfoView=new c.Z(t),this._fetchQueue=new f.Z({tileInfoView:this._tileInfoView,concurrency:16,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new g.Z({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add((()=>{var e;return[null===(e=this.layer)||void 0===e||null===(e=e.activeLayer)||void 0===e?void 0:e.styleId,this.tileMatrixSet]}),(()=>this.doRefresh()))),super.attach())}detach(){var e,t;super.detach(),null!==(e=this._tileStrategy)&&void 0!==e&&e.destroy(),null!==(t=this._fetchQueue)&&void 0!==t&&t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t,i;return null!==(t=null===(i=this.layer.activeLayer.tileMatrixSets)||void 0===i?void 0:i.some((t=>{var i;return(0,n.fS)(null===(i=t.tileInfo)||void 0===i?void 0:i.spatialReference,e)})))&&void 0!==t&&t}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e))))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(x,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:r=0}=t;if(!i)return this._fetchImage(e,s);const a=new p.Z(0,0,0,0);let h;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,a,{signal:s}),h=await this._fetchImage(a,s)}catch(n){if((0,l.D_)(n))throw n;if(r<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new p.Z(i),l=await this.fetchTile(s,{...t,resamplingLevel:r+1});return(0,d.i)(this._tileInfoView,l,s,e)}}throw n}return(0,d.i)(this._tileInfoView,h,a,e)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(t){(0,l.D_)(t)||r.Z.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>{var i;return(0,n.fS)(null===(i=e.tileInfo)||void 0===i?void 0:i.spatialReference,t)}));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>{var t,i;return v.has(null!==(t=null===(i=e.tileInfo)||void 0===i?void 0:i.spatialReference.wkid)&&void 0!==t?t:-1)}))),i}};(0,s._)([(0,a.Cb)({readOnly:!0})],w.prototype,"tileMatrixSet",null),w=(0,s._)([(0,h.j)("esri.views.2d.layers.WMTSLayerView2D")],w);const y=w},34622:(e,t,i)=>{function s(e,t,i,s){if(i.level===s.level)return t;const l=e.tileInfo.size,a=e.getTileResolution(i.level),h=e.getTileResolution(s.level);let n=e.getLODInfoAt(s.level);const o=n.getXForColumn(s.col),u=n.getYForRow(s.row);n=e.getLODInfoAt(i.level);const d=n.getXForColumn(i.col),c=n.getYForRow(i.row),p=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/l[0],f=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/l[1],g=Math.round(p*((o-d)/a)),_=Math.round(f*(-(u-c)/a)),m=Math.round(p*l[0]*(h/a)),v=Math.round(f*l[1]*(h/a)),x=r(l);return x.getContext("2d").drawImage(t,g,_,m,v,0,0,l[0],l[1]),x}function r(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}i.d(t,{V:()=>r,i:()=>s})},13107:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(27366),r=i(32718),l=i(66978),a=i(94172),h=i(49861),n=(i(25243),i(63780),i(93169),i(69912));const o=e=>{let t=class extends e{initialize(){this.addHandles((0,a.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,l.D_)(e)||r.Z.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return(0,s._)([(0,h.Cb)()],t.prototype,"layer",void 0),t=(0,s._)([(0,n.j)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=5738.718188d7.chunk.js.map