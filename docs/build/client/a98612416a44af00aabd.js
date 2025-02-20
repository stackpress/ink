var InkAPI=(()=>{var Za=Object.create;var Oe=Object.defineProperty;var Ka=Object.getOwnPropertyDescriptor;var Qa=Object.getOwnPropertyNames;var Xa=Object.getPrototypeOf,er=Object.prototype.hasOwnProperty;var w=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),tr=(r,t)=>{for(var a in t)Oe(r,a,{get:t[a],enumerable:!0})},Zt=(r,t,a,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Qa(t))!er.call(r,n)&&n!==a&&Oe(r,n,{get:()=>t[n],enumerable:!(s=Ka(t,n))||s.enumerable});return r};var k=(r,t,a)=>(a=r!=null?Za(Xa(r)):{},Zt(t||!r||!r.__esModule?Oe(a,"default",{value:r,enumerable:!0}):a,r)),ar=r=>Zt(Oe({},"__esModule",{value:!0}),r);var Z=w(lt=>{"use strict";Object.defineProperty(lt,"__esModule",{value:!0});var it=class{constructor(){this._parent=null}get parent(){return this._parent}get parentElement(){return this._parent}set parent(t){this._parent=t}};lt.default=it});var ct=w(ce=>{"use strict";var rr=ce&&ce.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(ce,"__esModule",{value:!0});var sr=rr(Z()),ot=class extends sr.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#comment",this.type=8,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!--${this.value}-->`}};ce.default=ot});var dt=w(ue=>{"use strict";var nr=ue&&ue.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(ue,"__esModule",{value:!0});var ir=nr(Z()),ut=class extends ir.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#doctype",this.type=10,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!DOCTYPE ${this.value}>`}};ue.default=ut});var mt=w(de=>{"use strict";var lr=de&&de.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(de,"__esModule",{value:!0});var or=lr(Z()),cr=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],ft=class r extends or.default{get attributes(){return Object.fromEntries(this._attributes)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof r)}get nodeName(){return this.name.toUpperCase()}get nodes(){let t=[this];return this._flatten(Array.from(this.children),t),t}get nodeType(){return this.type}get parent(){return this._parent}set parent(t){this._parent=t}constructor(t,a={},s=[]){super(),this.type=1,this._parent=null,this.name=t,this._attributes=new Map(Object.entries(a)),this.children=new Set(s.filter(Boolean))}appendChild(t){return this.children.add(t),t.parent=this,this}export(){return{type:this.type,name:this.name,attributes:Object.fromEntries(this._attributes.entries()),children:Array.from(this.children).map(t=>t.export())}}getAttribute(t){return this._attributes.get(t)}hasAttribute(t){return this._attributes.has(t)}removeAttribute(t){return this._attributes.delete(t),this}removeChild(t){this.children.delete(t),t.parent=null}setAttribute(t,a){return this._attributes.set(t,a),this}toString(){let t=Array.from(this._attributes.entries()),a=t.length>0?" "+t.map(([n,i])=>{if(typeof i=="string"&&!/["<>\n]/.test(i))return`${n}="${i}"`;if(typeof i=="boolean")return i?n:""}).join(" "):"";if(cr.includes(this.name))return`<${this.name}${a} />`;let s=Array.from(this.children.values()).map(n=>n.toString()).join("");return`<${this.name}${a}>${s}</${this.name}>`}_flatten(t,a){t.forEach(s=>{a.push(s),s instanceof r&&this._flatten(Array.from(s.children),a)})}};de.default=ft});var pt=w(fe=>{"use strict";var ur=fe&&fe.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(fe,"__esModule",{value:!0});var dr=ur(Z()),ht=class extends dr.default{get nodeName(){return"#text"}get nodeType(){return this.type}get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,a=!1){super(),this.name="#text",this.type=3,this._escape=a,this._value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return this.value}};fe.default=ht});var De=w(me=>{"use strict";var Me=me&&me.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(me,"__esModule",{value:!0});var fr=Me(ct()),mr=Me(dt()),gt=Me(mt()),hr=Me(pt()),xt=class r{static createComment(t,a){let s=new fr.default(t);return a&&(s.parent=a),s}static createDoctype(t="html",a){let s=new mr.default(t);return a&&(s.parent=a),s}static createElement(t,a={},s=[],n){let i=new gt.default(t,a,s);return n&&(i.parent=n),i}static createText(t,a=!1,s){let n=new hr.default(t,a);return s&&(n.parent=s),n}static import(t,a){return t.map(s=>{let{value:n}=s,{name:i,attributes:m,children:_}=s;switch(s.type){case 1:let b=this.createElement(i,m,[],a);return r.import(_,b).forEach(E=>b.appendChild(E)),b;case 3:return this.createText(n,!0,a);case 8:return this.createComment(n,a);case 10:return this.createDoctype(n,a)}return null}).filter(Boolean)}static load(t){return new r(t)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof gt.default)}get nodes(){return Array.from(this.children).map(t=>t instanceof gt.default?t.nodes:[t]).flat()}constructor(t){this.children=new Set(t.filter(Boolean))}export(){return this.childList.map(t=>t.export())}toString(){return Array.from(this.children).map(t=>t.toString()).join("")}};me.default=xt});var G=w(he=>{"use strict";Object.defineProperty(he,"__esModule",{value:!0});he.TemplateData=void 0;var Fe=class{constructor(){window.__TEMPLATE_DATA__||(window.__TEMPLATE_DATA__={})}clear(){return window.__TEMPLATE_DATA__={},this}delete(t){return this.has(t)?(delete window.__TEMPLATE_DATA__[t],!0):!1}entries(){return Object.entries(window.__TEMPLATE_DATA__)}has(t){return t in window.__TEMPLATE_DATA__}get(t){return window.__TEMPLATE_DATA__[t]}keys(){return Object.keys(window.__TEMPLATE_DATA__)}set(t,a){return window.__TEMPLATE_DATA__[t]=a,this}values(){return Object.values(window.__TEMPLATE_DATA__)}};he.TemplateData=Fe;var pr=new Fe;he.default=pr});var pe=w(F=>{"use strict";var gr=F&&F.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(F,"__esModule",{value:!0});F.match=F.ClientEmitter=F.events=void 0;F.bindAttribute=je;F.unbindAttribute=bt;var Kt=gr(P());F.events=["click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","wheel","keydown","keypress","keyup","blur","change","contextmenu","focus","input","submit","invalid","reset","search","select","copy","cut","paste","drag","dragstart","dragend","dragover","dragenter","dragleave","drop","scroll","durationchange","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","animationstart","animationend","animationiteration","transitionend","toggle"];var Pe=class extends EventTarget{emit(t,a){return this.dispatchEvent(new CustomEvent(t,{detail:a})),this}on(t,a){if(t==="ready"&&document.readyState!=="loading"){let s=new CustomEvent("ready");return setTimeout(()=>a(s),1),this}return this.addEventListener(t,a),this}once(t,a){let s=n=>{this.unbind(t,s),a(n)};return this.on(t,s),this}unbind(t,a){return this.removeEventListener(t,a),this}};F.ClientEmitter=Pe;var xr=(r,t,a=!0)=>Array.from(r.querySelectorAll("*")).filter(s=>{let n=Kt.default.get(s),i=n&&n.hasAttribute(t)&&(!a||!n.hasEvent(t));return i&&n.addEvent(t),i}).map(s=>Kt.default.get(s));F.match=xr;function je(r,t){Ie.on("mounted",a=>{if(!a.detail)return;let s=a.detail;(0,F.match)(s.shadowRoot||s,r).forEach(t)})}function bt(r,t){Ie.on("unmounted",a=>{if(!a.detail)return;let s=a.detail;(0,F.match)(s.shadowRoot||s,r,!1).forEach(t)})}var Ie=new Pe;F.default=(document.onreadystatechange=()=>{document.readyState!=="loading"&&Ie.emit("ready")},je("mount",r=>{let t=r.getAttribute("mount");if(typeof t=="function"){let a=new CustomEvent("mount",{detail:{node:r,target:r.element}});t(a)}}),bt("unmount",r=>{let t=r.getAttribute("unmount");if(typeof t=="function"){let a=new CustomEvent("unmount",{detail:{node:r,target:r.element}});t(a)}}),je("if",r=>{let t=r.getAttribute("if");(t===!1||t==="false"||typeof t=="function"&&!t())&&r.element.remove()}),F.events.forEach(r=>{je(r,t=>{let a=t.getAttribute(r);typeof a=="function"&&(t.element.removeEventListener(r,a),t.element.addEventListener(r,a))}),bt(r,t=>{let a=t.getAttribute(r);typeof a=="function"&&t.element.removeEventListener(r,a)})}),Ie)});var Re=w(ge=>{"use strict";var br=ge&&ge.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(ge,"__esModule",{value:!0});var Tt=br(pe()),_t=class{get attributes(){return Object.assign({},this._attributes)}get element(){return this._element}get events(){return this._events}constructor(t,a){this._events=new Set,this._element=t,this._attributes=a}addEvent(t){return this._events.add(t),this}camel(){return Object.fromEntries(Object.entries(this._attributes).map(([t,a])=>t==="class"?["className",a]:[t.replace(/-([a-z])/g,(n,i)=>i.toUpperCase()).replaceAll("-",""),a]))}getAttribute(t){return this._attributes[t]}hasAttribute(t){return t in this._attributes}hasEvent(t){return this._events.has(t)}removeAttribute(t,a=!1){let s=this.getAttribute(t);return typeof s>"u"?this:(delete this._attributes[t],a||Tt.default.emit("attribute-remove",{element:this,key:t,previous:s}),this)}setAttribute(t,a,s=!1){if(typeof a>"u")return this.removeAttribute(t,s);let n=this.getAttribute(t);return n===a?this:(this._attributes[t]=a,s||(typeof n>"u"?Tt.default.emit("attribute-create",{element:this,key:t,value:a}):Tt.default.emit("attribute-update",{element:this,key:t,value:a,previous:n})),this)}setAttributes(t,a=!1){for(let[n,i]of Object.entries(t))this.setAttribute(n,i,a);let s=Object.keys(t);for(let n of Object.keys(this._attributes))s.includes(n)||this.removeAttribute(n,a);return this}tree(t,a,s){if(t||(t=Object.assign({},this._attributes)),a){let i=a.split("-");if(i.length>0){let m=i.shift();i.length>0?(t[m]||(t[m]={}),this.tree(t[m],i.join("-"),s)):t[m]=s}return t}let n={};for(let[i,m]of Object.entries(t))this.tree(n,i,m);return n}};ge.default=_t});var Et=w(yt=>{"use strict";Object.defineProperty(yt,"__esModule",{value:!0});yt.default=()=>window.InkAPI});var P=w(xe=>{"use strict";var ea=xe&&xe.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(xe,"__esModule",{value:!0});var Qt=ea(Re()),Tr=ea(Et()),Xt=document.createElement("textarea"),_r=r=>(Xt.innerHTML=r,Xt.value),$e=class r{static get elements(){return this._elements}static createComponent(t,a,s={},n=[]){var i;let{registered:m}=a;if(!m&&!(!((i=(0,Tr.default)())===null||i===void 0)&&i.elements[t]))return this.createVirtualComponent(t,a,s,n);let _=m||t,b=document.createElement(_);customElements.whenDefined(_).then(()=>{customElements.upgrade(b),b.initiated||b.connectedCallback()});let E=r.register(b,s);E.setAttributes(s,!0);for(let[T,A]of Object.entries(s))typeof A=="string"?b.setAttribute(T,A):A===!0&&b.setAttribute(T,"");return this._cleanChildren(n).forEach(T=>b.appendChild(T)),E}static createElement(t,a={},s=[]){let n=document.createElement(t);for(let[i,m]of Object.entries(a))typeof m=="string"?n.setAttribute(i,m):m===!0&&n.setAttribute(i,"");return this._cleanChildren(s).forEach(i=>n.appendChild(i)),this.register(n,a)}static createText(t,a=!0){return document.createTextNode(_r(t))}static createVirtualComponent(t,a,s={},n=[]){let i=document.createElement(t);return i.definition=a,Object.setPrototypeOf(i,a.prototype),i.constructor=a.constructor,i.constructor.id=a.id,i.constructor.tagname=a.tagname,i.constructor.classname=a.classname,a.observedAttributes&&(i.constructor.observedAttributes=a.observedAttributes),i.register(s,n),i.element}static cloneElement(t,a=!1){var s;let n=t;if(n.definition){let i=n.originalChildren||[];return this.createComponent(n.nodeName.toLowerCase(),n.definition,n.props||{},a?i.map(m=>this.cloneElement(m,a)):[]).element}else if(t instanceof HTMLElement){let i=Array.from(t.childNodes);return this.createElement(t.nodeName.toLowerCase(),this.has(t)?(s=this.get(t))===null||s===void 0?void 0:s.attributes:Object.fromEntries(Array.from(t.attributes).map(m=>[m.name,m.value])),a?i.map(m=>this.cloneElement(m,a)):[]).element}return t.cloneNode(a)}static filter(t){let a=[];return this._elements.forEach((s,n)=>{t(s,n)&&a.push(s)}),a}static get(t){return this._elements.get(t)||null}static has(t){return this._elements.has(t)}static map(t){let a=[];return this._elements.forEach((s,n)=>{a.push(t(s,n))}),a}static register(t,a,s=!1){if(this.has(t))return this.get(t);a||Array.from(t.attributes).forEach(i=>{a=a||{},a[i.name]=i.value!==""?i.value:!0});let n=new Qt.default(t,a||{});return this._elements.set(t,n),s&&Array.from(t.children).forEach(i=>{i instanceof Element&&this.register(i,void 0,!0)}),n}static _cleanChildren(t){return Array.from(t).filter(a=>typeof a<"u").map(a=>typeof a=="string"?this.createText(a):a instanceof Qt.default?a.element:a)}};$e._elements=new Map;xe.default=$e});var ta=w(be=>{"use strict";var At=be&&be.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(be,"__esModule",{value:!0});var yr=At(De()),vt=At(G()),wt=At(P()),kt=class{constructor(){let t=document.querySelector("script[data-template]");if(!t)throw new Error("TEMPLATE_DATA not found");try{window.__TEMPLATE_DATA__=JSON.parse(t.innerText.trim()),Object.entries(window.__TEMPLATE_DATA__).forEach(([a,s])=>{vt.default.set(a,s)})}catch{throw new Error("TEMPLATE_DATA is not a valid JSON")}}bindings(){vt.default.set("current","document");let t=this.template();vt.default.delete("current");let a=yr.default.load(t).elements,s=Array.from(a).map((n,i)=>[String(i),n.attributes]).filter(n=>Object.keys(n[1]).length);return Object.fromEntries(s)}sync(){let t=this.bindings(),a=Array.from(document.querySelectorAll("*"));for(let s of a){let n=Object.fromEntries(Array.from(s.attributes).map(m=>[m.nodeName,m.nodeValue&&m.nodeValue.length>0?m.nodeValue:!0])),i=String(wt.default.elements.size);t[i]&&Object.assign(n,t[i]),wt.default.register(s,n)}return t}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(a=>typeof a=="object"&&typeof a.nodeType=="number")?t:[wt.default.createText(String(t))]}};be.default=kt});var U=w(Te=>{"use strict";var Be=Te&&Te.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(Te,"__esModule",{value:!0});var Er=Be(Re()),I=Be(P()),qe=Be(pe()),Ue=Be(G()),Lt=class r extends HTMLElement{static get registered(){return customElements.getName(this)}static register(){customElements.define(this.tagname,this)}get attr(){return Object.fromEntries(Array.from(this.attributes).map(t=>[t.name,t.value]))}get definition(){return this._definition||this.constructor}get element(){if(!I.default.has(this))throw new Error(`Component ${this.metadata.classname} not mapped.`);return I.default.get(this)}get initiated(){return this._initiated}get metadata(){let{id:t,classname:a,tagname:s,registered:n,observedAttributes:i=[]}=this.definition;return{id:t,tagname:s,classname:a,registered:n,observed:i}}get originalChildren(){return this._children}get props(){return this.getAttributes()}get propsCamel(){return this.element.camel()}get propsTree(){return this.element.tree()}get virtual(){return this._virtual}set props(t){this.setAttributes(t)}set definition(t){this._definition=t}set originalChildren(t){typeof this._children>"u"&&(this._children=this._cleanChildren(t||[]))}constructor(){if(super(),this._children=void 0,this._definition=null,this._initiated=!1,this._observer=null,this._rendering=!1,this._template=null,this._virtual=!1,!I.default.has(this)){let{registered:t}=this.metadata;if(!t)throw new Error(`Component ${this.metadata.classname} not registered in customElements.`);let a=Object.fromEntries(Array.from(this.attributes).map(s=>[s.name,s.value!==""?s.value:!0]));I.default.register(this,a)}}adoptedCallback(){this.render(),this.emit("adopt",this)}attributeChangedCallback(t,a,s){if(this._rendering)return;let n=a===null?"add":s===null?"remove":"update";s===null&&this.hasAttribute(t)?this.element.removeAttribute(t):s===""?this.element.setAttribute(t,!0):this.element.setAttribute(t,s),this.emit("attributechange",{action:n,name:t,prev:a,value:s,target:this})}clone(t=!1){return this.cloneElement(this,t)}cloneElement(t,a=!1){return I.default.cloneElement(t,a)}connectedCallback(){this.wait(),this.emit("connect",this)}createComponent(t,a,s={},n=[]){return I.default.createComponent(t,a,s,n)}createElement(t,a={},s=[]){return I.default.createElement(t,a,s)}disconnectedCallback(){this.emit("disconnect",this)}emit(t,a){return this.dispatchEvent(new CustomEvent(t,{detail:a})),this}getAttribute(t){return this.element.getAttribute(t)}getAttributes(){return Object.assign({},this.element.attributes)}getChildren(t=!0){return t===!0?Array.from(this.childNodes):t===!1?this._children:t===null&&this.shadowRoot?Array.from(this.shadowRoot.childNodes):[]}getElement(t){return I.default.get(t)}getParentComponent(){let t=this.parentElement;for(;t;){if(t instanceof r)return t;t=t.parentElement}return null}hasAttribute(t){return this.element.hasAttribute(t)}on(t,a){return this.removeEventListener(t,a),this.addEventListener(t,a),this}once(t,a){let s=n=>{this.removeEventListener(t,a),a(n)};return this.on(t,s),this}register(t={},a=[]){I.default.has(this)?I.default.get(this).setAttributes(t):I.default.register(this,t);for(let[s,n]of Object.entries(t))(typeof n=="string"||n===!0)&&super.setAttribute(s,n===""||n===s||n===!0?!0:n);this._children=this._cleanChildren(a),this._children.forEach(s=>this.appendChild(s)),this._virtual=!0,this.connectedCallback()}removeAttribute(t){let a=this.getAttribute(t);this.hasAttribute(t)&&this.element.removeAttribute(t),super.hasAttribute(t)&&super.removeAttribute(t),this._virtual&&this.metadata.observed.includes(t)&&this.attributeChangedCallback(t,a,null)}render(){let t=this.getParentComponent();if(t&&!t.initiated)return;if(this._rendering)return;this._rendering=!0;let a=Ue.default.get("current");Ue.default.set("current",this),this._template?qe.default.emit("unmounted",this):this._template=this.template();let s=this._template().filter(Boolean),n=this.styles(),i=n.length===0?"light":"shadow",{light:m,shadow:_}=this._getChildren(s,i);if(_.length===0&&i==="light")this.textContent="",m.forEach(b=>this.appendChild(b));else{this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0});let b=document.createElement("style");b.innerText=n;let E=this.shadowRoot;E.textContent="",E.appendChild(b),_.forEach(T=>E.appendChild(T)),m.length&&(this.textContent="",m.forEach(T=>this.appendChild(T)))}return a?Ue.default.set("current",a):Ue.default.delete("current"),this._initiated=!0,this._rendering=!1,qe.default.emit("mounted",this),this.shadowRoot?this.shadowRoot.innerHTML:this.innerHTML}setAttribute(t,a){let s=this.getAttribute(t);a===""||a===!0?(this.element.setAttribute(t,!0),super.setAttribute(t,"")):a===!1?(this.element.setAttribute(t,a),super.removeAttribute(t)):typeof a=="string"?(this.element.setAttribute(t,a),super.setAttribute(t,a)):this.element.setAttribute(t,a),this._virtual&&this.metadata.observed.includes(t)&&typeof a=="string"&&this.attributeChangedCallback(t,s,a)}setAttributes(t){Object.entries(t).forEach(([a,s])=>this.setAttribute(a,s))}unbind(t,a){return this.removeEventListener(t,a),this}wait(){if(document.readyState!=="loading")this._update();else{let t=()=>{this._update(),qe.default.unbind("ready",t)};qe.default.on("ready",t)}}_cleanChildren(t){return Array.from(t).filter(a=>typeof a<"u").map(a=>typeof a=="string"?I.default.createText(a):a instanceof Er.default?a.element:a)}_getChildren(t,a){let s=this._getTemplateNodes(t),n=this._getTemplateNodes(t,"light"),i=this._getTemplateNodes(t,"shadow"),m=s.length>0?s:t;return{light:n.length>0?n:a==="light"?m:[],shadow:i.length>0?i:a==="shadow"?m:[]}}_getTemplateNodes(t,a){let s=t.find(n=>this._isTemplate(n,a));return s?Array.from(s.childNodes||[]):[]}_isTemplate(t,a){if(t.nodeName!=="TEMPLATE")return!1;let s=t;return a?a===s.getAttribute("type"):!s.hasAttribute("type")}_toNodeList(t){return t instanceof Node?[t]:Array.isArray(t)&&t.every(a=>a instanceof Node)?t:[I.default.createText(String(t))]}_update(){typeof this._children>"u"&&(this._children=this._cleanChildren(Array.from(this.childNodes||[]))),this._initiated||this.render()}};Te.default=Lt});var Nt=w(ze=>{"use strict";Object.defineProperty(ze,"__esModule",{value:!0});ze.stylemap=vr;function vr(r={}){return new He(Object.entries(r))}var He=class r extends Map{add(t,a){this.has(t)||this.set(t,[]);let s=this.get(t);return typeof a=="string"||typeof a=="number"?s.push(a):Array.isArray(a)&&s.push(...a),this}clone(){let t=new r;for(let[a,s]of this.entries())t.set(a,s.slice());return t}replaceAll(t,a){for(let[s,n]of this.entries())this.set(s,n.map(i=>typeof i=="string"?i.replaceAll(t,a):i));return this}};ze.default=He});var _e=w(Q=>{"use strict";var wr=Q&&Q.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(Q,"__esModule",{value:!0});Q.styleset=Ar;var kr=wr(Nt());function Ar(r={}){return new Ge(Object.entries(r))}var Ge=class extends Map{add(t,a,s){this.has(t)||this.set(t,new kr.default);let n=this.get(t);return typeof s=="string"?n.set(a,s.split(" ")):Array.isArray(s)&&n.set(a,s),this}map(t,a){return this.set(t,a),this}toString(){let t=[];for(let[a,s]of this.entries()){let n=[];for(let[i,m]of s.entries())i&&m?.length&&n.push(`${i}:${m.join(" ")}`);n.length&&t.push(`${a}{${n.join(";")}}`)}return t.join("")}};Q.default=Ge});var St=w(Ct=>{"use strict";Object.defineProperty(Ct,"__esModule",{value:!0});Ct.default=Lr;function Lr(r,t,a=!1,s=":host",n="color"){let{color:i,white:m,black:_,info:b,warning:E,success:T,error:A,muted:L,primary:y,secondary:N,theme:l}=r,o=i||(l?`var(--${l})`:m?"var(--white)":_?"var(--black)":b?"var(--info)":E?"var(--warning)":T?"var(--success)":A?"var(--error)":L?"var(--muted)":y?"var(--primary)":N?"var(--secondary)":a);return o&&t.add(s,n,o),i?"color":m?"white":_?"black":b?"info":E?"warning":T?"success":A?"error":L?"muted":y?"primary":N?"secondary":"initial"}});var sa=w(Ot=>{"use strict";Object.defineProperty(Ot,"__esModule",{value:!0});Ot.default=Nr;function Nr(r,t,a=!1,s=":host"){let{curve:n,curved:i,rounded:m,pill:_}=r,b=n?`${n}px`:i?"4px":m?"12px":_?"10000px":a;return b&&(t.add(s,"border-radius",b),t.add(s,"overflow","hidden")),n?"curve":i?"curved":m?"rounded":_?"pill":"initial"}});var Dt=w(Mt=>{"use strict";Object.defineProperty(Mt,"__esModule",{value:!0});Mt.default=Cr;function Cr(r,t,a=!1,s=":host"){let{flex:n,none:i,inline:m,block:_,"inline-block":b,"inline-flex":E}=r,T=n?"flex":i?"none":_?"block":m?"inline":E?"inline-flex":b?"inline-block":a;return T&&t.add(s,"display",T),T||"initial"}});var ca=w(jt=>{"use strict";Object.defineProperty(jt,"__esModule",{value:!0});jt.default=Sr;function Sr(r,t,a=!1,s=":host",n="font-size"){let{size:i,xs:m,sm:_,md:b,lg:E,xl:T,xl2:A,xl3:L,xl4:y,xl5:N}=r,l=i?`${i}px`:m?"8px":_?"12px":b?"16px":E?"20px":T?"24px":A?"28px":L?"32px":y?"36px":N?"40px":a;return l&&t.add(s,n,l),i?"size":m?"xs":_?"sm":b?"md":E?"lg":T?"xl":A?"xl2":L?"xl3":y?"xl4":N?"xl5":"initial"}});var pa=w(ye=>{"use strict";var Or=ye&&ye.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(ye,"__esModule",{value:!0});var Mr=Or(U()),Ve=class extends Mr.default{get field(){return this._field}constructor(){super(),this._field=this.attachInternals()}formAssociatedCallback(t){this.emit("formassociate",this)}formDisabledCallback(t){this.emit("formdisable",this)}formResetCallback(){this.emit("formreset",this)}};Ve.formAssociated=!0;ye.default=Ve});var te=w(Ee=>{"use strict";var Dr=Ee&&Ee.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(Ee,"__esModule",{value:!0});Ee.default=jr;var Fr=Dr(G());function jr(r=null,t=!1){if(!r&&(r=Fr.default.get("current"),!r)){if(!t)throw new Error("Not called within a Ink component");return null}return r}});var ga=w(ve=>{"use strict";var Pr=ve&&ve.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(ve,"__esModule",{value:!0});var Ir=Pr(G());function Rr(r){let t=Ir.default.get("env")||{};return r?t[r]||null:t}ve.default=Rr});var Pt=w(we=>{"use strict";var xa=we&&we.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(we,"__esModule",{value:!0});we.default=Ur;var $r=xa(te()),qr=xa(G());function Ur(r=null){let t=(0,$r.default)(r,!0);return typeof t=="string"?qr.default.get("props")||{}:t?t.props:{}}});var Ta=w(ae=>{"use strict";var ba=ae&&ae.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(ae,"__esModule",{value:!0});ae.classlist=zr;ae.default=Gr;var Br=ba(te()),Hr=ba(Pt());function zr(r=null){var t;if(r==="body")return document.body.classList;if(r==="head")return document.head.classList;if(r==="document")return(t=document.body.parentElement)===null||t===void 0?void 0:t.classList;let a=(0,Br.default)(r);return a?.classList}function Gr(r=null){return(0,Hr.default)(r).class||""}});var _a=w(W=>{"use strict";var Yr=W&&W.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(W,"__esModule",{value:!0});W.innerHTML=Vr;W.innerText=Jr;W.default=It;var Wr=Yr(te());function Vr(r=null){let t=It(r),a=document.createElement("template");return a.append(...t.map(s=>s.cloneNode(!0))),a.innerHTML}function Jr(r=null){let t=It(r),a=document.createElement("template");return a.append(...t.map(s=>s.cloneNode(!0))),a.innerText}function It(r=null){let t=(0,Wr.default)(r,!0);return typeof t!="string"&&t?t.originalChildren||[]:[]}});var ya=w(V=>{"use strict";var Zr=V&&V.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(V,"__esModule",{value:!0});V.SignalRegistry=void 0;V.default=Qr;var Kr=Zr(te()),re=class r{static observe(t,a){let s={getter:()=>i.raw,setter:_=>_},n=new Set,i={raw:a,change(_){return n.add(_),i},getter(_){return s.getter=_,i},setter(_){return s.setter=_,i}};Object.defineProperty(i,"value",{get(){return s.getter()},set(_){let b=s.setter(_),E=r.serialize(b)!==r.serialize(i.raw);i.raw=b,E&&(n.forEach(T=>T(b)),t.render())}});let m=this._observers.get(t);return m?(m.observed++,m.values.push(i)):this._observers.set(t,{observed:1,values:[i]}),i}static observer(t){return this._observers.get(t)||null}static serialize(t){return JSON.stringify(t)}};V.SignalRegistry=re;re._observers=new Map;function Qr(r,t=null){let a=(0,Kr.default)(t);if(!a.initiated)return re.observe(a,r);let s=re.observer(a);if(!s)throw new Error("Signal state mismatch");return s.values[s.observed++%s.values.length]}});var va=w(B=>{"use strict";var Xr=B&&B.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(B,"__esModule",{value:!0});B.breakpoints=void 0;B.stylesheet=es;var Ea=Xr(_e());B.breakpoints={all:0,xl4:1920,xl3:1536,xl2:1280,xl:1024,lg:992,md:767,sm:420,xs:360};function es(){return new Je}var Je=class extends Map{add(t,a,s,n){return this.has(t)||this.set(t,new Ea.default),this.get(t).add(a,s,n),this}map(t,a,s){return this.has(t)||this.set(t,new Ea.default),this.get(t).map(a,s),this}toString(){var t;let a=[];for(let[s,n]of Object.entries(B.breakpoints)){let i=(t=this.get(s))===null||t===void 0?void 0:t.toString();if(i){if(s==="all"){a.push(i);continue}a.push(`@media (max-width:${n}px){${i}}`)}}return a.join("")}};B.default=Je});var ka=w(Ze=>{"use strict";Object.defineProperty(Ze,"__esModule",{value:!0});Ze.getStatus=ts;var wa={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};Ze.default=wa;function ts(r){return Object.values(wa).find(t=>t.code===r)}});var Aa=w($t=>{"use strict";Object.defineProperty($t,"__esModule",{value:!0});var as=ka(),Rt=class r extends Error{static for(t,...a){return a.forEach(function(s){t=t.replace("%s",String(s))}),new this(t)}static forErrors(t){let a=new this("Invalid Parameters");return a.withErrors(t),a}static require(t,a,...s){if(!t){for(let n of s)a=a.replace("%s",n);throw new this(a)}}static try(t){return{catch:a=>{try{return t()}catch(s){if(s instanceof r)return a(s,s.type);if(s instanceof Error){let n=r.upgrade(s);return a(n,n.type)}else if(typeof s=="string"){let n=r.for(s);return a(n,n.type)}return a(s,"unknown")}}}}static upgrade(t,a=500){if(t instanceof r)return t;let s=new this(t.message,a);return s.name=t.name,s.stack=t.stack,s}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,a=500){var s;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=a,this._status=((s=(0,as.getStatus)(a))===null||s===void 0?void 0:s.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,a=0){let s={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,a)};return Object.keys(this._errors).length>0&&(s.errors=this._errors),s}trace(t=0,a=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,a||this.stack.length).map(n=>n.trim()).map(n=>{if(!n.startsWith("at"))return!1;let[i,m,_]=n.split(" ");_||(_=`(${m})`,m="<none>");let[b,E,T]=_.substring(1,_.length-1).split(":");return{method:m,file:b,line:parseInt(E)||0,char:parseInt(T)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,a){return this._start=t,this._end=a,this}};$t.default=Rt});var La=w(ke=>{"use strict";var rs=ke&&ke.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(ke,"__esModule",{value:!0});var ss=rs(Aa()),qt=class extends ss.default{};ke.default=qt});var Fa=w(u=>{"use strict";var ns=u&&u.__createBinding||(Object.create?function(r,t,a,s){s===void 0&&(s=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(r,s,n)}:function(r,t,a,s){s===void 0&&(s=a),r[s]=t[a]}),is=u&&u.__setModuleDefault||(Object.create?function(r,t){Object.defineProperty(r,"default",{enumerable:!0,value:t})}:function(r,t){r.default=t}),Y=u&&u.__importStar||function(){var r=function(t){return r=Object.getOwnPropertyNames||function(a){var s=[];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(s[s.length]=n);return s},r(t)};return function(t){if(t&&t.__esModule)return t;var a={};if(t!=null)for(var s=r(t),n=0;n<s.length;n++)s[n]!=="default"&&ns(a,t,s[n]);return is(a,t),a}}(),j=u&&u.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(u,"__esModule",{value:!0});u.StyleSheet=u.StyleSet=u.StyleMap=u.stylesheet=u.styleset=u.stylemap=u.breakpoints=u.emitter=u.signal=u.innerHTML=u.innerText=u.children=u.classnames=u.classlist=u.props=u.env=u.data=u.client=u.component=u.SignalRegistry=u.ClientException=u.ClientEmitter=u.ClientElement=u.ClientRegistry=u.ClientComponent=u.ClientField=u.TemplateData=u.DOMNode=u.DOMText=u.DOMElement=u.DOMDocument=u.DOMDoctype=u.DOMComment=void 0;var ls=j(ct());u.DOMComment=ls.default;var os=j(dt());u.DOMDoctype=os.default;var cs=j(De());u.DOMDocument=cs.default;var us=j(mt());u.DOMElement=us.default;var ds=j(pt());u.DOMText=ds.default;var fs=j(Z());u.DOMNode=fs.default;var ms=j(pa());u.ClientField=ms.default;var hs=j(U());u.ClientComponent=hs.default;var ps=j(P());u.ClientRegistry=ps.default;var gs=j(Re());u.ClientElement=gs.default;var Na=Y(pe());u.emitter=Na.default;Object.defineProperty(u,"ClientEmitter",{enumerable:!0,get:function(){return Na.ClientEmitter}});var xs=j(Et());u.client=xs.default;var bs=j(te());u.component=bs.default;var Ca=Y(G());u.data=Ca.default;Object.defineProperty(u,"TemplateData",{enumerable:!0,get:function(){return Ca.TemplateData}});var Ts=j(ga());u.env=Ts.default;var _s=j(Pt());u.props=_s.default;var Sa=Y(Ta());u.classnames=Sa.default;Object.defineProperty(u,"classlist",{enumerable:!0,get:function(){return Sa.classlist}});var Ut=Y(_a());u.children=Ut.default;Object.defineProperty(u,"innerHTML",{enumerable:!0,get:function(){return Ut.innerHTML}});Object.defineProperty(u,"innerText",{enumerable:!0,get:function(){return Ut.innerText}});var Oa=Y(ya());u.signal=Oa.default;Object.defineProperty(u,"SignalRegistry",{enumerable:!0,get:function(){return Oa.SignalRegistry}});var Ma=Y(Nt());u.StyleMap=Ma.default;Object.defineProperty(u,"stylemap",{enumerable:!0,get:function(){return Ma.stylemap}});var Da=Y(_e());u.StyleSet=Da.default;Object.defineProperty(u,"styleset",{enumerable:!0,get:function(){return Da.styleset}});var Bt=Y(va());u.StyleSheet=Bt.default;Object.defineProperty(u,"stylesheet",{enumerable:!0,get:function(){return Bt.stylesheet}});Object.defineProperty(u,"breakpoints",{enumerable:!0,get:function(){return Bt.breakpoints}});var ys=j(La());u.ClientException=ys.default});var Ae=w((on,ja)=>{ja.exports={...Fa()}});var Ra=w((dn,Xe)=>{var Es=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var h=function(r){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,s={},n={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function l(o){return o instanceof i?new i(o.type,l(o.content),o.alias):Array.isArray(o)?o.map(l):o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).slice(8,-1)},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++a}),l.__id},clone:function l(o,c){c=c||{};var d,f;switch(n.util.type(o)){case"Object":if(f=n.util.objId(o),c[f])return c[f];d={},c[f]=d;for(var x in o)o.hasOwnProperty(x)&&(d[x]=l(o[x],c));return d;case"Array":return f=n.util.objId(o),c[f]?c[f]:(d=[],c[f]=d,o.forEach(function(v,g){d[g]=l(v,c)}),d);default:return o}},getLanguage:function(l){for(;l;){var o=t.exec(l.className);if(o)return o[1].toLowerCase();l=l.parentElement}return"none"},setLanguage:function(l,o){l.className=l.className.replace(RegExp(t,"gi"),""),l.classList.add("language-"+o)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(d){var l=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(d.stack)||[])[1];if(l){var o=document.getElementsByTagName("script");for(var c in o)if(o[c].src==l)return o[c]}return null}},isActive:function(l,o,c){for(var d="no-"+o;l;){var f=l.classList;if(f.contains(o))return!0;if(f.contains(d))return!1;l=l.parentElement}return!!c}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(l,o){var c=n.util.clone(n.languages[l]);for(var d in o)c[d]=o[d];return c},insertBefore:function(l,o,c,d){d=d||n.languages;var f=d[l],x={};for(var v in f)if(f.hasOwnProperty(v)){if(v==o)for(var g in c)c.hasOwnProperty(g)&&(x[g]=c[g]);c.hasOwnProperty(v)||(x[v]=f[v])}var S=d[l];return d[l]=x,n.languages.DFS(n.languages,function(M,H){H===S&&M!=l&&(this[M]=x)}),x},DFS:function l(o,c,d,f){f=f||{};var x=n.util.objId;for(var v in o)if(o.hasOwnProperty(v)){c.call(o,v,o[v],d||v);var g=o[v],S=n.util.type(g);S==="Object"&&!f[x(g)]?(f[x(g)]=!0,l(g,c,null,f)):S==="Array"&&!f[x(g)]&&(f[x(g)]=!0,l(g,c,v,f))}}},plugins:{},highlightAll:function(l,o){n.highlightAllUnder(document,l,o)},highlightAllUnder:function(l,o,c){var d={callback:c,container:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",d),d.elements=Array.prototype.slice.apply(d.container.querySelectorAll(d.selector)),n.hooks.run("before-all-elements-highlight",d);for(var f=0,x;x=d.elements[f++];)n.highlightElement(x,o===!0,d.callback)},highlightElement:function(l,o,c){var d=n.util.getLanguage(l),f=n.languages[d];n.util.setLanguage(l,d);var x=l.parentElement;x&&x.nodeName.toLowerCase()==="pre"&&n.util.setLanguage(x,d);var v=l.textContent,g={element:l,language:d,grammar:f,code:v};function S(H){g.highlightedCode=H,n.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,n.hooks.run("after-highlight",g),n.hooks.run("complete",g),c&&c.call(g.element)}if(n.hooks.run("before-sanity-check",g),x=g.element.parentElement,x&&x.nodeName.toLowerCase()==="pre"&&!x.hasAttribute("tabindex")&&x.setAttribute("tabindex","0"),!g.code){n.hooks.run("complete",g),c&&c.call(g.element);return}if(n.hooks.run("before-highlight",g),!g.grammar){S(n.util.encode(g.code));return}if(o&&r.Worker){var M=new Worker(n.filename);M.onmessage=function(H){S(H.data)},M.postMessage(JSON.stringify({language:g.language,code:g.code,immediateClose:!0}))}else S(n.highlight(g.code,g.grammar,g.language))},highlight:function(l,o,c){var d={code:l,grammar:o,language:c};if(n.hooks.run("before-tokenize",d),!d.grammar)throw new Error('The language "'+d.language+'" has no grammar.');return d.tokens=n.tokenize(d.code,d.grammar),n.hooks.run("after-tokenize",d),i.stringify(n.util.encode(d.tokens),d.language)},tokenize:function(l,o){var c=o.rest;if(c){for(var d in c)o[d]=c[d];delete o.rest}var f=new b;return E(f,f.head,l),_(l,f,o,f.head,0),A(f)},hooks:{all:{},add:function(l,o){var c=n.hooks.all;c[l]=c[l]||[],c[l].push(o)},run:function(l,o){var c=n.hooks.all[l];if(!(!c||!c.length))for(var d=0,f;f=c[d++];)f(o)}},Token:i};r.Prism=n;function i(l,o,c,d){this.type=l,this.content=o,this.alias=c,this.length=(d||"").length|0}i.stringify=function l(o,c){if(typeof o=="string")return o;if(Array.isArray(o)){var d="";return o.forEach(function(S){d+=l(S,c)}),d}var f={type:o.type,content:l(o.content,c),tag:"span",classes:["token",o.type],attributes:{},language:c},x=o.alias;x&&(Array.isArray(x)?Array.prototype.push.apply(f.classes,x):f.classes.push(x)),n.hooks.run("wrap",f);var v="";for(var g in f.attributes)v+=" "+g+'="'+(f.attributes[g]||"").replace(/"/g,"&quot;")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'"'+v+">"+f.content+"</"+f.tag+">"};function m(l,o,c,d){l.lastIndex=o;var f=l.exec(c);if(f&&d&&f[1]){var x=f[1].length;f.index+=x,f[0]=f[0].slice(x)}return f}function _(l,o,c,d,f,x){for(var v in c)if(!(!c.hasOwnProperty(v)||!c[v])){var g=c[v];g=Array.isArray(g)?g:[g];for(var S=0;S<g.length;++S){if(x&&x.cause==v+","+S)return;var M=g[S],H=M.inside,Yt=!!M.lookbehind,Wt=!!M.greedy,Ya=M.alias;if(Wt&&!M.pattern.global){var Wa=M.pattern.toString().match(/[imsuy]*$/)[0];M.pattern=RegExp(M.pattern.source,Wa+"g")}for(var Vt=M.pattern||M,D=d.next,q=f;D!==o.tail&&!(x&&q>=x.reach);q+=D.value.length,D=D.next){var J=D.value;if(o.length>l.length)return;if(!(J instanceof i)){var Le=1,$;if(Wt){if($=m(Vt,q,l,Yt),!$||$.index>=l.length)break;var Ne=$.index,Va=$.index+$[0].length,z=q;for(z+=D.value.length;Ne>=z;)D=D.next,z+=D.value.length;if(z-=D.value.length,q=z,D.value instanceof i)continue;for(var oe=D;oe!==o.tail&&(z<Va||typeof oe.value=="string");oe=oe.next)Le++,z+=oe.value.length;Le--,J=l.slice(q,z),$.index-=q}else if($=m(Vt,0,J,Yt),!$)continue;var Ne=$.index,Ce=$[0],rt=J.slice(0,Ne),Jt=J.slice(Ne+Ce.length),st=q+J.length;x&&st>x.reach&&(x.reach=st);var Se=D.prev;rt&&(Se=E(o,Se,rt),q+=rt.length),T(o,Se,Le);var Ja=new i(v,H?n.tokenize(Ce,H):Ce,Ya,Ce);if(D=E(o,Se,Ja),Jt&&E(o,D,Jt),Le>1){var nt={cause:v+","+S,reach:st};_(l,o,c,D.prev,q,nt),x&&nt.reach>x.reach&&(x.reach=nt.reach)}}}}}}function b(){var l={value:null,prev:null,next:null},o={value:null,prev:l,next:null};l.next=o,this.head=l,this.tail=o,this.length=0}function E(l,o,c){var d=o.next,f={value:c,prev:o,next:d};return o.next=f,d.prev=f,l.length++,f}function T(l,o,c){for(var d=o.next,f=0;f<c&&d!==l.tail;f++)d=d.next;o.next=d,d.prev=o,l.length-=f}function A(l){for(var o=[],c=l.head.next;c!==l.tail;)o.push(c.value),c=c.next;return o}if(!r.document)return r.addEventListener&&(n.disableWorkerMessageHandler||r.addEventListener("message",function(l){var o=JSON.parse(l.data),c=o.language,d=o.code,f=o.immediateClose;r.postMessage(n.highlight(d,n.languages[c],c)),f&&r.close()},!1)),n;var L=n.util.currentScript();L&&(n.filename=L.src,L.hasAttribute("data-manual")&&(n.manual=!0));function y(){n.manual||n.highlightAll()}if(!n.manual){var N=document.readyState;N==="loading"||N==="interactive"&&L&&L.defer?document.addEventListener("DOMContentLoaded",y):window.requestAnimationFrame?window.requestAnimationFrame(y):window.setTimeout(y,16)}return n}(Es);typeof Xe<"u"&&Xe.exports&&(Xe.exports=h);typeof global<"u"&&(global.Prism=h);h.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};h.languages.markup.tag.inside["attr-value"].inside.entity=h.languages.markup.entity;h.languages.markup.doctype.inside["internal-subset"].inside=h.languages.markup;h.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))});Object.defineProperty(h.languages.markup.tag,"addInlined",{value:function(t,a){var s={};s["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:h.languages[a]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};n["language-"+a]={pattern:/[\s\S]+/,inside:h.languages[a]};var i={};i[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:n},h.languages.insertBefore("markup","cdata",i)}});Object.defineProperty(h.languages.markup.tag,"addAttribute",{value:function(r,t){h.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:h.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});h.languages.html=h.languages.markup;h.languages.mathml=h.languages.markup;h.languages.svg=h.languages.markup;h.languages.xml=h.languages.extend("markup",{});h.languages.ssml=h.languages.xml;h.languages.atom=h.languages.xml;h.languages.rss=h.languages.xml;(function(r){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var a=r.languages.markup;a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))})(h);h.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};h.languages.javascript=h.languages.extend("clike",{"class-name":[h.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});h.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;h.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:h.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:h.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:h.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:h.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:h.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});h.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:h.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});h.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});h.languages.markup&&(h.languages.markup.tag.addInlined("script","javascript"),h.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));h.languages.js=h.languages.javascript;(function(){if(typeof h>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading\u2026",t=function(L,y){return"\u2716 Error "+L+" while fetching file: "+y},a="\u2716 Error: File does not exist or is empty",s={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",i="loading",m="loaded",_="failed",b="pre[data-src]:not(["+n+'="'+m+'"]):not(['+n+'="'+i+'"])';function E(L,y,N){var l=new XMLHttpRequest;l.open("GET",L,!0),l.onreadystatechange=function(){l.readyState==4&&(l.status<400&&l.responseText?y(l.responseText):l.status>=400?N(t(l.status,l.statusText)):N(a))},l.send(null)}function T(L){var y=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(L||"");if(y){var N=Number(y[1]),l=y[2],o=y[3];return l?o?[N,Number(o)]:[N,void 0]:[N,N]}}h.hooks.add("before-highlightall",function(L){L.selector+=", "+b}),h.hooks.add("before-sanity-check",function(L){var y=L.element;if(y.matches(b)){L.code="",y.setAttribute(n,i);var N=y.appendChild(document.createElement("CODE"));N.textContent=r;var l=y.getAttribute("data-src"),o=L.language;if(o==="none"){var c=(/\.(\w+)$/.exec(l)||[,"none"])[1];o=s[c]||c}h.util.setLanguage(N,o),h.util.setLanguage(y,o);var d=h.plugins.autoloader;d&&d.loadLanguages(o),E(l,function(f){y.setAttribute(n,m);var x=T(y.getAttribute("data-range"));if(x){var v=f.split(/\r\n?|\n/g),g=x[0],S=x[1]==null?v.length:x[1];g<0&&(g+=v.length),g=Math.max(0,Math.min(g-1,v.length)),S<0&&(S+=v.length),S=Math.max(0,Math.min(S,v.length)),f=v.slice(g,S).join(`
`),y.hasAttribute("data-start")||y.setAttribute("data-start",String(g+1))}N.textContent=f,h.highlightElement(N)},function(f){y.setAttribute(n,_),N.textContent=f})}}),h.plugins.fileHighlight={highlight:function(y){for(var N=(y||document).querySelectorAll(b),l=0,o;o=N[l++];)h.highlightElement(o)}};var A=!1;h.fileHighlight=function(){A||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),A=!0),h.plugins.fileHighlight.highlight.apply(this,arguments)}})()});var ks={};tr(ks,{BUILD_ID:()=>ws,ClientRegistry:()=>Ha.default,TemplateDocument:()=>at,components:()=>vs,data:()=>za.default,elements:()=>Ga,emitter:()=>tt.default});var e=k(De()),Ba=k(ta()),Ha=k(P()),tt=k(pe()),za=k(G());var aa=k(P()),ra=k(U()),K=class extends ra.default{static id="90ffea9b799a24d212c6";static tagname="panel";static classname="Panel_90ffea9b799a24d212c6";styles(){return""}template(){let t=this.originalChildren,a={main:t.find(i=>i.nodeName==="MAIN"),head:t.find(i=>i.nodeName==="HEADER"),foot:t.find(i=>i.nodeName==="FOOTER"),left:t.find(i=>i.nodeName==="ASIDE"&&i.hasAttribute("left")),right:t.find(i=>i.nodeName==="ASIDE"&&i.hasAttribute("right"))},s={left:!1,right:!1};this.toggle=i=>{s[i]=!s[i],n.all()};let n={all(){a.main&&this.main(),a.head&&this.head(),a.foot&&this.foot(),a.left&&this.left(),a.right&&this.right()},head(){let{classList:i}=a.head;i.add("absolute","top-0","right-0","h-60","transition-500"),a.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),s.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0"))},foot(){let{classList:i}=a.foot;i.add("absolute","bottom-0","right-0","h-60","transition-500"),a.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),s.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0"))},left(){let{classList:i}=a.left;i.add("w-226","absolute","bottom-0","left-0","top-0","transition-500"),s.left?(i.remove("md-left--226"),i.add("md-left-0")):(i.remove("md-left-0"),i.add("md-left--226"))},right(){let{classList:i}=a.right;i.add("w-200","absolute","right-0","transition-500"),a.foot?(i.remove("bottom-0"),i.add("bottom-60")):(i.remove("bottom-60"),i.add("bottom-0")),a.head?(i.remove("top-0"),i.add("top-60")):(i.remove("top-60"),i.add("top-0")),s.right?(i.remove("lg-right--200"),i.add("lg-right-0")):(i.remove("lg-right-0"),i.add("lg-right--200"))},main(){let{classList:i}=a.main;i.add("absolute","transition-500"),a.head?(i.remove("top-0"),i.add("top-60")):(i.remove("top-60"),i.add("top-0")),a.foot?(i.remove("bottom-0"),i.add("bottom-60")):(i.remove("bottom-60"),i.add("bottom-0")),a.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),a.right?(i.remove("right-0"),i.add("right-200")):(i.remove("right-200"),i.add("right-0")),s.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0")),s.right?(i.remove("lg-right-0"),i.add("lg-right-200")):(i.remove("lg-right-200"),i.add("lg-right-0"))}};return n.all(),this.classList.add("block","relative","w-full","vh","scroll-hidden"),()=>[aa.default.createText(`
`,!1),...this._toNodeList(t)]}};var Ft=k(P()),na=k(U()),ia=k(_e()),Ye=k(St()),la=k(sa()),oa=k(Dt()),X=class extends na.default{static id="43576086a0decde1b1c5";static tagname="alert";static classname="Alert_43576086a0decde1b1c5";styles(){return""}template(){let{outline:t,solid:a,transparent:s,padding:n}=this.props,i=new ia.default;return this.styles=()=>i.toString(),(0,oa.default)(this.props,i,"block",":host"),i.add(":host","padding",n?`${n}px`:"16px"),(0,la.default)(this.props,i,!1,":host"),t||s?((0,Ye.default)(this.props,i,"var(--muted)",":host","color"),(0,Ye.default)(this.props,i,"var(--muted)",":host","border-color"),i.add(":host","border-style","solid"),i.add(":host","border-width","1px"),t&&i.add(":host","background-color","var(--white)")):(i.add(":host","color","var(--white)"),(0,Ye.default)(this.props,i,"var(--muted)",":host","background-color")),()=>[Ft.default.createText(`
`,!1),Ft.default.createElement("slot",{},[]).element]}};var We=k(P()),ua=k(U()),da=k(_e()),fa=k(St()),ma=k(Dt()),ha=k(ca()),ee=class extends ua.default{static id="1c96bccca2a2e3f817d1";static tagname="icon";static classname="Icon_1c96bccca2a2e3f817d1";styles(){return""}template(){let{name:t,solid:a,brand:s}=this.props,n=new da.default;this.styles=()=>n.toString(),(0,ma.default)(this.props,n,"inline-block",":host"),(0,fa.default)(this.props,n,!1,":host","color"),(0,ha.default)(this.props,n,!1,":host","font-size");let i=["fa-fw",`fa-${t}`];return i.push(s?"fa-brands":"fa-solid"),()=>[We.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"}).element,We.default.createText(`
`,!1),We.default.createElement("i",{class:i.join(" ")},[]).element]}};var Ht=k(P()),Pa=k(U()),Ke=k(Ae()),se=class extends Pa.default{static id="3e2f9d1245032407693b";static tagname="docs";static classname="Docs_3e2f9d1245032407693b";styles(){return""}template(){return(0,Ke.classlist)().add("block","w-full","h-full","scroll-y-auto","scroll-x-hidden"),()=>[Ht.default.createText(`
`,!1),Ht.default.createElement("article",{class:"block p-10 tx-t-1"},[...this._toNodeList((0,Ke.children)())]).element]}};var O=k(P()),Ia=k(U()),Qe=k(Ae()),ne=class extends Ia.default{static id="d640748373b32ef31882";static tagname="app";static classname="App_d640748373b32ef31882";styles(){return""}template(){let{title:t,height:a}=(0,Qe.props)(),s=a?`height:${a}px`:"";return()=>[O.default.createText(`
`,!1),O.default.createElement("div",{class:"curved scroll-hidden shadow-0-0-10-0-0-0-5"},[O.default.createText(`
  `,!1),O.default.createElement("div",{class:"relative flex flex-center-y gap-10 p-10 bg-t-1 tx-c-999999 tx-16"},[O.default.createText(`
    `,!1),O.default.createElement("span",{class:"bg-h-999999 pill h-10 w-10"},[]).element,O.default.createText(`
    `,!1),O.default.createElement("span",{class:"bg-h-999999 pill h-10 w-10"},[]).element,O.default.createText(`
    `,!1),O.default.createElement("span",{class:"bg-h-999999 pill h-10 w-10"},[]).element,O.default.createText(`
    `,!1),O.default.createElement("span",{class:"flex flex-center h-full w-full absolute top-0 left-0"},[O.default.createText(`
      `,!1),...this._toNodeList(t),O.default.createText(`
    `,!1)]).element,O.default.createText(`
  `,!1)]).element,O.default.createText(`
  `,!1),O.default.createElement("div",{class:"bg-black tx-t-1 relative",style:s},[...this._toNodeList((0,Qe.children)())]).element,O.default.createText(`
`,!1)]).element]}};var C=k(P()),$a=k(U()),zt=k(Ra()),qa=k(Ae()),ie=class extends $a.default{static id="07bacf6bf1ae49080e95";static tagname="code";static classname="Code_07bacf6bf1ae49080e95";styles(){return`:host {
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
  }`}template(){let t=this.props,{lang:a="markup",numbers:s=!1,inline:n=!1,trim:i=!1,ltrim:m=!1,rtrim:_=!1,detab:b=0}=t,E=(0,qa.children)(),T=E[0]?.textContent||"";b&&(T=T.replace(new RegExp(`\\n {${b}}`,"g"),`
`)),i?T=T.trim():m?T=T.replace(/^\s+/,""):_&&(T=T.replace(/\s+$/,""));let A=L=>{if(!T)return;let y=zt.default.highlight(T,zt.default.languages[a],a);if(L.detail.target.innerHTML=y,s){let N=y.match(/\n(?!$)/g),l=N?N.length+1:1,o=new Array(l+1).join("<span></span>"),c=document.createElement("span");c.setAttribute("aria-hidden","true"),c.className="line-numbers-rows",c.innerHTML=o,L.detail.target.appendChild(c)}};return()=>[C.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css"}).element,C.default.createText(`
`,!1),C.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-tomorrow.min.css"}).element,C.default.createText(`
`,!1),...a==="bash"?[C.default.createText(`
  `,!1),C.default.createElement("div",{class:"terminal"},[C.default.createElement("span",{},[C.default.createText("$",!1)]).element,C.default.createText(" ",!1),...this._toNodeList(E)]).element,C.default.createText(`
`,!1)]:T?[,C.default.createText(`
  `,!1),...s?[C.default.createText(`
    `,!1),C.default.createElement("pre",{class:"snippet line-numbers"},[C.default.createElement("code",{mount:A},[]).element]).element,C.default.createText(`
  `,!1)]:[,C.default.createText(`
    `,!1),C.default.createElement("pre",{class:"snippet pad"},[C.default.createElement("code",{mount:A},[]).element]).element,C.default.createText(`
  `,!1)],C.default.createText(`
`,!1)]:[,C.default.createText(`
  `,!1),C.default.createElement("span",{},[C.default.createText("????",!1)]).element,C.default.createText(`
`,!1)],C.default.createText(`

`,!1)]}};var R=k(P()),Ua=k(U());var p=function(r,...t){let a=Gt(r);for(let s=0;s<t.length;s++)a=a.replace("%s",String(t[s]));return a},Gt=function(r){return r};var le=class extends Ua.default{static id="ac78a9f3111e4c80978c";static tagname="translate";static classname="Translate_ac78a9f3111e4c80978c";styles(){return""}template(){let{trim:t=!1,p:a=!1,li:s=!1,div:n=!1}=this.props,i=this.originalChildren,m=[],_=[];for(let A of i)typeof A=="string"?m.push(A):A instanceof Node&&A.textContent?m.push(A.textContent):(m.push("%s"),_.push(A));let b=m.join("");t&&(b=b.replace(/\s+/," ").trim());let E=Gt(b).split("%s"),T=[];for(let A=0;A<E.length;A++)T.push(document.createTextNode(E[A])),_[A]&&T.push(_[A]);return()=>[R.default.createText(`
    `,!1),...a?[R.default.createText(`
      `,!1),R.default.createElement("p",{},[...this._toNodeList(T)]).element,R.default.createText(`
    `,!1)]:s?[,R.default.createText(`
      `,!1),R.default.createElement("li",{},[...this._toNodeList(T)]).element,R.default.createText(`
    `,!1)]:n?[,R.default.createText(`
      `,!1),R.default.createElement("div",{},[...this._toNodeList(T)]).element,R.default.createText(`
    `,!1)]:[,R.default.createText(`
      `,!1),...this._toNodeList(T),R.default.createText(`
    `,!1)]]}};var et=k(Ae());var at=class r extends Ba.default{static sync(){return new r().sync()}template(){let t="/docs/markup-syntax.html",a=p("Markup Syntax - Ink reactive web component template engine."),s=p("Learn how to write markup in Ink."),n=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[e.default.createText(`
`,!1),e.default.createElement("html",{},[e.default.createText(`
  `,!1),e.default.createElement("head",{},[e.default.createText(`
  `,!1),e.default.createElement("meta",{charset:"utf-8"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.default.createText(`
  `,!1),e.default.createElement("title",{},[...this._toNodeList(a)]),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"description",content:s}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:title",content:a}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:description",content:s}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:type",content:"website"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:card",content:"summary"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:site",content:"@stackpress"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:title",content:a}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:description",content:s}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,et.env)("BUILD_ID")}.css`}),e.default.createElement("script",{"data-template":!0,type:"text/json"},[e.default.createText("__TEMPLATE_DATA__",!0)]),e.default.createText(`
  `,!1),e.default.createElement("script",{src:`/ink/build/client/${(0,et.env)("BUILD_ID")}.js`}),e.default.createText(`
  `,!1),...(0,et.env)("PUBLIC_ENV")==="development"?[e.default.createText(`
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
    `,!1),...this._toNodeList(p("Introduction")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/index.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(p("Features")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(p("Usage")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(p("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
`,!1)])]),e.default.createText(`
      `,!1),e.default.createElement("aside",{right:!0},[e.default.createText(`
        `,!1),e.default.createElement("menu",{class:"m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto"},[e.default.createText(`
          `,!1),e.default.createElement("h6",{class:"tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper"},[e.default.createText(`
            `,!1),...this._toNodeList(p("On this page")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("nav",{class:"tx-14 tx-lh-32"},[e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#imports"},[...this._toNodeList(p("Imports"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#styles"},[...this._toNodeList(p("Styles"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#scripts"},[...this._toNodeList(p("Scripts"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#markup"},[...this._toNodeList(p("Markup"))]),e.default.createText(`
            `,!1),e.default.createElement("nav",{class:"pl-20"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-t-1",href:"#tagnames"},[...this._toNodeList(p("Tag Names"))]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-t-1",href:"#attributes"},[...this._toNodeList(p("Attributes"))]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-t-1",href:"#conditionals"},[...this._toNodeList(p("Conditionals"))]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-t-1",href:"#iterations"},[...this._toNodeList(p("Iterations"))]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-t-1",href:"#trycatch"},[...this._toNodeList(p("Try/Catch"))]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
      `,!1),e.default.createElement("main",{},[e.default.createText(`
        `,!1),e.default.createElement("api-docs",{},[e.default.createText(`
          `,!1),e.default.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},[e.default.createText(`
            `,!1),...this._toNodeList(p("Markup Syntax")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Components are the building blocks of Ink files. Documents 
            and page level markup are written in 
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText(".ink",!1)]),e.default.createText(` files. Components 
            and templates are written in 
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText(".ink",!1)]),e.default.createText(` files. In both 
            cases, the code is written in a superset of HTML.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The four sections that make up a ink file \u2014 imports, 
            script, styles and markup \u2014 are all optional and can be 
            used in any order.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Code Structure",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,detab:14},[...this._toNodeList(`
              <!-- imports go here -->

              <style>
                /* styles go here */
              </style>

              <script>
                // logic goes here
              <\/script>
              
              <!-- HTML goes here -->
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"imports"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(p("Imports")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Imports are used to include additional components, templates 
            and stylesheets in the current component. Components can 
            be imported as a `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("template",!1)]),e.default.createText(` or 
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("component",!1)]),e.default.createText(` type.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Import Examples",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/prism.min.css" />
              <link rel="stylesheet" type="text/css" href="/styles/layout.css" />
              <link rel="import" type="template" href="@/components/html-head.ink" />
              <link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />

              <style>
                /* styles go here */
              </style>

              <script>
                // logic goes here
              <\/script>
              
              <!-- HTML goes here -->
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("rel",!1)]),e.default.createText(` attribute 
            specifies the relationship between the current document and 
            the linked resource. 
            
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText('rel="import"',!1)]),e.default.createText(` denotes
            that the imported resource is a component or template.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("type",!1)]),e.default.createText(` 
            attribute specifies the type of the linked resource. 
            
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText('type="component"',!1)]),e.default.createText(` 
            imports a web component that can be used as regular markup
            with attributes and children. 
            
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText('type="template"',!1)]),e.default.createText(` 
            imports a template partial that can be included in the current 
            markup. Template partials do not process attributes or children
            if given.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The 
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("href",!1)]),e.default.createText(` attribute specifies
            the URL of the linked resource. The 
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("name",!1)]),e.default.createText(`
            attribute specifies the tag name of the imported component or template.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"styles"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(p("Styles")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            CSS styles inside a `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<style>")]),e.default.createText(` 
            block enables the native `,!1),e.default.createElement("a",{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM"},[e.default.createText("shadow DOM",!1)]),e.default.createText(` and will be scoped only to that component. 
            Additionally styles defined outside of the component such as 
            global styles will not affect the component.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            External stylesheets can be imported using the 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<link>")]),e.default.createText(` tag or using 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("@import()")]),e.default.createText(` CSS directive. 
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can use host selectors to style an element from within 
            a component. The `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList(":host")]),e.default.createText(` 
            pseudo-class always applies styles to the root element of the 
            web component.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Using :host",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <style>
                :host {
                  display: block;
                }
              </style>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can also add conditional styles using the 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList(":host")]),e.default.createText(` selector function. 
            This can be used to style the host so long as it matches the 
            given selector. For example, it can be used to select for 
            hosts that have a given attribute or class.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:":host Conditionals",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <style>
                :host([active]) {
                  background-color: #333;
                  color: #FFF;
                }
                :host(.active) {
                  background-color: #333;
                  color: #FFF;
                }
              </style>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"scripts"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(p("Scripts")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<script>")]),e.default.createText(` block is used 
            to write TypeScript logic for the component. The script block 
            can be used to define variables, functions, and event listeners.
            Variables declared (or imported) at the top level are 
            'visible' from the component's markup. 
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Top-Level Variables",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <script>
                const title = 'Hello World';
              <\/script>

              <h1>{title}</h1>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<script>")]),e.default.createText(` block can also 
            be used to import variables from other components to be used
            in the markup.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Importing Files",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <script>
                import getTitle from './getTitle';
                const title = getTitle();
              <\/script>

              <h1 title={title}>{title}</h1>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can use `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("@/")]),e.default.createText(` to prefix the 
            current working directory. This is useful when importing
            files completely in a separate directory in your project
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"@ Imports",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <script>
                import getTitle from '@/data/getTitle';
                const title = getTitle();
              <\/script>

              <h1 title={title}>{title}</h1>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"markup"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(p("Markup")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            In order to be closer to the native, Ink follows the same 
            standards and conventions as HTML5 web components. Ink 
            components are compiled to native web components that possibly 
            can be used in other projects any modern browser.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"tagnames"},[]),e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},[e.default.createText(`
            `,!1),...this._toNodeList(p("Tag Names")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            For web components it's recommended that tag names must have 
            at least one dash (-) in them. As such you probably want to 
            name your element with two distinct words like 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("i18n-translate")]),e.default.createText(`. You can 
            use as many dashes as you want, you're not limited to one. 
            Some specific rules to follow in order to make a valid tag 
            name:
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ul",{},[e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              It must use all lowercase characters of the alphabet (a-z).
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              It must contain at least one dash (-). Ink will 
              auto prefix component names based on your configuration.
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              It must not be an already reserved tag name including 
              `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("annotation-xml",!1)]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("color-profile",!1)]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("font-face",!1)]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("font-face-src",!1)]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("font-face-uri",!1)]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("font-face-format",!1)]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("font-face-name",!1)]),e.default.createText(`, and 
              `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("missing-glyph",!1)]),e.default.createText(`.
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              It must not contain symbols, like =, @, $.
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              It can contain underscores, and numbers.
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              It can contain characters from different alphabets, 
              such as \xE9, \xF0, \xF6, \u7231.
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Additionally, Ink works best with correct markup. The 
            following standards should be followed:
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ul",{},[e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              Self closing tags like 
              `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<img />")]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<link />")]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<meta />")]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<input />")]),e.default.createText(`
              must have a slash before the closing.
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              When using tables, rows should be wrapped in a 
              `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<tbody>")]),e.default.createText(` tag and cells
              should be wrapped in a `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<tr>")]),e.default.createText(` 
              tag. ie. `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<table><tbody><tr><td>")]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              When using lists, items should be wrapped in a 
              `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<ul>")]),e.default.createText(` or 
              `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<ol>")]),e.default.createText(` tags.
              ie. `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<ul><li>")]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("element-alert",{solid:!0,curved:!0,secondary:!0,class:"my-20 tx-lh-24"},[e.default.createText(`
            `,!1),e.default.createElement("element-icon",{name:"exclamation-triangle"}),e.default.createText(`
            `,!1),e.default.createElement("strong",{},[e.default.createText("Warning:",!1)]),e.default.createText(` Any markup auto corrected by browser will cause data syncing 
            issues with Ink.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Ink components can loosely be self closing
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<i18n-translate />")]),e.default.createText(`
            or expressed as a block
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<i18n-translate></i18n-translate>")]),e.default.createText(`.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"attributes"},[]),e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},[e.default.createText(`
            `,!1),...this._toNodeList(p("Attributes")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Markup Expressions"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <a title={title} {href} {...attributes}>
                {title}
              </a>
              <i18n-translate title=title>
                {detail}
              </i18n-translate>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Attributes can be bound to expressions using the 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("{}")]),e.default.createText(` syntax. 
            Expressions can be variables, functions, or any valid 
            JavaScript expression. By default, attributes work exactly 
            like their HTML counterparts.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{trim:!0},[...this._toNodeList(`
              <button type="button" disabled>Submit</button>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Traditional HTML attributes can be assigned string values or 
            no value evaluates as `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("true")]),e.default.createText(`.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{trim:!0},[...this._toNodeList(`
            <a title={title}>Click</a>
          `)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Attributes can be assigned variable names.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{trim:!0},[...this._toNodeList(`
            <a title=title>Click</a>
          `)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Variable names do not need to be wrapped in curly braces
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("{}")]),e.default.createText(`.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{trim:!0},[...this._toNodeList(`
            <a {title}>Click</a>
          `)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Attributes with the same name as a variable can be assigned
            by just wrapping curly braces. ie. 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("{title}")]),e.default.createText(`.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{trim:!0,detab:14},[...this._toNodeList(`
              <script>
                const attributes = { target: '_blank' };
              <\/script>
              <a {...attributes}>Click</a>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Spread operators can be used to assign multiple attributes.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <script>
                let count = 10
                const metadata = { foo: 'bar', baz: 1, qux: true };
                const data = () => metadata
              <\/script>
              <a {count} get={data} data-meta={metadata} disable={count < 10}>
                Click
              </a>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can assign any valid JavaScript expression to an attribute.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"conditionals"},[]),e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},[e.default.createText(`
            `,!1),...this._toNodeList(p("Conditionals")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Conditionals",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <if true={count > 10}>
                <p>Count is greater than 10</p>
              <elif true={count < 5} />
                <p>Count is less than 5</p>
              <else />
                <p>Count is between 5 and 10</p>
              </if>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Conditionals can be used to show or hide elements based on 
            the value of a variable.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <if true={count > 10}>
                <p>Count is greater than 10</p>
              </if>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The basic syntax for an if statement looks like this and can be 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("truesy")]),e.default.createText(` or 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("falsey")]),e.default.createText(`.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <if false={count > 10}>
                <p>Count is not greater than 10</p>
              </if>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can also use the `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("false")]),e.default.createText(`
            attribute to negate the condition.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <if true={count > 10}>
                <p>Count is greater than 10</p>
              <else />
                <p>Count is less than or equal to 10</p>
              </if>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can use the `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("else")]),e.default.createText(` block to 
            show content when the condition is false.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:12},[...this._toNodeList(`
            <if true={count > 10}>
              <p>Count is greater than 10</p>
            <elif true={count < 5} />
              <p>Count is less than 5</p>
            </if>
          `)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can use the `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("elif")]),e.default.createText(` block to 
            show content when the previous condition is false.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"iterations"},[]),e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},[e.default.createText(`
            `,!1),...this._toNodeList(p("Iterations")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Each",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <each key=index value=article from=articles>
                <h1>#{index + 1} {article.title}</h1>
                <p>{article.body}</p>
              </each>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<each>")]),e.default.createText(` block can be used 
            to iterate over an array of items or objects.
            The `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("from")]),e.default.createText(` attribute value is 
            required and can be an array, object or JavaScript expression 
            that evaluates to an array or object. Both the 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("key")]),e.default.createText(` and 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("value")]),e.default.createText(` attributes are optional.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <each value={article} from={articles}>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
              </each>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The value of `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("value")]),e.default.createText(`, in this 
            case `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("article")]),e.default.createText(` can be used 
            only with in the block. This can be any valid JavaScript 
            variable name.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:12},[...this._toNodeList(`
            <each key={index} from={[1, 2, 3]}>
              <h1>#{index} ???</h1>
            </each>
          `)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The value of `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("key")]),e.default.createText(`, in this 
            case `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("index")]),e.default.createText(` can be used 
            only with in the block. This can be any valid JavaScript 
            variable name.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"trycatch"},[]),e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},[e.default.createText(`
            `,!1),...this._toNodeList(p("Try/Catch")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Try/Catch Example",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <try>
                <p>{mayCauseError()}</p>
              <catch error={e} />
                <p>Error: {e.message}</p>
              </try>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<try><catch>")]),e.default.createText(` block can 
            be used to catch errors that occur in the block. The 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<catch>")]),e.default.createText(` block is required and 
            can be used to handle the error.

            The value of `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("error")]),e.default.createText(`, in the  
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<catch>")]),e.default.createText(` block in this case
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("e")]),e.default.createText(` is an 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("Error")]),e.default.createText(` object
            that can only be used with in the block. 
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("nav",{class:"flex"},[e.default.createText(`
            `,!1),e.default.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/getting-started.html"},[e.default.createText(`
              `,!1),e.default.createElement("element-icon",{name:"chevron-left",theme:"tx-1"}),e.default.createText(`
              `,!1),...this._toNodeList(p("Getting Started")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/state-management.html"},[e.default.createText(`
              `,!1),...this._toNodeList(p("State Management")),e.default.createText(`
              `,!1),e.default.createElement("element-icon",{name:"chevron-right",theme:"tx-1"}),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("footer",{class:"foot"},[]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]),e.default.createText(`
`,!1)])]}},vs={PanelLayout_90ffea9b799a24d212c6:K,ElementAlert_43576086a0decde1b1c5:X,ElementIcon_1c96bccca2a2e3f817d1:ee,ApiDocs_3e2f9d1245032407693b:se,IdeApp_d640748373b32ef31882:ne,IdeCode_07bacf6bf1ae49080e95:ie,I18nTranslate_ac78a9f3111e4c80978c:le},Ga={"panel-layout":K,"element-alert":X,"element-icon":ee,"api-docs":se,"ide-app":ne,"ide-code":ie,"i18n-translate":le},ws="a98612416a44af00aabd";tt.default.once("ready",()=>{at.sync();for(let[r,t]of Object.entries(Ga))customElements.getName(t)||customElements.define(r,t);tt.default.emit("mounted",document.body)});return ar(ks);})();
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
