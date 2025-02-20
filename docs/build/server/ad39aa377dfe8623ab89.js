var InkAPI=(()=>{var xe=Object.create;var O=Object.defineProperty;var Te=Object.getOwnPropertyDescriptor;var be=Object.getOwnPropertyNames;var ge=Object.getPrototypeOf,_e=Object.prototype.hasOwnProperty;var i=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),Ee=(a,t)=>{for(var r in t)O(a,r,{get:t[r],enumerable:!0})},ae=(a,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of be(t))!_e.call(a,l)&&l!==r&&O(a,l,{get:()=>t[l],enumerable:!(s=Te(t,l))||s.enumerable});return a};var P=(a,t,r)=>(r=a!=null?xe(ge(a)):{},ae(t||!a||!a.__esModule?O(r,"default",{value:a,enumerable:!0}):r,a)),ye=a=>ae(O({},"__esModule",{value:!0}),a);var d=i(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});var I=class{constructor(){this._parent=null}get parent(){return this._parent}get parentElement(){return this._parent}set parent(t){this._parent=t}};C.default=I});var q=i(h=>{"use strict";var ke=h&&h.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(h,"__esModule",{value:!0});var ve=ke(d()),R=class extends ve.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#comment",this.type=8,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!--${this.value}-->`}};h.default=R});var B=i(x=>{"use strict";var we=x&&x.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(x,"__esModule",{value:!0});var Oe=we(d()),U=class extends Oe.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#doctype",this.type=10,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!DOCTYPE ${this.value}>`}};x.default=U});var $=i(T=>{"use strict";var De=T&&T.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(T,"__esModule",{value:!0});var Ne=De(d()),je=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],G=class a extends Ne.default{get attributes(){return Object.fromEntries(this._attributes)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof a)}get nodeName(){return this.name.toUpperCase()}get nodes(){let t=[this];return this._flatten(Array.from(this.children),t),t}get nodeType(){return this.type}get parent(){return this._parent}set parent(t){this._parent=t}constructor(t,r={},s=[]){super(),this.type=1,this._parent=null,this.name=t,this._attributes=new Map(Object.entries(r)),this.children=new Set(s.filter(Boolean))}appendChild(t){return this.children.add(t),t.parent=this,this}export(){return{type:this.type,name:this.name,attributes:Object.fromEntries(this._attributes.entries()),children:Array.from(this.children).map(t=>t.export())}}getAttribute(t){return this._attributes.get(t)}hasAttribute(t){return this._attributes.has(t)}removeAttribute(t){return this._attributes.delete(t),this}removeChild(t){this.children.delete(t),t.parent=null}setAttribute(t,r){return this._attributes.set(t,r),this}toString(){let t=Array.from(this._attributes.entries()),r=t.length>0?" "+t.map(([l,o])=>{if(typeof o=="string"&&!/["<>\n]/.test(o))return`${l}="${o}"`;if(typeof o=="boolean")return o?l:""}).join(" "):"";if(je.includes(this.name))return`<${this.name}${r} />`;let s=Array.from(this.children.values()).map(l=>l.toString()).join("");return`<${this.name}${r}>${s}</${this.name}>`}_flatten(t,r){t.forEach(s=>{r.push(s),s instanceof a&&this._flatten(Array.from(s.children),r)})}};T.default=G});var H=i(b=>{"use strict";var Ae=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var Le=Ae(d()),F=class extends Le.default{get nodeName(){return"#text"}get nodeType(){return this.type}get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,r=!1){super(),this.name="#text",this.type=3,this._escape=r,this._value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return this.value}};b.default=F});var N=i(g=>{"use strict";var D=g&&g.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(g,"__esModule",{value:!0});var Se=D(q()),Me=D(B()),W=D($()),Pe=D(H()),Y=class a{static createComment(t,r){let s=new Se.default(t);return r&&(s.parent=r),s}static createDoctype(t="html",r){let s=new Me.default(t);return r&&(s.parent=r),s}static createElement(t,r={},s=[],l){let o=new W.default(t,r,s);return l&&(o.parent=l),o}static createText(t,r=!1,s){let l=new Pe.default(t,r);return s&&(l.parent=s),l}static import(t,r){return t.map(s=>{let{value:l}=s,{name:o,attributes:f,children:p}=s;switch(s.type){case 1:let m=this.createElement(o,f,[],r);return a.import(p,m).forEach(M=>m.appendChild(M)),m;case 3:return this.createText(l,!0,r);case 8:return this.createComment(l,r);case 10:return this.createDoctype(l,r)}return null}).filter(Boolean)}static load(t){return new a(t)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof W.default)}get nodes(){return Array.from(this.children).map(t=>t instanceof W.default?t.nodes:[t]).flat()}constructor(t){this.children=new Set(t.filter(Boolean))}export(){return this.childList.map(t=>t.export())}toString(){return Array.from(this.children).map(t=>t.toString()).join("")}};g.default=Y});var se=i(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});j.getStatus=Ie;var re={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};j.default=re;function Ie(a){return Object.values(re).find(t=>t.code===a)}});var le=i(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});var Ce=se(),K=class a extends Error{static for(t,...r){return r.forEach(function(s){t=t.replace("%s",String(s))}),new this(t)}static forErrors(t){let r=new this("Invalid Parameters");return r.withErrors(t),r}static require(t,r,...s){if(!t){for(let l of s)r=r.replace("%s",l);throw new this(r)}}static try(t){return{catch:r=>{try{return t()}catch(s){if(s instanceof a)return r(s,s.type);if(s instanceof Error){let l=a.upgrade(s);return r(l,l.type)}else if(typeof s=="string"){let l=a.for(s);return r(l,l.type)}return r(s,"unknown")}}}}static upgrade(t,r=500){if(t instanceof a)return t;let s=new this(t.message,r);return s.name=t.name,s.stack=t.stack,s}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,r=500){var s;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=r,this._status=((s=(0,Ce.getStatus)(r))===null||s===void 0?void 0:s.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,r=0){let s={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,r)};return Object.keys(this._errors).length>0&&(s.errors=this._errors),s}trace(t=0,r=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,r||this.stack.length).map(l=>l.trim()).map(l=>{if(!l.startsWith("at"))return!1;let[o,f,p]=l.split(" ");p||(p=`(${f})`,f="<none>");let[m,M,he]=p.substring(1,p.length-1).split(":");return{method:f,file:m,line:parseInt(M)||0,char:parseInt(he)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,r){return this._start=t,this._end=r,this}};Q.default=K});var J=i(_=>{"use strict";var Re=_&&_.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(_,"__esModule",{value:!0});var qe=Re(le()),V=class extends qe.default{};_.default=V});var E=i(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});var Ue=new Map;z.default=Ue});var te=i(y=>{"use strict";var ee=y&&y.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(y,"__esModule",{value:!0});var Be=ee(J()),ne=ee(N()),X=ee(E()),Z=class{render(t={}){X.default.set("props",t||{});let r=process.env||{};X.default.set("env",Object.assign(Object.assign({},r),{BUILD_ID:this.id()}));let s=JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(X.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(r).filter(f=>f[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})),l=this.template(),o=ne.default.load(l).toString().trim();if(!o.toLowerCase().startsWith("<html"))throw Be.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${o.replace("__TEMPLATE_DATA__",s)}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(r=>typeof r=="object"&&typeof r.nodeType=="number")?t:[ne.default.createText(String(t),!0)]}};y.default=Z});var ce=i(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.ServerEmitter=void 0;var A=class{emit(t,r){return this}on(t,r){return this}once(t,r){return this}unbind(t,r){return this}};k.ServerEmitter=A;var Ge=new A;k.default=Ge});var ie=i(v=>{"use strict";var $e=v&&v.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(v,"__esModule",{value:!0});var Fe=$e(E());function He(a){let t=Fe.default.get("env")||{};return a?t[a]||null:t}v.default=He});var oe=i(w=>{"use strict";var We=w&&w.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(w,"__esModule",{value:!0});w.default=Ke;var Ye=We(E());function Ke(){return Ye.default.get("props")||{}}});var fe=i(n=>{"use strict";var Qe=n&&n.__createBinding||(Object.create?function(a,t,r,s){s===void 0&&(s=r);var l=Object.getOwnPropertyDescriptor(t,r);(!l||("get"in l?!t.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(a,s,l)}:function(a,t,r,s){s===void 0&&(s=r),a[s]=t[r]}),Ve=n&&n.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),Je=n&&n.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(r){var s=[];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[s.length]=l);return s},a(t)};return function(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var s=a(t),l=0;l<s.length;l++)s[l]!=="default"&&Qe(r,t,s[l]);return Ve(r,t),r}}(),u=n&&n.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(n,"__esModule",{value:!0});n.props=n.emitter=n.env=n.data=n.ServerException=n.ServerEmitter=n.ServerDocument=n.DOMNode=n.DOMText=n.DOMElement=n.DOMDocument=n.DOMDoctype=n.DOMComment=void 0;var ze=u(q());n.DOMComment=ze.default;var Xe=u(B());n.DOMDoctype=Xe.default;var Ze=u(N());n.DOMDocument=Ze.default;var et=u($());n.DOMElement=et.default;var tt=u(H());n.DOMText=tt.default;var at=u(d());n.DOMNode=at.default;var rt=u(te());n.ServerDocument=rt.default;var ue=Je(ce());n.emitter=ue.default;Object.defineProperty(n,"ServerEmitter",{enumerable:!0,get:function(){return ue.ServerEmitter}});var st=u(E());n.data=st.default;var lt=u(ie());n.env=lt.default;var nt=u(oe());n.props=nt.default;var ct=u(J());n.ServerException=ct.default});var de=i((Ot,pe)=>{pe.exports={...fe()}});var ot={};Ee(ot,{default:()=>S});var e=P(N()),me=P(te()),L=P(de());var c=function(a,...t){let r=it(a);for(let s=0;s<t.length;s++)r=r.replace("%s",String(t[s]));return r},it=function(a){return a};var S=class extends me.default{id(){return"ad39aa377dfe8623ab89"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/docs/single-page.html",r=c("Single Page App - Ink reactive web component template engine."),s=c("How to use Ink to develop single page apps."),l=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[e.default.createText(`
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
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,L.env)("BUILD_ID")}.css`}),e.default.createElement("script",{"data-template":!0,type:"text/json"},[e.default.createText("__TEMPLATE_DATA__",!0)]),e.default.createText(`
  `,!1),e.default.createElement("script",{src:`/ink/build/client/${(0,L.env)("BUILD_ID")}.js`}),e.default.createText(`
  `,!1),...(0,L.env)("PUBLIC_ENV")==="development"?[e.default.createText(`
    `,!1),e.default.createElement("script",{src:"/dev.js"}),e.default.createText(`
  `,!1)]:[],e.default.createText(`
