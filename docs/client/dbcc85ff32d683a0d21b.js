var InkAPI=(()=>{var ys=Object.create;var Ue=Object.defineProperty;var xs=Object.getOwnPropertyDescriptor;var bs=Object.getOwnPropertyNames;var ks=Object.getPrototypeOf,Ts=Object.prototype.hasOwnProperty;var D=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports),vs=(s,t)=>{for(var r in t)Ue(s,r,{get:t[r],enumerable:!0})},dr=(s,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of bs(t))!Ts.call(s,n)&&n!==r&&Ue(s,n,{get:()=>t[n],enumerable:!(a=xs(t,n))||a.enumerable});return s};var v=(s,t,r)=>(r=s!=null?ys(ks(s)):{},dr(t||!s||!s.__esModule?Ue(r,"default",{value:s,enumerable:!0}):r,s)),Es=s=>dr(Ue({},"__esModule",{value:!0}),s);var ee=D(vt=>{"use strict";Object.defineProperty(vt,"__esModule",{value:!0});var Tt=class{constructor(){this._parent=null}get parent(){return this._parent}get parentElement(){return this._parent}set parent(t){this._parent=t}};vt.default=Tt});var _t=D(be=>{"use strict";var _s=be&&be.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(be,"__esModule",{value:!0});var ws=_s(ee()),Et=class extends ws.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#comment",this.type=8,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!--${this.value}-->`}};be.default=Et});var At=D(ke=>{"use strict";var As=ke&&ke.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ke,"__esModule",{value:!0});var Cs=As(ee()),wt=class extends Cs.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#doctype",this.type=10,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!DOCTYPE ${this.value}>`}};ke.default=wt});var Dt=D(Te=>{"use strict";var Ds=Te&&Te.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Te,"__esModule",{value:!0});var Is=Ds(ee()),Ss=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],Ct=class s extends Is.default{get attributes(){return Object.fromEntries(this._attributes)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof s)}get nodeName(){return this.name.toUpperCase()}get nodes(){let t=[this];return this._flatten(Array.from(this.children),t),t}get nodeType(){return this.type}get parent(){return this._parent}set parent(t){this._parent=t}constructor(t,r={},a=[]){super(),this.type=1,this._parent=null,this.name=t,this._attributes=new Map(Object.entries(r)),this.children=new Set(a.filter(Boolean))}appendChild(t){return this.children.add(t),t.parent=this,this}export(){return{type:this.type,name:this.name,attributes:Object.fromEntries(this._attributes.entries()),children:Array.from(this.children).map(t=>t.export())}}getAttribute(t){return this._attributes.get(t)}hasAttribute(t){return this._attributes.has(t)}removeAttribute(t){return this._attributes.delete(t),this}removeChild(t){this.children.delete(t),t.parent=null}setAttribute(t,r){return this._attributes.set(t,r),this}toString(){let t=Array.from(this._attributes.entries()),r=t.length>0?" "+t.map(([n,i])=>{if(typeof i=="string"&&!/["<>\n]/.test(i))return`${n}="${i}"`;if(typeof i=="boolean")return i?n:""}).join(" "):"";if(Ss.includes(this.name))return`<${this.name}${r} />`;let a=Array.from(this.children.values()).map(n=>n.toString()).join("");return`<${this.name}${r}>${a}</${this.name}>`}_flatten(t,r){t.forEach(a=>{r.push(a),a instanceof s&&this._flatten(Array.from(a.children),r)})}};Te.default=Ct});var St=D(ve=>{"use strict";var Ls=ve&&ve.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ve,"__esModule",{value:!0});var Ns=Ls(ee()),It=class extends Ns.default{get nodeName(){return"#text"}get nodeType(){return this.type}get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,r=!1){super(),this.name="#text",this.type=3,this._escape=r,this._value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return this.value}};ve.default=It});var Ge=D(Ee=>{"use strict";var ze=Ee&&Ee.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ee,"__esModule",{value:!0});var Rs=ze(_t()),Ms=ze(At()),Lt=ze(Dt()),Os=ze(St()),Nt=class s{static createComment(t,r){let a=new Rs.default(t);return r&&(a.parent=r),a}static createDoctype(t="html",r){let a=new Ms.default(t);return r&&(a.parent=r),a}static createElement(t,r={},a=[],n){let i=new Lt.default(t,r,a);return n&&(i.parent=n),i}static createText(t,r=!1,a){let n=new Os.default(t,r);return a&&(n.parent=a),n}static import(t,r){return t.map(a=>{let{value:n}=a,{name:i,attributes:d,children:h}=a;switch(a.type){case 1:let x=this.createElement(i,d,[],r);return s.import(h,x).forEach(E=>x.appendChild(E)),x;case 3:return this.createText(n,!0,r);case 8:return this.createComment(n,r);case 10:return this.createDoctype(n,r)}return null}).filter(Boolean)}static load(t){return new s(t)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof Lt.default)}get nodes(){return Array.from(this.children).map(t=>t instanceof Lt.default?t.nodes:[t]).flat()}constructor(t){this.children=new Set(t.filter(Boolean))}export(){return this.childList.map(t=>t.export())}toString(){return Array.from(this.children).map(t=>t.toString()).join("")}};Ee.default=Nt});var Y=D(_e=>{"use strict";Object.defineProperty(_e,"__esModule",{value:!0});_e.TemplateData=void 0;var Je=class{constructor(){window.__TEMPLATE_DATA__||(window.__TEMPLATE_DATA__={})}clear(){return window.__TEMPLATE_DATA__={},this}delete(t){return this.has(t)?(delete window.__TEMPLATE_DATA__[t],!0):!1}entries(){return Object.entries(window.__TEMPLATE_DATA__)}has(t){return t in window.__TEMPLATE_DATA__}get(t){return window.__TEMPLATE_DATA__[t]}keys(){return Object.keys(window.__TEMPLATE_DATA__)}set(t,r){return window.__TEMPLATE_DATA__[t]=r,this}values(){return Object.values(window.__TEMPLATE_DATA__)}};_e.TemplateData=Je;var Ps=new Je;_e.default=Ps});var we=D(P=>{"use strict";var Fs=P&&P.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(P,"__esModule",{value:!0});P.match=P.ClientEmitter=P.events=void 0;P.bindAttribute=We;P.unbindAttribute=Rt;var ur=Fs(R());P.events=["click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","wheel","keydown","keypress","keyup","blur","change","contextmenu","focus","input","submit","invalid","reset","search","select","copy","cut","paste","drag","dragstart","dragend","dragover","dragenter","dragleave","drop","scroll","durationchange","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","animationstart","animationend","animationiteration","transitionend","toggle"];var Ye=class extends EventTarget{emit(t,r){return this.dispatchEvent(new CustomEvent(t,{detail:r})),this}on(t,r){if(t==="ready"&&document.readyState!=="loading"){let a=new CustomEvent("ready");return setTimeout(()=>r(a),1),this}return this.addEventListener(t,r),this}once(t,r){let a=n=>{this.unbind(t,a),r(n)};return this.on(t,a),this}unbind(t,r){return this.removeEventListener(t,r),this}};P.ClientEmitter=Ye;var js=(s,t,r=!0)=>Array.from(s.querySelectorAll("*")).filter(a=>{let n=ur.default.get(a),i=n&&n.hasAttribute(t)&&(!r||!n.hasEvent(t));return i&&n.addEvent(t),i}).map(a=>ur.default.get(a));P.match=js;function We(s,t){Ve.on("mounted",r=>{if(!r.detail)return;let a=r.detail;(0,P.match)(a.shadowRoot||a,s).forEach(t)})}function Rt(s,t){Ve.on("unmounted",r=>{if(!r.detail)return;let a=r.detail;(0,P.match)(a.shadowRoot||a,s,!1).forEach(t)})}var Ve=new Ye;P.default=(document.onreadystatechange=()=>{document.readyState!=="loading"&&Ve.emit("ready")},We("mount",s=>{let t=s.getAttribute("mount");if(typeof t=="function"){let r=new CustomEvent("mount",{detail:{node:s,target:s.element}});t(r)}}),Rt("unmount",s=>{let t=s.getAttribute("unmount");if(typeof t=="function"){let r=new CustomEvent("unmount",{detail:{node:s,target:s.element}});t(r)}}),We("if",s=>{let t=s.getAttribute("if");(t===!1||t==="false"||typeof t=="function"&&!t())&&s.element.remove()}),P.events.forEach(s=>{We(s,t=>{let r=t.getAttribute(s);typeof r=="function"&&(t.element.removeEventListener(s,r),t.element.addEventListener(s,r))}),Rt(s,t=>{let r=t.getAttribute(s);typeof r=="function"&&t.element.removeEventListener(s,r)})}),Ve)});var Ze=D(Ae=>{"use strict";var $s=Ae&&Ae.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ae,"__esModule",{value:!0});var Mt=$s(we()),Ot=class{get attributes(){return Object.assign({},this._attributes)}get element(){return this._element}get events(){return this._events}constructor(t,r){this._events=new Set,this._element=t,this._attributes=r}addEvent(t){return this._events.add(t),this}camel(){return Object.fromEntries(Object.entries(this._attributes).map(([t,r])=>t==="class"?["className",r]:[t.replace(/-([a-z])/g,(n,i)=>i.toUpperCase()).replaceAll("-",""),r]))}getAttribute(t){return this._attributes[t]}hasAttribute(t){return t in this._attributes}hasEvent(t){return this._events.has(t)}removeAttribute(t,r=!1){let a=this.getAttribute(t);return typeof a>"u"?this:(delete this._attributes[t],r||Mt.default.emit("attribute-remove",{element:this,key:t,previous:a}),this)}setAttribute(t,r,a=!1){if(typeof r>"u")return this.removeAttribute(t,a);let n=this.getAttribute(t);return n===r?this:(this._attributes[t]=r,a||(typeof n>"u"?Mt.default.emit("attribute-create",{element:this,key:t,value:r}):Mt.default.emit("attribute-update",{element:this,key:t,value:r,previous:n})),this)}setAttributes(t,r=!1){for(let[n,i]of Object.entries(t))this.setAttribute(n,i,r);let a=Object.keys(t);for(let n of Object.keys(this._attributes))a.includes(n)||this.removeAttribute(n,r);return this}tree(t,r,a){if(t||(t=Object.assign({},this._attributes)),r){let i=r.split("-");if(i.length>0){let d=i.shift();i.length>0?(t[d]||(t[d]={}),this.tree(t[d],i.join("-"),a)):t[d]=a}return t}let n={};for(let[i,d]of Object.entries(t))this.tree(n,i,d);return n}};Ae.default=Ot});var Ft=D(Pt=>{"use strict";Object.defineProperty(Pt,"__esModule",{value:!0});Pt.default=()=>window.InkAPI});var R=D(Ce=>{"use strict";var hr=Ce&&Ce.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ce,"__esModule",{value:!0});var mr=hr(Ze()),qs=hr(Ft()),fr=document.createElement("textarea"),Bs=s=>(fr.innerHTML=s,fr.value),Ke=class s{static get elements(){return this._elements}static createComponent(t,r,a={},n=[]){var i;let{registered:d}=r;if(!d&&!(!((i=(0,qs.default)())===null||i===void 0)&&i.elements[t]))return this.createVirtualComponent(t,r,a,n);let h=d||t,x=document.createElement(h);customElements.whenDefined(h).then(()=>{customElements.upgrade(x),x.initiated||x.connectedCallback()});let E=s.register(x,a);E.setAttributes(a,!0);for(let[T,A]of Object.entries(a))typeof A=="string"?x.setAttribute(T,A):A===!0&&x.setAttribute(T,"");return this._cleanChildren(n).forEach(T=>x.appendChild(T)),E}static createElement(t,r={},a=[]){let n=document.createElement(t);for(let[i,d]of Object.entries(r))typeof d=="string"?n.setAttribute(i,d):d===!0&&n.setAttribute(i,"");return this._cleanChildren(a).forEach(i=>n.appendChild(i)),this.register(n,r)}static createText(t,r=!0){return document.createTextNode(Bs(t))}static createVirtualComponent(t,r,a={},n=[]){let i=document.createElement(t);return i.definition=r,Object.setPrototypeOf(i,r.prototype),i.constructor=r.constructor,i.constructor.id=r.id,i.constructor.tagname=r.tagname,i.constructor.classname=r.classname,r.observedAttributes&&(i.constructor.observedAttributes=r.observedAttributes),i.register(a,n),i.element}static cloneElement(t,r=!1){var a;let n=t;if(n.definition){let i=n.originalChildren||[];return this.createComponent(n.nodeName.toLowerCase(),n.definition,n.props||{},r?i.map(d=>this.cloneElement(d,r)):[]).element}else if(t instanceof HTMLElement){let i=Array.from(t.childNodes);return this.createElement(t.nodeName.toLowerCase(),this.has(t)?(a=this.get(t))===null||a===void 0?void 0:a.attributes:Object.fromEntries(Array.from(t.attributes).map(d=>[d.name,d.value])),r?i.map(d=>this.cloneElement(d,r)):[]).element}return t.cloneNode(r)}static filter(t){let r=[];return this._elements.forEach((a,n)=>{t(a,n)&&r.push(a)}),r}static get(t){return this._elements.get(t)||null}static has(t){return this._elements.has(t)}static map(t){let r=[];return this._elements.forEach((a,n)=>{r.push(t(a,n))}),r}static register(t,r,a=!1){if(this.has(t))return this.get(t);r||Array.from(t.attributes).forEach(i=>{r=r||{},r[i.name]=i.value!==""?i.value:!0});let n=new mr.default(t,r||{});return this._elements.set(t,n),a&&Array.from(t.children).forEach(i=>{i instanceof Element&&this.register(i,void 0,!0)}),n}static _cleanChildren(t){return Array.from(t).filter(r=>typeof r<"u").map(r=>typeof r=="string"?this.createText(r):r instanceof mr.default?r.element:r)}};Ke._elements=new Map;Ce.default=Ke});var gr=D(De=>{"use strict";var Bt=De&&De.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(De,"__esModule",{value:!0});var Hs=Bt(Ge()),jt=Bt(Y()),$t=Bt(R()),qt=class{constructor(){let t=document.querySelector("script[data-template]");if(!t)throw new Error("TEMPLATE_DATA not found");try{window.__TEMPLATE_DATA__=JSON.parse(t.innerText.trim()),Object.entries(window.__TEMPLATE_DATA__).forEach(([r,a])=>{jt.default.set(r,a)})}catch{throw new Error("TEMPLATE_DATA is not a valid JSON")}}bindings(){jt.default.set("current","document");let t=this.template();jt.default.delete("current");let r=Hs.default.load(t).elements,a=Array.from(r).map((n,i)=>[String(i),n.attributes]).filter(n=>Object.keys(n[1]).length);return Object.fromEntries(a)}sync(){let t=this.bindings(),r=Array.from(document.querySelectorAll("*"));for(let a of r){let n=Object.fromEntries(Array.from(a.attributes).map(d=>[d.nodeName,d.nodeValue&&d.nodeValue.length>0?d.nodeValue:!0])),i=String($t.default.elements.size);t[i]&&Object.assign(n,t[i]),$t.default.register(a,n)}return t}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(r=>typeof r=="object"&&typeof r.nodeType=="number")?t:[$t.default.createText(String(t))]}};De.default=qt});var F=D(Ie=>{"use strict";var et=Ie&&Ie.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ie,"__esModule",{value:!0});var Us=et(Ze()),$=et(R()),Qe=et(we()),Xe=et(Y()),Ht=class s extends HTMLElement{static get registered(){return customElements.getName(this)}static register(){customElements.define(this.tagname,this)}get attr(){return Object.fromEntries(Array.from(this.attributes).map(t=>[t.name,t.value]))}get definition(){return this._definition||this.constructor}get element(){if(!$.default.has(this))throw new Error(`Component ${this.metadata.classname} not mapped.`);return $.default.get(this)}get initiated(){return this._initiated}get metadata(){let{id:t,classname:r,tagname:a,registered:n,observedAttributes:i=[]}=this.definition;return{id:t,tagname:a,classname:r,registered:n,observed:i}}get originalChildren(){return this._children}get props(){return this.getAttributes()}get propsCamel(){return this.element.camel()}get propsTree(){return this.element.tree()}get virtual(){return this._virtual}set props(t){this.setAttributes(t)}set definition(t){this._definition=t}set originalChildren(t){typeof this._children>"u"&&(this._children=this._cleanChildren(t||[]))}constructor(){if(super(),this._children=void 0,this._definition=null,this._initiated=!1,this._observer=null,this._rendering=!1,this._template=null,this._virtual=!1,!$.default.has(this)){let{registered:t}=this.metadata;if(!t)throw new Error(`Component ${this.metadata.classname} not registered in customElements.`);let r=Object.fromEntries(Array.from(this.attributes).map(a=>[a.name,a.value!==""?a.value:!0]));$.default.register(this,r)}}adoptedCallback(){this.render(),this.emit("adopt",this)}attributeChangedCallback(t,r,a){if(this._rendering)return;let n=r===null?"add":a===null?"remove":"update";a===null&&this.hasAttribute(t)?this.element.removeAttribute(t):a===""?this.element.setAttribute(t,!0):this.element.setAttribute(t,a),this.emit("attributechange",{action:n,name:t,prev:r,value:a,target:this})}clone(t=!1){return this.cloneElement(this,t)}cloneElement(t,r=!1){return $.default.cloneElement(t,r)}connectedCallback(){this.wait(),this.emit("connect",this)}createComponent(t,r,a={},n=[]){return $.default.createComponent(t,r,a,n)}createElement(t,r={},a=[]){return $.default.createElement(t,r,a)}disconnectedCallback(){this.emit("disconnect",this)}emit(t,r){return this.dispatchEvent(new CustomEvent(t,{detail:r})),this}getAttribute(t){return this.element.getAttribute(t)}getAttributes(){return Object.assign({},this.element.attributes)}getChildren(t=!0){return t===!0?Array.from(this.childNodes):t===!1?this._children:t===null&&this.shadowRoot?Array.from(this.shadowRoot.childNodes):[]}getElement(t){return $.default.get(t)}getParentComponent(){let t=this.parentElement;for(;t;){if(t instanceof s)return t;t=t.parentElement}return null}hasAttribute(t){return this.element.hasAttribute(t)}on(t,r){return this.removeEventListener(t,r),this.addEventListener(t,r),this}once(t,r){let a=n=>{this.removeEventListener(t,r),r(n)};return this.on(t,a),this}register(t={},r=[]){$.default.has(this)?$.default.get(this).setAttributes(t):$.default.register(this,t);for(let[a,n]of Object.entries(t))(typeof n=="string"||n===!0)&&super.setAttribute(a,n===""||n===a||n===!0?!0:n);this._children=this._cleanChildren(r),this._children.forEach(a=>this.appendChild(a)),this._virtual=!0,this.connectedCallback()}removeAttribute(t){let r=this.getAttribute(t);this.hasAttribute(t)&&this.element.removeAttribute(t),super.hasAttribute(t)&&super.removeAttribute(t),this._virtual&&this.metadata.observed.includes(t)&&this.attributeChangedCallback(t,r,null)}render(){let t=this.getParentComponent();if(t&&!t.initiated)return;if(this._rendering)return;this._rendering=!0;let r=Xe.default.get("current");Xe.default.set("current",this),this._template?Qe.default.emit("unmounted",this):this._template=this.template();let a=this._template().filter(Boolean),n=this.styles(),i=n.length===0?"light":"shadow",{light:d,shadow:h}=this._getChildren(a,i);if(h.length===0&&i==="light")this.textContent="",d.forEach(x=>this.appendChild(x));else{this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0});let x=document.createElement("style");x.innerText=n;let E=this.shadowRoot;E.textContent="",E.appendChild(x),h.forEach(T=>E.appendChild(T)),d.length&&(this.textContent="",d.forEach(T=>this.appendChild(T)))}return r?Xe.default.set("current",r):Xe.default.delete("current"),this._initiated=!0,this._rendering=!1,Qe.default.emit("mounted",this),this.shadowRoot?this.shadowRoot.innerHTML:this.innerHTML}setAttribute(t,r){let a=this.getAttribute(t);r===""||r===!0?(this.element.setAttribute(t,!0),super.setAttribute(t,"")):r===!1?(this.element.setAttribute(t,r),super.removeAttribute(t)):typeof r=="string"?(this.element.setAttribute(t,r),super.setAttribute(t,r)):this.element.setAttribute(t,r),this._virtual&&this.metadata.observed.includes(t)&&typeof r=="string"&&this.attributeChangedCallback(t,a,r)}setAttributes(t){Object.entries(t).forEach(([r,a])=>this.setAttribute(r,a))}unbind(t,r){return this.removeEventListener(t,r),this}wait(){if(document.readyState!=="loading")this._update();else{let t=()=>{this._update(),Qe.default.unbind("ready",t)};Qe.default.on("ready",t)}}_cleanChildren(t){return Array.from(t).filter(r=>typeof r<"u").map(r=>typeof r=="string"?$.default.createText(r):r instanceof Us.default?r.element:r)}_getChildren(t,r){let a=this._getTemplateNodes(t),n=this._getTemplateNodes(t,"light"),i=this._getTemplateNodes(t,"shadow"),d=a.length>0?a:t;return{light:n.length>0?n:r==="light"?d:[],shadow:i.length>0?i:r==="shadow"?d:[]}}_getTemplateNodes(t,r){let a=t.find(n=>this._isTemplate(n,r));return a?Array.from(a.childNodes||[]):[]}_isTemplate(t,r){if(t.nodeName!=="TEMPLATE")return!1;let a=t;return r?r===a.getAttribute("type"):!a.hasAttribute("type")}_toNodeList(t){return t instanceof Node?[t]:Array.isArray(t)&&t.every(r=>r instanceof Node)?t:[$.default.createText(String(t))]}_update(){typeof this._children>"u"&&(this._children=this._cleanChildren(Array.from(this.childNodes||[]))),this._initiated||this.render()}};Ie.default=Ht});var Ut=D(rt=>{"use strict";Object.defineProperty(rt,"__esModule",{value:!0});rt.stylemap=zs;function zs(s={}){return new tt(Object.entries(s))}var tt=class s extends Map{add(t,r){this.has(t)||this.set(t,[]);let a=this.get(t);return typeof r=="string"||typeof r=="number"?a.push(r):Array.isArray(r)&&a.push(...r),this}clone(){let t=new s;for(let[r,a]of this.entries())t.set(r,a.slice());return t}replaceAll(t,r){for(let[a,n]of this.entries())this.set(a,n.map(i=>typeof i=="string"?i.replaceAll(t,r):i));return this}};rt.default=tt});var se=D(re=>{"use strict";var Gs=re&&re.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(re,"__esModule",{value:!0});re.styleset=Ws;var Js=Gs(Ut());function Ws(s={}){return new st(Object.entries(s))}var st=class extends Map{add(t,r,a){this.has(t)||this.set(t,new Js.default);let n=this.get(t);return typeof a=="string"?n.set(r,a.split(" ")):Array.isArray(a)&&n.set(r,a),this}map(t,r){return this.set(t,r),this}toString(){let t=[];for(let[r,a]of this.entries()){let n=[];for(let[i,d]of a.entries())i&&d?.length&&n.push(`${i}:${d.join(" ")}`);n.length&&t.push(`${r}{${n.join(";")}}`)}return t.join("")}};re.default=st});var Gt=D(zt=>{"use strict";Object.defineProperty(zt,"__esModule",{value:!0});zt.default=Ys;function Ys(s,t,r=!1,a=":host",n="color"){let{color:i,white:d,black:h,info:x,warning:E,success:T,error:A,muted:_,primary:w,secondary:I,theme:o}=s,c=i||(o?`var(--${o})`:d?"var(--white)":h?"var(--black)":x?"var(--info)":E?"var(--warning)":T?"var(--success)":A?"var(--error)":_?"var(--muted)":w?"var(--primary)":I?"var(--secondary)":r);return c&&t.add(a,n,c),i?"color":d?"white":h?"black":x?"info":E?"warning":T?"success":A?"error":_?"muted":w?"primary":I?"secondary":"initial"}});var br=D(Jt=>{"use strict";Object.defineProperty(Jt,"__esModule",{value:!0});Jt.default=Vs;function Vs(s,t,r=!1,a=":host"){let{curve:n,curved:i,rounded:d,pill:h}=s,x=n?`${n}px`:i?"4px":d?"12px":h?"10000px":r;return x&&(t.add(a,"border-radius",x),t.add(a,"overflow","hidden")),n?"curve":i?"curved":d?"rounded":h?"pill":"initial"}});var Yt=D(Wt=>{"use strict";Object.defineProperty(Wt,"__esModule",{value:!0});Wt.default=Zs;function Zs(s,t,r=!1,a=":host"){let{flex:n,none:i,inline:d,block:h,"inline-block":x,"inline-flex":E}=s,T=n?"flex":i?"none":h?"block":d?"inline":E?"inline-flex":x?"inline-block":r;return T&&t.add(a,"display",T),T||"initial"}});var _r=D(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});Zt.default=Ks;function Ks(s,t,r=!1,a=":host",n="font-size"){let{size:i,xs:d,sm:h,md:x,lg:E,xl:T,xl2:A,xl3:_,xl4:w,xl5:I}=s,o=i?`${i}px`:d?"8px":h?"12px":x?"16px":E?"20px":T?"24px":A?"28px":_?"32px":w?"36px":I?"40px":r;return o&&t.add(a,n,o),i?"size":d?"xs":h?"sm":x?"md":E?"lg":T?"xl":A?"xl2":_?"xl3":w?"xl4":I?"xl5":"initial"}});var Nr=D(Se=>{"use strict";var Qs=Se&&Se.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Se,"__esModule",{value:!0});var Xs=Qs(F()),it=class extends Xs.default{get field(){return this._field}constructor(){super(),this._field=this.attachInternals()}formAssociatedCallback(t){this.emit("formassociate",this)}formDisabledCallback(t){this.emit("formdisable",this)}formResetCallback(){this.emit("formreset",this)}};it.formAssociated=!0;Se.default=it});var oe=D(Le=>{"use strict";var ea=Le&&Le.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Le,"__esModule",{value:!0});Le.default=ra;var ta=ea(Y());function ra(s=null,t=!1){if(!s&&(s=ta.default.get("current"),!s)){if(!t)throw new Error("Not called within a Ink component");return null}return s}});var Rr=D(Ne=>{"use strict";var sa=Ne&&Ne.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ne,"__esModule",{value:!0});var aa=sa(Y());function na(s){let t=aa.default.get("env")||{};return s?t[s]||null:t}Ne.default=na});var Kt=D(Re=>{"use strict";var Mr=Re&&Re.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Re,"__esModule",{value:!0});Re.default=oa;var ia=Mr(oe()),la=Mr(Y());function oa(s=null){let t=(0,ia.default)(s,!0);return typeof t=="string"?la.default.get("props")||{}:t?t.props:{}}});var Pr=D(ce=>{"use strict";var Or=ce&&ce.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ce,"__esModule",{value:!0});ce.classlist=da;ce.default=ua;var ca=Or(oe()),pa=Or(Kt());function da(s=null){var t;if(s==="body")return document.body.classList;if(s==="head")return document.head.classList;if(s==="document")return(t=document.body.parentElement)===null||t===void 0?void 0:t.classList;let r=(0,ca.default)(s);return r?.classList}function ua(s=null){return(0,pa.default)(s).class||""}});var Fr=D(Z=>{"use strict";var ma=Z&&Z.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Z,"__esModule",{value:!0});Z.innerHTML=ha;Z.innerText=ga;Z.default=Qt;var fa=ma(oe());function ha(s=null){let t=Qt(s),r=document.createElement("template");return r.append(...t.map(a=>a.cloneNode(!0))),r.innerHTML}function ga(s=null){let t=Qt(s),r=document.createElement("template");return r.append(...t.map(a=>a.cloneNode(!0))),r.innerText}function Qt(s=null){let t=(0,fa.default)(s,!0);return typeof t!="string"&&t?t.originalChildren||[]:[]}});var jr=D(K=>{"use strict";var ya=K&&K.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(K,"__esModule",{value:!0});K.SignalRegistry=void 0;K.default=ba;var xa=ya(oe()),pe=class s{static observe(t,r){let a={getter:()=>i.raw,setter:h=>h},n=new Set,i={raw:r,change(h){return n.add(h),i},getter(h){return a.getter=h,i},setter(h){return a.setter=h,i}};Object.defineProperty(i,"value",{get(){return a.getter()},set(h){let x=a.setter(h),E=s.serialize(x)!==s.serialize(i.raw);i.raw=x,E&&(n.forEach(T=>T(x)),t.render())}});let d=this._observers.get(t);return d?(d.observed++,d.values.push(i)):this._observers.set(t,{observed:1,values:[i]}),i}static observer(t){return this._observers.get(t)||null}static serialize(t){return JSON.stringify(t)}};K.SignalRegistry=pe;pe._observers=new Map;function ba(s,t=null){let r=(0,xa.default)(t);if(!r.initiated)return pe.observe(r,s);let a=pe.observer(r);if(!a)throw new Error("Signal state mismatch");return a.values[a.observed++%a.values.length]}});var qr=D(z=>{"use strict";var ka=z&&z.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(z,"__esModule",{value:!0});z.breakpoints=void 0;z.stylesheet=Ta;var $r=ka(se());z.breakpoints={all:0,xl4:1920,xl3:1536,xl2:1280,xl:1024,lg:992,md:767,sm:420,xs:360};function Ta(){return new lt}var lt=class extends Map{add(t,r,a,n){return this.has(t)||this.set(t,new $r.default),this.get(t).add(r,a,n),this}map(t,r,a){return this.has(t)||this.set(t,new $r.default),this.get(t).map(r,a),this}toString(){var t;let r=[];for(let[a,n]of Object.entries(z.breakpoints)){let i=(t=this.get(a))===null||t===void 0?void 0:t.toString();if(i){if(a==="all"){r.push(i);continue}r.push(`@media (max-width:${n}px){${i}}`)}}return r.join("")}};z.default=lt});var Hr=D(ot=>{"use strict";Object.defineProperty(ot,"__esModule",{value:!0});ot.getStatus=va;var Br={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};ot.default=Br;function va(s){return Object.values(Br).find(t=>t.code===s)}});var Ur=D(er=>{"use strict";Object.defineProperty(er,"__esModule",{value:!0});var Ea=Hr(),Xt=class s extends Error{static for(t,...r){return r.forEach(function(a){t=t.replace("%s",String(a))}),new this(t)}static forErrors(t){let r=new this("Invalid Parameters");return r.withErrors(t),r}static require(t,r,...a){if(!t){for(let n of a)r=r.replace("%s",n);throw new this(r)}}static try(t){return{catch:r=>{try{return t()}catch(a){if(a instanceof s)return r(a,a.type);if(a instanceof Error){let n=s.upgrade(a);return r(n,n.type)}else if(typeof a=="string"){let n=s.for(a);return r(n,n.type)}return r(a,"unknown")}}}}static upgrade(t,r=500){if(t instanceof s)return t;let a=new this(t.message,r);return a.name=t.name,a.stack=t.stack,a}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,r=500){var a;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=r,this._status=((a=(0,Ea.getStatus)(r))===null||a===void 0?void 0:a.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,r=0){let a={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,r)};return Object.keys(this._errors).length>0&&(a.errors=this._errors),a}trace(t=0,r=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,r||this.stack.length).map(n=>n.trim()).map(n=>{if(!n.startsWith("at"))return!1;let[i,d,h]=n.split(" ");h||(h=`(${d})`,d="<none>");let[x,E,T]=h.substring(1,h.length-1).split(":");return{method:d,file:x,line:parseInt(E)||0,char:parseInt(T)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,r){return this._start=t,this._end=r,this}};er.default=Xt});var zr=D(Me=>{"use strict";var _a=Me&&Me.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Me,"__esModule",{value:!0});var wa=_a(Ur()),tr=class extends wa.default{};Me.default=tr});var Kr=D(u=>{"use strict";var Aa=u&&u.__createBinding||(Object.create?function(s,t,r,a){a===void 0&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(s,a,n)}:function(s,t,r,a){a===void 0&&(a=r),s[a]=t[r]}),Ca=u&&u.__setModuleDefault||(Object.create?function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}:function(s,t){s.default=t}),V=u&&u.__importStar||function(){var s=function(t){return s=Object.getOwnPropertyNames||function(r){var a=[];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[a.length]=n);return a},s(t)};return function(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var a=s(t),n=0;n<a.length;n++)a[n]!=="default"&&Aa(r,t,a[n]);return Ca(r,t),r}}(),j=u&&u.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(u,"__esModule",{value:!0});u.StyleSheet=u.StyleSet=u.StyleMap=u.stylesheet=u.styleset=u.stylemap=u.breakpoints=u.emitter=u.signal=u.innerHTML=u.innerText=u.children=u.classnames=u.classlist=u.props=u.env=u.data=u.client=u.component=u.SignalRegistry=u.ClientException=u.ClientEmitter=u.ClientElement=u.ClientRegistry=u.ClientComponent=u.ClientField=u.TemplateData=u.DOMNode=u.DOMText=u.DOMElement=u.DOMDocument=u.DOMDoctype=u.DOMComment=void 0;var Da=j(_t());u.DOMComment=Da.default;var Ia=j(At());u.DOMDoctype=Ia.default;var Sa=j(Ge());u.DOMDocument=Sa.default;var La=j(Dt());u.DOMElement=La.default;var Na=j(St());u.DOMText=Na.default;var Ra=j(ee());u.DOMNode=Ra.default;var Ma=j(Nr());u.ClientField=Ma.default;var Oa=j(F());u.ClientComponent=Oa.default;var Pa=j(R());u.ClientRegistry=Pa.default;var Fa=j(Ze());u.ClientElement=Fa.default;var Gr=V(we());u.emitter=Gr.default;Object.defineProperty(u,"ClientEmitter",{enumerable:!0,get:function(){return Gr.ClientEmitter}});var ja=j(Ft());u.client=ja.default;var $a=j(oe());u.component=$a.default;var Jr=V(Y());u.data=Jr.default;Object.defineProperty(u,"TemplateData",{enumerable:!0,get:function(){return Jr.TemplateData}});var qa=j(Rr());u.env=qa.default;var Ba=j(Kt());u.props=Ba.default;var Wr=V(Pr());u.classnames=Wr.default;Object.defineProperty(u,"classlist",{enumerable:!0,get:function(){return Wr.classlist}});var rr=V(Fr());u.children=rr.default;Object.defineProperty(u,"innerHTML",{enumerable:!0,get:function(){return rr.innerHTML}});Object.defineProperty(u,"innerText",{enumerable:!0,get:function(){return rr.innerText}});var Yr=V(jr());u.signal=Yr.default;Object.defineProperty(u,"SignalRegistry",{enumerable:!0,get:function(){return Yr.SignalRegistry}});var Vr=V(Ut());u.StyleMap=Vr.default;Object.defineProperty(u,"stylemap",{enumerable:!0,get:function(){return Vr.stylemap}});var Zr=V(se());u.StyleSet=Zr.default;Object.defineProperty(u,"styleset",{enumerable:!0,get:function(){return Zr.styleset}});var sr=V(qr());u.StyleSheet=sr.default;Object.defineProperty(u,"stylesheet",{enumerable:!0,get:function(){return sr.stylesheet}});Object.defineProperty(u,"breakpoints",{enumerable:!0,get:function(){return sr.breakpoints}});var Ha=j(zr());u.ClientException=Ha.default});var G=D((Ln,Qr)=>{Qr.exports={...Kr()}});var es=D((Rn,pt)=>{var Ua=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var g=function(s){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,a={},n={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function o(c){return c instanceof i?new i(c.type,o(c.content),c.alias):Array.isArray(c)?c.map(o):c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(o){return Object.prototype.toString.call(o).slice(8,-1)},objId:function(o){return o.__id||Object.defineProperty(o,"__id",{value:++r}),o.__id},clone:function o(c,p){p=p||{};var m,f;switch(n.util.type(c)){case"Object":if(f=n.util.objId(c),p[f])return p[f];m={},p[f]=m;for(var b in c)c.hasOwnProperty(b)&&(m[b]=o(c[b],p));return m;case"Array":return f=n.util.objId(c),p[f]?p[f]:(m=[],p[f]=m,c.forEach(function(C,y){m[y]=o(C,p)}),m);default:return c}},getLanguage:function(o){for(;o;){var c=t.exec(o.className);if(c)return c[1].toLowerCase();o=o.parentElement}return"none"},setLanguage:function(o,c){o.className=o.className.replace(RegExp(t,"gi"),""),o.classList.add("language-"+c)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(m){var o=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(m.stack)||[])[1];if(o){var c=document.getElementsByTagName("script");for(var p in c)if(c[p].src==o)return c[p]}return null}},isActive:function(o,c,p){for(var m="no-"+c;o;){var f=o.classList;if(f.contains(c))return!0;if(f.contains(m))return!1;o=o.parentElement}return!!p}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(o,c){var p=n.util.clone(n.languages[o]);for(var m in c)p[m]=c[m];return p},insertBefore:function(o,c,p,m){m=m||n.languages;var f=m[o],b={};for(var C in f)if(f.hasOwnProperty(C)){if(C==c)for(var y in p)p.hasOwnProperty(y)&&(b[y]=p[y]);p.hasOwnProperty(C)||(b[C]=f[C])}var L=m[o];return m[o]=b,n.languages.DFS(n.languages,function(M,J){J===L&&M!=o&&(this[M]=b)}),b},DFS:function o(c,p,m,f){f=f||{};var b=n.util.objId;for(var C in c)if(c.hasOwnProperty(C)){p.call(c,C,c[C],m||C);var y=c[C],L=n.util.type(y);L==="Object"&&!f[b(y)]?(f[b(y)]=!0,o(y,p,null,f)):L==="Array"&&!f[b(y)]&&(f[b(y)]=!0,o(y,p,C,f))}}},plugins:{},highlightAll:function(o,c){n.highlightAllUnder(document,o,c)},highlightAllUnder:function(o,c,p){var m={callback:p,container:o,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",m),m.elements=Array.prototype.slice.apply(m.container.querySelectorAll(m.selector)),n.hooks.run("before-all-elements-highlight",m);for(var f=0,b;b=m.elements[f++];)n.highlightElement(b,c===!0,m.callback)},highlightElement:function(o,c,p){var m=n.util.getLanguage(o),f=n.languages[m];n.util.setLanguage(o,m);var b=o.parentElement;b&&b.nodeName.toLowerCase()==="pre"&&n.util.setLanguage(b,m);var C=o.textContent,y={element:o,language:m,grammar:f,code:C};function L(J){y.highlightedCode=J,n.hooks.run("before-insert",y),y.element.innerHTML=y.highlightedCode,n.hooks.run("after-highlight",y),n.hooks.run("complete",y),p&&p.call(y.element)}if(n.hooks.run("before-sanity-check",y),b=y.element.parentElement,b&&b.nodeName.toLowerCase()==="pre"&&!b.hasAttribute("tabindex")&&b.setAttribute("tabindex","0"),!y.code){n.hooks.run("complete",y),p&&p.call(y.element);return}if(n.hooks.run("before-highlight",y),!y.grammar){L(n.util.encode(y.code));return}if(c&&s.Worker){var M=new Worker(n.filename);M.onmessage=function(J){L(J.data)},M.postMessage(JSON.stringify({language:y.language,code:y.code,immediateClose:!0}))}else L(n.highlight(y.code,y.grammar,y.language))},highlight:function(o,c,p){var m={code:o,grammar:c,language:p};if(n.hooks.run("before-tokenize",m),!m.grammar)throw new Error('The language "'+m.language+'" has no grammar.');return m.tokens=n.tokenize(m.code,m.grammar),n.hooks.run("after-tokenize",m),i.stringify(n.util.encode(m.tokens),m.language)},tokenize:function(o,c){var p=c.rest;if(p){for(var m in p)c[m]=p[m];delete c.rest}var f=new x;return E(f,f.head,o),h(o,f,c,f.head,0),A(f)},hooks:{all:{},add:function(o,c){var p=n.hooks.all;p[o]=p[o]||[],p[o].push(c)},run:function(o,c){var p=n.hooks.all[o];if(!(!p||!p.length))for(var m=0,f;f=p[m++];)f(c)}},Token:i};s.Prism=n;function i(o,c,p,m){this.type=o,this.content=c,this.alias=p,this.length=(m||"").length|0}i.stringify=function o(c,p){if(typeof c=="string")return c;if(Array.isArray(c)){var m="";return c.forEach(function(L){m+=o(L,p)}),m}var f={type:c.type,content:o(c.content,p),tag:"span",classes:["token",c.type],attributes:{},language:p},b=c.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(f.classes,b):f.classes.push(b)),n.hooks.run("wrap",f);var C="";for(var y in f.attributes)C+=" "+y+'="'+(f.attributes[y]||"").replace(/"/g,"&quot;")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'"'+C+">"+f.content+"</"+f.tag+">"};function d(o,c,p,m){o.lastIndex=c;var f=o.exec(p);if(f&&m&&f[1]){var b=f[1].length;f.index+=b,f[0]=f[0].slice(b)}return f}function h(o,c,p,m,f,b){for(var C in p)if(!(!p.hasOwnProperty(C)||!p[C])){var y=p[C];y=Array.isArray(y)?y:[y];for(var L=0;L<y.length;++L){if(b&&b.cause==C+","+L)return;var M=y[L],J=M.inside,lr=!!M.lookbehind,or=!!M.greedy,ms=M.alias;if(or&&!M.pattern.global){var fs=M.pattern.toString().match(/[imsuy]*$/)[0];M.pattern=RegExp(M.pattern.source,fs+"g")}for(var cr=M.pattern||M,O=m.next,H=f;O!==c.tail&&!(b&&H>=b.reach);H+=O.value.length,O=O.next){var X=O.value;if(c.length>o.length)return;if(!(X instanceof i)){var $e=1,B;if(or){if(B=d(cr,H,o,lr),!B||B.index>=o.length)break;var qe=B.index,hs=B.index+B[0].length,W=H;for(W+=O.value.length;qe>=W;)O=O.next,W+=O.value.length;if(W-=O.value.length,H=W,O.value instanceof i)continue;for(var xe=O;xe!==c.tail&&(W<hs||typeof xe.value=="string");xe=xe.next)$e++,W+=xe.value.length;$e--,X=o.slice(H,W),B.index-=H}else if(B=d(cr,0,X,lr),!B)continue;var qe=B.index,Be=B[0],xt=X.slice(0,qe),pr=X.slice(qe+Be.length),bt=H+X.length;b&&bt>b.reach&&(b.reach=bt);var He=O.prev;xt&&(He=E(c,He,xt),H+=xt.length),T(c,He,$e);var gs=new i(C,J?n.tokenize(Be,J):Be,ms,Be);if(O=E(c,He,gs),pr&&E(c,O,pr),$e>1){var kt={cause:C+","+L,reach:bt};h(o,c,p,O.prev,H,kt),b&&kt.reach>b.reach&&(b.reach=kt.reach)}}}}}}function x(){var o={value:null,prev:null,next:null},c={value:null,prev:o,next:null};o.next=c,this.head=o,this.tail=c,this.length=0}function E(o,c,p){var m=c.next,f={value:p,prev:c,next:m};return c.next=f,m.prev=f,o.length++,f}function T(o,c,p){for(var m=c.next,f=0;f<p&&m!==o.tail;f++)m=m.next;c.next=m,m.prev=c,o.length-=f}function A(o){for(var c=[],p=o.head.next;p!==o.tail;)c.push(p.value),p=p.next;return c}if(!s.document)return s.addEventListener&&(n.disableWorkerMessageHandler||s.addEventListener("message",function(o){var c=JSON.parse(o.data),p=c.language,m=c.code,f=c.immediateClose;s.postMessage(n.highlight(m,n.languages[p],p)),f&&s.close()},!1)),n;var _=n.util.currentScript();_&&(n.filename=_.src,_.hasAttribute("data-manual")&&(n.manual=!0));function w(){n.manual||n.highlightAll()}if(!n.manual){var I=document.readyState;I==="loading"||I==="interactive"&&_&&_.defer?document.addEventListener("DOMContentLoaded",w):window.requestAnimationFrame?window.requestAnimationFrame(w):window.setTimeout(w,16)}return n}(Ua);typeof pt<"u"&&pt.exports&&(pt.exports=g);typeof global<"u"&&(global.Prism=g);g.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};g.languages.markup.tag.inside["attr-value"].inside.entity=g.languages.markup.entity;g.languages.markup.doctype.inside["internal-subset"].inside=g.languages.markup;g.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))});Object.defineProperty(g.languages.markup.tag,"addInlined",{value:function(t,r){var a={};a["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:g.languages[r]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};n["language-"+r]={pattern:/[\s\S]+/,inside:g.languages[r]};var i={};i[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:n},g.languages.insertBefore("markup","cdata",i)}});Object.defineProperty(g.languages.markup.tag,"addAttribute",{value:function(s,t){g.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:g.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});g.languages.html=g.languages.markup;g.languages.mathml=g.languages.markup;g.languages.svg=g.languages.markup;g.languages.xml=g.languages.extend("markup",{});g.languages.ssml=g.languages.xml;g.languages.atom=g.languages.xml;g.languages.rss=g.languages.xml;(function(s){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var r=s.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(g);g.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};g.languages.javascript=g.languages.extend("clike",{"class-name":[g.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});g.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;g.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:g.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:g.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:g.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:g.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:g.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});g.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:g.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});g.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});g.languages.markup&&(g.languages.markup.tag.addInlined("script","javascript"),g.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));g.languages.js=g.languages.javascript;(function(){if(typeof g>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var s="Loading\u2026",t=function(_,w){return"\u2716 Error "+_+" while fetching file: "+w},r="\u2716 Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",i="loading",d="loaded",h="failed",x="pre[data-src]:not(["+n+'="'+d+'"]):not(['+n+'="'+i+'"])';function E(_,w,I){var o=new XMLHttpRequest;o.open("GET",_,!0),o.onreadystatechange=function(){o.readyState==4&&(o.status<400&&o.responseText?w(o.responseText):o.status>=400?I(t(o.status,o.statusText)):I(r))},o.send(null)}function T(_){var w=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_||"");if(w){var I=Number(w[1]),o=w[2],c=w[3];return o?c?[I,Number(c)]:[I,void 0]:[I,I]}}g.hooks.add("before-highlightall",function(_){_.selector+=", "+x}),g.hooks.add("before-sanity-check",function(_){var w=_.element;if(w.matches(x)){_.code="",w.setAttribute(n,i);var I=w.appendChild(document.createElement("CODE"));I.textContent=s;var o=w.getAttribute("data-src"),c=_.language;if(c==="none"){var p=(/\.(\w+)$/.exec(o)||[,"none"])[1];c=a[p]||p}g.util.setLanguage(I,c),g.util.setLanguage(w,c);var m=g.plugins.autoloader;m&&m.loadLanguages(c),E(o,function(f){w.setAttribute(n,d);var b=T(w.getAttribute("data-range"));if(b){var C=f.split(/\r\n?|\n/g),y=b[0],L=b[1]==null?C.length:b[1];y<0&&(y+=C.length),y=Math.max(0,Math.min(y-1,C.length)),L<0&&(L+=C.length),L=Math.max(0,Math.min(L,C.length)),f=C.slice(y,L).join(`
`),w.hasAttribute("data-start")||w.setAttribute("data-start",String(y+1))}I.textContent=f,g.highlightElement(I)},function(f){w.setAttribute(n,h),I.textContent=f})}}),g.plugins.fileHighlight={highlight:function(w){for(var I=(w||document).querySelectorAll(x),o=0,c;c=I[o++];)g.highlightElement(c)}};var A=!1;g.fileHighlight=function(){A||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),A=!0),g.plugins.fileHighlight.highlight.apply(this,arguments)}})()});var Wa={};vs(Wa,{BUILD_ID:()=>Ja,ClientRegistry:()=>ps.default,TemplateDocument:()=>yt,components:()=>Ga,data:()=>ds.default,elements:()=>us,emitter:()=>gt.default});var e=v(Ge()),cs=v(gr()),ps=v(R()),gt=v(we()),ds=v(Y());var yr=v(R()),xr=v(F()),te=class extends xr.default{static id="79d31ab9c2a1621f9a22";static tagname="panel";static classname="Panel_79d31ab9c2a1621f9a22";styles(){return""}template(){let t=this.originalChildren,r={main:t.find(i=>i.nodeName==="MAIN"),head:t.find(i=>i.nodeName==="HEADER"),foot:t.find(i=>i.nodeName==="FOOTER"),left:t.find(i=>i.nodeName==="ASIDE"&&i.hasAttribute("left")),right:t.find(i=>i.nodeName==="ASIDE"&&i.hasAttribute("right"))},a={left:!1,right:!1};this.toggle=i=>{a[i]=!a[i],n.all()};let n={all(){r.main&&this.main(),r.head&&this.head(),r.foot&&this.foot(),r.left&&this.left(),r.right&&this.right()},head(){let{classList:i}=r.head;i.add("absolute","top-0","right-0","h-60","transition-500"),r.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),a.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0"))},foot(){let{classList:i}=r.foot;i.add("absolute","bottom-0","right-0","h-60","transition-500"),r.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),a.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0"))},left(){let{classList:i}=r.left;i.add("w-226","absolute","bottom-0","left-0","top-0","transition-500"),a.left?(i.remove("md-left--226"),i.add("md-left-0")):(i.remove("md-left-0"),i.add("md-left--226"))},right(){let{classList:i}=r.right;i.add("w-200","absolute","right-0","transition-500"),r.foot?(i.remove("bottom-0"),i.add("bottom-60")):(i.remove("bottom-60"),i.add("bottom-0")),r.head?(i.remove("top-0"),i.add("top-60")):(i.remove("top-60"),i.add("top-0")),a.right?(i.remove("lg-right--200"),i.add("lg-right-0")):(i.remove("lg-right-0"),i.add("lg-right--200"))},main(){let{classList:i}=r.main;i.add("absolute","transition-500"),r.head?(i.remove("top-0"),i.add("top-60")):(i.remove("top-60"),i.add("top-0")),r.foot?(i.remove("bottom-0"),i.add("bottom-60")):(i.remove("bottom-60"),i.add("bottom-0")),r.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),r.right?(i.remove("right-0"),i.add("right-200")):(i.remove("right-200"),i.add("right-0")),a.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0")),a.right?(i.remove("lg-right-0"),i.add("lg-right-200")):(i.remove("lg-right-200"),i.add("lg-right-0"))}};return n.all(),this.classList.add("block","relative","w-full","vh","scroll-hidden"),()=>[yr.default.createText(`
`,!1),...this._toNodeList(t)]}};var Vt=v(R()),kr=v(F()),Tr=v(se()),at=v(Gt()),vr=v(br()),Er=v(Yt()),ae=class extends kr.default{static id="9d0f5af137a9d2a0b02a";static tagname="alert";static classname="Alert_9d0f5af137a9d2a0b02a";styles(){return""}template(){let{outline:t,solid:r,transparent:a,padding:n}=this.props,i=new Tr.default;return this.styles=()=>i.toString(),(0,Er.default)(this.props,i,"block",":host"),i.add(":host","padding",n?`${n}px`:"16px"),(0,vr.default)(this.props,i,!1,":host"),t||a?((0,at.default)(this.props,i,"var(--muted)",":host","color"),(0,at.default)(this.props,i,"var(--muted)",":host","border-color"),i.add(":host","border-style","solid"),i.add(":host","border-width","1px"),t&&i.add(":host","background-color","var(--white)")):(i.add(":host","color","var(--white)"),(0,at.default)(this.props,i,"var(--muted)",":host","background-color")),()=>[Vt.default.createText(`
`,!1),Vt.default.createElement("slot",{},[]).element]}};var nt=v(R()),wr=v(F()),Ar=v(se()),Cr=v(Gt()),Dr=v(Yt()),Ir=v(_r()),ne=class extends wr.default{static id="e084b6924e0478588e54";static tagname="icon";static classname="Icon_e084b6924e0478588e54";styles(){return""}template(){let{name:t,solid:r,brand:a}=this.props,n=new Ar.default;this.styles=()=>n.toString(),(0,Dr.default)(this.props,n,"inline-block",":host"),(0,Cr.default)(this.props,n,!1,":host","color"),(0,Ir.default)(this.props,n,!1,":host","font-size");let i=["fa-fw",`fa-${t}`];return i.push(a?"fa-brands":"fa-solid"),()=>[nt.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"}).element,nt.default.createText(`
`,!1),nt.default.createElement("i",{class:i.join(" ")},[]).element]}};var ie=v(R()),Sr=v(F()),Lr=v(se()),le=class extends Sr.default{static id="24053478a6af78b142e8";static tagname="tab";static classname="Tab_24053478a6af78b142e8";styles(){return""}template(){let t={init:()=>{let _=this.hasAttribute("on");this.classList.remove(..._?T:E),this.classList.add(..._?E:T),Array.from(document.querySelectorAll(a)).forEach(w=>{w.style.display=_?"block":"none"})},activate:()=>{Array.from(document.querySelectorAll(`[group="${r}"]`)).forEach(_=>{let w=_.getAttribute("selector");a===w&&!_.hasAttribute("on")?(_.setAttribute("on",""),Array.from(document.querySelectorAll(a)).forEach(I=>{I.style.display="block"}),typeof _.render=="function"&&_.render()):a!==w&&_.hasAttribute("on")&&(_.removeAttribute("on"),Array.from(document.querySelectorAll(w)).forEach(I=>{I.style.display="none"}),typeof _.render=="function"&&_.render())})}},{group:r,selector:a="",active:n="",inactive:i="",style:d,class:h,...x}=this.props,E=n.split(" "),T=i.split(" "),A=new Lr.default;return this.styles=()=>A.toString(),A.add(":host","cursor","pointer"),A.add("a","display","block"),A.add("a","height","100%"),A.add("a","width","100%"),()=>[ie.default.createText(`
`,!1),ie.default.createElement("a",{...x,click:t.activate,mount:t.init},[ie.default.createText(`
  `,!1),ie.default.createElement("slot",{},[]).element,ie.default.createText(`
`,!1)]).element]}};var ar=v(R()),Xr=v(F()),ct=v(G()),de=class extends Xr.default{static id="3e2f9d1245032407693b";static tagname="docs";static classname="Docs_3e2f9d1245032407693b";styles(){return""}template(){return(0,ct.classlist)().add("block","w-full","h-full","scroll-y-auto","scroll-x-hidden"),()=>[ar.default.createText(`
`,!1),ar.default.createElement("article",{class:"block p-10 tx-t-1"},[...this._toNodeList((0,ct.children)())]).element]}};var l=v(R()),ss=v(F());var S=v(R()),ts=v(F()),nr=v(es()),rs=v(G()),U=class extends ts.default{static id="07bacf6bf1ae49080e95";static tagname="code";static classname="Code_07bacf6bf1ae49080e95";styles(){return`:host {
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
  }`}template(){let t=this.props,{lang:r="markup",numbers:a=!1,inline:n=!1,trim:i=!1,ltrim:d=!1,rtrim:h=!1,detab:x=0}=t,E=(0,rs.children)(),T=E[0]?.textContent||"";x&&(T=T.replace(new RegExp(`\\n {${x}}`,"g"),`
`)),i?T=T.trim():d?T=T.replace(/^\s+/,""):h&&(T=T.replace(/\s+$/,""));let A=_=>{if(!T)return;let w=nr.default.highlight(T,nr.default.languages[r],r);if(_.detail.target.innerHTML=w,a){let I=w.match(/\n(?!$)/g),o=I?I.length+1:1,c=new Array(o+1).join("<span></span>"),p=document.createElement("span");p.setAttribute("aria-hidden","true"),p.className="line-numbers-rows",p.innerHTML=c,_.detail.target.appendChild(p)}};return()=>[S.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css"}).element,S.default.createText(`
`,!1),S.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-tomorrow.min.css"}).element,S.default.createText(`
`,!1),...r==="bash"?[S.default.createText(`
  `,!1),S.default.createElement("div",{class:"terminal"},[S.default.createElement("span",{},[S.default.createText("$",!1)]).element,S.default.createText(" ",!1),...this._toNodeList(E)]).element,S.default.createText(`
`,!1)]:T?[,S.default.createText(`
  `,!1),...a?[S.default.createText(`
    `,!1),S.default.createElement("pre",{class:"snippet line-numbers"},[S.default.createElement("code",{mount:A},[]).element]).element,S.default.createText(`
  `,!1)]:[,S.default.createText(`
    `,!1),S.default.createElement("pre",{class:"snippet pad"},[S.default.createElement("code",{mount:A},[]).element]).element,S.default.createText(`
  `,!1)],S.default.createText(`
`,!1)]:[,S.default.createText(`
  `,!1),S.default.createElement("span",{},[S.default.createText("????",!1)]).element,S.default.createText(`
`,!1)],S.default.createText(`

`,!1)]}};var Q=v(G());var Oe={Asset:{type:{kind:"property",list:!1,type:["text/html","text/javascript","text/css","text/plain"],description:"The MIME type of the build file asset"},content:{kind:"property",list:!1,type:"string",description:"The source code of the build file asset."}},Path:{path:{kind:"property",list:!1,type:"string",description:"The file path",example:"'/path/to/file'"},type:{kind:"property",list:!1,type:"string",description:"The type of path.",example:"'file'"}},Config:{brand:{kind:"property",list:!1,type:"string",description:"The brand prefixed before the component tag name.",example:"'ink'"},cwd:{kind:"property",list:!1,type:"string",description:"The project's current working directory (cwd).",example:"'/path/to/project'"},fs:{kind:"property",list:!1,type:"FileSystem",description:"The file system being used to read/write files.",example:`import fs from 'fs';

fs`},emitter:{kind:"property",list:!1,type:"EventEmitter",description:"The NodeJS EventEmitter instance being used.",example:`import EventEmitter from 'events';

new EventEmitter();`},"name?":{kind:"property",list:!1,type:"string",description:"Custom name of component."},"type?":{kind:"property",list:!1,type:["document","component","template"],description:"Type of component"},"minify?":{kind:"property",list:!1,type:"boolean",description:"Whether to minify the generated JavaScript code."},"tsconfig?":{kind:"property",list:!1,type:"string",description:"The location of the used tsconfig.json.",example:"'/path/to/tsconfig.json'"},"extname?":{kind:"property",list:!1,type:"string",description:"The component file extension.",example:"'.ink'"}},Import:{typeOnly:{kind:"property",list:!1,type:"boolean",description:"Should import as type only.",example:"import type { Foo } from 'bar';"},"names?":{kind:"property",list:!0,type:"string",description:"All the names imported",example:"import { Foo, Bar } from 'foobar';"},default:{kind:"property",list:!1,type:"string",description:"The default import name",example:"import foo from 'bar';"},source:{kind:"property",list:!1,type:"string",description:"The file path where names are imported from.",example:"import * from 'foobar';"}},Build:{source:{kind:"property",list:!1,type:"string",description:"Returns the generated JavaScript source code.",example:"compiler.import('./docs/api.ink').source; //server js code"},InkDocument:{kind:"property",list:!1,type:"ServerDocumentClass",description:"Returns a server document class that can be instantiated.",example:"new (compiler.import('./docs/api.ink').InkDocument);"},document:{kind:"property",list:!1,type:"ServerDocument",description:"Returns the default instantiated document used to render the final HTML markup.",example:"compiler.import('./docs/api.ink').document.render(); //<html>...</html>"}},CacheOptions:{buildPath:{kind:"property",list:!1,type:"string",description:"The absolute path the build directory",example:"'/path/to/build'"},"manifestFile?":{kind:"property",list:!1,type:"string",description:"The name of the manifest file.",example:"'manifest.json'"},"environment?":{kind:"property",list:!1,type:"string",description:"The environment mode that will determine the cache strategy.",example:"'production' | 'development'"}},Component:{ast:{kind:"property",list:!1,type:"AST",description:"Returns an abstract syntax tree (AST) interpretation of the component.",example:"component.ast.markup;"},brand:{kind:"property",list:!1,type:"string",description:"Returns the brand prefixed before the component tag name.",example:"component.brand; //--> 'ink'"},classname:{kind:"property",list:!1,type:"string",description:"Returns the suggested class name of the component.",example:"component.classname; //--> 'Button_abc123'"},components:{kind:"property",list:!0,type:"Component",description:"Returns a list of child components imported by this component.",example:"component.components[0].brand; //--> 'ink'"},contents:{kind:"property",list:!1,type:"string",description:"Returns the raw ink source code.",example:"component.contents;"},cwd:{kind:"property",list:!1,type:"string",description:"Returns the project's current working directory (cwd).",example:"component.cwd; //--> '/path/to/project'"},dependencies:{kind:"property",list:!0,type:"{ path: string, type: string }",description:"Returns all the files this component imports sorted by type.",example:"component.dependencies; //--> [{ type: 'file', path: './random/file' }, ...]"},dirname:{kind:"property",list:!1,type:"string",description:"Returns the directory name where this component file exists.",example:"component.dirname;"},fs:{kind:"property",list:!1,type:"FileSystem",description:"Returns the file system being used to read/write files.",example:"component.fs;"},id:{kind:"property",list:!1,type:"string",description:"Returns a unique component ID used for build files.",example:"component.id;"},imports:{kind:"property",list:!0,type:"Import",description:"Returns the files imported by this component. This does not include any component files.",example:"component.imports;"},markup:{kind:"property",list:!0,type:"Token",description:"Returns the markup abstract syntax tree.",example:"component.markup;"},loader:{kind:"property",list:!1,type:"FileLoader",description:"Returns the file loader used to resolve paths of imported files.",example:"component.loader.absolute('./path/to/some/file');"},parent:{kind:"property",list:!1,type:"Component|null",description:"Returns the parent component, if any.",example:"component.parent;"},registry:{kind:"property",list:!1,type:"Record<string, Component>",description:"Returns all child components and sub-child components.",example:"component.registry;"},relative:{kind:"property",list:!1,type:"string",description:"Returns the source file path relative to the current working directory (cwd).",example:"component.contents;"},source:{kind:"property",list:!1,type:"string",description:"Returns the source file path. This may or may not be the absolute path.",example:"component.source;"},scripts:{kind:"property",list:!0,type:"string",description:"Returns all the collective JavaScript in the ink source file.",example:"component.scripts;"},styles:{kind:"property",list:!0,type:"string",description:"Returns all the collective CSS styles in the ink source file.",example:"component.styles;"},tagname:{kind:"property",list:!1,type:"string",description:"Returns the suggested HTML tag name.",example:"component.tagname;"},type:{kind:"property",list:!1,type:["document","component","template"],description:"Returns type of component. Will transpile depending on the type.",example:"component.type;"}},EventEmitter:{render:{kind:"event",params:{builder:{kind:"property",list:!1,type:"DocumentBuilder"},build:{kind:"property",list:!1,type:"Build"},props:{kind:"property",list:!1,type:"Hash"}},data:{kind:"property",list:!1,type:"string"},description:"Triggers before the document is rendered.",example:`compiler.emitter.on('render', e => {
  const { builder, build, props } = e.params;
  //...
  e.data = 'new html...';
});`},rendered:{kind:"event",params:{builder:{kind:"property",list:!1,type:"DocumentBuilder"},build:{kind:"property",list:!1,type:"Build"},props:{kind:"property",list:!1,type:"Hash"},html:{kind:"property",list:!1,type:"string"}},data:{kind:"property",list:!1,type:"string"},description:"Triggers after the document is rendered.",example:`compiler.emitter.on('rendered', e => {
  const { builder, build, props, html } = e.params;
  //...
  e.data = 'new html...';
});`},build:{kind:"event",params:{builder:{kind:"property",list:!1,type:"DocumentBuilder"}},data:{kind:"property",list:!1,type:"string"},description:"Triggers before the document is built.",example:`compiler.emitter.on('build', e => {
  const { builder } = e.params;
  //...
  e.data = 'new ink source...';
});`},built:{kind:"event",params:{builder:{kind:"property",list:!1,type:"DocumentBuilder"},build:{kind:"property",list:!1,type:"Build"}},data:{kind:"property",list:!1,type:"Build"},description:"Triggers after the document is built.",example:`compiler.emitter.on('built', e => {
  const { builder, build } = e.params;
  //...
  e.data = { ...build };
});`},"build-client":{kind:"event",params:{builder:{kind:"property",list:!1,type:"DocumentBuilder"}},data:{kind:"property",list:!1,type:"string"},description:"Triggers before the client js is rendered.",example:`compiler.emitter.on('build-client', e => {
  const { builder } = e.params;
  //...
  e.data = 'new ink source...';
});`},"built-client":{kind:"event",params:{builder:{kind:"property",list:!1,type:"DocumentBuilder"},build:{kind:"property",list:!1,type:"Build"}},data:{kind:"property",list:!1,type:"string"},description:"Triggers after the client js is rendered.",example:`compiler.emitter.on('built-client', e => {
  const { builder, build } = e.params;
  //...
  e.data = 'new client js...';
});`},"build-markup":{kind:"event",params:{builder:{kind:"property",list:!1,type:"DocumentBuilder"}},data:{kind:"property",list:!1,type:"string"},description:"Triggers before markup is rendered.",example:`compiler.emitter.on('build-markup', e => {
  const { builder } = e.params;
  //...
  e.data = 'new ink source...';
});`},"built-markup":{kind:"event",params:{builder:{kind:"property",list:!1,type:"DocumentBuilder"},build:{kind:"property",list:!1,type:"Build"}},data:{kind:"property",list:!1,type:"string"},description:"Triggers after markup is rendered.",example:`compiler.emitter.on('built-markup', e => {
  const { builder, build } = e.params;
  //...
  e.data = 'new markup...';
});`},"build-server":{kind:"event",params:{builder:{kind:"property",list:!1,type:"DocumentBuilder"}},data:{kind:"property",list:!1,type:"string"},description:"Triggers before the server js is rendered.",example:`compiler.emitter.on('build-server', e => {
  const { builder } = e.params;
  //...
  e.data = 'new ink source...';
});`},"built-server":{kind:"event",params:{builder:{kind:"property",list:!1,type:"DocumentBuilder"},build:{kind:"property",list:!1,type:"Build"}},data:{kind:"property",list:!1,type:"string"},description:"Triggers after the server js is rendered.",example:`compiler.emitter.on('built-server', e => {
  const { builder, build } = e.params;
  //...
  e.data = 'new server js...';
});`},"build-styles":{kind:"event",params:{builder:{kind:"property",list:!1,type:"DocumentBuilder"}},data:{kind:"property",list:!1,type:"string"},description:"Triggers before the css styles are rendered.",example:`compiler.emitter.on('build-styles', e => {
  const { builder } = e.params;
  //...
  e.data = 'new ink source...';
});`},"built-styles":{kind:"event",params:{builder:{kind:"property",list:!1,type:"DocumentBuilder"},build:{kind:"property",list:!1,type:"Build"}},data:{kind:"property",list:!1,type:"string"},description:"Triggers after the css styles is rendered.",example:`compiler.emitter.on('built-styles', e => {
  const { builder, build } = e.params;
  //...
  e.data = 'new css...';
});`},"manifest-load":{kind:"event",params:{manifest:{kind:"property",list:!1,type:"DocumentManifest"},map:{kind:"property",list:!1,type:"Map<string, string>"}},data:{kind:"property",list:!1,type:"Map<string, string>"},description:"Triggers before the manifest is loaded.",example:`compiler.emitter.on('manifest-load', e => {
  const { manifest, map } = e.params;
  //...
  e.data = new Map<string, string>();
});`},"manifest-resolve":{kind:"event",params:{manifest:{kind:"property",list:!1,type:"DocumentManifest"},id:{kind:"property",list:!1,type:"string"}},description:"Triggers before a build ID is resolved.",example:`compiler.emitter.on('manifest-resolve', e => {
  const { manifest, id } = e.params;
  //...
});`},"manifest-resolved":{kind:"event",params:{manifest:{kind:"property",list:!1,type:"DocumentManifest"},id:{kind:"property",list:!1,type:"string"},path:{kind:"property",list:!1,type:"string"}},data:{kind:"property",list:!1,type:"Map<string, string>"},description:"Triggers after a build ID/entry is set.",example:`compiler.emitter.on('manifest-resolved', e => {
  const { manifest, id, path } = e.params;
  //...
});`},"manifest-unresolved":{kind:"event",params:{manifest:{kind:"property",list:!1,type:"DocumentManifest"},id:{kind:"property",list:!1,type:"string"},path:{kind:"property",list:!1,type:"string|undefined"}},data:{kind:"property",list:!1,type:"Map<string, string>"},description:"Triggers after a build ID is deleted.",example:`compiler.emitter.on('manifest-unresolved', e => {
  const { manifest, id, path } = e.params;
  //...
});`}},DocumentManifest:{emitter:{kind:"property",list:!1,type:"EventEmitter",description:"The NodeJS EventEmitter instance being used.",example:`compiler.manifest.emitter.on('render', e => {
  console.log(e.params);
});`},registry:{kind:"property",list:!1,type:"Map<string, string>",description:"The manifest registry used to map build IDs to document entry files.",example:"compiler.manifest.registry.entries();"},builder:{kind:"function",async:!1,args:[{kind:"property",list:!1,name:"id",type:"string"}],returns:{kind:"property",list:!1,type:"DocumentBuilder"},description:"Returns a document builder given the build id.",example:"compiler.manifest.builder('abc123');"},delete:{kind:"function",async:!1,args:[{kind:"property",list:!1,name:"id",type:"string"}],returns:{kind:"property",list:!1,type:"DocumentManifest"},description:"Removes an entry file from the manifest given the build id.",example:"compiler.manifest.delete('abc123');"},entries:{kind:"function",async:!1,args:[],returns:{kind:"property",list:!0,type:"[ string, string ]"},description:"Returns an array of build IDs and entry file paths.",example:"compiler.manifest.entries();"},get:{kind:"function",async:!1,args:[{kind:"property",name:"id",type:"string"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns the entry file path given the build id.",example:"compiler.manifest.get('abc123');"},has:{kind:"function",async:!1,args:[{kind:"property",name:"id",type:"string"}],returns:{kind:"property",list:!1,type:"boolean"},description:"Returns true if the build id exists in the manifest.",example:"compiler.manifest.has('abc123');"},load:{kind:"function",async:!1,args:[{kind:"property",name:"manifest",type:"Record<string, string>"}],returns:{kind:"property",list:!1,type:"DocumentManifest"},description:"Loads an entire manifest object to the registry.",example:"compiler.manifest.load({ abc123: '/path/to/entry.ink' });"},keys:{kind:"function",async:!1,args:[],returns:{kind:"property",list:!0,type:"string"},description:"Returns an array of build IDs.",example:"compiler.manifest.keys();"},set:{kind:"function",async:!1,args:[{kind:"property",name:"id",type:"string"},{kind:"property",name:"path",type:"string"}],returns:{kind:"property",list:!1,type:"DocumentManifest"},description:"Sets an entry file path to the manifest given the build id.",example:"compiler.manifest.set('abc123', '/path/to/entry.ink');"},toJson:{kind:"function",async:!1,args:[],returns:{kind:"property",list:!1,type:"string"},description:"Returns the manifest as a JSON string.",example:"compiler.manifest.toJson();"},values:{kind:"function",async:!1,args:[],returns:{kind:"property",list:!0,type:"string"},description:"Returns an array of entry file paths.",example:"compiler.manifest.values();"}},DocumentTranspiler:{directive:{kind:"function",async:!1,args:[{kind:"property",name:"directive",type:"DirectiveInterface"}],returns:{kind:"property",list:!1,type:"DocumentTranspiler"},description:"Adds a directive that transpiles custom markup tags like if/elif/else, each, try/catch.",example:"compiler.fromSource('./docs/api.ink').transpiler.directive(CustomDirective);"},transpile:{kind:"function",args:[],returns:{kind:"property",list:!1,type:"SourceFile"}},description:"Converts a ink file to server-side JavaScript.",example:"compiler.fromSource('./docs/api.ink').transpiler.transpile();"},DocumentBuilder:{document:{kind:"property",list:!1,type:"Component",description:"Returns a document component with various meta information, used for transpilation.",example:"compiler.fromSource('./docs/api.ink').document.classname; //--> 'Index_abc123'"},emitter:{kind:"property",list:!1,type:"EventEmitter",description:"The NodeJS EventEmitter instance being used.",example:`compiler.fromSource('./docs/api.ink').emitter.on('render', e => {
  console.log(e.params);
});`},extnames:{kind:"property",list:!0,type:"string",description:"Returns the file extensions that are recognized to parse as Ink components.",example:"compiler.fromSource('./docs/api.ink').extnames; //--> [ 'ink' ]"},transpiler:{kind:"property",list:!1,type:"DocumentTranspiler",description:"Returns a transpiler used to convert a ink file to server-side JavaScript.",example:"compiler.fromSource('./docs/api.ink').transpiler.transpile();"},tsconfig:{kind:"property",list:!1,type:"string",description:"Returns the location of the used tsconfig.json.",example:"compiler.fromSource('./docs/api.ink').tsconfig; //--> /path/to/tsconfig.json"},build:{kind:"function",async:!0,args:[],returns:{kind:"property",list:!1,type:"Build"},description:"Generates the server-side component and brings it into the runtime.",example:"compiler.fromSource('./docs/api.ink').build();"},client:{kind:"function",async:!0,args:[],returns:{kind:"property",list:!1,type:"string"},description:"Generates the browser-side JavaScript.",example:"compiler.fromSource('./docs/api.ink').client(); //client js code"},component:{kind:"function",async:!0,args:[],returns:{kind:"property",list:!1,type:"string"},description:"Generates the source file as an independent component.",example:"compiler.fromSource('./docs/my-button.ink').component(); //component js code"},markup:{kind:"function",async:!0,args:[],returns:{kind:"property",list:!1,type:"string"},description:"Generates the html markup.",example:"compiler.fromSource('./docs/api.ink').markup(); //<html>...</html>"},server:{kind:"function",async:!0,args:[],returns:{kind:"property",list:!1,type:"string"},description:"Generates the server-side JavaScript.",example:"compiler.fromSource('./docs/api.ink').markup(); //server js code"},styles:{kind:"function",async:!0,args:[],returns:{kind:"property",list:!1,type:"string"},description:"Generates the css styles.",example:"compiler.fromSource('./docs/api.ink').styles(); //css code"}},ServerDocumentClass:{component:{kind:"property",list:!1,type:"[ string, string ]",description:"Returns the component tag name and class name.",example:"compiler.import('./docs/api.ink').InkDocument.component; //--> [ 'tui-button', 'TuiButton_abc123' ]"},new:{kind:"function",args:[],returns:{kind:"property",list:!1,type:"ServerDocument"},description:"Instantiates the server document class on the server-side used to render the final HTML.",example:"new (compiler.import('./docs/api.ink').InkDocument);"}},ServerDocument:{id:{kind:"function",args:[],returns:{kind:"property",list:!1,type:"string"},description:"Returns a unique document ID used to map the build cache.",example:"compiler.import('./docs/api.ink').document.id(); //--> 'abc123'"},styles:{kind:"function",args:[],returns:{kind:"property",list:!1,type:"string"},description:"Returns the css styles for this document.",example:"compiler.import('./docs/api.ink').document.styles(); //css styles"},template:{template:"function",args:[],returns:{kind:"property",list:!0,type:"Element"},description:"Returns an array of Element children and sub-children.",example:"compiler.import('./docs/api.ink').document.template();"},render:{kind:"function",args:[{kind:"property",name:"props",type:"Record<string, any>"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns the final document HTML markup.",example:"compiler.import('./docs/api.ink').document.render();"}},InkOptions:{"brand?":{kind:"property",list:!1,type:"string",description:"The brand prefixed before the component tag name.",example:"const compiler = ink({ brand: 'ink' });"},"cwd?":{kind:"property",list:!1,type:"string",description:"The project's current working directory (cwd).",example:"const compiler = ink({ cwd: '/path/to/project' });'"},"fs?":{kind:"property",list:!1,type:"FileSystem",description:"The file system being used to read/write files.",example:`import fs from 'fs';

const compiler = ink({ fs });'`},"emitter?":{kind:"property",list:!1,type:"EventEmitter",description:"The NodeJS EventEmitter instance being used.",example:`import emitter from 'events';

const compiler = ink({ emitter });'`},"minify?":{kind:"property",list:!1,type:"boolean",description:"Whether to minify the generated JavaScript code.",example:"const compiler = ink({ minify: true });'"},"tsconfig?":{kind:"property",list:!1,type:"string",description:"The location of the used tsconfig.json.",example:"const compiler = ink({ tsconfig: '/path/to/tsconfig.json' });'"},"extname?":{kind:"property",list:!1,type:"string",description:"The component file extension.",example:"const compiler = ink({ extname: '.ink' });'"}},InkCompiler:{config:{kind:"property",list:!1,type:"Config",description:"The Ink configuration",example:"compiler.config.brand; //--> 'ink'"},fs:{kind:"property",list:!1,type:"FileSystem",description:"The file system being used.",example:"compiler.fs.readFileSync('some/file', 'utf8');"},emitter:{kind:"property",list:!1,type:"EventEmitter",description:"The NodeJS EventEmitter instance being used.",example:`compiler.emitter.on('render', e => {
  console.log(e.params);
});`},manifest:{kind:"property",list:!1,type:"DocumentManifest",description:"The manifest registry used to map build IDs to document entry files.",example:"compiler.manifest.entries();"},component:{kind:"function",args:[],returns:{kind:"property",list:!1,type:"Component"}},fromId:{kind:"function",args:[{kind:"property",list:!1,name:"id",type:"string"}],returns:{kind:"property",list:!1,type:"DocumentBuilder"},description:"Returns a new DocumentBuilder instance given a build ID.",example:"compiler.fromId('abc123').build();"},fromCache:{kind:"function",args:[{kind:"property",list:!1,name:"cacheFile",type:"string"}],returns:{kind:"property",list:!1,type:"Build"},description:"Returns build information from a compiled template.",example:"compiler.fromCache('/path/to/build/abc123.js').document.render();"},fromSource:{kind:"function",args:[{kind:"property",list:!1,name:"sourceFile",type:"string"}],returns:{kind:"property",list:!1,type:"DocumentBuilder"},description:"Returns a new DocumentBuilder instance given a template source file.",example:"compiler.fromSource('./docs/api.ink').build();"},use:{kind:"function",args:[{kind:"property",list:!1,name:"options",type:"Function"}],returns:{kind:"property",list:!1,type:"InkCompiler"},description:"Enables a default build cache strategy.",example:"compiler.use(plugin)"},asset:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"assetFile",type:"string"}],returns:{kind:"property",list:!1,type:"Asset"},description:"Returns a compiled build asset, given an asset file name.",example:"compiler.asset('abc123.css'); //--> { type: 'text/css', content: '...' }"},client:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"sourceFile",type:"string"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns a compiled client script, given the the template source file.",example:"compiler.client('./docs/api.ink'); //client script"},import:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"sourceFile",type:"string"}],returns:{kind:"property",list:!1,type:"Build"},description:"Returns build information, given the the template source file.",example:"compiler.import('/path/to/build/abc123.js').document.render();"},markup:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"sourceFile",type:"string"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns a compiled markup, given the the template source file.",example:"compiler.markup('./docs/api.ink'); //--> <html>...</html>"},render:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"sourceFile",type:"string"},{kind:"property",list:!1,name:"props",type:"Hash"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns the final HTML markup, given the the template source file.",example:`compiler.render('./docs/api.ink', {
  title: 'API Documentation'
});`},server:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"sourceFile",type:"string"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns compiled server code, given the the template source file.",example:"compiler.server('./docs/api.ink'); // server script"},styles:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"sourceFile",type:"string"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns compiled css styles, given the the template source file.",example:"compiler.styles('./docs/api.ink'); //css styles"}},InkComponent:{attr:{kind:"property",list:!1,type:"Hash",description:"Returns only the valid HTML tag attributes (string and true).",example:"this.attr; //--> { disabled: true, type: 'button' }"},props:{kind:"property",list:!1,type:"Hash",description:"Returns all the attributes assigned to the component.",example:"this.props; //--> { disabled: true, count: 4, click: handleClick }"},metadata:{kind:"property",list:!1,type:"[ string, string ]",description:"Returns the tag and class name of the component.",example:"this.metadata; //--> [ 'fancy-button', 'FancyButton_abc123' ]"},styles:{kind:"function",args:[],returns:{kind:"property",list:!1,type:"string"},description:"Returns the css styles used in the component.",example:"this.styles(); //css styles"},template:{kind:"function",args:[],returns:{kind:"property",list:!1,type:"Node[]"},description:"Returns a function that returns an array of elements, text nodes and web components",example:"this.template(); //--> () => [ Element, Text, Element, ... ]"},render:{kind:"function",args:[],returns:{kind:"property",list:!1,type:"string"},description:"Renders the children and returns the final HTML markup.",example:"this.render(); //--> '<p>...</p>'"}},ClientRegistry:{elements:{kind:"property",list:!1,type:"Map<Element, InkElement>",description:"Returns a map of elements used in the DOM.",example:"InkAPI.ClientRegistry.elements.get(component);"},createComponent:{kind:"function",args:[{kind:"property",list:!1,name:"tagname",type:"string"},{kind:"property",list:!1,name:"component",type:"InkComponent"},{kind:"property",list:!1,name:"props",type:"Hash"},{kind:"property",list:!1,name:"children>",type:"Node[]"}],returns:{kind:"property",list:!1,type:"InkElement"},description:"Creates a InkElement from a web component class.",example:"InkAPI.ClientRegistry.createComponent('fancy-button', InkComponent, { title: 'Hello' }, children);"},createElement:{kind:"function",args:[{kind:"property",list:!1,name:"tagname",type:"string"},{kind:"property",list:!1,name:"props",type:"Hash"},{kind:"property",list:!1,name:"children>",type:"Node[]"}],returns:{kind:"property",list:!1,type:"InkElement"},description:"Creates a InkElement from a string tag name.",example:"InkAPI.ClientRegistry.createElement('a', { href: '/' }, children);"},createText:{kind:"function",args:[{kind:"property",list:!1,name:"text",type:"string"}],returns:{kind:"property",list:!1,type:"TextNode"},description:"Creates a TextNode from a raw string.",example:"InkAPI.ClientRegistry.createText('foo');"},get:{kind:"function",args:[{kind:"property",list:!1,name:"element",type:"Element"}],returns:{kind:"property",list:!1,type:"InkElement"},description:"Returns a InkElement given a DOM element.",example:"InkAPI.ClientRegistry.get(element)"},has:{kind:"function",args:[{kind:"property",list:!1,name:"element",type:"Element"}],returns:{kind:"property",list:!1,type:"boolean"},description:"Returns true if the given element exists in the registry",example:"InkAPI.ClientRegistry.has(element)"},map:{kind:"function",args:[{kind:"property",list:!1,name:"callback",type:"Function"}],returns:{kind:"property",list:!0,type:"T"},description:"Like array map for registry returns an array of whatever the callback returns.",example:"InkAPI.ClientRegistry.map((ink, element) => [ink, element]);"},register:{kind:"function",args:[{kind:"property",list:!1,name:"element",type:"InkElement"},{kind:"property",list:!1,name:"props",type:"Hash"}],returns:{kind:"property",list:!1,type:"InkElement"},description:"Registers a InkElement to the registry.",example:"InkAPI.ClientRegistry.register(element, { foo: 'bar' });"}},InkElement:{attributes:{kind:"property",list:!1,type:"Hash",description:"Returns all the attributes assigned to the element.",example:"element.attributes; //--> { href: '/', title: 'Home' }"},element:{kind:"property",list:!1,type:"Element",description:"Returns the DOM element.",example:"element.element; //--> <a href='/' title='Home'>"},hasAttribute:{kind:"function",args:[{kind:"property",list:!1,name:"name",type:"string"}],returns:{kind:"property",list:!1,type:"boolean"},description:"Returns true if the element has the given attribute.",example:"element.hasAttribute('href');"},getAttribute:{kind:"function",args:[{kind:"property",list:!1,name:"name",type:"string"}],returns:{kind:"property",list:!1,type:"unknown"},description:"Returns the value of the given attribute.",example:"element.getAttribute('href');"},removeAttribute:{kind:"function",args:[{kind:"property",list:!1,name:"name",type:"string"}],returns:{kind:"property",list:!1,type:"InkElement"},description:"Removes the given attribute from the element.",example:"element.removeAttribute('href');"},setAttribute:{kind:"function",args:[{kind:"property",list:!1,name:"name",type:"string"},{kind:"property",list:!1,name:"value",type:"string"}],returns:{kind:"property",list:!1,type:"InkElement"},description:"Sets the given attribute to the element.",example:"element.setAttribute('href', '/');"},setAttributes:{kind:"function",args:[{kind:"property",list:!1,name:"attributes",type:"Hash"}],returns:{kind:"property",list:!1,type:"InkElement"},description:"Sets multiple attributes to the element.",example:"element.setAttributes({ href: '/', title: 'Home' });"}},InkEmitter:{emit:{kind:"function",args:[{kind:"property",list:!1,name:"event",type:"string"},{kind:"property",list:!1,name:"target",type:"T"}],returns:{kind:"property",list:!1,type:"InkEmitter"},description:"Emits an event with optional parameters.",example:"emitter.emit('click', { x: 10, y: 20 });"},unbind:{kind:"function",args:[{kind:"property",list:!1,name:"event",type:"string"},{kind:"property",list:!1,name:"listener",type:"Function"}],returns:{kind:"property",list:!1,type:"InkEmitter"},description:"Removes an event listener.",example:"emitter.unbind('click', handleClick);"},on:{kind:"function",args:[{kind:"property",list:!1,name:"event",type:"string"},{kind:"property",list:!1,name:"listener",type:"Function"}],returns:{kind:"property",list:!1,type:"InkEmitter"},description:"Adds an event listener.",example:"emitter.on('click', handleClick);"},once:{kind:"function",args:[{kind:"property",list:!1,name:"event",type:"string"},{kind:"property",list:!1,name:"listener",type:"Function"}],returns:{kind:"property",list:!1,type:"InkEmitter"},description:"Adds an event listener that only fires once.",example:"emitter.once('click', handleClick);"}},InkAPI:{BUILD_ID:{kind:"property",list:!1,type:"string",description:"The unique build ID used to map the build cache.",example:"InkAPI.BUILD_ID; //--> 'abc123'"},InkComponent:{kind:"property",list:!1,type:"InkComponent",description:"The Ink component class used to create custom elements.",example:"new InkAPI.InkComponent();"},InkElement:{kind:"property",list:!1,type:"InkElement",description:"The Ink element class used to create custom elements.",example:`new InkAPI.InkElement(
  document.createElement('a'),
  { href: '/' }
); ]`},InkEmitter:{kind:"property",list:!1,type:"InkEmitter",description:"The Ink emitter class used to create custom events.",example:"new InkAPI.InkEmitter();"},InkException:{kind:"property",list:!1,type:"InkException",description:"The Ink exception class used to create custom errors.",example:"throw InkAPI.InkException.for('error message');"},ClientRegistry:{kind:"property",list:!1,type:"ClientRegistry",description:"The Ink registry class used to store custom elements.",example:"new InkAPI.ClientRegistry.createElement('a', { href: '/' });"},children:{kind:"function",args:[{kind:"property",list:!1,name:"component",type:"InkComponent"}],returns:{kind:"property",list:!0,type:"Node"},description:"Returns an array of child nodes.",example:"InkAPI.children(component); //--> [ Element, Text, Element, ... ]"},components:{kind:"property",list:!1,type:"Record<string, InkComponent>",description:"Returns an object of Ink components classes used in the DOM.",example:"new InkAPI.components['fancy-button']; //--> InkComponent"},data:{kind:"property",list:!1,type:"InkDataMap",description:"The Ink data map used to bring server side data to the client.",example:"InkAPI.data.get('props');"},emitter:{kind:"property",list:!1,type:"InkEmitter",description:"The Ink emitter class used to create custom events.",example:"InkAPI.emitter.on('click', () => {});"},props:{kind:"function",args:[{kind:"property",list:!1,name:"component",type:"InkComponent"}],returns:{kind:"property",list:!0,type:"Hash"},description:"Returns an object of component attributes",example:"InkAPI.props(component); //--> { foo: 'bar', count: 4 }"},signal:{kind:"function",args:[{kind:"property",list:!1,name:"component",type:"InkComponent"}],returns:{kind:"property",list:!1,type:"Signal"},description:"Returns a signal object used to re-render components whenever its value changes",example:"const count = InkAPI.signal(1, component)"}},"Render Methods":{asset:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"assetFile",type:"string"}],returns:{kind:"property",list:!1,type:"Asset"},description:"Returns a compiled build asset, given an asset file name.",example:"await compiler.asset('abc123.css'); //--> { type: 'text/css', content: '...' }"},client:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"sourceFile",type:"string"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns a compiled client script, given the the template source file.",example:"await compiler.client('./docs/api.ink'); //client script"},markup:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"sourceFile",type:"string"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns a compiled markup, given the the template source file.",example:"await compiler.markup('./docs/api.ink'); //--> <html>...</html>"},render:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"sourceFile",type:"string"},{kind:"property",list:!1,name:"props",type:"Hash"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns the final HTML markup, given the the template source file.",example:`await compiler.render('./docs/api.ink', {
  title: 'API Documentation'
});`},server:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"sourceFile",type:"string"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns compiled server code, given the the template source file.",example:"await compiler.server('./docs/api.ink'); // server script"},styles:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"sourceFile",type:"string"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns compiled css styles, given the the template source file.",example:"await compiler.styles('./docs/api.ink'); //css styles"}},DeveloperOptions:{"cwd?":{kind:"property",list:!1,type:"string",description:"The current working directory",example:"const { refresh, router } = dev({ cwd: process.cwd() })"},"emitter?":{kind:"property",list:!1,type:"EventEmitter",description:"The NodeJS EventEmitter instance being used.",example:`import emitter from 'events';

