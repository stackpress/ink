var InkAPI=(()=>{var pe=Object.create;var L=Object.defineProperty;var he=Object.getOwnPropertyDescriptor;var Ee=Object.getOwnPropertyNames;var be=Object.getPrototypeOf,_e=Object.prototype.hasOwnProperty;var i=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),ge=(a,t)=>{for(var r in t)L(a,r,{get:t[r],enumerable:!0})},ae=(a,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let c of Ee(t))!_e.call(a,c)&&c!==r&&L(a,c,{get:()=>t[c],enumerable:!(s=he(t,c))||s.enumerable});return a};var P=(a,t,r)=>(r=a!=null?pe(be(a)):{},ae(t||!a||!a.__esModule?L(r,"default",{value:a,enumerable:!0}):r,a)),ye=a=>ae(L({},"__esModule",{value:!0}),a);var m=i(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});var C=class{constructor(){this._parent=null}get parent(){return this._parent}get parentElement(){return this._parent}set parent(t){this._parent=t}};j.default=C});var q=i(T=>{"use strict";var ve=T&&T.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(T,"__esModule",{value:!0});var ke=ve(m()),R=class extends ke.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#comment",this.type=8,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!--${this.value}-->`}};T.default=R});var B=i(p=>{"use strict";var Ne=p&&p.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(p,"__esModule",{value:!0});var Le=Ne(m()),U=class extends Le.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#doctype",this.type=10,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!DOCTYPE ${this.value}>`}};p.default=U});var G=i(h=>{"use strict";var De=h&&h.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(h,"__esModule",{value:!0});var Oe=De(m()),Se=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],F=class a extends Oe.default{get attributes(){return Object.fromEntries(this._attributes)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof a)}get nodeName(){return this.name.toUpperCase()}get nodes(){let t=[this];return this._flatten(Array.from(this.children),t),t}get nodeType(){return this.type}get parent(){return this._parent}set parent(t){this._parent=t}constructor(t,r={},s=[]){super(),this.type=1,this._parent=null,this.name=t,this._attributes=new Map(Object.entries(r)),this.children=new Set(s.filter(Boolean))}appendChild(t){return this.children.add(t),t.parent=this,this}export(){return{type:this.type,name:this.name,attributes:Object.fromEntries(this._attributes.entries()),children:Array.from(this.children).map(t=>t.export())}}getAttribute(t){return this._attributes.get(t)}hasAttribute(t){return this._attributes.has(t)}removeAttribute(t){return this._attributes.delete(t),this}removeChild(t){this.children.delete(t),t.parent=null}setAttribute(t,r){return this._attributes.set(t,r),this}toString(){let t=Array.from(this._attributes.entries()),r=t.length>0?" "+t.map(([c,o])=>{if(typeof o=="string"&&!/["<>\n]/.test(o))return`${c}="${o}"`;if(typeof o=="boolean")return o?c:""}).join(" "):"";if(Se.includes(this.name))return`<${this.name}${r} />`;let s=Array.from(this.children.values()).map(c=>c.toString()).join("");return`<${this.name}${r}>${s}</${this.name}>`}_flatten(t,r){t.forEach(s=>{r.push(s),s instanceof a&&this._flatten(Array.from(s.children),r)})}};h.default=F});var $=i(E=>{"use strict";var Me=E&&E.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(E,"__esModule",{value:!0});var we=Me(m()),H=class extends we.default{get nodeName(){return"#text"}get nodeType(){return this.type}get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,r=!1){super(),this.name="#text",this.type=3,this._escape=r,this._value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return this.value}};E.default=H});var O=i(b=>{"use strict";var D=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var Ae=D(q()),Ie=D(B()),Y=D(G()),Pe=D($()),V=class a{static createComment(t,r){let s=new Ae.default(t);return r&&(s.parent=r),s}static createDoctype(t="html",r){let s=new Ie.default(t);return r&&(s.parent=r),s}static createElement(t,r={},s=[],c){let o=new Y.default(t,r,s);return c&&(o.parent=c),o}static createText(t,r=!1,s){let c=new Pe.default(t,r);return s&&(c.parent=s),c}static import(t,r){return t.map(s=>{let{value:c}=s,{name:o,attributes:u,children:d}=s;switch(s.type){case 1:let x=this.createElement(o,u,[],r);return a.import(d,x).forEach(I=>x.appendChild(I)),x;case 3:return this.createText(c,!0,r);case 8:return this.createComment(c,r);case 10:return this.createDoctype(c,r)}return null}).filter(Boolean)}static load(t){return new a(t)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof Y.default)}get nodes(){return Array.from(this.children).map(t=>t instanceof Y.default?t.nodes:[t]).flat()}constructor(t){this.children=new Set(t.filter(Boolean))}export(){return this.childList.map(t=>t.export())}toString(){return Array.from(this.children).map(t=>t.toString()).join("")}};b.default=V});var se=i(S=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0});S.getStatus=Ce;var re={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};S.default=re;function Ce(a){return Object.values(re).find(t=>t.code===a)}});var le=i(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});var je=se(),W=class a extends Error{static for(t,...r){return r.forEach(function(s){t=t.replace("%s",String(s))}),new this(t)}static forErrors(t){let r=new this("Invalid Parameters");return r.withErrors(t),r}static require(t,r,...s){if(!t){for(let c of s)r=r.replace("%s",c);throw new this(r)}}static try(t){return{catch:r=>{try{return t()}catch(s){if(s instanceof a)return r(s,s.type);if(s instanceof Error){let c=a.upgrade(s);return r(c,c.type)}else if(typeof s=="string"){let c=a.for(s);return r(c,c.type)}return r(s,"unknown")}}}}static upgrade(t,r=500){if(t instanceof a)return t;let s=new this(t.message,r);return s.name=t.name,s.stack=t.stack,s}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,r=500){var s;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=r,this._status=((s=(0,je.getStatus)(r))===null||s===void 0?void 0:s.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,r=0){let s={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,r)};return Object.keys(this._errors).length>0&&(s.errors=this._errors),s}trace(t=0,r=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,r||this.stack.length).map(c=>c.trim()).map(c=>{if(!c.startsWith("at"))return!1;let[o,u,d]=c.split(" ");d||(d=`(${u})`,u="<none>");let[x,I,Te]=d.substring(1,d.length-1).split(":");return{method:u,file:x,line:parseInt(I)||0,char:parseInt(Te)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,r){return this._start=t,this._end=r,this}};K.default=W});var J=i(_=>{"use strict";var Re=_&&_.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(_,"__esModule",{value:!0});var qe=Re(le()),Q=class extends qe.default{};_.default=Q});var g=i(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});var Ue=new Map;z.default=Ue});var te=i(y=>{"use strict";var ee=y&&y.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(y,"__esModule",{value:!0});var Be=ee(J()),ce=ee(O()),X=ee(g()),Z=class{render(t={}){X.default.set("props",t||{});let r=process.env||{};X.default.set("env",Object.assign(Object.assign({},r),{BUILD_ID:this.id()}));let s=JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(X.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(r).filter(u=>u[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})),c=this.template(),o=ce.default.load(c).toString().trim();if(!o.toLowerCase().startsWith("<html"))throw Be.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${o.replace("__TEMPLATE_DATA__",s)}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(r=>typeof r=="object"&&typeof r.nodeType=="number")?t:[ce.default.createText(String(t),!0)]}};y.default=Z});var ne=i(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});v.ServerEmitter=void 0;var M=class{emit(t,r){return this}on(t,r){return this}once(t,r){return this}unbind(t,r){return this}};v.ServerEmitter=M;var Fe=new M;v.default=Fe});var ie=i(k=>{"use strict";var Ge=k&&k.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(k,"__esModule",{value:!0});var He=Ge(g());function $e(a){let t=He.default.get("env")||{};return a?t[a]||null:t}k.default=$e});var oe=i(N=>{"use strict";var Ye=N&&N.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(N,"__esModule",{value:!0});N.default=We;var Ve=Ye(g());function We(){return Ve.default.get("props")||{}}});var ue=i(n=>{"use strict";var Ke=n&&n.__createBinding||(Object.create?function(a,t,r,s){s===void 0&&(s=r);var c=Object.getOwnPropertyDescriptor(t,r);(!c||("get"in c?!t.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(a,s,c)}:function(a,t,r,s){s===void 0&&(s=r),a[s]=t[r]}),Qe=n&&n.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),Je=n&&n.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(r){var s=[];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(s[s.length]=c);return s},a(t)};return function(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var s=a(t),c=0;c<s.length;c++)s[c]!=="default"&&Ke(r,t,s[c]);return Qe(r,t),r}}(),f=n&&n.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(n,"__esModule",{value:!0});n.props=n.emitter=n.env=n.data=n.ServerException=n.ServerEmitter=n.ServerDocument=n.DOMNode=n.DOMText=n.DOMElement=n.DOMDocument=n.DOMDoctype=n.DOMComment=void 0;var ze=f(q());n.DOMComment=ze.default;var Xe=f(B());n.DOMDoctype=Xe.default;var Ze=f(O());n.DOMDocument=Ze.default;var et=f(G());n.DOMElement=et.default;var tt=f($());n.DOMText=tt.default;var at=f(m());n.DOMNode=at.default;var rt=f(te());n.ServerDocument=rt.default;var fe=Je(ne());n.emitter=fe.default;Object.defineProperty(n,"ServerEmitter",{enumerable:!0,get:function(){return fe.ServerEmitter}});var st=f(g());n.data=st.default;var lt=f(ie());n.env=lt.default;var ct=f(oe());n.props=ct.default;var nt=f(J());n.ServerException=nt.default});var me=i((Lt,de)=>{de.exports={...ue()}});var ot={};ge(ot,{default:()=>A});var e=P(O()),xe=P(te()),w=P(me());var l=function(a,...t){let r=it(a);for(let s=0;s<t.length;s++)r=r.replace("%s",String(t[s]));return r},it=function(a){return a};var A=class extends xe.default{id(){return"82c040caab27f511cc51"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
  .col-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }`}template(){let t="/docs/state-management.html",r=l("State Management - Ink reactive web component template engine."),s=l("Learn how to manage states in Ink."),c=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[e.default.createText(`
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
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,w.env)("BUILD_ID")}.css`}),e.default.createElement("script",{"data-template":!0,type:"text/json"},[e.default.createText("__TEMPLATE_DATA__",!0)]),e.default.createText(`
  `,!1),e.default.createElement("script",{src:`/ink/build/client/${(0,w.env)("BUILD_ID")}.js`}),e.default.createText(`
  `,!1),...(0,w.env)("PUBLIC_ENV")==="development"?[e.default.createText(`
    `,!1),e.default.createElement("script",{src:"/dev.js"}),e.default.createText(`
  `,!1)]:[],e.default.createText(`