`,!1)]),e.default.createText(`
  `,!1),e.default.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},[e.default.createText(`
    `,!1),e.default.createElement("panel-layout",{},[e.default.createText(`
      `,!1),e.default.createElement("header",{},[e.default.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},[e.default.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.default.createText(`
    `,!1),e.default.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:l},[]),e.default.createText(`
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
  `,!1),e.default.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:l},[]),e.default.createText(`
`,!1)]),e.default.createText(`
`,!1),e.default.createElement("nav",{class:"bg-t-1 scroll-auto h-calc-full-60"},[e.default.createText(`
  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(c("Introduction")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/index.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(c("Features")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(c("Usage")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
`,!1)])]),e.default.createText(`
      `,!1),e.default.createElement("main",{},[e.default.createText(`
        `,!1),e.default.createElement("api-docs",{},[e.default.createText(`
          `,!1),e.default.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},[e.default.createText(`
            `,!1),...this._toNodeList(c("Single Page App")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            A single page application (SPA) is a website or web 
            application that dynamically rewrites a current web page with 
            new data from a web server, instead of the default method of 
            a web browser loading entire new pages. Ink is capable of 
            creating reactive SPAs using Webpack and TypeScript.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            First install the following Ink packages.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
            npm install --save-dev @stackpress/ink @stackpress/ink-loader
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Then, install the following TypeScript packages.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
            npm install --save-dev @types/node ts-loader ts-node typescript
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Then, install the following Webpack packages.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
            npm install --save-dev html-webpack-plugin webpack-dev-server webpack webpack-cli
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Next create the following files and directories.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:400,title:"My Project"},[e.default.createText(`
            `,!1),e.default.createElement("app-head",{},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"project",selector:"#client-ts"},[e.default.createText(`
                  src/client.ts
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"project",selector:"#app-ink"},[e.default.createText(`
                  src/app.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"project",selector:"#index-html"},[e.default.createText(`
                  index.html
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"project",selector:"#webpack-js"},[e.default.createText(`
                  webpack.config.js
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"project",selector:"#tsconfig-json"},[e.default.createText(`
                  tsconfig.json
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"project",selector:"#package-json"},[e.default.createText(`
                  package.json
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-left",{},[e.default.createText(`
              `,!1),e.default.createElement("h5",{class:"folder"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"chevron-down"}),e.default.createText(`
                `,!1),e.default.createElement("span",{},[e.default.createText("src",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"project",selector:"#app-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                app.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"project",selector:"#client-ts"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                client.ts
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-muted",group:"project",selector:"#index-html"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                index.html
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-muted",group:"project",selector:"#package-json"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                package.json
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-muted",group:"project",selector:"#tsconfig-json"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                tsconfig.json
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{on:!0,class:"pt-10 block",active:"tx-white",inactive:"tx-muted",group:"project",selector:"#webpack-js"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                webpack.config.js
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-main",{},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"client-ts",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                import InkComponent from './app.ink';

                InkComponent.register();
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"app-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <script>
                  const title = 'Single Page App';
                </script>
                <h1>{title}</h1>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"index-html",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <!DOCTYPE html>
                <html>
                  <head>
                    <style>
                      body {
                        font-family: Arial, Helvetica, sans-serif;
                        margin: 0;
                        padding: 0;
                        width: 100vw;
                        height: 100vh;
                      }
                    </style>
                  </head>
                  <body>
                    <ink-app></ink-app>
                  </body>
                </html>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"webpack-js",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                const path = require('path');
                const HtmlWebpackPlugin = require('html-webpack-plugin');

                module.exports = {
                  // https://webpack.js.org/concepts/entry-points/#multi-page-application
                  entry: {
                    index: './src/client.ts'
                  },
                  output: {
                    path: path.resolve(__dirname, './dist'),
                    filename: '[name].bundle.js',
                  },
                  module: {
                    rules: [
                      {
                        test: /.ink$/,
                        use: {
                          loader: '@stackpress/ink-loader',
                          options: { minify: false }
                        },
                        exclude: /node_modules/,
                      },
                      {
                        test: /.ts$/,
                        use: 'ts-loader',
                        exclude: /node_modules/,
                      },
                    ],
                  },
                  resolve: {
                    extensions: ['.js', '.ts', '.ink'],
                  },
                  // https://webpack.js.org/configuration/dev-server/
                  devServer: {
                    port: 8080
                  },
                  plugins: [
                    new HtmlWebpackPlugin({
                      title: 'Ink',
                      template: "index.html",
                    })
                  ]
                };
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"tsconfig-json",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                {
                  "compilerOptions": {
                    "declaration": true,
                    "esModuleInterop": true,
                    "lib": [ "es2021", "es7", "es6", "dom" ],
                    "module": "commonjs",
                    "noUnusedLocals": true,
                    "outDir": "./dist/",
                    "preserveConstEnums": true,
                    "resolveJsonModule": true,
                    "removeComments": true,
                    "sourceMap": false,
                    "strict": true,
                    "target": "es6",
                    "skipLibCheck": true
                  },
                  "include": [ 
                    "src/**/*.ts", 
                    "@stackpress/ink/types"
                  ],
                  "exclude": [ "dist", "node_modules" ]
                }
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"package-json",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                {
                  "name": "my-spa",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "webpack-dev-server --mode development",
                    "build": "webpack --mode production"
                  },
                  "devDependencies": {
                    "@stackpress/ink": "0.3.28"
                    "@stackpress/ink-loader": "0.3.28",
                    "@types/node": "22.1.0",
                    "html-webpack-plugin": "5.6.0",
                    "webpack-dev-server": "5.0.4",
                    "ts-loader": "9.5.1",
                    "ts-node": "10.9.2",
                    "typescript": "5.4.5",
                    "webpack": "5.91.0",
                    "webpack-cli": "5.1.4"
                  }
                }
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            To test the SPA and see the results, run the following command in terminal.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npm run dev
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          
          `,!1),e.default.createElement("nav",{class:"flex"},[e.default.createText(`
            `,!1),e.default.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/template-engine.html"},[e.default.createText(`
              `,!1),e.default.createElement("element-icon",{name:"chevron-left",theme:"tx-1"}),e.default.createText(`
              `,!1),...this._toNodeList(c("Template Engine")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/static-site.html"},[e.default.createText(`
              `,!1),...this._toNodeList(c("Static Site Generator")),e.default.createText(`
              `,!1),e.default.createElement("element-icon",{name:"chevron-right",theme:"tx-1"}),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("footer",{class:"foot"},[]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]),e.default.createText(`
`,!1)])]}};return ye(ot);})();
;
;module.exports = InkAPI;