const { refresh, router } = dev({ emitter });'`},"include?":{kind:"property",list:!0,type:"string",description:"An array of extension names to watch for",example:"const { refresh, router } = dev({ include: [ '.js', '.ts', '.ink', '.ink' ] });'"},"ignore?":{kind:"property",list:!0,type:"(string|RegExp)",description:"An array of extension names to ignore",example:"const { refresh, router } = dev({ ignore: [ '*.test.*' ] });'"},"route?":{kind:"property",list:!1,type:"string",description:"The route path to use for the client watcher",example:"const { refresh, router } = dev({ route: '/__ink_dev__' })"},"tsconfig?":{kind:"property",list:!1,type:"string",description:"The path to the tsconfig.json file",example:"const { refresh, router } = dev({ tsconfig: '/path/to/tsconfig.json' })"},"extname?":{kind:"property",list:!1,type:"string",description:"the component file extension",example:"const { refresh, router } = dev({ extname: '.ink' })"}},RefreshServer:{cwd:{kind:"property",list:!1,type:"string",description:"The current working directory",example:"refresh.cwd"},emitter:{kind:"property",list:!1,type:"EventEmitter",description:"The NodeJS EventEmitter instance being used.",example:`refresh.emitter.on('render', e => {
  console.log(e.params);
});`},sync:{kind:"function",args:[{kind:"property",name:"builder",list:!1,type:"DocumentBuilder"}],returns:{kind:"property",list:!1,type:"void"},description:"Registers a document builder to a client watcher list",example:`refresh.emitter.on('render', e => {
  console.log(e.params);
});`},close:{kind:"function",args:[],returns:{kind:"property",list:!1,type:"RefreshServer"},description:"Closes the server and stops the watchers.",example:"refresh.close();"},refresh:{kind:"function",args:[{kind:"property",list:!1,name:"filePath",type:"string"}],returns:{kind:"property",list:!1,type:"Promise<RefreshServer>"},description:"Whenever a file is changed this will be called to instruct each client watcher how to update their document.",example:"await refresh.refresh('/some/file.ink');"},wait:{kind:"function",args:[{kind:"property",list:!1,name:"req",type:"Request"},{kind:"property",list:!1,name:"res",type:"Response"}],returns:{kind:"property",list:!1,type:"RefreshServer"},description:"Opens a connection to the server via SSE and waits for changes.",example:"refresh.wait(req, res);"},watch:{kind:"function",args:[],returns:{kind:"property",list:!1,type:"RefreshServer"},description:"Starts the server that watches for file changes.",example:"refresh.watch();"}},"Developer Tools":{refresh:{kind:"property",list:!1,type:"RefreshServer",description:"The refresh server instance used to update clients.",example:`const { refresh } = dev();
refresh.sync(builder);`},router:{kind:"property",list:!1,type:"Function",description:"HTTP middleware to handle developer tool routes like '/dev.js' and '/__ink_dev__'.",example:`const { router } = dev();
app.use(router);`}},"Express Developer Tools":{refresh:{kind:"property",list:!1,type:"RefreshServer",description:"The refresh server instance used to update clients.",example:`const { refresh } = dev();
refresh.sync(builder);`},router:{kind:"property",list:!1,type:"Function",description:"Express middleware to handle developer tool routes like '/dev.js' and '/__ink_dev__'.",example:`const { router } = dev();
app.use(router);`},view:{kind:"property",list:!1,type:"Function",description:"Middleware used to setup an express view engine.",example:`const { view } = dev();
app.engine('ink', view(compiler));`}}};var ue=class extends ss.default{static id="f20d8dbea11e7ab3e760";static tagname="ui";static classname="Ui_f20d8dbea11e7ab3e760";styles(){return""}template(){(0,Q.classlist)().add("block","my-40","scroll-hidden","curved","shadow-0-0-10-0-0-0-5");let{start:t="InkCompiler"}=(0,Q.props)(),r=(0,Q.signal)([t]),a=(0,Q.signal)(t),n=d=>{let h=d.target.getAttribute("data-type");r.value=[...r.value,h],a.value=h},i=()=>{r.value=r.value.slice(0,r.value.length-1),a.value=r.value[r.value.length-1]};return()=>[l.default.createText(`
`,!1),l.default.createElement("h3",{class:"tx-secondary bg-t-2 tx-16 m-0 p-10"},[l.default.createText(`
  `,!1),...r.value.length>1?[l.default.createText(`
    `,!1),l.default.createElement("a",{class:"tx-t-1 cursor-pointer",click:i},[l.default.createText(`
      `,!1),l.default.createElement("i",{class:"fas fa-arrow-left"},[]).element,l.default.createText(`
    `,!1)]).element,l.default.createText(`
  `,!1)]:[],l.default.createText(`
  API: `,!1),...this._toNodeList(a.value),l.default.createText(`
