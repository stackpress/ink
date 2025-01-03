var InkAPI=(()=>{var oe=Object.create;var _=Object.defineProperty;var fe=Object.getOwnPropertyDescriptor;var ue=Object.getOwnPropertyNames;var xe=Object.getPrototypeOf,me=Object.prototype.hasOwnProperty;var o=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),de=(a,t)=>{for(var s in t)_(a,s,{get:t[s],enumerable:!0})},Y=(a,t,s,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ue(t))!me.call(a,r)&&r!==s&&_(a,r,{get:()=>t[r],enumerable:!(l=fe(t,r))||l.enumerable});return a};var z=(a,t,s)=>(s=a!=null?oe(xe(a)):{},Y(t||!a||!a.__esModule?_(s,"default",{value:a,enumerable:!0}):s,a)),be=a=>Y(_({},"__esModule",{value:!0}),a);var D=o(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});var N=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(s=>this._elements.add(s))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};O.default=N});var Q=o(y=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});y.getStatus=pe;var K={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};y.default=K;function pe(a){return Object.values(K).find(t=>t.code===a)}});var V=o(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});var he=Q(),L=class a extends Error{static for(t,...s){return s.forEach(function(l){t=t.replace("%s",String(l))}),new this(t)}static forErrors(t){let s=new this("Invalid Parameters");return s.withErrors(t),s}static require(t,s,...l){if(!t){for(let r of l)s=s.replace("%s",r);throw new this(s)}}static try(t){return{catch:s=>{try{return t()}catch(l){if(l instanceof a)return s(l,l.type);if(l instanceof Error){let r=a.upgrade(l);return s(r,r.type)}else if(typeof l=="string"){let r=a.for(l);return s(r,r.type)}return s(l,"unknown")}}}}static upgrade(t,s=500){if(t instanceof a)return t;let l=new this(t.message,s);return l.name=t.name,l.stack=t.stack,l}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,s=500){var l;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=s,this._status=((l=(0,he.getStatus)(s))===null||l===void 0?void 0:l.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,s=0){let l={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,s)};return Object.keys(this._errors).length>0&&(l.errors=this._errors),l}trace(t=0,s=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,s||this.stack.length).map(r=>r.trim()).map(r=>{if(!r.startsWith("at"))return!1;let[i,u,x]=r.split(" ");x||(x=`(${u})`,u="<none>");let[ce,ne,ie]=x.substring(1,x.length-1).split(":");return{method:u,file:ce,line:parseInt(ne)||0,char:parseInt(ie)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,s){return this._start=t,this._end=s,this}};A.default=L});var P=o(d=>{"use strict";var Te=d&&d.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(d,"__esModule",{value:!0});var ge=Te(V()),S=class extends ge.default{};d.default=S});var b=o(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});var ke=new Map;R.default=ke});var M=o(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});var j=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,s=!1){this._escape=s,this._value=t}toString(){return this.value}};C.default=j});var q=o(p=>{"use strict";var Ee=p&&p.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(p,"__esModule",{value:!0});var _e=Ee(D()),ye=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],U=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,s={},l="",r=[]){this._attributes={},this._name=t,this._attributes=s,this._props=l,this._children=new _e.default(r)}toString(){let t=Object.entries(this._attributes),s=t.length>0?" "+t.map(([r,i])=>{if(typeof i=="string"&&!/["<>\n]/.test(i))return`${r}="${i}"`;if(typeof i=="boolean")return i?r:""}).join(" "):"";if(ye.includes(this._name))return`<${this._name}${s} />`;let l=this._children.toString();return`<${this._name}${s}>${l}</${this._name}>`}};p.default=U});var G=o(h=>{"use strict";var X=h&&h.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(h,"__esModule",{value:!0});var ve=X(M()),J=X(q()),B=class{static render(t){return t.filter(Boolean).map(s=>s.toString()).join("")}static registry(t,s=new Set){return t.forEach(l=>{l instanceof J.default&&(["html","head","body"].includes(l.name)||s.add(l),l.name!=="head"&&l.children.length>0&&this.registry(l.children.toArray(),s))}),s}static createElement(t,s,l,r=[]){return new J.default(t,s,l,r)}static createText(t,s=!0){return new ve.default(t,s)}};h.default=B});var Z=o(T=>{"use strict";var H=T&&T.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(T,"__esModule",{value:!0});var we=H(P()),m=H(b()),$=H(G()),F=class{bindings(t={}){m.default.set("props",t||{});let s=Object.fromEntries(Object.entries(process.env||{}).filter(i=>i[0].startsWith("PUBLIC_")));m.default.set("env",Object.assign(Object.assign({},s),{BUILD_ID:this.id()}));let l=$.default.registry(this.template()),r={};return Array.from(l.values()).forEach((i,u)=>{r[String(u)]=i.attributes}),r}render(t={}){m.default.set("props",t||{}),m.default.set("bindings",this.bindings(t));let s=Object.fromEntries(Object.entries(process.env||{}).filter(x=>x[0].startsWith("PUBLIC_")));m.default.set("env",Object.assign(Object.assign({},s),{BUILD_ID:this.id()}));let l=this.template(),r=$.default.render(l).trim();if(!r.toLowerCase().startsWith("<html"))throw we.default.for("Document must start with an <html> tag.");let i=Object.fromEntries(m.default.entries()),u=JSON.stringify(i).replace(/\n/g,`
  `);return`<!DOCTYPE html>
${r.replace("__CLIENT_DATA__",u)}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(s=>typeof s=="object"&&typeof s.nodeType=="number")?t:[$.default.createText(String(t))]}};T.default=F});var ee=o(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});g.InkEmitter=void 0;var v=class{emit(t,s){return this}on(t,s){return this}once(t,s){return this}unbind(t,s){return this}};g.InkEmitter=v;var Ie=new v;g.default=Ie});var te=o(k=>{"use strict";var Ne=k&&k.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(k,"__esModule",{value:!0});var Oe=Ne(b());function De(a){let t=Oe.default.get("env")||{};return a?t[a]||null:t}k.default=De});var ae=o(E=>{"use strict";var Le=E&&E.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(E,"__esModule",{value:!0});E.default=Se;var Ae=Le(b());function Se(){return Ae.default.get("props")||{}}});var le=o(c=>{"use strict";var Pe=c&&c.__createBinding||(Object.create?function(a,t,s,l){l===void 0&&(l=s);var r=Object.getOwnPropertyDescriptor(t,s);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[s]}}),Object.defineProperty(a,l,r)}:function(a,t,s,l){l===void 0&&(l=s),a[l]=t[s]}),Re=c&&c.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),je=c&&c.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(s){var l=[];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(l[l.length]=r);return l},a(t)};return function(t){if(t&&t.__esModule)return t;var s={};if(t!=null)for(var l=a(t),r=0;r<l.length;r++)l[r]!=="default"&&Pe(s,t,l[r]);return Re(s,t),s}}(),f=c&&c.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0});c.InkText=c.InkException=c.InkEmitter=c.InkElement=c.InkRegistry=c.InkDocument=c.InkCollection=c.props=c.emitter=c.env=c.data=void 0;var Ce=f(D());c.InkCollection=Ce.default;var Me=f(Z());c.InkDocument=Me.default;var Ue=f(G());c.InkRegistry=Ue.default;var qe=f(q());c.InkElement=qe.default;var se=je(ee());c.emitter=se.default;Object.defineProperty(c,"InkEmitter",{enumerable:!0,get:function(){return se.InkEmitter}});var Be=f(M());c.InkText=Be.default;var Ge=f(b());c.data=Ge.default;var $e=f(te());c.env=$e.default;var Fe=f(ae());c.props=Fe.default;var He=f(P());c.InkException=He.default});var W=o((nt,re)=>{re.exports={...le()}});var Ye={};de(Ye,{default:()=>I});var e=z(W()),w=z(W());var n=function(a,...t){let s=We(a);for(let l=0;l<t.length;l++)s=s.replace("%s",String(t[l]));return s},We=function(a){return a};var I=class extends e.InkDocument{id(){return"7ad2066fa8e2de93d27d"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/ink/panel.html",s=n("Ink UI - Web Components Meets Atomic Styles."),l=n("Ink UI atomically generates CSS styles and provides out of box web components."),r=()=>{document.querySelector("panel-layout").toggle("left")},i=[{icon:"home",label:"Home",href:"/ink/index.html"},{icon:"book",label:"Docs"}];return[e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("html",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("head",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{charset:"utf-8"},'{ "charset": "utf-8" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},'{ "name": "viewport", "content": "width=device-width, initial-scale=1" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("title",{},"{ }",[...this._toNodeList(s)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"url",property:"og:url",content:`https://stackpress.github.io/ink${t}`},'{ "name": "url", "property": "og:url", "content": `https://stackpress.github.io/ink${url}` }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"type",property:"og:type",content:"website"},'{ "name": "type", "property": "og:type", "content": "website" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"image",property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"},'{ "name": "image", "property": "og:image", "content": "https://stackpress.github.io/ink/ink-logo.png" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"title",property:"og:title",content:s},'{ "name": "title", "property": "og:title", "content": title }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"description",property:"og:description",content:l},'{ "name": "description", "property": "og:description", "content": description }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:card",content:"summary"},'{ "name": "twitter:card", "content": "summary" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:site",content:"@stackpress"},'{ "name": "twitter:site", "content": "@stackpress" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:title",content:s},'{ "name": "twitter:title", "content": title }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:description",content:l},'{ "name": "twitter:description", "content": description }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"},'{ "name": "twitter:image", "content": "https://stackpress.github.io/ink/ink-logo.png" }'),e.InkRegistry.createText(`
  
  `,!1),e.InkRegistry.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"},'{ "rel": "favicon", "href": "/ink/favicon.ico" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"},'{ "rel": "shortcut icon", "type": "image/png", "href": "/ink/favicon.png" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"},'{ "rel": "stylesheet", "type": "text/css", "href": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"},'{ "rel": "stylesheet", "type": "text/css", "href": "/ink/styles/global.css" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,w.env)("BUILD_ID")}.css`},'{ "rel": "stylesheet", "type": "text/css", "href": `/ink/build/client/${env(\'BUILD_ID\')}.css` }'),e.InkRegistry.createElement("script",{id:"CLIENT_DATA",type:"text/json"},'{ "id": "CLIENT_DATA", "type": "text/json" }',[e.InkRegistry.createText("__CLIENT_DATA__",!0)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("script",{type:"text/javascript",src:`/ink/build/client/${(0,w.env)("BUILD_ID")}.js`},'{ "type": "text/javascript", "src": `/ink/build/client/${env(\'BUILD_ID\')}.js` }'),e.InkRegistry.createText(`
  `,!1),...(0,w.env)("PUBLIC_ENV")==="development"?[e.InkRegistry.createElement("script",{src:"/dev.js"},'{ "src": "/dev.js" }')]:[],e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},'{ "class": "light bg-t-0 tx-t-1 tx-arial" }',[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("panel-layout",{},"{ }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("header",{},"{ }",[e.InkRegistry.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},'{ "class": "flex flex-center-y px-20 py-15 m-0 bg-t-1" }',[e.InkRegistry.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:r},'{ "class": "fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1", "click": toggle }',[]),e.InkRegistry.createText(`
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
  `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:r},'{ "class": "fas fa-fw fa-chevron-left cursor-pointer none md-inline-block", "click": toggle }',[]),e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("nav",{class:"bg-t-1 scroll-auto h-calc-full-60"},'{ "class": "bg-t-1 scroll-auto h-calc-full-60" }',[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper"},'{ "class": "bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper" }',[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(n("Introduction")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/index.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/index.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/index.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/getting-started.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/getting-started.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},'{ "class": "bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper" }',[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(n("Features")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/markup-syntax.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/markup-syntax.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/state-management.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/state-management.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/component-strategy.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/component-strategy.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/compiler-api.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/compiler-api.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/client-api.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/client-api.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},'{ "class": "bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper" }',[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(n("Usage")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/template-engine.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/template-engine.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/single-page.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/single-page.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/static-site.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/static-site.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold", "href": "/ink/docs/component-publisher.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},'{ "class": "block tx-info py-10 pl-10", "href": "/ink/docs/component-publisher.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},'{ "class": "block tx-info py-10 pl-10 tx-bold mb-100", "href": "/ink/docs/developer-tools.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},'{ "class": "block tx-info py-10 pl-10 mb-100", "href": "/ink/docs/developer-tools.html" }',[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
`,!1)])]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("main",{},"{ }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("api-docs",{},"{ }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},'{ "class": "tx-primary tx-upper tx-30 py-20" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(n("Components")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("section",{class:"flex flex-wrap gap-10"},'{ "class": "flex flex-wrap gap-10" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-alert",{success:!0},'{ "success": true }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("element-icon",{name:"check-circle"},'{ "name": "check-circle" }'),e.InkRegistry.createText(`
                  Good News!
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/alert.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/components/alert.html" }',[e.InkRegistry.createText(`
                Alerts
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-badge",{warning:!0,curved:!0,class:"mb-10"},'{ "warning": true, "curved": true, "class": "mb-10" }',[e.InkRegistry.createText("999",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/badge.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/components/badge.html" }',[e.InkRegistry.createText(`
                Badges
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-crumbs",{crumbs:i,block:!0,bold:!0,white:!0,underline:!0,"icon-muted":!0,"link-primary":!0,spacing:2},'{ "crumbs": crumbs, "block": true, "bold": true, "white": true, "underline": true, "icon-muted": true, "link-primary": true, "spacing": 2 }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/crumbs.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/components/crumbs.html" }',[e.InkRegistry.createText(`
                Crumbs
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"info-circle",class:"tx-info"},'{ "name": "info-circle", "class": "tx-info" }'),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"exclamation-triangle",class:"tx-warning"},'{ "name": "exclamation-triangle", "class": "tx-warning" }'),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"times-circle",class:"tx-error"},'{ "name": "times-circle", "class": "tx-error" }'),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"check-circle",class:"tx-success"},'{ "name": "check-circle", "class": "tx-success" }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/icon.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/components/icon.html" }',[e.InkRegistry.createText(`
                Icons
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-loader",{success:!0,size:5,thickness:5,dotted:!0},'{ "success": true, "size": 5, "thickness": 5, "dotted": true }'),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-loader",{info:!0,slice:2},'{ "info": true, "slice": 2 }'),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-loader",{warning:!0,dashed:!0},'{ "warning": true, "dashed": true }'),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-loader",{error:!0,dashed:!0,thickness:10,size:10,speed:1500},'{ "error": true, "dashed": true, "thickness": 10, "size": 10, "speed": 1500 }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/loader.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/components/loader.html" }',[e.InkRegistry.createText(`
                Loaders
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-alert",{error:!0},'{ "error": true }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("element-icon",{name:"times-circle"},'{ "name": "times-circle" }'),e.InkRegistry.createText(`
                  Errors on Submit
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/notify.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/components/notify.html" }',[e.InkRegistry.createText(`
                Notify
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-pager",{total:500,range:100,start:90,show:3,next:!0,prev:!0,rewind:!0,forward:!0,white:!0,bold:!0,underline:!0,"bg-info":!0,"border-theme":"bd-2",square:40,select:console.log},'{ "total": 500, "range": 100, "start": 90, "show": 3, "next": true, "prev": true, "rewind": true, "forward": true, "white": true, "bold": true, "underline": true, "bg-info": true, "border-theme": "bd-2", "square": 40, "select": console.log }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/pager.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/components/pager.html" }',[e.InkRegistry.createText(`
                Pagers
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120"},'{ "class": "bg-t-3 h-120" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"relative w-full h-full"},'{ "class": "relative w-full h-full" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("header",{class:"absolute top-0 left-20p right-0 h-50p b-solid b-t-1"},'{ "class": "absolute top-0 left-20p right-0 h-50p b-solid b-t-1" }',[e.InkRegistry.createElement("div",{class:"p-5"},'{ "class": "p-5" }',[e.InkRegistry.createText("Head",!1)])]),e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("aside",{class:"absolute w-20p top-0 bottom-0 left-0 b-solid b-t-1"},'{ "class": "absolute w-20p top-0 bottom-0 left-0 b-solid b-t-1" }',[e.InkRegistry.createElement("div",{class:"p-5"},'{ "class": "p-5" }',[e.InkRegistry.createText("Left",!1)])]),e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("aside",{class:"absolute w-30p top-50p bottom-0 right-0 b-solid b-t-1"},'{ "class": "absolute w-30p top-50p bottom-0 right-0 b-solid b-t-1" }',[e.InkRegistry.createElement("div",{class:"p-5"},'{ "class": "p-5" }',[e.InkRegistry.createText("Right",!1)])]),e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("main",{class:"absolute top-50p bottom-0 left-20p right-30p b-solid b-t-1"},'{ "class": "absolute top-50p bottom-0 left-20p right-30p b-solid b-t-1" }',[e.InkRegistry.createElement("div",{class:"p-5"},'{ "class": "p-5" }',[e.InkRegistry.createText("Main",!1)])]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/panel.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/components/panel.html" }',[e.InkRegistry.createText(`
                Panels
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-progress",{width:50,info:!0,class:"bg-muted rounded tx-13 h-20 tx-lh-20 w-full-20"},'{ "width": 50, "info": true, "class": "bg-muted rounded tx-13 h-20 tx-lh-20 w-full-20" }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/progress.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/components/progress.html" }',[e.InkRegistry.createText(`
                Progress Bars
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-muted",group:"http",selector:"#http-index-ts"},'{ "on": true, "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-muted", "group": "http", "selector": "#http-index-ts" }',[e.InkRegistry.createText(`
                  Tab 1
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-muted",group:"http",selector:"#http-page-ink"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-muted", "group": "http", "selector": "#http-page-ink" }',[e.InkRegistry.createText(`
                  Tab 2
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-muted",group:"http",selector:"#http-package-json"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-muted", "group": "http", "selector": "#http-package-json" }',[e.InkRegistry.createText(`
                  Tab 3
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/tab.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/components/tab.html" }',[e.InkRegistry.createText(`
                Tabs
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("table-layout",{class:"h-90 w-250",top:!0,left:!0,head:"py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0",body:"py-16 px-12 b-solid b-black bt-1 bb-0 bx-0",odd:"bg-t-1",even:"bg-t-0"},'{ "class": "h-90 w-250", "top": true, "left": true, "head": "py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0", "body": "py-16 px-12 b-solid b-black bt-1 bb-0 bx-0", "odd": "bg-t-1", "even": "bg-t-0" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("table-row",{col:"b-t-3 bg-t-3"},'{ "col": "b-t-3 bg-t-3" }',[e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("table-col",{nowrap:!0},'{ "nowrap": true }',[e.InkRegistry.createText("John Doe",!1)]),e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("table-col",{},"{ }",[e.InkRegistry.createText("21",!1)]),e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("table-col",{"wrap-5":!0},'{ "wrap-5": true }',[e.InkRegistry.createText(`
                      Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit. Duis laoreet lectus eget enim rhoncus, vel 
                      volutpat eros tincidunt. In molestie nunc ut pulvinar 
                      sollicitudin.
                    `,!1)]),e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("table-col",{nowrap:!0},'{ "nowrap": true }',[e.InkRegistry.createText(`
                      `,!1),e.InkRegistry.createElement("element-icon",{name:"eye",class:"mr-5 tx-info"},'{ "name": "eye", "class": "mr-5 tx-info" }'),e.InkRegistry.createText(`
                      `,!1),e.InkRegistry.createElement("element-icon",{name:"edit",class:"mr-5 tx-warning"},'{ "name": "edit", "class": "mr-5 tx-warning" }'),e.InkRegistry.createText(`
                      `,!1),e.InkRegistry.createElement("element-icon",{name:"trash",class:"tx-error"},'{ "name": "trash", "class": "tx-error" }'),e.InkRegistry.createText(`
                    `,!1)]),e.InkRegistry.createText(`
                  `,!1)]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/table.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/components/table.html" }',[e.InkRegistry.createText(`
                Tables
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tip",{"background-info":!0,curved:!0,top:"-15",left:"50",padding:"5"},'{ "background-info": true, "curved": true, "top": "-15", "left": "50", "padding": "5" }',[e.InkRegistry.createText("This is the first and last name",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/tooltip.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/components/tooltip.html" }',[e.InkRegistry.createText(`
                Tooltips
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return be(Ye);})();
;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;