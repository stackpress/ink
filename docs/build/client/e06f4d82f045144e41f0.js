var InkAPI=(()=>{var gs=Object.create;var Ue=Object.defineProperty;var ys=Object.getOwnPropertyDescriptor;var bs=Object.getOwnPropertyNames;var Ts=Object.getPrototypeOf,ks=Object.prototype.hasOwnProperty;var I=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports),vs=(s,t)=>{for(var r in t)Ue(s,r,{get:t[r],enumerable:!0})},dr=(s,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of bs(t))!ks.call(s,n)&&n!==r&&Ue(s,n,{get:()=>t[n],enumerable:!(a=ys(t,n))||a.enumerable});return s};var k=(s,t,r)=>(r=s!=null?gs(Ts(s)):{},dr(t||!s||!s.__esModule?Ue(r,"default",{value:s,enumerable:!0}):r,s)),Es=s=>dr(Ue({},"__esModule",{value:!0}),s);var ee=I(vt=>{"use strict";Object.defineProperty(vt,"__esModule",{value:!0});var kt=class{constructor(){this._parent=null}get parent(){return this._parent}get parentElement(){return this._parent}set parent(t){this._parent=t}};vt.default=kt});var _t=I(be=>{"use strict";var _s=be&&be.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(be,"__esModule",{value:!0});var ws=_s(ee()),Et=class extends ws.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#comment",this.type=8,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!--${this.value}-->`}};be.default=Et});var At=I(Te=>{"use strict";var As=Te&&Te.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Te,"__esModule",{value:!0});var Ds=As(ee()),wt=class extends Ds.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#doctype",this.type=10,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!DOCTYPE ${this.value}>`}};Te.default=wt});var It=I(ke=>{"use strict";var Is=ke&&ke.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ke,"__esModule",{value:!0});var js=Is(ee()),Ls=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],Dt=class s extends js.default{get attributes(){return Object.fromEntries(this._attributes)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof s)}get nodeName(){return this.name.toUpperCase()}get nodes(){let t=[this];return this._flatten(Array.from(this.children),t),t}get nodeType(){return this.type}get parent(){return this._parent}set parent(t){this._parent=t}constructor(t,r={},a=[]){super(),this.type=1,this._parent=null,this.name=t,this._attributes=new Map(Object.entries(r)),this.children=new Set(a.filter(Boolean))}appendChild(t){return this.children.add(t),t.parent=this,this}export(){return{type:this.type,name:this.name,attributes:Object.fromEntries(this._attributes.entries()),children:Array.from(this.children).map(t=>t.export())}}getAttribute(t){return this._attributes.get(t)}hasAttribute(t){return this._attributes.has(t)}removeAttribute(t){return this._attributes.delete(t),this}removeChild(t){this.children.delete(t),t.parent=null}setAttribute(t,r){return this._attributes.set(t,r),this}toString(){let t=Array.from(this._attributes.entries()),r=t.length>0?" "+t.map(([n,i])=>{if(typeof i=="string"&&!/["<>\n]/.test(i))return`${n}="${i}"`;if(typeof i=="boolean")return i?n:""}).join(" "):"";if(Ls.includes(this.name))return`<${this.name}${r} />`;let a=Array.from(this.children.values()).map(n=>n.toString()).join("");return`<${this.name}${r}>${a}</${this.name}>`}_flatten(t,r){t.forEach(a=>{r.push(a),a instanceof s&&this._flatten(Array.from(a.children),r)})}};ke.default=Dt});var Lt=I(ve=>{"use strict";var Ss=ve&&ve.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ve,"__esModule",{value:!0});var Ns=Ss(ee()),jt=class extends Ns.default{get nodeName(){return"#text"}get nodeType(){return this.type}get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,r=!1){super(),this.name="#text",this.type=3,this._escape=r,this._value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return this.value}};ve.default=jt});var Ge=I(Ee=>{"use strict";var ze=Ee&&Ee.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ee,"__esModule",{value:!0});var Cs=ze(_t()),Rs=ze(At()),St=ze(It()),Os=ze(Lt()),Nt=class s{static createComment(t,r){let a=new Cs.default(t);return r&&(a.parent=r),a}static createDoctype(t="html",r){let a=new Rs.default(t);return r&&(a.parent=r),a}static createElement(t,r={},a=[],n){let i=new St.default(t,r,a);return n&&(i.parent=n),i}static createText(t,r=!1,a){let n=new Os.default(t,r);return a&&(n.parent=a),n}static import(t,r){return t.map(a=>{let{value:n}=a,{name:i,attributes:d,children:h}=a;switch(a.type){case 1:let y=this.createElement(i,d,[],r);return s.import(h,y).forEach(E=>y.appendChild(E)),y;case 3:return this.createText(n,!0,r);case 8:return this.createComment(n,r);case 10:return this.createDoctype(n,r)}return null}).filter(Boolean)}static load(t){return new s(t)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof St.default)}get nodes(){return Array.from(this.children).map(t=>t instanceof St.default?t.nodes:[t]).flat()}constructor(t){this.children=new Set(t.filter(Boolean))}export(){return this.childList.map(t=>t.export())}toString(){return Array.from(this.children).map(t=>t.toString()).join("")}};Ee.default=Nt});var V=I(_e=>{"use strict";Object.defineProperty(_e,"__esModule",{value:!0});_e.TemplateData=void 0;var Je=class{constructor(){window.__TEMPLATE_DATA__||(window.__TEMPLATE_DATA__={})}clear(){return window.__TEMPLATE_DATA__={},this}delete(t){return this.has(t)?(delete window.__TEMPLATE_DATA__[t],!0):!1}entries(){return Object.entries(window.__TEMPLATE_DATA__)}has(t){return t in window.__TEMPLATE_DATA__}get(t){return window.__TEMPLATE_DATA__[t]}keys(){return Object.keys(window.__TEMPLATE_DATA__)}set(t,r){return window.__TEMPLATE_DATA__[t]=r,this}values(){return Object.values(window.__TEMPLATE_DATA__)}};_e.TemplateData=Je;var Ms=new Je;_e.default=Ms});var we=I(M=>{"use strict";var Ps=M&&M.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(M,"__esModule",{value:!0});M.match=M.ClientEmitter=M.events=void 0;M.bindAttribute=We;M.unbindAttribute=Ct;var ur=Ps(C());M.events=["click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","wheel","keydown","keypress","keyup","blur","change","contextmenu","focus","input","submit","invalid","reset","search","select","copy","cut","paste","drag","dragstart","dragend","dragover","dragenter","dragleave","drop","scroll","durationchange","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","animationstart","animationend","animationiteration","transitionend","toggle"];var Ve=class extends EventTarget{emit(t,r){return this.dispatchEvent(new CustomEvent(t,{detail:r})),this}on(t,r){if(t==="ready"&&document.readyState!=="loading"){let a=new CustomEvent("ready");return setTimeout(()=>r(a),1),this}return this.addEventListener(t,r),this}once(t,r){let a=n=>{this.unbind(t,a),r(n)};return this.on(t,a),this}unbind(t,r){return this.removeEventListener(t,r),this}};M.ClientEmitter=Ve;var Fs=(s,t,r=!0)=>Array.from(s.querySelectorAll("*")).filter(a=>{let n=ur.default.get(a),i=n&&n.hasAttribute(t)&&(!r||!n.hasEvent(t));return i&&n.addEvent(t),i}).map(a=>ur.default.get(a));M.match=Fs;function We(s,t){Ye.on("mounted",r=>{if(!r.detail)return;let a=r.detail;(0,M.match)(a.shadowRoot||a,s).forEach(t)})}function Ct(s,t){Ye.on("unmounted",r=>{if(!r.detail)return;let a=r.detail;(0,M.match)(a.shadowRoot||a,s,!1).forEach(t)})}var Ye=new Ve;M.default=(document.onreadystatechange=()=>{document.readyState!=="loading"&&Ye.emit("ready")},We("mount",s=>{let t=s.getAttribute("mount");if(typeof t=="function"){let r=new CustomEvent("mount",{detail:{node:s,target:s.element}});t(r)}}),Ct("unmount",s=>{let t=s.getAttribute("unmount");if(typeof t=="function"){let r=new CustomEvent("unmount",{detail:{node:s,target:s.element}});t(r)}}),We("if",s=>{let t=s.getAttribute("if");(t===!1||t==="false"||typeof t=="function"&&!t())&&s.element.remove()}),M.events.forEach(s=>{We(s,t=>{let r=t.getAttribute(s);typeof r=="function"&&(t.element.removeEventListener(s,r),t.element.addEventListener(s,r))}),Ct(s,t=>{let r=t.getAttribute(s);typeof r=="function"&&t.element.removeEventListener(s,r)})}),Ye)});var Ze=I(Ae=>{"use strict";var qs=Ae&&Ae.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ae,"__esModule",{value:!0});var Rt=qs(we()),Ot=class{get attributes(){return Object.assign({},this._attributes)}get element(){return this._element}get events(){return this._events}constructor(t,r){this._events=new Set,this._element=t,this._attributes=r}addEvent(t){return this._events.add(t),this}camel(){return Object.fromEntries(Object.entries(this._attributes).map(([t,r])=>t==="class"?["className",r]:[t.replace(/-([a-z])/g,(n,i)=>i.toUpperCase()).replaceAll("-",""),r]))}getAttribute(t){return this._attributes[t]}hasAttribute(t){return t in this._attributes}hasEvent(t){return this._events.has(t)}removeAttribute(t,r=!1){let a=this.getAttribute(t);return typeof a>"u"?this:(delete this._attributes[t],r||Rt.default.emit("attribute-remove",{element:this,key:t,previous:a}),this)}setAttribute(t,r,a=!1){if(typeof r>"u")return this.removeAttribute(t,a);let n=this.getAttribute(t);return n===r?this:(this._attributes[t]=r,a||(typeof n>"u"?Rt.default.emit("attribute-create",{element:this,key:t,value:r}):Rt.default.emit("attribute-update",{element:this,key:t,value:r,previous:n})),this)}setAttributes(t,r=!1){for(let[n,i]of Object.entries(t))this.setAttribute(n,i,r);let a=Object.keys(t);for(let n of Object.keys(this._attributes))a.includes(n)||this.removeAttribute(n,r);return this}tree(t,r,a){if(t||(t=Object.assign({},this._attributes)),r){let i=r.split("-");if(i.length>0){let d=i.shift();i.length>0?(t[d]||(t[d]={}),this.tree(t[d],i.join("-"),a)):t[d]=a}return t}let n={};for(let[i,d]of Object.entries(t))this.tree(n,i,d);return n}};Ae.default=Ot});var Pt=I(Mt=>{"use strict";Object.defineProperty(Mt,"__esModule",{value:!0});Mt.default=()=>window.InkAPI});var C=I(De=>{"use strict";var hr=De&&De.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(De,"__esModule",{value:!0});var mr=hr(Ze()),$s=hr(Pt()),fr=document.createElement("textarea"),Bs=s=>(fr.innerHTML=s,fr.value),Ke=class s{static get elements(){return this._elements}static createComponent(t,r,a={},n=[]){var i;let{registered:d}=r;if(!d&&!(!((i=(0,$s.default)())===null||i===void 0)&&i.elements[t]))return this.createVirtualComponent(t,r,a,n);let h=d||t,y=document.createElement(h);customElements.whenDefined(h).then(()=>{customElements.upgrade(y),y.initiated||y.connectedCallback()});let E=s.register(y,a);E.setAttributes(a,!0);for(let[T,A]of Object.entries(a))typeof A=="string"?y.setAttribute(T,A):A===!0&&y.setAttribute(T,"");return this._cleanChildren(n).forEach(T=>y.appendChild(T)),E}static createElement(t,r={},a=[]){let n=document.createElement(t);for(let[i,d]of Object.entries(r))typeof d=="string"?n.setAttribute(i,d):d===!0&&n.setAttribute(i,"");return this._cleanChildren(a).forEach(i=>n.appendChild(i)),this.register(n,r)}static createText(t,r=!0){return document.createTextNode(Bs(t))}static createVirtualComponent(t,r,a={},n=[]){let i=document.createElement(t);return i.definition=r,Object.setPrototypeOf(i,r.prototype),i.constructor=r.constructor,i.constructor.id=r.id,i.constructor.tagname=r.tagname,i.constructor.classname=r.classname,r.observedAttributes&&(i.constructor.observedAttributes=r.observedAttributes),i.register(a,n),i.element}static cloneElement(t,r=!1){var a;let n=t;if(n.definition){let i=n.originalChildren||[];return this.createComponent(n.nodeName.toLowerCase(),n.definition,n.props||{},r?i.map(d=>this.cloneElement(d,r)):[]).element}else if(t instanceof HTMLElement){let i=Array.from(t.childNodes);return this.createElement(t.nodeName.toLowerCase(),this.has(t)?(a=this.get(t))===null||a===void 0?void 0:a.attributes:Object.fromEntries(Array.from(t.attributes).map(d=>[d.name,d.value])),r?i.map(d=>this.cloneElement(d,r)):[]).element}return t.cloneNode(r)}static filter(t){let r=[];return this._elements.forEach((a,n)=>{t(a,n)&&r.push(a)}),r}static get(t){return this._elements.get(t)||null}static has(t){return this._elements.has(t)}static map(t){let r=[];return this._elements.forEach((a,n)=>{r.push(t(a,n))}),r}static register(t,r,a=!1){if(this.has(t))return this.get(t);r||Array.from(t.attributes).forEach(i=>{r=r||{},r[i.name]=i.value!==""?i.value:!0});let n=new mr.default(t,r||{});return this._elements.set(t,n),a&&Array.from(t.children).forEach(i=>{i instanceof Element&&this.register(i,void 0,!0)}),n}static _cleanChildren(t){return Array.from(t).filter(r=>typeof r<"u").map(r=>typeof r=="string"?this.createText(r):r instanceof mr.default?r.element:r)}};Ke._elements=new Map;De.default=Ke});var xr=I(Ie=>{"use strict";var Bt=Ie&&Ie.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ie,"__esModule",{value:!0});var Hs=Bt(Ge()),Ft=Bt(V()),qt=Bt(C()),$t=class{constructor(){let t=document.querySelector("script[data-template]");if(!t)throw new Error("TEMPLATE_DATA not found");try{window.__TEMPLATE_DATA__=JSON.parse(t.innerText.trim()),Object.entries(window.__TEMPLATE_DATA__).forEach(([r,a])=>{Ft.default.set(r,a)})}catch{throw new Error("TEMPLATE_DATA is not a valid JSON")}}bindings(){Ft.default.set("current","document");let t=this.template();Ft.default.delete("current");let r=Hs.default.load(t).elements,a=Array.from(r).map((n,i)=>[String(i),n.attributes]).filter(n=>Object.keys(n[1]).length);return Object.fromEntries(a)}sync(){let t=this.bindings(),r=Array.from(document.querySelectorAll("*"));for(let a of r){let n=Object.fromEntries(Array.from(a.attributes).map(d=>[d.nodeName,d.nodeValue&&d.nodeValue.length>0?d.nodeValue:!0])),i=String(qt.default.elements.size);t[i]&&Object.assign(n,t[i]),qt.default.register(a,n)}return t}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(r=>typeof r=="object"&&typeof r.nodeType=="number")?t:[qt.default.createText(String(t))]}};Ie.default=$t});var P=I(je=>{"use strict";var et=je&&je.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(je,"__esModule",{value:!0});var Us=et(Ze()),q=et(C()),Qe=et(we()),Xe=et(V()),Ht=class s extends HTMLElement{static get registered(){return customElements.getName(this)}static register(){customElements.define(this.tagname,this)}get attr(){return Object.fromEntries(Array.from(this.attributes).map(t=>[t.name,t.value]))}get definition(){return this._definition||this.constructor}get element(){if(!q.default.has(this))throw new Error(`Component ${this.metadata.classname} not mapped.`);return q.default.get(this)}get initiated(){return this._initiated}get metadata(){let{id:t,classname:r,tagname:a,registered:n,observedAttributes:i=[]}=this.definition;return{id:t,tagname:a,classname:r,registered:n,observed:i}}get originalChildren(){return this._children}get props(){return this.getAttributes()}get propsCamel(){return this.element.camel()}get propsTree(){return this.element.tree()}get virtual(){return this._virtual}set props(t){this.setAttributes(t)}set definition(t){this._definition=t}set originalChildren(t){typeof this._children>"u"&&(this._children=this._cleanChildren(t||[]))}constructor(){if(super(),this._children=void 0,this._definition=null,this._initiated=!1,this._observer=null,this._rendering=!1,this._template=null,this._virtual=!1,!q.default.has(this)){let{registered:t}=this.metadata;if(!t)throw new Error(`Component ${this.metadata.classname} not registered in customElements.`);let r=Object.fromEntries(Array.from(this.attributes).map(a=>[a.name,a.value!==""?a.value:!0]));q.default.register(this,r)}}adoptedCallback(){this.render(),this.emit("adopt",this)}attributeChangedCallback(t,r,a){if(this._rendering)return;let n=r===null?"add":a===null?"remove":"update";a===null&&this.hasAttribute(t)?this.element.removeAttribute(t):a===""?this.element.setAttribute(t,!0):this.element.setAttribute(t,a),this.emit("attributechange",{action:n,name:t,prev:r,value:a,target:this})}clone(t=!1){return this.cloneElement(this,t)}cloneElement(t,r=!1){return q.default.cloneElement(t,r)}connectedCallback(){this.wait(),this.emit("connect",this)}createComponent(t,r,a={},n=[]){return q.default.createComponent(t,r,a,n)}createElement(t,r={},a=[]){return q.default.createElement(t,r,a)}disconnectedCallback(){this.emit("disconnect",this)}emit(t,r){return this.dispatchEvent(new CustomEvent(t,{detail:r})),this}getAttribute(t){return this.element.getAttribute(t)}getAttributes(){return Object.assign({},this.element.attributes)}getChildren(t=!0){return t===!0?Array.from(this.childNodes):t===!1?this._children:t===null&&this.shadowRoot?Array.from(this.shadowRoot.childNodes):[]}getElement(t){return q.default.get(t)}getParentComponent(){let t=this.parentElement;for(;t;){if(t instanceof s)return t;t=t.parentElement}return null}hasAttribute(t){return this.element.hasAttribute(t)}on(t,r){return this.removeEventListener(t,r),this.addEventListener(t,r),this}once(t,r){let a=n=>{this.removeEventListener(t,r),r(n)};return this.on(t,a),this}register(t={},r=[]){q.default.has(this)?q.default.get(this).setAttributes(t):q.default.register(this,t);for(let[a,n]of Object.entries(t))(typeof n=="string"||n===!0)&&super.setAttribute(a,n===""||n===a||n===!0?!0:n);this._children=this._cleanChildren(r),this._children.forEach(a=>this.appendChild(a)),this._virtual=!0,this.connectedCallback()}removeAttribute(t){let r=this.getAttribute(t);this.hasAttribute(t)&&this.element.removeAttribute(t),super.hasAttribute(t)&&super.removeAttribute(t),this._virtual&&this.metadata.observed.includes(t)&&this.attributeChangedCallback(t,r,null)}render(){let t=this.getParentComponent();if(t&&!t.initiated)return;if(this._rendering)return;this._rendering=!0;let r=Xe.default.get("current");Xe.default.set("current",this),this._template?Qe.default.emit("unmounted",this):this._template=this.template();let a=this._template().filter(Boolean),n=this.styles(),i=n.length===0?"light":"shadow",{light:d,shadow:h}=this._getChildren(a,i);if(h.length===0&&i==="light")this.textContent="",d.forEach(y=>this.appendChild(y));else{this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0});let y=document.createElement("style");y.innerText=n;let E=this.shadowRoot;E.textContent="",E.appendChild(y),h.forEach(T=>E.appendChild(T)),d.length&&(this.textContent="",d.forEach(T=>this.appendChild(T)))}return r?Xe.default.set("current",r):Xe.default.delete("current"),this._initiated=!0,this._rendering=!1,Qe.default.emit("mounted",this),this.shadowRoot?this.shadowRoot.innerHTML:this.innerHTML}setAttribute(t,r){let a=this.getAttribute(t);r===""||r===!0?(this.element.setAttribute(t,!0),super.setAttribute(t,"")):r===!1?(this.element.setAttribute(t,r),super.removeAttribute(t)):typeof r=="string"?(this.element.setAttribute(t,r),super.setAttribute(t,r)):this.element.setAttribute(t,r),this._virtual&&this.metadata.observed.includes(t)&&typeof r=="string"&&this.attributeChangedCallback(t,a,r)}setAttributes(t){Object.entries(t).forEach(([r,a])=>this.setAttribute(r,a))}unbind(t,r){return this.removeEventListener(t,r),this}wait(){if(document.readyState!=="loading")this._update();else{let t=()=>{this._update(),Qe.default.unbind("ready",t)};Qe.default.on("ready",t)}}_cleanChildren(t){return Array.from(t).filter(r=>typeof r<"u").map(r=>typeof r=="string"?q.default.createText(r):r instanceof Us.default?r.element:r)}_getChildren(t,r){let a=this._getTemplateNodes(t),n=this._getTemplateNodes(t,"light"),i=this._getTemplateNodes(t,"shadow"),d=a.length>0?a:t;return{light:n.length>0?n:r==="light"?d:[],shadow:i.length>0?i:r==="shadow"?d:[]}}_getTemplateNodes(t,r){let a=t.find(n=>this._isTemplate(n,r));return a?Array.from(a.childNodes||[]):[]}_isTemplate(t,r){if(t.nodeName!=="TEMPLATE")return!1;let a=t;return r?r===a.getAttribute("type"):!a.hasAttribute("type")}_toNodeList(t){return t instanceof Node?[t]:Array.isArray(t)&&t.every(r=>r instanceof Node)?t:[q.default.createText(String(t))]}_update(){typeof this._children>"u"&&(this._children=this._cleanChildren(Array.from(this.childNodes||[]))),this._initiated||this.render()}};je.default=Ht});var Ut=I(rt=>{"use strict";Object.defineProperty(rt,"__esModule",{value:!0});rt.stylemap=zs;function zs(s={}){return new tt(Object.entries(s))}var tt=class s extends Map{add(t,r){this.has(t)||this.set(t,[]);let a=this.get(t);return typeof r=="string"||typeof r=="number"?a.push(r):Array.isArray(r)&&a.push(...r),this}clone(){let t=new s;for(let[r,a]of this.entries())t.set(r,a.slice());return t}replaceAll(t,r){for(let[a,n]of this.entries())this.set(a,n.map(i=>typeof i=="string"?i.replaceAll(t,r):i));return this}};rt.default=tt});var se=I(re=>{"use strict";var Gs=re&&re.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(re,"__esModule",{value:!0});re.styleset=Ws;var Js=Gs(Ut());function Ws(s={}){return new st(Object.entries(s))}var st=class extends Map{add(t,r,a){this.has(t)||this.set(t,new Js.default);let n=this.get(t);return typeof a=="string"?n.set(r,a.split(" ")):Array.isArray(a)&&n.set(r,a),this}map(t,r){return this.set(t,r),this}toString(){let t=[];for(let[r,a]of this.entries()){let n=[];for(let[i,d]of a.entries())i&&d?.length&&n.push(`${i}:${d.join(" ")}`);n.length&&t.push(`${r}{${n.join(";")}}`)}return t.join("")}};re.default=st});var Gt=I(zt=>{"use strict";Object.defineProperty(zt,"__esModule",{value:!0});zt.default=Vs;function Vs(s,t,r=!1,a=":host",n="color"){let{color:i,white:d,black:h,info:y,warning:E,success:T,error:A,muted:_,primary:w,secondary:j,theme:o}=s,c=i||(o?`var(--${o})`:d?"var(--white)":h?"var(--black)":y?"var(--info)":E?"var(--warning)":T?"var(--success)":A?"var(--error)":_?"var(--muted)":w?"var(--primary)":j?"var(--secondary)":r);return c&&t.add(a,n,c),i?"color":d?"white":h?"black":y?"info":E?"warning":T?"success":A?"error":_?"muted":w?"primary":j?"secondary":"initial"}});var br=I(Jt=>{"use strict";Object.defineProperty(Jt,"__esModule",{value:!0});Jt.default=Ys;function Ys(s,t,r=!1,a=":host"){let{curve:n,curved:i,rounded:d,pill:h}=s,y=n?`${n}px`:i?"4px":d?"12px":h?"10000px":r;return y&&(t.add(a,"border-radius",y),t.add(a,"overflow","hidden")),n?"curve":i?"curved":d?"rounded":h?"pill":"initial"}});var Vt=I(Wt=>{"use strict";Object.defineProperty(Wt,"__esModule",{value:!0});Wt.default=Zs;function Zs(s,t,r=!1,a=":host"){let{flex:n,none:i,inline:d,block:h,"inline-block":y,"inline-flex":E}=s,T=n?"flex":i?"none":h?"block":d?"inline":E?"inline-flex":y?"inline-block":r;return T&&t.add(a,"display",T),T||"initial"}});var _r=I(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});Zt.default=Ks;function Ks(s,t,r=!1,a=":host",n="font-size"){let{size:i,xs:d,sm:h,md:y,lg:E,xl:T,xl2:A,xl3:_,xl4:w,xl5:j}=s,o=i?`${i}px`:d?"8px":h?"12px":y?"16px":E?"20px":T?"24px":A?"28px":_?"32px":w?"36px":j?"40px":r;return o&&t.add(a,n,o),i?"size":d?"xs":h?"sm":y?"md":E?"lg":T?"xl":A?"xl2":_?"xl3":w?"xl4":j?"xl5":"initial"}});var Nr=I(Le=>{"use strict";var Qs=Le&&Le.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Le,"__esModule",{value:!0});var Xs=Qs(P()),it=class extends Xs.default{get field(){return this._field}constructor(){super(),this._field=this.attachInternals()}formAssociatedCallback(t){this.emit("formassociate",this)}formDisabledCallback(t){this.emit("formdisable",this)}formResetCallback(){this.emit("formreset",this)}};it.formAssociated=!0;Le.default=it});var oe=I(Se=>{"use strict";var ea=Se&&Se.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Se,"__esModule",{value:!0});Se.default=ra;var ta=ea(V());function ra(s=null,t=!1){if(!s&&(s=ta.default.get("current"),!s)){if(!t)throw new Error("Not called within a Ink component");return null}return s}});var Cr=I(Ne=>{"use strict";var sa=Ne&&Ne.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ne,"__esModule",{value:!0});var aa=sa(V());function na(s){let t=aa.default.get("env")||{};return s?t[s]||null:t}Ne.default=na});var Kt=I(Ce=>{"use strict";var Rr=Ce&&Ce.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ce,"__esModule",{value:!0});Ce.default=oa;var ia=Rr(oe()),la=Rr(V());function oa(s=null){let t=(0,ia.default)(s,!0);return typeof t=="string"?la.default.get("props")||{}:t?t.props:{}}});var Mr=I(ce=>{"use strict";var Or=ce&&ce.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ce,"__esModule",{value:!0});ce.classlist=da;ce.default=ua;var ca=Or(oe()),pa=Or(Kt());function da(s=null){var t;if(s==="body")return document.body.classList;if(s==="head")return document.head.classList;if(s==="document")return(t=document.body.parentElement)===null||t===void 0?void 0:t.classList;let r=(0,ca.default)(s);return r?.classList}function ua(s=null){return(0,pa.default)(s).class||""}});var Pr=I(Z=>{"use strict";var ma=Z&&Z.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Z,"__esModule",{value:!0});Z.innerHTML=ha;Z.innerText=xa;Z.default=Qt;var fa=ma(oe());function ha(s=null){let t=Qt(s),r=document.createElement("template");return r.append(...t.map(a=>a.cloneNode(!0))),r.innerHTML}function xa(s=null){let t=Qt(s),r=document.createElement("template");return r.append(...t.map(a=>a.cloneNode(!0))),r.innerText}function Qt(s=null){let t=(0,fa.default)(s,!0);return typeof t!="string"&&t?t.originalChildren||[]:[]}});var Fr=I(K=>{"use strict";var ga=K&&K.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(K,"__esModule",{value:!0});K.SignalRegistry=void 0;K.default=ba;var ya=ga(oe()),pe=class s{static observe(t,r){let a={getter:()=>i.raw,setter:h=>h},n=new Set,i={raw:r,change(h){return n.add(h),i},getter(h){return a.getter=h,i},setter(h){return a.setter=h,i}};Object.defineProperty(i,"value",{get(){return a.getter()},set(h){let y=a.setter(h),E=s.serialize(y)!==s.serialize(i.raw);i.raw=y,E&&(n.forEach(T=>T(y)),t.render())}});let d=this._observers.get(t);return d?(d.observed++,d.values.push(i)):this._observers.set(t,{observed:1,values:[i]}),i}static observer(t){return this._observers.get(t)||null}static serialize(t){return JSON.stringify(t)}};K.SignalRegistry=pe;pe._observers=new Map;function ba(s,t=null){let r=(0,ya.default)(t);if(!r.initiated)return pe.observe(r,s);let a=pe.observer(r);if(!a)throw new Error("Signal state mismatch");return a.values[a.observed++%a.values.length]}});var $r=I(z=>{"use strict";var Ta=z&&z.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(z,"__esModule",{value:!0});z.breakpoints=void 0;z.stylesheet=ka;var qr=Ta(se());z.breakpoints={all:0,xl4:1920,xl3:1536,xl2:1280,xl:1024,lg:992,md:767,sm:420,xs:360};function ka(){return new lt}var lt=class extends Map{add(t,r,a,n){return this.has(t)||this.set(t,new qr.default),this.get(t).add(r,a,n),this}map(t,r,a){return this.has(t)||this.set(t,new qr.default),this.get(t).map(r,a),this}toString(){var t;let r=[];for(let[a,n]of Object.entries(z.breakpoints)){let i=(t=this.get(a))===null||t===void 0?void 0:t.toString();if(i){if(a==="all"){r.push(i);continue}r.push(`@media (max-width:${n}px){${i}}`)}}return r.join("")}};z.default=lt});var Hr=I(ot=>{"use strict";Object.defineProperty(ot,"__esModule",{value:!0});ot.getStatus=va;var Br={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};ot.default=Br;function va(s){return Object.values(Br).find(t=>t.code===s)}});var Ur=I(er=>{"use strict";Object.defineProperty(er,"__esModule",{value:!0});var Ea=Hr(),Xt=class s extends Error{static for(t,...r){return r.forEach(function(a){t=t.replace("%s",String(a))}),new this(t)}static forErrors(t){let r=new this("Invalid Parameters");return r.withErrors(t),r}static require(t,r,...a){if(!t){for(let n of a)r=r.replace("%s",n);throw new this(r)}}static try(t){return{catch:r=>{try{return t()}catch(a){if(a instanceof s)return r(a,a.type);if(a instanceof Error){let n=s.upgrade(a);return r(n,n.type)}else if(typeof a=="string"){let n=s.for(a);return r(n,n.type)}return r(a,"unknown")}}}}static upgrade(t,r=500){if(t instanceof s)return t;let a=new this(t.message,r);return a.name=t.name,a.stack=t.stack,a}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,r=500){var a;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=r,this._status=((a=(0,Ea.getStatus)(r))===null||a===void 0?void 0:a.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,r=0){let a={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,r)};return Object.keys(this._errors).length>0&&(a.errors=this._errors),a}trace(t=0,r=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,r||this.stack.length).map(n=>n.trim()).map(n=>{if(!n.startsWith("at"))return!1;let[i,d,h]=n.split(" ");h||(h=`(${d})`,d="<none>");let[y,E,T]=h.substring(1,h.length-1).split(":");return{method:d,file:y,line:parseInt(E)||0,char:parseInt(T)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,r){return this._start=t,this._end=r,this}};er.default=Xt});var zr=I(Re=>{"use strict";var _a=Re&&Re.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Re,"__esModule",{value:!0});var wa=_a(Ur()),tr=class extends wa.default{};Re.default=tr});var Kr=I(u=>{"use strict";var Aa=u&&u.__createBinding||(Object.create?function(s,t,r,a){a===void 0&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(s,a,n)}:function(s,t,r,a){a===void 0&&(a=r),s[a]=t[r]}),Da=u&&u.__setModuleDefault||(Object.create?function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}:function(s,t){s.default=t}),Y=u&&u.__importStar||function(){var s=function(t){return s=Object.getOwnPropertyNames||function(r){var a=[];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[a.length]=n);return a},s(t)};return function(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var a=s(t),n=0;n<a.length;n++)a[n]!=="default"&&Aa(r,t,a[n]);return Da(r,t),r}}(),F=u&&u.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(u,"__esModule",{value:!0});u.StyleSheet=u.StyleSet=u.StyleMap=u.stylesheet=u.styleset=u.stylemap=u.breakpoints=u.emitter=u.signal=u.innerHTML=u.innerText=u.children=u.classnames=u.classlist=u.props=u.env=u.data=u.client=u.component=u.SignalRegistry=u.ClientException=u.ClientEmitter=u.ClientElement=u.ClientRegistry=u.ClientComponent=u.ClientField=u.TemplateData=u.DOMNode=u.DOMText=u.DOMElement=u.DOMDocument=u.DOMDoctype=u.DOMComment=void 0;var Ia=F(_t());u.DOMComment=Ia.default;var ja=F(At());u.DOMDoctype=ja.default;var La=F(Ge());u.DOMDocument=La.default;var Sa=F(It());u.DOMElement=Sa.default;var Na=F(Lt());u.DOMText=Na.default;var Ca=F(ee());u.DOMNode=Ca.default;var Ra=F(Nr());u.ClientField=Ra.default;var Oa=F(P());u.ClientComponent=Oa.default;var Ma=F(C());u.ClientRegistry=Ma.default;var Pa=F(Ze());u.ClientElement=Pa.default;var Gr=Y(we());u.emitter=Gr.default;Object.defineProperty(u,"ClientEmitter",{enumerable:!0,get:function(){return Gr.ClientEmitter}});var Fa=F(Pt());u.client=Fa.default;var qa=F(oe());u.component=qa.default;var Jr=Y(V());u.data=Jr.default;Object.defineProperty(u,"TemplateData",{enumerable:!0,get:function(){return Jr.TemplateData}});var $a=F(Cr());u.env=$a.default;var Ba=F(Kt());u.props=Ba.default;var Wr=Y(Mr());u.classnames=Wr.default;Object.defineProperty(u,"classlist",{enumerable:!0,get:function(){return Wr.classlist}});var rr=Y(Pr());u.children=rr.default;Object.defineProperty(u,"innerHTML",{enumerable:!0,get:function(){return rr.innerHTML}});Object.defineProperty(u,"innerText",{enumerable:!0,get:function(){return rr.innerText}});var Vr=Y(Fr());u.signal=Vr.default;Object.defineProperty(u,"SignalRegistry",{enumerable:!0,get:function(){return Vr.SignalRegistry}});var Yr=Y(Ut());u.StyleMap=Yr.default;Object.defineProperty(u,"stylemap",{enumerable:!0,get:function(){return Yr.stylemap}});var Zr=Y(se());u.StyleSet=Zr.default;Object.defineProperty(u,"styleset",{enumerable:!0,get:function(){return Zr.styleset}});var sr=Y($r());u.StyleSheet=sr.default;Object.defineProperty(u,"stylesheet",{enumerable:!0,get:function(){return sr.stylesheet}});Object.defineProperty(u,"breakpoints",{enumerable:!0,get:function(){return sr.breakpoints}});var Ha=F(zr());u.ClientException=Ha.default});var G=I((Sn,Qr)=>{Qr.exports={...Kr()}});var es=I((Cn,pt)=>{var Ua=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var x=function(s){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,a={},n={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function o(c){return c instanceof i?new i(c.type,o(c.content),c.alias):Array.isArray(c)?c.map(o):c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(o){return Object.prototype.toString.call(o).slice(8,-1)},objId:function(o){return o.__id||Object.defineProperty(o,"__id",{value:++r}),o.__id},clone:function o(c,p){p=p||{};var m,f;switch(n.util.type(c)){case"Object":if(f=n.util.objId(c),p[f])return p[f];m={},p[f]=m;for(var b in c)c.hasOwnProperty(b)&&(m[b]=o(c[b],p));return m;case"Array":return f=n.util.objId(c),p[f]?p[f]:(m=[],p[f]=m,c.forEach(function(D,g){m[g]=o(D,p)}),m);default:return c}},getLanguage:function(o){for(;o;){var c=t.exec(o.className);if(c)return c[1].toLowerCase();o=o.parentElement}return"none"},setLanguage:function(o,c){o.className=o.className.replace(RegExp(t,"gi"),""),o.classList.add("language-"+c)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(m){var o=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(m.stack)||[])[1];if(o){var c=document.getElementsByTagName("script");for(var p in c)if(c[p].src==o)return c[p]}return null}},isActive:function(o,c,p){for(var m="no-"+c;o;){var f=o.classList;if(f.contains(c))return!0;if(f.contains(m))return!1;o=o.parentElement}return!!p}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(o,c){var p=n.util.clone(n.languages[o]);for(var m in c)p[m]=c[m];return p},insertBefore:function(o,c,p,m){m=m||n.languages;var f=m[o],b={};for(var D in f)if(f.hasOwnProperty(D)){if(D==c)for(var g in p)p.hasOwnProperty(g)&&(b[g]=p[g]);p.hasOwnProperty(D)||(b[D]=f[D])}var S=m[o];return m[o]=b,n.languages.DFS(n.languages,function(R,J){J===S&&R!=o&&(this[R]=b)}),b},DFS:function o(c,p,m,f){f=f||{};var b=n.util.objId;for(var D in c)if(c.hasOwnProperty(D)){p.call(c,D,c[D],m||D);var g=c[D],S=n.util.type(g);S==="Object"&&!f[b(g)]?(f[b(g)]=!0,o(g,p,null,f)):S==="Array"&&!f[b(g)]&&(f[b(g)]=!0,o(g,p,D,f))}}},plugins:{},highlightAll:function(o,c){n.highlightAllUnder(document,o,c)},highlightAllUnder:function(o,c,p){var m={callback:p,container:o,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",m),m.elements=Array.prototype.slice.apply(m.container.querySelectorAll(m.selector)),n.hooks.run("before-all-elements-highlight",m);for(var f=0,b;b=m.elements[f++];)n.highlightElement(b,c===!0,m.callback)},highlightElement:function(o,c,p){var m=n.util.getLanguage(o),f=n.languages[m];n.util.setLanguage(o,m);var b=o.parentElement;b&&b.nodeName.toLowerCase()==="pre"&&n.util.setLanguage(b,m);var D=o.textContent,g={element:o,language:m,grammar:f,code:D};function S(J){g.highlightedCode=J,n.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,n.hooks.run("after-highlight",g),n.hooks.run("complete",g),p&&p.call(g.element)}if(n.hooks.run("before-sanity-check",g),b=g.element.parentElement,b&&b.nodeName.toLowerCase()==="pre"&&!b.hasAttribute("tabindex")&&b.setAttribute("tabindex","0"),!g.code){n.hooks.run("complete",g),p&&p.call(g.element);return}if(n.hooks.run("before-highlight",g),!g.grammar){S(n.util.encode(g.code));return}if(c&&s.Worker){var R=new Worker(n.filename);R.onmessage=function(J){S(J.data)},R.postMessage(JSON.stringify({language:g.language,code:g.code,immediateClose:!0}))}else S(n.highlight(g.code,g.grammar,g.language))},highlight:function(o,c,p){var m={code:o,grammar:c,language:p};if(n.hooks.run("before-tokenize",m),!m.grammar)throw new Error('The language "'+m.language+'" has no grammar.');return m.tokens=n.tokenize(m.code,m.grammar),n.hooks.run("after-tokenize",m),i.stringify(n.util.encode(m.tokens),m.language)},tokenize:function(o,c){var p=c.rest;if(p){for(var m in p)c[m]=p[m];delete c.rest}var f=new y;return E(f,f.head,o),h(o,f,c,f.head,0),A(f)},hooks:{all:{},add:function(o,c){var p=n.hooks.all;p[o]=p[o]||[],p[o].push(c)},run:function(o,c){var p=n.hooks.all[o];if(!(!p||!p.length))for(var m=0,f;f=p[m++];)f(c)}},Token:i};s.Prism=n;function i(o,c,p,m){this.type=o,this.content=c,this.alias=p,this.length=(m||"").length|0}i.stringify=function o(c,p){if(typeof c=="string")return c;if(Array.isArray(c)){var m="";return c.forEach(function(S){m+=o(S,p)}),m}var f={type:c.type,content:o(c.content,p),tag:"span",classes:["token",c.type],attributes:{},language:p},b=c.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(f.classes,b):f.classes.push(b)),n.hooks.run("wrap",f);var D="";for(var g in f.attributes)D+=" "+g+'="'+(f.attributes[g]||"").replace(/"/g,"&quot;")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'"'+D+">"+f.content+"</"+f.tag+">"};function d(o,c,p,m){o.lastIndex=c;var f=o.exec(p);if(f&&m&&f[1]){var b=f[1].length;f.index+=b,f[0]=f[0].slice(b)}return f}function h(o,c,p,m,f,b){for(var D in p)if(!(!p.hasOwnProperty(D)||!p[D])){var g=p[D];g=Array.isArray(g)?g:[g];for(var S=0;S<g.length;++S){if(b&&b.cause==D+","+S)return;var R=g[S],J=R.inside,lr=!!R.lookbehind,or=!!R.greedy,ms=R.alias;if(or&&!R.pattern.global){var fs=R.pattern.toString().match(/[imsuy]*$/)[0];R.pattern=RegExp(R.pattern.source,fs+"g")}for(var cr=R.pattern||R,O=m.next,H=f;O!==c.tail&&!(b&&H>=b.reach);H+=O.value.length,O=O.next){var X=O.value;if(c.length>o.length)return;if(!(X instanceof i)){var qe=1,B;if(or){if(B=d(cr,H,o,lr),!B||B.index>=o.length)break;var $e=B.index,hs=B.index+B[0].length,W=H;for(W+=O.value.length;$e>=W;)O=O.next,W+=O.value.length;if(W-=O.value.length,H=W,O.value instanceof i)continue;for(var ye=O;ye!==c.tail&&(W<hs||typeof ye.value=="string");ye=ye.next)qe++,W+=ye.value.length;qe--,X=o.slice(H,W),B.index-=H}else if(B=d(cr,0,X,lr),!B)continue;var $e=B.index,Be=B[0],yt=X.slice(0,$e),pr=X.slice($e+Be.length),bt=H+X.length;b&&bt>b.reach&&(b.reach=bt);var He=O.prev;yt&&(He=E(c,He,yt),H+=yt.length),T(c,He,qe);var xs=new i(D,J?n.tokenize(Be,J):Be,ms,Be);if(O=E(c,He,xs),pr&&E(c,O,pr),qe>1){var Tt={cause:D+","+S,reach:bt};h(o,c,p,O.prev,H,Tt),b&&Tt.reach>b.reach&&(b.reach=Tt.reach)}}}}}}function y(){var o={value:null,prev:null,next:null},c={value:null,prev:o,next:null};o.next=c,this.head=o,this.tail=c,this.length=0}function E(o,c,p){var m=c.next,f={value:p,prev:c,next:m};return c.next=f,m.prev=f,o.length++,f}function T(o,c,p){for(var m=c.next,f=0;f<p&&m!==o.tail;f++)m=m.next;c.next=m,m.prev=c,o.length-=f}function A(o){for(var c=[],p=o.head.next;p!==o.tail;)c.push(p.value),p=p.next;return c}if(!s.document)return s.addEventListener&&(n.disableWorkerMessageHandler||s.addEventListener("message",function(o){var c=JSON.parse(o.data),p=c.language,m=c.code,f=c.immediateClose;s.postMessage(n.highlight(m,n.languages[p],p)),f&&s.close()},!1)),n;var _=n.util.currentScript();_&&(n.filename=_.src,_.hasAttribute("data-manual")&&(n.manual=!0));function w(){n.manual||n.highlightAll()}if(!n.manual){var j=document.readyState;j==="loading"||j==="interactive"&&_&&_.defer?document.addEventListener("DOMContentLoaded",w):window.requestAnimationFrame?window.requestAnimationFrame(w):window.setTimeout(w,16)}return n}(Ua);typeof pt<"u"&&pt.exports&&(pt.exports=x);typeof global<"u"&&(global.Prism=x);x.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};x.languages.markup.tag.inside["attr-value"].inside.entity=x.languages.markup.entity;x.languages.markup.doctype.inside["internal-subset"].inside=x.languages.markup;x.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))});Object.defineProperty(x.languages.markup.tag,"addInlined",{value:function(t,r){var a={};a["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:x.languages[r]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};n["language-"+r]={pattern:/[\s\S]+/,inside:x.languages[r]};var i={};i[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:n},x.languages.insertBefore("markup","cdata",i)}});Object.defineProperty(x.languages.markup.tag,"addAttribute",{value:function(s,t){x.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:x.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});x.languages.html=x.languages.markup;x.languages.mathml=x.languages.markup;x.languages.svg=x.languages.markup;x.languages.xml=x.languages.extend("markup",{});x.languages.ssml=x.languages.xml;x.languages.atom=x.languages.xml;x.languages.rss=x.languages.xml;(function(s){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var r=s.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(x);x.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};x.languages.javascript=x.languages.extend("clike",{"class-name":[x.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});x.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;x.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:x.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:x.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:x.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:x.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:x.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});x.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:x.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});x.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});x.languages.markup&&(x.languages.markup.tag.addInlined("script","javascript"),x.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));x.languages.js=x.languages.javascript;(function(){if(typeof x>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var s="Loading\u2026",t=function(_,w){return"\u2716 Error "+_+" while fetching file: "+w},r="\u2716 Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",i="loading",d="loaded",h="failed",y="pre[data-src]:not(["+n+'="'+d+'"]):not(['+n+'="'+i+'"])';function E(_,w,j){var o=new XMLHttpRequest;o.open("GET",_,!0),o.onreadystatechange=function(){o.readyState==4&&(o.status<400&&o.responseText?w(o.responseText):o.status>=400?j(t(o.status,o.statusText)):j(r))},o.send(null)}function T(_){var w=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_||"");if(w){var j=Number(w[1]),o=w[2],c=w[3];return o?c?[j,Number(c)]:[j,void 0]:[j,j]}}x.hooks.add("before-highlightall",function(_){_.selector+=", "+y}),x.hooks.add("before-sanity-check",function(_){var w=_.element;if(w.matches(y)){_.code="",w.setAttribute(n,i);var j=w.appendChild(document.createElement("CODE"));j.textContent=s;var o=w.getAttribute("data-src"),c=_.language;if(c==="none"){var p=(/\.(\w+)$/.exec(o)||[,"none"])[1];c=a[p]||p}x.util.setLanguage(j,c),x.util.setLanguage(w,c);var m=x.plugins.autoloader;m&&m.loadLanguages(c),E(o,function(f){w.setAttribute(n,d);var b=T(w.getAttribute("data-range"));if(b){var D=f.split(/\r\n?|\n/g),g=b[0],S=b[1]==null?D.length:b[1];g<0&&(g+=D.length),g=Math.max(0,Math.min(g-1,D.length)),S<0&&(S+=D.length),S=Math.max(0,Math.min(S,D.length)),f=D.slice(g,S).join(`
`),w.hasAttribute("data-start")||w.setAttribute("data-start",String(g+1))}j.textContent=f,x.highlightElement(j)},function(f){w.setAttribute(n,h),j.textContent=f})}}),x.plugins.fileHighlight={highlight:function(w){for(var j=(w||document).querySelectorAll(y),o=0,c;c=j[o++];)x.highlightElement(c)}};var A=!1;x.fileHighlight=function(){A||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),A=!0),x.plugins.fileHighlight.highlight.apply(this,arguments)}})()});var Wa={};vs(Wa,{BUILD_ID:()=>Ja,ClientRegistry:()=>ps.default,TemplateDocument:()=>gt,components:()=>Ga,data:()=>ds.default,elements:()=>us,emitter:()=>xt.default});var e=k(Ge()),cs=k(xr()),ps=k(C()),xt=k(we()),ds=k(V());var gr=k(C()),yr=k(P()),te=class extends yr.default{static id="e83da818dc31723bcd5d";static tagname="panel";static classname="Panel_e83da818dc31723bcd5d";styles(){return""}template(){let t=this.originalChildren,r={main:t.find(i=>i.nodeName==="MAIN"),head:t.find(i=>i.nodeName==="HEADER"),foot:t.find(i=>i.nodeName==="FOOTER"),left:t.find(i=>i.nodeName==="ASIDE"&&i.hasAttribute("left")),right:t.find(i=>i.nodeName==="ASIDE"&&i.hasAttribute("right"))},a={left:!1,right:!1};this.toggle=i=>{a[i]=!a[i],n.all()};let n={all(){r.main&&this.main(),r.head&&this.head(),r.foot&&this.foot(),r.left&&this.left(),r.right&&this.right()},head(){let{classList:i}=r.head;i.add("absolute","top-0","right-0","h-60","transition-500"),r.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),a.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0"))},foot(){let{classList:i}=r.foot;i.add("absolute","bottom-0","right-0","h-60","transition-500"),r.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),a.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0"))},left(){let{classList:i}=r.left;i.add("w-226","absolute","bottom-0","left-0","top-0","transition-500"),a.left?(i.remove("md-left--226"),i.add("md-left-0")):(i.remove("md-left-0"),i.add("md-left--226"))},right(){let{classList:i}=r.right;i.add("w-200","absolute","right-0","transition-500"),r.foot?(i.remove("bottom-0"),i.add("bottom-60")):(i.remove("bottom-60"),i.add("bottom-0")),r.head?(i.remove("top-0"),i.add("top-60")):(i.remove("top-60"),i.add("top-0")),a.right?(i.remove("lg-right--200"),i.add("lg-right-0")):(i.remove("lg-right-0"),i.add("lg-right--200"))},main(){let{classList:i}=r.main;i.add("absolute","transition-500"),r.head?(i.remove("top-0"),i.add("top-60")):(i.remove("top-60"),i.add("top-0")),r.foot?(i.remove("bottom-0"),i.add("bottom-60")):(i.remove("bottom-60"),i.add("bottom-0")),r.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),r.right?(i.remove("right-0"),i.add("right-200")):(i.remove("right-200"),i.add("right-0")),a.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0")),a.right?(i.remove("lg-right-0"),i.add("lg-right-200")):(i.remove("lg-right-200"),i.add("lg-right-0"))}};return n.all(),this.classList.add("block","relative","w-full","vh","scroll-hidden"),()=>[gr.default.createText(`
`,!1),...this._toNodeList(t)]}};var Yt=k(C()),Tr=k(P()),kr=k(se()),at=k(Gt()),vr=k(br()),Er=k(Vt()),ae=class extends Tr.default{static id="502d0a1992f720baceb4";static tagname="alert";static classname="Alert_502d0a1992f720baceb4";styles(){return""}template(){let{outline:t,solid:r,transparent:a,padding:n}=this.props,i=new kr.default;return this.styles=()=>i.toString(),(0,Er.default)(this.props,i,"block",":host"),i.add(":host","padding",n?`${n}px`:"16px"),(0,vr.default)(this.props,i,!1,":host"),t||a?((0,at.default)(this.props,i,"var(--muted)",":host","color"),(0,at.default)(this.props,i,"var(--muted)",":host","border-color"),i.add(":host","border-style","solid"),i.add(":host","border-width","1px"),t&&i.add(":host","background-color","var(--white)")):(i.add(":host","color","var(--white)"),(0,at.default)(this.props,i,"var(--muted)",":host","background-color")),()=>[Yt.default.createText(`
`,!1),Yt.default.createElement("slot",{},[]).element]}};var nt=k(C()),wr=k(P()),Ar=k(se()),Dr=k(Gt()),Ir=k(Vt()),jr=k(_r()),ne=class extends wr.default{static id="75af7664df8b2546e65a";static tagname="icon";static classname="Icon_75af7664df8b2546e65a";styles(){return""}template(){let{name:t,solid:r,brand:a}=this.props,n=new Ar.default;this.styles=()=>n.toString(),(0,Ir.default)(this.props,n,"inline-block",":host"),(0,Dr.default)(this.props,n,!1,":host","color"),(0,jr.default)(this.props,n,!1,":host","font-size");let i=["fa-fw",`fa-${t}`];return i.push(a?"fa-brands":"fa-solid"),()=>[nt.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"}).element,nt.default.createText(`
`,!1),nt.default.createElement("i",{class:i.join(" ")},[]).element]}};var ie=k(C()),Lr=k(P()),Sr=k(se()),le=class extends Lr.default{static id="047b9fc58e7239d4a7f8";static tagname="tab";static classname="Tab_047b9fc58e7239d4a7f8";styles(){return""}template(){let t={init:()=>{let _=this.hasAttribute("on");this.classList.remove(..._?T:E),this.classList.add(..._?E:T),Array.from(document.querySelectorAll(a)).forEach(w=>{w.style.display=_?"block":"none"})},activate:()=>{Array.from(document.querySelectorAll(`[group="${r}"]`)).forEach(_=>{let w=_.getAttribute("selector");a===w&&!_.hasAttribute("on")?(_.setAttribute("on",""),Array.from(document.querySelectorAll(a)).forEach(j=>{j.style.display="block"}),typeof _.render=="function"&&_.render()):a!==w&&_.hasAttribute("on")&&(_.removeAttribute("on"),Array.from(document.querySelectorAll(w)).forEach(j=>{j.style.display="none"}),typeof _.render=="function"&&_.render())})}},{group:r,selector:a="",active:n="",inactive:i="",style:d,class:h,...y}=this.props,E=n.split(" "),T=i.split(" "),A=new Sr.default;return this.styles=()=>A.toString(),A.add(":host","cursor","pointer"),A.add("a","display","block"),A.add("a","height","100%"),A.add("a","width","100%"),()=>[ie.default.createText(`
`,!1),ie.default.createElement("a",{...y,click:t.activate,mount:t.init},[ie.default.createText(`
  `,!1),ie.default.createElement("slot",{},[]).element,ie.default.createText(`
`,!1)]).element]}};var ar=k(C()),Xr=k(P()),ct=k(G()),de=class extends Xr.default{static id="7e4942547226dfeef0ae";static tagname="docs";static classname="Docs_7e4942547226dfeef0ae";styles(){return""}template(){return(0,ct.classlist)().add("block","w-full","h-full","scroll-y-auto","scroll-x-hidden"),()=>[ar.default.createText(`
`,!1),ar.default.createElement("article",{class:"block p-10 tx-t-1"},[...this._toNodeList((0,ct.children)())]).element]}};var l=k(C()),ss=k(P());var L=k(C()),ts=k(P()),nr=k(es()),rs=k(G()),U=class extends ts.default{static id="d21b237295245a3b7d61";static tagname="code";static classname="Code_d21b237295245a3b7d61";styles(){return`:host {
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
  }`}template(){let t=this.props,{lang:r="markup",numbers:a=!1,inline:n=!1,trim:i=!1,ltrim:d=!1,rtrim:h=!1,detab:y=0}=t,E=(0,rs.children)(),T=E[0]?.textContent||"";y&&(T=T.replace(new RegExp(`\\n {${y}}`,"g"),`
`)),i?T=T.trim():d?T=T.replace(/^\s+/,""):h&&(T=T.replace(/\s+$/,""));let A=_=>{if(!T)return;let w=nr.default.highlight(T,nr.default.languages[r],r);if(_.detail.target.innerHTML=w,a){let j=w.match(/\n(?!$)/g),o=j?j.length+1:1,c=new Array(o+1).join("<span></span>"),p=document.createElement("span");p.setAttribute("aria-hidden","true"),p.className="line-numbers-rows",p.innerHTML=c,_.detail.target.appendChild(p)}};return()=>[L.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css"}).element,L.default.createText(`
`,!1),L.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-tomorrow.min.css"}).element,L.default.createText(`
`,!1),...r==="bash"?[L.default.createText(`
  `,!1),L.default.createElement("div",{class:"terminal"},[L.default.createElement("span",{},[L.default.createText("$",!1)]).element,L.default.createText(" ",!1),...this._toNodeList(E)]).element,L.default.createText(`
`,!1)]:T?[,L.default.createText(`
  `,!1),...a?[L.default.createText(`
    `,!1),L.default.createElement("pre",{class:"snippet line-numbers"},[L.default.createElement("code",{mount:A},[]).element]).element,L.default.createText(`
  `,!1)]:[,L.default.createText(`
    `,!1),L.default.createElement("pre",{class:"snippet pad"},[L.default.createElement("code",{mount:A},[]).element]).element,L.default.createText(`
  `,!1)],L.default.createText(`
`,!1)]:[,L.default.createText(`
  `,!1),L.default.createElement("span",{},[L.default.createText("????",!1)]).element,L.default.createText(`
`,!1)],L.default.createText(`

`,!1)]}};var Q=k(G());var Oe={Asset:{type:{kind:"property",list:!1,type:["text/html","text/javascript","text/css","text/plain"],description:"The MIME type of the build file asset"},content:{kind:"property",list:!1,type:"string",description:"The source code of the build file asset."}},Path:{path:{kind:"property",list:!1,type:"string",description:"The file path",example:"'/path/to/file'"},type:{kind:"property",list:!1,type:"string",description:"The type of path.",example:"'file'"}},Config:{brand:{kind:"property",list:!1,type:"string",description:"The brand prefixed before the component tag name.",example:"'ink'"},cwd:{kind:"property",list:!1,type:"string",description:"The project's current working directory (cwd).",example:"'/path/to/project'"},fs:{kind:"property",list:!1,type:"FileSystem",description:"The file system being used to read/write files.",example:`import fs from 'fs';

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
});`},server:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"sourceFile",type:"string"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns compiled server code, given the the template source file.",example:"compiler.server('./docs/api.ink'); // server script"},styles:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"sourceFile",type:"string"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns compiled css styles, given the the template source file.",example:"compiler.styles('./docs/api.ink'); //css styles"}},InkComponent:{attr:{kind:"property",list:!1,type:"Hash",description:"Returns only the valid HTML tag attributes (string and true).",example:"this.attr; //--> { disabled: true, type: 'button' }"},props:{kind:"property",list:!1,type:"Hash",description:"Returns all the attributes assigned to the component.",example:"this.props; //--> { disabled: true, count: 4, click: handleClick }"},metadata:{kind:"property",list:!1,type:"[ string, string ]",description:"Returns the tag and class name of the component.",example:"this.metadata; //--> [ 'fancy-button', 'FancyButton_abc123' ]"},styles:{kind:"function",args:[],returns:{kind:"property",list:!1,type:"string"},description:"Returns the css styles used in the component.",example:"this.styles(); //css styles"},template:{kind:"function",args:[],returns:{kind:"property",list:!1,type:"Node[]"},description:"Returns a function that returns an array of elements, text nodes and web components",example:"this.template(); //--> () => [ Element, Text, Element, ... ]"},render:{kind:"function",args:[],returns:{kind:"property",list:!1,type:"string"},description:"Renders the children and returns the final HTML markup.",example:"this.render(); //--> '<p>...</p>'"}},InkRegistry:{elements:{kind:"property",list:!1,type:"Map<Element, InkElement>",description:"Returns a map of elements used in the DOM.",example:"InkAPI.InkRegistry.elements.get(component);"},createComponent:{kind:"function",args:[{kind:"property",list:!1,name:"tagname",type:"string"},{kind:"property",list:!1,name:"component",type:"InkComponent"},{kind:"property",list:!1,name:"props",type:"Hash"},{kind:"property",list:!1,name:"children>",type:"Node[]"}],returns:{kind:"property",list:!1,type:"InkElement"},description:"Creates a InkElement from a web component class.",example:"InkAPI.InkRegistry.createComponent('fancy-button', InkComponent, { title: 'Hello' }, children);"},createElement:{kind:"function",args:[{kind:"property",list:!1,name:"tagname",type:"string"},{kind:"property",list:!1,name:"props",type:"Hash"},{kind:"property",list:!1,name:"children>",type:"Node[]"}],returns:{kind:"property",list:!1,type:"InkElement"},description:"Creates a InkElement from a string tag name.",example:"InkAPI.InkRegistry.createElement('a', { href: '/' }, children);"},createText:{kind:"function",args:[{kind:"property",list:!1,name:"text",type:"string"}],returns:{kind:"property",list:!1,type:"TextNode"},description:"Creates a TextNode from a raw string.",example:"InkAPI.InkRegistry.createText('foo');"},get:{kind:"function",args:[{kind:"property",list:!1,name:"element",type:"Element"}],returns:{kind:"property",list:!1,type:"InkElement"},description:"Returns a InkElement given a DOM element.",example:"InkAPI.InkRegistry.get(element)"},has:{kind:"function",args:[{kind:"property",list:!1,name:"element",type:"Element"}],returns:{kind:"property",list:!1,type:"boolean"},description:"Returns true if the given element exists in the registry",example:"InkAPI.InkRegistry.has(element)"},map:{kind:"function",args:[{kind:"property",list:!1,name:"callback",type:"Function"}],returns:{kind:"property",list:!0,type:"T"},description:"Like array map for registry returns an array of whatever the callback returns.",example:"InkAPI.InkRegistry.map((ink, element) => [ink, element]);"},register:{kind:"function",args:[{kind:"property",list:!1,name:"element",type:"InkElement"},{kind:"property",list:!1,name:"props",type:"Hash"}],returns:{kind:"property",list:!1,type:"InkElement"},description:"Registers a InkElement to the registry.",example:"InkAPI.InkRegistry.register(element, { foo: 'bar' });"}},InkElement:{attributes:{kind:"property",list:!1,type:"Hash",description:"Returns all the attributes assigned to the element.",example:"element.attributes; //--> { href: '/', title: 'Home' }"},element:{kind:"property",list:!1,type:"Element",description:"Returns the DOM element.",example:"element.element; //--> <a href='/' title='Home'>"},hasAttribute:{kind:"function",args:[{kind:"property",list:!1,name:"name",type:"string"}],returns:{kind:"property",list:!1,type:"boolean"},description:"Returns true if the element has the given attribute.",example:"element.hasAttribute('href');"},getAttribute:{kind:"function",args:[{kind:"property",list:!1,name:"name",type:"string"}],returns:{kind:"property",list:!1,type:"unknown"},description:"Returns the value of the given attribute.",example:"element.getAttribute('href');"},removeAttribute:{kind:"function",args:[{kind:"property",list:!1,name:"name",type:"string"}],returns:{kind:"property",list:!1,type:"InkElement"},description:"Removes the given attribute from the element.",example:"element.removeAttribute('href');"},setAttribute:{kind:"function",args:[{kind:"property",list:!1,name:"name",type:"string"},{kind:"property",list:!1,name:"value",type:"string"}],returns:{kind:"property",list:!1,type:"InkElement"},description:"Sets the given attribute to the element.",example:"element.setAttribute('href', '/');"},setAttributes:{kind:"function",args:[{kind:"property",list:!1,name:"attributes",type:"Hash"}],returns:{kind:"property",list:!1,type:"InkElement"},description:"Sets multiple attributes to the element.",example:"element.setAttributes({ href: '/', title: 'Home' });"}},InkEmitter:{emit:{kind:"function",args:[{kind:"property",list:!1,name:"event",type:"string"},{kind:"property",list:!1,name:"target",type:"T"}],returns:{kind:"property",list:!1,type:"InkEmitter"},description:"Emits an event with optional parameters.",example:"emitter.emit('click', { x: 10, y: 20 });"},unbind:{kind:"function",args:[{kind:"property",list:!1,name:"event",type:"string"},{kind:"property",list:!1,name:"listener",type:"Function"}],returns:{kind:"property",list:!1,type:"InkEmitter"},description:"Removes an event listener.",example:"emitter.unbind('click', handleClick);"},on:{kind:"function",args:[{kind:"property",list:!1,name:"event",type:"string"},{kind:"property",list:!1,name:"listener",type:"Function"}],returns:{kind:"property",list:!1,type:"InkEmitter"},description:"Adds an event listener.",example:"emitter.on('click', handleClick);"},once:{kind:"function",args:[{kind:"property",list:!1,name:"event",type:"string"},{kind:"property",list:!1,name:"listener",type:"Function"}],returns:{kind:"property",list:!1,type:"InkEmitter"},description:"Adds an event listener that only fires once.",example:"emitter.once('click', handleClick);"}},InkAPI:{BUILD_ID:{kind:"property",list:!1,type:"string",description:"The unique build ID used to map the build cache.",example:"InkAPI.BUILD_ID; //--> 'abc123'"},InkComponent:{kind:"property",list:!1,type:"InkComponent",description:"The Ink component class used to create custom elements.",example:"new InkAPI.InkComponent();"},InkElement:{kind:"property",list:!1,type:"InkElement",description:"The Ink element class used to create custom elements.",example:`new InkAPI.InkElement(
  document.createElement('a'),
  { href: '/' }
); ]`},InkEmitter:{kind:"property",list:!1,type:"InkEmitter",description:"The Ink emitter class used to create custom events.",example:"new InkAPI.InkEmitter();"},InkException:{kind:"property",list:!1,type:"InkException",description:"The Ink exception class used to create custom errors.",example:"throw InkAPI.InkException.for('error message');"},InkRegistry:{kind:"property",list:!1,type:"InkRegistry",description:"The Ink registry class used to store custom elements.",example:"new InkAPI.InkRegistry.createElement('a', { href: '/' });"},children:{kind:"function",args:[{kind:"property",list:!1,name:"component",type:"InkComponent"}],returns:{kind:"property",list:!0,type:"Node"},description:"Returns an array of child nodes.",example:"InkAPI.children(component); //--> [ Element, Text, Element, ... ]"},components:{kind:"property",list:!1,type:"Record<string, InkComponent>",description:"Returns an object of Ink components classes used in the DOM.",example:"new InkAPI.components['fancy-button']; //--> InkComponent"},data:{kind:"property",list:!1,type:"InkDataMap",description:"The Ink data map used to bring server side data to the client.",example:"InkAPI.data.get('props');"},emitter:{kind:"property",list:!1,type:"InkEmitter",description:"The Ink emitter class used to create custom events.",example:"InkAPI.emitter.on('click', () => {});"},props:{kind:"function",args:[{kind:"property",list:!1,name:"component",type:"InkComponent"}],returns:{kind:"property",list:!0,type:"Hash"},description:"Returns an object of component attributes",example:"InkAPI.props(component); //--> { foo: 'bar', count: 4 }"},signal:{kind:"function",args:[{kind:"property",list:!1,name:"component",type:"InkComponent"}],returns:{kind:"property",list:!1,type:"Signal"},description:"Returns a signal object used to re-render components whenever its value changes",example:"const count = InkAPI.signal(1, component)"}},"Render Methods":{asset:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"assetFile",type:"string"}],returns:{kind:"property",list:!1,type:"Asset"},description:"Returns a compiled build asset, given an asset file name.",example:"await compiler.asset('abc123.css'); //--> { type: 'text/css', content: '...' }"},client:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"sourceFile",type:"string"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns a compiled client script, given the the template source file.",example:"await compiler.client('./docs/api.ink'); //client script"},markup:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"sourceFile",type:"string"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns a compiled markup, given the the template source file.",example:"await compiler.markup('./docs/api.ink'); //--> <html>...</html>"},render:{kind:"function",async:!0,args:[{kind:"property",list:!1,name:"sourceFile",type:"string"},{kind:"property",list:!1,name:"props",type:"Hash"}],returns:{kind:"property",list:!1,type:"string"},description:"Returns the final HTML markup, given the the template source file.",example:`await compiler.render('./docs/api.ink', {
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
app.engine('ink', view(compiler));`}}};var ue=class extends ss.default{static id="4c60dc54dc2ac695b83b";static tagname="ui";static classname="Ui_4c60dc54dc2ac695b83b";styles(){return""}template(){(0,Q.classlist)().add("block","my-40","scroll-hidden","curved","shadow-0-0-10-0-0-0-5");let{start:t="InkCompiler"}=(0,Q.props)(),r=(0,Q.signal)([t]),a=(0,Q.signal)(t),n=d=>{let h=d.target.getAttribute("data-type");r.value=[...r.value,h],a.value=h},i=()=>{r.value=r.value.slice(0,r.value.length-1),a.value=r.value[r.value.length-1]};return()=>[l.default.createText(`
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
                  `,!1),...Object.entries(h.args).map(([y,E])=>[l.default.createText(`
                    `,!1),...y>0?[l.default.createText(", ",!1)]:[],l.default.createText(`
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
`,!1)]).element]}};var Me=k(C()),as=k(P()),dt=k(G()),me=class extends as.default{static id="6db660ec31ca715d7e96";static tagname="head";static classname="Head_6db660ec31ca715d7e96";styles(){return""}template(){return(0,dt.classlist)().add("absolute","top-0","right-0","left-170","h-45","bg-t-0","z-1"),()=>[Me.default.createText(`
`,!1),Me.default.createElement("header",{class:"w-full h-full scroll-x-auto"},[Me.default.createText(`
  `,!1),...this._toNodeList((0,dt.children)()),Me.default.createText(`
`,!1)]).element]}};var Pe=k(C()),ns=k(P()),ut=k(G()),fe=class extends ns.default{static id="5fb4822ce248e2b6fb4f";static tagname="left";static classname="Left_5fb4822ce248e2b6fb4f";styles(){return""}template(){return(0,ut.classlist)().add("absolute","top-0","bottom-0","left-0","w-170","bg-t-3","b-solid","b-t-2","by-0","bl-0","br-1","z-2"),()=>[Pe.default.createText(`
`,!1),Pe.default.createElement("aside",{class:"w-full h-full scroll-auto"},[Pe.default.createText(`
  `,!1),...this._toNodeList((0,ut.children)()),Pe.default.createText(`
`,!1)]).element]}};var Fe=k(C()),is=k(P()),mt=k(G()),he=class extends is.default{static id="d54fe27339c3e65ac735";static tagname="main";static classname="Main_d54fe27339c3e65ac735";styles(){return""}template(){return(0,mt.classlist)().add("absolute","top-45","right-0","left-170","bottom-0","bg-black","b-solid","b-t-2","bx-0","bb-0","bt-1"),()=>[Fe.default.createText(`
`,!1),Fe.default.createElement("main",{class:"w-full h-full scroll-auto"},[Fe.default.createText(`
  `,!1),...this._toNodeList((0,mt.children)()),Fe.default.createText(`
`,!1)]).element]}};var N=k(C()),ls=k(P()),ft=k(G()),xe=class extends ls.default{static id="ab38f0e847e1d047c1a8";static tagname="app";static classname="App_ab38f0e847e1d047c1a8";styles(){return""}template(){let{title:t,height:r}=(0,ft.props)(),a=r?`height:${r}px`:"";return()=>[N.default.createText(`
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
`,!1)]).element]}};var $=k(C()),os=k(P());var v=function(s,...t){let r=ir(s);for(let a=0;a<t.length;a++)r=r.replace("%s",String(t[a]));return r},ir=function(s){return s};var ge=class extends os.default{static id="b1ed083cf3561af1816f";static tagname="translate";static classname="Translate_b1ed083cf3561af1816f";styles(){return""}template(){let{trim:t=!1,p:r=!1,li:a=!1,div:n=!1}=this.props,i=this.originalChildren,d=[],h=[];for(let A of i)typeof A=="string"?d.push(A):A instanceof Node&&A.textContent?d.push(A.textContent):(d.push("%s"),h.push(A));let y=d.join("");t&&(y=y.replace(/\s+/," ").trim());let E=ir(y).split("%s"),T=[];for(let A=0;A<E.length;A++)T.push(document.createTextNode(E[A])),h[A]&&T.push(h[A]);return()=>[$.default.createText(`
    `,!1),...r?[$.default.createText(`
      `,!1),$.default.createElement("p",{},[...this._toNodeList(T)]).element,$.default.createText(`
    `,!1)]:a?[,$.default.createText(`
      `,!1),$.default.createElement("li",{},[...this._toNodeList(T)]).element,$.default.createText(`
    `,!1)]:n?[,$.default.createText(`
      `,!1),$.default.createElement("div",{},[...this._toNodeList(T)]).element,$.default.createText(`
    `,!1)]:[,$.default.createText(`
      `,!1),...this._toNodeList(T),$.default.createText(`
    `,!1)]]}};var ht=k(G());var gt=class s extends cs.default{static sync(){return new s().sync()}template(){let t="/docs/getting-started.html",r=v("Getting Started - Ink reactive web component template engine."),a=v("How to install, setup and use Ink in a project."),n=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")},i="https://github.com/stackpress/ink/tree/main/examples";return[e.default.createText(`
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
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,ht.env)("BUILD_ID")}.css`}),e.default.createElement("script",{"data-template":!0,type:"text/json"},[e.default.createText("__TEMPLATE_DATA__",!0)]),e.default.createText(`
  `,!1),e.default.createElement("script",{src:`/ink/build/client/${(0,ht.env)("BUILD_ID")}.js`}),e.default.createText(`
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
    `,!1),...this._toNodeList(v("Introduction")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/index.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(v("Features")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(v("Usage")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(v("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
`,!1)])]),e.default.createText(`
      `,!1),e.default.createElement("aside",{right:!0},[e.default.createText(`
        `,!1),e.default.createElement("menu",{class:"m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto"},[e.default.createText(`
          `,!1),e.default.createElement("h6",{class:"tx-muted tx-14 mb-0 mt-0 pb-10 tx-uppercase"},[e.default.createText(`
            `,!1),...this._toNodeList(v("On this page")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("nav",{class:"tx-14 tx-lh-32"},[e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#http"},[e.default.createText(`
              `,!1),...this._toNodeList(v("1. Add HTTP")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#develop"},[e.default.createText(`
              `,!1),...this._toNodeList(v("2. Add Dev Tools")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#cache"},[e.default.createText(`
              `,!1),...this._toNodeList(v("3. Add File Cache")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#tailwind"},[e.default.createText(`
              `,!1),...this._toNodeList(v("4. Add TailwindCSS")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#express"},[e.default.createText(`
              `,!1),...this._toNodeList(v("5. Add ExpressJS")),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
      `,!1),e.default.createElement("main",{},[e.default.createText(`
        `,!1),e.default.createElement("api-docs",{},[e.default.createText(`
          `,!1),e.default.createElement("h1",{class:"tx-primary tx-uppercase tx-30 py-20"},[e.default.createText(`
            `,!1),...this._toNodeList(v("Getting Started")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            To try out Ink, run the following commands in terminal: 
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npm init -y && npm install --save @stackpress/ink && npm install --save-dev ts-node typescript @types/node
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("element-alert",{solid:!0,curved:!0,info:!0,class:"my-20 tx-lh-24"},[e.default.createText(`
            `,!1),e.default.createElement("element-icon",{name:"info-circle"}),e.default.createText(`
            `,!1),e.default.createElement("strong",{},[e.default.createText("Recommended:",!1)]),e.default.createText(`
            Download the Ink editor plugin at the `,!1),e.default.createElement("a",{target:"_blank",class:"tx-white tx-underline",href:"https://marketplace.visualstudio.com/items?itemName=stackpress.ink-language"},[e.default.createText("Visual Studio Marketplace",!1)]),e.default.createText(`.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Create a server file called
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("src/index.ts",!1)]),e.default.createText(` 
            with the following code that uses the compiler.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"src/index.ts",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{class:"scroll-auto",lang:"js",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              import ink from '@stackpress/ink/compiler';
              // make a ink compiler
              const compiler = ink();
              // render HTML
              compiler.render('./src/page.ink').then(console.log);
              // render CSS
              compiler.styles('./src/page.ink').then(console.log);
              // render JS
              compiler.client('./src/page.ink').then(console.log);
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Last, create a document file called
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("src/page.ink",!1)]),e.default.createText(` 
            with the following template code.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"src/page.ink",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <style>
                .center { text-align: center; }
              </style>
              <script>
                import { env } from '@stackpress/ink';
                const { BUILD_ID, APP_DATA } = env();
                const title = 'Hello World';
              <\/script>
              <html>
                <head>
                  <title>{title}</title>
                  <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                  <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}><\/script>
                </head>
                <body>
                  <h1 class="center">{title}</h1>
                </body>
              </html>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            To try out the basic implementation of Ink and see the 
            results, just run the following command in terminal.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"http"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(v("1. Add HTTP")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            In most cases Ink will be used to render a front end from 
            a server framework. In this example, we will use the native
            NodeJS HTTP module to create a server that renders a page
            using Ink. Start by replacing the 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("'src/index.ts'")]),e.default.createText(`
            file with the following code. 
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("element-alert",{solid:!0,curved:!0,info:!0,class:"my-20 tx-lh-24"},[e.default.createText(`
            `,!1),e.default.createElement("element-icon",{name:"info-circle"}),e.default.createText(`
            `,!1),e.default.createElement("strong",{},[e.default.createText("Optional:",!1)]),e.default.createText(` You can also check your other 
            files to make sure you are following along.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:410,title:"With NodeJS HTTP"},[e.default.createText(`
            `,!1),e.default.createElement("app-head",{},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"http",selector:"#http-index-ts"},[e.default.createText(`
                  src/index.ts
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"http",selector:"#http-page-ink"},[e.default.createText(`
                  src/page.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"http",selector:"#http-package-json"},[e.default.createText(`
                  package.json
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-left",{},[e.default.createText(`
              `,!1),e.default.createElement("h5",{class:"p-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"chevron-down"}),e.default.createText(`
                `,!1),e.default.createElement("span",{},[e.default.createText("src",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"http",selector:"#http-index-ts"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                index.ts
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"http",selector:"#http-page-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                page.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"http",selector:"#http-package-json"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                package.json
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-main",{},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"http-index-ts",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                import http from 'http';
                import ink from '@stackpress/ink/compiler';

                // create ink compiler
                const compiler = ink();
                // create http server
                const server = http.createServer(async (req, res) => {
                  // if build asset...
                  if (req.url?.startsWith('/build/')) {
                    // get filename ie. abc123.js
                    const filename = req.url.substring(7);
                    // get asset
                    const { type, content } = await compiler.asset(filename);
                    // send response
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  // if home page
                  } else if (req.url === '/') {
                    // render and send response
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    return res.end(await compiler.render('./src/page.ink', {
                      title: 'Hello World'
                    }));
                  }
                });
                // listen on port 3000
                server.listen(3000);
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"http-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <style>
                  .center { text-align: center; }
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
                    <h1 class="center">{title}</h1>
                  </body>
                </html>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"http-package-json",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.17"
                  },
                  "devDependencies": {
                    "@types/node": "22.1.0",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            To run your first Ink web app, just run the following 
            command in terminal.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can now check 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[e.default.createText("http://localhost:3000/",!1)]),e.default.createText(` 
            in your browser to see your Ink application. The 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[e.default.createText("ink()",!1)]),e.default.createText(` 
            function takes in the following options, all of 
            which are optional.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("api-ui",{start:"Render Methods"}),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"develop"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(v("2. Add Developer Tools")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Ink provides a separate package for a better development 
            experience when working with server frameworks that utilize 
            the native http module. Start by installing adding 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("@stackpress/ink-dev")]),e.default.createText(`
            to your project.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npm install --save-dev @stackpress/ink-dev
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Next, import the `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("dev()")]),e.default.createText(` 
            function from the package and use it in your existing 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("src/index.ts")]),e.default.createText(` 
            file to create a development server as shown in the example below.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"src/index.ts",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              // ...
              import { dev } from '@stackpress/ink-dev';
              // ...create ink compiler...
              // 1. create dev tools
              const { router, refresh } = dev();

              const server = http.createServer(async (req, res) => {
                // 2. Add dev router
                if (router(req, res)) return;

                if (req.url?.startsWith('/build/')) {
                  // ...
                } else if (req.url === '/') {
                  // 3. sync builder with refresh server
                  refresh.sync(compiler.fromSource('./src/page.ink'));
                  // ... compile and send response ...
                }
              });
              //...listen on port 3000...
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("dev()")]),e.default.createText(` export 
            from  `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("@stackpress/ink-dev")]),e.default.createText(`
            exports tools that supports development mode and accepts the 
            following options.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("api-ui",{start:"DeveloperOptions"}),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            This returns several tools you can use in your server app.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("api-ui",{start:"Developer Tools"}),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Lastly, update the document file 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("src/page.ink")]),e.default.createText(` 
            to include the development script 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList('<script src="/dev.js"><\/script>')]),e.default.createText(` 
            as shown below.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"src/page.ink",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <style>
                /* ... */
              </style>
              <script>
                //... 
              <\/script>
              <html>
                <head>
                  <!-- ... -->
                  <!-- 4. include dev script -->
                  <script src="/dev.js"><\/script>
                </head>
                <body>
                  <!-- ... -->
                </body>
              </html>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The project should now look like the example below.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:410,title:"With Developer Tools",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("app-head",{},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"develop",selector:"#develop-index-ts"},[e.default.createText(`
                  src/index.ts
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"develop",selector:"#develop-page-ink"},[e.default.createText(`
                  src/page.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"develop",selector:"#develop-package-json"},[e.default.createText(`
                  package.json
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-left",{},[e.default.createText(`
              `,!1),e.default.createElement("h5",{class:"p-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"chevron-down"}),e.default.createText(`
                `,!1),e.default.createElement("span",{},[e.default.createText("src",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"develop",selector:"#develop-index-ts"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                index.ts
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"develop",selector:"#develop-page-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                page.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"develop",selector:"#develop-package-json"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                package.json
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-main",{},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"develop-index-ts",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                import http from 'http';
                import ink from '@stackpress/ink/compiler';
                import { dev } from '@stackpress/ink-dev';

                const compiler = ink();
                // 1. create dev tools
                const { router, refresh } = dev();

                const server = http.createServer(async (req, res) => {
                  // 2. Add dev router
                  if (router(req, res)) return;
                  
                  if (req.url?.startsWith('/build/')) {
                    const filename = req.url.substring(7);
                    const { type, content } = await compiler.asset(filename);
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  } else if (req.url === '/') {
                    // 3. sync builder with refresh server
                    refresh.sync(compiler.fromSource('./src/page.ink'));
                    
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    return res.end(await compiler.render('./src/page.ink', {
                      title: 'Hello World'
                    }));
                  }
                });
                server.listen(3000);
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"develop-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <style>
                  .center { text-align: center; }
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
                    <script src="/dev.js"><\/script>
                  </head>
                  <body>
                    <h1 class="center">{title}</h1>
                  </body>
                </html>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"develop-package-json",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.17"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "0.3.17",
                    "@types/node": "22.1.0",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Re-run the following command in terminal. It shouldn't look 
            like anything has changed, but the development server is now
            running in the background. Try to change
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("src/page.ink")]),e.default.createText(`.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Whenever `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("src/page.ink")]),e.default.createText(` 
            is saved, the development server will automatically refresh 
            the page. Components will also be updated in real-time without
            the page reloading.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"cache"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(v("3. Add Cache Files")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Ink has an out-of-the-box cache and build strategy that
            can be used to store and serve pre-compiled files. To use the
            cache, you just need to import it from the 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("@stackpress/ink/compiler")]),e.default.createText(` 
            module and use it like the following example.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"src/index.ts",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              // ...
              import path from 'path';
              import { cache } from '@stackpress/ink/compiler';
              // ...create ink compiler...
              // 1. use cache
              compiler.use(cache({
                buildPath: path.join(__dirname, '../build')
              }));
              // ...create dev tools...
              // ...create http server...
              // ...listen on port 3000...
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("src/index.ts")]),e.default.createText(` 
            file should now look like the example below.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"src/index.ts",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              import path from 'path';
              import http from 'http';
              import ink, { cache } from '@stackpress/ink/compiler';
              import { dev } from '@stackpress/ink-dev';

              const compiler = ink();
              // 1. use cache
              compiler.use(cache({
                buildPath: path.join(__dirname, '../build')
              }));
              const { router, refresh } = dev();
              const server = http.createServer(async (req, res) => {
                if (router(req, res)) return;
                if (req.url?.startsWith('/build/')) {
                  const filename = req.url.substring(7);
                  const { type, content } = await compiler.asset(filename);
                  res.writeHead(200, { 'Content-Type': type });
                  return res.end(content);
                } else if (req.url === '/') {
                  refresh.sync(compiler.fromSource('./src/page.ink'));
                  res.writeHead(200, { 'Content-Type': 'text/html' });
                  return res.end(await compiler.render('./src/page.ink', {
                    title: 'Hello World'
                  }));
                }
              });
              server.listen(3000);
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Re-run the following command in terminal to start the cache 
            server.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Load 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[e.default.createText("http://localhost:3000/",!1)]),e.default.createText(` 
            in your browser. After loading you should see files that were 
            generated in a new build folder found in your project root. 
            The `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[e.default.createText("cache()",!1)]),e.default.createText(` plugin is 
            just a wrapper that listens for build related events and
            stores the generated files in the specified build path.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:400,title:"cache.ts (Internal)",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              emitter.on('manifest-resolved', (event: Event<string>) => {
                const manifest = event.params.manifest as Manifest
                //write the manifest to the file system
                writeFile(paths.manifest, manifest.toJson());
              });

              // on pre render, try to use cache if live
              emitter.on('render', (event: Event<string>) => {
                //if not live, dont retrieve from cache
                if (environment !== 'production') return;
                //extract props and builder from params
                const props = (event.params.props || {}) as Hash;
                const builder = event.params.builder as Builder;
                //get fs and id ie. abc123c
                const { fs, id } = builder.document;
                //get cache file path ie. /path/to/docs/build/client/abc123c.js
                const cache = path.join(paths.build, 'server', \`\${id}.js\`);
                //if production and cache file exists
                if (fs.existsSync(cache)) {
                  //get the build object
                  const build = compiler.fromCache(cache);
                  //render the document
                  const html = build.document.render(props);
                  //return the cached content
                  event.set(html);
                }
              });

              // on post render, cache (dev and live)
              emitter.on('rendered', (event: Event<string>) => {
                //extract build and builder from params
                const builder = event.params.builder as Builder;
                const html = event.params.html as string;
                //get fs and id ie. abc123c
                const { id } = builder.document;
                //get cache file path ie. /path/to/docs/build/client/abc123c.html
                const cache = path.join(paths.build, 'client', \`\${id}.html\`);
                //write the server source code to cache
                writeFile(cache, html);
              });

              // on pre client build, try to use cache if live
              emitter.on('build-client', (event: Event<string>) => {
                //if not live, dont retrieve from cache
                if (environment !== 'production') return;
                //extract builder from params
                const builder = event.params.builder as Builder;
                //get fs and id ie. abc123c
                const id = builder.document.id;
                //get cache file path ie. /path/to/docs/build/client/abc123c.js
                const cache = path.join(paths.build, 'client', \`\${id}.js\`);
                //if cache file exists, send it
                if (fs.existsSync(cache)) {
                  event.set(fs.readFileSync(cache, 'utf8'));
                }
              });

              // on post client build, cache (dev and live)
              emitter.on('built-client', (event: Event<string>) => {
                //extract builder and sourcecode from params
                const builder = event.params.builder as Builder;
                const sourceCode = event.params.sourceCode as string;
                //get fs and id ie. abc123c
                const id = builder.document.id;
                //get cache file path ie. /path/to/docs/build/client/abc123c.js
                const cache = path.join(paths.build, 'client', \`\${id}.js\`);
                //write the client source code to cache
                writeFile(cache, sourceCode);
              });

              // on pre markup build, try to use cache if live
              emitter.on('build-markup', /* ... */);
              //on post markup build, cache (dev and live)
              emitter.on('built-markup', /* ... */);
              //on pre server build, try to use cache if live
              emitter.on('build-server', /* ... */);
              //on post server build, cache (dev and live)
              emitter.on('built-server', /* ... */);
              //on pre styles build, try to use cache if live
              emitter.on('build-styles', /* ... */);
              //on post styles build, cache (dev and live)
              emitter.on('built-styles', /* ... */);

              // Initialize: if there's a manifest
              if (fs.existsSync(paths.manifest)) {
                //load the manifest file
                compiler.manifest.load(
                  JSON.parse(fs.readFileSync(paths.manifest, 'utf-8'))
                );
              }
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            This means you can also use your own cache strategy by 
            listening to the events emitted by the compiler. The
            following table lists all the events that the compiler
            emits during the build cycle of a document.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("api-ui",{start:"EventEmitter"}),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"tailwind"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(v("4. Add TailwindCSS")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Tailwind is an atomic CSS collection of styles that favours 
            small, single-purpose classes with their selector names based 
            on its visual function. It works by using a build process to
            read your source files to generate its styles based only on 
            what is being used. This makes using Tailwind optimal because
            it doesn't bloat your CSS with unused styles.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            At the same time, web components with the
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<style>")]),e.default.createText(` tag imply using the 
            component's shadow DOM which will encapsulate the styles within
            the component and not be affected by global styles. Since 
            Tailwind in turn implies that you do not need to (necessarily) 
            define styles, you do not need to use the shadow DOM at all if
            you are using Tailwind.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("element-alert",{solid:!0,curved:!0,warning:!0,class:"my-20 tx-lh-24"},[e.default.createText(`
            `,!1),e.default.createElement("element-icon",{name:"exclamation-triangle"}),e.default.createText(`
            `,!1),e.default.createElement("strong",{},[e.default.createText("Warning:",!1)]),e.default.createText(`
            The caveat for using TailwindCSS, means that web components 
            using it will not be shippable to other projects that do not
            use Tailwind. It all comes down to preference in the end.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Ink has a separate package called
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("@stackpress/ink-tailwind")]),e.default.createText(`
            to use TailwindCSS with Ink. This is just another wrapper 
            class that listens to the compiler's build events. You can 
            install this plugin by running the following command in terminal.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npm install --save-dev @stackpress/ink-tailwind autoprefixer postcss tailwindcss
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Next, in `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("src/index.ts")]),e.default.createText(`
            import the `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("tailwind()")]),e.default.createText(`
            plugin from the package and use it in the compiler as shown
            in the example below.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"src/index.ts",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              // ...
              import { tailwind } from '@stackpress/ink-tailwind';
              // ...create ink compiler...
              // ...use cache...
              // 1. Use Tailwind
              compiler.use(tailwind({
                darkMode: 'class',
                theme: { extend: {} },
                plugins: [],
                content: []
              }));

              // ...create dev tools...
              // ...create http server...
              // ...listen on port 3000...
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Lastly, in `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("src/page.ink")]),e.default.createText(`
            add the Tailwind directives inside the 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<style>")]),e.default.createText(` tag like the code 
            below. Also add a tailwind class, (like 
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("<style>")]),e.default.createText(`) to the 
            markup to verify that the plugin is working and the styles 
            are being applied.
          `,!1)]),e.default.createText(`
          
          `,!1),e.default.createElement("ide-app",{title:"src/page.ink",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <style>
                /* 2. Add tailwind directives */
                @tailwind base;
                @tailwind components;
                @tailwind utilities;

                /* ...Other styles... */
              </style>
              <script>
                //... 
              <\/script>
              <html>
                <head>
                  <!-- ... -->
                </head>
                <body>
                  <h1 class="text-center">{title}</h1>
                </body>
              </html>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Check to see if the project files look like the example below.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:410,title:"With TailwindCSS",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("app-head",{},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"tailwind",selector:"#tailwind-index-ts"},[e.default.createText(`
                  src/index.ts
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"tailwind",selector:"#tailwind-page-ink"},[e.default.createText(`
                  src/page.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"tailwind",selector:"#tailwind-package-json"},[e.default.createText(`
                  package.json
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-left",{},[e.default.createText(`
              `,!1),e.default.createElement("h5",{class:"p-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"chevron-down"}),e.default.createText(`
                `,!1),e.default.createElement("span",{},[e.default.createText("src",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"tailwind",selector:"#tailwind-index-ts"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                index.ts
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"tailwind",selector:"#tailwind-page-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                page.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"tailwind",selector:"#tailwind-package-json"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                package.json
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-main",{},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"tailwind-index-ts",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                import path from 'path';
                import http from 'http';
                import ink, { cache } from '@stackpress/ink/compiler';
                import { dev } from '@stackpress/ink-dev';
                import { tailwind } from '@stackpress/ink-tailwind';

                const compiler = ink();
                compiler.use(cache({
                  buildPath: path.join(__dirname, '../build')
                }));
                // 1. use tailwind
                compiler.use(tailwind({
                  darkMode: 'class',
                  theme: { extend: {} },
                  plugins: [],
                  content: []
                }));
                
                const { router, refresh } = dev();
                const server = http.createServer(async (req, res) => {
                  if (router(req, res)) return;
                  if (req.url?.startsWith('/build/')) {
                    const filename = req.url.substring(7);
                    const { type, content } = await compiler.asset(filename);
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  } else if (req.url === '/') {
                    refresh.sync(compiler.fromSource('./src/page.ink'));
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    return res.end(await compiler.render('./src/page.ink', {
                      title: 'Hello World'
                    }));
                  }
                });
                server.listen(3000);
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"tailwind-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <style>
                  /* 2. Add tailwind directives */
                  @tailwind base;
                  @tailwind components;
                  @tailwind utilities;
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
                    <script src="/dev.js"><\/script>
                  </head>
                  <body>
                    <h1 class="text-center">{title}</h1>
                  </body>
                </html>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"tailwind-package-json",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.17"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "0.3.17",
                    "@stackpress/ink-tailwind": "0.3.17",
                    "@types/node": "22.1.0",
                    "autoprefixer": "10.4.20",
                    "postcss": "8.4.44",
                    "tailwindcss": "3.4.10",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Re-run the following command in terminal to initialize the 
            tailwind plugin.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Load 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[e.default.createText("http://localhost:3000/",!1)]),e.default.createText(` 
            in your browser. After loading you should see files that were 
            generated in a new build folder found in your project root. 
            Try to add a Tailwind class to the markup in
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("src/page.ink")]),e.default.createText(` and 
            save. The development server will automatically refresh 
            the styles and component styles will also be update in 
            real-time without the page reloading.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"express"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(v("5. Add ExpressJS")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Ink has a separate package called
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("@stackpress/ink-express")]),e.default.createText(`
            to use Express with Ink. You can install this plugin by 
            running the following command in terminal.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npm install --save @stackpress/ink-express express && npm install --save-dev @types/express
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The package 
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("@stackpress/ink-express")]),e.default.createText(`
            exports two plugins for express.
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("view()")]),e.default.createText(` is the view 
            engine for production (live) environments. It can be used with
            an express app like 
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("app.use(view(compiler))")]),e.default.createText(`.
            The other export, `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("dev()")]),e.default.createText(` 
            is the same export from the Developer Tools documentation above, 
            but returns several tools used to integrate with express.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("api-ui",{start:"Express Developer Tools"}),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Example logic to use the all the Ink Express tools together
            with Ink developer tools could look like the following code
            that cases for 
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("development")]),e.default.createText(` and 
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("production")]),e.default.createText(` modes.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:12,lang:"js",class:"py-20"},[...this._toNodeList(`
            import { view, dev } from '@stackpress/ink-express';

            //create ink compiler
            const compiler = ink({ cwd: __dirname, minify: false });
            //create express app
            const app = express();
            //set the view engine to ink
            app.set('views', path.join(__dirname, 'pages'));
            app.set('view engine', 'ink');

            //if production (live)
            if (process.env.NODE_ENV === 'production') {
              //let's use express' template engine feature
              app.engine('ink', view(compiler));
              //...other production settings...
            //if development mode
            } else {
              //get development middleware
              const { router, view } = dev({ cwd: __dirname });
              //use development middleware
              app.use(router);
              //let's use express' template engine feature
              app.engine('ink', view(compiler));
            }
          `)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            And you can now case for development mode in 
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("src/page.ink")]),e.default.createText(`
            like in the example below
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:12,class:"py-20"},[...this._toNodeList(`
            <style>
              /* ... */
            </style>
            <script>
              import { env } from '@stackpress/ink';
              const { NODE_ENV } = env();
            <\/script>
            <html>
              <head>
                <!-- ... -->
                <if true={NODE_ENV !== 'production'}>
                  <script src="/dev.js"><\/script>
                </if>
              </head>
              <body>
                <!-- ... -->
              </body>
            </html>
          `)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Check to see if the project files look like the example below.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:410,title:"With ExpressJS",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("app-head",{},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"express",selector:"#express-index-ts"},[e.default.createText(`
                  src/index.ts
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"express",selector:"#express-page-ink"},[e.default.createText(`
                  src/page.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"express",selector:"#express-package-json"},[e.default.createText(`
                  package.json
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-left",{},[e.default.createText(`
              `,!1),e.default.createElement("h5",{class:"p-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"chevron-down"}),e.default.createText(`
                `,!1),e.default.createElement("span",{},[e.default.createText("src",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"express",selector:"#express-index-ts"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                index.ts
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"express",selector:"#express-page-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                page.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"express",selector:"#express-package-json"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                package.json
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-main",{},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"express-index-ts",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                import path from 'path';
                import express from 'express';
                import ink, { cache } from '@stackpress/ink/compiler';
                import { view, dev } from '@stackpress/ink-express';
                import { tailwind } from '@stackpress/ink-tailwind';

                //create ink compiler
                const compiler = ink();
                //use tailwind
                compiler.use(tailwind({
                  darkMode: 'class',
                  theme: { extend: {} },
                  plugins: [],
                  content: []
                }));
                //use build cache
                compiler.use(cache({ 
                  environment: process.env.NODE_ENV,
                  buildPath: path.join(__dirname, '../build')
                }));

                //create express app
                const app = express();
                //set the view engine to ink
                app.set('views', __dirname);
                app.set('view engine', 'ink');

                //if production (live)
                if (process.env.NODE_ENV === 'production') {
                  //let's use express' template engine feature
                  app.engine('ink', view(compiler));
                  //...other production settings...
                //if development mode
                } else {
                  //get development middleware
                  const { router, view } = dev({ cwd: __dirname });
                  //use development middleware
                  app.use(router);
                  //let's use express' template engine feature
                  app.engine('ink', view(compiler));
                }

                //routes
                app.get('/build/:build', async (req, res) => {
                  //get filename ie. abc123.js
                  const filename = req.params.build;
                  //get asset
                  const { type, content } = await compiler.asset(filename);
                  //send response
                  res.type(type).send(content);
                });

                app.get('/', (req, res) => {
                  //now use the ink template engine
                  res.render('page', { title: 'Hello World' });
                  res.type('text/html');
                });

                //listen
                app.listen(3000, () => {
                  console.log('HTTP server is running on http://localhost:3000');
                });
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"express-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <style>
                  @tailwind base;
                  @tailwind components;
                  @tailwind utilities;
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA, NODE_ENV } = env();
                  const { title } = props();
                <\/script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}><\/script>
                    <if true={NODE_ENV !== 'production'}>
                      <script src="/dev.js"><\/script>
                    </if>
                  </head>
                  <body>
                    <h1 class="text-center">{title}</h1>
                  </body>
                </html>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"express-package-json",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "^0.1.8",
                    "@stackpress/ink-express": "^0.1.8",
                    "express": "^4.19.2"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "^0.1.8",
                    "@stackpress/ink-tailwind": "^0.1.8",
                    "@types/express": "^4.17.21",
                    "@types/node": "^22.5.3",
                    "autoprefixer": "^10.4.20",
                    "postcss": "^8.4.45",
                    "tailwindcss": "^3.4.10",
                    "ts-node": "^10.9.2",
                    "typescript": "^5.5.4"
                  }
                }
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Re-run the following command in terminal to initialize the 
            re-run your application using Express.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Load 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[e.default.createText("http://localhost:3000/",!1)]),e.default.createText(` 
            in your browser. After loading you should see everything is 
            exactly as it was, but you now benefit from using ExpressJS.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("h3",{class:"tx-t-1 tx-uppercase tx-22 pt-40 pb-20"},[e.default.createText(`
            -- `,!1),...this._toNodeList(v("Read On")),e.default.createText(` --
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            To see other getting started examples with various frameworks,
            you can check out the following project examples in the 
            official repository.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ul",{},[e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${i}/with-fastify`},[e.default.createText(`
                Fastify
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${i}/with-hapi`},[e.default.createText(`
                Hapi
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${i}/with-koa`},[e.default.createText(`
                Koa
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${i}/with-nest`},[e.default.createText(`
                NestJS
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${i}/with-restify`},[e.default.createText(`
                Restify
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${i}/with-webpack`},[e.default.createText(`
                Webpack
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(` 
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-10"},[e.default.createText(`
            Depending on how you plan to use Ink, you can also look at 
            the following project setups.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ul",{},[e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",href:"/ink/docs/template-engine.html"},[e.default.createText(`
                Template Engine
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",href:"/ink/docs/single-page.html"},[e.default.createText(`
                Single Page App
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",href:"/ink/docs/static-site.html"},[e.default.createText(`
                Static Site Generator
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
                Web Component Publisher
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          
          `,!1),e.default.createElement("nav",{class:"flex"},[e.default.createText(`
            `,!1),e.default.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/index.html"},[e.default.createText(`
              `,!1),e.default.createElement("element-icon",{name:"chevron-left",theme:"tx-1"}),e.default.createText(`
              `,!1),...this._toNodeList(v("Documentation")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
              `,!1),...this._toNodeList(v("Markup Syntax")),e.default.createText(`
              `,!1),e.default.createElement("element-icon",{name:"chevron-right",theme:"tx-1"}),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("footer",{class:"foot"},[]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]),e.default.createText(`
`,!1)])]}},Ga={PanelLayout_e83da818dc31723bcd5d:te,ElementAlert_502d0a1992f720baceb4:ae,ElementIcon_75af7664df8b2546e65a:ne,ElementTab_047b9fc58e7239d4a7f8:le,ApiDocs_7e4942547226dfeef0ae:de,ApiUi_4c60dc54dc2ac695b83b:ue,ApiIdeCode_d21b237295245a3b7d61:U,AppHead_6db660ec31ca715d7e96:me,AppLeft_5fb4822ce248e2b6fb4f:fe,AppMain_d54fe27339c3e65ac735:he,IdeApp_ab38f0e847e1d047c1a8:xe,IdeCode_d21b237295245a3b7d61:U,I18nTranslate_b1ed083cf3561af1816f:ge},us={"panel-layout":te,"element-alert":ae,"element-icon":ne,"element-tab":le,"api-docs":de,"api-ui":ue,"app-head":me,"app-left":fe,"app-main":he,"ide-app":xe,"ide-code":U,"i18n-translate":ge},Ja="e06f4d82f045144e41f0";xt.default.once("ready",()=>{gt.sync();for(let[s,t]of Object.entries(us))customElements.getName(t)||customElements.define(s,t);xt.default.emit("mounted",document.body)});return Es(Wa);})();
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