`,!1)]).element,l.default.createText(`
`,!1),l.default.createElement("div",{class:"bg-t-0 p-10"},[l.default.createText(`
  `,!1),l.default.createElement("div",{class:"relative mb-20 scroll-auto"},[l.default.createText(`
    `,!1),l.default.createElement("table",{class:"w-full b-collapse"},[l.default.createText(`
      `,!1),l.default.createElement("thead",{},[l.default.createText(`
        `,!1),l.default.createElement("th",{class:"p-10 tx-left tx-upper"},[l.default.createText("Property",!1)]).element,l.default.createText(`
        `,!1),...a.value.includes("Emitter")?[]:[l.default.createText(`
          `,!1),l.default.createElement("th",{class:"p-10 tx-left tx-upper"},[l.default.createText("Returns",!1)]).element,l.default.createText(`
        `,!1)],l.default.createText(`
        `,!1),l.default.createElement("th",{class:"p-10 tx-left tx-upper"},[l.default.createText("Description",!1)]).element,l.default.createText(`
      `,!1)]).element,l.default.createText(`
      `,!1),l.default.createElement("tbody",{},[l.default.createText(`
        `,!1),...Object.entries(Oe[a.value]).map(([d,h])=>[l.default.createText(`
          `,!1),l.default.createElement("tr",{},[l.default.createText(`
            `,!1),...h.kind==="property"?[l.default.createText(`
              `,!1),l.default.createElement("td",{class:"tx-primary tx-top tx-nowrap b-solid b-t-2 bx-0 bb-0 bt-1 p-10"},[l.default.createText(`
                `,!1),...this._toNodeList(d),l.default.createText(`
              `,!1)]).element,l.default.createText(`
              `,!1),...Oe[h.type]?[l.default.createText(`
                `,!1),l.default.createElement("td",{class:"tx-top tx-nowrap b-solid b-t-2 bx-0 bb-0 bt-1 p-10"},[l.default.createText(`
                  `,!1),l.default.createElement("a",{class:"tx-underline tx-info cursor-pointer","data-type":h.type,click:n},[l.default.createText(`
                    `,!1),...this._toNodeList(h.type),l.default.createText(`
                  `,!1)]).element,...this._toNodeList(h.list?"[]":""),l.default.createText(`
                `,!1)]).element,l.default.createText(`
              `,!1)]:[,l.default.createText(`
                `,!1),l.default.createElement("td",{class:"tx-top tx-nowrap b-solid b-t-2 bx-0 bb-0 bt-1 p-10"},[l.default.createText(`
                  `,!1),...this._toNodeList(h.type),...this._toNodeList(h.list?"[]":""),l.default.createText(`
                `,!1)]).element,l.default.createText(`
              `,!1)],l.default.createText(`
            `,!1)]:h.kind==="function"?[,l.default.createText(`
              `,!1),l.default.createElement("td",{class:"tx-primary tx-top b-solid b-t-2 bx-0 bb-0 bt-1 p-10",nowrap:!0},[l.default.createText(`
                `,!1),...this._toNodeList(d),l.default.createText(`(
                  `,!1),...Object.entries(h.args).map(([x,E])=>[l.default.createText(`
                    `,!1),...x>0?[l.default.createText(", ",!1)]:[],l.default.createText(`
                    `,!1),...this._toNodeList(E.name),l.default.createText(`: 
                    `,!1),...Oe[E.type]?[l.default.createText(`
                      `,!1),l.default.createElement("a",{class:"tx-underline tx-info cursor-pointer","data-type":E.type,click:n},[l.default.createText(`
                        `,!1),...this._toNodeList(E.type),l.default.createText(`
                      `,!1)]).element,...this._toNodeList(E.list?"[]":""),l.default.createText(`
                    `,!1)]:[,l.default.createText(`
                      `,!1),...this._toNodeList(E.type),...this._toNodeList(E.list?"[]":""),l.default.createText(`
                    `,!1)],l.default.createText(`
                  `,!1)]).flat(),l.default.createText(`
                )
              `,!1)]).element,l.default.createText(`
              `,!1),...Oe[h.returns.type]?[l.default.createText(`
                `,!1),l.default.createElement("td",{class:"tx-top tx-nowrap b-solid b-t-2 bx-0 bb-0 bt-1 p-10"},[l.default.createText(`
                  `,!1),l.default.createElement("a",{class:"tx-underline tx-info cursor-pointer","data-type":h.returns.type,click:n},[l.default.createText(`
                    `,!1),...this._toNodeList(h.returns.type),l.default.createText(`
                  `,!1)]).element,...this._toNodeList(h.returns.list?"[]":""),l.default.createText(`
                `,!1)]).element,l.default.createText(`
              `,!1)]:[,l.default.createText(`
                `,!1),l.default.createElement("td",{class:"tx-top tx-nowrap b-solid b-t-2 bx-0 bb-0 bt-1 p-10"},[l.default.createText(`
                  `,!1),...this._toNodeList(h.returns.type),...this._toNodeList(h.returns.list?"[]":""),l.default.createText(`
                `,!1)]).element,l.default.createText(`
              `,!1)],l.default.createText(`
            `,!1)]:h.kind==="event"?[,l.default.createText(`
              `,!1),l.default.createElement("td",{class:"tx-primary tx-top b-solid b-t-2 bx-0 bb-0 bt-1 p-10",nowrap:!0},[l.default.createText(`
                `,!1),...this._toNodeList(`on('${d}', (event: Event) => void)`),l.default.createText(`
              `,!1)]).element,l.default.createText(`
            `,!1)]:[],l.default.createText(`
            `,!1),l.default.createElement("td",{class:"tx-top tx-lh-24 b-solid b-t-2 bx-0 bb-0 bt-1 p-10"},[l.default.createText(`
              `,!1),...h.description?[l.default.createText(`
                `,!1),l.default.createElement("p",{class:"pb-10"},[...this._toNodeList(h.description)]).element,l.default.createText(`
                `,!1),...h.example?[l.default.createText(`
                  `,!1),l.default.createElement("h5",{},[l.default.createText("Example",!1)]).element,l.default.createText(`
                  `,!1),l.default.createComponent("api-ide-code",U,{lang:"js"},[...this._toNodeList(h.example)]).element,l.default.createText(` 
                `,!1)]:[],l.default.createText(`
              `,!1)]:[],l.default.createText(`
            `,!1)]).element,l.default.createText(`
          `,!1)]).element,l.default.createText(`
        `,!1)]).flat(),l.default.createText(`
      `,!1)]).element,l.default.createText(`
    `,!1)]).element,l.default.createText(`
  `,!1)]).element,l.default.createText(`
