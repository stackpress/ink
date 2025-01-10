var InkAPI=(()=>{var tn=Object.create;var Oe=Object.defineProperty;var rn=Object.getOwnPropertyDescriptor;var nn=Object.getOwnPropertyNames;var sn=Object.getPrototypeOf,an=Object.prototype.hasOwnProperty;var A=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports),ln=(n,t)=>{for(var r in t)Oe(n,r,{get:t[r],enumerable:!0})},er=(n,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of nn(t))!an.call(n,a)&&a!==r&&Oe(n,a,{get:()=>t[a],enumerable:!(s=rn(t,a))||s.enumerable});return n};var v=(n,t,r)=>(r=n!=null?tn(sn(n)):{},er(t||!n||!n.__esModule?Oe(r,"default",{value:n,enumerable:!0}):r,n)),on=n=>er(Oe({},"__esModule",{value:!0}),n);var X=A(dt=>{"use strict";Object.defineProperty(dt,"__esModule",{value:!0});var pt=class{constructor(){this._parent=null}get parent(){return this._parent}get parentElement(){return this._parent}set parent(t){this._parent=t}};dt.default=pt});var ft=A(fe=>{"use strict";var cn=fe&&fe.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(fe,"__esModule",{value:!0});var pn=cn(X()),ut=class extends pn.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#comment",this.type=8,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!--${this.value}-->`}};fe.default=ut});var ht=A(me=>{"use strict";var dn=me&&me.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(me,"__esModule",{value:!0});var un=dn(X()),mt=class extends un.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#doctype",this.type=10,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!DOCTYPE ${this.value}>`}};me.default=mt});var yt=A(he=>{"use strict";var fn=he&&he.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(he,"__esModule",{value:!0});var mn=fn(X()),hn=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],gt=class n extends mn.default{get attributes(){return Object.fromEntries(this._attributes)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof n)}get nodeName(){return this.name.toUpperCase()}get nodes(){let t=[this];return this._flatten(Array.from(this.children),t),t}get nodeType(){return this.type}get parent(){return this._parent}set parent(t){this._parent=t}constructor(t,r={},s=[]){super(),this.type=1,this._parent=null,this.name=t,this._attributes=new Map(Object.entries(r)),this.children=new Set(s.filter(Boolean))}appendChild(t){return this.children.add(t),t.parent=this,this}export(){return{type:this.type,name:this.name,attributes:Object.fromEntries(this._attributes.entries()),children:Array.from(this.children).map(t=>t.export())}}getAttribute(t){return this._attributes.get(t)}hasAttribute(t){return this._attributes.has(t)}removeAttribute(t){return this._attributes.delete(t),this}removeChild(t){this.children.delete(t),t.parent=null}setAttribute(t,r){return this._attributes.set(t,r),this}toString(){let t=Array.from(this._attributes.entries()),r=t.length>0?" "+t.map(([a,i])=>{if(typeof i=="string"&&!/["<>\n]/.test(i))return`${a}="${i}"`;if(typeof i=="boolean")return i?a:""}).join(" "):"";if(hn.includes(this.name))return`<${this.name}${r} />`;let s=Array.from(this.children.values()).map(a=>a.toString()).join("");return`<${this.name}${r}>${s}</${this.name}>`}_flatten(t,r){t.forEach(s=>{r.push(s),s instanceof n&&this._flatten(Array.from(s.children),r)})}};he.default=gt});var bt=A(ge=>{"use strict";var gn=ge&&ge.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(ge,"__esModule",{value:!0});var yn=gn(X()),xt=class extends yn.default{get nodeName(){return"#text"}get nodeType(){return this.type}get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,r=!1){super(),this.name="#text",this.type=3,this._escape=r,this._value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return this.value}};ge.default=xt});var je=A(ye=>{"use strict";var Fe=ye&&ye.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(ye,"__esModule",{value:!0});var xn=Fe(ft()),bn=Fe(ht()),Tt=Fe(yt()),Tn=Fe(bt()),kt=class n{static createComment(t,r){let s=new xn.default(t);return r&&(s.parent=r),s}static createDoctype(t="html",r){let s=new bn.default(t);return r&&(s.parent=r),s}static createElement(t,r={},s=[],a){let i=new Tt.default(t,r,s);return a&&(i.parent=a),i}static createText(t,r=!1,s){let a=new Tn.default(t,r);return s&&(a.parent=s),a}static import(t,r){return t.map(s=>{let{value:a}=s,{name:i,attributes:d,children:h}=s;switch(s.type){case 1:let T=this.createElement(i,d,[],r);return n.import(h,T).forEach(E=>T.appendChild(E)),T;case 3:return this.createText(a,!0,r);case 8:return this.createComment(a,r);case 10:return this.createDoctype(a,r)}return null}).filter(Boolean)}static load(t){return new n(t)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof Tt.default)}get nodes(){return Array.from(this.children).map(t=>t instanceof Tt.default?t.nodes:[t]).flat()}constructor(t){this.children=new Set(t.filter(Boolean))}export(){return this.childList.map(t=>t.export())}toString(){return Array.from(this.children).map(t=>t.toString()).join("")}};ye.default=kt});var W=A(xe=>{"use strict";Object.defineProperty(xe,"__esModule",{value:!0});xe.TemplateData=void 0;var Pe=class{constructor(){window.__TEMPLATE_DATA__||(window.__TEMPLATE_DATA__={})}clear(){return window.__TEMPLATE_DATA__={},this}delete(t){return this.has(t)?(delete window.__TEMPLATE_DATA__[t],!0):!1}entries(){return Object.entries(window.__TEMPLATE_DATA__)}has(t){return t in window.__TEMPLATE_DATA__}get(t){return window.__TEMPLATE_DATA__[t]}keys(){return Object.keys(window.__TEMPLATE_DATA__)}set(t,r){return window.__TEMPLATE_DATA__[t]=r,this}values(){return Object.values(window.__TEMPLATE_DATA__)}};xe.TemplateData=Pe;var kn=new Pe;xe.default=kn});var be=A(O=>{"use strict";var En=O&&O.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(O,"__esModule",{value:!0});O.match=O.ClientEmitter=O.events=void 0;O.bindAttribute=qe;O.unbindAttribute=Et;var tr=En(j());O.events=["click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","wheel","keydown","keypress","keyup","blur","change","contextmenu","focus","input","submit","invalid","reset","search","select","copy","cut","paste","drag","dragstart","dragend","dragover","dragenter","dragleave","drop","scroll","durationchange","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","animationstart","animationend","animationiteration","transitionend","toggle"];var $e=class extends EventTarget{emit(t,r){return this.dispatchEvent(new CustomEvent(t,{detail:r})),this}on(t,r){if(t==="ready"&&document.readyState!=="loading"){let s=new CustomEvent("ready");return setTimeout(()=>r(s),1),this}return this.addEventListener(t,r),this}once(t,r){let s=a=>{this.unbind(t,s),r(a)};return this.on(t,s),this}unbind(t,r){return this.removeEventListener(t,r),this}};O.ClientEmitter=$e;var vn=(n,t,r=!0)=>Array.from(n.querySelectorAll("*")).filter(s=>{let a=tr.default.get(s),i=a&&a.hasAttribute(t)&&(!r||!a.hasEvent(t));return i&&a.addEvent(t),i}).map(s=>tr.default.get(s));O.match=vn;function qe(n,t){Be.on("mounted",r=>{if(!r.detail)return;let s=r.detail;(0,O.match)(s.shadowRoot||s,n).forEach(t)})}function Et(n,t){Be.on("unmounted",r=>{if(!r.detail)return;let s=r.detail;(0,O.match)(s.shadowRoot||s,n,!1).forEach(t)})}var Be=new $e;O.default=(document.onreadystatechange=()=>{document.readyState!=="loading"&&Be.emit("ready")},qe("mount",n=>{let t=n.getAttribute("mount");if(typeof t=="function"){let r=new CustomEvent("mount",{detail:{node:n,target:n.element}});t(r)}}),Et("unmount",n=>{let t=n.getAttribute("unmount");if(typeof t=="function"){let r=new CustomEvent("unmount",{detail:{node:n,target:n.element}});t(r)}}),qe("if",n=>{let t=n.getAttribute("if");(t===!1||t==="false"||typeof t=="function"&&!t())&&n.element.remove()}),O.events.forEach(n=>{qe(n,t=>{let r=t.getAttribute(n);typeof r=="function"&&(t.element.removeEventListener(n,r),t.element.addEventListener(n,r))}),Et(n,t=>{let r=t.getAttribute(n);typeof r=="function"&&t.element.removeEventListener(n,r)})}),Be)});var He=A(Te=>{"use strict";var _n=Te&&Te.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Te,"__esModule",{value:!0});var vt=_n(be()),_t=class{get attributes(){return Object.assign({},this._attributes)}get element(){return this._element}get events(){return this._events}constructor(t,r){this._events=new Set,this._element=t,this._attributes=r}addEvent(t){return this._events.add(t),this}camel(){return Object.fromEntries(Object.entries(this._attributes).map(([t,r])=>t==="class"?["className",r]:[t.replace(/-([a-z])/g,(a,i)=>i.toUpperCase()).replaceAll("-",""),r]))}getAttribute(t){return this._attributes[t]}hasAttribute(t){return t in this._attributes}hasEvent(t){return this._events.has(t)}removeAttribute(t,r=!1){let s=this.getAttribute(t);return typeof s>"u"?this:(delete this._attributes[t],r||vt.default.emit("attribute-remove",{element:this,key:t,previous:s}),this)}setAttribute(t,r,s=!1){if(typeof r>"u")return this.removeAttribute(t,s);let a=this.getAttribute(t);return a===r?this:(this._attributes[t]=r,s||(typeof a>"u"?vt.default.emit("attribute-create",{element:this,key:t,value:r}):vt.default.emit("attribute-update",{element:this,key:t,value:r,previous:a})),this)}setAttributes(t,r=!1){for(let[a,i]of Object.entries(t))this.setAttribute(a,i,r);let s=Object.keys(t);for(let a of Object.keys(this._attributes))s.includes(a)||this.removeAttribute(a,r);return this}tree(t,r,s){if(t||(t=Object.assign({},this._attributes)),r){let i=r.split("-");if(i.length>0){let d=i.shift();i.length>0?(t[d]||(t[d]={}),this.tree(t[d],i.join("-"),s)):t[d]=s}return t}let a={};for(let[i,d]of Object.entries(t))this.tree(a,i,d);return a}};Te.default=_t});var At=A(wt=>{"use strict";Object.defineProperty(wt,"__esModule",{value:!0});wt.default=()=>window.InkAPI});var j=A(ke=>{"use strict";var sr=ke&&ke.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(ke,"__esModule",{value:!0});var rr=sr(He()),wn=sr(At()),nr=document.createElement("textarea"),An=n=>(nr.innerHTML=n,nr.value),Ue=class n{static get elements(){return this._elements}static createComponent(t,r,s={},a=[]){var i;let{registered:d}=r;if(!d&&!(!((i=(0,wn.default)())===null||i===void 0)&&i.elements[t]))return this.createVirtualComponent(t,r,s,a);let h=d||t,T=document.createElement(h);customElements.whenDefined(h).then(()=>{customElements.upgrade(T),T.initiated||T.connectedCallback()});let E=n.register(T,s);E.setAttributes(s,!0);for(let[k,I]of Object.entries(s))typeof I=="string"?T.setAttribute(k,I):I===!0&&T.setAttribute(k,"");return this._cleanChildren(a).forEach(k=>T.appendChild(k)),E}static createElement(t,r={},s=[]){let a=document.createElement(t);for(let[i,d]of Object.entries(r))typeof d=="string"?a.setAttribute(i,d):d===!0&&a.setAttribute(i,"");return this._cleanChildren(s).forEach(i=>a.appendChild(i)),this.register(a,r)}static createText(t,r=!0){return document.createTextNode(An(t))}static createVirtualComponent(t,r,s={},a=[]){let i=document.createElement(t);return i.definition=r,Object.setPrototypeOf(i,r.prototype),i.constructor=r.constructor,i.constructor.id=r.id,i.constructor.tagname=r.tagname,i.constructor.classname=r.classname,r.observedAttributes&&(i.constructor.observedAttributes=r.observedAttributes),i.register(s,a),i.element}static cloneElement(t,r=!1){var s;let a=t;if(a.definition){let i=a.originalChildren||[];return this.createComponent(a.nodeName.toLowerCase(),a.definition,a.props||{},r?i.map(d=>this.cloneElement(d,r)):[]).element}else if(t instanceof HTMLElement){let i=Array.from(t.childNodes);return this.createElement(t.nodeName.toLowerCase(),this.has(t)?(s=this.get(t))===null||s===void 0?void 0:s.attributes:Object.fromEntries(Array.from(t.attributes).map(d=>[d.name,d.value])),r?i.map(d=>this.cloneElement(d,r)):[]).element}return t.cloneNode(r)}static filter(t){let r=[];return this._elements.forEach((s,a)=>{t(s,a)&&r.push(s)}),r}static get(t){return this._elements.get(t)||null}static has(t){return this._elements.has(t)}static map(t){let r=[];return this._elements.forEach((s,a)=>{r.push(t(s,a))}),r}static register(t,r,s=!1){if(this.has(t))return this.get(t);r||Array.from(t.attributes).forEach(i=>{r=r||{},r[i.name]=i.value!==""?i.value:!0});let a=new rr.default(t,r||{});return this._elements.set(t,a),s&&Array.from(t.children).forEach(i=>{i instanceof Element&&this.register(i,void 0,!0)}),a}static _cleanChildren(t){return Array.from(t).filter(r=>typeof r<"u").map(r=>typeof r=="string"?this.createText(r):r instanceof rr.default?r.element:r)}};Ue._elements=new Map;ke.default=Ue});var ar=A(Ee=>{"use strict";var St=Ee&&Ee.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Ee,"__esModule",{value:!0});var In=St(je()),It=St(W()),Ct=St(j()),Dt=class{constructor(){let t=document.querySelector("script[data-template]");if(!t)throw new Error("TEMPLATE_DATA not found");try{window.__TEMPLATE_DATA__=JSON.parse(t.innerText.trim()),Object.entries(window.__TEMPLATE_DATA__).forEach(([r,s])=>{It.default.set(r,s)})}catch{throw new Error("TEMPLATE_DATA is not a valid JSON")}}bindings(){It.default.set("current","document");let t=this.template();It.default.delete("current");let r=In.default.load(t).elements,s=Array.from(r).map((a,i)=>[String(i),a.attributes]).filter(a=>Object.keys(a[1]).length);return Object.fromEntries(s)}sync(){let t=this.bindings(),r=Array.from(document.querySelectorAll("*"));for(let s of r){let a=Object.fromEntries(Array.from(s.attributes).map(d=>[d.nodeName,d.nodeValue&&d.nodeValue.length>0?d.nodeValue:!0])),i=String(Ct.default.elements.size);t[i]&&Object.assign(a,t[i]),Ct.default.register(s,a)}return t}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(r=>typeof r=="object"&&typeof r.nodeType=="number")?t:[Ct.default.createText(String(t))]}};Ee.default=Dt});var B=A(ve=>{"use strict";var Je=ve&&ve.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(ve,"__esModule",{value:!0});var Cn=Je(He()),P=Je(j()),ze=Je(be()),Ge=Je(W()),Lt=class n extends HTMLElement{static get registered(){return customElements.getName(this)}static register(){customElements.define(this.tagname,this)}get attr(){return Object.fromEntries(Array.from(this.attributes).map(t=>[t.name,t.value]))}get definition(){return this._definition||this.constructor}get element(){if(!P.default.has(this))throw new Error(`Component ${this.metadata.classname} not mapped.`);return P.default.get(this)}get initiated(){return this._initiated}get metadata(){let{id:t,classname:r,tagname:s,registered:a,observedAttributes:i=[]}=this.definition;return{id:t,tagname:s,classname:r,registered:a,observed:i}}get originalChildren(){return this._children}get props(){return this.getAttributes()}get propsCamel(){return this.element.camel()}get propsTree(){return this.element.tree()}get virtual(){return this._virtual}set props(t){this.setAttributes(t)}set definition(t){this._definition=t}set originalChildren(t){typeof this._children>"u"&&(this._children=this._cleanChildren(t||[]))}constructor(){if(super(),this._children=void 0,this._definition=null,this._initiated=!1,this._observer=null,this._rendering=!1,this._template=null,this._virtual=!1,!P.default.has(this)){let{registered:t}=this.metadata;if(!t)throw new Error(`Component ${this.metadata.classname} not registered in customElements.`);let r=Object.fromEntries(Array.from(this.attributes).map(s=>[s.name,s.value!==""?s.value:!0]));P.default.register(this,r)}}adoptedCallback(){this.render(),this.emit("adopt",this)}attributeChangedCallback(t,r,s){if(this._rendering)return;let a=r===null?"add":s===null?"remove":"update";s===null&&this.hasAttribute(t)?this.element.removeAttribute(t):s===""?this.element.setAttribute(t,!0):this.element.setAttribute(t,s),this.emit("attributechange",{action:a,name:t,prev:r,value:s,target:this})}clone(t=!1){return this.cloneElement(this,t)}cloneElement(t,r=!1){return P.default.cloneElement(t,r)}connectedCallback(){this.wait(),this.emit("connect",this)}createComponent(t,r,s={},a=[]){return P.default.createComponent(t,r,s,a)}createElement(t,r={},s=[]){return P.default.createElement(t,r,s)}disconnectedCallback(){this.emit("disconnect",this)}emit(t,r){return this.dispatchEvent(new CustomEvent(t,{detail:r})),this}getAttribute(t){return this.element.getAttribute(t)}getAttributes(){return Object.assign({},this.element.attributes)}getChildren(t=!0){return t===!0?Array.from(this.childNodes):t===!1?this._children:t===null&&this.shadowRoot?Array.from(this.shadowRoot.childNodes):[]}getElement(t){return P.default.get(t)}getParentComponent(){let t=this.parentElement;for(;t;){if(t instanceof n)return t;t=t.parentElement}return null}hasAttribute(t){return this.element.hasAttribute(t)}on(t,r){return this.removeEventListener(t,r),this.addEventListener(t,r),this}once(t,r){let s=a=>{this.removeEventListener(t,r),r(a)};return this.on(t,s),this}register(t={},r=[]){P.default.has(this)?P.default.get(this).setAttributes(t):P.default.register(this,t);for(let[s,a]of Object.entries(t))(typeof a=="string"||a===!0)&&super.setAttribute(s,a===""||a===s||a===!0?!0:a);this._children=this._cleanChildren(r),this._children.forEach(s=>this.appendChild(s)),this._virtual=!0,this.connectedCallback()}removeAttribute(t){let r=this.getAttribute(t);this.hasAttribute(t)&&this.element.removeAttribute(t),super.hasAttribute(t)&&super.removeAttribute(t),this._virtual&&this.metadata.observed.includes(t)&&this.attributeChangedCallback(t,r,null)}render(){let t=this.getParentComponent();if(t&&!t.initiated)return;if(this._rendering)return;this._rendering=!0;let r=Ge.default.get("current");Ge.default.set("current",this),this._template?ze.default.emit("unmounted",this):this._template=this.template();let s=this._template().filter(Boolean),a=this.styles(),i=a.length===0?"light":"shadow",{light:d,shadow:h}=this._getChildren(s,i);if(h.length===0&&i==="light")this.textContent="",d.forEach(T=>this.appendChild(T));else{this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0});let T=document.createElement("style");T.innerText=a;let E=this.shadowRoot;E.textContent="",E.appendChild(T),h.forEach(k=>E.appendChild(k)),d.length&&(this.textContent="",d.forEach(k=>this.appendChild(k)))}return r?Ge.default.set("current",r):Ge.default.delete("current"),this._initiated=!0,this._rendering=!1,ze.default.emit("mounted",this),this.shadowRoot?this.shadowRoot.innerHTML:this.innerHTML}setAttribute(t,r){let s=this.getAttribute(t);r===""||r===!0?(this.element.setAttribute(t,!0),super.setAttribute(t,"")):r===!1?(this.element.setAttribute(t,r),super.removeAttribute(t)):typeof r=="string"?(this.element.setAttribute(t,r),super.setAttribute(t,r)):this.element.setAttribute(t,r),this._virtual&&this.metadata.observed.includes(t)&&typeof r=="string"&&this.attributeChangedCallback(t,s,r)}setAttributes(t){Object.entries(t).forEach(([r,s])=>this.setAttribute(r,s))}unbind(t,r){return this.removeEventListener(t,r),this}wait(){if(document.readyState!=="loading")this._update();else{let t=()=>{this._update(),ze.default.unbind("ready",t)};ze.default.on("ready",t)}}_cleanChildren(t){return Array.from(t).filter(r=>typeof r<"u").map(r=>typeof r=="string"?P.default.createText(r):r instanceof Cn.default?r.element:r)}_getChildren(t,r){let s=this._getTemplateNodes(t),a=this._getTemplateNodes(t,"light"),i=this._getTemplateNodes(t,"shadow"),d=s.length>0?s:t;return{light:a.length>0?a:r==="light"?d:[],shadow:i.length>0?i:r==="shadow"?d:[]}}_getTemplateNodes(t,r){let s=t.find(a=>this._isTemplate(a,r));return s?Array.from(s.childNodes||[]):[]}_isTemplate(t,r){if(t.nodeName!=="TEMPLATE")return!1;let s=t;return r?r===s.getAttribute("type"):!s.hasAttribute("type")}_toNodeList(t){return t instanceof Node?[t]:Array.isArray(t)&&t.every(r=>r instanceof Node)?t:[P.default.createText(String(t))]}_update(){typeof this._children>"u"&&(this._children=this._cleanChildren(Array.from(this.childNodes||[]))),this._initiated||this.render()}};ve.default=Lt});var Nt=A(Ve=>{"use strict";Object.defineProperty(Ve,"__esModule",{value:!0});Ve.stylemap=Dn;function Dn(n={}){return new We(Object.entries(n))}var We=class n extends Map{add(t,r){this.has(t)||this.set(t,[]);let s=this.get(t);return typeof r=="string"||typeof r=="number"?s.push(r):Array.isArray(r)&&s.push(...r),this}clone(){let t=new n;for(let[r,s]of this.entries())t.set(r,s.slice());return t}replaceAll(t,r){for(let[s,a]of this.entries())this.set(s,a.map(i=>typeof i=="string"?i.replaceAll(t,r):i));return this}};Ve.default=We});var _e=A(te=>{"use strict";var Sn=te&&te.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(te,"__esModule",{value:!0});te.styleset=Nn;var Ln=Sn(Nt());function Nn(n={}){return new Ye(Object.entries(n))}var Ye=class extends Map{add(t,r,s){this.has(t)||this.set(t,new Ln.default);let a=this.get(t);return typeof s=="string"?a.set(r,s.split(" ")):Array.isArray(s)&&a.set(r,s),this}map(t,r){return this.set(t,r),this}toString(){let t=[];for(let[r,s]of this.entries()){let a=[];for(let[i,d]of s.entries())i&&d?.length&&a.push(`${i}:${d.join(" ")}`);a.length&&t.push(`${r}{${a.join(";")}}`)}return t.join("")}};te.default=Ye});var Mt=A(Rt=>{"use strict";Object.defineProperty(Rt,"__esModule",{value:!0});Rt.default=Rn;function Rn(n,t,r=!1,s=":host",a="color"){let{color:i,white:d,black:h,info:T,warning:E,success:k,error:I,muted:C,primary:_,secondary:D,theme:o}=n,c=i||(o?`var(--${o})`:d?"var(--white)":h?"var(--black)":T?"var(--info)":E?"var(--warning)":k?"var(--success)":I?"var(--error)":C?"var(--muted)":_?"var(--primary)":D?"var(--secondary)":r);return c&&t.add(s,a,c),i?"color":d?"white":h?"black":T?"info":E?"warning":k?"success":I?"error":C?"muted":_?"primary":D?"secondary":"initial"}});var or=A(Ot=>{"use strict";Object.defineProperty(Ot,"__esModule",{value:!0});Ot.default=Mn;function Mn(n,t,r=!1,s=":host"){let{curve:a,curved:i,rounded:d,pill:h}=n,T=a?`${a}px`:i?"4px":d?"12px":h?"10000px":r;return T&&(t.add(s,"border-radius",T),t.add(s,"overflow","hidden")),a?"curve":i?"curved":d?"rounded":h?"pill":"initial"}});var jt=A(Ft=>{"use strict";Object.defineProperty(Ft,"__esModule",{value:!0});Ft.default=On;function On(n,t,r=!1,s=":host"){let{flex:a,none:i,inline:d,block:h,"inline-block":T,"inline-flex":E}=n,k=a?"flex":i?"none":h?"block":d?"inline":E?"inline-flex":T?"inline-block":r;return k&&t.add(s,"display",k),k||"initial"}});var fr=A(qt=>{"use strict";Object.defineProperty(qt,"__esModule",{value:!0});qt.default=Fn;function Fn(n,t,r=!1,s=":host",a="font-size"){let{size:i,xs:d,sm:h,md:T,lg:E,xl:k,xl2:I,xl3:C,xl4:_,xl5:D}=n,o=i?`${i}px`:d?"8px":h?"12px":T?"16px":E?"20px":k?"24px":I?"28px":C?"32px":_?"36px":D?"40px":r;return o&&t.add(s,a,o),i?"size":d?"xs":h?"sm":T?"md":E?"lg":k?"xl":I?"xl2":C?"xl3":_?"xl4":D?"xl5":"initial"}});var br=A(we=>{"use strict";var jn=we&&we.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(we,"__esModule",{value:!0});var Pn=jn(B()),Qe=class extends Pn.default{get field(){return this._field}constructor(){super(),this._field=this.attachInternals()}formAssociatedCallback(t){this.emit("formassociate",this)}formDisabledCallback(t){this.emit("formdisable",this)}formResetCallback(){this.emit("formreset",this)}};Qe.formAssociated=!0;we.default=Qe});var se=A(Ae=>{"use strict";var qn=Ae&&Ae.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Ae,"__esModule",{value:!0});Ae.default=Bn;var $n=qn(W());function Bn(n=null,t=!1){if(!n&&(n=$n.default.get("current"),!n)){if(!t)throw new Error("Not called within a Ink component");return null}return n}});var Tr=A(Ie=>{"use strict";var Hn=Ie&&Ie.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Ie,"__esModule",{value:!0});var Un=Hn(W());function zn(n){let t=Un.default.get("env")||{};return n?t[n]||null:t}Ie.default=zn});var $t=A(Ce=>{"use strict";var kr=Ce&&Ce.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Ce,"__esModule",{value:!0});Ce.default=Wn;var Gn=kr(se()),Jn=kr(W());function Wn(n=null){let t=(0,Gn.default)(n,!0);return typeof t=="string"?Jn.default.get("props")||{}:t?t.props:{}}});var vr=A(ae=>{"use strict";var Er=ae&&ae.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(ae,"__esModule",{value:!0});ae.classlist=Zn;ae.default=Kn;var Vn=Er(se()),Yn=Er($t());function Zn(n=null){var t;if(n==="body")return document.body.classList;if(n==="head")return document.head.classList;if(n==="document")return(t=document.body.parentElement)===null||t===void 0?void 0:t.classList;let r=(0,Vn.default)(n);return r?.classList}function Kn(n=null){return(0,Yn.default)(n).class||""}});var _r=A(Y=>{"use strict";var Qn=Y&&Y.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Y,"__esModule",{value:!0});Y.innerHTML=es;Y.innerText=ts;Y.default=Bt;var Xn=Qn(se());function es(n=null){let t=Bt(n),r=document.createElement("template");return r.append(...t.map(s=>s.cloneNode(!0))),r.innerHTML}function ts(n=null){let t=Bt(n),r=document.createElement("template");return r.append(...t.map(s=>s.cloneNode(!0))),r.innerText}function Bt(n=null){let t=(0,Xn.default)(n,!0);return typeof t!="string"&&t?t.originalChildren||[]:[]}});var wr=A(Z=>{"use strict";var rs=Z&&Z.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Z,"__esModule",{value:!0});Z.SignalRegistry=void 0;Z.default=ss;var ns=rs(se()),ie=class n{static observe(t,r){let s={getter:()=>i.raw,setter:h=>h},a=new Set,i={raw:r,change(h){return a.add(h),i},getter(h){return s.getter=h,i},setter(h){return s.setter=h,i}};Object.defineProperty(i,"value",{get(){return s.getter()},set(h){let T=s.setter(h),E=n.serialize(T)!==n.serialize(i.raw);i.raw=T,E&&(a.forEach(k=>k(T)),t.render())}});let d=this._observers.get(t);return d?(d.observed++,d.values.push(i)):this._observers.set(t,{observed:1,values:[i]}),i}static observer(t){return this._observers.get(t)||null}static serialize(t){return JSON.stringify(t)}};Z.SignalRegistry=ie;ie._observers=new Map;function ss(n,t=null){let r=(0,ns.default)(t);if(!r.initiated)return ie.observe(r,n);let s=ie.observer(r);if(!s)throw new Error("Signal state mismatch");return s.values[s.observed++%s.values.length]}});var Ir=A(z=>{"use strict";var as=z&&z.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(z,"__esModule",{value:!0});z.breakpoints=void 0;z.stylesheet=is;var Ar=as(_e());z.breakpoints={all:0,xl4:1920,xl3:1536,xl2:1280,xl:1024,lg:992,md:767,sm:420,xs:360};function is(){return new Xe}var Xe=class extends Map{add(t,r,s,a){return this.has(t)||this.set(t,new Ar.default),this.get(t).add(r,s,a),this}map(t,r,s){return this.has(t)||this.set(t,new Ar.default),this.get(t).map(r,s),this}toString(){var t;let r=[];for(let[s,a]of Object.entries(z.breakpoints)){let i=(t=this.get(s))===null||t===void 0?void 0:t.toString();if(i){if(s==="all"){r.push(i);continue}r.push(`@media (max-width:${a}px){${i}}`)}}return r.join("")}};z.default=Xe});var Dr=A(et=>{"use strict";Object.defineProperty(et,"__esModule",{value:!0});et.getStatus=ls;var Cr={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};et.default=Cr;function ls(n){return Object.values(Cr).find(t=>t.code===n)}});var Sr=A(Ut=>{"use strict";Object.defineProperty(Ut,"__esModule",{value:!0});var os=Dr(),Ht=class n extends Error{static for(t,...r){return r.forEach(function(s){t=t.replace("%s",String(s))}),new this(t)}static forErrors(t){let r=new this("Invalid Parameters");return r.withErrors(t),r}static require(t,r,...s){if(!t){for(let a of s)r=r.replace("%s",a);throw new this(r)}}static try(t){return{catch:r=>{try{return t()}catch(s){if(s instanceof n)return r(s,s.type);if(s instanceof Error){let a=n.upgrade(s);return r(a,a.type)}else if(typeof s=="string"){let a=n.for(s);return r(a,a.type)}return r(s,"unknown")}}}}static upgrade(t,r=500){if(t instanceof n)return t;let s=new this(t.message,r);return s.name=t.name,s.stack=t.stack,s}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,r=500){var s;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=r,this._status=((s=(0,os.getStatus)(r))===null||s===void 0?void 0:s.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,r=0){let s={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,r)};return Object.keys(this._errors).length>0&&(s.errors=this._errors),s}trace(t=0,r=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,r||this.stack.length).map(a=>a.trim()).map(a=>{if(!a.startsWith("at"))return!1;let[i,d,h]=a.split(" ");h||(h=`(${d})`,d="<none>");let[T,E,k]=h.substring(1,h.length-1).split(":");return{method:d,file:T,line:parseInt(E)||0,char:parseInt(k)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,r){return this._start=t,this._end=r,this}};Ut.default=Ht});var Lr=A(De=>{"use strict";var cs=De&&De.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(De,"__esModule",{value:!0});var ps=cs(Sr()),zt=class extends ps.default{};De.default=zt});var Pr=A(u=>{"use strict";var ds=u&&u.__createBinding||(Object.create?function(n,t,r,s){s===void 0&&(s=r);var a=Object.getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(n,s,a)}:function(n,t,r,s){s===void 0&&(s=r),n[s]=t[r]}),us=u&&u.__setModuleDefault||(Object.create?function(n,t){Object.defineProperty(n,"default",{enumerable:!0,value:t})}:function(n,t){n.default=t}),V=u&&u.__importStar||function(){var n=function(t){return n=Object.getOwnPropertyNames||function(r){var s=[];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(s[s.length]=a);return s},n(t)};return function(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var s=n(t),a=0;a<s.length;a++)s[a]!=="default"&&ds(r,t,s[a]);return us(r,t),r}}(),F=u&&u.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(u,"__esModule",{value:!0});u.StyleSheet=u.StyleSet=u.StyleMap=u.stylesheet=u.styleset=u.stylemap=u.breakpoints=u.emitter=u.signal=u.innerHTML=u.innerText=u.children=u.classnames=u.classlist=u.props=u.env=u.data=u.client=u.component=u.SignalRegistry=u.ClientException=u.ClientEmitter=u.ClientElement=u.ClientRegistry=u.ClientComponent=u.ClientField=u.TemplateData=u.DOMNode=u.DOMText=u.DOMElement=u.DOMDocument=u.DOMDoctype=u.DOMComment=void 0;var fs=F(ft());u.DOMComment=fs.default;var ms=F(ht());u.DOMDoctype=ms.default;var hs=F(je());u.DOMDocument=hs.default;var gs=F(yt());u.DOMElement=gs.default;var ys=F(bt());u.DOMText=ys.default;var xs=F(X());u.DOMNode=xs.default;var bs=F(br());u.ClientField=bs.default;var Ts=F(B());u.ClientComponent=Ts.default;var ks=F(j());u.ClientRegistry=ks.default;var Es=F(He());u.ClientElement=Es.default;var Nr=V(be());u.emitter=Nr.default;Object.defineProperty(u,"ClientEmitter",{enumerable:!0,get:function(){return Nr.ClientEmitter}});var vs=F(At());u.client=vs.default;var _s=F(se());u.component=_s.default;var Rr=V(W());u.data=Rr.default;Object.defineProperty(u,"TemplateData",{enumerable:!0,get:function(){return Rr.TemplateData}});var ws=F(Tr());u.env=ws.default;var As=F($t());u.props=As.default;var Mr=V(vr());u.classnames=Mr.default;Object.defineProperty(u,"classlist",{enumerable:!0,get:function(){return Mr.classlist}});var Gt=V(_r());u.children=Gt.default;Object.defineProperty(u,"innerHTML",{enumerable:!0,get:function(){return Gt.innerHTML}});Object.defineProperty(u,"innerText",{enumerable:!0,get:function(){return Gt.innerText}});var Or=V(wr());u.signal=Or.default;Object.defineProperty(u,"SignalRegistry",{enumerable:!0,get:function(){return Or.SignalRegistry}});var Fr=V(Nt());u.StyleMap=Fr.default;Object.defineProperty(u,"stylemap",{enumerable:!0,get:function(){return Fr.stylemap}});var jr=V(_e());u.StyleSet=jr.default;Object.defineProperty(u,"styleset",{enumerable:!0,get:function(){return jr.styleset}});var Jt=V(Ir());u.StyleSheet=Jt.default;Object.defineProperty(u,"stylesheet",{enumerable:!0,get:function(){return Jt.stylesheet}});Object.defineProperty(u,"breakpoints",{enumerable:!0,get:function(){return Jt.breakpoints}});var Is=F(Lr());u.ClientException=Is.default});var le=A((ma,qr)=>{qr.exports={...Pr()}});var Br=A((ga,rt)=>{var Cs=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var g=function(n){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,s={},a={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function o(c){return c instanceof i?new i(c.type,o(c.content),c.alias):Array.isArray(c)?c.map(o):c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(o){return Object.prototype.toString.call(o).slice(8,-1)},objId:function(o){return o.__id||Object.defineProperty(o,"__id",{value:++r}),o.__id},clone:function o(c,p){p=p||{};var f,m;switch(a.util.type(c)){case"Object":if(m=a.util.objId(c),p[m])return p[m];f={},p[m]=f;for(var b in c)c.hasOwnProperty(b)&&(f[b]=o(c[b],p));return f;case"Array":return m=a.util.objId(c),p[m]?p[m]:(f=[],p[m]=f,c.forEach(function(w,x){f[x]=o(w,p)}),f);default:return c}},getLanguage:function(o){for(;o;){var c=t.exec(o.className);if(c)return c[1].toLowerCase();o=o.parentElement}return"none"},setLanguage:function(o,c){o.className=o.className.replace(RegExp(t,"gi"),""),o.classList.add("language-"+c)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(f){var o=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(f.stack)||[])[1];if(o){var c=document.getElementsByTagName("script");for(var p in c)if(c[p].src==o)return c[p]}return null}},isActive:function(o,c,p){for(var f="no-"+c;o;){var m=o.classList;if(m.contains(c))return!0;if(m.contains(f))return!1;o=o.parentElement}return!!p}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(o,c){var p=a.util.clone(a.languages[o]);for(var f in c)p[f]=c[f];return p},insertBefore:function(o,c,p,f){f=f||a.languages;var m=f[o],b={};for(var w in m)if(m.hasOwnProperty(w)){if(w==c)for(var x in p)p.hasOwnProperty(x)&&(b[x]=p[x]);p.hasOwnProperty(w)||(b[w]=m[w])}var L=f[o];return f[o]=b,a.languages.DFS(a.languages,function(R,G){G===L&&R!=o&&(this[R]=b)}),b},DFS:function o(c,p,f,m){m=m||{};var b=a.util.objId;for(var w in c)if(c.hasOwnProperty(w)){p.call(c,w,c[w],f||w);var x=c[w],L=a.util.type(x);L==="Object"&&!m[b(x)]?(m[b(x)]=!0,o(x,p,null,m)):L==="Array"&&!m[b(x)]&&(m[b(x)]=!0,o(x,p,w,m))}}},plugins:{},highlightAll:function(o,c){a.highlightAllUnder(document,o,c)},highlightAllUnder:function(o,c,p){var f={callback:p,container:o,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",f),f.elements=Array.prototype.slice.apply(f.container.querySelectorAll(f.selector)),a.hooks.run("before-all-elements-highlight",f);for(var m=0,b;b=f.elements[m++];)a.highlightElement(b,c===!0,f.callback)},highlightElement:function(o,c,p){var f=a.util.getLanguage(o),m=a.languages[f];a.util.setLanguage(o,f);var b=o.parentElement;b&&b.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(b,f);var w=o.textContent,x={element:o,language:f,grammar:m,code:w};function L(G){x.highlightedCode=G,a.hooks.run("before-insert",x),x.element.innerHTML=x.highlightedCode,a.hooks.run("after-highlight",x),a.hooks.run("complete",x),p&&p.call(x.element)}if(a.hooks.run("before-sanity-check",x),b=x.element.parentElement,b&&b.nodeName.toLowerCase()==="pre"&&!b.hasAttribute("tabindex")&&b.setAttribute("tabindex","0"),!x.code){a.hooks.run("complete",x),p&&p.call(x.element);return}if(a.hooks.run("before-highlight",x),!x.grammar){L(a.util.encode(x.code));return}if(c&&n.Worker){var R=new Worker(a.filename);R.onmessage=function(G){L(G.data)},R.postMessage(JSON.stringify({language:x.language,code:x.code,immediateClose:!0}))}else L(a.highlight(x.code,x.grammar,x.language))},highlight:function(o,c,p){var f={code:o,grammar:c,language:p};if(a.hooks.run("before-tokenize",f),!f.grammar)throw new Error('The language "'+f.language+'" has no grammar.');return f.tokens=a.tokenize(f.code,f.grammar),a.hooks.run("after-tokenize",f),i.stringify(a.util.encode(f.tokens),f.language)},tokenize:function(o,c){var p=c.rest;if(p){for(var f in p)c[f]=p[f];delete c.rest}var m=new T;return E(m,m.head,o),h(o,m,c,m.head,0),I(m)},hooks:{all:{},add:function(o,c){var p=a.hooks.all;p[o]=p[o]||[],p[o].push(c)},run:function(o,c){var p=a.hooks.all[o];if(!(!p||!p.length))for(var f=0,m;m=p[f++];)m(c)}},Token:i};n.Prism=a;function i(o,c,p,f){this.type=o,this.content=c,this.alias=p,this.length=(f||"").length|0}i.stringify=function o(c,p){if(typeof c=="string")return c;if(Array.isArray(c)){var f="";return c.forEach(function(L){f+=o(L,p)}),f}var m={type:c.type,content:o(c.content,p),tag:"span",classes:["token",c.type],attributes:{},language:p},b=c.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(m.classes,b):m.classes.push(b)),a.hooks.run("wrap",m);var w="";for(var x in m.attributes)w+=" "+x+'="'+(m.attributes[x]||"").replace(/"/g,"&quot;")+'"';return"<"+m.tag+' class="'+m.classes.join(" ")+'"'+w+">"+m.content+"</"+m.tag+">"};function d(o,c,p,f){o.lastIndex=c;var m=o.exec(p);if(m&&f&&m[1]){var b=m[1].length;m.index+=b,m[0]=m[0].slice(b)}return m}function h(o,c,p,f,m,b){for(var w in p)if(!(!p.hasOwnProperty(w)||!p[w])){var x=p[w];x=Array.isArray(x)?x:[x];for(var L=0;L<x.length;++L){if(b&&b.cause==w+","+L)return;var R=x[L],G=R.inside,Zt=!!R.lookbehind,Kt=!!R.greedy,Kr=R.alias;if(Kt&&!R.pattern.global){var Qr=R.pattern.toString().match(/[imsuy]*$/)[0];R.pattern=RegExp(R.pattern.source,Qr+"g")}for(var Qt=R.pattern||R,M=f.next,H=m;M!==c.tail&&!(b&&H>=b.reach);H+=M.value.length,M=M.next){var Q=M.value;if(c.length>o.length)return;if(!(Q instanceof i)){var Le=1,$;if(Kt){if($=d(Qt,H,o,Zt),!$||$.index>=o.length)break;var Ne=$.index,Xr=$.index+$[0].length,J=H;for(J+=M.value.length;Ne>=J;)M=M.next,J+=M.value.length;if(J-=M.value.length,H=J,M.value instanceof i)continue;for(var ue=M;ue!==c.tail&&(J<Xr||typeof ue.value=="string");ue=ue.next)Le++,J+=ue.value.length;Le--,Q=o.slice(H,J),$.index-=H}else if($=d(Qt,0,Q,Zt),!$)continue;var Ne=$.index,Re=$[0],lt=Q.slice(0,Ne),Xt=Q.slice(Ne+Re.length),ot=H+Q.length;b&&ot>b.reach&&(b.reach=ot);var Me=M.prev;lt&&(Me=E(c,Me,lt),H+=lt.length),k(c,Me,Le);var en=new i(w,G?a.tokenize(Re,G):Re,Kr,Re);if(M=E(c,Me,en),Xt&&E(c,M,Xt),Le>1){var ct={cause:w+","+L,reach:ot};h(o,c,p,M.prev,H,ct),b&&ct.reach>b.reach&&(b.reach=ct.reach)}}}}}}function T(){var o={value:null,prev:null,next:null},c={value:null,prev:o,next:null};o.next=c,this.head=o,this.tail=c,this.length=0}function E(o,c,p){var f=c.next,m={value:p,prev:c,next:f};return c.next=m,f.prev=m,o.length++,m}function k(o,c,p){for(var f=c.next,m=0;m<p&&f!==o.tail;m++)f=f.next;c.next=f,f.prev=c,o.length-=m}function I(o){for(var c=[],p=o.head.next;p!==o.tail;)c.push(p.value),p=p.next;return c}if(!n.document)return n.addEventListener&&(a.disableWorkerMessageHandler||n.addEventListener("message",function(o){var c=JSON.parse(o.data),p=c.language,f=c.code,m=c.immediateClose;n.postMessage(a.highlight(f,a.languages[p],p)),m&&n.close()},!1)),a;var C=a.util.currentScript();C&&(a.filename=C.src,C.hasAttribute("data-manual")&&(a.manual=!0));function _(){a.manual||a.highlightAll()}if(!a.manual){var D=document.readyState;D==="loading"||D==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return a}(Cs);typeof rt<"u"&&rt.exports&&(rt.exports=g);typeof global<"u"&&(global.Prism=g);g.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};g.languages.markup.tag.inside["attr-value"].inside.entity=g.languages.markup.entity;g.languages.markup.doctype.inside["internal-subset"].inside=g.languages.markup;g.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))});Object.defineProperty(g.languages.markup.tag,"addInlined",{value:function(t,r){var s={};s["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:g.languages[r]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};a["language-"+r]={pattern:/[\s\S]+/,inside:g.languages[r]};var i={};i[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:a},g.languages.insertBefore("markup","cdata",i)}});Object.defineProperty(g.languages.markup.tag,"addAttribute",{value:function(n,t){g.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:g.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});g.languages.html=g.languages.markup;g.languages.mathml=g.languages.markup;g.languages.svg=g.languages.markup;g.languages.xml=g.languages.extend("markup",{});g.languages.ssml=g.languages.xml;g.languages.atom=g.languages.xml;g.languages.rss=g.languages.xml;(function(n){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var r=n.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(g);g.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};g.languages.javascript=g.languages.extend("clike",{"class-name":[g.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});g.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;g.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:g.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:g.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:g.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:g.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:g.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});g.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:g.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});g.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});g.languages.markup&&(g.languages.markup.tag.addInlined("script","javascript"),g.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));g.languages.js=g.languages.javascript;(function(){if(typeof g>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",t=function(C,_){return"\u2716 Error "+C+" while fetching file: "+_},r="\u2716 Error: File does not exist or is empty",s={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",i="loading",d="loaded",h="failed",T="pre[data-src]:not(["+a+'="'+d+'"]):not(['+a+'="'+i+'"])';function E(C,_,D){var o=new XMLHttpRequest;o.open("GET",C,!0),o.onreadystatechange=function(){o.readyState==4&&(o.status<400&&o.responseText?_(o.responseText):o.status>=400?D(t(o.status,o.statusText)):D(r))},o.send(null)}function k(C){var _=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(C||"");if(_){var D=Number(_[1]),o=_[2],c=_[3];return o?c?[D,Number(c)]:[D,void 0]:[D,D]}}g.hooks.add("before-highlightall",function(C){C.selector+=", "+T}),g.hooks.add("before-sanity-check",function(C){var _=C.element;if(_.matches(T)){C.code="",_.setAttribute(a,i);var D=_.appendChild(document.createElement("CODE"));D.textContent=n;var o=_.getAttribute("data-src"),c=C.language;if(c==="none"){var p=(/\.(\w+)$/.exec(o)||[,"none"])[1];c=s[p]||p}g.util.setLanguage(D,c),g.util.setLanguage(_,c);var f=g.plugins.autoloader;f&&f.loadLanguages(c),E(o,function(m){_.setAttribute(a,d);var b=k(_.getAttribute("data-range"));if(b){var w=m.split(/\r\n?|\n/g),x=b[0],L=b[1]==null?w.length:b[1];x<0&&(x+=w.length),x=Math.max(0,Math.min(x-1,w.length)),L<0&&(L+=w.length),L=Math.max(0,Math.min(L,w.length)),m=w.slice(x,L).join(`
`),_.hasAttribute("data-start")||_.setAttribute("data-start",String(x+1))}D.textContent=m,g.highlightElement(D)},function(m){_.setAttribute(a,h),D.textContent=m})}}),g.plugins.fileHighlight={highlight:function(_){for(var D=(_||document).querySelectorAll(T),o=0,c;c=D[o++];)g.highlightElement(c)}};var I=!1;g.fileHighlight=function(){I||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),I=!0),g.plugins.fileHighlight.highlight.apply(this,arguments)}})()});var Ns={};ln(Ns,{BUILD_ID:()=>Ls,ClientRegistry:()=>Vr.default,TemplateDocument:()=>it,components:()=>Ss,data:()=>Yr.default,elements:()=>Zr,emitter:()=>at.default});var e=v(je()),Wr=v(ar()),Vr=v(j()),at=v(be()),Yr=v(W());var ir=v(j()),lr=v(B()),ee=class extends lr.default{static id="e83da818dc31723bcd5d";static tagname="panel";static classname="Panel_e83da818dc31723bcd5d";styles(){return""}template(){let t=this.originalChildren,r={main:t.find(i=>i.nodeName==="MAIN"),head:t.find(i=>i.nodeName==="HEADER"),foot:t.find(i=>i.nodeName==="FOOTER"),left:t.find(i=>i.nodeName==="ASIDE"&&i.hasAttribute("left")),right:t.find(i=>i.nodeName==="ASIDE"&&i.hasAttribute("right"))},s={left:!1,right:!1};this.toggle=i=>{s[i]=!s[i],a.all()};let a={all(){r.main&&this.main(),r.head&&this.head(),r.foot&&this.foot(),r.left&&this.left(),r.right&&this.right()},head(){let{classList:i}=r.head;i.add("absolute","top-0","right-0","h-60","transition-500"),r.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),s.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0"))},foot(){let{classList:i}=r.foot;i.add("absolute","bottom-0","right-0","h-60","transition-500"),r.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),s.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0"))},left(){let{classList:i}=r.left;i.add("w-226","absolute","bottom-0","left-0","top-0","transition-500"),s.left?(i.remove("md-left--226"),i.add("md-left-0")):(i.remove("md-left-0"),i.add("md-left--226"))},right(){let{classList:i}=r.right;i.add("w-200","absolute","right-0","transition-500"),r.foot?(i.remove("bottom-0"),i.add("bottom-60")):(i.remove("bottom-60"),i.add("bottom-0")),r.head?(i.remove("top-0"),i.add("top-60")):(i.remove("top-60"),i.add("top-0")),s.right?(i.remove("lg-right--200"),i.add("lg-right-0")):(i.remove("lg-right-0"),i.add("lg-right--200"))},main(){let{classList:i}=r.main;i.add("absolute","transition-500"),r.head?(i.remove("top-0"),i.add("top-60")):(i.remove("top-60"),i.add("top-0")),r.foot?(i.remove("bottom-0"),i.add("bottom-60")):(i.remove("bottom-60"),i.add("bottom-0")),r.left?(i.remove("left-0"),i.add("left-226")):(i.remove("left-226"),i.add("left-0")),r.right?(i.remove("right-0"),i.add("right-200")):(i.remove("right-200"),i.add("right-0")),s.left?(i.remove("md-left-0"),i.add("md-left-226")):(i.remove("md-left-226"),i.add("md-left-0")),s.right?(i.remove("lg-right-0"),i.add("lg-right-200")):(i.remove("lg-right-200"),i.add("lg-right-0"))}};return a.all(),this.classList.add("block","relative","w-full","vh","scroll-hidden"),()=>[ir.default.createText(`
`,!1),...this._toNodeList(t)]}};var Pt=v(j()),cr=v(B()),pr=v(_e()),Ze=v(Mt()),dr=v(or()),ur=v(jt()),re=class extends cr.default{static id="502d0a1992f720baceb4";static tagname="alert";static classname="Alert_502d0a1992f720baceb4";styles(){return""}template(){let{outline:t,solid:r,transparent:s,padding:a}=this.props,i=new pr.default;return this.styles=()=>i.toString(),(0,ur.default)(this.props,i,"block",":host"),i.add(":host","padding",a?`${a}px`:"16px"),(0,dr.default)(this.props,i,!1,":host"),t||s?((0,Ze.default)(this.props,i,"var(--muted)",":host","color"),(0,Ze.default)(this.props,i,"var(--muted)",":host","border-color"),i.add(":host","border-style","solid"),i.add(":host","border-width","1px"),t&&i.add(":host","background-color","var(--white)")):(i.add(":host","color","var(--white)"),(0,Ze.default)(this.props,i,"var(--muted)",":host","background-color")),()=>[Pt.default.createText(`
`,!1),Pt.default.createElement("slot",{},[]).element]}};var Ke=v(j()),mr=v(B()),hr=v(_e()),gr=v(Mt()),yr=v(jt()),xr=v(fr()),ne=class extends mr.default{static id="75af7664df8b2546e65a";static tagname="icon";static classname="Icon_75af7664df8b2546e65a";styles(){return""}template(){let{name:t,solid:r,brand:s}=this.props,a=new hr.default;this.styles=()=>a.toString(),(0,yr.default)(this.props,a,"inline-block",":host"),(0,gr.default)(this.props,a,!1,":host","color"),(0,xr.default)(this.props,a,!1,":host","font-size");let i=["fa-fw",`fa-${t}`];return i.push(s?"fa-brands":"fa-solid"),()=>[Ke.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"}).element,Ke.default.createText(`
`,!1),Ke.default.createElement("i",{class:i.join(" ")},[]).element]}};var Wt=v(j()),$r=v(B()),tt=v(le()),oe=class extends $r.default{static id="7e4942547226dfeef0ae";static tagname="docs";static classname="Docs_7e4942547226dfeef0ae";styles(){return""}template(){return(0,tt.classlist)().add("block","w-full","h-full","scroll-y-auto","scroll-x-hidden"),()=>[Wt.default.createText(`
`,!1),Wt.default.createElement("article",{class:"block p-10 tx-t-1"},[...this._toNodeList((0,tt.children)())]).element]}};var l=v(j()),zr=v(B());var S=v(j()),Hr=v(B()),Vt=v(Br()),Ur=v(le()),U=class extends Hr.default{static id="d21b237295245a3b7d61";static tagname="code";static classname="Code_d21b237295245a3b7d61";styles(){return`:host {
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
  }`}template(){let t=this.props,{lang:r="markup",numbers:s=!1,inline:a=!1,trim:i=!1,ltrim:d=!1,rtrim:h=!1,detab:T=0}=t,E=(0,Ur.children)(),k=E[0]?.textContent||"";T&&(k=k.replace(new RegExp(`\\n {${T}}`,"g"),`
`)),i?k=k.trim():d?k=k.replace(/^\s+/,""):h&&(k=k.replace(/\s+$/,""));let I=C=>{if(!k)return;let _=Vt.default.highlight(k,Vt.default.languages[r],r);if(C.detail.target.innerHTML=_,s){let D=_.match(/\n(?!$)/g),o=D?D.length+1:1,c=new Array(o+1).join("<span></span>"),p=document.createElement("span");p.setAttribute("aria-hidden","true"),p.className="line-numbers-rows",p.innerHTML=c,C.detail.target.appendChild(p)}};return()=>[S.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css"}).element,S.default.createText(`
`,!1),S.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-tomorrow.min.css"}).element,S.default.createText(`
`,!1),...r==="bash"?[S.default.createText(`
  `,!1),S.default.createElement("div",{class:"terminal"},[S.default.createElement("span",{},[S.default.createText("$",!1)]).element,S.default.createText(" ",!1),...this._toNodeList(E)]).element,S.default.createText(`
`,!1)]:k?[,S.default.createText(`
  `,!1),...s?[S.default.createText(`
    `,!1),S.default.createElement("pre",{class:"snippet line-numbers"},[S.default.createElement("code",{mount:I},[]).element]).element,S.default.createText(`
  `,!1)]:[,S.default.createText(`
    `,!1),S.default.createElement("pre",{class:"snippet pad"},[S.default.createElement("code",{mount:I},[]).element]).element,S.default.createText(`
  `,!1)],S.default.createText(`
`,!1)]:[,S.default.createText(`
  `,!1),S.default.createElement("span",{},[S.default.createText("????",!1)]).element,S.default.createText(`
`,!1)],S.default.createText(`

`,!1)]}};var K=v(le());var Se={Asset:{type:{kind:"property",list:!1,type:["text/html","text/javascript","text/css","text/plain"],description:"The MIME type of the build file asset"},content:{kind:"property",list:!1,type:"string",description:"The source code of the build file asset."}},Path:{path:{kind:"property",list:!1,type:"string",description:"The file path",example:"'/path/to/file'"},type:{kind:"property",list:!1,type:"string",description:"The type of path.",example:"'file'"}},Config:{brand:{kind:"property",list:!1,type:"string",description:"The brand prefixed before the component tag name.",example:"'ink'"},cwd:{kind:"property",list:!1,type:"string",description:"The project's current working directory (cwd).",example:"'/path/to/project'"},fs:{kind:"property",list:!1,type:"FileSystem",description:"The file system being used to read/write files.",example:`import fs from 'fs';

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
app.engine('ink', view(compiler));`}}};var ce=class extends zr.default{static id="4c60dc54dc2ac695b83b";static tagname="ui";static classname="Ui_4c60dc54dc2ac695b83b";styles(){return""}template(){(0,K.classlist)().add("block","my-40","scroll-hidden","curved","shadow-0-0-10-0-0-0-5");let{start:t="InkCompiler"}=(0,K.props)(),r=(0,K.signal)([t]),s=(0,K.signal)(t),a=d=>{let h=d.target.getAttribute("data-type");r.value=[...r.value,h],s.value=h},i=()=>{r.value=r.value.slice(0,r.value.length-1),s.value=r.value[r.value.length-1]};return()=>[l.default.createText(`
`,!1),l.default.createElement("h3",{class:"tx-secondary bg-t-2 tx-16 m-0 p-10"},[l.default.createText(`
  `,!1),...r.value.length>1?[l.default.createText(`
    `,!1),l.default.createElement("a",{class:"tx-t-1 cursor-pointer",click:i},[l.default.createText(`
      `,!1),l.default.createElement("i",{class:"fas fa-arrow-left"},[]).element,l.default.createText(`
    `,!1)]).element,l.default.createText(`
  `,!1)]:[],l.default.createText(`
  API: `,!1),...this._toNodeList(s.value),l.default.createText(`
`,!1)]).element,l.default.createText(`
`,!1),l.default.createElement("div",{class:"bg-t-0 p-10"},[l.default.createText(`
  `,!1),l.default.createElement("div",{class:"relative mb-20 scroll-auto"},[l.default.createText(`
    `,!1),l.default.createElement("table",{class:"w-full b-collapse"},[l.default.createText(`
      `,!1),l.default.createElement("thead",{},[l.default.createText(`
        `,!1),l.default.createElement("th",{class:"p-10 tx-left tx-upper"},[l.default.createText("Property",!1)]).element,l.default.createText(`
        `,!1),...s.value.includes("Emitter")?[]:[l.default.createText(`
          `,!1),l.default.createElement("th",{class:"p-10 tx-left tx-upper"},[l.default.createText("Returns",!1)]).element,l.default.createText(`
        `,!1)],l.default.createText(`
        `,!1),l.default.createElement("th",{class:"p-10 tx-left tx-upper"},[l.default.createText("Description",!1)]).element,l.default.createText(`
      `,!1)]).element,l.default.createText(`
      `,!1),l.default.createElement("tbody",{},[l.default.createText(`
        `,!1),...Object.entries(Se[s.value]).map(([d,h])=>[l.default.createText(`
          `,!1),l.default.createElement("tr",{},[l.default.createText(`
            `,!1),...h.kind==="property"?[l.default.createText(`
              `,!1),l.default.createElement("td",{class:"tx-primary tx-top tx-nowrap b-solid b-t-2 bx-0 bb-0 bt-1 p-10"},[l.default.createText(`
                `,!1),...this._toNodeList(d),l.default.createText(`
              `,!1)]).element,l.default.createText(`
              `,!1),...Se[h.type]?[l.default.createText(`
                `,!1),l.default.createElement("td",{class:"tx-top tx-nowrap b-solid b-t-2 bx-0 bb-0 bt-1 p-10"},[l.default.createText(`
                  `,!1),l.default.createElement("a",{class:"tx-underline tx-info cursor-pointer","data-type":h.type,click:a},[l.default.createText(`
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
                  `,!1),...Object.entries(h.args).map(([T,E])=>[l.default.createText(`
                    `,!1),...T>0?[l.default.createText(", ",!1)]:[],l.default.createText(`
                    `,!1),...this._toNodeList(E.name),l.default.createText(`: 
                    `,!1),...Se[E.type]?[l.default.createText(`
                      `,!1),l.default.createElement("a",{class:"tx-underline tx-info cursor-pointer","data-type":E.type,click:a},[l.default.createText(`
                        `,!1),...this._toNodeList(E.type),l.default.createText(`
                      `,!1)]).element,...this._toNodeList(E.list?"[]":""),l.default.createText(`
                    `,!1)]:[,l.default.createText(`
                      `,!1),...this._toNodeList(E.type),...this._toNodeList(E.list?"[]":""),l.default.createText(`
                    `,!1)],l.default.createText(`
                  `,!1)]).flat(),l.default.createText(`
                )
              `,!1)]).element,l.default.createText(`
              `,!1),...Se[h.returns.type]?[l.default.createText(`
                `,!1),l.default.createElement("td",{class:"tx-top tx-nowrap b-solid b-t-2 bx-0 bb-0 bt-1 p-10"},[l.default.createText(`
                  `,!1),l.default.createElement("a",{class:"tx-underline tx-info cursor-pointer","data-type":h.returns.type,click:a},[l.default.createText(`
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
`,!1)]).element]}};var N=v(j()),Gr=v(B()),nt=v(le()),pe=class extends Gr.default{static id="ab38f0e847e1d047c1a8";static tagname="app";static classname="App_ab38f0e847e1d047c1a8";styles(){return""}template(){let{title:t,height:r}=(0,nt.props)(),s=r?`height:${r}px`:"";return()=>[N.default.createText(`
`,!1),N.default.createElement("div",{class:"curved scroll-hidden shadow-0-0-10-0-0-0-5"},[N.default.createText(`
  `,!1),N.default.createElement("div",{class:"relative flex flex-center-y gap-10 p-10 bg-t-1 tx-c-999999 tx-16"},[N.default.createText(`
    `,!1),N.default.createElement("span",{class:"bg-h-999999 pill h-10 w-10"},[]).element,N.default.createText(`
    `,!1),N.default.createElement("span",{class:"bg-h-999999 pill h-10 w-10"},[]).element,N.default.createText(`
    `,!1),N.default.createElement("span",{class:"bg-h-999999 pill h-10 w-10"},[]).element,N.default.createText(`
    `,!1),N.default.createElement("span",{class:"flex flex-center h-full w-full absolute top-0 left-0"},[N.default.createText(`
      `,!1),...this._toNodeList(t),N.default.createText(`
    `,!1)]).element,N.default.createText(`
  `,!1)]).element,N.default.createText(`
  `,!1),N.default.createElement("div",{class:"bg-black tx-t-1 relative",style:s},[...this._toNodeList((0,nt.children)())]).element,N.default.createText(`
`,!1)]).element]}};var q=v(j()),Jr=v(B());var y=function(n,...t){let r=Yt(n);for(let s=0;s<t.length;s++)r=r.replace("%s",String(t[s]));return r},Yt=function(n){return n};var de=class extends Jr.default{static id="b1ed083cf3561af1816f";static tagname="translate";static classname="Translate_b1ed083cf3561af1816f";styles(){return""}template(){let{trim:t=!1,p:r=!1,li:s=!1,div:a=!1}=this.props,i=this.originalChildren,d=[],h=[];for(let I of i)typeof I=="string"?d.push(I):I instanceof Node&&I.textContent?d.push(I.textContent):(d.push("%s"),h.push(I));let T=d.join("");t&&(T=T.replace(/\s+/," ").trim());let E=Yt(T).split("%s"),k=[];for(let I=0;I<E.length;I++)k.push(document.createTextNode(E[I])),h[I]&&k.push(h[I]);return()=>[q.default.createText(`
    `,!1),...r?[q.default.createText(`
      `,!1),q.default.createElement("p",{},[...this._toNodeList(k)]).element,q.default.createText(`
    `,!1)]:s?[,q.default.createText(`
      `,!1),q.default.createElement("li",{},[...this._toNodeList(k)]).element,q.default.createText(`
    `,!1)]:a?[,q.default.createText(`
      `,!1),q.default.createElement("div",{},[...this._toNodeList(k)]).element,q.default.createText(`
    `,!1)]:[,q.default.createText(`
      `,!1),...this._toNodeList(k),q.default.createText(`
    `,!1)]]}};var st=v(le());var it=class n extends Wr.default{static sync(){return new n().sync()}template(){let t="/docs/state-management.html",r=y("State Management - Ink reactive web component template engine."),s=y("Learn how to manage states in Ink."),a=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[e.default.createText(`
`,!1),e.default.createElement("html",{},[e.default.createText(`
  `,!1),e.default.createElement("head",{},[e.default.createText(`
  `,!1),e.default.createElement("meta",{charset:"utf-8"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.default.createText(`
  `,!1),e.default.createElement("title",{},[...this._toNodeList(r)]),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"description",content:s}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:title",content:r}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:description",content:s}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:type",content:"website"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:card",content:"summary"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:site",content:"@stackpress"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:title",content:r}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:description",content:s}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,st.env)("BUILD_ID")}.css`}),e.default.createElement("script",{"data-template":!0,type:"text/json"},[e.default.createText("__TEMPLATE_DATA__",!0)]),e.default.createText(`
  `,!1),e.default.createElement("script",{src:`/ink/build/client/${(0,st.env)("BUILD_ID")}.js`}),e.default.createText(`
  `,!1),...(0,st.env)("PUBLIC_ENV")==="development"?[e.default.createText(`
    `,!1),e.default.createElement("script",{src:"/dev.js"}),e.default.createText(`
  `,!1)]:[],e.default.createText(`
`,!1)]),e.default.createText(`
  `,!1),e.default.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},[e.default.createText(`
    `,!1),e.default.createElement("panel-layout",{},[e.default.createText(`
      `,!1),e.default.createElement("header",{},[e.default.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},[e.default.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.default.createText(`
    `,!1),e.default.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:a},[]),e.default.createText(`
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
  `,!1),e.default.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:a},[]),e.default.createText(`
`,!1)]),e.default.createText(`
`,!1),e.default.createElement("nav",{class:"bg-t-1 scroll-auto h-calc-full-60"},[e.default.createText(`
  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(y("Introduction")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/index.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(y("Features")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(y("Usage")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(y("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
`,!1)])]),e.default.createText(`
      `,!1),e.default.createElement("aside",{right:!0},[e.default.createText(`
        `,!1),e.default.createElement("menu",{class:"m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto"},[e.default.createText(`
          `,!1),e.default.createElement("h6",{class:"tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper"},[e.default.createText(`
            `,!1),...this._toNodeList(y("On this page")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("nav",{class:"tx-14 tx-lh-32"},[e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#props"},[...this._toNodeList(y("Props"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#signals"},[...this._toNodeList(y("Signals"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#events"},[...this._toNodeList(y("Events"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#classnames"},[...this._toNodeList(y("Class Names"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#children"},[...this._toNodeList(y("Children"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#component"},[...this._toNodeList(y("Component"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#env"},[...this._toNodeList(y("Env Variables"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#this"},[...this._toNodeList(y("this"))]),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
      `,!1),e.default.createElement("main",{},[e.default.createText(`
        `,!1),e.default.createElement("api-docs",{},[e.default.createText(`
          `,!1),e.default.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},[e.default.createText(`
            `,!1),...this._toNodeList(y("State Management")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Ink provides several ways to manage properties and states 
            in your components.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"props"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(y("Props")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{lang:"js",trim:!0,detab:12},[...this._toNodeList(`
            import { props } from '@stackpress/ink';
            const { title, description } = props();
          `)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("code",{},[e.default.createText("props",!1)]),e.default.createText(` function can be used to access the 
            properties of a component.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"signals"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(y("Signals")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Ink provides a reactive state management system that allows 
            you to manage states in your components. The system is based 
            on signals, which are reactive variables that can be used to 
            store and update data. Signals can be used to store any type 
            of data, including numbers, strings, objects, arrays, and even 
            functions.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{trim:!0,detab:14},[...this._toNodeList(`
              <script>
                import { signal } from '@stackpress/ink';
                const count = signal<number>(1);
              <\/script>
              <em class=classlist>Count #{count.value}</em>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            To create a signal, you can use the 
            `,!1),e.default.createElement("ide-code",{type:"javascript",inline:!0},[...this._toNodeList("signal()")]),e.default.createText(` 
            function, which takes an initial value as an argument. Signals 
            can be read and updated using the `,!1),e.default.createElement("code",{},[e.default.createText("value",!1)]),e.default.createText(` property. 
            Setting the value will trigger a re-render of the component.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Signals can be used in your components to manage states and 
            trigger updates when the state changes. You can use signals to 
            store data that needs to be shared between components, or to 
            trigger side effects when the state changes. Signals can also 
            be used to store data that needs to be persisted across page 
            reloads, such as form data or user preferences.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"events"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(y("Events")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{trim:!0,number:!0,detab:14},[...this._toNodeList(`
              <script>
                import { signal } from '@stackpress/ink';
                const count = signal<number>(1);
                const add = e => count.value++;
              <\/script>

              <button click=add>{count.value}</button>

              <button dblclick=add>{count.value}</button>
              <button mousedown=add>{count.value}</button>
              <button mouseup=add>{count.value}</button>
              <button mousemove=add>{count.value}</button>
              <button mouseover=add>{count.value}</button>
              <button mouseout=add>{count.value}</button>
              <button wheel=add>{count.value}</button>
              <button keydown=add>{count.value}</button>
              <button keypress=add>{count.value}</button>
              <button keyup=add>{count.value}</button>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            For example, you can use the `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("click",!1)]),e.default.createText(` 
            attribute assigned to a function to trigger a function when 
            the element is clicked. In combination with updating a signal, 
            can trigger a re-render of the component. The following event 
            attributes are supported.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"col-2"},[e.default.createText(`
            `,!1),e.default.createElement("div",{},[e.default.createText(`
              `,!1),e.default.createElement("h3",{},[...this._toNodeList(y("Mouse Events"))]),e.default.createText(`
              `,!1),e.default.createElement("ul",{class:"tx-lh-36"},[e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("click",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("dblclick",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("mousedown",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("mouseup",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("mousemove",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("mouseover",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("mouseout",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("wheel",!1)])]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("h3",{},[...this._toNodeList(y("Keyboard Events"))]),e.default.createText(`
              `,!1),e.default.createElement("ul",{class:"tx-lh-36"},[e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("keydown",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("keypress",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("keyup",!1)])]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("h3",{},[...this._toNodeList(y("Form Events"))]),e.default.createText(`
              `,!1),e.default.createElement("ul",{class:"tx-lh-36"},[e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("blur",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("change",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("contextmenu",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("focus",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("input",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("submit",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("invalid",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("reset",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("search",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("select",!1)])]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("h3",{},[...this._toNodeList(y("Clipboard Events"))]),e.default.createText(`
              `,!1),e.default.createElement("ul",{class:"tx-lh-36"},[e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("copy",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("cut",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("paste",!1)])]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("h3",{},[...this._toNodeList(y("Transition Events"))]),e.default.createText(`
              `,!1),e.default.createElement("ul",{class:"tx-lh-36"},[e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("transitionend",!1)])]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{},[e.default.createText(`
              `,!1),e.default.createElement("h3",{},[...this._toNodeList(y("Drag Events"))]),e.default.createText(`
              `,!1),e.default.createElement("ul",{class:"tx-lh-36"},[e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("drag",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("dragstart",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("dragend",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("dragover",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("dragenter",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("dragleave",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("drop",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("scroll",!1)])]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("h3",{},[...this._toNodeList(y("Media Events"))]),e.default.createText(`
              `,!1),e.default.createElement("ul",{class:"tx-lh-36"},[e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("durationchange",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("ended",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("error",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("loadeddata",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("loadedmetadata",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("loadstart",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("pause",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("play",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("playing",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("progress",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("ratechange",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("seeked",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("seeking",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("stalled",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("suspend",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("timeupdate",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("volumechange",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("waiting",!1)])]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("h3",{},[...this._toNodeList(y("Animation Events"))]),e.default.createText(`
              `,!1),e.default.createElement("ul",{class:"tx-lh-36"},[e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("animationstart",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("animationend",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("animationiteration",!1)])]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"classnames"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(y("Class Names")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"js",trim:!0,detab:14},[...this._toNodeList(`
              import { classnames } from '@stackpress/ink';
              const classlist = classnames(); //--> 'class1 class2 class3'
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("code",{},[e.default.createText("classnames",!1)]),e.default.createText(` function can be used to generate 
            a list of class names based on the properties of an object.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"children"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(y("Children")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"js",trim:!0,detab:14},[...this._toNodeList(`
              import { children } from '@stackpress/ink';
              const childlist = children(); //--> Node[]
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("code",{},[e.default.createText("children",!1)]),e.default.createText(` function can be used to render 
            child components in a parent component.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"component"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(y("Component")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"js",trim:!0,detab:14},[...this._toNodeList(`
              import { component } from '@stackpress/ink';
              const button = component(); //--> HTMLElement
              console.log(button.querySelector('span'));
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            For other edge cases, the `,!1),e.default.createElement("code",{},[e.default.createText("component",!1)]),e.default.createText(` function 
            can be used to get raw access to the component's 
            functionality.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"env"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(y("Environment Variables")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{trim:!0,detab:12},[...this._toNodeList(`
            <script>
              import { env } from '@stackpress/ink';
              const { BUILD_ID, NODE_ENV } = env();
            <\/script>
            <if true={NODE_ENV === 'development'}>
              <p>Development mode</p>
            </if>
          `)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("code",{},[e.default.createText("env",!1)]),e.default.createText(` function can be used to access environment 
            variables in a component.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"this"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(y("this")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"What's this",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,detab:14},[...this._toNodeList(`
              <script>
                this.props;
                this.style;
                this.classList;
                this.parentNode;
                this.innerHTML;
                this.appendChild();
                this.querySelector('p');
              <\/script>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("this",!1)]),e.default.createText(` refers to the 
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("InkComponent",!1)]),e.default.createText(` that extends 
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("HTMLElement",!1)]),e.default.createText(`. This means all
            components in Ink are in fact are HTML elements and has
            access to the common functionality like 
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("innerHTML",!1)]),e.default.createText(` and
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("querySelector()")]),e.default.createText(` to name a 
            few. `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("InkComponent",!1)]),e.default.createText(` has the
            additional following properties and methods that you can access
            using `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("this",!1)]),e.default.createText(`.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("api-ui",{start:"InkComponent"}),e.default.createText(`

          `,!1),e.default.createElement("element-alert",{curved:!0,info:!0,class:"py-20 tx-lh-24"},[e.default.createText(`
            `,!1),e.default.createElement("element-icon",{name:"info-circle"}),e.default.createText(`
            `,!1),e.default.createElement("strong",{},[e.default.createText("Info:",!1)]),e.default.createText(` You can discover more methods and properties
            of the `,!1),e.default.createElement("code",{},[e.default.createText("HTMLElement",!1)]),e.default.createText(` class on the
            `,!1),e.default.createElement("a",{target:"_blank",class:"tx-white tx-underline",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"},[e.default.createText(`
              MDN Web Docs
            `,!1)]),e.default.createText(`.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("nav",{class:"flex"},[e.default.createText(`
            `,!1),e.default.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
              `,!1),e.default.createElement("element-icon",{name:"chevron-left",theme:"tx-1"}),e.default.createText(`
              `,!1),...this._toNodeList(y("Markup Syntax")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
              `,!1),...this._toNodeList(y("Component Strategy")),e.default.createText(`
              `,!1),e.default.createElement("element-icon",{name:"chevron-right",theme:"tx-1"}),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("footer",{class:"foot"},[]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]),e.default.createText(`
`,!1)])]}},Ss={PanelLayout_e83da818dc31723bcd5d:ee,ElementAlert_502d0a1992f720baceb4:re,ElementIcon_75af7664df8b2546e65a:ne,ApiDocs_7e4942547226dfeef0ae:oe,ApiUi_4c60dc54dc2ac695b83b:ce,ApiIdeCode_d21b237295245a3b7d61:U,IdeApp_ab38f0e847e1d047c1a8:pe,IdeCode_d21b237295245a3b7d61:U,I18nTranslate_b1ed083cf3561af1816f:de},Zr={"panel-layout":ee,"element-alert":re,"element-icon":ne,"api-docs":oe,"api-ui":ce,"ide-app":pe,"ide-code":U,"i18n-translate":de},Ls="82c040caab27f511cc51";at.default.once("ready",()=>{it.sync();for(let[n,t]of Object.entries(Zr))customElements.getName(t)||customElements.define(n,t);at.default.emit("mounted",document.body)});return on(Ns);})();
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
