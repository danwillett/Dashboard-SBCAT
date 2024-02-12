/*! For license information please see 2054.debc4f10.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[2054],{85955:(e,t,a)=>{a.d(t,{H:()=>b,c:()=>u,d:()=>v,f:()=>m,r:()=>d,s:()=>c});var n=a(92358),i=a(51554);const r="hidden-form-input";function o(e){return"checked"in e}const l=new WeakMap,s=new WeakSet;function c(e){const{formEl:t}=e;return!!t&&(t.requestSubmit(),!0)}function d(e){var t;null===(t=e.formEl)||void 0===t||t.reset()}function u(e){const{el:t,value:a}=e,i=m(e);if(!i||function(e,t){if((0,n.c)(t.parentElement,"[form]"))return!0;const a="calciteInternalFormComponentRegister";let i=!1;return e.addEventListener(a,(e=>{i=e.composedPath().some((e=>s.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(a,{bubbles:!0,composed:!0})),i}(i,t))return;e.formEl=i,e.defaultValue=a,o(e)&&(e.defaultChecked=e.checked);const r=(e.onFormReset||f).bind(e);i.addEventListener("reset",r),l.set(e.el,r),s.add(t)}function m(e){const{el:t,form:a}=e;return a?(0,n.q)(t,{id:a}):(0,n.c)(t,"form")}function f(){o(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function v(e){const{el:t,formEl:a}=e;if(!a)return;const n=l.get(t);a.removeEventListener("reset",n),l.delete(t),e.formEl=null,s.delete(t)}const h=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},g=e=>e.removeEventListener("change",h);function p(e,t,a){var n;const{defaultValue:i,disabled:r,form:l,name:s,required:c}=e;t.defaultValue=i,t.disabled=r,t.name=s,t.required=c,t.tabIndex=-1,l?t.setAttribute("form",l):t.removeAttribute("form"),o(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?a||"on":""):t.value=a||"",null===(n=e.syncHiddenFormInput)||void 0===n||n.call(e,t)}const b=e=>{let{component:t}=e;return function(e){const{el:t,formEl:a,name:n,value:i}=e,{ownerDocument:o}=t,l=t.querySelectorAll('input[slot="'.concat(r,'"]'));if(!a||!n)return void l.forEach((e=>{g(e),e.remove()}));const s=Array.isArray(i)?i:[i],c=[],d=new Set;let u;l.forEach((t=>{const a=s.find((e=>e==t.value));null!=a?(d.add(a),p(e,t,a)):c.push(t)})),s.forEach((t=>{if(d.has(t))return;let a=c.pop();a||(a=o.createElement("input"),a.slot=r),u||(u=o.createDocumentFragment()),u.append(a),a.addEventListener("change",h),p(e,a,t)})),u&&t.append(u),c.forEach((e=>{g(e),e.remove()}))}(t),(0,i.h)("slot",{name:r})}},14387:(e,t,a)=>{a.d(t,{g:()=>n});const n=()=>[2,1,1,1,3].map((e=>{let t="";for(let a=0;a<e;a++)t+=(65536*(1+Math.random())|0).toString(16).substring(1);return t})).join("-")},13160:(e,t,a)=>{a.d(t,{c:()=>h,d:()=>g,u:()=>u});var n=a(51554);const i=/firefox/i.test(function(){if(!n.Z5.isBrowser)return"";const e=navigator.userAgentData;return null!==e&&void 0!==e&&e.brands?e.brands.map((e=>{let{brand:t,version:a}=e;return"".concat(t,"/").concat(a)})).join(" "):navigator.userAgent}()),r=i?new WeakMap:null;function o(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function l(e){const t=e.target;if(i&&!r.get(t))return;const{disabled:a}=t;a&&e.preventDefault()}const s=["mousedown","mouseup","click"];function c(e){if(i&&!r.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const d={capture:!0};function u(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void m(e);v(e),"function"===typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function m(e){e.el.click=o,function(e){if(!e)return;e.addEventListener("pointerdown",l,d),s.forEach((t=>e.addEventListener(t,c,d)))}(i?f(e):e.el)}function f(e){return r.get(e.el)}function v(e){delete e.el.click,function(e){if(!e)return;e.removeEventListener("pointerdown",l,d),s.forEach((t=>e.removeEventListener(t,c,d)))}(i?f(e):e.el)}function h(e){if(!e.disabled||!i)return;const t=e.el.parentElement||e.el;r.set(e.el,t),m(e)}function g(e){i&&(r.delete(e.el),v(e))}},74310:(e,t,a)=>{a.d(t,{c:()=>v,d:()=>h,g:()=>p});var n=a(92358);const i="calciteInternalLabelClick",r="calciteInternalLabelConnected",o="calciteInternalLabelDisconnected",l="calcite-label",s=new WeakMap,c=new WeakMap,d=new WeakMap,u=new WeakMap,m=new WeakSet,f=e=>{const{id:t}=e,a=t&&(0,n.q)(e,{selector:"".concat(l,'[for="').concat(t,'"]')});if(a)return a;const i=(0,n.c)(e,l);return!i||function(e,t){let a;const n="custom-element-ancestor-check",i=n=>{n.stopImmediatePropagation();const i=n.composedPath();a=i.slice(i.indexOf(t),i.indexOf(e))};e.addEventListener(n,i,{once:!0}),t.dispatchEvent(new CustomEvent(n,{composed:!0,bubbles:!0})),e.removeEventListener(n,i);const r=a.filter((a=>a!==t&&a!==e)).filter((e=>{var t;return null===(t=e.tagName)||void 0===t?void 0:t.includes("-")}));return r.length>0}(i,e)?null:i};function v(e){const t=f(e.el);if(c.has(t)&&t===e.labelEl||!t&&m.has(e))return;const a=E.bind(e);if(t){e.labelEl=t;const n=s.get(t)||[];n.push(e),s.set(t,n.sort(g)),c.has(e.labelEl)||(c.set(e.labelEl,b),e.labelEl.addEventListener(i,b)),m.delete(e),document.removeEventListener(r,d.get(e)),u.set(e,a),document.addEventListener(o,a)}else m.has(e)||(a(),document.removeEventListener(o,u.get(e)))}function h(e){if(m.delete(e),document.removeEventListener(r,d.get(e)),document.removeEventListener(o,u.get(e)),d.delete(e),u.delete(e),!e.labelEl)return;const t=s.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(i,c.get(e.labelEl)),c.delete(e.labelEl)),s.set(e.labelEl,t.filter((t=>t!==e)).sort(g)),e.labelEl=null}function g(e,t){return(0,n.y)(e.el,t.el)?-1:1}function p(e){var t;return e.label||(null===(t=e.labelEl)||void 0===t||null===(t=t.textContent)||void 0===t?void 0:t.trim())||""}function b(e){const t=e.detail.sourceEvent.target,a=s.get(this),n=a.find((e=>e.el===t));if(a.includes(n))return;const i=a[0];i.disabled||i.onLabelClick(e)}function k(){m.has(this)&&v(this)}function E(){m.add(this);const e=d.get(this)||k.bind(this);d.set(this,e),document.addEventListener(r,e)}},91438:(e,t,a)=>{a.d(t,{L:()=>r,d:()=>o});var n=a(51554),i=a(14387);const r=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.inline=!1,this.label=void 0,this.scale="m",this.type=void 0,this.value=0,this.text=""}render(){const{el:e,inline:t,label:a,scale:r,text:o,type:l,value:s}=this,c=e.id||(0,i.g)(),d=t?this.getInlineSize(r):this.getSize(r),u=.45*d,m="0 0 ".concat(d," ").concat(d),f="determinate"===l,v=2*u*Math.PI,h=s/100*v,g=v-h,p=Math.floor(s),b={"aria-valuenow":p,"aria-valuemin":0,"aria-valuemax":100,complete:100===p},k={r:u,cx:d/2,cy:d/2},E={"stroke-dasharray":"".concat(h," ").concat(g)};return(0,n.h)(n.AA,{"aria-label":a,id:c,role:"progressbar",...f?b:{}},(0,n.h)("div",{class:"loader__svgs"},(0,n.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--1",viewBox:m},(0,n.h)("circle",{...k})),(0,n.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--2",viewBox:m},(0,n.h)("circle",{...k})),(0,n.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--3",viewBox:m,...f?{style:E}:{}},(0,n.h)("circle",{...k}))),o&&(0,n.h)("div",{class:"loader__text"},o),f&&(0,n.h)("div",{class:"loader__percentage"},s))}getSize(e){return{s:32,m:56,l:80}[e]}getInlineSize(e){return{s:12,m:16,l:20}[e]}get el(){return this}static get style(){return'@charset "UTF-8";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem)}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}@supports (display: grid){.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}}:host([type=determinate]){animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-loader",{inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1]}]);function o(){if("undefined"===typeof customElements)return;["calcite-loader"].forEach((e=>{if("calcite-loader"===e)customElements.get(e)||customElements.define(e,r)}))}o()}}]);
//# sourceMappingURL=2054.debc4f10.chunk.js.map