var InkAPI=(()=>{var Xr=Object.create;var qe=Object.defineProperty;var ea=Object.getOwnPropertyDescriptor;var ta=Object.getOwnPropertyNames;var ra=Object.getPrototypeOf,aa=Object.prototype.hasOwnProperty;var y=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports),sa=(a,e)=>{for(var r in e)qe(a,r,{get:e[r],enumerable:!0})},rr=(a,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ta(e))!aa.call(a,n)&&n!==r&&qe(a,n,{get:()=>e[n],enumerable:!(s=ea(e,n))||s.enumerable});return a};var w=(a,e,r)=>(r=a!=null?Xr(ra(a)):{},rr(e||!a||!a.__esModule?qe(r,"default",{value:a,enumerable:!0}):r,a)),na=a=>rr(qe({},"__esModule",{value:!0}),a);var ae=y(gt=>{"use strict";Object.defineProperty(gt,"__esModule",{value:!0});var pt=class{constructor(){this._parent=null}get parent(){return this._parent}get parentElement(){return this._parent}set parent(e){this._parent=e}};gt.default=pt});var xt=y(_e=>{"use strict";var ia=_e&&_e.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(_e,"__esModule",{value:!0});var la=ia(ae()),bt=class extends la.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(e){super(),this.name="#comment",this.type=8,this.value=e}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!--${this.value}-->`}};_e.default=bt});var Tt=y(Te=>{"use strict";var oa=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Te,"__esModule",{value:!0});var ca=oa(ae()),_t=class extends ca.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(e){super(),this.name="#doctype",this.type=10,this.value=e}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!DOCTYPE ${this.value}>`}};Te.default=_t});var vt=y(ye=>{"use strict";var ua=ye&&ye.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(ye,"__esModule",{value:!0});var da=ua(ae()),fa=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],yt=class a extends da.default{get attributes(){return Object.fromEntries(this._attributes)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(e=>e instanceof a)}get nodeName(){return this.name.toUpperCase()}get nodes(){let e=[this];return this._flatten(Array.from(this.children),e),e}get nodeType(){return this.type}get parent(){return this._parent}set parent(e){this._parent=e}constructor(e,r={},s=[]){super(),this.type=1,this._parent=null,this.name=e,this._attributes=new Map(Object.entries(r)),this.children=new Set(s.filter(Boolean))}appendChild(e){return this.children.add(e),e.parent=this,this}export(){return{type:this.type,name:this.name,attributes:Object.fromEntries(this._attributes.entries()),children:Array.from(this.children).map(e=>e.export())}}getAttribute(e){return this._attributes.get(e)}hasAttribute(e){return this._attributes.has(e)}removeAttribute(e){return this._attributes.delete(e),this}removeChild(e){this.children.delete(e),e.parent=null}setAttribute(e,r){return this._attributes.set(e,r),this}toString(){let e=Array.from(this._attributes.entries()),r=e.length>0?" "+e.map(([n,i])=>{if(typeof i=="string"&&!/["<>\n]/.test(i))return`${n}="${i}"`;if(typeof i=="boolean")return i?n:""}).join(" "):"";if(fa.includes(this.name))return`<${this.name}${r} />`;let s=Array.from(this.children.values()).map(n=>n.toString()).join("");return`<${this.name}${r}>${s}</${this.name}>`}_flatten(e,r){e.forEach(s=>{r.push(s),s instanceof a&&this._flatten(Array.from(s.children),r)})}};ye.default=yt});var wt=y(ve=>{"use strict";var ma=ve&&ve.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(ve,"__esModule",{value:!0});var ha=ma(ae()),Et=class extends ha.default{get nodeName(){return"#text"}get nodeType(){return this.type}get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(e,r=!1){super(),this.name="#text",this.type=3,this._escape=r,this._value=e}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return this.value}};ve.default=Et});var ze=y(Ee=>{"use strict";var He=Ee&&Ee.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Ee,"__esModule",{value:!0});var pa=He(xt()),ga=He(Tt()),At=He(vt()),ba=He(wt()),kt=class a{static createComment(e,r){let s=new pa.default(e);return r&&(s.parent=r),s}static createDoctype(e="html",r){let s=new ga.default(e);return r&&(s.parent=r),s}static createElement(e,r={},s=[],n){let i=new At.default(e,r,s);return n&&(i.parent=n),i}static createText(e,r=!1,s){let n=new ba.default(e,r);return s&&(n.parent=s),n}static import(e,r){return e.map(s=>{let{value:n}=s,{name:i,attributes:f,children:_}=s;switch(s.type){case 1:let b=this.createElement(i,f,[],r);return a.import(_,b).forEach(E=>b.appendChild(E)),b;case 3:return this.createText(n,!0,r);case 8:return this.createComment(n,r);case 10:return this.createDoctype(n,r)}return null}).filter(Boolean)}static load(e){return new a(e)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(e=>e instanceof At.default)}get nodes(){return Array.from(this.children).map(e=>e instanceof At.default?e.nodes:[e]).flat()}constructor(e){this.children=new Set(e.filter(Boolean))}export(){return this.childList.map(e=>e.export())}toString(){return Array.from(this.children).map(e=>e.toString()).join("")}};Ee.default=kt});var Z=y(we=>{"use strict";Object.defineProperty(we,"__esModule",{value:!0});we.TemplateData=void 0;var Be=class{constructor(){window.__TEMPLATE_DATA__||(window.__TEMPLATE_DATA__={})}clear(){return window.__TEMPLATE_DATA__={},this}delete(e){return this.has(e)?(delete window.__TEMPLATE_DATA__[e],!0):!1}entries(){return Object.entries(window.__TEMPLATE_DATA__)}has(e){return e in window.__TEMPLATE_DATA__}get(e){return window.__TEMPLATE_DATA__[e]}keys(){return Object.keys(window.__TEMPLATE_DATA__)}set(e,r){return window.__TEMPLATE_DATA__[e]=r,this}values(){return Object.values(window.__TEMPLATE_DATA__)}};we.TemplateData=Be;var xa=new Be;we.default=xa});var se=y(P=>{"use strict";var _a=P&&P.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(P,"__esModule",{value:!0});P.match=P.ClientEmitter=P.events=void 0;P.bindAttribute=Ue;P.unbindAttribute=Ct;var ar=_a(q());P.events=["click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","wheel","keydown","keypress","keyup","blur","change","contextmenu","focus","input","submit","invalid","reset","search","select","copy","cut","paste","drag","dragstart","dragend","dragover","dragenter","dragleave","drop","scroll","durationchange","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","animationstart","animationend","animationiteration","transitionend","toggle"];var Ge=class extends EventTarget{emit(e,r){return this.dispatchEvent(new CustomEvent(e,{detail:r})),this}on(e,r){if(e==="ready"&&document.readyState!=="loading"){let s=new CustomEvent("ready");return setTimeout(()=>r(s),1),this}return this.addEventListener(e,r),this}once(e,r){let s=n=>{this.unbind(e,s),r(n)};return this.on(e,s),this}unbind(e,r){return this.removeEventListener(e,r),this}};P.ClientEmitter=Ge;var Ta=(a,e,r=!0)=>Array.from(a.querySelectorAll("*")).filter(s=>{let n=ar.default.get(s),i=n&&n.hasAttribute(e)&&(!r||!n.hasEvent(e));return i&&n.addEvent(e),i}).map(s=>ar.default.get(s));P.match=Ta;function Ue(a,e){We.on("mounted",r=>{if(!r.detail)return;let s=r.detail;(0,P.match)(s.shadowRoot||s,a).forEach(e)})}function Ct(a,e){We.on("unmounted",r=>{if(!r.detail)return;let s=r.detail;(0,P.match)(s.shadowRoot||s,a,!1).forEach(e)})}var We=new Ge;P.default=(document.onreadystatechange=()=>{document.readyState!=="loading"&&We.emit("ready")},Ue("mount",a=>{let e=a.getAttribute("mount");if(typeof e=="function"){let r=new CustomEvent("mount",{detail:{node:a,target:a.element}});e(r)}}),Ct("unmount",a=>{let e=a.getAttribute("unmount");if(typeof e=="function"){let r=new CustomEvent("unmount",{detail:{node:a,target:a.element}});e(r)}}),Ue("if",a=>{let e=a.getAttribute("if");(e===!1||e==="false"||typeof e=="function"&&!e())&&a.element.remove()}),P.events.forEach(a=>{Ue(a,e=>{let r=e.getAttribute(a);typeof r=="function"&&(e.element.removeEventListener(a,r),e.element.addEventListener(a,r))}),Ct(a,e=>{let r=e.getAttribute(a);typeof r=="function"&&e.element.removeEventListener(a,r)})}),We)});var Ye=y(Ae=>{"use strict";var ya=Ae&&Ae.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Ae,"__esModule",{value:!0});var Ot=ya(se()),Nt=class{get attributes(){return Object.assign({},this._attributes)}get element(){return this._element}get events(){return this._events}constructor(e,r){this._events=new Set,this._element=e,this._attributes=r}addEvent(e){return this._events.add(e),this}camel(){return Object.fromEntries(Object.entries(this._attributes).map(([e,r])=>e==="class"?["className",r]:[e.replace(/-([a-z])/g,(n,i)=>i.toUpperCase()).replaceAll("-",""),r]))}getAttribute(e){return this._attributes[e]}hasAttribute(e){return e in this._attributes}hasEvent(e){return this._events.has(e)}removeAttribute(e,r=!1){let s=this.getAttribute(e);return typeof s>"u"?this:(delete this._attributes[e],r||Ot.default.emit("attribute-remove",{element:this,key:e,previous:s}),this)}setAttribute(e,r,s=!1){if(typeof r>"u")return this.removeAttribute(e,s);let n=this.getAttribute(e);return n===r?this:(this._attributes[e]=r,s||(typeof n>"u"?Ot.default.emit("attribute-create",{element:this,key:e,value:r}):Ot.default.emit("attribute-update",{element:this,key:e,value:r,previous:n})),this)}setAttributes(e,r=!1){for(let[n,i]of Object.entries(e))this.setAttribute(n,i,r);let s=Object.keys(e);for(let n of Object.keys(this._attributes))s.includes(n)||this.removeAttribute(n,r);return this}tree(e,r,s){if(e||(e=Object.assign({},this._attributes)),r){let i=r.split("-");if(i.length>0){let f=i.shift();i.length>0?(e[f]||(e[f]={}),this.tree(e[f],i.join("-"),s)):e[f]=s}return e}let n={};for(let[i,f]of Object.entries(e))this.tree(n,i,f);return n}};Ae.default=Nt});var Mt=y(Dt=>{"use strict";Object.defineProperty(Dt,"__esModule",{value:!0});Dt.default=()=>window.InkAPI});var q=y(ke=>{"use strict";var ir=ke&&ke.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(ke,"__esModule",{value:!0});var sr=ir(Ye()),va=ir(Mt()),nr=document.createElement("textarea"),Ea=a=>(nr.innerHTML=a,nr.value),Je=class a{static get elements(){return this._elements}static createComponent(e,r,s={},n=[]){var i;let{registered:f}=r;if(!f&&!(!((i=(0,va.default)())===null||i===void 0)&&i.elements[e]))return this.createVirtualComponent(e,r,s,n);let _=f||e,b=document.createElement(_);customElements.whenDefined(_).then(()=>{customElements.upgrade(b),b.initiated||b.connectedCallback()});let E=a.register(b,s);E.setAttributes(s,!0);for(let[x,A]of Object.entries(s))typeof A=="string"?b.setAttribute(x,A):A===!0&&b.setAttribute(x,"");return this._cleanChildren(n).forEach(x=>b.appendChild(x)),E}static createElement(e,r={},s=[]){let n=document.createElement(e);for(let[i,f]of Object.entries(r))typeof f=="string"?n.setAttribute(i,f):f===!0&&n.setAttribute(i,"");return this._cleanChildren(s).forEach(i=>n.appendChild(i)),this.register(n,r)}static createText(e,r=!0){return document.createTextNode(Ea(e))}static createVirtualComponent(e,r,s={},n=[]){let i=document.createElement(e);return i.definition=r,Object.setPrototypeOf(i,r.prototype),i.constructor=r.constructor,i.constructor.id=r.id,i.constructor.tagname=r.tagname,i.constructor.classname=r.classname,r.observedAttributes&&(i.constructor.observedAttributes=r.observedAttributes),i.register(s,n),i.element}static cloneElement(e,r=!1){var s;let n=e;if(n.definition){let i=n.originalChildren||[];return this.createComponent(n.nodeName.toLowerCase(),n.definition,n.props||{},r?i.map(f=>this.cloneElement(f,r)):[]).element}else if(e instanceof HTMLElement){let i=Array.from(e.childNodes);return this.createElement(e.nodeName.toLowerCase(),this.has(e)?(s=this.get(e))===null||s===void 0?void 0:s.attributes:Object.fromEntries(Array.from(e.attributes).map(f=>[f.name,f.value])),r?i.map(f=>this.cloneElement(f,r)):[]).element}return e.cloneNode(r)}static filter(e){let r=[];return this._elements.forEach((s,n)=>{e(s,n)&&r.push(s)}),r}static get(e){return this._elements.get(e)||null}static has(e){return this._elements.has(e)}static map(e){let r=[];return this._elements.forEach((s,n)=>{r.push(e(s,n))}),r}static register(e,r,s=!1){if(this.has(e))return this.get(e);r||Array.from(e.attributes).forEach(i=>{r=r||{},r[i.name]=i.value!==""?i.value:!0});let n=new sr.default(e,r||{});return this._elements.set(e,n),s&&Array.from(e.children).forEach(i=>{i instanceof Element&&this.register(i,void 0,!0)}),n}static _cleanChildren(e){return Array.from(e).filter(r=>typeof r<"u").map(r=>typeof r=="string"?this.createText(r):r instanceof sr.default?r.element:r)}};Je._elements=new Map;ke.default=Je});var lr=y(Ce=>{"use strict";var Ft=Ce&&Ce.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Ce,"__esModule",{value:!0});var wa=Ft(ze()),Lt=Ft(Z()),St=Ft(q()),jt=class{constructor(){let e=document.querySelector("script[data-template]");if(!e)throw new Error("TEMPLATE_DATA not found");try{window.__TEMPLATE_DATA__=JSON.parse(e.innerText.trim()),Object.entries(window.__TEMPLATE_DATA__).forEach(([r,s])=>{Lt.default.set(r,s)})}catch{throw new Error("TEMPLATE_DATA is not a valid JSON")}}bindings(){Lt.default.set("current","document");let e=this.template();Lt.default.delete("current");let r=wa.default.load(e).elements,s=Array.from(r).map((n,i)=>[String(i),n.attributes]).filter(n=>Object.keys(n[1]).length);return Object.fromEntries(s)}sync(){let e=this.bindings(),r=Array.from(document.querySelectorAll("*"));for(let s of r){let n=Object.fromEntries(Array.from(s.attributes).map(f=>[f.nodeName,f.nodeValue&&f.nodeValue.length>0?f.nodeValue:!0])),i=String(St.default.elements.size);e[i]&&Object.assign(n,e[i]),St.default.register(s,n)}return e}_toNodeList(e){return typeof e=="object"&&typeof e.nodeType=="number"?[e]:Array.isArray(e)&&e.every(r=>typeof r=="object"&&typeof r.nodeType=="number")?e:[St.default.createText(String(e))]}};Ce.default=jt});var Y=y(Oe=>{"use strict";var Ve=Oe&&Oe.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Oe,"__esModule",{value:!0});var Aa=Ve(Ye()),H=Ve(q()),Ze=Ve(se()),Ke=Ve(Z()),Pt=class a extends HTMLElement{static get registered(){return customElements.getName(this)}static register(){customElements.define(this.tagname,this)}get attr(){return Object.fromEntries(Array.from(this.attributes).map(e=>[e.name,e.value]))}get definition(){return this._definition||this.constructor}get element(){if(!H.default.has(this))throw new Error(`Component ${this.metadata.classname} not mapped.`);return H.default.get(this)}get initiated(){return this._initiated}get metadata(){let{id:e,classname:r,tagname:s,registered:n,observedAttributes:i=[]}=this.definition;return{id:e,tagname:s,classname:r,registered:n,observed:i}}get originalChildren(){return this._children}get props(){return this.getAttributes()}get propsCamel(){return this.element.camel()}get propsTree(){return this.element.tree()}get virtual(){return this._virtual}set props(e){this.setAttributes(e)}set definition(e){this._definition=e}set originalChildren(e){typeof this._children>"u"&&(this._children=this._cleanChildren(e||[]))}constructor(){if(super(),this._children=void 0,this._definition=null,this._initiated=!1,this._observer=null,this._rendering=!1,this._template=null,this._virtual=!1,!H.default.has(this)){let{registered:e}=this.metadata;if(!e)throw new Error(`Component ${this.metadata.classname} not registered in customElements.`);let r=Object.fromEntries(Array.from(this.attributes).map(s=>[s.name,s.value!==""?s.value:!0]));H.default.register(this,r)}}adoptedCallback(){this.render(),this.emit("adopt",this)}attributeChangedCallback(e,r,s){if(this._rendering)return;let n=r===null?"add":s===null?"remove":"update";s===null&&this.hasAttribute(e)?this.element.removeAttribute(e):s===""?this.element.setAttribute(e,!0):this.element.setAttribute(e,s),this.emit("attributechange",{action:n,name:e,prev:r,value:s,target:this})}clone(e=!1){return this.cloneElement(this,e)}cloneElement(e,r=!1){return H.default.cloneElement(e,r)}connectedCallback(){this.wait(),this.emit("connect",this)}createComponent(e,r,s={},n=[]){return H.default.createComponent(e,r,s,n)}createElement(e,r={},s=[]){return H.default.createElement(e,r,s)}disconnectedCallback(){this.emit("disconnect",this)}emit(e,r){return this.dispatchEvent(new CustomEvent(e,{detail:r})),this}getAttribute(e){return this.element.getAttribute(e)}getAttributes(){return Object.assign({},this.element.attributes)}getChildren(e=!0){return e===!0?Array.from(this.childNodes):e===!1?this._children:e===null&&this.shadowRoot?Array.from(this.shadowRoot.childNodes):[]}getElement(e){return H.default.get(e)}getParentComponent(){let e=this.parentElement;for(;e;){if(e instanceof a)return e;e=e.parentElement}return null}hasAttribute(e){return this.element.hasAttribute(e)}on(e,r){return this.removeEventListener(e,r),this.addEventListener(e,r),this}once(e,r){let s=n=>{this.removeEventListener(e,r),r(n)};return this.on(e,s),this}register(e={},r=[]){H.default.has(this)?H.default.get(this).setAttributes(e):H.default.register(this,e);for(let[s,n]of Object.entries(e))(typeof n=="string"||n===!0)&&super.setAttribute(s,n===""||n===s||n===!0?!0:n);this._children=this._cleanChildren(r),this._children.forEach(s=>this.appendChild(s)),this._virtual=!0,this.connectedCallback()}removeAttribute(e){let r=this.getAttribute(e);this.hasAttribute(e)&&this.element.removeAttribute(e),super.hasAttribute(e)&&super.removeAttribute(e),this._virtual&&this.metadata.observed.includes(e)&&this.attributeChangedCallback(e,r,null)}render(){let e=this.getParentComponent();if(e&&!e.initiated)return;if(this._rendering)return;this._rendering=!0;let r=Ke.default.get("current");Ke.default.set("current",this),this._template?Ze.default.emit("unmounted",this):this._template=this.template();let s=this._template().filter(Boolean),n=this.styles(),i=n.length===0?"light":"shadow",{light:f,shadow:_}=this._getChildren(s,i);if(_.length===0&&i==="light")this.textContent="",f.forEach(b=>this.appendChild(b));else{this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0});let b=document.createElement("style");b.innerText=n;let E=this.shadowRoot;E.textContent="",E.appendChild(b),_.forEach(x=>E.appendChild(x)),f.length&&(this.textContent="",f.forEach(x=>this.appendChild(x)))}return r?Ke.default.set("current",r):Ke.default.delete("current"),this._initiated=!0,this._rendering=!1,Ze.default.emit("mounted",this),this.shadowRoot?this.shadowRoot.innerHTML:this.innerHTML}setAttribute(e,r){let s=this.getAttribute(e);r===""||r===!0?(this.element.setAttribute(e,!0),super.setAttribute(e,"")):r===!1?(this.element.setAttribute(e,r),super.removeAttribute(e)):typeof r=="string"?(this.element.setAttribute(e,r),super.setAttribute(e,r)):this.element.setAttribute(e,r),this._virtual&&this.metadata.observed.includes(e)&&typeof r=="string"&&this.attributeChangedCallback(e,s,r)}setAttributes(e){Object.entries(e).forEach(([r,s])=>this.setAttribute(r,s))}unbind(e,r){return this.removeEventListener(e,r),this}wait(){if(document.readyState!=="loading")this._update();else{let e=()=>{this._update(),Ze.default.unbind("ready",e)};Ze.default.on("ready",e)}}_cleanChildren(e){return Array.from(e).filter(r=>typeof r<"u").map(r=>typeof r=="string"?H.default.createText(r):r instanceof Aa.default?r.element:r)}_getChildren(e,r){let s=this._getTemplateNodes(e),n=this._getTemplateNodes(e,"light"),i=this._getTemplateNodes(e,"shadow"),f=s.length>0?s:e;return{light:n.length>0?n:r==="light"?f:[],shadow:i.length>0?i:r==="shadow"?f:[]}}_getTemplateNodes(e,r){let s=e.find(n=>this._isTemplate(n,r));return s?Array.from(s.childNodes||[]):[]}_isTemplate(e,r){if(e.nodeName!=="TEMPLATE")return!1;let s=e;return r?r===s.getAttribute("type"):!s.hasAttribute("type")}_toNodeList(e){return e instanceof Node?[e]:Array.isArray(e)&&e.every(r=>r instanceof Node)?e:[H.default.createText(String(e))]}_update(){typeof this._children>"u"&&(this._children=this._cleanChildren(Array.from(this.childNodes||[]))),this._initiated||this.render()}};Oe.default=Pt});var Rt=y(Xe=>{"use strict";Object.defineProperty(Xe,"__esModule",{value:!0});Xe.stylemap=ka;function ka(a={}){return new Qe(Object.entries(a))}var Qe=class a extends Map{add(e,r){this.has(e)||this.set(e,[]);let s=this.get(e);return typeof r=="string"||typeof r=="number"?s.push(r):Array.isArray(r)&&s.push(...r),this}clone(){let e=new a;for(let[r,s]of this.entries())e.set(r,s.slice());return e}replaceAll(e,r){for(let[s,n]of this.entries())this.set(s,n.map(i=>typeof i=="string"?i.replaceAll(e,r):i));return this}};Xe.default=Qe});var tt=y(ie=>{"use strict";var Ca=ie&&ie.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(ie,"__esModule",{value:!0});ie.styleset=Na;var Oa=Ca(Rt());function Na(a={}){return new et(Object.entries(a))}var et=class extends Map{add(e,r,s){this.has(e)||this.set(e,new Oa.default);let n=this.get(e);return typeof s=="string"?n.set(r,s.split(" ")):Array.isArray(s)&&n.set(r,s),this}map(e,r){return this.set(e,r),this}toString(){let e=[];for(let[r,s]of this.entries()){let n=[];for(let[i,f]of s.entries())i&&f?.length&&n.push(`${i}:${f.join(" ")}`);n.length&&e.push(`${r}{${n.join(";")}}`)}return e.join("")}};ie.default=et});var ur=y(It=>{"use strict";Object.defineProperty(It,"__esModule",{value:!0});It.default=Da;function Da(a,e,r=!1,s=":host",n="color"){let{color:i,white:f,black:_,info:b,warning:E,success:x,error:A,muted:O,primary:v,secondary:N,theme:o}=a,l=i||(o?`var(--${o})`:f?"var(--white)":_?"var(--black)":b?"var(--info)":E?"var(--warning)":x?"var(--success)":A?"var(--error)":O?"var(--muted)":v?"var(--primary)":N?"var(--secondary)":r);return l&&e.add(s,n,l),i?"color":f?"white":_?"black":b?"info":E?"warning":x?"success":A?"error":O?"muted":v?"primary":N?"secondary":"initial"}});var dr=y($t=>{"use strict";Object.defineProperty($t,"__esModule",{value:!0});$t.default=Ma;function Ma(a,e,r=!1,s=":host"){let{curve:n,curved:i,rounded:f,pill:_}=a,b=n?`${n}px`:i?"4px":f?"12px":_?"10000px":r;return b&&(e.add(s,"border-radius",b),e.add(s,"overflow","hidden")),n?"curve":i?"curved":f?"rounded":_?"pill":"initial"}});var fr=y(qt=>{"use strict";Object.defineProperty(qt,"__esModule",{value:!0});qt.default=La;function La(a,e,r=!1,s=":host"){let{flex:n,none:i,inline:f,block:_,"inline-block":b,"inline-flex":E}=a,x=n?"flex":i?"none":_?"block":f?"inline":E?"inline-flex":b?"inline-block":r;return x&&e.add(s,"display",x),x||"initial"}});var mr=y(Ht=>{"use strict";Object.defineProperty(Ht,"__esModule",{value:!0});Ht.default=Sa;function Sa(a,e,r=":host"){let{padding:s,"padding-x":n,"padding-y":i}=a,f=!1;return isNaN(parseInt(s))||(e.add(r,"padding",`${s}px`),f=!0),isNaN(parseInt(n))||(e.add(r,"padding-left",`${n}px`),e.add(r,"padding-right",`${n}px`),f=!0),isNaN(parseInt(i))||(e.add(r,"padding-top",`${i}px`),e.add(r,"padding-bottom",`${i}px`),f=!0),f}});var hr=y(zt=>{"use strict";Object.defineProperty(zt,"__esModule",{value:!0});zt.removeEvents=Fa;var ja=se();function Fa(a){let e=Object.assign({},a);for(let r in e)ja.events.includes(r)&&delete e[r];return e}});var yr=y(Ne=>{"use strict";var Pa=Ne&&Ne.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Ne,"__esModule",{value:!0});var Ra=Pa(Y()),at=class extends Ra.default{get field(){return this._field}constructor(){super(),this._field=this.attachInternals()}formAssociatedCallback(e){this.emit("formassociate",this)}formDisabledCallback(e){this.emit("formdisable",this)}formResetCallback(){this.emit("formreset",this)}};at.formAssociated=!0;Ne.default=at});var oe=y(De=>{"use strict";var Ia=De&&De.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(De,"__esModule",{value:!0});De.default=qa;var $a=Ia(Z());function qa(a=null,e=!1){if(!a&&(a=$a.default.get("current"),!a)){if(!e)throw new Error("Not called within a Ink component");return null}return a}});var vr=y(Me=>{"use strict";var Ha=Me&&Me.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Me,"__esModule",{value:!0});var za=Ha(Z());function Ba(a){let e=za.default.get("env")||{};return a?e[a]||null:e}Me.default=Ba});var Bt=y(Le=>{"use strict";var Er=Le&&Le.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Le,"__esModule",{value:!0});Le.default=Wa;var Ua=Er(oe()),Ga=Er(Z());function Wa(a=null){let e=(0,Ua.default)(a,!0);return typeof e=="string"?Ga.default.get("props")||{}:e?e.props:{}}});var Ar=y(ce=>{"use strict";var wr=ce&&ce.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(ce,"__esModule",{value:!0});ce.classlist=Za;ce.default=Ka;var Ya=wr(oe()),Ja=wr(Bt());function Za(a=null){var e;if(a==="body")return document.body.classList;if(a==="head")return document.head.classList;if(a==="document")return(e=document.body.parentElement)===null||e===void 0?void 0:e.classList;let r=(0,Ya.default)(a);return r?.classList}function Ka(a=null){return(0,Ja.default)(a).class||""}});var kr=y(ee=>{"use strict";var Va=ee&&ee.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(ee,"__esModule",{value:!0});ee.innerHTML=Xa;ee.innerText=es;ee.default=Ut;var Qa=Va(oe());function Xa(a=null){let e=Ut(a),r=document.createElement("template");return r.append(...e.map(s=>s.cloneNode(!0))),r.innerHTML}function es(a=null){let e=Ut(a),r=document.createElement("template");return r.append(...e.map(s=>s.cloneNode(!0))),r.innerText}function Ut(a=null){let e=(0,Qa.default)(a,!0);return typeof e!="string"&&e?e.originalChildren||[]:[]}});var Cr=y(te=>{"use strict";var ts=te&&te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(te,"__esModule",{value:!0});te.SignalRegistry=void 0;te.default=as;var rs=ts(oe()),ue=class a{static observe(e,r){let s={getter:()=>i.raw,setter:_=>_},n=new Set,i={raw:r,change(_){return n.add(_),i},getter(_){return s.getter=_,i},setter(_){return s.setter=_,i}};Object.defineProperty(i,"value",{get(){return s.getter()},set(_){let b=s.setter(_),E=a.serialize(b)!==a.serialize(i.raw);i.raw=b,E&&(n.forEach(x=>x(b)),e.render())}});let f=this._observers.get(e);return f?(f.observed++,f.values.push(i)):this._observers.set(e,{observed:1,values:[i]}),i}static observer(e){return this._observers.get(e)||null}static serialize(e){return JSON.stringify(e)}};te.SignalRegistry=ue;ue._observers=new Map;function as(a,e=null){let r=(0,rs.default)(e);if(!r.initiated)return ue.observe(r,a);let s=ue.observer(r);if(!s)throw new Error("Signal state mismatch");return s.values[s.observed++%s.values.length]}});var Nr=y(J=>{"use strict";var ss=J&&J.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(J,"__esModule",{value:!0});J.breakpoints=void 0;J.stylesheet=ns;var Or=ss(tt());J.breakpoints={all:0,xl4:1920,xl3:1536,xl2:1280,xl:1024,lg:992,md:767,sm:420,xs:360};function ns(){return new st}var st=class extends Map{add(e,r,s,n){return this.has(e)||this.set(e,new Or.default),this.get(e).add(r,s,n),this}map(e,r,s){return this.has(e)||this.set(e,new Or.default),this.get(e).map(r,s),this}toString(){var e;let r=[];for(let[s,n]of Object.entries(J.breakpoints)){let i=(e=this.get(s))===null||e===void 0?void 0:e.toString();if(i){if(s==="all"){r.push(i);continue}r.push(`@media (max-width:${n}px){${i}}`)}}return r.join("")}};J.default=st});var Mr=y(nt=>{"use strict";Object.defineProperty(nt,"__esModule",{value:!0});nt.getStatus=is;var Dr={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};nt.default=Dr;function is(a){return Object.values(Dr).find(e=>e.code===a)}});var Lr=y(Wt=>{"use strict";Object.defineProperty(Wt,"__esModule",{value:!0});var ls=Mr(),Gt=class a extends Error{static for(e,...r){return r.forEach(function(s){e=e.replace("%s",String(s))}),new this(e)}static forErrors(e){let r=new this("Invalid Parameters");return r.withErrors(e),r}static require(e,r,...s){if(!e){for(let n of s)r=r.replace("%s",n);throw new this(r)}}static try(e){return{catch:r=>{try{return e()}catch(s){if(s instanceof a)return r(s,s.type);if(s instanceof Error){let n=a.upgrade(s);return r(n,n.type)}else if(typeof s=="string"){let n=a.for(s);return r(n,n.type)}return r(s,"unknown")}}}}static upgrade(e,r=500){if(e instanceof a)return e;let s=new this(e.message,r);return s.name=e.name,s.stack=e.stack,s}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(e,r=500){var s;super(e),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=r,this._status=((s=(0,ls.getStatus)(r))===null||s===void 0?void 0:s.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(e=0,r=0){let s={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(e,r)};return Object.keys(this._errors).length>0&&(s.errors=this._errors),s}trace(e=0,r=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(e,r||this.stack.length).map(n=>n.trim()).map(n=>{if(!n.startsWith("at"))return!1;let[i,f,_]=n.split(" ");_||(_=`(${f})`,f="<none>");let[b,E,x]=_.substring(1,_.length-1).split(":");return{method:f,file:b,line:parseInt(E)||0,char:parseInt(x)||0}}).filter(Boolean)}withCode(e){return this._code=e,this}withErrors(e){return this._errors=e,this}withPosition(e,r){return this._start=e,this._end=r,this}};Wt.default=Gt});var Sr=y(Se=>{"use strict";var os=Se&&Se.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Se,"__esModule",{value:!0});var cs=os(Lr()),Yt=class extends cs.default{};Se.default=Yt});var qr=y(u=>{"use strict";var us=u&&u.__createBinding||(Object.create?function(a,e,r,s){s===void 0&&(s=r);var n=Object.getOwnPropertyDescriptor(e,r);(!n||("get"in n?!e.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(a,s,n)}:function(a,e,r,s){s===void 0&&(s=r),a[s]=e[r]}),ds=u&&u.__setModuleDefault||(Object.create?function(a,e){Object.defineProperty(a,"default",{enumerable:!0,value:e})}:function(a,e){a.default=e}),K=u&&u.__importStar||function(){var a=function(e){return a=Object.getOwnPropertyNames||function(r){var s=[];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[s.length]=n);return s},a(e)};return function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var s=a(e),n=0;n<s.length;n++)s[n]!=="default"&&us(r,e,s[n]);return ds(r,e),r}}(),I=u&&u.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(u,"__esModule",{value:!0});u.StyleSheet=u.StyleSet=u.StyleMap=u.stylesheet=u.styleset=u.stylemap=u.breakpoints=u.emitter=u.signal=u.innerHTML=u.innerText=u.children=u.classnames=u.classlist=u.props=u.env=u.data=u.client=u.component=u.SignalRegistry=u.ClientException=u.ClientEmitter=u.ClientElement=u.ClientRegistry=u.ClientComponent=u.ClientField=u.TemplateData=u.DOMNode=u.DOMText=u.DOMElement=u.DOMDocument=u.DOMDoctype=u.DOMComment=void 0;var fs=I(xt());u.DOMComment=fs.default;var ms=I(Tt());u.DOMDoctype=ms.default;var hs=I(ze());u.DOMDocument=hs.default;var ps=I(vt());u.DOMElement=ps.default;var gs=I(wt());u.DOMText=gs.default;var bs=I(ae());u.DOMNode=bs.default;var xs=I(yr());u.ClientField=xs.default;var _s=I(Y());u.ClientComponent=_s.default;var Ts=I(q());u.ClientRegistry=Ts.default;var ys=I(Ye());u.ClientElement=ys.default;var jr=K(se());u.emitter=jr.default;Object.defineProperty(u,"ClientEmitter",{enumerable:!0,get:function(){return jr.ClientEmitter}});var vs=I(Mt());u.client=vs.default;var Es=I(oe());u.component=Es.default;var Fr=K(Z());u.data=Fr.default;Object.defineProperty(u,"TemplateData",{enumerable:!0,get:function(){return Fr.TemplateData}});var ws=I(vr());u.env=ws.default;var As=I(Bt());u.props=As.default;var Pr=K(Ar());u.classnames=Pr.default;Object.defineProperty(u,"classlist",{enumerable:!0,get:function(){return Pr.classlist}});var Jt=K(kr());u.children=Jt.default;Object.defineProperty(u,"innerHTML",{enumerable:!0,get:function(){return Jt.innerHTML}});Object.defineProperty(u,"innerText",{enumerable:!0,get:function(){return Jt.innerText}});var Rr=K(Cr());u.signal=Rr.default;Object.defineProperty(u,"SignalRegistry",{enumerable:!0,get:function(){return Rr.SignalRegistry}});var Ir=K(Rt());u.StyleMap=Ir.default;Object.defineProperty(u,"stylemap",{enumerable:!0,get:function(){return Ir.stylemap}});var $r=K(tt());u.StyleSet=$r.default;Object.defineProperty(u,"styleset",{enumerable:!0,get:function(){return $r.styleset}});var Zt=K(Nr());u.StyleSheet=Zt.default;Object.defineProperty(u,"stylesheet",{enumerable:!0,get:function(){return Zt.stylesheet}});Object.defineProperty(u,"breakpoints",{enumerable:!0,get:function(){return Zt.breakpoints}});var ks=I(Sr());u.ClientException=ks.default});var de=y((mn,Hr)=>{Hr.exports={...qr()}});var Br=y((pn,lt)=>{var Cs=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var h=function(a){var e=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,s={},n={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function o(l){return l instanceof i?new i(l.type,o(l.content),l.alias):Array.isArray(l)?l.map(o):l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(o){return Object.prototype.toString.call(o).slice(8,-1)},objId:function(o){return o.__id||Object.defineProperty(o,"__id",{value:++r}),o.__id},clone:function o(l,c){c=c||{};var d,m;switch(n.util.type(l)){case"Object":if(m=n.util.objId(l),c[m])return c[m];d={},c[m]=d;for(var g in l)l.hasOwnProperty(g)&&(d[g]=o(l[g],c));return d;case"Array":return m=n.util.objId(l),c[m]?c[m]:(d=[],c[m]=d,l.forEach(function(T,p){d[p]=o(T,c)}),d);default:return l}},getLanguage:function(o){for(;o;){var l=e.exec(o.className);if(l)return l[1].toLowerCase();o=o.parentElement}return"none"},setLanguage:function(o,l){o.className=o.className.replace(RegExp(e,"gi"),""),o.classList.add("language-"+l)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(d){var o=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(d.stack)||[])[1];if(o){var l=document.getElementsByTagName("script");for(var c in l)if(l[c].src==o)return l[c]}return null}},isActive:function(o,l,c){for(var d="no-"+l;o;){var m=o.classList;if(m.contains(l))return!0;if(m.contains(d))return!1;o=o.parentElement}return!!c}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(o,l){var c=n.util.clone(n.languages[o]);for(var d in l)c[d]=l[d];return c},insertBefore:function(o,l,c,d){d=d||n.languages;var m=d[o],g={};for(var T in m)if(m.hasOwnProperty(T)){if(T==l)for(var p in c)c.hasOwnProperty(p)&&(g[p]=c[p]);c.hasOwnProperty(T)||(g[T]=m[T])}var D=d[o];return d[o]=g,n.languages.DFS(n.languages,function(j,G){G===D&&j!=o&&(this[j]=g)}),g},DFS:function o(l,c,d,m){m=m||{};var g=n.util.objId;for(var T in l)if(l.hasOwnProperty(T)){c.call(l,T,l[T],d||T);var p=l[T],D=n.util.type(p);D==="Object"&&!m[g(p)]?(m[g(p)]=!0,o(p,c,null,m)):D==="Array"&&!m[g(p)]&&(m[g(p)]=!0,o(p,c,T,m))}}},plugins:{},highlightAll:function(o,l){n.highlightAllUnder(document,o,l)},highlightAllUnder:function(o,l,c){var d={callback:c,container:o,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",d),d.elements=Array.prototype.slice.apply(d.container.querySelectorAll(d.selector)),n.hooks.run("before-all-elements-highlight",d);for(var m=0,g;g=d.elements[m++];)n.highlightElement(g,l===!0,d.callback)},highlightElement:function(o,l,c){var d=n.util.getLanguage(o),m=n.languages[d];n.util.setLanguage(o,d);var g=o.parentElement;g&&g.nodeName.toLowerCase()==="pre"&&n.util.setLanguage(g,d);var T=o.textContent,p={element:o,language:d,grammar:m,code:T};function D(G){p.highlightedCode=G,n.hooks.run("before-insert",p),p.element.innerHTML=p.highlightedCode,n.hooks.run("after-highlight",p),n.hooks.run("complete",p),c&&c.call(p.element)}if(n.hooks.run("before-sanity-check",p),g=p.element.parentElement,g&&g.nodeName.toLowerCase()==="pre"&&!g.hasAttribute("tabindex")&&g.setAttribute("tabindex","0"),!p.code){n.hooks.run("complete",p),c&&c.call(p.element);return}if(n.hooks.run("before-highlight",p),!p.grammar){D(n.util.encode(p.code));return}if(l&&a.Worker){var j=new Worker(n.filename);j.onmessage=function(G){D(G.data)},j.postMessage(JSON.stringify({language:p.language,code:p.code,immediateClose:!0}))}else D(n.highlight(p.code,p.grammar,p.language))},highlight:function(o,l,c){var d={code:o,grammar:l,language:c};if(n.hooks.run("before-tokenize",d),!d.grammar)throw new Error('The language "'+d.language+'" has no grammar.');return d.tokens=n.tokenize(d.code,d.grammar),n.hooks.run("after-tokenize",d),i.stringify(n.util.encode(d.tokens),d.language)},tokenize:function(o,l){var c=l.rest;if(c){for(var d in c)l[d]=c[d];delete l.rest}var m=new b;return E(m,m.head,o),_(o,m,l,m.head,0),A(m)},hooks:{all:{},add:function(o,l){var c=n.hooks.all;c[o]=c[o]||[],c[o].push(l)},run:function(o,l){var c=n.hooks.all[o];if(!(!c||!c.length))for(var d=0,m;m=c[d++];)m(l)}},Token:i};a.Prism=n;function i(o,l,c,d){this.type=o,this.content=l,this.alias=c,this.length=(d||"").length|0}i.stringify=function o(l,c){if(typeof l=="string")return l;if(Array.isArray(l)){var d="";return l.forEach(function(D){d+=o(D,c)}),d}var m={type:l.type,content:o(l.content,c),tag:"span",classes:["token",l.type],attributes:{},language:c},g=l.alias;g&&(Array.isArray(g)?Array.prototype.push.apply(m.classes,g):m.classes.push(g)),n.hooks.run("wrap",m);var T="";for(var p in m.attributes)T+=" "+p+'="'+(m.attributes[p]||"").replace(/"/g,"&quot;")+'"';return"<"+m.tag+' class="'+m.classes.join(" ")+'"'+T+">"+m.content+"</"+m.tag+">"};function f(o,l,c,d){o.lastIndex=l;var m=o.exec(c);if(m&&d&&m[1]){var g=m[1].length;m.index+=g,m[0]=m[0].slice(g)}return m}function _(o,l,c,d,m,g){for(var T in c)if(!(!c.hasOwnProperty(T)||!c[T])){var p=c[T];p=Array.isArray(p)?p:[p];for(var D=0;D<p.length;++D){if(g&&g.cause==T+","+D)return;var j=p[D],G=j.inside,je=!!j.lookbehind,Fe=!!j.greedy,mt=j.alias;if(Fe&&!j.pattern.global){var ht=j.pattern.toString().match(/[imsuy]*$/)[0];j.pattern=RegExp(j.pattern.source,ht+"g")}for(var Pe=j.pattern||j,F=d.next,U=m;F!==l.tail&&!(g&&U>=g.reach);U+=F.value.length,F=F.next){var V=F.value;if(l.length>o.length)return;if(!(V instanceof i)){var be=1,$;if(Fe){if($=f(Pe,U,o,je),!$||$.index>=o.length)break;var X=$.index,Xt=$.index+$[0].length,W=U;for(W+=F.value.length;X>=W;)F=F.next,W+=F.value.length;if(W-=F.value.length,U=W,F.value instanceof i)continue;for(var Q=F;Q!==l.tail&&(W<Xt||typeof Q.value=="string");Q=Q.next)be++,W+=Q.value.length;be--,V=o.slice(U,W),$.index-=U}else if($=f(Pe,0,V,je),!$)continue;var X=$.index,xe=$[0],Re=V.slice(0,X),Ie=V.slice(X+xe.length),k=U+V.length;g&&k>g.reach&&(g.reach=k);var re=F.prev;Re&&(re=E(l,re,Re),U+=Re.length),x(l,re,be);var B=new i(T,G?n.tokenize(xe,G):xe,mt,xe);if(F=E(l,re,B),Ie&&E(l,F,Ie),be>1){var $e={cause:T+","+D,reach:k};_(o,l,c,F.prev,U,$e),g&&$e.reach>g.reach&&(g.reach=$e.reach)}}}}}}function b(){var o={value:null,prev:null,next:null},l={value:null,prev:o,next:null};o.next=l,this.head=o,this.tail=l,this.length=0}function E(o,l,c){var d=l.next,m={value:c,prev:l,next:d};return l.next=m,d.prev=m,o.length++,m}function x(o,l,c){for(var d=l.next,m=0;m<c&&d!==o.tail;m++)d=d.next;l.next=d,d.prev=l,o.length-=m}function A(o){for(var l=[],c=o.head.next;c!==o.tail;)l.push(c.value),c=c.next;return l}if(!a.document)return a.addEventListener&&(n.disableWorkerMessageHandler||a.addEventListener("message",function(o){var l=JSON.parse(o.data),c=l.language,d=l.code,m=l.immediateClose;a.postMessage(n.highlight(d,n.languages[c],c)),m&&a.close()},!1)),n;var O=n.util.currentScript();O&&(n.filename=O.src,O.hasAttribute("data-manual")&&(n.manual=!0));function v(){n.manual||n.highlightAll()}if(!n.manual){var N=document.readyState;N==="loading"||N==="interactive"&&O&&O.defer?document.addEventListener("DOMContentLoaded",v):window.requestAnimationFrame?window.requestAnimationFrame(v):window.setTimeout(v,16)}return n}(Cs);typeof lt<"u"&&lt.exports&&(lt.exports=h);typeof global<"u"&&(global.Prism=h);h.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};h.languages.markup.tag.inside["attr-value"].inside.entity=h.languages.markup.entity;h.languages.markup.doctype.inside["internal-subset"].inside=h.languages.markup;h.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))});Object.defineProperty(h.languages.markup.tag,"addInlined",{value:function(e,r){var s={};s["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:h.languages[r]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};n["language-"+r]={pattern:/[\s\S]+/,inside:h.languages[r]};var i={};i[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:n},h.languages.insertBefore("markup","cdata",i)}});Object.defineProperty(h.languages.markup.tag,"addAttribute",{value:function(a,e){h.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:h.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});h.languages.html=h.languages.markup;h.languages.mathml=h.languages.markup;h.languages.svg=h.languages.markup;h.languages.xml=h.languages.extend("markup",{});h.languages.ssml=h.languages.xml;h.languages.atom=h.languages.xml;h.languages.rss=h.languages.xml;(function(a){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var r=a.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(h);h.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};h.languages.javascript=h.languages.extend("clike",{"class-name":[h.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});h.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;h.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:h.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:h.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:h.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:h.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:h.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});h.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:h.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});h.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});h.languages.markup&&(h.languages.markup.tag.addInlined("script","javascript"),h.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));h.languages.js=h.languages.javascript;(function(){if(typeof h>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading\u2026",e=function(O,v){return"\u2716 Error "+O+" while fetching file: "+v},r="\u2716 Error: File does not exist or is empty",s={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",i="loading",f="loaded",_="failed",b="pre[data-src]:not(["+n+'="'+f+'"]):not(['+n+'="'+i+'"])';function E(O,v,N){var o=new XMLHttpRequest;o.open("GET",O,!0),o.onreadystatechange=function(){o.readyState==4&&(o.status<400&&o.responseText?v(o.responseText):o.status>=400?N(e(o.status,o.statusText)):N(r))},o.send(null)}function x(O){var v=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(O||"");if(v){var N=Number(v[1]),o=v[2],l=v[3];return o?l?[N,Number(l)]:[N,void 0]:[N,N]}}h.hooks.add("before-highlightall",function(O){O.selector+=", "+b}),h.hooks.add("before-sanity-check",function(O){var v=O.element;if(v.matches(b)){O.code="",v.setAttribute(n,i);var N=v.appendChild(document.createElement("CODE"));N.textContent=a;var o=v.getAttribute("data-src"),l=O.language;if(l==="none"){var c=(/\.(\w+)$/.exec(o)||[,"none"])[1];l=s[c]||c}h.util.setLanguage(N,l),h.util.setLanguage(v,l);var d=h.plugins.autoloader;d&&d.loadLanguages(l),E(o,function(m){v.setAttribute(n,f);var g=x(v.getAttribute("data-range"));if(g){var T=m.split(/\r\n?|\n/g),p=g[0],D=g[1]==null?T.length:g[1];p<0&&(p+=T.length),p=Math.max(0,Math.min(p-1,T.length)),D<0&&(D+=T.length),D=Math.max(0,Math.min(D,T.length)),m=T.slice(p,D).join(`
`),v.hasAttribute("data-start")||v.setAttribute("data-start",String(p+1))}N.textContent=m,h.highlightElement(N)},function(m){v.setAttribute(n,_),N.textContent=m})}}),h.plugins.fileHighlight={highlight:function(v){for(var N=(v||document).querySelectorAll(b),o=0,l;l=N[o++];)h.highlightElement(l)}};var A=!1;h.fileHighlight=function(){A||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),A=!0),h.plugins.fileHighlight.highlight.apply(this,arguments)}})()});var Ds={};sa(Ds,{BUILD_ID:()=>Ns,ClientRegistry:()=>Kr.default,TemplateDocument:()=>ft,components:()=>Os,data:()=>Vr.default,elements:()=>Qr,emitter:()=>dt.default});var t=w(ze()),Zr=w(lr()),Kr=w(q()),dt=w(se()),Vr=w(Z());var or=w(q()),cr=w(Y()),ne=class extends cr.default{static id="90ffea9b799a24d212c6";static tagname="panel";static classname="Panel_90ffea9b799a24d212c6";styles(){return""}template(){let e=this.originalChildren,r={main:e.find(i=>i.nodeName==="MAIN"),head:e.find(i=>i.nodeName==="HEADER"),foot:e.find(i=>i.nodeName==="FOOTER"),left:e.find(i=>i.nodeName==="ASIDE"&&i.hasAttribute("left")),right:e.find(i=>i.nodeName==="ASIDE"&&i.hasAttribute("right"))},s={left:!1,right:!1};this.toggle=i=>{s[i]=!s[i],n.all()};let n={all(){r.main&&this.main(),r.head&&this.head(),r.foot&&this.foot(),r.left&&this.left(),r.right&&this.right()},head(){let{classList:i}=r.head;i.add("absolute","top-0","right-0","h-60","transition-500"),r.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),s.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0"))},foot(){let{classList:i}=r.foot;i.add("absolute","bottom-0","right-0","h-60","transition-500"),r.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),s.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0"))},left(){let{classList:i}=r.left;i.add("w-226","absolute","bottom-0","left-0","top-0","transition-500"),s.left?(i.remove("md-left--226"),i.add("md-left-0")):(i.remove("md-left-0"),i.add("md-left--226"))},right(){let{classList:i}=r.right;i.add("w-200","absolute","right-0","transition-500"),r.foot?(i.remove("bottom-0"),i.add("bottom-60")):(i.remove("bottom-60"),i.add("bottom-0")),r.head?(i.remove("top-0"),i.add("top-60")):(i.remove("top-60"),i.add("top-0")),s.right?(i.remove("lg-right--200"),i.add("lg-right-0")):(i.remove("lg-right-0"),i.add("lg-right--200"))},main(){let{classList:i}=r.main;i.add("absolute","transition-500"),r.head?(i.remove("top-0"),i.add("top-60")):(i.remove("top-60"),i.add("top-0")),r.foot?(i.remove("bottom-0"),i.add("bottom-60")):(i.remove("bottom-60"),i.add("bottom-0")),r.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),r.right?(i.remove("right-0"),i.add("right-200")):(i.remove("right-200"),i.add("right-0")),s.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0")),s.right?(i.remove("lg-right-0"),i.add("lg-right-200")):(i.remove("lg-right-200"),i.add("lg-right-0"))}};return n.all(),this.classList.add("block","relative","w-full","vh","scroll-hidden"),()=>[or.default.createText(`
`,!1),...this._toNodeList(e)]}};var R=w(q()),pr=w(Y()),gr=w(tt()),rt=w(ur()),br=w(dr()),xr=w(fr()),_r=w(mr()),Tr=w(hr()),le=class extends pr.default{static id="32c6f995d0374d86f7f4";static tagname="button";static classname="Button_32c6f995d0374d86f7f4";styles(){return`::slotted(button), ::slotted(a) {
    cursor: pointer;
    background: transparent;
    border: 0;
    box-sizing: border-box;
    color: inherit;
    cursor: pointer;
    display: block;
    font-family: inherit;
    font-size: inherit;
    height: 100%;
    text-align: inherit;
    text-decoration: none;
    width: 100%;
  }`}template(){let{flex:e,none:r,inline:s,block:n,"inline-block":i,"inline-flex":f,padding:_,"padding-x":b,"padding-y":E,color:x,white:A,black:O,info:v,warning:N,success:o,error:l,muted:c,primary:d,secondary:m,theme:g,size:T,xs:p,sm:D,md:j,lg:G,xl:je,xl2:Fe,xl3:mt,xl4:ht,xl5:Pe,curve:F,curved:U,rounded:V,pill:be,outline:$,solid:Xt,transparent:W,full:Q,href:X,style:xe,class:Re,...Ie}=this.props,k=new gr.default,re=this.styles();this.styles=()=>re+k.toString();let B="::slotted(button), ::slotted(a)";(0,xr.default)(this.props,k,"inline-block",":host"),(0,_r.default)(this.props,k,B)||(p?k.add(B,"padding","2px 4px"):D?k.add(B,"padding","5px 10px"):j?k.add(B,"padding","8px 16px"):G?k.add(B,"padding","12px 24px"):je?k.add(B,"padding","15px 30px"):Fe?k.add(B,"padding","18px 36px"):mt?k.add(B,"padding","22px 44px"):ht?k.add(B,"padding","26px 52px"):Pe&&k.add(B,"padding","30px 60px")),(0,br.default)(this.props,k,!1,":host"),k.add(":host","text-align","center"),Q&&k.add(":host","width","100%"),$||W?((0,rt.default)(this.props,k,"var(--muted)",":host","color"),(0,rt.default)(this.props,k,"var(--muted)",":host","border-color"),k.add(":host","border-style","solid"),k.add(":host","border-width","1px"),$&&k.add(":host","background-color","var(--white)")):(k.add(":host","color","var(--white)"),(0,rt.default)(this.props,k,"var(--muted)",":host","background-color"));let er=this.getChildren(!1),tr=(0,Tr.removeEvents)(Ie);return()=>[R.default.createText(`
`,!1),R.default.createElement("template",{type:"light"},[R.default.createText(`
  `,!1),...X?[R.default.createText(`
    `,!1),R.default.createElement("a",{...tr,href:X},[...this._toNodeList(er)]).element,R.default.createText(`
  `,!1)]:[,R.default.createText(`
    `,!1),R.default.createElement("button",{...tr},[...this._toNodeList(er)]).element,R.default.createText(`
  `,!1)],R.default.createText(`
`,!1)]).element,R.default.createText(`
`,!1),R.default.createElement("template",{type:"shadow"},[R.default.createText(`
  `,!1),R.default.createElement("slot",{},[]).element,R.default.createText(`
`,!1)]).element]}};var L=w(q()),zr=w(Y()),it=w(de()),fe=class extends zr.default{static id="d640748373b32ef31882";static tagname="app";static classname="App_d640748373b32ef31882";styles(){return""}template(){let{title:e,height:r}=(0,it.props)(),s=r?`height:${r}px`:"";return()=>[L.default.createText(`
`,!1),L.default.createElement("div",{class:"curved scroll-hidden shadow-0-0-10-0-0-0-5"},[L.default.createText(`
  `,!1),L.default.createElement("div",{class:"relative flex flex-center-y gap-10 p-10 bg-t-1 tx-c-999999 tx-16"},[L.default.createText(`
    `,!1),L.default.createElement("span",{class:"bg-h-999999 pill h-10 w-10"},[]).element,L.default.createText(`
    `,!1),L.default.createElement("span",{class:"bg-h-999999 pill h-10 w-10"},[]).element,L.default.createText(`
    `,!1),L.default.createElement("span",{class:"bg-h-999999 pill h-10 w-10"},[]).element,L.default.createText(`
    `,!1),L.default.createElement("span",{class:"flex flex-center h-full w-full absolute top-0 left-0"},[L.default.createText(`
      `,!1),...this._toNodeList(e),L.default.createText(`
    `,!1)]).element,L.default.createText(`
  `,!1)]).element,L.default.createText(`
  `,!1),L.default.createElement("div",{class:"bg-black tx-t-1 relative",style:s},[...this._toNodeList((0,it.children)())]).element,L.default.createText(`
`,!1)]).element]}};var C=w(q()),Ur=w(Y()),Kt=w(Br()),Gr=w(de()),me=class extends Ur.default{static id="07bacf6bf1ae49080e95";static tagname="code";static classname="Code_07bacf6bf1ae49080e95";styles(){return`:host {
    display: block;
    font-size: 14px;
    line-height: 20px;
  }
  :host([inline]) {
    display: inline !important;
  }
  :host([inline]),
  :host([inline]) > pre,
  :host([inline]) > pre > code {
    display: inline !important;
  }
  .snippet {
    background-color: #000000;
    color: #ABB2BF;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }
  :host([inline]) .line-numbers {
    position: static;
    padding-left: 0;
  }

  .line-numbers > code {
    position: relative;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 1px solid #999;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

  }

  :host([inline]) .line-numbers .line-numbers-rows {
    display: none;
  }

  .line-numbers-rows > span {
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #999;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }
  .pad {
    padding: 5px;
  }

  .terminal {
    background-color: #000000;
    color: #EFEFEF;
    font-family: 'Courier New', Courier, monospace;
    font-size: 15px;
    height: 100%;
    padding: 10px;
  }
  .terminal span {
    color: #00FF00;
  }`}template(){let e=this.props,{lang:r="markup",numbers:s=!1,inline:n=!1,trim:i=!1,ltrim:f=!1,rtrim:_=!1,detab:b=0}=e,E=(0,Gr.children)(),x=E[0]?.textContent||"";b&&(x=x.replace(new RegExp(`\\n {${b}}`,"g"),`
`)),i?x=x.trim():f?x=x.replace(/^\s+/,""):_&&(x=x.replace(/\s+$/,""));let A=O=>{if(!x)return;let v=Kt.default.highlight(x,Kt.default.languages[r],r);if(O.detail.target.innerHTML=v,s){let N=v.match(/\n(?!$)/g),o=N?N.length+1:1,l=new Array(o+1).join("<span></span>"),c=document.createElement("span");c.setAttribute("aria-hidden","true"),c.className="line-numbers-rows",c.innerHTML=l,O.detail.target.appendChild(c)}};return()=>[C.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css"}).element,C.default.createText(`
`,!1),C.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-tomorrow.min.css"}).element,C.default.createText(`
`,!1),...r==="bash"?[C.default.createText(`
  `,!1),C.default.createElement("div",{class:"terminal"},[C.default.createElement("span",{},[C.default.createText("$",!1)]).element,C.default.createText(" ",!1),...this._toNodeList(E)]).element,C.default.createText(`
`,!1)]:x?[,C.default.createText(`
  `,!1),...s?[C.default.createText(`
    `,!1),C.default.createElement("pre",{class:"snippet line-numbers"},[C.default.createElement("code",{mount:A},[]).element]).element,C.default.createText(`
  `,!1)]:[,C.default.createText(`
    `,!1),C.default.createElement("pre",{class:"snippet pad"},[C.default.createElement("code",{mount:A},[]).element]).element,C.default.createText(`
  `,!1)],C.default.createText(`
`,!1)]:[,C.default.createText(`
  `,!1),C.default.createElement("span",{},[C.default.createText("????",!1)]).element,C.default.createText(`
`,!1)],C.default.createText(`

`,!1)]}};var Vt=w(q()),Wr=w(Y()),ot=w(de()),he=class extends Wr.default{static id="56799f0192bc408b0160";static tagname="preview";static classname="Preview_56799f0192bc408b0160";styles(){return""}template(){return(0,ot.classlist)().add("block","w-full","h-full","scroll-auto"),()=>[Vt.default.createText(`
`,!1),Vt.default.createElement("div",{class:"bg-white tx-black arial p-10 h-full"},[...this._toNodeList((0,ot.children)())]).element]}};var z=w(q()),Yr=w(Y());var M=function(a,...e){let r=Qt(a);for(let s=0;s<e.length;s++)r=r.replace("%s",String(e[s]));return r},Qt=function(a){return a};var pe=class extends Yr.default{static id="ac78a9f3111e4c80978c";static tagname="translate";static classname="Translate_ac78a9f3111e4c80978c";styles(){return""}template(){let{trim:e=!1,p:r=!1,li:s=!1,div:n=!1}=this.props,i=this.originalChildren,f=[],_=[];for(let A of i)typeof A=="string"?f.push(A):A instanceof Node&&A.textContent?f.push(A.textContent):(f.push("%s"),_.push(A));let b=f.join("");e&&(b=b.replace(/\s+/," ").trim());let E=Qt(b).split("%s"),x=[];for(let A=0;A<E.length;A++)x.push(document.createTextNode(E[A])),_[A]&&x.push(_[A]);return()=>[z.default.createText(`
    `,!1),...r?[z.default.createText(`
      `,!1),z.default.createElement("p",{},[...this._toNodeList(x)]).element,z.default.createText(`
    `,!1)]:s?[,z.default.createText(`
      `,!1),z.default.createElement("li",{},[...this._toNodeList(x)]).element,z.default.createText(`
    `,!1)]:n?[,z.default.createText(`
      `,!1),z.default.createElement("div",{},[...this._toNodeList(x)]).element,z.default.createText(`
    `,!1)]:[,z.default.createText(`
      `,!1),...this._toNodeList(x),z.default.createText(`
    `,!1)]]}};var S=w(q()),Jr=w(Y()),ct=w(de()),ge=class extends Jr.default{static id="507955b1d57f4ccbd729";static tagname="tweet-box";static classname="TweetBox_507955b1d57f4ccbd729";styles(){return`a, a:link, a:hover, a:active, a:visited {
    color: var(--info);
    text-decoration: none;
  }
  :host {
    display: block;
  }
  .tweet-box {
    background-color: var(--bg-2);
    border: 1px solid var(--bd-2);
    border-radius: 5px;
    display: flex;
    margin: 10px;
    padding: 20px;
  }
  .tweet-box .avatar {
    margin-right: 20px;
  }
  .tweet-box .avatar img {
    border-radius: 50%;
    width: 60px;
  }
  .tweet-box .content {
    flex: 1;
  }
  .tweet-box .content h3 {
    font-size: 16px;
    margin: 0;
  }
  .tweet-box .content a {
    font-size: 12px;
  }

  .tweet-box .content .message {
    font-size: 14px;
    line-height: 24px;
  }`}template(){let{name:e,handle:r,href:s,src:n}=(0,ct.props)();return()=>[S.default.createText(`
`,!1),S.default.createElement("main",{class:"tweet-box"},[S.default.createText(`
  `,!1),S.default.createElement("aside",{class:"avatar"},[S.default.createText(`
    `,!1),S.default.createElement("img",{src:n,alt:r}).element,S.default.createText(`
  `,!1)]).element,S.default.createText(`
  `,!1),S.default.createElement("section",{class:"content"},[S.default.createText(`
    `,!1),S.default.createElement("h3",{},[...this._toNodeList(e)]).element,S.default.createText(`
    `,!1),S.default.createElement("a",{href:s,target:"_blank"},[...this._toNodeList(r)]).element,S.default.createText(`
    `,!1),S.default.createElement("div",{class:"message"},[...this._toNodeList((0,ct.children)())]).element,S.default.createText(`
  `,!1)]).element,S.default.createText(`
`,!1)]).element,S.default.createText(`
`,!1)]}};var ut=w(de());var ft=class a extends Zr.default{static sync(){return new a().sync()}template(){let e="/ink/index.html",r=M("Ink - The reactive web component template engine."),s=M("Ink is a template engine that generates web components and support reactivity.");return[t.default.createText(`
`,!1),t.default.createElement("html",{},[t.default.createText(`
  `,!1),t.default.createElement("head",{},[t.default.createText(`
  `,!1),t.default.createElement("meta",{charset:"utf-8"}),t.default.createText(`
  `,!1),t.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.default.createText(`
  `,!1),t.default.createElement("title",{},[...this._toNodeList(r)]),t.default.createText(`
  `,!1),t.default.createElement("meta",{name:"description",content:s}),t.default.createText(`
  `,!1),t.default.createElement("meta",{property:"og:title",content:r}),t.default.createText(`
  `,!1),t.default.createElement("meta",{property:"og:description",content:s}),t.default.createText(`
  `,!1),t.default.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),t.default.createText(`
  `,!1),t.default.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${e}`}),t.default.createText(`
  `,!1),t.default.createElement("meta",{property:"og:type",content:"website"}),t.default.createText(`
  `,!1),t.default.createElement("meta",{name:"twitter:card",content:"summary"}),t.default.createText(`
  `,!1),t.default.createElement("meta",{name:"twitter:site",content:"@stackpress"}),t.default.createText(`
  `,!1),t.default.createElement("meta",{name:"twitter:title",content:r}),t.default.createText(`
  `,!1),t.default.createElement("meta",{name:"twitter:description",content:s}),t.default.createText(`
  `,!1),t.default.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),t.default.createText(`
  `,!1),t.default.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"}),t.default.createText(`
  `,!1),t.default.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"}),t.default.createText(`
  `,!1),t.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"}),t.default.createText(`
  `,!1),t.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"}),t.default.createText(`
  `,!1),t.default.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,ut.env)("BUILD_ID")}.css`}),t.default.createElement("script",{"data-template":!0,type:"text/json"},[t.default.createText("__TEMPLATE_DATA__",!0)]),t.default.createText(`
  `,!1),t.default.createElement("script",{src:`/ink/build/client/${(0,ut.env)("BUILD_ID")}.js`}),t.default.createText(`
  `,!1),...(0,ut.env)("PUBLIC_ENV")==="development"?[t.default.createText(`
    `,!1),t.default.createElement("script",{src:"/dev.js"}),t.default.createText(`
  `,!1)]:[],t.default.createText(`
`,!1)]),t.default.createText(`
  `,!1),t.default.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},[t.default.createText(`
    `,!1),t.default.createElement("panel-layout",{},[t.default.createText(`
      `,!1),t.default.createElement("header",{},[t.default.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},[t.default.createText(`
  `,!1),...e!=="/ink/index.html"&&e!=="/ink/500.html"?[t.default.createText(`
    `,!1),t.default.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:toggle},[]),t.default.createText(`
    `,!1),t.default.createElement("div",{class:"flex-grow"},[]),t.default.createText(`
  `,!1)]:[,t.default.createText(`
    `,!1),t.default.createElement("a",{href:"/ink"},[t.default.createText(`
      `,!1),t.default.createElement("img",{alt:"Ink Logo",class:"h-26 mr-10",src:"/ink/ink-icon.png"}),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)],t.default.createText(`
  `,!1),t.default.createElement("nav",{class:"flex flex-center-y"},[t.default.createText(`
    `,!1),t.default.createElement("a",{class:"tx-primary",href:"/ink/docs/index.html"},[t.default.createText("Docs",!1)]),t.default.createText(`
    `,!1),t.default.createElement("a",{class:"tx-t-1 tx-5xl ml-10",href:"https://github.com/stackpress/ink",target:"_blank"},[t.default.createText(`
      `,!1),t.default.createElement("i",{class:"fab fa-github"},[]),t.default.createText(`
    `,!1)]),t.default.createText(`
    `,!1),t.default.createElement("a",{class:"bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center",href:"https://www.npmjs.com/package/@stackpress/ink",target:"_blank"},[t.default.createText(`
      `,!1),t.default.createElement("i",{class:"fab fa-npm tx-white"},[]),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)]),t.default.createText(`
`,!1)])]),t.default.createText(`
      `,!1),t.default.createElement("main",{class:"scroll-auto"},[t.default.createText(`
        `,!1),t.default.createElement("section",{class:"bg-t-1 py-40 tx-center w-full"},[t.default.createText(`
          `,!1),t.default.createElement("img",{class:"h-100",src:"/ink/ink-logo.png",alt:"Ink Logo"}),t.default.createText(`
          `,!1),t.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-30 py-30 tx-lh-36"},[t.default.createText(`
            The reactive web component template engine.
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("element-button",{primary:!0,xl:!0,rounded:!0,class:"mr-10",href:"/ink/docs/getting-started.html"},[t.default.createText(`
            `,!1),...this._toNodeList(M("Get Started")),t.default.createText(`
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("element-button",{secondary:!0,xl:!0,rounded:!0,class:"inline-block",href:"/ink/docs/index.html"},[t.default.createText(`
            `,!1),...this._toNodeList(M("Read the Docs")),t.default.createText(`
          `,!1)]),t.default.createText(`
        `,!1)]),t.default.createText(`
        `,!1),t.default.createElement("section",{class:"m-auto mw-960 px-20"},[t.default.createText(`
          `,!1),t.default.createElement("i18n-translate",{p:!0,trim:!0,class:"p-20 tx-center tx-lh-36 tx-18"},[t.default.createText(`
            Ink is a modern HTML markup language and a server first 
            template engine with a built-in parser/compiler that 
            generates web components and supports reactivity.
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("ide-app",{class:"block",title:"Basic Example"},[t.default.createText(`
            `,!1),t.default.createElement("div",{class:"flex bg-white md-block"},[t.default.createText(`
              `,!1),t.default.createElement("ide-code",{numbers:!0,trim:!0,detab:16,class:"basis-half"},[...this._toNodeList(`
                <style>
                  h1 { font-weight: bold; }
                </style>
                <script>
                  const name = 'world';
                <\/script>
                <h1>Hello {name}!</h1>
              `)]),t.default.createText(`
              `,!1),t.default.createElement("ide-preview",{class:"basis-half"},[t.default.createText(`
                `,!1),t.default.createElement("div",{},[t.default.createText(`
                  `,!1),t.default.createElement("h1",{},[...this._toNodeList(M("Hello world!"))]),t.default.createText(`
                `,!1)]),t.default.createText(`
              `,!1)]),t.default.createText(`
            `,!1)]),t.default.createText(`
          `,!1)]),t.default.createText(`
        `,!1)]),t.default.createText(`
        `,!1),t.default.createElement("section",{class:"bg-t-1 m-auto py-40 px-20 tx-center"},[t.default.createText(`
          `,!1),t.default.createElement("ul",{class:"flex flex-center list-none p-0 tx-center md-block"},[t.default.createText(`
            `,!1),t.default.createElement("li",{class:"w-third mw-300 md-mw-400 md-w-auto md-m-auto"},[t.default.createText(`
              `,!1),t.default.createElement("div",{class:"p-10"},[t.default.createText(`
                `,!1),t.default.createElement("h3",{class:"mb-20 tx-upper"},[t.default.createText(`
                  `,!1),...this._toNodeList(M("Expressive Markup")),t.default.createText(`
                `,!1)]),t.default.createText(`
                `,!1),t.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-16 tx-lh-24"},[t.default.createText(`
                  Any data type as attributes. Easily express logic with 
                  markup directives like if, each, and try catch. 
                `,!1)]),t.default.createText(`
              `,!1)]),t.default.createText(`
            `,!1)]),t.default.createText(`
            `,!1),t.default.createElement("li",{class:"w-third mw-300 md-mw-400 md-w-auto md-m-auto md-mt-20"},[t.default.createText(`
              `,!1),t.default.createElement("div",{class:"p-10"},[t.default.createText(`
                `,!1),t.default.createElement("h3",{class:"mb-20 tx-upper"},[t.default.createText(`
                  `,!1),...this._toNodeList(M("Reactive Signals")),t.default.createText(`
                `,!1)]),t.default.createText(`
                `,!1),t.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-16 tx-lh-24"},[t.default.createText(`
                  Easily transition from backend logic to reactive states.
                  No Hydration and no memoization needed.
                `,!1)]),t.default.createText(`
              `,!1)]),t.default.createText(`
            `,!1)]),t.default.createText(`
            `,!1),t.default.createElement("li",{class:"w-third mw-300 md-mw-400 md-w-auto md-m-auto md-mt-20"},[t.default.createText(`
              `,!1),t.default.createElement("div",{class:"p-10"},[t.default.createText(`
                `,!1),t.default.createElement("h3",{class:"mb-20 tx-upper"},[t.default.createText(`
                  `,!1),...this._toNodeList(M("Bare Metal")),t.default.createText(`
                `,!1)]),t.default.createText(`
                `,!1),t.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-16 tx-lh-24"},[t.default.createText(`
                  Work with the DOM directly. Import any web components 
                  from any source. Works with Lit, HTMX.
                `,!1)]),t.default.createText(`
              `,!1)]),t.default.createText(`
            `,!1)]),t.default.createText(`
          `,!1)]),t.default.createText(`
        `,!1)]),t.default.createText(`
        `,!1),t.default.createElement("section",{class:"m-auto mw-960 px-20 py-40"},[t.default.createText(`
          `,!1),t.default.createElement("h3",{class:"mt-40 mb-20 tx-center tx-upper"},[t.default.createText(`
            `,!1),...this._toNodeList(M("Server Setup")),t.default.createText(`
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-center tx-lh-24 mb-20"},[t.default.createText(`
            Ink can be used with popular server 
            frameworks in just a few lines of code.
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("ide-app",{title:"Server Example"},[t.default.createText(`
            `,!1),t.default.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              import ink from '@stackpress/ink/compiler';
              //make a ink compiler
              const compiler = ink();
              //render HTML
              const results = compiler.render('./page.ink');
            `)]),t.default.createText(`
          `,!1)]),t.default.createText(`

          `,!1),t.default.createElement("h3",{class:"mt-40 mb-20 tx-center tx-upper"},[t.default.createText(`
            `,!1),...this._toNodeList(M("Props")),t.default.createText(`
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-center tx-lh-24 mb-20"},[t.default.createText(`
            Import your component props and use immediately
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("ide-app",{title:"Props Example"},[t.default.createText(`
            `,!1),t.default.createElement("div",{class:"flex bg-white md-block"},[t.default.createText(`
              `,!1),t.default.createElement("ide-code",{numbers:!0,trim:!0,detab:16,class:"basis-half"},[...this._toNodeList(`
                <style>
                  h1 { font-weight: bold; }
                </style>
                <script>
                  import { props } from '@stackpress/ink';
                  const { name } = props();
                <\/script>
                <h1>Hello {name}!</h1>
              `)]),t.default.createText(`
              `,!1),t.default.createElement("ide-preview",{class:"basis-half"},[t.default.createText(`
                `,!1),t.default.createElement("div",{},[t.default.createText(`
                  `,!1),t.default.createElement("h1",{},[...this._toNodeList(M("Hello world!"))]),t.default.createText(`
                `,!1)]),t.default.createText(`
              `,!1)]),t.default.createText(`
            `,!1)]),t.default.createText(`
          `,!1)]),t.default.createText(`

          `,!1),t.default.createElement("h3",{class:"mt-40 mb-20 tx-center tx-upper"},[t.default.createText(`
            `,!1),...this._toNodeList(M("Reactive Signals")),t.default.createText(`
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-center tx-lh-24 mb-20"},[t.default.createText(`
            Use signals to manage state changes and re-renders.
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("ide-app",{title:"Signal Example"},[t.default.createText(`
            `,!1),t.default.createElement("div",{class:"flex bg-white md-block"},[t.default.createText(`
              `,!1),t.default.createElement("ide-code",{numbers:!0,trim:!0,detab:16,class:"basis-half"},[...this._toNodeList(`
                <style>
                  h1 { font-weight: bold; }
                </style>
                <script>
                  import { signal } from '@stackpress/ink';
                  const name = signal('world');
                  name.value += '!';
                <\/script>
                <h1>Hello {name.value}</h1>
              `)]),t.default.createText(`
              `,!1),t.default.createElement("ide-preview",{class:"basis-half"},[t.default.createText(`
                `,!1),t.default.createElement("div",{},[t.default.createText(`
                  `,!1),t.default.createElement("h1",{},[...this._toNodeList(M("Hello world!"))]),t.default.createText(`
                `,!1)]),t.default.createText(`
              `,!1)]),t.default.createText(`
            `,!1)]),t.default.createText(`
          `,!1)]),t.default.createText(`

          `,!1),t.default.createElement("h3",{class:"mt-40 mb-20 tx-center tx-upper"},[t.default.createText(`
            `,!1),...this._toNodeList(M("Components and Templates")),t.default.createText(`
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-center tx-lh-24 mb-20"},[t.default.createText(`
            Import components and templates for reusability.
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("ide-app",{title:"Import Example"},[t.default.createText(`
            `,!1),t.default.createElement("div",{class:"flex bg-white md-block"},[t.default.createText(`
              `,!1),t.default.createElement("ide-code",{numbers:!0,trim:!0,detab:16,class:"basis-half"},[...this._toNodeList(`
                <!-- page.html -->
                <link rel="import" href="./my-heading.html" />
                <script>
                  const name = 'world';
                <\/script>
                <my-heading {name}>Hello</my-heading>
              `)]),t.default.createText(`
              `,!1),t.default.createElement("ide-code",{class:"basis-half b-t-1 b-solid by-0 bl-1 br-0 md-b-0",trim:!0,detab:16},[...this._toNodeList(`
                <!-- my-heading.html -->
                <script>
                  import { props } from '@stackpress/ink';
                  const { name, children } = props();
                <\/script>
                <h1>{children} {name}</h1>
              `)]),t.default.createText(`
            `,!1)]),t.default.createText(`
          `,!1)]),t.default.createText(`

          `,!1),t.default.createElement("h3",{class:"mt-40 mb-20 tx-center tx-upper"},[t.default.createText(`
            `,!1),...this._toNodeList(M("Conditionals and Iterations")),t.default.createText(`
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-center tx-lh-24 mb-20"},[t.default.createText(`
            Case for conditions and iterations in an expressive way.
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("ide-app",{title:"Conditional + Iteration Example"},[t.default.createText(`
            `,!1),t.default.createElement("div",{class:"flex bg-white md-block"},[t.default.createText(`
              `,!1),t.default.createElement("ide-code",{numbers:!0,trim:!0,detab:16,class:"basis-half"},[...this._toNodeList(`
                <script>
                  const name = 'world';
                  const show = name === "world";
                <\/script>

                <if true=show>
                  <h1>Hello {name}</h1>
                </if>
              `)]),t.default.createText(`
              `,!1),t.default.createElement("ide-code",{class:"basis-half b-t-1 b-solid by-0 bl-1 br-0 md-b-0",trim:!0,detab:16},[...this._toNodeList(`
                <script>
                  const list = [ 'a', 'b', 'c' ];
                <\/script>
                <ul>
                  <each key=i value=item from=list>
                    <li>{i}: {item}</li>
                  </each>
                </ul>
              `)]),t.default.createText(`
            `,!1)]),t.default.createText(`
          `,!1)]),t.default.createText(`
        `,!1)]),t.default.createText(`
        `,!1),t.default.createElement("section",{class:"m-auto px-20 py-40 tx-center bg-t-2"},[t.default.createText(`
          `,!1),t.default.createElement("h3",{class:"tx-h-242424 tx-30 tx-upper"},[t.default.createText(`
            `,!1),...this._toNodeList(M("Works With Popular Server Frameworks")),t.default.createText(`
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("div",{class:"flex flex-center flex-wrap mx-auto mt-40 mb-0 sm-block"},[t.default.createText(`
            `,!1),t.default.createElement("a",{class:"block basis-third mb-20",href:"https://expressjs.com/",target:"_blank"},[t.default.createText(`
              `,!1),t.default.createElement("img",{class:"h-60",src:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",alt:"Express"}),t.default.createText(`
            `,!1)]),t.default.createText(`
            `,!1),t.default.createElement("a",{class:"block basis-third mb-20",href:"https://fastify.dev/",target:"_blank"},[t.default.createText(`
              `,!1),t.default.createElement("img",{class:"h-60",src:"https://upload.wikimedia.org/wikipedia/commons/0/0a/Fastify_logo.svg",alt:"Fastify"}),t.default.createText(`
            `,!1)]),t.default.createText(`
            `,!1),t.default.createElement("a",{class:"block basis-third mb-20",href:"https://hapi.dev/",target:"_blank"},[t.default.createText(`
              `,!1),t.default.createElement("img",{class:"h-60",src:"https://raw.githubusercontent.com/hapijs/assets/master/images/hapi.png",alt:"Hapi"}),t.default.createText(`
            `,!1)]),t.default.createText(`
            `,!1),t.default.createElement("a",{class:"block basis-third mb-20",href:"https://koajs.com/",target:"_blank"},[t.default.createText(`
              `,!1),t.default.createElement("img",{class:"h-60",src:"https://cdn.icon-icons.com/icons2/2699/PNG/512/koajs_logo_icon_168379.png",alt:"Koa"}),t.default.createText(`
            `,!1)]),t.default.createText(`
            `,!1),t.default.createElement("a",{class:"block basis-third mb-20",href:"https://nestjs.com/",target:"_blank"},[t.default.createText(`
              `,!1),t.default.createElement("img",{class:"h-60",src:"https://cdn.icon-icons.com/icons2/2699/PNG/512/nestjs_logo_icon_169927.png",alt:"NestJS"}),t.default.createText(`
            `,!1)]),t.default.createText(`
            `,!1),t.default.createElement("a",{class:"block basis-third mb-20",href:"http://restify.com/",target:"_blank"},[t.default.createText(`
              `,!1),t.default.createElement("img",{class:"h-60",src:"https://raw.githubusercontent.com/restify/node-restify/gh-images/logo/png/restify_logo_black_transp_288x288.png?raw=true",alt:"Restify"}),t.default.createText(`
            `,!1)]),t.default.createText(`
          `,!1)]),t.default.createText(`
        `,!1)]),t.default.createText(`
        `,!1),t.default.createElement("section",{class:"bg-t-1 m-auto py-40 px-20"},[t.default.createText(`
          `,!1),t.default.createElement("h3",{class:"tx-26 tx-center"},[t.default.createText(`
            `,!1),...this._toNodeList(M("Ink Loves Developers!")),t.default.createText(`
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("section",{class:"flex flex-wrap md-block"},[t.default.createText(`
            `,!1),t.default.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Joff Tiquez",handle:"@jrtiquez",href:"https://twitter.com/jrtiquez",src:"https://github.com/jofftiquez.png"},[t.default.createText(`
              `,!1),t.default.createElement("p",{},[t.default.createText("Im a vue developer. No need for this. OSSPH does not support this project.",!1)]),t.default.createText(`
            `,!1)]),t.default.createText(`
            `,!1),t.default.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Primeagen",handle:"@theprimeagen",href:"https://twitter.com/ThePrimeagen",src:"https://pbs.twimg.com/profile_images/1759330620160049152/2i_wkOoK_400x400.jpg"},[t.default.createText(`
              `,!1),t.default.createElement("p",{},[t.default.createText("Ink? Never heard of it...",!1),t.default.createElement("br",{}),t.default.createText('"The Name..."',!1)]),t.default.createText(`
            `,!1)]),t.default.createText(`
            `,!1),t.default.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Kristian Quirapas",handle:"@YourCompanyCTO",href:"https://twitter.com/YourCompanyCTO",src:"https://avatars.githubusercontent.com/u/85150796?v=4"},[t.default.createText(`
              `,!1),t.default.createElement("p",{},[t.default.createText("Ink is good news for Node developers. I'm a rust developer so it don't matter to me.",!1)]),t.default.createText(`
            `,!1)]),t.default.createText(`
            `,!1),t.default.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Drizzle Team",handle:"@drizzle.team",href:"https://twitter.com/DrizzleORM",src:"https://pbs.twimg.com/profile_images/1767809210060877824/mAtEmNk0_400x400.jpg"},[t.default.createText(`
              `,!1),t.default.createElement("p",{},[t.default.createText("Ink copied this section from us. We are the original.",!1)]),t.default.createText(`
            `,!1)]),t.default.createText(`
            `,!1),t.default.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Chris B",handle:"@cblanquera",href:"https://twitter.com/cblanquera",src:"https://avatars.githubusercontent.com/u/120378?v=4"},[t.default.createText(`
              `,!1),t.default.createElement("p",{},[t.default.createText("After creating the Ink project, I am really excited to get back to ReactJS.",!1)]),t.default.createText(`
            `,!1)]),t.default.createText(`
            `,!1),t.default.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Theo",handle:"@t3dotgg",href:"https://twitter.com/t3dotgg",src:"https://yt3.googleusercontent.com/4NapxEtLcHQ6wN2zA_DMmkOk47RFb_gy6sjSmUZGg_ARHjlIUjFsrNFddrcKMkTYpBNxCp3J=s160-c-k-c0x00ffffff-no-rj"},[t.default.createText(`
              `,!1),t.default.createElement("p",{},[t.default.createText("Ink? no thanks. Keep your stack front end. App router for life.",!1)]),t.default.createText(`
            `,!1)]),t.default.createText(`
          `,!1)]),t.default.createText(`
        `,!1)]),t.default.createText(`
        `,!1),t.default.createElement("section",{class:"m-auto py-40 px-20 tx-center"},[t.default.createText(`
          `,!1),t.default.createElement("h3",{class:"tx-26 mb-20"},[t.default.createText(`
            `,!1),...this._toNodeList(M("What are you waiting for?")),t.default.createText(`
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("element-button",{primary:!0,xl:!0,rounded:!0,class:"inline-block",style:"margin-right:10px;",href:"/ink/docs/getting-started.html"},[t.default.createText(`
            `,!1),...this._toNodeList(M("Get Started")),t.default.createText(`
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("element-button",{secondary:!0,xl:!0,rounded:!0,class:"inline-block",href:"/ink/docs/index.html"},[t.default.createText(`
            `,!1),...this._toNodeList(M("Read the Docs")),t.default.createText(`
          `,!1)]),t.default.createText(`
        `,!1)]),t.default.createText(`
      `,!1)]),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)]),t.default.createText(`
`,!1)])]}},Os={PanelLayout_90ffea9b799a24d212c6:ne,ElementButton_32c6f995d0374d86f7f4:le,IdeApp_d640748373b32ef31882:fe,IdeCode_07bacf6bf1ae49080e95:me,IdePreview_56799f0192bc408b0160:he,I18nTranslate_ac78a9f3111e4c80978c:pe,TweetBox_507955b1d57f4ccbd729:ge},Qr={"panel-layout":ne,"element-button":le,"ide-app":fe,"ide-code":me,"ide-preview":he,"i18n-translate":pe,"tweet-box":ge},Ns="4a453bfabd236534608c";dt.default.once("ready",()=>{ft.sync();for(let[a,e]of Object.entries(Qr))customElements.getName(e)||customElements.define(a,e);dt.default.emit("mounted",document.body)});return na(Ds);})();
/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/
