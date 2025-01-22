var InkAPI=(()=>{var ss=Object.create;var Ie=Object.defineProperty;var as=Object.getOwnPropertyDescriptor;var ns=Object.getOwnPropertyNames;var is=Object.getPrototypeOf,ls=Object.prototype.hasOwnProperty;var C=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports),os=(s,e)=>{for(var r in e)Ie(s,r,{get:e[r],enumerable:!0})},tr=(s,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ns(e))!ls.call(s,n)&&n!==r&&Ie(s,n,{get:()=>e[n],enumerable:!(a=as(e,n))||a.enumerable});return s};var v=(s,e,r)=>(r=s!=null?ss(is(s)):{},tr(e||!s||!s.__esModule?Ie(r,"default",{value:s,enumerable:!0}):r,s)),cs=s=>tr(Ie({},"__esModule",{value:!0}),s);var K=C(gt=>{"use strict";Object.defineProperty(gt,"__esModule",{value:!0});var pt=class{constructor(){this._parent=null}get parent(){return this._parent}get parentElement(){return this._parent}set parent(e){this._parent=e}};gt.default=pt});var xt=C(me=>{"use strict";var us=me&&me.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(me,"__esModule",{value:!0});var fs=us(K()),bt=class extends fs.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(e){super(),this.name="#comment",this.type=8,this.value=e}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!--${this.value}-->`}};me.default=bt});var yt=C(pe=>{"use strict";var ds=pe&&pe.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(pe,"__esModule",{value:!0});var hs=ds(K()),_t=class extends hs.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(e){super(),this.name="#doctype",this.type=10,this.value=e}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!DOCTYPE ${this.value}>`}};pe.default=_t});var vt=C(ge=>{"use strict";var ms=ge&&ge.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ge,"__esModule",{value:!0});var ps=ms(K()),gs=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],Tt=class s extends ps.default{get attributes(){return Object.fromEntries(this._attributes)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(e=>e instanceof s)}get nodeName(){return this.name.toUpperCase()}get nodes(){let e=[this];return this._flatten(Array.from(this.children),e),e}get nodeType(){return this.type}get parent(){return this._parent}set parent(e){this._parent=e}constructor(e,r={},a=[]){super(),this.type=1,this._parent=null,this.name=e,this._attributes=new Map(Object.entries(r)),this.children=new Set(a.filter(Boolean))}appendChild(e){return this.children.add(e),e.parent=this,this}export(){return{type:this.type,name:this.name,attributes:Object.fromEntries(this._attributes.entries()),children:Array.from(this.children).map(e=>e.export())}}getAttribute(e){return this._attributes.get(e)}hasAttribute(e){return this._attributes.has(e)}removeAttribute(e){return this._attributes.delete(e),this}removeChild(e){this.children.delete(e),e.parent=null}setAttribute(e,r){return this._attributes.set(e,r),this}toString(){let e=Array.from(this._attributes.entries()),r=e.length>0?" "+e.map(([n,i])=>{if(typeof i=="string"&&!/["<>\n]/.test(i))return`${n}="${i}"`;if(typeof i=="boolean")return i?n:""}).join(" "):"";if(gs.includes(this.name))return`<${this.name}${r} />`;let a=Array.from(this.children.values()).map(n=>n.toString()).join("");return`<${this.name}${r}>${a}</${this.name}>`}_flatten(e,r){e.forEach(a=>{r.push(a),a instanceof s&&this._flatten(Array.from(a.children),r)})}};ge.default=Tt});var At=C(be=>{"use strict";var bs=be&&be.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(be,"__esModule",{value:!0});var xs=bs(K()),Et=class extends xs.default{get nodeName(){return"#text"}get nodeType(){return this.type}get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(e,r=!1){super(),this.name="#text",this.type=3,this._escape=r,this._value=e}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return this.value}};be.default=Et});var $e=C(xe=>{"use strict";var qe=xe&&xe.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(xe,"__esModule",{value:!0});var _s=qe(xt()),ys=qe(yt()),wt=qe(vt()),Ts=qe(At()),kt=class s{static createComment(e,r){let a=new _s.default(e);return r&&(a.parent=r),a}static createDoctype(e="html",r){let a=new ys.default(e);return r&&(a.parent=r),a}static createElement(e,r={},a=[],n){let i=new wt.default(e,r,a);return n&&(i.parent=n),i}static createText(e,r=!1,a){let n=new Ts.default(e,r);return a&&(n.parent=a),n}static import(e,r){return e.map(a=>{let{value:n}=a,{name:i,attributes:h,children:_}=a;switch(a.type){case 1:let x=this.createElement(i,h,[],r);return s.import(_,x).forEach(E=>x.appendChild(E)),x;case 3:return this.createText(n,!0,r);case 8:return this.createComment(n,r);case 10:return this.createDoctype(n,r)}return null}).filter(Boolean)}static load(e){return new s(e)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(e=>e instanceof wt.default)}get nodes(){return Array.from(this.children).map(e=>e instanceof wt.default?e.nodes:[e]).flat()}constructor(e){this.children=new Set(e.filter(Boolean))}export(){return this.childList.map(e=>e.export())}toString(){return Array.from(this.children).map(e=>e.toString()).join("")}};xe.default=kt});var G=C(_e=>{"use strict";Object.defineProperty(_e,"__esModule",{value:!0});_e.TemplateData=void 0;var Ue=class{constructor(){window.__TEMPLATE_DATA__||(window.__TEMPLATE_DATA__={})}clear(){return window.__TEMPLATE_DATA__={},this}delete(e){return this.has(e)?(delete window.__TEMPLATE_DATA__[e],!0):!1}entries(){return Object.entries(window.__TEMPLATE_DATA__)}has(e){return e in window.__TEMPLATE_DATA__}get(e){return window.__TEMPLATE_DATA__[e]}keys(){return Object.keys(window.__TEMPLATE_DATA__)}set(e,r){return window.__TEMPLATE_DATA__[e]=r,this}values(){return Object.values(window.__TEMPLATE_DATA__)}};_e.TemplateData=Ue;var vs=new Ue;_e.default=vs});var ye=C(j=>{"use strict";var Es=j&&j.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(j,"__esModule",{value:!0});j.match=j.ClientEmitter=j.events=void 0;j.bindAttribute=He;j.unbindAttribute=Ct;var rr=Es(F());j.events=["click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","wheel","keydown","keypress","keyup","blur","change","contextmenu","focus","input","submit","invalid","reset","search","select","copy","cut","paste","drag","dragstart","dragend","dragover","dragenter","dragleave","drop","scroll","durationchange","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","animationstart","animationend","animationiteration","transitionend","toggle"];var Be=class extends EventTarget{emit(e,r){return this.dispatchEvent(new CustomEvent(e,{detail:r})),this}on(e,r){if(e==="ready"&&document.readyState!=="loading"){let a=new CustomEvent("ready");return setTimeout(()=>r(a),1),this}return this.addEventListener(e,r),this}once(e,r){let a=n=>{this.unbind(e,a),r(n)};return this.on(e,a),this}unbind(e,r){return this.removeEventListener(e,r),this}};j.ClientEmitter=Be;var As=(s,e,r=!0)=>Array.from(s.querySelectorAll("*")).filter(a=>{let n=rr.default.get(a),i=n&&n.hasAttribute(e)&&(!r||!n.hasEvent(e));return i&&n.addEvent(e),i}).map(a=>rr.default.get(a));j.match=As;function He(s,e){ze.on("mounted",r=>{if(!r.detail)return;let a=r.detail;(0,j.match)(a.shadowRoot||a,s).forEach(e)})}function Ct(s,e){ze.on("unmounted",r=>{if(!r.detail)return;let a=r.detail;(0,j.match)(a.shadowRoot||a,s,!1).forEach(e)})}var ze=new Be;j.default=(document.onreadystatechange=()=>{document.readyState!=="loading"&&ze.emit("ready")},He("mount",s=>{let e=s.getAttribute("mount");if(typeof e=="function"){let r=new CustomEvent("mount",{detail:{node:s,target:s.element}});e(r)}}),Ct("unmount",s=>{let e=s.getAttribute("unmount");if(typeof e=="function"){let r=new CustomEvent("unmount",{detail:{node:s,target:s.element}});e(r)}}),He("if",s=>{let e=s.getAttribute("if");(e===!1||e==="false"||typeof e=="function"&&!e())&&s.element.remove()}),j.events.forEach(s=>{He(s,e=>{let r=e.getAttribute(s);typeof r=="function"&&(e.element.removeEventListener(s,r),e.element.addEventListener(s,r))}),Ct(s,e=>{let r=e.getAttribute(s);typeof r=="function"&&e.element.removeEventListener(s,r)})}),ze)});var Ge=C(Te=>{"use strict";var ws=Te&&Te.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Te,"__esModule",{value:!0});var St=ws(ye()),Ot=class{get attributes(){return Object.assign({},this._attributes)}get element(){return this._element}get events(){return this._events}constructor(e,r){this._events=new Set,this._element=e,this._attributes=r}addEvent(e){return this._events.add(e),this}camel(){return Object.fromEntries(Object.entries(this._attributes).map(([e,r])=>e==="class"?["className",r]:[e.replace(/-([a-z])/g,(n,i)=>i.toUpperCase()).replaceAll("-",""),r]))}getAttribute(e){return this._attributes[e]}hasAttribute(e){return e in this._attributes}hasEvent(e){return this._events.has(e)}removeAttribute(e,r=!1){let a=this.getAttribute(e);return typeof a>"u"?this:(delete this._attributes[e],r||St.default.emit("attribute-remove",{element:this,key:e,previous:a}),this)}setAttribute(e,r,a=!1){if(typeof r>"u")return this.removeAttribute(e,a);let n=this.getAttribute(e);return n===r?this:(this._attributes[e]=r,a||(typeof n>"u"?St.default.emit("attribute-create",{element:this,key:e,value:r}):St.default.emit("attribute-update",{element:this,key:e,value:r,previous:n})),this)}setAttributes(e,r=!1){for(let[n,i]of Object.entries(e))this.setAttribute(n,i,r);let a=Object.keys(e);for(let n of Object.keys(this._attributes))a.includes(n)||this.removeAttribute(n,r);return this}tree(e,r,a){if(e||(e=Object.assign({},this._attributes)),r){let i=r.split("-");if(i.length>0){let h=i.shift();i.length>0?(e[h]||(e[h]={}),this.tree(e[h],i.join("-"),a)):e[h]=a}return e}let n={};for(let[i,h]of Object.entries(e))this.tree(n,i,h);return n}};Te.default=Ot});var Dt=C(Lt=>{"use strict";Object.defineProperty(Lt,"__esModule",{value:!0});Lt.default=()=>window.InkAPI});var F=C(ve=>{"use strict";var nr=ve&&ve.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ve,"__esModule",{value:!0});var sr=nr(Ge()),ks=nr(Dt()),ar=document.createElement("textarea"),Cs=s=>(ar.innerHTML=s,ar.value),We=class s{static get elements(){return this._elements}static createComponent(e,r,a={},n=[]){var i;let{registered:h}=r;if(!h&&!(!((i=(0,ks.default)())===null||i===void 0)&&i.elements[e]))return this.createVirtualComponent(e,r,a,n);let _=h||e,x=document.createElement(_);customElements.whenDefined(_).then(()=>{customElements.upgrade(x),x.initiated||x.connectedCallback()});let E=s.register(x,a);E.setAttributes(a,!0);for(let[b,A]of Object.entries(a))typeof A=="string"?x.setAttribute(b,A):A===!0&&x.setAttribute(b,"");return this._cleanChildren(n).forEach(b=>x.appendChild(b)),E}static createElement(e,r={},a=[]){let n=document.createElement(e);for(let[i,h]of Object.entries(r))typeof h=="string"?n.setAttribute(i,h):h===!0&&n.setAttribute(i,"");return this._cleanChildren(a).forEach(i=>n.appendChild(i)),this.register(n,r)}static createText(e,r=!0){return document.createTextNode(Cs(e))}static createVirtualComponent(e,r,a={},n=[]){let i=document.createElement(e);return i.definition=r,Object.setPrototypeOf(i,r.prototype),i.constructor=r.constructor,i.constructor.id=r.id,i.constructor.tagname=r.tagname,i.constructor.classname=r.classname,r.observedAttributes&&(i.constructor.observedAttributes=r.observedAttributes),i.register(a,n),i.element}static cloneElement(e,r=!1){var a;let n=e;if(n.definition){let i=n.originalChildren||[];return this.createComponent(n.nodeName.toLowerCase(),n.definition,n.props||{},r?i.map(h=>this.cloneElement(h,r)):[]).element}else if(e instanceof HTMLElement){let i=Array.from(e.childNodes);return this.createElement(e.nodeName.toLowerCase(),this.has(e)?(a=this.get(e))===null||a===void 0?void 0:a.attributes:Object.fromEntries(Array.from(e.attributes).map(h=>[h.name,h.value])),r?i.map(h=>this.cloneElement(h,r)):[]).element}return e.cloneNode(r)}static filter(e){let r=[];return this._elements.forEach((a,n)=>{e(a,n)&&r.push(a)}),r}static get(e){return this._elements.get(e)||null}static has(e){return this._elements.has(e)}static map(e){let r=[];return this._elements.forEach((a,n)=>{r.push(e(a,n))}),r}static register(e,r,a=!1){if(this.has(e))return this.get(e);r||Array.from(e.attributes).forEach(i=>{r=r||{},r[i.name]=i.value!==""?i.value:!0});let n=new sr.default(e,r||{});return this._elements.set(e,n),a&&Array.from(e.children).forEach(i=>{i instanceof Element&&this.register(i,void 0,!0)}),n}static _cleanChildren(e){return Array.from(e).filter(r=>typeof r<"u").map(r=>typeof r=="string"?this.createText(r):r instanceof sr.default?r.element:r)}};We._elements=new Map;ve.default=We});var ir=C(Ee=>{"use strict";var Ft=Ee&&Ee.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ee,"__esModule",{value:!0});var Ss=Ft($e()),Nt=Ft(G()),Mt=Ft(F()),jt=class{constructor(){let e=document.querySelector("script[data-template]");if(!e)throw new Error("TEMPLATE_DATA not found");try{window.__TEMPLATE_DATA__=JSON.parse(e.innerText.trim()),Object.entries(window.__TEMPLATE_DATA__).forEach(([r,a])=>{Nt.default.set(r,a)})}catch{throw new Error("TEMPLATE_DATA is not a valid JSON")}}bindings(){Nt.default.set("current","document");let e=this.template();Nt.default.delete("current");let r=Ss.default.load(e).elements,a=Array.from(r).map((n,i)=>[String(i),n.attributes]).filter(n=>Object.keys(n[1]).length);return Object.fromEntries(a)}sync(){let e=this.bindings(),r=Array.from(document.querySelectorAll("*"));for(let a of r){let n=Object.fromEntries(Array.from(a.attributes).map(h=>[h.nodeName,h.nodeValue&&h.nodeValue.length>0?h.nodeValue:!0])),i=String(Mt.default.elements.size);e[i]&&Object.assign(n,e[i]),Mt.default.register(a,n)}return e}_toNodeList(e){return typeof e=="object"&&typeof e.nodeType=="number"?[e]:Array.isArray(e)&&e.every(r=>typeof r=="object"&&typeof r.nodeType=="number")?e:[Mt.default.createText(String(e))]}};Ee.default=jt});var I=C(Ae=>{"use strict";var Ze=Ae&&Ae.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ae,"__esModule",{value:!0});var Os=Ze(Ge()),R=Ze(F()),Ye=Ze(ye()),Ve=Ze(G()),Pt=class s extends HTMLElement{static get registered(){return customElements.getName(this)}static register(){customElements.define(this.tagname,this)}get attr(){return Object.fromEntries(Array.from(this.attributes).map(e=>[e.name,e.value]))}get definition(){return this._definition||this.constructor}get element(){if(!R.default.has(this))throw new Error(`Component ${this.metadata.classname} not mapped.`);return R.default.get(this)}get initiated(){return this._initiated}get metadata(){let{id:e,classname:r,tagname:a,registered:n,observedAttributes:i=[]}=this.definition;return{id:e,tagname:a,classname:r,registered:n,observed:i}}get originalChildren(){return this._children}get props(){return this.getAttributes()}get propsCamel(){return this.element.camel()}get propsTree(){return this.element.tree()}get virtual(){return this._virtual}set props(e){this.setAttributes(e)}set definition(e){this._definition=e}set originalChildren(e){typeof this._children>"u"&&(this._children=this._cleanChildren(e||[]))}constructor(){if(super(),this._children=void 0,this._definition=null,this._initiated=!1,this._observer=null,this._rendering=!1,this._template=null,this._virtual=!1,!R.default.has(this)){let{registered:e}=this.metadata;if(!e)throw new Error(`Component ${this.metadata.classname} not registered in customElements.`);let r=Object.fromEntries(Array.from(this.attributes).map(a=>[a.name,a.value!==""?a.value:!0]));R.default.register(this,r)}}adoptedCallback(){this.render(),this.emit("adopt",this)}attributeChangedCallback(e,r,a){if(this._rendering)return;let n=r===null?"add":a===null?"remove":"update";a===null&&this.hasAttribute(e)?this.element.removeAttribute(e):a===""?this.element.setAttribute(e,!0):this.element.setAttribute(e,a),this.emit("attributechange",{action:n,name:e,prev:r,value:a,target:this})}clone(e=!1){return this.cloneElement(this,e)}cloneElement(e,r=!1){return R.default.cloneElement(e,r)}connectedCallback(){this.wait(),this.emit("connect",this)}createComponent(e,r,a={},n=[]){return R.default.createComponent(e,r,a,n)}createElement(e,r={},a=[]){return R.default.createElement(e,r,a)}disconnectedCallback(){this.emit("disconnect",this)}emit(e,r){return this.dispatchEvent(new CustomEvent(e,{detail:r})),this}getAttribute(e){return this.element.getAttribute(e)}getAttributes(){return Object.assign({},this.element.attributes)}getChildren(e=!0){return e===!0?Array.from(this.childNodes):e===!1?this._children:e===null&&this.shadowRoot?Array.from(this.shadowRoot.childNodes):[]}getElement(e){return R.default.get(e)}getParentComponent(){let e=this.parentElement;for(;e;){if(e instanceof s)return e;e=e.parentElement}return null}hasAttribute(e){return this.element.hasAttribute(e)}on(e,r){return this.removeEventListener(e,r),this.addEventListener(e,r),this}once(e,r){let a=n=>{this.removeEventListener(e,r),r(n)};return this.on(e,a),this}register(e={},r=[]){R.default.has(this)?R.default.get(this).setAttributes(e):R.default.register(this,e);for(let[a,n]of Object.entries(e))(typeof n=="string"||n===!0)&&super.setAttribute(a,n===""||n===a||n===!0?!0:n);this._children=this._cleanChildren(r),this._children.forEach(a=>this.appendChild(a)),this._virtual=!0,this.connectedCallback()}removeAttribute(e){let r=this.getAttribute(e);this.hasAttribute(e)&&this.element.removeAttribute(e),super.hasAttribute(e)&&super.removeAttribute(e),this._virtual&&this.metadata.observed.includes(e)&&this.attributeChangedCallback(e,r,null)}render(){let e=this.getParentComponent();if(e&&!e.initiated)return;if(this._rendering)return;this._rendering=!0;let r=Ve.default.get("current");Ve.default.set("current",this),this._template?Ye.default.emit("unmounted",this):this._template=this.template();let a=this._template().filter(Boolean),n=this.styles(),i=n.length===0?"light":"shadow",{light:h,shadow:_}=this._getChildren(a,i);if(_.length===0&&i==="light")this.textContent="",h.forEach(x=>this.appendChild(x));else{this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0});let x=document.createElement("style");x.innerText=n;let E=this.shadowRoot;E.textContent="",E.appendChild(x),_.forEach(b=>E.appendChild(b)),h.length&&(this.textContent="",h.forEach(b=>this.appendChild(b)))}return r?Ve.default.set("current",r):Ve.default.delete("current"),this._initiated=!0,this._rendering=!1,Ye.default.emit("mounted",this),this.shadowRoot?this.shadowRoot.innerHTML:this.innerHTML}setAttribute(e,r){let a=this.getAttribute(e);r===""||r===!0?(this.element.setAttribute(e,!0),super.setAttribute(e,"")):r===!1?(this.element.setAttribute(e,r),super.removeAttribute(e)):typeof r=="string"?(this.element.setAttribute(e,r),super.setAttribute(e,r)):this.element.setAttribute(e,r),this._virtual&&this.metadata.observed.includes(e)&&typeof r=="string"&&this.attributeChangedCallback(e,a,r)}setAttributes(e){Object.entries(e).forEach(([r,a])=>this.setAttribute(r,a))}unbind(e,r){return this.removeEventListener(e,r),this}wait(){if(document.readyState!=="loading")this._update();else{let e=()=>{this._update(),Ye.default.unbind("ready",e)};Ye.default.on("ready",e)}}_cleanChildren(e){return Array.from(e).filter(r=>typeof r<"u").map(r=>typeof r=="string"?R.default.createText(r):r instanceof Os.default?r.element:r)}_getChildren(e,r){let a=this._getTemplateNodes(e),n=this._getTemplateNodes(e,"light"),i=this._getTemplateNodes(e,"shadow"),h=a.length>0?a:e;return{light:n.length>0?n:r==="light"?h:[],shadow:i.length>0?i:r==="shadow"?h:[]}}_getTemplateNodes(e,r){let a=e.find(n=>this._isTemplate(n,r));return a?Array.from(a.childNodes||[]):[]}_isTemplate(e,r){if(e.nodeName!=="TEMPLATE")return!1;let a=e;return r?r===a.getAttribute("type"):!a.hasAttribute("type")}_toNodeList(e){return e instanceof Node?[e]:Array.isArray(e)&&e.every(r=>r instanceof Node)?e:[R.default.createText(String(e))]}_update(){typeof this._children>"u"&&(this._children=this._cleanChildren(Array.from(this.childNodes||[]))),this._initiated||this.render()}};Ae.default=Pt});var Rt=C(Ke=>{"use strict";Object.defineProperty(Ke,"__esModule",{value:!0});Ke.stylemap=Ls;function Ls(s={}){return new Je(Object.entries(s))}var Je=class s extends Map{add(e,r){this.has(e)||this.set(e,[]);let a=this.get(e);return typeof r=="string"||typeof r=="number"?a.push(r):Array.isArray(r)&&a.push(...r),this}clone(){let e=new s;for(let[r,a]of this.entries())e.set(r,a.slice());return e}replaceAll(e,r){for(let[a,n]of this.entries())this.set(a,n.map(i=>typeof i=="string"?i.replaceAll(e,r):i));return this}};Ke.default=Je});var we=C(X=>{"use strict";var Ds=X&&X.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(X,"__esModule",{value:!0});X.styleset=Ms;var Ns=Ds(Rt());function Ms(s={}){return new Qe(Object.entries(s))}var Qe=class extends Map{add(e,r,a){this.has(e)||this.set(e,new Ns.default);let n=this.get(e);return typeof a=="string"?n.set(r,a.split(" ")):Array.isArray(a)&&n.set(r,a),this}map(e,r){return this.set(e,r),this}toString(){let e=[];for(let[r,a]of this.entries()){let n=[];for(let[i,h]of a.entries())i&&h?.length&&n.push(`${i}:${h.join(" ")}`);n.length&&e.push(`${r}{${n.join(";")}}`)}return e.join("")}};X.default=Qe});var fr=C(It=>{"use strict";Object.defineProperty(It,"__esModule",{value:!0});It.default=js;function js(s,e,r=!1,a=":host",n="color"){let{color:i,white:h,black:_,info:x,warning:E,success:b,error:A,muted:y,primary:T,secondary:S,theme:l}=s,o=i||(l?`var(--${l})`:h?"var(--white)":_?"var(--black)":x?"var(--info)":E?"var(--warning)":b?"var(--success)":A?"var(--error)":y?"var(--muted)":T?"var(--primary)":S?"var(--secondary)":r);return o&&e.add(a,n,o),i?"color":h?"white":_?"black":x?"info":E?"warning":b?"success":A?"error":y?"muted":T?"primary":S?"secondary":"initial"}});var dr=C(qt=>{"use strict";Object.defineProperty(qt,"__esModule",{value:!0});qt.default=Fs;function Fs(s,e,r=!1,a=":host"){let{flex:n,none:i,inline:h,block:_,"inline-block":x,"inline-flex":E}=s,b=n?"flex":i?"none":_?"block":h?"inline":E?"inline-flex":x?"inline-block":r;return b&&e.add(a,"display",b),b||"initial"}});var hr=C($t=>{"use strict";Object.defineProperty($t,"__esModule",{value:!0});$t.default=Ps;function Ps(s,e,r=!1,a=":host",n="font-size"){let{size:i,xs:h,sm:_,md:x,lg:E,xl:b,xl2:A,xl3:y,xl4:T,xl5:S}=s,l=i?`${i}px`:h?"8px":_?"12px":x?"16px":E?"20px":b?"24px":A?"28px":y?"32px":T?"36px":S?"40px":r;return l&&e.add(a,n,l),i?"size":h?"xs":_?"sm":x?"md":E?"lg":b?"xl":A?"xl2":y?"xl3":T?"xl4":S?"xl5":"initial"}});var _r=C(ke=>{"use strict";var Rs=ke&&ke.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ke,"__esModule",{value:!0});var Is=Rs(I()),et=class extends Is.default{get field(){return this._field}constructor(){super(),this._field=this.attachInternals()}formAssociatedCallback(e){this.emit("formassociate",this)}formDisabledCallback(e){this.emit("formdisable",this)}formResetCallback(){this.emit("formreset",this)}};et.formAssociated=!0;ke.default=et});var se=C(Ce=>{"use strict";var qs=Ce&&Ce.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ce,"__esModule",{value:!0});Ce.default=Us;var $s=qs(G());function Us(s=null,e=!1){if(!s&&(s=$s.default.get("current"),!s)){if(!e)throw new Error("Not called within a Ink component");return null}return s}});var yr=C(Se=>{"use strict";var Hs=Se&&Se.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Se,"__esModule",{value:!0});var Bs=Hs(G());function zs(s){let e=Bs.default.get("env")||{};return s?e[s]||null:e}Se.default=zs});var Ut=C(Oe=>{"use strict";var Tr=Oe&&Oe.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Oe,"__esModule",{value:!0});Oe.default=Ys;var Gs=Tr(se()),Ws=Tr(G());function Ys(s=null){let e=(0,Gs.default)(s,!0);return typeof e=="string"?Ws.default.get("props")||{}:e?e.props:{}}});var Er=C(ae=>{"use strict";var vr=ae&&ae.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ae,"__esModule",{value:!0});ae.classlist=Js;ae.default=Ks;var Vs=vr(se()),Zs=vr(Ut());function Js(s=null){var e;if(s==="body")return document.body.classList;if(s==="head")return document.head.classList;if(s==="document")return(e=document.body.parentElement)===null||e===void 0?void 0:e.classList;let r=(0,Vs.default)(s);return r?.classList}function Ks(s=null){return(0,Zs.default)(s).class||""}});var Ar=C(V=>{"use strict";var Qs=V&&V.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(V,"__esModule",{value:!0});V.innerHTML=ea;V.innerText=ta;V.default=Ht;var Xs=Qs(se());function ea(s=null){let e=Ht(s),r=document.createElement("template");return r.append(...e.map(a=>a.cloneNode(!0))),r.innerHTML}function ta(s=null){let e=Ht(s),r=document.createElement("template");return r.append(...e.map(a=>a.cloneNode(!0))),r.innerText}function Ht(s=null){let e=(0,Xs.default)(s,!0);return typeof e!="string"&&e?e.originalChildren||[]:[]}});var wr=C(Z=>{"use strict";var ra=Z&&Z.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Z,"__esModule",{value:!0});Z.SignalRegistry=void 0;Z.default=aa;var sa=ra(se()),ne=class s{static observe(e,r){let a={getter:()=>i.raw,setter:_=>_},n=new Set,i={raw:r,change(_){return n.add(_),i},getter(_){return a.getter=_,i},setter(_){return a.setter=_,i}};Object.defineProperty(i,"value",{get(){return a.getter()},set(_){let x=a.setter(_),E=s.serialize(x)!==s.serialize(i.raw);i.raw=x,E&&(n.forEach(b=>b(x)),e.render())}});let h=this._observers.get(e);return h?(h.observed++,h.values.push(i)):this._observers.set(e,{observed:1,values:[i]}),i}static observer(e){return this._observers.get(e)||null}static serialize(e){return JSON.stringify(e)}};Z.SignalRegistry=ne;ne._observers=new Map;function aa(s,e=null){let r=(0,sa.default)(e);if(!r.initiated)return ne.observe(r,s);let a=ne.observer(r);if(!a)throw new Error("Signal state mismatch");return a.values[a.observed++%a.values.length]}});var Cr=C(H=>{"use strict";var na=H&&H.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(H,"__esModule",{value:!0});H.breakpoints=void 0;H.stylesheet=ia;var kr=na(we());H.breakpoints={all:0,xl4:1920,xl3:1536,xl2:1280,xl:1024,lg:992,md:767,sm:420,xs:360};function ia(){return new tt}var tt=class extends Map{add(e,r,a,n){return this.has(e)||this.set(e,new kr.default),this.get(e).add(r,a,n),this}map(e,r,a){return this.has(e)||this.set(e,new kr.default),this.get(e).map(r,a),this}toString(){var e;let r=[];for(let[a,n]of Object.entries(H.breakpoints)){let i=(e=this.get(a))===null||e===void 0?void 0:e.toString();if(i){if(a==="all"){r.push(i);continue}r.push(`@media (max-width:${n}px){${i}}`)}}return r.join("")}};H.default=tt});var Or=C(rt=>{"use strict";Object.defineProperty(rt,"__esModule",{value:!0});rt.getStatus=la;var Sr={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};rt.default=Sr;function la(s){return Object.values(Sr).find(e=>e.code===s)}});var Lr=C(zt=>{"use strict";Object.defineProperty(zt,"__esModule",{value:!0});var oa=Or(),Bt=class s extends Error{static for(e,...r){return r.forEach(function(a){e=e.replace("%s",String(a))}),new this(e)}static forErrors(e){let r=new this("Invalid Parameters");return r.withErrors(e),r}static require(e,r,...a){if(!e){for(let n of a)r=r.replace("%s",n);throw new this(r)}}static try(e){return{catch:r=>{try{return e()}catch(a){if(a instanceof s)return r(a,a.type);if(a instanceof Error){let n=s.upgrade(a);return r(n,n.type)}else if(typeof a=="string"){let n=s.for(a);return r(n,n.type)}return r(a,"unknown")}}}}static upgrade(e,r=500){if(e instanceof s)return e;let a=new this(e.message,r);return a.name=e.name,a.stack=e.stack,a}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(e,r=500){var a;super(e),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=r,this._status=((a=(0,oa.getStatus)(r))===null||a===void 0?void 0:a.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(e=0,r=0){let a={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(e,r)};return Object.keys(this._errors).length>0&&(a.errors=this._errors),a}trace(e=0,r=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(e,r||this.stack.length).map(n=>n.trim()).map(n=>{if(!n.startsWith("at"))return!1;let[i,h,_]=n.split(" ");_||(_=`(${h})`,h="<none>");let[x,E,b]=_.substring(1,_.length-1).split(":");return{method:h,file:x,line:parseInt(E)||0,char:parseInt(b)||0}}).filter(Boolean)}withCode(e){return this._code=e,this}withErrors(e){return this._errors=e,this}withPosition(e,r){return this._start=e,this._end=r,this}};zt.default=Bt});var Dr=C(Le=>{"use strict";var ca=Le&&Le.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Le,"__esModule",{value:!0});var ua=ca(Lr()),Gt=class extends ua.default{};Le.default=Gt});var Ir=C(u=>{"use strict";var fa=u&&u.__createBinding||(Object.create?function(s,e,r,a){a===void 0&&(a=r);var n=Object.getOwnPropertyDescriptor(e,r);(!n||("get"in n?!e.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(s,a,n)}:function(s,e,r,a){a===void 0&&(a=r),s[a]=e[r]}),da=u&&u.__setModuleDefault||(Object.create?function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}:function(s,e){s.default=e}),W=u&&u.__importStar||function(){var s=function(e){return s=Object.getOwnPropertyNames||function(r){var a=[];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[a.length]=n);return a},s(e)};return function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var a=s(e),n=0;n<a.length;n++)a[n]!=="default"&&fa(r,e,a[n]);return da(r,e),r}}(),P=u&&u.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(u,"__esModule",{value:!0});u.StyleSheet=u.StyleSet=u.StyleMap=u.stylesheet=u.styleset=u.stylemap=u.breakpoints=u.emitter=u.signal=u.innerHTML=u.innerText=u.children=u.classnames=u.classlist=u.props=u.env=u.data=u.client=u.component=u.SignalRegistry=u.ClientException=u.ClientEmitter=u.ClientElement=u.ClientRegistry=u.ClientComponent=u.ClientField=u.TemplateData=u.DOMNode=u.DOMText=u.DOMElement=u.DOMDocument=u.DOMDoctype=u.DOMComment=void 0;var ha=P(xt());u.DOMComment=ha.default;var ma=P(yt());u.DOMDoctype=ma.default;var pa=P($e());u.DOMDocument=pa.default;var ga=P(vt());u.DOMElement=ga.default;var ba=P(At());u.DOMText=ba.default;var xa=P(K());u.DOMNode=xa.default;var _a=P(_r());u.ClientField=_a.default;var ya=P(I());u.ClientComponent=ya.default;var Ta=P(F());u.ClientRegistry=Ta.default;var va=P(Ge());u.ClientElement=va.default;var Nr=W(ye());u.emitter=Nr.default;Object.defineProperty(u,"ClientEmitter",{enumerable:!0,get:function(){return Nr.ClientEmitter}});var Ea=P(Dt());u.client=Ea.default;var Aa=P(se());u.component=Aa.default;var Mr=W(G());u.data=Mr.default;Object.defineProperty(u,"TemplateData",{enumerable:!0,get:function(){return Mr.TemplateData}});var wa=P(yr());u.env=wa.default;var ka=P(Ut());u.props=ka.default;var jr=W(Er());u.classnames=jr.default;Object.defineProperty(u,"classlist",{enumerable:!0,get:function(){return jr.classlist}});var Wt=W(Ar());u.children=Wt.default;Object.defineProperty(u,"innerHTML",{enumerable:!0,get:function(){return Wt.innerHTML}});Object.defineProperty(u,"innerText",{enumerable:!0,get:function(){return Wt.innerText}});var Fr=W(wr());u.signal=Fr.default;Object.defineProperty(u,"SignalRegistry",{enumerable:!0,get:function(){return Fr.SignalRegistry}});var Pr=W(Rt());u.StyleMap=Pr.default;Object.defineProperty(u,"stylemap",{enumerable:!0,get:function(){return Pr.stylemap}});var Rr=W(we());u.StyleSet=Rr.default;Object.defineProperty(u,"styleset",{enumerable:!0,get:function(){return Rr.styleset}});var Yt=W(Cr());u.StyleSheet=Yt.default;Object.defineProperty(u,"stylesheet",{enumerable:!0,get:function(){return Yt.stylesheet}});Object.defineProperty(u,"breakpoints",{enumerable:!0,get:function(){return Yt.breakpoints}});var Ca=P(Dr());u.ClientException=Ca.default});var Y=C((hn,qr)=>{qr.exports={...Ir()}});var Gr=C((_n,ot)=>{var Sa=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var m=function(s){var e=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,a={},n={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function l(o){return o instanceof i?new i(o.type,l(o.content),o.alias):Array.isArray(o)?o.map(l):o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).slice(8,-1)},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++r}),l.__id},clone:function l(o,c){c=c||{};var f,d;switch(n.util.type(o)){case"Object":if(d=n.util.objId(o),c[d])return c[d];f={},c[d]=f;for(var g in o)o.hasOwnProperty(g)&&(f[g]=l(o[g],c));return f;case"Array":return d=n.util.objId(o),c[d]?c[d]:(f=[],c[d]=f,o.forEach(function(w,p){f[p]=l(w,c)}),f);default:return o}},getLanguage:function(l){for(;l;){var o=e.exec(l.className);if(o)return o[1].toLowerCase();l=l.parentElement}return"none"},setLanguage:function(l,o){l.className=l.className.replace(RegExp(e,"gi"),""),l.classList.add("language-"+o)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(f){var l=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(f.stack)||[])[1];if(l){var o=document.getElementsByTagName("script");for(var c in o)if(o[c].src==l)return o[c]}return null}},isActive:function(l,o,c){for(var f="no-"+o;l;){var d=l.classList;if(d.contains(o))return!0;if(d.contains(f))return!1;l=l.parentElement}return!!c}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(l,o){var c=n.util.clone(n.languages[l]);for(var f in o)c[f]=o[f];return c},insertBefore:function(l,o,c,f){f=f||n.languages;var d=f[l],g={};for(var w in d)if(d.hasOwnProperty(w)){if(w==o)for(var p in c)c.hasOwnProperty(p)&&(g[p]=c[p]);c.hasOwnProperty(w)||(g[w]=d[w])}var L=f[l];return f[l]=g,n.languages.DFS(n.languages,function(N,B){B===L&&N!=l&&(this[N]=g)}),g},DFS:function l(o,c,f,d){d=d||{};var g=n.util.objId;for(var w in o)if(o.hasOwnProperty(w)){c.call(o,w,o[w],f||w);var p=o[w],L=n.util.type(p);L==="Object"&&!d[g(p)]?(d[g(p)]=!0,l(p,c,null,d)):L==="Array"&&!d[g(p)]&&(d[g(p)]=!0,l(p,c,w,d))}}},plugins:{},highlightAll:function(l,o){n.highlightAllUnder(document,l,o)},highlightAllUnder:function(l,o,c){var f={callback:c,container:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",f),f.elements=Array.prototype.slice.apply(f.container.querySelectorAll(f.selector)),n.hooks.run("before-all-elements-highlight",f);for(var d=0,g;g=f.elements[d++];)n.highlightElement(g,o===!0,f.callback)},highlightElement:function(l,o,c){var f=n.util.getLanguage(l),d=n.languages[f];n.util.setLanguage(l,f);var g=l.parentElement;g&&g.nodeName.toLowerCase()==="pre"&&n.util.setLanguage(g,f);var w=l.textContent,p={element:l,language:f,grammar:d,code:w};function L(B){p.highlightedCode=B,n.hooks.run("before-insert",p),p.element.innerHTML=p.highlightedCode,n.hooks.run("after-highlight",p),n.hooks.run("complete",p),c&&c.call(p.element)}if(n.hooks.run("before-sanity-check",p),g=p.element.parentElement,g&&g.nodeName.toLowerCase()==="pre"&&!g.hasAttribute("tabindex")&&g.setAttribute("tabindex","0"),!p.code){n.hooks.run("complete",p),c&&c.call(p.element);return}if(n.hooks.run("before-highlight",p),!p.grammar){L(n.util.encode(p.code));return}if(o&&s.Worker){var N=new Worker(n.filename);N.onmessage=function(B){L(B.data)},N.postMessage(JSON.stringify({language:p.language,code:p.code,immediateClose:!0}))}else L(n.highlight(p.code,p.grammar,p.language))},highlight:function(l,o,c){var f={code:l,grammar:o,language:c};if(n.hooks.run("before-tokenize",f),!f.grammar)throw new Error('The language "'+f.language+'" has no grammar.');return f.tokens=n.tokenize(f.code,f.grammar),n.hooks.run("after-tokenize",f),i.stringify(n.util.encode(f.tokens),f.language)},tokenize:function(l,o){var c=o.rest;if(c){for(var f in c)o[f]=c[f];delete o.rest}var d=new x;return E(d,d.head,l),_(l,d,o,d.head,0),A(d)},hooks:{all:{},add:function(l,o){var c=n.hooks.all;c[l]=c[l]||[],c[l].push(o)},run:function(l,o){var c=n.hooks.all[l];if(!(!c||!c.length))for(var f=0,d;d=c[f++];)d(o)}},Token:i};s.Prism=n;function i(l,o,c,f){this.type=l,this.content=o,this.alias=c,this.length=(f||"").length|0}i.stringify=function l(o,c){if(typeof o=="string")return o;if(Array.isArray(o)){var f="";return o.forEach(function(L){f+=l(L,c)}),f}var d={type:o.type,content:l(o.content,c),tag:"span",classes:["token",o.type],attributes:{},language:c},g=o.alias;g&&(Array.isArray(g)?Array.prototype.push.apply(d.classes,g):d.classes.push(g)),n.hooks.run("wrap",d);var w="";for(var p in d.attributes)w+=" "+p+'="'+(d.attributes[p]||"").replace(/"/g,"&quot;")+'"';return"<"+d.tag+' class="'+d.classes.join(" ")+'"'+w+">"+d.content+"</"+d.tag+">"};function h(l,o,c,f){l.lastIndex=o;var d=l.exec(c);if(d&&f&&d[1]){var g=d[1].length;d.index+=g,d[0]=d[0].slice(g)}return d}function _(l,o,c,f,d,g){for(var w in c)if(!(!c.hasOwnProperty(w)||!c[w])){var p=c[w];p=Array.isArray(p)?p:[p];for(var L=0;L<p.length;++L){if(g&&g.cause==w+","+L)return;var N=p[L],B=N.inside,Kt=!!N.lookbehind,Qt=!!N.greedy,Xr=N.alias;if(Qt&&!N.pattern.global){var es=N.pattern.toString().match(/[imsuy]*$/)[0];N.pattern=RegExp(N.pattern.source,es+"g")}for(var Xt=N.pattern||N,M=f.next,U=d;M!==o.tail&&!(g&&U>=g.reach);U+=M.value.length,M=M.next){var J=M.value;if(o.length>l.length)return;if(!(J instanceof i)){var je=1,$;if(Qt){if($=h(Xt,U,l,Kt),!$||$.index>=l.length)break;var Fe=$.index,ts=$.index+$[0].length,z=U;for(z+=M.value.length;Fe>=z;)M=M.next,z+=M.value.length;if(z-=M.value.length,U=z,M.value instanceof i)continue;for(var he=M;he!==o.tail&&(z<ts||typeof he.value=="string");he=he.next)je++,z+=he.value.length;je--,J=l.slice(U,z),$.index-=U}else if($=h(Xt,0,J,Kt),!$)continue;var Fe=$.index,Pe=$[0],dt=J.slice(0,Fe),er=J.slice(Fe+Pe.length),ht=U+J.length;g&&ht>g.reach&&(g.reach=ht);var Re=M.prev;dt&&(Re=E(o,Re,dt),U+=dt.length),b(o,Re,je);var rs=new i(w,B?n.tokenize(Pe,B):Pe,Xr,Pe);if(M=E(o,Re,rs),er&&E(o,M,er),je>1){var mt={cause:w+","+L,reach:ht};_(l,o,c,M.prev,U,mt),g&&mt.reach>g.reach&&(g.reach=mt.reach)}}}}}}function x(){var l={value:null,prev:null,next:null},o={value:null,prev:l,next:null};l.next=o,this.head=l,this.tail=o,this.length=0}function E(l,o,c){var f=o.next,d={value:c,prev:o,next:f};return o.next=d,f.prev=d,l.length++,d}function b(l,o,c){for(var f=o.next,d=0;d<c&&f!==l.tail;d++)f=f.next;o.next=f,f.prev=o,l.length-=d}function A(l){for(var o=[],c=l.head.next;c!==l.tail;)o.push(c.value),c=c.next;return o}if(!s.document)return s.addEventListener&&(n.disableWorkerMessageHandler||s.addEventListener("message",function(l){var o=JSON.parse(l.data),c=o.language,f=o.code,d=o.immediateClose;s.postMessage(n.highlight(f,n.languages[c],c)),d&&s.close()},!1)),n;var y=n.util.currentScript();y&&(n.filename=y.src,y.hasAttribute("data-manual")&&(n.manual=!0));function T(){n.manual||n.highlightAll()}if(!n.manual){var S=document.readyState;S==="loading"||S==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",T):window.requestAnimationFrame?window.requestAnimationFrame(T):window.setTimeout(T,16)}return n}(Sa);typeof ot<"u"&&ot.exports&&(ot.exports=m);typeof global<"u"&&(global.Prism=m);m.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};m.languages.markup.tag.inside["attr-value"].inside.entity=m.languages.markup.entity;m.languages.markup.doctype.inside["internal-subset"].inside=m.languages.markup;m.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))});Object.defineProperty(m.languages.markup.tag,"addInlined",{value:function(e,r){var a={};a["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:m.languages[r]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};n["language-"+r]={pattern:/[\s\S]+/,inside:m.languages[r]};var i={};i[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:n},m.languages.insertBefore("markup","cdata",i)}});Object.defineProperty(m.languages.markup.tag,"addAttribute",{value:function(s,e){m.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:m.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});m.languages.html=m.languages.markup;m.languages.mathml=m.languages.markup;m.languages.svg=m.languages.markup;m.languages.xml=m.languages.extend("markup",{});m.languages.ssml=m.languages.xml;m.languages.atom=m.languages.xml;m.languages.rss=m.languages.xml;(function(s){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var r=s.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(m);m.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};m.languages.javascript=m.languages.extend("clike",{"class-name":[m.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});m.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;m.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:m.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:m.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:m.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:m.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:m.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});m.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:m.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});m.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});m.languages.markup&&(m.languages.markup.tag.addInlined("script","javascript"),m.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));m.languages.js=m.languages.javascript;(function(){if(typeof m>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var s="Loading\u2026",e=function(y,T){return"\u2716 Error "+y+" while fetching file: "+T},r="\u2716 Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",i="loading",h="loaded",_="failed",x="pre[data-src]:not(["+n+'="'+h+'"]):not(['+n+'="'+i+'"])';function E(y,T,S){var l=new XMLHttpRequest;l.open("GET",y,!0),l.onreadystatechange=function(){l.readyState==4&&(l.status<400&&l.responseText?T(l.responseText):l.status>=400?S(e(l.status,l.statusText)):S(r))},l.send(null)}function b(y){var T=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(T){var S=Number(T[1]),l=T[2],o=T[3];return l?o?[S,Number(o)]:[S,void 0]:[S,S]}}m.hooks.add("before-highlightall",function(y){y.selector+=", "+x}),m.hooks.add("before-sanity-check",function(y){var T=y.element;if(T.matches(x)){y.code="",T.setAttribute(n,i);var S=T.appendChild(document.createElement("CODE"));S.textContent=s;var l=T.getAttribute("data-src"),o=y.language;if(o==="none"){var c=(/\.(\w+)$/.exec(l)||[,"none"])[1];o=a[c]||c}m.util.setLanguage(S,o),m.util.setLanguage(T,o);var f=m.plugins.autoloader;f&&f.loadLanguages(o),E(l,function(d){T.setAttribute(n,h);var g=b(T.getAttribute("data-range"));if(g){var w=d.split(/\r\n?|\n/g),p=g[0],L=g[1]==null?w.length:g[1];p<0&&(p+=w.length),p=Math.max(0,Math.min(p-1,w.length)),L<0&&(L+=w.length),L=Math.max(0,Math.min(L,w.length)),d=w.slice(p,L).join(`
`),T.hasAttribute("data-start")||T.setAttribute("data-start",String(p+1))}S.textContent=d,m.highlightElement(S)},function(d){T.setAttribute(n,_),S.textContent=d})}}),m.plugins.fileHighlight={highlight:function(T){for(var S=(T||document).querySelectorAll(x),l=0,o;o=S[l++];)m.highlightElement(o)}};var A=!1;m.fileHighlight=function(){A||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),A=!0),m.plugins.fileHighlight.highlight.apply(this,arguments)}})()});var Da={};os(Da,{BUILD_ID:()=>La,ClientRegistry:()=>Jr.default,TemplateDocument:()=>ft,components:()=>Oa,data:()=>Kr.default,elements:()=>Qr,emitter:()=>ut.default});var t=v($e()),Zr=v(ir()),Jr=v(F()),ut=v(ye()),Kr=v(G());var lr=v(F()),or=v(I()),Q=class extends or.default{static id="e83da818dc31723bcd5d";static tagname="panel";static classname="Panel_e83da818dc31723bcd5d";styles(){return""}template(){let e=this.originalChildren,r={main:e.find(i=>i.nodeName==="MAIN"),head:e.find(i=>i.nodeName==="HEADER"),foot:e.find(i=>i.nodeName==="FOOTER"),left:e.find(i=>i.nodeName==="ASIDE"&&i.hasAttribute("left")),right:e.find(i=>i.nodeName==="ASIDE"&&i.hasAttribute("right"))},a={left:!1,right:!1};this.toggle=i=>{a[i]=!a[i],n.all()};let n={all(){r.main&&this.main(),r.head&&this.head(),r.foot&&this.foot(),r.left&&this.left(),r.right&&this.right()},head(){let{classList:i}=r.head;i.add("absolute","top-0","right-0","h-60","transition-500"),r.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),a.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0"))},foot(){let{classList:i}=r.foot;i.add("absolute","bottom-0","right-0","h-60","transition-500"),r.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),a.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0"))},left(){let{classList:i}=r.left;i.add("w-226","absolute","bottom-0","left-0","top-0","transition-500"),a.left?(i.remove("md-left--226"),i.add("md-left-0")):(i.remove("md-left-0"),i.add("md-left--226"))},right(){let{classList:i}=r.right;i.add("w-200","absolute","right-0","transition-500"),r.foot?(i.remove("bottom-0"),i.add("bottom-60")):(i.remove("bottom-60"),i.add("bottom-0")),r.head?(i.remove("top-0"),i.add("top-60")):(i.remove("top-60"),i.add("top-0")),a.right?(i.remove("lg-right--200"),i.add("lg-right-0")):(i.remove("lg-right-0"),i.add("lg-right--200"))},main(){let{classList:i}=r.main;i.add("absolute","transition-500"),r.head?(i.remove("top-0"),i.add("top-60")):(i.remove("top-60"),i.add("top-0")),r.foot?(i.remove("bottom-0"),i.add("bottom-60")):(i.remove("bottom-60"),i.add("bottom-0")),r.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),r.right?(i.remove("right-0"),i.add("right-200")):(i.remove("right-200"),i.add("right-0")),a.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0")),a.right?(i.remove("lg-right-0"),i.add("lg-right-200")):(i.remove("lg-right-200"),i.add("lg-right-0"))}};return n.all(),this.classList.add("block","relative","w-full","vh","scroll-hidden"),()=>[lr.default.createText(`
`,!1),...this._toNodeList(e)]}};var ee=v(F()),cr=v(I()),ur=v(we()),te=class extends cr.default{static id="047b9fc58e7239d4a7f8";static tagname="tab";static classname="Tab_047b9fc58e7239d4a7f8";styles(){return""}template(){let e={init:()=>{let y=this.hasAttribute("on");this.classList.remove(...y?b:E),this.classList.add(...y?E:b),Array.from(document.querySelectorAll(a)).forEach(T=>{T.style.display=y?"block":"none"})},activate:()=>{Array.from(document.querySelectorAll(`[group="${r}"]`)).forEach(y=>{let T=y.getAttribute("selector");a===T&&!y.hasAttribute("on")?(y.setAttribute("on",""),Array.from(document.querySelectorAll(a)).forEach(S=>{S.style.display="block"}),typeof y.render=="function"&&y.render()):a!==T&&y.hasAttribute("on")&&(y.removeAttribute("on"),Array.from(document.querySelectorAll(T)).forEach(S=>{S.style.display="none"}),typeof y.render=="function"&&y.render())})}},{group:r,selector:a="",active:n="",inactive:i="",style:h,class:_,...x}=this.props,E=n.split(" "),b=i.split(" "),A=new ur.default;return this.styles=()=>A.toString(),A.add(":host","cursor","pointer"),A.add("a","display","block"),A.add("a","height","100%"),A.add("a","width","100%"),()=>[ee.default.createText(`
`,!1),ee.default.createElement("a",{...x,click:e.activate,mount:e.init},[ee.default.createText(`
  `,!1),ee.default.createElement("slot",{},[]).element,ee.default.createText(`
`,!1)]).element]}};var Xe=v(F()),mr=v(I()),pr=v(we()),gr=v(fr()),br=v(dr()),xr=v(hr()),re=class extends mr.default{static id="75af7664df8b2546e65a";static tagname="icon";static classname="Icon_75af7664df8b2546e65a";styles(){return""}template(){let{name:e,solid:r,brand:a}=this.props,n=new pr.default;this.styles=()=>n.toString(),(0,br.default)(this.props,n,"inline-block",":host"),(0,gr.default)(this.props,n,!1,":host","color"),(0,xr.default)(this.props,n,!1,":host","font-size");let i=["fa-fw",`fa-${e}`];return i.push(a?"fa-brands":"fa-solid"),()=>[Xe.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"}).element,Xe.default.createText(`
`,!1),Xe.default.createElement("i",{class:i.join(" ")},[]).element]}};var Vt=v(F()),$r=v(I()),st=v(Y()),ie=class extends $r.default{static id="7e4942547226dfeef0ae";static tagname="docs";static classname="Docs_7e4942547226dfeef0ae";styles(){return""}template(){return(0,st.classlist)().add("block","w-full","h-full","scroll-y-auto","scroll-x-hidden"),()=>[Vt.default.createText(`
`,!1),Vt.default.createElement("article",{class:"block p-10 tx-t-1"},[...this._toNodeList((0,st.children)())]).element]}};var De=v(F()),Ur=v(I()),at=v(Y()),le=class extends Ur.default{static id="6db660ec31ca715d7e96";static tagname="head";static classname="Head_6db660ec31ca715d7e96";styles(){return""}template(){return(0,at.classlist)().add("absolute","top-0","right-0","left-170","h-45","bg-t-0","z-1"),()=>[De.default.createText(`
`,!1),De.default.createElement("header",{class:"w-full h-full scroll-x-auto"},[De.default.createText(`
  `,!1),...this._toNodeList((0,at.children)()),De.default.createText(`
`,!1)]).element]}};var Ne=v(F()),Hr=v(I()),nt=v(Y()),oe=class extends Hr.default{static id="5fb4822ce248e2b6fb4f";static tagname="left";static classname="Left_5fb4822ce248e2b6fb4f";styles(){return""}template(){return(0,nt.classlist)().add("absolute","top-0","bottom-0","left-0","w-170","bg-t-3","b-solid","b-t-2","by-0","bl-0","br-1","z-2"),()=>[Ne.default.createText(`
`,!1),Ne.default.createElement("aside",{class:"w-full h-full scroll-auto"},[Ne.default.createText(`
  `,!1),...this._toNodeList((0,nt.children)()),Ne.default.createText(`
`,!1)]).element]}};var Me=v(F()),Br=v(I()),it=v(Y()),ce=class extends Br.default{static id="d54fe27339c3e65ac735";static tagname="main";static classname="Main_d54fe27339c3e65ac735";styles(){return""}template(){return(0,it.classlist)().add("absolute","top-45","right-0","left-170","bottom-0","bg-black","b-solid","b-t-2","bx-0","bb-0","bt-1"),()=>[Me.default.createText(`
`,!1),Me.default.createElement("main",{class:"w-full h-full scroll-auto"},[Me.default.createText(`
  `,!1),...this._toNodeList((0,it.children)()),Me.default.createText(`
`,!1)]).element]}};var D=v(F()),zr=v(I()),lt=v(Y()),ue=class extends zr.default{static id="ab38f0e847e1d047c1a8";static tagname="app";static classname="App_ab38f0e847e1d047c1a8";styles(){return""}template(){let{title:e,height:r}=(0,lt.props)(),a=r?`height:${r}px`:"";return()=>[D.default.createText(`
`,!1),D.default.createElement("div",{class:"curved scroll-hidden shadow-0-0-10-0-0-0-5"},[D.default.createText(`
  `,!1),D.default.createElement("div",{class:"relative flex flex-center-y gap-10 p-10 bg-t-1 tx-c-999999 tx-16"},[D.default.createText(`
    `,!1),D.default.createElement("span",{class:"bg-h-999999 pill h-10 w-10"},[]).element,D.default.createText(`
    `,!1),D.default.createElement("span",{class:"bg-h-999999 pill h-10 w-10"},[]).element,D.default.createText(`
    `,!1),D.default.createElement("span",{class:"bg-h-999999 pill h-10 w-10"},[]).element,D.default.createText(`
    `,!1),D.default.createElement("span",{class:"flex flex-center h-full w-full absolute top-0 left-0"},[D.default.createText(`
      `,!1),...this._toNodeList(e),D.default.createText(`
    `,!1)]).element,D.default.createText(`
  `,!1)]).element,D.default.createText(`
  `,!1),D.default.createElement("div",{class:"bg-black tx-t-1 relative",style:a},[...this._toNodeList((0,lt.children)())]).element,D.default.createText(`
`,!1)]).element]}};var O=v(F()),Wr=v(I()),Zt=v(Gr()),Yr=v(Y()),fe=class extends Wr.default{static id="d21b237295245a3b7d61";static tagname="code";static classname="Code_d21b237295245a3b7d61";styles(){return`:host {
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
  }`}template(){let e=this.props,{lang:r="markup",numbers:a=!1,inline:n=!1,trim:i=!1,ltrim:h=!1,rtrim:_=!1,detab:x=0}=e,E=(0,Yr.children)(),b=E[0]?.textContent||"";x&&(b=b.replace(new RegExp(`\\n {${x}}`,"g"),`
`)),i?b=b.trim():h?b=b.replace(/^\s+/,""):_&&(b=b.replace(/\s+$/,""));let A=y=>{if(!b)return;let T=Zt.default.highlight(b,Zt.default.languages[r],r);if(y.detail.target.innerHTML=T,a){let S=T.match(/\n(?!$)/g),l=S?S.length+1:1,o=new Array(l+1).join("<span></span>"),c=document.createElement("span");c.setAttribute("aria-hidden","true"),c.className="line-numbers-rows",c.innerHTML=o,y.detail.target.appendChild(c)}};return()=>[O.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css"}).element,O.default.createText(`
`,!1),O.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-tomorrow.min.css"}).element,O.default.createText(`
`,!1),...r==="bash"?[O.default.createText(`
  `,!1),O.default.createElement("div",{class:"terminal"},[O.default.createElement("span",{},[O.default.createText("$",!1)]).element,O.default.createText(" ",!1),...this._toNodeList(E)]).element,O.default.createText(`
`,!1)]:b?[,O.default.createText(`
  `,!1),...a?[O.default.createText(`
    `,!1),O.default.createElement("pre",{class:"snippet line-numbers"},[O.default.createElement("code",{mount:A},[]).element]).element,O.default.createText(`
  `,!1)]:[,O.default.createText(`
    `,!1),O.default.createElement("pre",{class:"snippet pad"},[O.default.createElement("code",{mount:A},[]).element]).element,O.default.createText(`
  `,!1)],O.default.createText(`
`,!1)]:[,O.default.createText(`
  `,!1),O.default.createElement("span",{},[O.default.createText("????",!1)]).element,O.default.createText(`
`,!1)],O.default.createText(`

`,!1)]}};var q=v(F()),Vr=v(I());var k=function(s,...e){let r=Jt(s);for(let a=0;a<e.length;a++)r=r.replace("%s",String(e[a]));return r},Jt=function(s){return s};var de=class extends Vr.default{static id="b1ed083cf3561af1816f";static tagname="translate";static classname="Translate_b1ed083cf3561af1816f";styles(){return""}template(){let{trim:e=!1,p:r=!1,li:a=!1,div:n=!1}=this.props,i=this.originalChildren,h=[],_=[];for(let A of i)typeof A=="string"?h.push(A):A instanceof Node&&A.textContent?h.push(A.textContent):(h.push("%s"),_.push(A));let x=h.join("");e&&(x=x.replace(/\s+/," ").trim());let E=Jt(x).split("%s"),b=[];for(let A=0;A<E.length;A++)b.push(document.createTextNode(E[A])),_[A]&&b.push(_[A]);return()=>[q.default.createText(`
    `,!1),...r?[q.default.createText(`
      `,!1),q.default.createElement("p",{},[...this._toNodeList(b)]).element,q.default.createText(`
    `,!1)]:a?[,q.default.createText(`
      `,!1),q.default.createElement("li",{},[...this._toNodeList(b)]).element,q.default.createText(`
    `,!1)]:n?[,q.default.createText(`
      `,!1),q.default.createElement("div",{},[...this._toNodeList(b)]).element,q.default.createText(`
    `,!1)]:[,q.default.createText(`
      `,!1),...this._toNodeList(b),q.default.createText(`
    `,!1)]]}};var ct=v(Y());var ft=class s extends Zr.default{static sync(){return new s().sync()}template(){let e="/docs/static-site.html",r=k("Static Site Generator - Ink reactive web component template engine."),a=k("How to use Ink to generate static sites."),n=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[t.default.createText(`
`,!1),t.default.createElement("html",{},[t.default.createText(`
  `,!1),t.default.createElement("head",{},[t.default.createText(`
  `,!1),t.default.createElement("meta",{charset:"utf-8"}),t.default.createText(`
  `,!1),t.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.default.createText(`
  `,!1),t.default.createElement("title",{},[...this._toNodeList(r)]),t.default.createText(`
  `,!1),t.default.createElement("meta",{name:"description",content:a}),t.default.createText(`
  `,!1),t.default.createElement("meta",{property:"og:title",content:r}),t.default.createText(`
  `,!1),t.default.createElement("meta",{property:"og:description",content:a}),t.default.createText(`
  `,!1),t.default.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),t.default.createText(`
  `,!1),t.default.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${e}`}),t.default.createText(`
  `,!1),t.default.createElement("meta",{property:"og:type",content:"website"}),t.default.createText(`
  `,!1),t.default.createElement("meta",{name:"twitter:card",content:"summary"}),t.default.createText(`
  `,!1),t.default.createElement("meta",{name:"twitter:site",content:"@stackpress"}),t.default.createText(`
  `,!1),t.default.createElement("meta",{name:"twitter:title",content:r}),t.default.createText(`
  `,!1),t.default.createElement("meta",{name:"twitter:description",content:a}),t.default.createText(`
  `,!1),t.default.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),t.default.createText(`
  `,!1),t.default.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"}),t.default.createText(`
  `,!1),t.default.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"}),t.default.createText(`
  `,!1),t.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"}),t.default.createText(`
  `,!1),t.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"}),t.default.createText(`
  `,!1),t.default.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,ct.env)("BUILD_ID")}.css`}),t.default.createElement("script",{"data-template":!0,type:"text/json"},[t.default.createText("__TEMPLATE_DATA__",!0)]),t.default.createText(`
  `,!1),t.default.createElement("script",{src:`/ink/build/client/${(0,ct.env)("BUILD_ID")}.js`}),t.default.createText(`
  `,!1),...(0,ct.env)("PUBLIC_ENV")==="development"?[t.default.createText(`
    `,!1),t.default.createElement("script",{src:"/dev.js"}),t.default.createText(`
  `,!1)]:[],t.default.createText(`
`,!1)]),t.default.createText(`
  `,!1),t.default.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},[t.default.createText(`
    `,!1),t.default.createElement("panel-layout",{},[t.default.createText(`
      `,!1),t.default.createElement("header",{},[t.default.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},[t.default.createText(`
  `,!1),...e!=="/ink/index.html"&&e!=="/ink/500.html"?[t.default.createText(`
    `,!1),t.default.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:n},[]),t.default.createText(`
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
      `,!1),t.default.createElement("aside",{left:!0},[t.default.createElement("header",{class:"flex flex-center-y bg-t-2 py-15 pr-5 pl-10"},[t.default.createText(`
  `,!1),t.default.createElement("a",{href:"/ink"},[t.default.createText(`
    `,!1),t.default.createElement("img",{class:"h-26 mr-10",src:"/ink/ink-icon.png",alt:"Ink Logo"}),t.default.createText(`
  `,!1)]),t.default.createText(`
  `,!1),t.default.createElement("h3",{class:"flex-grow m-0 tx-upper"},[t.default.createText(`
    `,!1),t.default.createElement("a",{class:"tx-primary",href:"/ink"},[t.default.createText("Ink",!1)]),t.default.createText(`
  `,!1)]),t.default.createText(`
  `,!1),t.default.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:n},[]),t.default.createText(`
`,!1)]),t.default.createText(`
`,!1),t.default.createElement("nav",{class:"bg-t-1 scroll-auto h-calc-full-60"},[t.default.createText(`
  `,!1),t.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper"},[t.default.createText(`
    `,!1),...this._toNodeList(k("Introduction")),t.default.createText(`
  `,!1)]),t.default.createText(`
  `,!1),...e==="/docs/index.html"?[t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Documentation")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)]:[,t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Documentation")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)],t.default.createText(`
  `,!1),...e==="/docs/getting-started.html"?[t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Getting Started")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)]:[,t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Getting Started")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)],t.default.createText(`

  `,!1),t.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[t.default.createText(`
    `,!1),...this._toNodeList(k("Features")),t.default.createText(`
  `,!1)]),t.default.createText(`
  `,!1),...e==="/docs/markup-syntax.html"?[t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Markup Syntax")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)]:[,t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Markup Syntax")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)],t.default.createText(`
  `,!1),...e==="/docs/state-management.html"?[t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("State Management")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)]:[,t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("State Management")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)],t.default.createText(`
  `,!1),...e==="/docs/component-strategy.html"?[t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Component Strategy")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)]:[,t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Component Strategy")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)],t.default.createText(`
  `,!1),...e==="/docs/compiler-api.html"?[t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Compiler API")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)]:[,t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Compiler API")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)],t.default.createText(`
  `,!1),...e==="/docs/client-api.html"?[t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Client API")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)]:[,t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Client API")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)],t.default.createText(`

  `,!1),t.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[t.default.createText(`
    `,!1),...this._toNodeList(k("Usage")),t.default.createText(`
  `,!1)]),t.default.createText(`
  `,!1),...e==="/docs/template-engine.html"?[t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Template Engine")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)]:[,t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Template Engine")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)],t.default.createText(`
  `,!1),...e==="/docs/single-page.html"?[t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Single Page App")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)]:[,t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Single Page App")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)],t.default.createText(`
  `,!1),...e==="/docs/static-site.html"?[t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Static Site Generator")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)]:[,t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Static Site Generator")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)],t.default.createText(`
  `,!1),...e==="/docs/component-publisher.html"?[t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Component Publisher")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)]:[,t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Component Publisher")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)],t.default.createText(`
  `,!1),...e==="/docs/developer-tools.html"?[t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Developer Tools")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)]:[,t.default.createText(`
    `,!1),t.default.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},[t.default.createText(`
      `,!1),...this._toNodeList(k("Developer Tools")),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)],t.default.createText(`
`,!1)])]),t.default.createText(`
      `,!1),t.default.createElement("main",{},[t.default.createText(`
        `,!1),t.default.createElement("api-docs",{},[t.default.createText(`
          `,!1),t.default.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},[t.default.createText(`
            `,!1),...this._toNodeList(k("Static Site Generator")),t.default.createText(`
          `,!1)]),t.default.createText(`

          `,!1),t.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[t.default.createText(`
            A static site generator is a tool that generates a full static 
            HTML website based on raw data and a set of templates. 
            Essentially, a static site generator automates the task of 
            coding individual HTML pages and gets those pages ready to 
            serve to users ahead of time. Because these HTML pages are 
            pre-built, they can load very quickly in browsers. You can use 
            Ink, TypeScript and the native Node.js HTTP server to 
            generate HTML documents in order to be served statically.
          `,!1)]),t.default.createText(`

          `,!1),t.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[t.default.createText(`
            First, create a project with the following structure and files.
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("ide-app",{height:410,title:"My Project"},[t.default.createText(`
            `,!1),t.default.createElement("app-head",{},[t.default.createText(`
              `,!1),t.default.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},[t.default.createText(`
                `,!1),t.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"static",selector:"#index-ts"},[t.default.createText(`
                  src/index.ts
                `,!1)]),t.default.createText(`
                `,!1),t.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"static",selector:"#page-ink"},[t.default.createText(`
                  src/page.ink
                `,!1)]),t.default.createText(`
                `,!1),t.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"static",selector:"#package-json"},[t.default.createText(`
                  package.json
                `,!1)]),t.default.createText(`
              `,!1)]),t.default.createText(`
            `,!1)]),t.default.createText(`
            `,!1),t.default.createElement("app-left",{},[t.default.createText(`
              `,!1),t.default.createElement("h5",{class:"p-5"},[t.default.createText(`
                `,!1),t.default.createElement("element-icon",{name:"chevron-down"}),t.default.createText(`
                `,!1),t.default.createElement("span",{},[t.default.createText("src",!1)]),t.default.createText(`
              `,!1)]),t.default.createText(`
              `,!1),t.default.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"static",selector:"#index-ts"},[t.default.createText(`
                `,!1),t.default.createElement("element-icon",{name:"file"}),t.default.createText(`
                index.ts
              `,!1)]),t.default.createText(`
              `,!1),t.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"static",selector:"#page-ink"},[t.default.createText(`
                `,!1),t.default.createElement("element-icon",{name:"file"}),t.default.createText(`
                page.ink
              `,!1)]),t.default.createText(`
              `,!1),t.default.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-muted",group:"static",selector:"#package-json"},[t.default.createText(`
                `,!1),t.default.createElement("element-icon",{name:"file"}),t.default.createText(`
                package.json
              `,!1)]),t.default.createText(`
            `,!1)]),t.default.createText(`
            `,!1),t.default.createElement("app-main",{},[t.default.createText(`
              `,!1),t.default.createElement("ide-code",{id:"index-ts",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                import http from 'http';
                import ink, { cache } from '@stackpress/ink/compiler';

                //where your pages are:
                const pages = path.join(__dirname, 'pages');
                //where your build files are:
                const build = path.join(__dirname, '../build');

                //create ink compiler
                const compiler = ink({ 
                  cwd: __dirname 
                }).use(cache({ 
                  buildPath: path.join(build, 'build') 
                }));
                //create http server
                const server = http.createServer(async (req, res) => {
                  //for build asset:
                  if (req.url?.startsWith('/build/')) {
                    //get filename ie. abc123.js
                    const filename = req.url.substring(7);
                    //get asset
                    const { type, content } = await compiler.asset(filename);
                    //send response
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  }
                  // from /foo/bar.html to foo/bar.html
                  const route = request.url?.substring(1) || 'index.html';
                  const { fs } = compiler;
                  const file = path.join(build, route);
                  //for document pages: 
                  if (file.endsWith('.html')) {
                    const route = file.substring(0, file.length - 5);
                    const template = path.join(pages, route + '.ink');
                    if (fs.existsSync(template)) {
                      //send response
                      return res.type('text/html').render(route, props);
                    }
                  }
                  //for static files:
                  if (fs.existsSync(file)) {
                    res.writeHead(200);
                    fs.createReadStream(file).pipe(res);
                    return;
                  } 
                  //anything else?
                  res.statusCode = 404;
                  res.end('Not Found');
                });
                //listen on port 3000
                server.listen(3000);
              `)]),t.default.createText(`
              `,!1),t.default.createElement("ide-code",{id:"index-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <style>
                  .title { text-align: center; }
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const { title } = props();
                <\/script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}><\/script>
                  </head>
                  <body>
                    <h1 class="title">{title}</h1>
                  </body>
                </html>
              `)]),t.default.createText(`
              `,!1),t.default.createElement("ide-code",{id:"package-json",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.21"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "0.3.21",
                    "@types/node": "22.1.0",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `)]),t.default.createText(`
            `,!1)]),t.default.createText(`
          `,!1)]),t.default.createText(`

          `,!1),t.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[t.default.createText(`
            To test the script and see the results, run the following 
            command in terminal.
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("ide-code",{lang:"bash"},[t.default.createText(`
            npm run dev
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[t.default.createText(`
            Load 
            `,!1),t.default.createElement("ide-code",{lang:"js",inline:!0},[t.default.createText("http://localhost:3000/",!1)]),t.default.createText(` 
            in your browser. After loading you should see files that were 
            generated in a new build folder found in your project root. 
          `,!1)]),t.default.createText(`
          
          `,!1),t.default.createElement("nav",{class:"flex"},[t.default.createText(`
            `,!1),t.default.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/single-page.html"},[t.default.createText(`
              `,!1),t.default.createElement("element-icon",{name:"chevron-left",theme:"tx-1"}),t.default.createText(`
              `,!1),...this._toNodeList(k("Single Page App")),t.default.createText(`
            `,!1)]),t.default.createText(`
            `,!1),t.default.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/component-publisher.html"},[t.default.createText(`
              `,!1),...this._toNodeList(k("Component Publisher")),t.default.createText(`
              `,!1),t.default.createElement("element-icon",{name:"chevron-right",theme:"tx-1"}),t.default.createText(`
            `,!1)]),t.default.createText(`
          `,!1)]),t.default.createText(`
          `,!1),t.default.createElement("footer",{class:"foot"},[]),t.default.createText(`
        `,!1)]),t.default.createText(`
      `,!1)]),t.default.createText(`
    `,!1)]),t.default.createText(`
  `,!1)]),t.default.createText(`
`,!1)])]}},Oa={PanelLayout_e83da818dc31723bcd5d:Q,ElementTab_047b9fc58e7239d4a7f8:te,ElementIcon_75af7664df8b2546e65a:re,ApiDocs_7e4942547226dfeef0ae:ie,AppHead_6db660ec31ca715d7e96:le,AppLeft_5fb4822ce248e2b6fb4f:oe,AppMain_d54fe27339c3e65ac735:ce,IdeApp_ab38f0e847e1d047c1a8:ue,IdeCode_d21b237295245a3b7d61:fe,I18nTranslate_b1ed083cf3561af1816f:de},Qr={"panel-layout":Q,"element-tab":te,"element-icon":re,"api-docs":ie,"app-head":le,"app-left":oe,"app-main":ce,"ide-app":ue,"ide-code":fe,"i18n-translate":de},La="a75774f8a2c54dfbe3ec";ut.default.once("ready",()=>{ft.sync();for(let[s,e]of Object.entries(Qr))customElements.getName(e)||customElements.define(s,e);ut.default.emit("mounted",document.body)});return cs(Da);})();
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