`,!1)]).element]}};var Pe=v(R()),as=v(F()),dt=v(G()),me=class extends as.default{static id="d33baebe90a860722627";static tagname="head";static classname="Head_d33baebe90a860722627";styles(){return""}template(){return(0,dt.classlist)().add("absolute","top-0","right-0","left-170","h-45","bg-t-0","z-1"),()=>[Pe.default.createText(`
`,!1),Pe.default.createElement("header",{class:"w-full h-full scroll-x-auto"},[Pe.default.createText(`
  `,!1),...this._toNodeList((0,dt.children)()),Pe.default.createText(`
`,!1)]).element]}};var Fe=v(R()),ns=v(F()),ut=v(G()),fe=class extends ns.default{static id="f1a0a3c183816d2e79ee";static tagname="left";static classname="Left_f1a0a3c183816d2e79ee";styles(){return""}template(){return(0,ut.classlist)().add("absolute","top-0","bottom-0","left-0","w-170","bg-t-3","b-solid","b-t-2","by-0","bl-0","br-1","z-2"),()=>[Fe.default.createText(`
`,!1),Fe.default.createElement("aside",{class:"w-full h-full scroll-auto"},[Fe.default.createText(`
  `,!1),...this._toNodeList((0,ut.children)()),Fe.default.createText(`
