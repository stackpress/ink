var InkAPI=(()=>{var oe=Object.create;var v=Object.defineProperty;var pe=Object.getOwnPropertyDescriptor;var de=Object.getOwnPropertyNames;var me=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty;var o=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),xe=(a,t)=>{for(var s in t)v(a,s,{get:t[s],enumerable:!0})},J=(a,t,s,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of de(t))!ue.call(a,l)&&l!==s&&v(a,l,{get:()=>t[l],enumerable:!(r=pe(t,l))||r.enumerable});return a};var V=(a,t,s)=>(s=a!=null?oe(me(a)):{},J(t||!a||!a.__esModule?v(s,"default",{value:a,enumerable:!0}):s,a)),fe=a=>J(v({},"__esModule",{value:!0}),a);var I=o(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});var N=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(s=>this._elements.add(s))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};L.default=N});var z=o(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.getStatus=he;var Y={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};E.default=Y;function he(a){return Object.values(Y).find(t=>t.code===a)}});var K=o(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});var be=z(),D=class a extends Error{static for(t,...s){return s.forEach(function(r){t=t.replace("%s",String(r))}),new this(t)}static forErrors(t){let s=new this("Invalid Parameters");return s.withErrors(t),s}static require(t,s,...r){if(!t){for(let l of r)s=s.replace("%s",l);throw new this(s)}}static try(t){return{catch:s=>{try{return t()}catch(r){if(r instanceof a)return s(r,r.type);if(r instanceof Error){let l=a.upgrade(r);return s(l,l.type)}else if(typeof r=="string"){let l=a.for(r);return s(l,l.type)}return s(r,"unknown")}}}}static upgrade(t,s=500){if(t instanceof a)return t;let r=new this(t.message,s);return r.name=t.name,r.stack=t.stack,r}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,s=500){var r;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=s,this._status=((r=(0,be.getStatus)(s))===null||r===void 0?void 0:r.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,s=0){let r={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,s)};return Object.keys(this._errors).length>0&&(r.errors=this._errors),r}trace(t=0,s=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,s||this.stack.length).map(l=>l.trim()).map(l=>{if(!l.startsWith("at"))return!1;let[c,d,m]=l.split(" ");m||(m=`(${d})`,d="<none>");let[ie,ne,ce]=m.substring(1,m.length-1).split(":");return{method:d,file:ie,line:parseInt(ne)||0,char:parseInt(ce)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,s){return this._start=t,this._end=s,this}};A.default=D});var O=o(x=>{"use strict";var Te=x&&x.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(x,"__esModule",{value:!0});var ge=Te(K()),S=class extends ge.default{};x.default=S});var f=o(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});var ke=new Map;P.default=ke});var q=o(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});var C=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,s=!1){this._escape=s,this._value=t}toString(){return this.value}};R.default=C});var U=o(h=>{"use strict";var ye=h&&h.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(h,"__esModule",{value:!0});var ve=ye(I()),Ee=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],M=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,s={},r="",l=[]){this._attributes={},this._name=t,this._attributes=s,this._props=r,this._children=new ve.default(l)}toString(){let t=Object.entries(this._attributes),s=t.length>0?" "+t.map(([l,c])=>{if(typeof c=="string"&&!/["<>\n]/.test(c))return`${l}="${c}"`;if(typeof c=="boolean")return c?l:""}).join(" "):"";if(Ee.includes(this._name))return`<${this._name}${s} />`;let r=this._children.toString();return`<${this._name}${s}>${r}</${this._name}>`}};h.default=M});var $=o(b=>{"use strict";var X=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var we=X(q()),Q=X(U()),B=class{static render(t){return t.filter(Boolean).map(s=>s.toString()).join("")}static registry(t,s=new Set){return t.forEach(r=>{r instanceof Q.default&&(["html","head","body"].includes(r.name)||s.add(r),r.name!=="head"&&r.children.length>0&&this.registry(r.children.toArray(),s))}),s}static createElement(t,s,r,l=[]){return new Q.default(t,s,r,l)}static createText(t,s=!0){return new we.default(t,s)}};b.default=B});var Z=o(T=>{"use strict";var F=T&&T.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(T,"__esModule",{value:!0});var _e=F(O()),u=F(f()),H=F($()),W=class{bindings(t={}){u.default.set("props",t||{});let s=Object.fromEntries(Object.entries(process.env||{}).filter(c=>c[0].startsWith("PUBLIC_")));u.default.set("env",Object.assign(Object.assign({},s),{BUILD_ID:this.id()}));let r=H.default.registry(this.template()),l={};return Array.from(r.values()).forEach((c,d)=>{l[String(d)]=c.attributes}),l}render(t={}){u.default.set("props",t||{}),u.default.set("bindings",this.bindings(t));let s=Object.fromEntries(Object.entries(process.env||{}).filter(m=>m[0].startsWith("PUBLIC_")));u.default.set("env",Object.assign(Object.assign({},s),{BUILD_ID:this.id()}));let r=this.template(),l=H.default.render(r).trim();if(!l.toLowerCase().startsWith("<html"))throw _e.default.for("Document must start with an <html> tag.");let c=Object.fromEntries(u.default.entries()),d=JSON.stringify(c).replace(/\n/g,`
  `);return`<!DOCTYPE html>
${l.replace("__CLIENT_DATA__",d)}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(s=>typeof s=="object"&&typeof s.nodeType=="number")?t:[H.default.createText(String(t))]}};T.default=W});var ee=o(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});g.InkEmitter=void 0;var w=class{emit(t,s){return this}on(t,s){return this}once(t,s){return this}unbind(t,s){return this}};g.InkEmitter=w;var je=new w;g.default=je});var te=o(k=>{"use strict";var Ne=k&&k.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(k,"__esModule",{value:!0});var Le=Ne(f());function Ie(a){let t=Le.default.get("env")||{};return a?t[a]||null:t}k.default=Ie});var ae=o(y=>{"use strict";var De=y&&y.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(y,"__esModule",{value:!0});y.default=Se;var Ae=De(f());function Se(){return Ae.default.get("props")||{}}});var re=o(n=>{"use strict";var Oe=n&&n.__createBinding||(Object.create?function(a,t,s,r){r===void 0&&(r=s);var l=Object.getOwnPropertyDescriptor(t,s);(!l||("get"in l?!t.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return t[s]}}),Object.defineProperty(a,r,l)}:function(a,t,s,r){r===void 0&&(r=s),a[r]=t[s]}),Pe=n&&n.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),Ce=n&&n.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(s){var r=[];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(r[r.length]=l);return r},a(t)};return function(t){if(t&&t.__esModule)return t;var s={};if(t!=null)for(var r=a(t),l=0;l<r.length;l++)r[l]!=="default"&&Oe(s,t,r[l]);return Pe(s,t),s}}(),p=n&&n.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(n,"__esModule",{value:!0});n.InkText=n.InkException=n.InkEmitter=n.InkElement=n.InkRegistry=n.InkDocument=n.InkCollection=n.props=n.emitter=n.env=n.data=void 0;var Re=p(I());n.InkCollection=Re.default;var qe=p(Z());n.InkDocument=qe.default;var Me=p($());n.InkRegistry=Me.default;var Ue=p(U());n.InkElement=Ue.default;var se=Ce(ee());n.emitter=se.default;Object.defineProperty(n,"InkEmitter",{enumerable:!0,get:function(){return se.InkEmitter}});var Be=p(q());n.InkText=Be.default;var $e=p(f());n.data=$e.default;var He=p(te());n.env=He.default;var We=p(ae());n.props=We.default;var Fe=p(O());n.InkException=Fe.default});var G=o((nt,le)=>{le.exports={...re()}});var Je={};xe(Je,{default:()=>j});var e=V(G()),_=V(G());var i=function(a,...t){let s=Ge(a);for(let r=0;r<t.length;r++)s=s.replace("%s",String(t[r]));return s},Ge=function(a){return a};var j=class extends e.InkDocument{id(){return"e06f4d82f045144e41f0"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/docs/getting-started.html",s=i("Getting Started - Ink reactive web component template engine."),r=i("How to install, setup and use Ink in a project."),l=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")},c="https://github.com/stackpress/ink/tree/main/examples";return[e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("html",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("head",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{charset:"utf-8"},'{ "charset": "utf-8" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},'{ "name": "viewport", "content": "width=device-width, initial-scale=1" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("title",{},"{ }",[...this._toNodeList(s)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"url",property:"og:url",content:`https://stackpress.github.io/ink${t}`},'{ "name": "url", "property": "og:url", "content": `https://stackpress.github.io/ink${url}` }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"type",property:"og:type",content:"website"},'{ "name": "type", "property": "og:type", "content": "website" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"image",property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"},'{ "name": "image", "property": "og:image", "content": "https://stackpress.github.io/ink/ink-logo.png" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"title",property:"og:title",content:s},'{ "name": "title", "property": "og:title", "content": title }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"description",property:"og:description",content:r},'{ "name": "description", "property": "og:description", "content": description }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:card",content:"summary"},'{ "name": "twitter:card", "content": "summary" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:site",content:"@stackpress"},'{ "name": "twitter:site", "content": "@stackpress" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:title",content:s},'{ "name": "twitter:title", "content": title }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:description",content:r},'{ "name": "twitter:description", "content": description }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"},'{ "name": "twitter:image", "content": "https://stackpress.github.io/ink/ink-logo.png" }'),e.InkRegistry.createText(`
  
  `,!1),e.InkRegistry.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"},'{ "rel": "favicon", "href": "/ink/favicon.ico" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"},'{ "rel": "shortcut icon", "type": "image/png", "href": "/ink/favicon.png" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"},'{ "rel": "stylesheet", "type": "text/css", "href": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"},'{ "rel": "stylesheet", "type": "text/css", "href": "/ink/styles/global.css" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,_.env)("BUILD_ID")}.css`},'{ "rel": "stylesheet", "type": "text/css", "href": `/ink/build/client/${env(\'BUILD_ID\')}.css` }'),e.InkRegistry.createElement("script",{id:"CLIENT_DATA",type:"text/json"},'{ "id": "CLIENT_DATA", "type": "text/json" }',[e.InkRegistry.createText("__CLIENT_DATA__",!0)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("script",{type:"text/javascript",src:`/ink/build/client/${(0,_.env)("BUILD_ID")}.js`},'{ "type": "text/javascript", "src": `/ink/build/client/${env(\'BUILD_ID\')}.js` }'),e.InkRegistry.createText(`
  `,!1),...(0,_.env)("PUBLIC_ENV")==="development"?[e.InkRegistry.createElement("script",{src:"/dev.js"},'{ "src": "/dev.js" }')]:[],e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},'{ "class": "light bg-t-0 tx-t-1 tx-arial" }',[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("panel-layout",{},"{ }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("header",{},"{ }",[e.InkRegistry.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},'{ "class": "flex flex-center-y px-20 py-15 m-0 bg-t-1" }',[e.InkRegistry.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:l},'{ "class": "fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1", "click": toggle }',[]),e.InkRegistry.createText(`
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
  `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:l},'{ "class": "fas fa-fw fa-chevron-left cursor-pointer none md-inline-block", "click": toggle }',[]),e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("nav",{class:"bg-t-1 scroll-auto h-calc-full-60"},'{ "class": "bg-t-1 scroll-auto h-calc-full-60" }',[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper"},'{ "class": "bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper" }',[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(i("Introduction")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/index.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/index.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/index.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/getting-started.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/getting-started.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},'{ "class": "bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper" }',[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(i("Features")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/markup-syntax.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/markup-syntax.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/state-management.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/state-management.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/component-strategy.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/component-strategy.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/compiler-api.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/compiler-api.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/client-api.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/client-api.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},'{ "class": "bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper" }',[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(i("Usage")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/template-engine.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/template-engine.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/single-page.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/single-page.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/static-site.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/static-site.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/component-publisher.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/component-publisher.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold mb-100", "href": "/ink/docs/developer-tools.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},'{ "class": "block tx-info py-10 pl-10 mb-100", "href": "/ink/docs/developer-tools.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
`,!1)])]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("aside",{right:!0},'{ "right": true }',[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("menu",{class:"m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto"},'{ "class": "m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto" }',[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h6",{class:"tx-muted tx-14 mb-0 mt-0 pb-10 tx-uppercase"},'{ "class": "tx-muted tx-14 mb-0 mt-0 pb-10 tx-uppercase" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(i("On this page")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("nav",{class:"tx-14 tx-lh-32"},'{ "class": "tx-14 tx-lh-32" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#http"},'{ "class": "block tx-t-0", "href": "#http" }',[e.InkRegistry.createText(`
              `,!1),...this._toNodeList(i("1. Add HTTP")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#develop"},'{ "class": "block tx-t-0", "href": "#develop" }',[e.InkRegistry.createText(`
              `,!1),...this._toNodeList(i("2. Add Dev Tools")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#cache"},'{ "class": "block tx-t-0", "href": "#cache" }',[e.InkRegistry.createText(`
              `,!1),...this._toNodeList(i("3. Add File Cache")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#tailwind"},'{ "class": "block tx-t-0", "href": "#tailwind" }',[e.InkRegistry.createText(`
              `,!1),...this._toNodeList(i("4. Add TailwindCSS")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#express"},'{ "class": "block tx-t-0", "href": "#express" }',[e.InkRegistry.createText(`
              `,!1),...this._toNodeList(i("5. Add ExpressJS")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("main",{},"{ }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("api-docs",{},"{ }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-uppercase tx-30 py-20"},'{ "class": "tx-primary tx-uppercase tx-30 py-20" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(i("Getting Started")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            To try out Ink, run the following commands in terminal: 
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Terminal",class:"py-20"},'{ "title": "Terminal", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"bash"},'{ "lang": "bash" }',[e.InkRegistry.createText(`
              npm init -y && npm install --save @stackpress/ink && npm install --save-dev ts-node typescript @types/node
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("element-alert",{solid:!0,curved:!0,info:!0,class:"my-20 tx-lh-24"},'{ "solid": true, "curved": true, "info": true, "class": "my-20 tx-lh-24" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("element-icon",{name:"info-circle"},'{ "name": "info-circle" }'),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("strong",{},"{ }",[e.InkRegistry.createText("Recommended:",!1)]),e.InkRegistry.createText(`
            Download the Ink editor plugin at the `,!1),e.InkRegistry.createElement("a",{target:"_blank",class:"tx-white tx-underline",href:"https://marketplace.visualstudio.com/items?itemName=stackpress.ink-language"},'{ "target": "_blank", "class": "tx-white tx-underline", "href": "https://marketplace.visualstudio.com/items?itemName=stackpress.ink-language" }',[e.InkRegistry.createText("Visual Studio Marketplace",!1)]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Create a server file called
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("src/index.ts",!1)]),e.InkRegistry.createText(` 
            with the following code that uses the compiler.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"src/index.ts",class:"py-20"},'{ "title": "src/index.ts", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{class:"scroll-auto",lang:"js",numbers:!0,trim:!0,detab:14},'{ "class": "scroll-auto", "lang": "js", "numbers": true, "trim": true, "detab": 14 }',[...this._toNodeList(`
              import ink from '@stackpress/ink/compiler';
              // make a ink compiler
              const compiler = ink();
              // render HTML
              compiler.render('./src/page.ink').then(console.log);
              // render CSS
              compiler.styles('./src/page.ink').then(console.log);
              // render JS
              compiler.client('./src/page.ink').then(console.log);
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Last, create a document file called
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("src/page.ink",!1)]),e.InkRegistry.createText(` 
            with the following template code.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"src/page.ink",class:"py-20"},'{ "title": "src/page.ink", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},'{ "class": "scroll-auto", "numbers": true, "trim": true, "detab": 14 }',[...this._toNodeList(`
              <style>
                .center { text-align: center; }
              </style>
              <script>
                import { env } from '@stackpress/ink';
                const { BUILD_ID, APP_DATA } = env();
                const title = 'Hello World';
              </script>
              <html>
                <head>
                  <title>{title}</title>
                  <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                  <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                </head>
                <body>
                  <h1 class="center">{title}</h1>
                </body>
              </html>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            To try out the basic implementation of Ink and see the 
            results, just run the following command in terminal.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Terminal",class:"py-20"},'{ "title": "Terminal", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"bash"},'{ "lang": "bash" }',[e.InkRegistry.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"http"},'{ "name": "http" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},'{ "class": "tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(i("1. Add HTTP")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            In most cases Ink will be used to render a front end from 
            a server framework. In this example, we will use the native
            NodeJS HTTP module to create a server that renders a page
            using Ink. Start by replacing the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[...this._toNodeList("'src/index.ts'")]),e.InkRegistry.createText(`
            file with the following code. 
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("element-alert",{solid:!0,curved:!0,info:!0,class:"my-20 tx-lh-24"},'{ "solid": true, "curved": true, "info": true, "class": "my-20 tx-lh-24" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("element-icon",{name:"info-circle"},'{ "name": "info-circle" }'),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("strong",{},"{ }",[e.InkRegistry.createText("Optional:",!1)]),e.InkRegistry.createText(` You can also check your other 
            files to make sure you are following along.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:410,title:"With NodeJS HTTP"},'{ "height": 410, "title": "With NodeJS HTTP" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},'{ "class": "flex scroll-x-auto pt-5 pl-5" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"http",selector:"#http-index-ts"},'{ "on": true, "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "http", "selector": "#http-index-ts" }',[e.InkRegistry.createText(`
                  src/index.ts
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"http",selector:"#http-page-ink"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "http", "selector": "#http-page-ink" }',[e.InkRegistry.createText(`
                  src/page.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"http",selector:"#http-package-json"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "http", "selector": "#http-package-json" }',[e.InkRegistry.createText(`
                  package.json
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"p-5"},'{ "class": "p-5" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},'{ "name": "chevron-down" }'),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"http",selector:"#http-index-ts"},'{ "on": true, "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-t-1", "group": "http", "selector": "#http-index-ts" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                index.ts
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"http",selector:"#http-page-ink"},'{ "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-t-1", "group": "http", "selector": "#http-page-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                page.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"http",selector:"#http-package-json"},'{ "class": "pt-10 block", "active": "tx-white", "inactive": "tx-t-1", "group": "http", "selector": "#http-package-json" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                package.json
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"http-index-ts",lang:"js",numbers:!0,trim:!0,detab:16},'{ "id": "http-index-ts", "lang": "js", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
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
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"http-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},'{ "id": "http-page-ink", "style": "display:none", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                <style>
                  .center { text-align: center; }
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                  </head>
                  <body>
                    <h1 class="center">{title}</h1>
                  </body>
                </html>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"http-package-json",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},'{ "id": "http-package-json", "style": "display:none", "lang": "js", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.12"
                  },
                  "devDependencies": {
                    "@types/node": "22.1.0",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            To run your first Ink web app, just run the following 
            command in terminal.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Terminal",class:"py-20"},'{ "title": "Terminal", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"bash"},'{ "lang": "bash" }',[e.InkRegistry.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            You can now check 
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},'{ "lang": "js", "inline": true }',[e.InkRegistry.createText("http://localhost:3000/",!1)]),e.InkRegistry.createText(` 
            in your browser to see your Ink application. The 
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},'{ "lang": "js", "inline": true }',[e.InkRegistry.createText("ink()",!1)]),e.InkRegistry.createText(` 
            function takes in the following options, all of 
            which are optional.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("api-ui",{start:"Render Methods"},'{ "start": "Render Methods" }'),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"develop"},'{ "name": "develop" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},'{ "class": "tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(i("2. Add Developer Tools")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Ink provides a separate package for a better development 
            experience when working with server frameworks that utilize 
            the native http module. Start by installing adding 
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},'{ "lang": "js", "inline": true }',[...this._toNodeList("@stackpress/ink-dev")]),e.InkRegistry.createText(`
            to your project.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Terminal",class:"py-20"},'{ "title": "Terminal", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"bash"},'{ "lang": "bash" }',[e.InkRegistry.createText(`
              npm install --save-dev @stackpress/ink-dev
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Next, import the `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},'{ "lang": "js", "inline": true }',[...this._toNodeList("dev()")]),e.InkRegistry.createText(` 
            function from the package and use it in your existing 
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},'{ "lang": "js", "inline": true }',[...this._toNodeList("src/index.ts")]),e.InkRegistry.createText(` 
            file to create a development server as shown in the example below.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"src/index.ts",class:"py-20"},'{ "title": "src/index.ts", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},'{ "lang": "js", "numbers": true, "trim": true, "detab": 14 }',[...this._toNodeList(`
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
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0,lang:"js"},'{ "inline": true, "lang": "js" }',[...this._toNodeList("dev()")]),e.InkRegistry.createText(` export 
            from  `,!1),e.InkRegistry.createElement("ide-code",{inline:!0,lang:"js"},'{ "inline": true, "lang": "js" }',[...this._toNodeList("@stackpress/ink-dev")]),e.InkRegistry.createText(`
            exports tools that supports development mode and accepts the 
            following options.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("api-ui",{start:"DeveloperOptions"},'{ "start": "DeveloperOptions" }'),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            This returns several tools you can use in your server app.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("api-ui",{start:"Developer Tools"},'{ "start": "Developer Tools" }'),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Lastly, update the document file 
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},'{ "lang": "js", "inline": true }',[...this._toNodeList("src/page.ink")]),e.InkRegistry.createText(` 
            to include the development script 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[...this._toNodeList('<script src="/dev.js"></script>')]),e.InkRegistry.createText(` 
            as shown below.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"src/page.ink",class:"py-20"},'{ "title": "src/page.ink", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},'{ "numbers": true, "trim": true, "detab": 14 }',[...this._toNodeList(`
              <style>
                /* ... */
              </style>
              <script>
                //... 
              </script>
              <html>
                <head>
                  <!-- ... -->
                  <!-- 4. include dev script -->
                  <script src="/dev.js"></script>
                </head>
                <body>
                  <!-- ... -->
                </body>
              </html>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            The project should now look like the example below.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:410,title:"With Developer Tools",class:"py-20"},'{ "height": 410, "title": "With Developer Tools", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},'{ "class": "flex scroll-x-auto pt-5 pl-5" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"develop",selector:"#develop-index-ts"},'{ "on": true, "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "develop", "selector": "#develop-index-ts" }',[e.InkRegistry.createText(`
                  src/index.ts
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"develop",selector:"#develop-page-ink"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "develop", "selector": "#develop-page-ink" }',[e.InkRegistry.createText(`
                  src/page.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"develop",selector:"#develop-package-json"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "develop", "selector": "#develop-package-json" }',[e.InkRegistry.createText(`
                  package.json
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"p-5"},'{ "class": "p-5" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},'{ "name": "chevron-down" }'),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"develop",selector:"#develop-index-ts"},'{ "on": true, "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-t-1", "group": "develop", "selector": "#develop-index-ts" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                index.ts
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"develop",selector:"#develop-page-ink"},'{ "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-t-1", "group": "develop", "selector": "#develop-page-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                page.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"develop",selector:"#develop-package-json"},'{ "class": "pt-10 block", "active": "tx-white", "inactive": "tx-t-1", "group": "develop", "selector": "#develop-package-json" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                package.json
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"develop-index-ts",lang:"js",numbers:!0,trim:!0,detab:16},'{ "id": "develop-index-ts", "lang": "js", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
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
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"develop-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},'{ "id": "develop-page-ink", "style": "display:none", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                <style>
                  .center { text-align: center; }
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                    <script src="/dev.js"></script>
                  </head>
                  <body>
                    <h1 class="center">{title}</h1>
                  </body>
                </html>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"develop-package-json",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},'{ "id": "develop-package-json", "style": "display:none", "lang": "js", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.12"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "0.3.12",
                    "@types/node": "22.1.0",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Re-run the following command in terminal. It shouldn't look 
            like anything has changed, but the development server is now
            running in the background. Try to change
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},'{ "lang": "js", "inline": true }',[...this._toNodeList("src/page.ink")]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Terminal",class:"py-20"},'{ "title": "Terminal", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"bash"},'{ "lang": "bash" }',[e.InkRegistry.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Whenever `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},'{ "lang": "js", "inline": true }',[...this._toNodeList("src/page.ink")]),e.InkRegistry.createText(` 
            is saved, the development server will automatically refresh 
            the page. Components will also be updated in real-time without
            the page reloading.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"cache"},'{ "name": "cache" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},'{ "class": "tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(i("3. Add Cache Files")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Ink has an out-of-the-box cache and build strategy that
            can be used to store and serve pre-compiled files. To use the
            cache, you just need to import it from the 
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},'{ "lang": "js", "inline": true }',[...this._toNodeList("@stackpress/ink/compiler")]),e.InkRegistry.createText(` 
            module and use it like the following example.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"src/index.ts",class:"py-20"},'{ "title": "src/index.ts", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},'{ "lang": "js", "numbers": true, "trim": true, "detab": 14 }',[...this._toNodeList(`
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
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},'{ "lang": "js", "inline": true }',[...this._toNodeList("src/index.ts")]),e.InkRegistry.createText(` 
            file should now look like the example below.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"src/index.ts",class:"py-20"},'{ "title": "src/index.ts", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},'{ "lang": "js", "numbers": true, "trim": true, "detab": 14 }',[...this._toNodeList(`
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
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Re-run the following command in terminal to start the cache 
            server.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Terminal",class:"py-20"},'{ "title": "Terminal", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"bash"},'{ "lang": "bash" }',[e.InkRegistry.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Load 
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},'{ "lang": "js", "inline": true }',[e.InkRegistry.createText("http://localhost:3000/",!1)]),e.InkRegistry.createText(` 
            in your browser. After loading you should see files that were 
            generated in a new build folder found in your project root. 
            The `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},'{ "lang": "js", "inline": true }',[e.InkRegistry.createText("cache()",!1)]),e.InkRegistry.createText(` plugin is 
            just a wrapper that listens for build related events and
            stores the generated files in the specified build path.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:400,title:"cache.ts (Internal)",class:"py-20"},'{ "height": 400, "title": "cache.ts (Internal)", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},'{ "lang": "js", "numbers": true, "trim": true, "detab": 14 }',[...this._toNodeList(`
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
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            This means you can also use your own cache strategy by 
            listening to the events emitted by the compiler. The
            following table lists all the events that the compiler
            emits during the build cycle of a document.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("api-ui",{start:"EventEmitter"},'{ "start": "EventEmitter" }'),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"tailwind"},'{ "name": "tailwind" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},'{ "class": "tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(i("4. Add TailwindCSS")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Tailwind is an atomic CSS collection of styles that favours 
            small, single-purpose classes with their selector names based 
            on its visual function. It works by using a build process to
            read your source files to generate its styles based only on 
            what is being used. This makes using Tailwind optimal because
            it doesn't bloat your CSS with unused styles.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            At the same time, web components with the
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[...this._toNodeList("<style>")]),e.InkRegistry.createText(` tag imply using the 
            component's shadow DOM which will encapsulate the styles within
            the component and not be affected by global styles. Since 
            Tailwind in turn implies that you do not need to (necessarily) 
            define styles, you do not need to use the shadow DOM at all if
            you are using Tailwind.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("element-alert",{solid:!0,curved:!0,warning:!0,class:"my-20 tx-lh-24"},'{ "solid": true, "curved": true, "warning": true, "class": "my-20 tx-lh-24" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("element-icon",{name:"exclamation-triangle"},'{ "name": "exclamation-triangle" }'),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("strong",{},"{ }",[e.InkRegistry.createText("Warning:",!1)]),e.InkRegistry.createText(`
            The caveat for using TailwindCSS, means that web components 
            using it will not be shippable to other projects that do not
            use Tailwind. It all comes down to preference in the end.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Ink has a separate package called
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0,lang:"js"},'{ "inline": true, "lang": "js" }',[...this._toNodeList("@stackpress/ink-tailwind")]),e.InkRegistry.createText(`
            to use TailwindCSS with Ink. This is just another wrapper 
            class that listens to the compiler's build events. You can 
            install this plugin by running the following command in terminal.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Terminal",class:"py-20"},'{ "title": "Terminal", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"bash"},'{ "lang": "bash" }',[e.InkRegistry.createText(`
              npm install --save-dev @stackpress/ink-tailwind autoprefixer postcss tailwindcss
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Next, in `,!1),e.InkRegistry.createElement("ide-code",{inline:!0,lang:"js"},'{ "inline": true, "lang": "js" }',[...this._toNodeList("src/index.ts")]),e.InkRegistry.createText(`
            import the `,!1),e.InkRegistry.createElement("ide-code",{inline:!0,lang:"js"},'{ "inline": true, "lang": "js" }',[...this._toNodeList("tailwind()")]),e.InkRegistry.createText(`
            plugin from the package and use it in the compiler as shown
            in the example below.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"src/index.ts",class:"py-20"},'{ "title": "src/index.ts", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},'{ "lang": "js", "numbers": true, "trim": true, "detab": 14 }',[...this._toNodeList(`
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
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Lastly, in `,!1),e.InkRegistry.createElement("ide-code",{inline:!0,lang:"js"},'{ "inline": true, "lang": "js" }',[...this._toNodeList("src/page.ink")]),e.InkRegistry.createText(`
            add the Tailwind directives inside the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[...this._toNodeList("<style>")]),e.InkRegistry.createText(` tag like the code 
            below. Also add a tailwind class, (like 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0,lang:"js"},'{ "inline": true, "lang": "js" }',[...this._toNodeList("<style>")]),e.InkRegistry.createText(`) to the 
            markup to verify that the plugin is working and the styles 
            are being applied.
          `,!1)]),e.InkRegistry.createText(`
          
          `,!1),e.InkRegistry.createElement("ide-app",{title:"src/page.ink",class:"py-20"},'{ "title": "src/page.ink", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},'{ "numbers": true, "trim": true, "detab": 14 }',[...this._toNodeList(`
              <style>
                /* 2. Add tailwind directives */
                @tailwind base;
                @tailwind components;
                @tailwind utilities;

                /* ...Other styles... */
              </style>
              <script>
                //... 
              </script>
              <html>
                <head>
                  <!-- ... -->
                </head>
                <body>
                  <h1 class="text-center">{title}</h1>
                </body>
              </html>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Check to see if the project files look like the example below.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:410,title:"With TailwindCSS",class:"py-20"},'{ "height": 410, "title": "With TailwindCSS", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},'{ "class": "flex scroll-x-auto pt-5 pl-5" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"tailwind",selector:"#tailwind-index-ts"},'{ "on": true, "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "tailwind", "selector": "#tailwind-index-ts" }',[e.InkRegistry.createText(`
                  src/index.ts
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"tailwind",selector:"#tailwind-page-ink"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "tailwind", "selector": "#tailwind-page-ink" }',[e.InkRegistry.createText(`
                  src/page.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"tailwind",selector:"#tailwind-package-json"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "tailwind", "selector": "#tailwind-package-json" }',[e.InkRegistry.createText(`
                  package.json
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"p-5"},'{ "class": "p-5" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},'{ "name": "chevron-down" }'),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"tailwind",selector:"#tailwind-index-ts"},'{ "on": true, "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-t-1", "group": "tailwind", "selector": "#tailwind-index-ts" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                index.ts
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"tailwind",selector:"#tailwind-page-ink"},'{ "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-t-1", "group": "tailwind", "selector": "#tailwind-page-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                page.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"tailwind",selector:"#tailwind-package-json"},'{ "class": "pt-10 block", "active": "tx-white", "inactive": "tx-t-1", "group": "tailwind", "selector": "#tailwind-package-json" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                package.json
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"tailwind-index-ts",lang:"js",numbers:!0,trim:!0,detab:16},'{ "id": "tailwind-index-ts", "lang": "js", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
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
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"tailwind-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},'{ "id": "tailwind-page-ink", "style": "display:none", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
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
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                    <script src="/dev.js"></script>
                  </head>
                  <body>
                    <h1 class="text-center">{title}</h1>
                  </body>
                </html>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"tailwind-package-json",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},'{ "id": "tailwind-package-json", "style": "display:none", "lang": "js", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.12"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "0.3.12",
                    "@stackpress/ink-tailwind": "0.3.12",
                    "@types/node": "22.1.0",
                    "autoprefixer": "10.4.20",
                    "postcss": "8.4.44",
                    "tailwindcss": "3.4.10",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Re-run the following command in terminal to initialize the 
            tailwind plugin.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Terminal",class:"py-20"},'{ "title": "Terminal", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"bash"},'{ "lang": "bash" }',[e.InkRegistry.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Load 
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},'{ "lang": "js", "inline": true }',[e.InkRegistry.createText("http://localhost:3000/",!1)]),e.InkRegistry.createText(` 
            in your browser. After loading you should see files that were 
            generated in a new build folder found in your project root. 
            Try to add a Tailwind class to the markup in
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},'{ "lang": "js", "inline": true }',[...this._toNodeList("src/page.ink")]),e.InkRegistry.createText(` and 
            save. The development server will automatically refresh 
            the styles and component styles will also be update in 
            real-time without the page reloading.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"express"},'{ "name": "express" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},'{ "class": "tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(i("5. Add ExpressJS")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Ink has a separate package called
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0,lang:"js"},'{ "inline": true, "lang": "js" }',[...this._toNodeList("@stackpress/ink-express")]),e.InkRegistry.createText(`
            to use Express with Ink. You can install this plugin by 
            running the following command in terminal.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Terminal",class:"py-20"},'{ "title": "Terminal", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"bash"},'{ "lang": "bash" }',[e.InkRegistry.createText(`
              npm install --save @stackpress/ink-express express && npm install --save-dev @types/express
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            The package 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0,lang:"js"},'{ "inline": true, "lang": "js" }',[...this._toNodeList("@stackpress/ink-express")]),e.InkRegistry.createText(`
            exports two plugins for express.
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0,lang:"js"},'{ "inline": true, "lang": "js" }',[...this._toNodeList("view()")]),e.InkRegistry.createText(` is the view 
            engine for production (live) environments. It can be used with
            an express app like 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0,lang:"js"},'{ "inline": true, "lang": "js" }',[...this._toNodeList("app.use(view(compiler))")]),e.InkRegistry.createText(`.
            The other export, `,!1),e.InkRegistry.createElement("ide-code",{inline:!0,lang:"js"},'{ "inline": true, "lang": "js" }',[...this._toNodeList("dev()")]),e.InkRegistry.createText(` 
            is the same export from the Developer Tools documentation above, 
            but returns several tools used to integrate with express.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("api-ui",{start:"Express Developer Tools"},'{ "start": "Express Developer Tools" }'),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Example logic to use the all the Ink Express tools together
            with Ink developer tools could look like the following code
            that cases for 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0,lang:"js"},'{ "inline": true, "lang": "js" }',[...this._toNodeList("development")]),e.InkRegistry.createText(` and 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0,lang:"js"},'{ "inline": true, "lang": "js" }',[...this._toNodeList("production")]),e.InkRegistry.createText(` modes.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:12,lang:"js",class:"py-20"},'{ "numbers": true, "trim": true, "detab": 12, "lang": "js", "class": "py-20" }',[...this._toNodeList(`
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
          `)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            And you can now case for development mode in 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0,lang:"js"},'{ "inline": true, "lang": "js" }',[...this._toNodeList("src/page.ink")]),e.InkRegistry.createText(`
            like in the example below
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:12,class:"py-20"},'{ "numbers": true, "trim": true, "detab": 12, "class": "py-20" }',[...this._toNodeList(`
            <style>
              /* ... */
            </style>
            <script>
              import { env } from '@stackpress/ink';
              const { NODE_ENV } = env();
            </script>
            <html>
              <head>
                <!-- ... -->
                <if true={NODE_ENV !== 'production'}>
                  <script src="/dev.js"></script>
                </if>
              </head>
              <body>
                <!-- ... -->
              </body>
            </html>
          `)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Check to see if the project files look like the example below.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:410,title:"With ExpressJS",class:"py-20"},'{ "height": 410, "title": "With ExpressJS", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},'{ "class": "flex scroll-x-auto pt-5 pl-5" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"express",selector:"#express-index-ts"},'{ "on": true, "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "express", "selector": "#express-index-ts" }',[e.InkRegistry.createText(`
                  src/index.ts
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"express",selector:"#express-page-ink"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "express", "selector": "#express-page-ink" }',[e.InkRegistry.createText(`
                  src/page.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"express",selector:"#express-package-json"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "express", "selector": "#express-package-json" }',[e.InkRegistry.createText(`
                  package.json
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"p-5"},'{ "class": "p-5" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},'{ "name": "chevron-down" }'),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"express",selector:"#express-index-ts"},'{ "on": true, "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-t-1", "group": "express", "selector": "#express-index-ts" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                index.ts
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"express",selector:"#express-page-ink"},'{ "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-t-1", "group": "express", "selector": "#express-page-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                page.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"express",selector:"#express-package-json"},'{ "class": "pt-10 block", "active": "tx-white", "inactive": "tx-t-1", "group": "express", "selector": "#express-package-json" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                package.json
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"express-index-ts",lang:"js",numbers:!0,trim:!0,detab:16},'{ "id": "express-index-ts", "lang": "js", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
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
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"express-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},'{ "id": "express-page-ink", "style": "display:none", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                <style>
                  @tailwind base;
                  @tailwind components;
                  @tailwind utilities;
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA, NODE_ENV } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                    <if true={NODE_ENV !== 'production'}>
                      <script src="/dev.js"></script>
                    </if>
                  </head>
                  <body>
                    <h1 class="text-center">{title}</h1>
                  </body>
                </html>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"express-package-json",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},'{ "id": "express-package-json", "style": "display:none", "lang": "js", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
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
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Re-run the following command in terminal to initialize the 
            re-run your application using Express.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Terminal",class:"py-20"},'{ "title": "Terminal", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"bash"},'{ "lang": "bash" }',[e.InkRegistry.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Load 
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},'{ "lang": "js", "inline": true }',[e.InkRegistry.createText("http://localhost:3000/",!1)]),e.InkRegistry.createText(` 
            in your browser. After loading you should see everything is 
            exactly as it was, but you now benefit from using ExpressJS.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-uppercase tx-22 pt-40 pb-20"},'{ "class": "tx-t-1 tx-uppercase tx-22 pt-40 pb-20" }',[e.InkRegistry.createText(`
            -- `,!1),...this._toNodeList(i("Read On")),e.InkRegistry.createText(` --
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            To see other getting started examples with various frameworks,
            you can check out the following project examples in the 
            official repository.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ul",{},"{ }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{class:"py-5"},'{ "class": "py-5" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${c}/with-fastify`},'{ "class": "tx-t-1 tx-underline", "target": "_blank", "href": `${examples}/with-fastify` }',[e.InkRegistry.createText(`
                Fastify
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{class:"py-5"},'{ "class": "py-5" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${c}/with-hapi`},'{ "class": "tx-t-1 tx-underline", "target": "_blank", "href": `${examples}/with-hapi` }',[e.InkRegistry.createText(`
                Hapi
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{class:"py-5"},'{ "class": "py-5" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${c}/with-koa`},'{ "class": "tx-t-1 tx-underline", "target": "_blank", "href": `${examples}/with-koa` }',[e.InkRegistry.createText(`
                Koa
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{class:"py-5"},'{ "class": "py-5" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${c}/with-nest`},'{ "class": "tx-t-1 tx-underline", "target": "_blank", "href": `${examples}/with-nest` }',[e.InkRegistry.createText(`
                NestJS
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{class:"py-5"},'{ "class": "py-5" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${c}/with-restify`},'{ "class": "tx-t-1 tx-underline", "target": "_blank", "href": `${examples}/with-restify` }',[e.InkRegistry.createText(`
                Restify
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{class:"py-5"},'{ "class": "py-5" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${c}/with-webpack`},'{ "class": "tx-t-1 tx-underline", "target": "_blank", "href": `${examples}/with-webpack` }',[e.InkRegistry.createText(`
                Webpack
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(` 
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-10"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-10" }',[e.InkRegistry.createText(`
            Depending on how you plan to use Ink, you can also look at 
            the following project setups.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ul",{},"{ }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{class:"py-5"},'{ "class": "py-5" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"tx-t-1 tx-underline",href:"/ink/docs/template-engine.html"},'{ "class": "tx-t-1 tx-underline", "href": "/ink/docs/template-engine.html" }',[e.InkRegistry.createText(`
                Template Engine
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{class:"py-5"},'{ "class": "py-5" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"tx-t-1 tx-underline",href:"/ink/docs/single-page.html"},'{ "class": "tx-t-1 tx-underline", "href": "/ink/docs/single-page.html" }',[e.InkRegistry.createText(`
                Single Page App
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{class:"py-5"},'{ "class": "py-5" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"tx-t-1 tx-underline",href:"/ink/docs/static-site.html"},'{ "class": "tx-t-1 tx-underline", "href": "/ink/docs/static-site.html" }',[e.InkRegistry.createText(`
                Static Site Generator
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{class:"py-5"},'{ "class": "py-5" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"tx-t-1 tx-underline",href:"/ink/docs/component-publisher.html"},'{ "class": "tx-t-1 tx-underline", "href": "/ink/docs/component-publisher.html" }',[e.InkRegistry.createText(`
                Web Component Publisher
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          
          `,!1),e.InkRegistry.createElement("nav",{class:"flex"},'{ "class": "flex" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/index.html"},'{ "class": "tx-primary py-40", "href": "/ink/docs/index.html" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-left",theme:"tx-1"},'{ "name": "chevron-left", "theme": "tx-1" }'),e.InkRegistry.createText(`
              `,!1),...this._toNodeList(i("Documentation")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/markup-syntax.html"},'{ "class": "flex-grow tx-right tx-primary py-40", "href": "/ink/docs/markup-syntax.html" }',[e.InkRegistry.createText(`
              `,!1),...this._toNodeList(i("Markup Syntax")),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-right",theme:"tx-1"},'{ "name": "chevron-right", "theme": "tx-1" }'),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("footer",{class:"foot"},'{ "class": "foot" }',[]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return fe(Je);})();
;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;