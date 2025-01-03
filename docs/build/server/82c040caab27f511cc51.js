var InkAPI=(()=>{var oe=Object.create;var y=Object.defineProperty;var fe=Object.getOwnPropertyDescriptor;var ue=Object.getOwnPropertyNames;var me=Object.getPrototypeOf,xe=Object.prototype.hasOwnProperty;var i=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),de=(a,t)=>{for(var r in t)y(a,r,{get:t[r],enumerable:!0})},V=(a,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ue(t))!xe.call(a,n)&&n!==r&&y(a,n,{get:()=>t[n],enumerable:!(s=fe(t,n))||s.enumerable});return a};var Y=(a,t,r)=>(r=a!=null?oe(me(a)):{},V(t||!a||!a.__esModule?y(r,"default",{value:a,enumerable:!0}):r,a)),pe=a=>V(y({},"__esModule",{value:!0}),a);var O=i(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});var I=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(r=>this._elements.add(r))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};w.default=I});var Q=i(_=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});_.getStatus=he;var K={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};_.default=K;function he(a){return Object.values(K).find(t=>t.code===a)}});var z=i(S=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0});var Te=Q(),D=class a extends Error{static for(t,...r){return r.forEach(function(s){t=t.replace("%s",String(s))}),new this(t)}static forErrors(t){let r=new this("Invalid Parameters");return r.withErrors(t),r}static require(t,r,...s){if(!t){for(let n of s)r=r.replace("%s",n);throw new this(r)}}static try(t){return{catch:r=>{try{return t()}catch(s){if(s instanceof a)return r(s,s.type);if(s instanceof Error){let n=a.upgrade(s);return r(n,n.type)}else if(typeof s=="string"){let n=a.for(s);return r(n,n.type)}return r(s,"unknown")}}}}static upgrade(t,r=500){if(t instanceof a)return t;let s=new this(t.message,r);return s.name=t.name,s.stack=t.stack,s}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,r=500){var s;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=r,this._status=((s=(0,Te.getStatus)(r))===null||s===void 0?void 0:s.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,r=0){let s={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,r)};return Object.keys(this._errors).length>0&&(s.errors=this._errors),s}trace(t=0,r=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,r||this.stack.length).map(n=>n.trim()).map(n=>{if(!n.startsWith("at"))return!1;let[o,u,m]=n.split(" ");m||(m=`(${u})`,u="<none>");let[ne,ce,ie]=m.substring(1,m.length-1).split(":");return{method:u,file:ne,line:parseInt(ce)||0,char:parseInt(ie)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,r){return this._start=t,this._end=r,this}};S.default=D});var A=i(d=>{"use strict";var be=d&&d.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(d,"__esModule",{value:!0});var Ee=be(z()),j=class extends Ee.default{};d.default=j});var p=i(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});var ge=new Map;C.default=ge});var R=i(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});var P=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,r=!1){this._escape=r,this._value=t}toString(){return this.value}};M.default=P});var q=i(h=>{"use strict";var ke=h&&h.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(h,"__esModule",{value:!0});var ye=ke(O()),_e=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],U=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,r={},s="",n=[]){this._attributes={},this._name=t,this._attributes=r,this._props=s,this._children=new ye.default(n)}toString(){let t=Object.entries(this._attributes),r=t.length>0?" "+t.map(([n,o])=>{if(typeof o=="string"&&!/["<>\n]/.test(o))return`${n}="${o}"`;if(typeof o=="boolean")return o?n:""}).join(" "):"";if(_e.includes(this._name))return`<${this._name}${r} />`;let s=this._children.toString();return`<${this._name}${r}>${s}</${this._name}>`}};h.default=U});var F=i(T=>{"use strict";var X=T&&T.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(T,"__esModule",{value:!0});var ve=X(R()),J=X(q()),B=class{static render(t){return t.filter(Boolean).map(r=>r.toString()).join("")}static registry(t,r=new Set){return t.forEach(s=>{s instanceof J.default&&(["html","head","body"].includes(s.name)||r.add(s),s.name!=="head"&&s.children.length>0&&this.registry(s.children.toArray(),r))}),r}static createElement(t,r,s,n=[]){return new J.default(t,r,s,n)}static createText(t,r=!0){return new ve.default(t,r)}};T.default=B});var Z=i(b=>{"use strict";var $=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var Ne=$(A()),x=$(p()),G=$(F()),H=class{bindings(t={}){x.default.set("props",t||{});let r=Object.fromEntries(Object.entries(process.env||{}).filter(o=>o[0].startsWith("PUBLIC_")));x.default.set("env",Object.assign(Object.assign({},r),{BUILD_ID:this.id()}));let s=G.default.registry(this.template()),n={};return Array.from(s.values()).forEach((o,u)=>{n[String(u)]=o.attributes}),n}render(t={}){x.default.set("props",t||{}),x.default.set("bindings",this.bindings(t));let r=Object.fromEntries(Object.entries(process.env||{}).filter(m=>m[0].startsWith("PUBLIC_")));x.default.set("env",Object.assign(Object.assign({},r),{BUILD_ID:this.id()}));let s=this.template(),n=G.default.render(s).trim();if(!n.toLowerCase().startsWith("<html"))throw Ne.default.for("Document must start with an <html> tag.");let o=Object.fromEntries(x.default.entries()),u=JSON.stringify(o).replace(/\n/g,`
  `);return`<!DOCTYPE html>
${n.replace("__CLIENT_DATA__",u)}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(r=>typeof r=="object"&&typeof r.nodeType=="number")?t:[G.default.createText(String(t))]}};b.default=H});var ee=i(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.InkEmitter=void 0;var v=class{emit(t,r){return this}on(t,r){return this}once(t,r){return this}unbind(t,r){return this}};E.InkEmitter=v;var Le=new v;E.default=Le});var te=i(g=>{"use strict";var Ie=g&&g.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(g,"__esModule",{value:!0});var we=Ie(p());function Oe(a){let t=we.default.get("env")||{};return a?t[a]||null:t}g.default=Oe});var ae=i(k=>{"use strict";var De=k&&k.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(k,"__esModule",{value:!0});k.default=je;var Se=De(p());function je(){return Se.default.get("props")||{}}});var se=i(c=>{"use strict";var Ae=c&&c.__createBinding||(Object.create?function(a,t,r,s){s===void 0&&(s=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(a,s,n)}:function(a,t,r,s){s===void 0&&(s=r),a[s]=t[r]}),Ce=c&&c.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),Pe=c&&c.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(r){var s=[];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[s.length]=n);return s},a(t)};return function(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var s=a(t),n=0;n<s.length;n++)s[n]!=="default"&&Ae(r,t,s[n]);return Ce(r,t),r}}(),f=c&&c.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0});c.InkText=c.InkException=c.InkEmitter=c.InkElement=c.InkRegistry=c.InkDocument=c.InkCollection=c.props=c.emitter=c.env=c.data=void 0;var Me=f(O());c.InkCollection=Me.default;var Re=f(Z());c.InkDocument=Re.default;var Ue=f(F());c.InkRegistry=Ue.default;var qe=f(q());c.InkElement=qe.default;var re=Pe(ee());c.emitter=re.default;Object.defineProperty(c,"InkEmitter",{enumerable:!0,get:function(){return re.InkEmitter}});var Be=f(R());c.InkText=Be.default;var Fe=f(p());c.data=Fe.default;var Ge=f(te());c.env=Ge.default;var He=f(ae());c.props=He.default;var $e=f(A());c.InkException=$e.default});var W=i((ct,le)=>{le.exports={...se()}});var Ve={};de(Ve,{default:()=>L});var e=Y(W()),N=Y(W());var l=function(a,...t){let r=We(a);for(let s=0;s<t.length;s++)r=r.replace("%s",String(t[s]));return r},We=function(a){return a};var L=class extends e.InkDocument{id(){return"82c040caab27f511cc51"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
  .col-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }`}template(){let t="/docs/state-management.html",r=l("State Management - Ink reactive web component template engine."),s=l("Learn how to manage states in Ink."),n=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("html",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("head",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{charset:"utf-8"},'{ "charset": "utf-8" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},'{ "name": "viewport", "content": "width=device-width, initial-scale=1" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("title",{},"{ }",[...this._toNodeList(r)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"url",property:"og:url",content:`https://stackpress.github.io/ink${t}`},'{ "name": "url", "property": "og:url", "content": `https://stackpress.github.io/ink${url}` }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"type",property:"og:type",content:"website"},'{ "name": "type", "property": "og:type", "content": "website" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"image",property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"},'{ "name": "image", "property": "og:image", "content": "https://stackpress.github.io/ink/ink-logo.png" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"title",property:"og:title",content:r},'{ "name": "title", "property": "og:title", "content": title }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"description",property:"og:description",content:s},'{ "name": "description", "property": "og:description", "content": description }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:card",content:"summary"},'{ "name": "twitter:card", "content": "summary" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:site",content:"@stackpress"},'{ "name": "twitter:site", "content": "@stackpress" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:title",content:r},'{ "name": "twitter:title", "content": title }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:description",content:s},'{ "name": "twitter:description", "content": description }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"},'{ "name": "twitter:image", "content": "https://stackpress.github.io/ink/ink-logo.png" }'),e.InkRegistry.createText(`
  
  `,!1),e.InkRegistry.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"},'{ "rel": "favicon", "href": "/ink/favicon.ico" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"},'{ "rel": "shortcut icon", "type": "image/png", "href": "/ink/favicon.png" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"},'{ "rel": "stylesheet", "type": "text/css", "href": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"},'{ "rel": "stylesheet", "type": "text/css", "href": "/ink/styles/global.css" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,N.env)("BUILD_ID")}.css`},'{ "rel": "stylesheet", "type": "text/css", "href": `/ink/build/client/${env(\'BUILD_ID\')}.css` }'),e.InkRegistry.createElement("script",{id:"CLIENT_DATA",type:"text/json"},'{ "id": "CLIENT_DATA", "type": "text/json" }',[e.InkRegistry.createText("__CLIENT_DATA__",!0)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("script",{type:"text/javascript",src:`/ink/build/client/${(0,N.env)("BUILD_ID")}.js`},'{ "type": "text/javascript", "src": `/ink/build/client/${env(\'BUILD_ID\')}.js` }'),e.InkRegistry.createText(`
  `,!1),...(0,N.env)("PUBLIC_ENV")==="development"?[e.InkRegistry.createElement("script",{src:"/dev.js"},'{ "src": "/dev.js" }')]:[],e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},'{ "class": "light bg-t-0 tx-t-1 tx-arial" }',[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("panel-layout",{},"{ }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("header",{},"{ }",[e.InkRegistry.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},'{ "class": "flex flex-center-y px-20 py-15 m-0 bg-t-1" }',[e.InkRegistry.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:n},'{ "class": "fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1", "click": toggle }',[]),e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("div",{class:"flex-grow"},'{ "class": "flex-grow" }',[]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{href:"/ink"},'{ "href": "/ink" }',[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("img",{alt:"Ink Logo",class:"h-26 mr-10",src:"/ink/ink-icon.png"},'{ "alt": "Ink Logo", "class": "h-26 mr-10", "src": "/ink/ink-icon.png" }'),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("nav",{class:"flex flex-center-y"},'{ "class": "flex flex-center-y" }',[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"tx-primary",href:"/ink/docs/index.html"},'{ "class": "tx-primary", "href": "/ink/docs/index.html" }',[e.InkRegistry.createText("Docs",!1)]),e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"tx-t-1 tx-5xl ml-10",href:"https://github.com/stackpress/ink",target:"_blank"},'{ "class": "tx-t-1 tx-5xl ml-10", "href": "https://github.com/stackpress/ink", "target": "_blank" }',[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("i",{class:"fab fa-github"},'{ "class": "fab fa-github" }',[]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center",href:"https://www.npmjs.com/package/@stackpress/ink",target:"_blank"},'{ "class": "bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center", "href": "https://www.npmjs.com/package/@stackpress/ink", "target": "_blank" }',[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("i",{class:"fab fa-npm tx-white"},'{ "class": "fab fa-npm tx-white" }',[]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("aside",{left:!0},'{ "left": true }',[e.InkRegistry.createElement("header",{class:"flex flex-center-y bg-t-2 py-15 pr-5 pl-10"},'{ "class": "flex flex-center-y bg-t-2 py-15 pr-5 pl-10" }',[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("a",{href:"/ink"},'{ "href": "/ink" }',[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("img",{class:"h-26 mr-10",src:"/ink/ink-icon.png",alt:"Ink Logo"},'{ "class": "h-26 mr-10", "src": "/ink/ink-icon.png", "alt": "Ink Logo" }'),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("h3",{class:"flex-grow m-0 tx-upper"},'{ "class": "flex-grow m-0 tx-upper" }',[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"tx-primary",href:"/ink"},'{ "class": "tx-primary", "href": "/ink" }',[e.InkRegistry.createText("Ink",!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:n},'{ "class": "fas fa-fw fa-chevron-left cursor-pointer none md-inline-block", "click": toggle }',[]),e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("nav",{class:"bg-t-1 scroll-auto h-calc-full-60"},'{ "class": "bg-t-1 scroll-auto h-calc-full-60" }',[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper"},'{ "class": "bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper" }',[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(l("Introduction")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/index.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/index.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/index.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/getting-started.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/getting-started.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},'{ "class": "bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper" }',[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(l("Features")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/markup-syntax.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/markup-syntax.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/state-management.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/state-management.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/component-strategy.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/component-strategy.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/compiler-api.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/compiler-api.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/client-api.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/client-api.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},'{ "class": "bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper" }',[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(l("Usage")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/template-engine.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/template-engine.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/single-page.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/single-page.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/static-site.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/static-site.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/component-publisher.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/component-publisher.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold mb-100", "href": "/ink/docs/developer-tools.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},'{ "class": "block tx-info py-10 pl-10 mb-100", "href": "/ink/docs/developer-tools.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
`,!1)])]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("aside",{right:!0},'{ "right": true }',[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("menu",{class:"m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto"},'{ "class": "m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto" }',[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h6",{class:"tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper"},'{ "class": "tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("On this page")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("nav",{class:"tx-14 tx-lh-32"},'{ "class": "tx-14 tx-lh-32" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#props"},'{ "class": "block tx-t-0", "href": "#props" }',[...this._toNodeList(l("Props"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#signals"},'{ "class": "block tx-t-0", "href": "#signals" }',[...this._toNodeList(l("Signals"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#events"},'{ "class": "block tx-t-0", "href": "#events" }',[...this._toNodeList(l("Events"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#classnames"},'{ "class": "block tx-t-0", "href": "#classnames" }',[...this._toNodeList(l("Class Names"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#children"},'{ "class": "block tx-t-0", "href": "#children" }',[...this._toNodeList(l("Children"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#component"},'{ "class": "block tx-t-0", "href": "#component" }',[...this._toNodeList(l("Component"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#env"},'{ "class": "block tx-t-0", "href": "#env" }',[...this._toNodeList(l("Env Variables"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#this"},'{ "class": "block tx-t-0", "href": "#this" }',[...this._toNodeList(l("this"))]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("main",{},"{ }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("api-docs",{},"{ }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},'{ "class": "tx-primary tx-upper tx-30 py-20" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("State Management")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Ink provides several ways to manage properties and states 
            in your components.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"props"},'{ "name": "props" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},'{ "class": "tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Props")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",trim:!0,detab:12},'{ "lang": "js", "trim": true, "detab": 12 }',[...this._toNodeList(`
            import { props } from '@stackpress/ink';
            const { title, description } = props();
          `)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("props",!1)]),e.InkRegistry.createText(` function can be used to access the 
            properties of a component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"signals"},'{ "name": "signals" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},'{ "class": "tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Signals")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Ink provides a reactive state management system that allows 
            you to manage states in your components. The system is based 
            on signals, which are reactive variables that can be used to 
            store and update data. Signals can be used to store any type 
            of data, including numbers, strings, objects, arrays, and even 
            functions.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},'{ "class": "scroll-auto bg-black" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{trim:!0,detab:14},'{ "trim": true, "detab": 14 }',[...this._toNodeList(`
              <script>
                import { signal } from '@stackpress/ink';
                const count = signal<number>(1);
              </script>
              <em class=classlist>Count #{count.value}</em>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            To create a signal, you can use the 
            `,!1),e.InkRegistry.createElement("ide-code",{type:"javascript",inline:!0},'{ "type": "javascript", "inline": true }',[...this._toNodeList("signal()")]),e.InkRegistry.createText(` 
            function, which takes an initial value as an argument. Signals 
            can be read and updated using the `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("value",!1)]),e.InkRegistry.createText(` property. 
            Setting the value will trigger a re-render of the component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Signals can be used in your components to manage states and 
            trigger updates when the state changes. You can use signals to 
            store data that needs to be shared between components, or to 
            trigger side effects when the state changes. Signals can also 
            be used to store data that needs to be persisted across page 
            reloads, such as form data or user preferences.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"events"},'{ "name": "events" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},'{ "class": "tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Events")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},'{ "class": "scroll-auto bg-black" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{trim:!0,number:!0,detab:14},'{ "trim": true, "number": true, "detab": 14 }',[...this._toNodeList(`
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
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            For example, you can use the `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("click",!1)]),e.InkRegistry.createText(` 
            attribute assigned to a function to trigger a function when 
            the element is clicked. In combination with updating a signal, 
            can trigger a re-render of the component. The following event 
            attributes are supported.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"col-2"},'{ "class": "col-2" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(l("Mouse Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},'{ "class": "tx-lh-36" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("click",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("dblclick",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("mousedown",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("mouseup",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("mousemove",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("mouseover",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("mouseout",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("wheel",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(l("Keyboard Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},'{ "class": "tx-lh-36" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("keydown",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("keypress",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("keyup",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(l("Form Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},'{ "class": "tx-lh-36" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("blur",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("change",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("contextmenu",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("focus",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("input",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("submit",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("invalid",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("reset",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("search",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("select",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(l("Clipboard Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},'{ "class": "tx-lh-36" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("copy",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("cut",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("paste",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(l("Transition Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},'{ "class": "tx-lh-36" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("transitionend",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(l("Drag Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},'{ "class": "tx-lh-36" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("drag",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("dragstart",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("dragend",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("dragover",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("dragenter",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("dragleave",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("drop",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("scroll",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(l("Media Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},'{ "class": "tx-lh-36" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("durationchange",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("ended",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("error",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("loadeddata",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("loadedmetadata",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("loadstart",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("pause",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("play",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("playing",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("progress",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("ratechange",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("seeked",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("seeking",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("stalled",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("suspend",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("timeupdate",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("volumechange",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("waiting",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(l("Animation Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},'{ "class": "tx-lh-36" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("animationstart",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("animationend",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("animationiteration",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"classnames"},'{ "name": "classnames" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},'{ "class": "tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Class Names")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},'{ "class": "scroll-auto bg-black" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",trim:!0,detab:14},'{ "lang": "js", "trim": true, "detab": 14 }',[...this._toNodeList(`
              import { classnames } from '@stackpress/ink';
              const classlist = classnames(); //--> 'class1 class2 class3'
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("classnames",!1)]),e.InkRegistry.createText(` function can be used to generate 
            a list of class names based on the properties of an object.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"children"},'{ "name": "children" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},'{ "class": "tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Children")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},'{ "class": "scroll-auto bg-black" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",trim:!0,detab:14},'{ "lang": "js", "trim": true, "detab": 14 }',[...this._toNodeList(`
              import { children } from '@stackpress/ink';
              const childlist = children(); //--> Node[]
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("children",!1)]),e.InkRegistry.createText(` function can be used to render 
            child components in a parent component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"component"},'{ "name": "component" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},'{ "class": "tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Component")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},'{ "class": "scroll-auto bg-black" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",trim:!0,detab:14},'{ "lang": "js", "trim": true, "detab": 14 }',[...this._toNodeList(`
              import { component } from '@stackpress/ink';
              const button = component(); //--> HTMLElement
              console.log(button.querySelector('span'));
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            For other edge cases, the `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("component",!1)]),e.InkRegistry.createText(` function 
            can be used to get raw access to the component's 
            functionality.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"env"},'{ "name": "env" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},'{ "class": "tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Environment Variables")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{trim:!0,detab:12},'{ "trim": true, "detab": 12 }',[...this._toNodeList(`
            <script>
              import { env } from '@stackpress/ink';
              const { BUILD_ID, NODE_ENV } = env();
            </script>
            <if true={NODE_ENV === 'development'}>
              <p>Development mode</p>
            </if>
          `)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("env",!1)]),e.InkRegistry.createText(` function can be used to access environment 
            variables in a component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"this"},'{ "name": "this" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},'{ "class": "tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("this")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"What's this",class:"py-20"},`{ "title": "What's this", "class": "py-20" }`,[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,detab:14},'{ "numbers": true, "detab": 14 }',[...this._toNodeList(`
              <script>
                this.props;
                this.style;
                this.classList;
                this.parentNode;
                this.innerHTML;
                this.appendChild();
                this.querySelector('p');
              </script>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("this",!1)]),e.InkRegistry.createText(` refers to the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("InkComponent",!1)]),e.InkRegistry.createText(` that extends 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("HTMLElement",!1)]),e.InkRegistry.createText(`. This means all
            components in Ink are in fact are HTML elements and has
            access to the common functionality like 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("innerHTML",!1)]),e.InkRegistry.createText(` and
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[...this._toNodeList("querySelector()")]),e.InkRegistry.createText(` to name a 
            few. `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("InkComponent",!1)]),e.InkRegistry.createText(` has the
            additional following properties and methods that you can access
            using `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("this",!1)]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("api-ui",{start:"InkComponent"},'{ "start": "InkComponent" }'),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("element-alert",{curved:!0,info:!0,class:"py-20 tx-lh-24"},'{ "curved": true, "info": true, "class": "py-20 tx-lh-24" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("element-icon",{name:"info-circle"},'{ "name": "info-circle" }'),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("strong",{},"{ }",[e.InkRegistry.createText("Info:",!1)]),e.InkRegistry.createText(` You can discover more methods and properties
            of the `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("HTMLElement",!1)]),e.InkRegistry.createText(` class on the
            `,!1),e.InkRegistry.createElement("a",{target:"_blank",class:"tx-white tx-underline",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"},'{ "target": "_blank", "class": "tx-white tx-underline", "href": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" }',[e.InkRegistry.createText(`
              MDN Web Docs
            `,!1)]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("nav",{class:"flex"},'{ "class": "flex" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/markup-syntax.html"},'{ "class": "tx-primary py-40", "href": "/ink/docs/markup-syntax.html" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-left",theme:"tx-1"},'{ "name": "chevron-left", "theme": "tx-1" }'),e.InkRegistry.createText(`
              `,!1),...this._toNodeList(l("Markup Syntax")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/component-strategy.html"},'{ "class": "flex-grow tx-right tx-primary py-40", "href": "/ink/docs/component-strategy.html" }',[e.InkRegistry.createText(`
              `,!1),...this._toNodeList(l("Component Strategy")),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-right",theme:"tx-1"},'{ "name": "chevron-right", "theme": "tx-1" }'),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("footer",{class:"foot"},'{ "class": "foot" }',[]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return pe(Ve);})();
;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;