`,!1)]).element]}};var je=v(R()),is=v(F()),mt=v(G()),he=class extends is.default{static id="324e43ee80336c221b0e";static tagname="main";static classname="Main_324e43ee80336c221b0e";styles(){return""}template(){return(0,mt.classlist)().add("absolute","top-45","right-0","left-170","bottom-0","bg-black","b-solid","b-t-2","bx-0","bb-0","bt-1"),()=>[je.default.createText(`
`,!1),je.default.createElement("main",{class:"w-full h-full scroll-auto"},[je.default.createText(`
  `,!1),...this._toNodeList((0,mt.children)()),je.default.createText(`
`,!1)]).element]}};var N=v(R()),ls=v(F()),ft=v(G()),ge=class extends ls.default{static id="d640748373b32ef31882";static tagname="app";static classname="App_d640748373b32ef31882";styles(){return""}template(){let{title:t,height:r}=(0,ft.props)(),a=r?`height:${r}px`:"";return()=>[N.default.createText(`
`,!1),N.default.createElement("div",{class:"curved scroll-hidden shadow-0-0-10-0-0-0-5"},[N.default.createText(`
  `,!1),N.default.createElement("div",{class:"relative flex flex-center-y gap-10 p-10 bg-t-1 tx-c-999999 tx-16"},[N.default.createText(`
    `,!1),N.default.createElement("span",{class:"bg-h-999999 pill h-10 w-10"},[]).element,N.default.createText(`
    `,!1),N.default.createElement("span",{class:"bg-h-999999 pill h-10 w-10"},[]).element,N.default.createText(`
    `,!1),N.default.createElement("span",{class:"bg-h-999999 pill h-10 w-10"},[]).element,N.default.createText(`
    `,!1),N.default.createElement("span",{class:"flex flex-center h-full w-full absolute top-0 left-0"},[N.default.createText(`
      `,!1),...this._toNodeList(t),N.default.createText(`
    `,!1)]).element,N.default.createText(`
  `,!1)]).element,N.default.createText(`
  `,!1),N.default.createElement("div",{class:"bg-black tx-t-1 relative",style:a},[...this._toNodeList((0,ft.children)())]).element,N.default.createText(`