`,!1)]),e.default.createText(`
  `,!1),e.default.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},[e.default.createText(`
    `,!1),e.default.createElement("panel-layout",{},[e.default.createText(`
      `,!1),e.default.createElement("header",{},[e.default.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},[e.default.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.default.createText(`
    `,!1),e.default.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:c},[]),e.default.createText(`
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
  `,!1),e.default.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:c},[]),e.default.createText(`
`,!1)]),e.default.createText(`
`,!1),e.default.createElement("nav",{class:"bg-t-1 scroll-auto h-calc-full-60"},[e.default.createText(`
  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(l("Introduction")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/index.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(l("Features")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(l("Usage")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(l("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
`,!1)])]),e.default.createText(`
      `,!1),e.default.createElement("aside",{right:!0},[e.default.createText(`
        `,!1),e.default.createElement("menu",{class:"m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto"},[e.default.createText(`
          `,!1),e.default.createElement("h6",{class:"tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper"},[e.default.createText(`
            `,!1),...this._toNodeList(l("On this page")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("nav",{class:"tx-14 tx-lh-32"},[e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#props"},[...this._toNodeList(l("Props"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#signals"},[...this._toNodeList(l("Signals"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#events"},[...this._toNodeList(l("Events"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#classnames"},[...this._toNodeList(l("Class Names"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#children"},[...this._toNodeList(l("Children"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#component"},[...this._toNodeList(l("Component"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#env"},[...this._toNodeList(l("Env Variables"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#this"},[...this._toNodeList(l("this"))]),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
      `,!1),e.default.createElement("main",{},[e.default.createText(`
        `,!1),e.default.createElement("api-docs",{},[e.default.createText(`
          `,!1),e.default.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},[e.default.createText(`
            `,!1),...this._toNodeList(l("State Management")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Ink provides several ways to manage properties and states 
            in your components.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"props"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(l("Props")),e.default.createText(`
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
            `,!1),...this._toNodeList(l("Signals")),e.default.createText(`
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
              </script>
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
            `,!1),...this._toNodeList(l("Events")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{trim:!0,number:!0,detab:14},[...this._toNodeList(`
              <script>
                import { signal } from '@stackpress/ink';
                const count = signal<number>(1);
                const add = e => count.value++;
              </script>

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
              `,!1),e.default.createElement("h3",{},[...this._toNodeList(l("Mouse Events"))]),e.default.createText(`
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
              `,!1),e.default.createElement("h3",{},[...this._toNodeList(l("Keyboard Events"))]),e.default.createText(`
              `,!1),e.default.createElement("ul",{class:"tx-lh-36"},[e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("keydown",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("keypress",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("keyup",!1)])]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("h3",{},[...this._toNodeList(l("Form Events"))]),e.default.createText(`
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
              `,!1),e.default.createElement("h3",{},[...this._toNodeList(l("Clipboard Events"))]),e.default.createText(`
              `,!1),e.default.createElement("ul",{class:"tx-lh-36"},[e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("copy",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("cut",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("paste",!1)])]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("h3",{},[...this._toNodeList(l("Transition Events"))]),e.default.createText(`
              `,!1),e.default.createElement("ul",{class:"tx-lh-36"},[e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("transitionend",!1)])]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{},[e.default.createText(`
              `,!1),e.default.createElement("h3",{},[...this._toNodeList(l("Drag Events"))]),e.default.createText(`
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
              `,!1),e.default.createElement("h3",{},[...this._toNodeList(l("Media Events"))]),e.default.createText(`
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
              `,!1),e.default.createElement("h3",{},[...this._toNodeList(l("Animation Events"))]),e.default.createText(`
              `,!1),e.default.createElement("ul",{class:"tx-lh-36"},[e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("animationstart",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("animationend",!1)])]),e.default.createText(`
                `,!1),e.default.createElement("li",{},[e.default.createElement("ide-code",{inline:!0},[e.default.createText("animationiteration",!1)])]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"classnames"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(l("Class Names")),e.default.createText(`
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
            `,!1),...this._toNodeList(l("Children")),e.default.createText(`
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
            `,!1),...this._toNodeList(l("Component")),e.default.createText(`
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
            `,!1),...this._toNodeList(l("Environment Variables")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{trim:!0,detab:12},[...this._toNodeList(`
            <script>
              import { env } from '@stackpress/ink';
              const { BUILD_ID, NODE_ENV } = env();
            </script>
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
            `,!1),...this._toNodeList(l("this")),e.default.createText(`
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
              </script>
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
              `,!1),...this._toNodeList(l("Markup Syntax")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
              `,!1),...this._toNodeList(l("Component Strategy")),e.default.createText(`
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