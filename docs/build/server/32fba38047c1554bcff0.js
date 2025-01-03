var InkAPI=(()=>{var oe=Object.create;var y=Object.defineProperty;var fe=Object.getOwnPropertyDescriptor;var ue=Object.getOwnPropertyNames;var pe=Object.getPrototypeOf,de=Object.prototype.hasOwnProperty;var o=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),me=(a,t)=>{for(var s in t)y(a,s,{get:t[s],enumerable:!0})},Y=(a,t,s,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of ue(t))!de.call(a,l)&&l!==s&&y(a,l,{get:()=>t[l],enumerable:!(r=fe(t,l))||r.enumerable});return a};var K=(a,t,s)=>(s=a!=null?oe(pe(a)):{},Y(t||!a||!a.__esModule?y(s,"default",{value:a,enumerable:!0}):s,a)),xe=a=>Y(y({},"__esModule",{value:!0}),a);var D=o(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});var O=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(s=>this._elements.add(s))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};L.default=O});var V=o(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.getStatus=he;var Q={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};E.default=Q;function he(a){return Object.values(Q).find(t=>t.code===a)}});var J=o(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});var be=V(),w=class a extends Error{static for(t,...s){return s.forEach(function(r){t=t.replace("%s",String(r))}),new this(t)}static forErrors(t){let s=new this("Invalid Parameters");return s.withErrors(t),s}static require(t,s,...r){if(!t){for(let l of r)s=s.replace("%s",l);throw new this(s)}}static try(t){return{catch:s=>{try{return t()}catch(r){if(r instanceof a)return s(r,r.type);if(r instanceof Error){let l=a.upgrade(r);return s(l,l.type)}else if(typeof r=="string"){let l=a.for(r);return s(l,l.type)}return s(r,"unknown")}}}}static upgrade(t,s=500){if(t instanceof a)return t;let r=new this(t.message,s);return r.name=t.name,r.stack=t.stack,r}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,s=500){var r;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=s,this._status=((r=(0,be.getStatus)(s))===null||r===void 0?void 0:r.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,s=0){let r={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,s)};return Object.keys(this._errors).length>0&&(r.errors=this._errors),r}trace(t=0,s=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,s||this.stack.length).map(l=>l.trim()).map(l=>{if(!l.startsWith("at"))return!1;let[i,u,p]=l.split(" ");p||(p=`(${u})`,u="<none>");let[ce,ne,ie]=p.substring(1,p.length-1).split(":");return{method:u,file:ce,line:parseInt(ne)||0,char:parseInt(ie)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,s){return this._start=t,this._end=s,this}};A.default=w});var P=o(m=>{"use strict";var Te=m&&m.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(m,"__esModule",{value:!0});var ke=Te(J()),S=class extends ke.default{};m.default=S});var x=o(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});var _e=new Map;R.default=_e});var M=o(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});var j=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,s=!1){this._escape=s,this._value=t}toString(){return this.value}};C.default=j});var q=o(h=>{"use strict";var ge=h&&h.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(h,"__esModule",{value:!0});var ye=ge(D()),Ee=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],U=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,s={},r="",l=[]){this._attributes={},this._name=t,this._attributes=s,this._props=r,this._children=new ye.default(l)}toString(){let t=Object.entries(this._attributes),s=t.length>0?" "+t.map(([l,i])=>{if(typeof i=="string"&&!/["<>\n]/.test(i))return`${l}="${i}"`;if(typeof i=="boolean")return i?l:""}).join(" "):"";if(Ee.includes(this._name))return`<${this._name}${s} />`;let r=this._children.toString();return`<${this._name}${s}>${r}</${this._name}>`}};h.default=U});var G=o(b=>{"use strict";var X=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var Ne=X(M()),z=X(q()),B=class{static render(t){return t.filter(Boolean).map(s=>s.toString()).join("")}static registry(t,s=new Set){return t.forEach(r=>{r instanceof z.default&&(["html","head","body"].includes(r.name)||s.add(r),r.name!=="head"&&r.children.length>0&&this.registry(r.children.toArray(),s))}),s}static createElement(t,s,r,l=[]){return new z.default(t,s,r,l)}static createText(t,s=!0){return new Ne.default(t,s)}};b.default=B});var Z=o(T=>{"use strict";var H=T&&T.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(T,"__esModule",{value:!0});var Ie=H(P()),d=H(x()),$=H(G()),F=class{bindings(t={}){d.default.set("props",t||{});let s=Object.fromEntries(Object.entries(process.env||{}).filter(i=>i[0].startsWith("PUBLIC_")));d.default.set("env",Object.assign(Object.assign({},s),{BUILD_ID:this.id()}));let r=$.default.registry(this.template()),l={};return Array.from(r.values()).forEach((i,u)=>{l[String(u)]=i.attributes}),l}render(t={}){d.default.set("props",t||{}),d.default.set("bindings",this.bindings(t));let s=Object.fromEntries(Object.entries(process.env||{}).filter(p=>p[0].startsWith("PUBLIC_")));d.default.set("env",Object.assign(Object.assign({},s),{BUILD_ID:this.id()}));let r=this.template(),l=$.default.render(r).trim();if(!l.toLowerCase().startsWith("<html"))throw Ie.default.for("Document must start with an <html> tag.");let i=Object.fromEntries(d.default.entries()),u=JSON.stringify(i).replace(/\n/g,`
  `);return`<!DOCTYPE html>
${l.replace("__CLIENT_DATA__",u)}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(s=>typeof s=="object"&&typeof s.nodeType=="number")?t:[$.default.createText(String(t))]}};T.default=F});var ee=o(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.InkEmitter=void 0;var N=class{emit(t,s){return this}on(t,s){return this}once(t,s){return this}unbind(t,s){return this}};k.InkEmitter=N;var ve=new N;k.default=ve});var te=o(_=>{"use strict";var Oe=_&&_.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(_,"__esModule",{value:!0});var Le=Oe(x());function De(a){let t=Le.default.get("env")||{};return a?t[a]||null:t}_.default=De});var ae=o(g=>{"use strict";var we=g&&g.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(g,"__esModule",{value:!0});g.default=Se;var Ae=we(x());function Se(){return Ae.default.get("props")||{}}});var re=o(n=>{"use strict";var Pe=n&&n.__createBinding||(Object.create?function(a,t,s,r){r===void 0&&(r=s);var l=Object.getOwnPropertyDescriptor(t,s);(!l||("get"in l?!t.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return t[s]}}),Object.defineProperty(a,r,l)}:function(a,t,s,r){r===void 0&&(r=s),a[r]=t[s]}),Re=n&&n.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),je=n&&n.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(s){var r=[];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(r[r.length]=l);return r},a(t)};return function(t){if(t&&t.__esModule)return t;var s={};if(t!=null)for(var r=a(t),l=0;l<r.length;l++)r[l]!=="default"&&Pe(s,t,r[l]);return Re(s,t),s}}(),f=n&&n.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(n,"__esModule",{value:!0});n.InkText=n.InkException=n.InkEmitter=n.InkElement=n.InkRegistry=n.InkDocument=n.InkCollection=n.props=n.emitter=n.env=n.data=void 0;var Ce=f(D());n.InkCollection=Ce.default;var Me=f(Z());n.InkDocument=Me.default;var Ue=f(G());n.InkRegistry=Ue.default;var qe=f(q());n.InkElement=qe.default;var se=je(ee());n.emitter=se.default;Object.defineProperty(n,"InkEmitter",{enumerable:!0,get:function(){return se.InkEmitter}});var Be=f(M());n.InkText=Be.default;var Ge=f(x());n.data=Ge.default;var $e=f(te());n.env=$e.default;var Fe=f(ae());n.props=Fe.default;var He=f(P());n.InkException=He.default});var W=o((nt,le)=>{le.exports={...re()}});var Ye={};me(Ye,{default:()=>v});var e=K(W()),I=K(W());var c=function(a,...t){let s=We(a);for(let r=0;r<t.length;r++)s=s.replace("%s",String(t[r]));return s},We=function(a){return a};var v=class extends e.InkDocument{id(){return"32fba38047c1554bcff0"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/ink/panel.html",s=c("Ink UI - Web Components Meets Atomic Styles."),r=c("Ink UI atomically generates CSS styles and provides out of box web components."),l=()=>{document.querySelector("panel-layout").toggle("left")},i=[{icon:"home",label:"Home",href:"/ink/index.html"},{icon:"book",label:"Docs",href:"/ink/docs/index.html"},{icon:"icons",label:"UI",href:"/ink/ui/index.html"},{icon:"icons",label:"Elements",href:"/ink/ui/elements/index.html"},{label:"Alert"}];return[e.InkRegistry.createText(`
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
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,I.env)("BUILD_ID")}.css`},'{ "rel": "stylesheet", "type": "text/css", "href": `/ink/build/client/${env(\'BUILD_ID\')}.css` }'),e.InkRegistry.createElement("script",{id:"CLIENT_DATA",type:"text/json"},'{ "id": "CLIENT_DATA", "type": "text/json" }',[e.InkRegistry.createText("__CLIENT_DATA__",!0)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("script",{type:"text/javascript",src:`/ink/build/client/${(0,I.env)("BUILD_ID")}.js`},'{ "type": "text/javascript", "src": `/ink/build/client/${env(\'BUILD_ID\')}.js` }'),e.InkRegistry.createText(`
  `,!1),...(0,I.env)("PUBLIC_ENV")==="development"?[e.InkRegistry.createElement("script",{src:"/dev.js"},'{ "src": "/dev.js" }')]:[],e.InkRegistry.createText(`
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
    `,!1),...this._toNodeList(c("Introduction")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/index.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/index.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/index.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/getting-started.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/getting-started.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},'{ "class": "bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper" }',[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(c("Features")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/markup-syntax.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/markup-syntax.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/state-management.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/state-management.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/component-strategy.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/component-strategy.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/compiler-api.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/compiler-api.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/client-api.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/client-api.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},'{ "class": "bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper" }',[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(c("Usage")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/template-engine.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/template-engine.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/single-page.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/single-page.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/static-site.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/static-site.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/component-publisher.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/component-publisher.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold mb-100", "href": "/ink/docs/developer-tools.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},'{ "class": "block tx-info py-10 pl-10 mb-100", "href": "/ink/docs/developer-tools.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
`,!1)])]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("main",{},"{ }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("nav",{class:"p-10 bg-t-3"},'{ "class": "p-10 bg-t-3" }',[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("element-crumbs",{crumbs:i,block:!0,bold:!0,white:!0,"sep-muted":!0,"link-primary":!0,spacing:2},'{ "crumbs": crumbs, "block": true, "bold": true, "white": true, "sep-muted": true, "link-primary": true, "spacing": 2 }'),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("api-docs",{},"{ }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},'{ "class": "tx-primary tx-upper tx-30 py-20" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(c("Alert")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Editor",class:"py-20"},'{ "title": "Editor", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",trim:!0},'{ "lang": "js", "trim": true }',[e.InkRegistry.createText(`
              import Alert from '@stackpress/ink-ui/element/alert';
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-30 py-20"},'{ "class": "tx-primary tx-upper tx-30 py-20" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(c("Props")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("layout-table",{top:!0,head:"py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0",body:"py-16 px-12 b-solid b-black bt-1 bb-0 bx-0",odd:"bg-t-0",even:"bg-t-1"},'{ "top": true, "head": "py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0", "body": "py-16 px-12 b-solid b-black bt-1 bb-0 bx-0", "odd": "bg-t-0", "even": "bg-t-1" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("table-head",{},"{ }",[...this._toNodeList(c("Name"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("table-head",{},"{ }",[...this._toNodeList(c("Type"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("table-head",{},"{ }",[...this._toNodeList(c("Required"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("table-head",{},"{ }",[...this._toNodeList(c("Notes"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("table-row",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("table-col",{},"{ }",[e.InkRegistry.createText("solid",!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("table-col",{},"{ }",[e.InkRegistry.createText("Boolean",!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("table-col",{},"{ }",[e.InkRegistry.createText("No",!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("table-col",{},"{ }",[...this._toNodeList(c("Solid layout"))]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("table-row",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("table-col",{},"{ }",[e.InkRegistry.createText("outline",!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("table-col",{},"{ }",[e.InkRegistry.createText("Boolean",!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("table-col",{},"{ }",[e.InkRegistry.createText("No",!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("table-col",{},"{ }",[...this._toNodeList(c("Outline layout"))]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("table-row",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("table-col",{},"{ }",[e.InkRegistry.createText("transparent",!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("table-col",{},"{ }",[e.InkRegistry.createText("Boolean",!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("table-col",{},"{ }",[e.InkRegistry.createText("No",!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("table-col",{},"{ }",[...this._toNodeList(c("Transparent layout"))]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("element-alert",{success:!0},'{ "success": true }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("element-icon",{name:"check-circle"},'{ "name": "check-circle" }'),e.InkRegistry.createText(`
            Good News!
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return xe(Ye);})();
;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;