`,!1)]).element]}};var q=v(R()),os=v(F());var k=function(s,...t){let r=ir(s);for(let a=0;a<t.length;a++)r=r.replace("%s",String(t[a]));return r},ir=function(s){return s};var ye=class extends os.default{static id="ac78a9f3111e4c80978c";static tagname="translate";static classname="Translate_ac78a9f3111e4c80978c";styles(){return""}template(){let{trim:t=!1,p:r=!1,li:a=!1,div:n=!1}=this.props,i=this.originalChildren,d=[],h=[];for(let A of i)typeof A=="string"?d.push(A):A instanceof Node&&A.textContent?d.push(A.textContent):(d.push("%s"),h.push(A));let x=d.join("");t&&(x=x.replace(/\s+/," ").trim());let E=ir(x).split("%s"),T=[];for(let A=0;A<E.length;A++)T.push(document.createTextNode(E[A])),h[A]&&T.push(h[A]);return()=>[q.default.createText(`
    `,!1),...r?[q.default.createText(`
      `,!1),q.default.createElement("p",{},[...this._toNodeList(T)]).element,q.default.createText(`
    `,!1)]:a?[,q.default.createText(`
      `,!1),q.default.createElement("li",{},[...this._toNodeList(T)]).element,q.default.createText(`
    `,!1)]:n?[,q.default.createText(`
      `,!1),q.default.createElement("div",{},[...this._toNodeList(T)]).element,q.default.createText(`
    `,!1)]:[,q.default.createText(`
      `,!1),...this._toNodeList(T),q.default.createText(`
    `,!1)]]}};var ht=v(G());var yt=class s extends cs.default{static sync(){return new s().sync()}template(){let t="/docs/component-strategy.html",r=k("Component Strategy - Ink reactive web component template engine."),a=k("Learn more about web components and how they work with Ink."),n=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[e.default.createText(`
`,!1),e.default.createElement("html",{},[e.default.createText(`
  `,!1),e.default.createElement("head",{},[e.default.createText(`
  `,!1),e.default.createElement("meta",{charset:"utf-8"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.default.createText(`
  `,!1),e.default.createElement("title",{},[...this._toNodeList(r)]),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"description",content:a}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:title",content:r}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:description",content:a}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:type",content:"website"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:card",content:"summary"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:site",content:"@stackpress"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:title",content:r}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:description",content:a}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/client/${(0,ht.env)("BUILD_ID")}.css`}),e.default.createElement("script",{"data-template":!0,type:"text/json"},[e.default.createText("__TEMPLATE_DATA__",!0)]),e.default.createText(`
  `,!1),e.default.createElement("script",{src:`/ink/client/${(0,ht.env)("BUILD_ID")}.js`}),e.default.createText(`
  `,!1),...(0,ht.env)("PUBLIC_ENV")==="development"?[e.default.createText(`
    `,!1),e.default.createElement("script",{src:"/dev.js"}),e.default.createText(`
  `,!1)]:[],e.default.createText(`
`,!1)]),e.default.createText(`
  `,!1),e.default.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},[e.default.createText(`
    `,!1),e.default.createElement("panel-layout",{},[e.default.createText(`
      `,!1),e.default.createElement("header",{},[e.default.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},[e.default.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.default.createText(`
    `,!1),e.default.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:n},[]),e.default.createText(`
    `,!1),e.default.createElement("div",{class:"flex-grow"},[]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{href:"/ink"},[e.default.createText(`
      `,!1),e.default.createElement("img",{alt:"Ink Logo",class:"h-26 mr-10",src:"/ink/ink-icon.png"}),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),e.default.createElement("nav",{class:"flex flex-center-y"},[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"tx-primary",href:"/ink/docs/index.html"},[e.default.createText("Docs",!1)]),e.default.createText(`
    `,!1),e.default.createElement("a",{class:"tx-t-1 tx-5xl ml-10",href:"https://github.com/stackpress/ink",target:"_blank"},[e.default.createText(`
      `,!1),e.default.createElement("i",{class:"fab fa-github"},[]),e.default.createText(`
    `,!1)]),e.default.createText(`
    `,!1),e.default.createElement("a",{class:"bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center",href:"https://www.npmjs.com/package/@stackpress/ink",target:"_blank"},[e.default.createText(`
      `,!1),e.default.createElement("i",{class:"fab fa-npm tx-white"},[]),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]),e.default.createText(`
`,!1)])]),e.default.createText(`
      `,!1),e.default.createElement("aside",{left:!0},[e.default.createElement("header",{class:"flex flex-center-y bg-t-2 py-15 pr-5 pl-10"},[e.default.createText(`
  `,!1),e.default.createElement("a",{href:"/ink"},[e.default.createText(`
    `,!1),e.default.createElement("img",{class:"h-26 mr-10",src:"/ink/ink-icon.png",alt:"Ink Logo"}),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),e.default.createElement("h3",{class:"flex-grow m-0 tx-upper"},[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"tx-primary",href:"/ink"},[e.default.createText("Ink",!1)]),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),e.default.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:n},[]),e.default.createText(`
`,!1)]),e.default.createText(`
`,!1),e.default.createElement("nav",{class:"bg-t-1 scroll-auto h-calc-full-60"},[e.default.createText(`
  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(k("Introduction")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/index.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(k("Features")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(k("Usage")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(k("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
`,!1)])]),e.default.createText(`
      `,!1),e.default.createElement("aside",{right:!0},[e.default.createText(`
        `,!1),e.default.createElement("menu",{class:"m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto"},[e.default.createText(`
          `,!1),e.default.createElement("h6",{class:"tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper"},[e.default.createText(`
            `,!1),...this._toNodeList(k("On this page")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("nav",{class:"tx-14 tx-lh-32"},[e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#document"},[...this._toNodeList(k("Document"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#template"},[...this._toNodeList(k("Template"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#component"},[...this._toNodeList(k("Component"))]),e.default.createText(`
            `,!1),e.default.createElement("nav",{class:"pl-20"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-t-1",href:"#strat-1"},[...this._toNodeList(k("Strategy 1"))]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-t-1",href:"#strat-2"},[...this._toNodeList(k("Strategy 2"))]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-t-1",href:"#strat-3"},[...this._toNodeList(k("Strategy 3"))]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-t-1",href:"#strat-4"},[...this._toNodeList(k("Strategy 4"))]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#fouc"},[...this._toNodeList(k("FOUC"))]),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
      `,!1),e.default.createElement("main",{},[e.default.createText(`
        `,!1),e.default.createElement("api-docs",{},[e.default.createText(`
          `,!1),e.default.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},[e.default.createText(`
            `,!1),...this._toNodeList(k("Component Strategy")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            There are three types of components in Ink: Document, 
            Template, and Component. Each type of component has a 
            different strategy for rendering and updating the DOM. The 
            Document component is the root component of the application 
            and is responsible for rendering the entire application. The 
            Template component is a reusable component that can be used 
            in multiple places in the application. The Component component 
            is a custom component that can be used to create complex UI 
            elements.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"document"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(k("Document")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            A document denoted by files with the 
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText(".ink",!1)]),e.default.createText(` extension, is the root of
            each page view that should include the document markup 
            starting with `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<html>")]),e.default.createText(`. While 
            it looks like another Ink component, there are some key 
            differences in how it is used.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ul",{},[e.default.createText(`
            `,!1),e.default.createElement("li",{},[e.default.createText(`
              `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
                A document logic (`,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<script>")]),e.default.createText(`)
                is executed on the client side but is not a 
                `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("InkComponent",!1)]),e.default.createText(`, which means 
                it cannot be re-rendered and does not have access to 
                `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("this",!1)]),e.default.createText(` context.
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{},[e.default.createText(`
              `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
                A document `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("props()")]),e.default.createText(` are the 
                server props passed down to the client.
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{},[e.default.createText(`
              `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
                A document does not have access to NodeJS functionality. So 
                things like `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("fs",!1)]),e.default.createText(` are not available.
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("element-alert",{curved:!0,info:!0,class:"py-20 tx-lh-24"},[e.default.createText(`
            `,!1),e.default.createElement("element-icon",{name:"info-circle"}),e.default.createText(`
            `,!1),e.default.createElement("strong",{},[e.default.createText("Recommendation:",!1)]),e.default.createText(` You should do server related
            logic on the server framework and pass the neccesary data 
            to the client.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:250,title:"Passing Server Props",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("app-head",{},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"server",selector:"#server-index-ts"},[e.default.createText(`
                  src/index.ts
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"server",selector:"#server-page-ink"},[e.default.createText(`
                  src/page.ink
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-left",{},[e.default.createText(`
              `,!1),e.default.createElement("h5",{class:"p-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"chevron-down"}),e.default.createText(`
                `,!1),e.default.createElement("span",{},[e.default.createText("src",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"server",selector:"#server-index-ts"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                index.ts
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"server",selector:"#server-page-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                page.ink
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-main",{},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"server-index-ts",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                import http from 'http';
                import ink from '@stackpress/ink/compiler';

                const compiler = ink({ cwd: __dirname });
                const server = http.createServer(async (req, res) => {
                  //pass server props to document
                  res.end(await compiler.render('./index.ink', {
                    title: 'Hello World'
                  }));
                });
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"server-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <script>
                  import { props } from '@stackpress/ink';
                  //from the server
                  const { title } = props();
                <\/script>
                <html>
                  <body>
                    <h1 class="title">{title}</h1>
                  </body>
                </html>
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"template"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(k("Template")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            A template is resuable partial markup that can be imported by 
            a component, document or another template. A template is 
            not is not a `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("InkComponent",!1)]),e.default.createText(`, but 
            rather adds its markup to the parent component's final markup.
            You will not see a template in the DOM, but rather the
            markup it contains.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            For example, consider a document that contains the following 
            markup.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{trim:!0,detab:12},[...this._toNodeList(`
            <script>
              const title = 'Hello World';
            <\/script>
            <html>
              <head>
                <meta charset="utf-8" />
                <title>{title}</title>
              </head>
              <body>
                <h1>{title}</h1>
              </body>
            </html>
          `)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can create a template for the head of your
            document and then import it. This allows you to
            reuse the head markup in multiple documents.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:250,title:"Using Templates",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("app-head",{},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"template",selector:"#template-page-ink"},[e.default.createText(`
                  src/page.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"template",selector:"#template-head-ink"},[e.default.createText(`
                  src/head.ink
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-left",{},[e.default.createText(`
              `,!1),e.default.createElement("h5",{class:"p-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"chevron-down"}),e.default.createText(`
                `,!1),e.default.createElement("span",{},[e.default.createText("src",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"template",selector:"#template-page-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                page.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"template",selector:"#template-head-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                head.ink
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-main",{},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"template-page-ink",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <link rel="import" type="template" href="./head.ink" name="html-head" />
                <script>
                  const title = 'Hello World';
                <\/script>
                <html>
                  <html-head />
                  <body>
                    <h1>{title}</h1>
                  </body>
                </html>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"template-head-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <head>
                  <meta charset="utf-8" />
                  <title>{title}</title>
                </head>
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("element-alert",{curved:!0,info:!0,class:"py-20 tx-lh-24"},[e.default.createText(`
            `,!1),e.default.createElement("element-icon",{name:"info-circle"}),e.default.createText(`
            `,!1),e.default.createElement("strong",{},[e.default.createText("Note:",!1)]),e.default.createText(` Template partials do not process 
            attributes or children if given.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Variables used in a template should be declared in the
            parent component or document. This allows you to pass
            data to the template from the parent.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"component"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(k("Component")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            All ink components are 
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("InkComponent",!1)]),e.default.createText(` that extends
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("HTMLElement",!1)]),e.default.createText(` and therefore is 
            both a web component and element just like any other element 
            in the browser DOM. Components that do not use the
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<style>")]),e.default.createText(` tag are affected by 
            the global styles of the application. Components with the
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<style>")]),e.default.createText(` tag enable the 
            component's shadow DOM and will encapsulate the styles within
            the component and not be affected by global styles. With that 
            said, there are several strategies that can be applied to 
            Ink components.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"strat-1"},[]),e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},[e.default.createText(`
            `,!1),...this._toNodeList(k("Strategy 1: No Components")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            This strategy uses only documents and templates. This 
            strategy is useful for simple applications that do not require 
            complex UI elements. This is the best strategy for 
            performant applications.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:400,title:"No Components",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("app-head",{},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-1",selector:"#strat-1-page-ink"},[e.default.createText(`
                  src/page.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-1",selector:"#strat-1-head-ink"},[e.default.createText(`
                  src/head.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-1",selector:"#strat-1-header-ink"},[e.default.createText(`
                  src/header.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-1",selector:"#strat-1-footer-ink"},[e.default.createText(`
                  src/footer.ink
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-left",{},[e.default.createText(`
              `,!1),e.default.createElement("h5",{class:"folder"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"chevron-down"}),e.default.createText(`
                `,!1),e.default.createElement("span",{},[e.default.createText("src",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-1",selector:"#strat-1-page-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                page.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-1",selector:"#strat-1-head-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                head.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-1",selector:"#strat-1-header-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                header.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-1",selector:"#strat-1-footer-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                footer.ink
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-main",{},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"strat-1-page-ink",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <link rel="import" type="template" href="./head.ink" name="html-head" />
                <link rel="import" type="template" href="./header.ink" name="page-header" />
                <link rel="import" type="template" href="./footer.ink" name="page-footer" />
                <script>
                  import { env } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const title = 'Hello World';
                <\/script>
                <html>
                  <html-head />
                  <body>
                    <page-header />
                    <main>
                      <h1>{title}</h1>
                    </main>
                    <page-footer />
                  </body>
                </html>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"strat-1-head-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <head>
                  <meta charset="utf-8" />
                  <title>{title}</title>

                  <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                  <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}><\/script>
                </head>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"strat-1-header-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <header>
                  <img src="/logo.png" alt="Logo" />
                  <h6>Brand</h6>
                </header>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"strat-1-footer-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <footer>
                  <a href="/about">About</a>
                  <copy>&copy; 2025</copy>
                </footer>
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"strat-2"},[]),e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},[e.default.createText(`
            `,!1),...this._toNodeList(k("Strategy 2: Shallow Components")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            This strategy uses components that do not have a 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<style>")]),e.default.createText(` tag and is useful for 
            applications that require complex logic in components but 
            using a shared global stylesheet.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:400,title:"Shallow Components",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("app-head",{},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-2",selector:"#strat-2-page-ink"},[e.default.createText(`
                  src/page.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-2",selector:"#strat-2-header-ink"},[e.default.createText(`
                  src/header.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-2",selector:"#strat-2-footer-ink"},[e.default.createText(`
                  src/footer.ink
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-left",{},[e.default.createText(`
              `,!1),e.default.createElement("h5",{class:"folder"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"chevron-down"}),e.default.createText(`
                `,!1),e.default.createElement("span",{},[e.default.createText("src",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-2",selector:"#strat-2-page-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                page.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-2",selector:"#strat-2-header-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                header.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-2",selector:"#strat-2-footer-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                footer.ink
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-main",{},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"strat-2-page-ink",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <link rel="import" type="component" href="./header.ink" name="page-header" />
                <link rel="import" type="component" href="./footer.ink" name="page-footer" />
                <script>
                  import { env } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const title = 'Hello World';
                  const brand = 'Acme Inc.';
                  const logo = '/logo.png';
                <\/script>
                <html>
                  <head>
                    <meta charset="utf-8" />
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href="/styles.css" />

                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}><\/script>
                  </head>
                  <body>
                    <page-header {brand} {logo} />
                    <main>
                      <h1>{title}</h1>
                    </main>
                    <page-footer {brand} />
                  </body>
                </html>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"strat-2-header-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand, logo } = props();
                <\/script>
                <header>
                  <img src={logo} alt={brand} />
                  <h6>{brand}</h6>
                </header>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"strat-2-footer-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand } = props();
                <\/script>
                <footer>
                  <a href="/about">About</a>
                  <copy>&copy; 2025 {brand}</copy>
                </footer>
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"strat-3"},[]),e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},[e.default.createText(`
            `,!1),...this._toNodeList(k("Strategy 3: Partial Styling")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            This strategy uses components that do not have a 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<style>")]),e.default.createText(` tag,
            but imports style via the 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<link>")]),e.default.createText(` tag to utilize both 
            global styles and specific styles that are needed for the
            component. 
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:400,title:"Shallow Components",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("app-head",{},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-3",selector:"#strat-3-page-ink"},[e.default.createText(`
                  src/page.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-3",selector:"#strat-3-header-ink"},[e.default.createText(`
                  src/header.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-3",selector:"#strat-3-footer-ink"},[e.default.createText(`
                  src/footer.ink
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-left",{},[e.default.createText(`
              `,!1),e.default.createElement("h5",{class:"folder"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"chevron-down"}),e.default.createText(`
                `,!1),e.default.createElement("span",{},[e.default.createText("src",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-3",selector:"#strat-3-page-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                page.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-3",selector:"#strat-3-header-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                header.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-3",selector:"#strat-3-footer-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                footer.ink
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-main",{},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"strat-3-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <link rel="import" type="component" href="./header.ink" name="page-header" />
                <link rel="import" type="component" href="./footer.ink" name="page-footer" />
                <script>
                  import { env } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const title = 'Hello World';
                  const brand = 'Acme Inc.';
                  const logo = '/logo.png';
                <\/script>
                <html>
                  <head>
                    <meta charset="utf-8" />
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href="/styles.css" />

                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}><\/script>
                  </head>
                  <body>
                    <page-header {brand} {logo} />
                    <main>
                      <h1>{title}</h1>
                    </main>
                    <page-footer {brand} />
                  </body>
                </html>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"strat-3-header-ink",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <link rel="stylesheet" type="text/css" href="/header.css" />
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand, logo } = props();
                <\/script>
                <header>
                  <img src={logo} alt={brand} />
                  <h6>{brand}</h6>
                </header>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"strat-3-footer-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <link rel="stylesheet" type="text/css" href="/footer.css" />
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand } = props();
                <\/script>
                <footer>
                  <a href="/about">About</a>
                  <copy>&copy; 2025 {brand}</copy>
                </footer>
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"strat-4"},[]),e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},[e.default.createText(`
            `,!1),...this._toNodeList(k("Strategy 4: Encapulation")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            This strategy uses components that have a
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<style>")]),e.default.createText(` tag and encapsulates
            the styles within the component. This strategy is useful for
            applications that require complex UI elements that need to be
            styled in a specific way. This is also useful for components 
            that are designed to be used in multiple projects.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:400,title:"Encapsulation",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("app-head",{},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-4",selector:"#strat-4-page-ink"},[e.default.createText(`
                  src/page.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-4",selector:"#strat-4-header-ink"},[e.default.createText(`
                  src/header.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-4",selector:"#strat-4-footer-ink"},[e.default.createText(`
                  src/footer.ink
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-left",{},[e.default.createText(`
              `,!1),e.default.createElement("h5",{class:"folder"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"chevron-down"}),e.default.createText(`
                `,!1),e.default.createElement("span",{},[e.default.createText("src",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-4",selector:"#strat-4-page-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                page.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-4",selector:"#strat-4-header-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                header.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-4",selector:"#strat-4-footer-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                footer.ink
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-main",{},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"strat-4-page-ink",style:"display:none",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
                <link rel="import" type="component" href="./header.ink" name="page-header" />
                <link rel="import" type="component" href="./footer.ink" name="page-footer" />
                <script>
                  import { env } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const title = 'Hello World';
                  const brand = 'Acme Inc.';
                  const logo = '/logo.png';
                <\/script>
                <html>
                  <head>
                    <meta charset="utf-8" />
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href="/styles.css" />

                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}><\/script>
                  </head>
                  <body>
                    <page-header {brand} {logo} />
                    <main>
                      <h1>{title}</h1>
                    </main>
                    <page-footer {brand} />
                  </body>
                </html>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"strat-4-header-ink",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
                <style>
                  img { width: 100px; height: 100px; }
                  h6 { margin: 0; }
                </style>
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand, logo } = props();
                <\/script>
                <header>
                  <img src={logo} alt={brand} />
                  <h6>{brand}</h6>
                </header>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"strat-4-footer-ink",style:"display:none",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
                <style>
                  copy { 
                    display: block; 
                    text-align: center; 
                  }
                </style>
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand } = props();
                <\/script>
                <footer>
                  <a href="/about">About</a>
                  <copy>&copy; 2025 {brand}</copy>
                </footer>
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"fouc"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{},[...this._toNodeList(k("Flash of Unstyled Content"))]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Web Components (custom elements) are 100% defined in 
            JavaScript. That includes their HTML and CSS. Those are 
            programmatically added to the DOM through APIs. By the time 
            the browser has interpreted and executed that code, there is 
            a good chance that the rendering pipeline has already put the 
            custom element on the screen. Since the browser doesn't know 
            about the element the first time around it will render it 
            without the intended styling. After the JavaScript of the 
            custom element definition is executed and the browser, 
            therefore, knows about the CSS rules that apply to that 
            element it can update the view.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            A flash of unstyled content (FOUC) can cause irritating layout 
            shifts as well as reveal content that should have been 
            progressively disclosed. In order to prevent a reflow of other 
            content you can add the following general solution to your 
            global stylesheet.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{lang:"css",numbers:!0,detab:12},[...this._toNodeList(`
            *:not(:defined) {
              opacity: 0;
            }
          `)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            This style will apply to all elements that are not defined,
            which are usually web components and will hide the content 
            until the browser has fully rendered the component.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("nav",{class:"flex"},[e.default.createText(`
            `,!1),e.default.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/state-management.html"},[e.default.createText(`
              `,!1),e.default.createElement("element-icon",{name:"chevron-left",theme:"tx-1"}),e.default.createText(`
              `,!1),...this._toNodeList(k("State Management")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
              `,!1),...this._toNodeList(k("Compiler API")),e.default.createText(`
              `,!1),e.default.createElement("element-icon",{name:"chevron-right",theme:"tx-1"}),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("footer",{class:"foot"},[]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]),e.default.createText(`
`,!1)])]}},Ga={PanelLayout_79d31ab9c2a1621f9a22:te,ElementAlert_9d0f5af137a9d2a0b02a:ae,ElementIcon_e084b6924e0478588e54:ne,ElementTab_24053478a6af78b142e8:le,ApiDocs_3e2f9d1245032407693b:de,ApiUi_f20d8dbea11e7ab3e760:ue,ApiIdeCode_07bacf6bf1ae49080e95:U,AppHead_d33baebe90a860722627:me,AppLeft_f1a0a3c183816d2e79ee:fe,AppMain_324e43ee80336c221b0e:he,IdeApp_d640748373b32ef31882:ge,IdeCode_07bacf6bf1ae49080e95:U,I18nTranslate_ac78a9f3111e4c80978c:ye},us={"panel-layout":te,"element-alert":ae,"element-icon":ne,"element-tab":le,"api-docs":de,"api-ui":ue,"app-head":me,"app-left":fe,"app-main":he,"ide-app":ge,"ide-code":U,"i18n-translate":ye},Ja="dbcc85ff32d683a0d21b";gt.default.once("ready",()=>{yt.sync();for(let[s,t]of Object.entries(us))customElements.getName(t)||customElements.define(s,t);gt.default.emit("mounted",document.body)});return Es(Wa);})();
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
