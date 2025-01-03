var InkAPI=(()=>{var oe=Object.create;var E=Object.defineProperty;var pe=Object.getOwnPropertyDescriptor;var me=Object.getOwnPropertyNames;var fe=Object.getPrototypeOf,xe=Object.prototype.hasOwnProperty;var i=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),de=(a,t)=>{for(var r in t)E(a,r,{get:t[r],enumerable:!0})},Y=(a,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let c of me(t))!xe.call(a,c)&&c!==r&&E(a,c,{get:()=>t[c],enumerable:!(s=pe(t,c))||s.enumerable});return a};var J=(a,t,r)=>(r=a!=null?oe(fe(a)):{},Y(t||!a||!a.__esModule?E(r,"default",{value:a,enumerable:!0}):r,a)),ue=a=>Y(E({},"__esModule",{value:!0}),a);var D=i(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});var L=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(r=>this._elements.add(r))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};I.default=L});var K=i(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});v.getStatus=he;var V={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};v.default=V;function he(a){return Object.values(V).find(t=>t.code===a)}});var Q=i(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});var be=K(),A=class a extends Error{static for(t,...r){return r.forEach(function(s){t=t.replace("%s",String(s))}),new this(t)}static forErrors(t){let r=new this("Invalid Parameters");return r.withErrors(t),r}static require(t,r,...s){if(!t){for(let c of s)r=r.replace("%s",c);throw new this(r)}}static try(t){return{catch:r=>{try{return t()}catch(s){if(s instanceof a)return r(s,s.type);if(s instanceof Error){let c=a.upgrade(s);return r(c,c.type)}else if(typeof s=="string"){let c=a.for(s);return r(c,c.type)}return r(s,"unknown")}}}}static upgrade(t,r=500){if(t instanceof a)return t;let s=new this(t.message,r);return s.name=t.name,s.stack=t.stack,s}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,r=500){var s;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=r,this._status=((s=(0,be.getStatus)(r))===null||s===void 0?void 0:s.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,r=0){let s={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,r)};return Object.keys(this._errors).length>0&&(s.errors=this._errors),s}trace(t=0,r=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,r||this.stack.length).map(c=>c.trim()).map(c=>{if(!c.startsWith("at"))return!1;let[o,m,f]=c.split(" ");f||(f=`(${m})`,m="<none>");let[ce,ne,ie]=f.substring(1,f.length-1).split(":");return{method:m,file:ce,line:parseInt(ne)||0,char:parseInt(ie)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,r){return this._start=t,this._end=r,this}};O.default=A});var P=i(d=>{"use strict";var Te=d&&d.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(d,"__esModule",{value:!0});var ge=Te(Q()),S=class extends ge.default{};d.default=S});var u=i(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});var ke=new Map;C.default=ke});var U=i(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});var j=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,r=!1){this._escape=r,this._value=t}toString(){return this.value}};R.default=j});var B=i(h=>{"use strict";var ye=h&&h.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(h,"__esModule",{value:!0});var Ee=ye(D()),ve=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],M=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,r={},s="",c=[]){this._attributes={},this._name=t,this._attributes=r,this._props=s,this._children=new Ee.default(c)}toString(){let t=Object.entries(this._attributes),r=t.length>0?" "+t.map(([c,o])=>{if(typeof o=="string"&&!/["<>\n]/.test(o))return`${c}="${o}"`;if(typeof o=="boolean")return o?c:""}).join(" "):"";if(ve.includes(this._name))return`<${this._name}${r} />`;let s=this._children.toString();return`<${this._name}${r}>${s}</${this._name}>`}};h.default=M});var $=i(b=>{"use strict";var X=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var _e=X(U()),z=X(B()),q=class{static render(t){return t.filter(Boolean).map(r=>r.toString()).join("")}static registry(t,r=new Set){return t.forEach(s=>{s instanceof z.default&&(["html","head","body"].includes(s.name)||r.add(s),s.name!=="head"&&s.children.length>0&&this.registry(s.children.toArray(),r))}),r}static createElement(t,r,s,c=[]){return new z.default(t,r,s,c)}static createText(t,r=!0){return new _e.default(t,r)}};b.default=q});var Z=i(T=>{"use strict";var H=T&&T.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(T,"__esModule",{value:!0});var we=H(P()),x=H(u()),F=H($()),G=class{bindings(t={}){x.default.set("props",t||{});let r=Object.fromEntries(Object.entries(process.env||{}).filter(o=>o[0].startsWith("PUBLIC_")));x.default.set("env",Object.assign(Object.assign({},r),{BUILD_ID:this.id()}));let s=F.default.registry(this.template()),c={};return Array.from(s.values()).forEach((o,m)=>{c[String(m)]=o.attributes}),c}render(t={}){x.default.set("props",t||{}),x.default.set("bindings",this.bindings(t));let r=Object.fromEntries(Object.entries(process.env||{}).filter(f=>f[0].startsWith("PUBLIC_")));x.default.set("env",Object.assign(Object.assign({},r),{BUILD_ID:this.id()}));let s=this.template(),c=F.default.render(s).trim();if(!c.toLowerCase().startsWith("<html"))throw we.default.for("Document must start with an <html> tag.");let o=Object.fromEntries(x.default.entries()),m=JSON.stringify(o).replace(/\n/g,`
  `);return`<!DOCTYPE html>
${c.replace("__CLIENT_DATA__",m)}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(r=>typeof r=="object"&&typeof r.nodeType=="number")?t:[F.default.createText(String(t))]}};T.default=G});var ee=i(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});g.InkEmitter=void 0;var _=class{emit(t,r){return this}on(t,r){return this}once(t,r){return this}unbind(t,r){return this}};g.InkEmitter=_;var Ne=new _;g.default=Ne});var te=i(k=>{"use strict";var Le=k&&k.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(k,"__esModule",{value:!0});var Ie=Le(u());function De(a){let t=Ie.default.get("env")||{};return a?t[a]||null:t}k.default=De});var ae=i(y=>{"use strict";var Ae=y&&y.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(y,"__esModule",{value:!0});y.default=Se;var Oe=Ae(u());function Se(){return Oe.default.get("props")||{}}});var se=i(n=>{"use strict";var Pe=n&&n.__createBinding||(Object.create?function(a,t,r,s){s===void 0&&(s=r);var c=Object.getOwnPropertyDescriptor(t,r);(!c||("get"in c?!t.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(a,s,c)}:function(a,t,r,s){s===void 0&&(s=r),a[s]=t[r]}),Ce=n&&n.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),je=n&&n.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(r){var s=[];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(s[s.length]=c);return s},a(t)};return function(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var s=a(t),c=0;c<s.length;c++)s[c]!=="default"&&Pe(r,t,s[c]);return Ce(r,t),r}}(),p=n&&n.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(n,"__esModule",{value:!0});n.InkText=n.InkException=n.InkEmitter=n.InkElement=n.InkRegistry=n.InkDocument=n.InkCollection=n.props=n.emitter=n.env=n.data=void 0;var Re=p(D());n.InkCollection=Re.default;var Ue=p(Z());n.InkDocument=Ue.default;var Me=p($());n.InkRegistry=Me.default;var Be=p(B());n.InkElement=Be.default;var re=je(ee());n.emitter=re.default;Object.defineProperty(n,"InkEmitter",{enumerable:!0,get:function(){return re.InkEmitter}});var qe=p(U());n.InkText=qe.default;var $e=p(u());n.data=$e.default;var Fe=p(te());n.env=Fe.default;var Ge=p(ae());n.props=Ge.default;var He=p(P());n.InkException=He.default});var W=i((nt,le)=>{le.exports={...se()}});var Ye={};de(Ye,{default:()=>N});var e=J(W()),w=J(W());var l=function(a,...t){let r=We(a);for(let s=0;s<t.length;s++)r=r.replace("%s",String(t[s]));return r},We=function(a){return a};var N=class extends e.InkDocument{id(){return"e728f894ed3f1278a022"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/docs/component-strategy.html",r=l("Component Strategy - Ink reactive web component template engine."),s=l("Learn more about web components and how they work with Ink."),c=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[e.InkRegistry.createText(`
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
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,w.env)("BUILD_ID")}.css`},'{ "rel": "stylesheet", "type": "text/css", "href": `/ink/build/client/${env(\'BUILD_ID\')}.css` }'),e.InkRegistry.createElement("script",{id:"CLIENT_DATA",type:"text/json"},'{ "id": "CLIENT_DATA", "type": "text/json" }',[e.InkRegistry.createText("__CLIENT_DATA__",!0)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("script",{type:"text/javascript",src:`/ink/build/client/${(0,w.env)("BUILD_ID")}.js`},'{ "type": "text/javascript", "src": `/ink/build/client/${env(\'BUILD_ID\')}.js` }'),e.InkRegistry.createText(`
  `,!1),...(0,w.env)("PUBLIC_ENV")==="development"?[e.InkRegistry.createElement("script",{src:"/dev.js"},'{ "src": "/dev.js" }')]:[],e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},'{ "class": "light bg-t-0 tx-t-1 tx-arial" }',[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("panel-layout",{},"{ }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("header",{},"{ }",[e.InkRegistry.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},'{ "class": "flex flex-center-y px-20 py-15 m-0 bg-t-1" }',[e.InkRegistry.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:c},'{ "class": "fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1", "click": toggle }',[]),e.InkRegistry.createText(`
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
  `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:c},'{ "class": "fas fa-fw fa-chevron-left cursor-pointer none md-inline-block", "click": toggle }',[]),e.InkRegistry.createText(`
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
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#document"},'{ "class": "block tx-t-0", "href": "#document" }',[...this._toNodeList(l("Document"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#template"},'{ "class": "block tx-t-0", "href": "#template" }',[...this._toNodeList(l("Template"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#component"},'{ "class": "block tx-t-0", "href": "#component" }',[...this._toNodeList(l("Component"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("nav",{class:"pl-20"},'{ "class": "pl-20" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#strat-1"},'{ "class": "block tx-t-1", "href": "#strat-1" }',[...this._toNodeList(l("Strategy 1"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#strat-2"},'{ "class": "block tx-t-1", "href": "#strat-2" }',[...this._toNodeList(l("Strategy 2"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#strat-3"},'{ "class": "block tx-t-1", "href": "#strat-3" }',[...this._toNodeList(l("Strategy 3"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#strat-4"},'{ "class": "block tx-t-1", "href": "#strat-4" }',[...this._toNodeList(l("Strategy 4"))]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#fouc"},'{ "class": "block tx-t-0", "href": "#fouc" }',[...this._toNodeList(l("FOUC"))]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("main",{},"{ }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("api-docs",{},"{ }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},'{ "class": "tx-primary tx-upper tx-30 py-20" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Component Strategy")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            There are three types of components in Ink: Document, 
            Template, and Component. Each type of component has a 
            different strategy for rendering and updating the DOM. The 
            Document component is the root component of the application 
            and is responsible for rendering the entire application. The 
            Template component is a reusable component that can be used 
            in multiple places in the application. The Component component 
            is a custom component that can be used to create complex UI 
            elements.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"document"},'{ "name": "document" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},'{ "class": "tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Document")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            A document denoted by files with the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText(".ink",!1)]),e.InkRegistry.createText(` extension, is the root of
            each page view that should include the document markup 
            starting with `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[...this._toNodeList("<html>")]),e.InkRegistry.createText(`. While 
            it looks like another Ink component, there are some key 
            differences in how it is used.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ul",{},"{ }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
                A document logic (`,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[...this._toNodeList("<script>")]),e.InkRegistry.createText(`)
                is executed on the client side but is not a 
                `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("InkComponent",!1)]),e.InkRegistry.createText(`, which means 
                it cannot be re-rendered and does not have access to 
                `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("this",!1)]),e.InkRegistry.createText(` context.
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
                A document `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[...this._toNodeList("props()")]),e.InkRegistry.createText(` are the 
                server props passed down to the client.
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
                A document does not have access to NodeJS functionality. So 
                things like `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("fs",!1)]),e.InkRegistry.createText(` are not available.
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("element-alert",{curved:!0,info:!0,class:"py-20 tx-lh-24"},'{ "curved": true, "info": true, "class": "py-20 tx-lh-24" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("element-icon",{name:"info-circle"},'{ "name": "info-circle" }'),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("strong",{},"{ }",[e.InkRegistry.createText("Recommendation:",!1)]),e.InkRegistry.createText(` You should do server related
            logic on the server framework and pass the neccesary data 
            to the client.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:250,title:"Passing Server Props",class:"py-20"},'{ "height": 250, "title": "Passing Server Props", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},'{ "class": "flex scroll-x-auto pt-5 pl-5" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"server",selector:"#server-index-ts"},'{ "on": true, "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "server", "selector": "#server-index-ts" }',[e.InkRegistry.createText(`
                  src/index.ts
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"server",selector:"#server-page-ink"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "server", "selector": "#server-page-ink" }',[e.InkRegistry.createText(`
                  src/page.ink
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"p-5"},'{ "class": "p-5" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},'{ "name": "chevron-down" }'),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"server",selector:"#server-index-ts"},'{ "on": true, "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "server", "selector": "#server-index-ts" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                index.ts
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"server",selector:"#server-page-ink"},'{ "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "server", "selector": "#server-page-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                page.ink
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"server-index-ts",lang:"js",numbers:!0,trim:!0,detab:16},'{ "id": "server-index-ts", "lang": "js", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                import http from 'http';
                import ink from '@stackpress/ink/compiler';

                const compiler = ink({ cwd: __dirname });
                const server = http.createServer(async (req, res) => {
                  //pass server props to document
                  res.end(await compiler.render('./index.ink', {
                    title: 'Hello World'
                  }));
                });
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"server-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},'{ "id": "server-page-ink", "style": "display:none", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                <script>
                  import { props } from '@stackpress/ink';
                  //from the server
                  const { title } = props();
                </script>
                <html>
                  <body>
                    <h1 class="title">{title}</h1>
                  </body>
                </html>
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"template"},'{ "name": "template" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},'{ "class": "tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Template")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            A template is resuable partial markup that can be imported by 
            a component, document or another template. A template is 
            not is not a `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("InkComponent",!1)]),e.InkRegistry.createText(`, but 
            rather adds its markup to the parent component's final markup.
            You will not see a template in the DOM, but rather the
            markup it contains.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            For example, consider a document that contains the following 
            markup.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{trim:!0,detab:12},'{ "trim": true, "detab": 12 }',[...this._toNodeList(`
            <script>
              const title = 'Hello World';
            </script>
            <html>
              <head>
                <meta charset="utf-8" />
                <title>{title}</title>
              </head>
              <body>
                <h1>{title}</h1>
              </body>
            </html>
          `)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            You can create a template for the head of your
            document and then import it. This allows you to
            reuse the head markup in multiple documents.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:250,title:"Using Templates",class:"py-20"},'{ "height": 250, "title": "Using Templates", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},'{ "class": "flex scroll-x-auto pt-5 pl-5" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"template",selector:"#template-page-ink"},'{ "on": true, "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "template", "selector": "#template-page-ink" }',[e.InkRegistry.createText(`
                  src/page.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"template",selector:"#template-head-ink"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "template", "selector": "#template-head-ink" }',[e.InkRegistry.createText(`
                  src/head.ink
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"p-5"},'{ "class": "p-5" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},'{ "name": "chevron-down" }'),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"template",selector:"#template-page-ink"},'{ "on": true, "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "template", "selector": "#template-page-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                page.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"template",selector:"#template-head-ink"},'{ "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "template", "selector": "#template-head-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                head.ink
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"template-page-ink",numbers:!0,trim:!0,detab:16},'{ "id": "template-page-ink", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                <link rel="import" type="template" href="./head.ink" name="html-head" />
                <script>
                  const title = 'Hello World';
                </script>
                <html>
                  <html-head />
                  <body>
                    <h1>{title}</h1>
                  </body>
                </html>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"template-head-ink",style:"display:none",numbers:!0,trim:!0,detab:16},'{ "id": "template-head-ink", "style": "display:none", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                <head>
                  <meta charset="utf-8" />
                  <title>{title}</title>
                </head>
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("element-alert",{curved:!0,info:!0,class:"py-20 tx-lh-24"},'{ "curved": true, "info": true, "class": "py-20 tx-lh-24" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("element-icon",{name:"info-circle"},'{ "name": "info-circle" }'),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("strong",{},"{ }",[e.InkRegistry.createText("Note:",!1)]),e.InkRegistry.createText(` Template partials do not process 
            attributes or children if given.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            Variables used in a template should be declared in the
            parent component or document. This allows you to pass
            data to the template from the parent.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"component"},'{ "name": "component" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},'{ "class": "tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Component")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            All ink components are 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("InkComponent",!1)]),e.InkRegistry.createText(` that extends
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[e.InkRegistry.createText("HTMLElement",!1)]),e.InkRegistry.createText(` and therefore is 
            both a web component and element just like any other element 
            in the browser DOM. Components that do not use the
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[...this._toNodeList("<style>")]),e.InkRegistry.createText(` tag are affected by 
            the global styles of the application. Components with the
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[...this._toNodeList("<style>")]),e.InkRegistry.createText(` tag enable the 
            component's shadow DOM and will encapsulate the styles within
            the component and not be affected by global styles. With that 
            said, there are several strategies that can be applied to 
            Ink components.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"strat-1"},'{ "name": "strat-1" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},'{ "class": "tx-t-1 tx-upper tx-22 pt-40 pb-20" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Strategy 1: No Components")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            This strategy uses only documents and templates. This 
            strategy is useful for simple applications that do not require 
            complex UI elements. This is the best strategy for 
            performant applications.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:400,title:"No Components",class:"py-20"},'{ "height": 400, "title": "No Components", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},'{ "class": "flex scroll-x-auto pt-5 pl-5" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-1",selector:"#strat-1-page-ink"},'{ "on": true, "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "strat-1", "selector": "#strat-1-page-ink" }',[e.InkRegistry.createText(`
                  src/page.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-1",selector:"#strat-1-head-ink"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "strat-1", "selector": "#strat-1-head-ink" }',[e.InkRegistry.createText(`
                  src/head.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-1",selector:"#strat-1-header-ink"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "strat-1", "selector": "#strat-1-header-ink" }',[e.InkRegistry.createText(`
                  src/header.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-1",selector:"#strat-1-footer-ink"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "strat-1", "selector": "#strat-1-footer-ink" }',[e.InkRegistry.createText(`
                  src/footer.ink
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"folder"},'{ "class": "folder" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},'{ "name": "chevron-down" }'),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-1",selector:"#strat-1-page-ink"},'{ "on": true, "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "strat-1", "selector": "#strat-1-page-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                page.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-1",selector:"#strat-1-head-ink"},'{ "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "strat-1", "selector": "#strat-1-head-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                head.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-1",selector:"#strat-1-header-ink"},'{ "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "strat-1", "selector": "#strat-1-header-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                header.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-1",selector:"#strat-1-footer-ink"},'{ "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "strat-1", "selector": "#strat-1-footer-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                footer.ink
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-1-page-ink",numbers:!0,trim:!0,detab:16},'{ "id": "strat-1-page-ink", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                <link rel="import" type="template" href="./head.ink" name="html-head" />
                <link rel="import" type="template" href="./header.ink" name="page-header" />
                <link rel="import" type="template" href="./footer.ink" name="page-footer" />
                <script>
                  import { env } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const title = 'Hello World';
                </script>
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
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-1-head-ink",style:"display:none",numbers:!0,trim:!0,detab:16},'{ "id": "strat-1-head-ink", "style": "display:none", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                <head>
                  <meta charset="utf-8" />
                  <title>{title}</title>

                  <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                  <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                </head>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-1-header-ink",style:"display:none",numbers:!0,trim:!0,detab:16},'{ "id": "strat-1-header-ink", "style": "display:none", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                <header>
                  <img src="/logo.png" alt="Logo" />
                  <h6>Brand</h6>
                </header>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-1-footer-ink",style:"display:none",numbers:!0,trim:!0,detab:16},'{ "id": "strat-1-footer-ink", "style": "display:none", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                <footer>
                  <a href="/about">About</a>
                  <copy>&copy; 2025</copy>
                </footer>
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"strat-2"},'{ "name": "strat-2" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},'{ "class": "tx-t-1 tx-upper tx-22 pt-40 pb-20" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Strategy 2: Shallow Components")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            This strategy uses components that do not have a 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[...this._toNodeList("<style>")]),e.InkRegistry.createText(` tag and is useful for 
            applications that require complex logic in components but 
            using a shared global stylesheet.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:400,title:"Shallow Components",class:"py-20"},'{ "height": 400, "title": "Shallow Components", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},'{ "class": "flex scroll-x-auto pt-5 pl-5" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-2",selector:"#strat-2-page-ink"},'{ "on": true, "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "strat-2", "selector": "#strat-2-page-ink" }',[e.InkRegistry.createText(`
                  src/page.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-2",selector:"#strat-2-header-ink"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "strat-2", "selector": "#strat-2-header-ink" }',[e.InkRegistry.createText(`
                  src/header.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-2",selector:"#strat-2-footer-ink"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "strat-2", "selector": "#strat-2-footer-ink" }',[e.InkRegistry.createText(`
                  src/footer.ink
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"folder"},'{ "class": "folder" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},'{ "name": "chevron-down" }'),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-2",selector:"#strat-2-page-ink"},'{ "on": true, "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "strat-2", "selector": "#strat-2-page-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                page.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-2",selector:"#strat-2-header-ink"},'{ "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "strat-2", "selector": "#strat-2-header-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                header.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-2",selector:"#strat-2-footer-ink"},'{ "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "strat-2", "selector": "#strat-2-footer-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                footer.ink
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-2-page-ink",numbers:!0,trim:!0,detab:16},'{ "id": "strat-2-page-ink", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                <link rel="import" type="component" href="./header.ink" name="page-header" />
                <link rel="import" type="component" href="./footer.ink" name="page-footer" />
                <script>
                  import { env } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const title = 'Hello World';
                  const brand = 'Acme Inc.';
                  const logo = '/logo.png';
                </script>
                <html>
                  <head>
                    <meta charset="utf-8" />
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href="/styles.css" />

                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                  </head>
                  <body>
                    <page-header {brand} {logo} />
                    <main>
                      <h1>{title}</h1>
                    </main>
                    <page-footer {brand} />
                  </body>
                </html>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-2-header-ink",style:"display:none",numbers:!0,trim:!0,detab:16},'{ "id": "strat-2-header-ink", "style": "display:none", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand, logo } = props();
                </script>
                <header>
                  <img src={logo} alt={brand} />
                  <h6>{brand}</h6>
                </header>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-2-footer-ink",style:"display:none",numbers:!0,trim:!0,detab:16},'{ "id": "strat-2-footer-ink", "style": "display:none", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand } = props();
                </script>
                <footer>
                  <a href="/about">About</a>
                  <copy>&copy; 2025 {brand}</copy>
                </footer>
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"strat-3"},'{ "name": "strat-3" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},'{ "class": "tx-t-1 tx-upper tx-22 pt-40 pb-20" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Strategy 3: Partial Styling")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            This strategy uses components that do not have a 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[...this._toNodeList("<style>")]),e.InkRegistry.createText(` tag,
            but imports style via the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[...this._toNodeList("<link>")]),e.InkRegistry.createText(` tag to utilize both 
            global styles and specific styles that are needed for the
            component. 
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:400,title:"Shallow Components",class:"py-20"},'{ "height": 400, "title": "Shallow Components", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},'{ "class": "flex scroll-x-auto pt-5 pl-5" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-3",selector:"#strat-3-page-ink"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "strat-3", "selector": "#strat-3-page-ink" }',[e.InkRegistry.createText(`
                  src/page.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-3",selector:"#strat-3-header-ink"},'{ "on": true, "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "strat-3", "selector": "#strat-3-header-ink" }',[e.InkRegistry.createText(`
                  src/header.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-3",selector:"#strat-3-footer-ink"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "strat-3", "selector": "#strat-3-footer-ink" }',[e.InkRegistry.createText(`
                  src/footer.ink
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"folder"},'{ "class": "folder" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},'{ "name": "chevron-down" }'),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-3",selector:"#strat-3-page-ink"},'{ "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "strat-3", "selector": "#strat-3-page-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                page.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-3",selector:"#strat-3-header-ink"},'{ "on": true, "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "strat-3", "selector": "#strat-3-header-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                header.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-3",selector:"#strat-3-footer-ink"},'{ "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "strat-3", "selector": "#strat-3-footer-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                footer.ink
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-3-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},'{ "id": "strat-3-page-ink", "style": "display:none", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                <link rel="import" type="component" href="./header.ink" name="page-header" />
                <link rel="import" type="component" href="./footer.ink" name="page-footer" />
                <script>
                  import { env } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const title = 'Hello World';
                  const brand = 'Acme Inc.';
                  const logo = '/logo.png';
                </script>
                <html>
                  <head>
                    <meta charset="utf-8" />
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href="/styles.css" />

                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                  </head>
                  <body>
                    <page-header {brand} {logo} />
                    <main>
                      <h1>{title}</h1>
                    </main>
                    <page-footer {brand} />
                  </body>
                </html>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-3-header-ink",numbers:!0,trim:!0,detab:16},'{ "id": "strat-3-header-ink", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                <link rel="stylesheet" type="text/css" href="/header.css" />
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand, logo } = props();
                </script>
                <header>
                  <img src={logo} alt={brand} />
                  <h6>{brand}</h6>
                </header>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-3-footer-ink",style:"display:none",numbers:!0,trim:!0,detab:16},'{ "id": "strat-3-footer-ink", "style": "display:none", "numbers": true, "trim": true, "detab": 16 }',[...this._toNodeList(`
                <link rel="stylesheet" type="text/css" href="/footer.css" />
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand } = props();
                </script>
                <footer>
                  <a href="/about">About</a>
                  <copy>&copy; 2025 {brand}</copy>
                </footer>
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"strat-4"},'{ "name": "strat-4" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},'{ "class": "tx-t-1 tx-upper tx-22 pt-40 pb-20" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Strategy 4: Encapulation")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            This strategy uses components that have a
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},'{ "inline": true }',[...this._toNodeList("<style>")]),e.InkRegistry.createText(` tag and encapsulates
            the styles within the component. This strategy is useful for
            applications that require complex UI elements that need to be
            styled in a specific way. This is also useful for components 
            that are designed to be used in multiple projects.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:400,title:"Encapsulation",class:"py-20"},'{ "height": 400, "title": "Encapsulation", "class": "py-20" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},'{ "class": "flex scroll-x-auto pt-5 pl-5" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-4",selector:"#strat-4-page-ink"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "strat-4", "selector": "#strat-4-page-ink" }',[e.InkRegistry.createText(`
                  src/page.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-4",selector:"#strat-4-header-ink"},'{ "on": true, "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "strat-4", "selector": "#strat-4-header-ink" }',[e.InkRegistry.createText(`
                  src/header.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-4",selector:"#strat-4-footer-ink"},'{ "class": "relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0", "active": "bg-black tx-white", "inactive": "bg-t-1 tx-t-1", "group": "strat-4", "selector": "#strat-4-footer-ink" }',[e.InkRegistry.createText(`
                  src/footer.ink
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"folder"},'{ "class": "folder" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},'{ "name": "chevron-down" }'),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-4",selector:"#strat-4-page-ink"},'{ "on": true, "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "strat-4", "selector": "#strat-4-page-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                page.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-4",selector:"#strat-4-header-ink"},'{ "on": true, "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "strat-4", "selector": "#strat-4-header-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                header.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-4",selector:"#strat-4-footer-ink"},'{ "class": "pl-15 pt-10 block", "active": "tx-white", "inactive": "tx-muted", "group": "strat-4", "selector": "#strat-4-footer-ink" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},'{ "name": "file" }'),e.InkRegistry.createText(`
                footer.ink
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-4-page-ink",style:"display:none",numbers:!0,trim:!0,detab:14},'{ "id": "strat-4-page-ink", "style": "display:none", "numbers": true, "trim": true, "detab": 14 }',[...this._toNodeList(`
                <link rel="import" type="component" href="./header.ink" name="page-header" />
                <link rel="import" type="component" href="./footer.ink" name="page-footer" />
                <script>
                  import { env } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const title = 'Hello World';
                  const brand = 'Acme Inc.';
                  const logo = '/logo.png';
                </script>
                <html>
                  <head>
                    <meta charset="utf-8" />
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href="/styles.css" />

                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                  </head>
                  <body>
                    <page-header {brand} {logo} />
                    <main>
                      <h1>{title}</h1>
                    </main>
                    <page-footer {brand} />
                  </body>
                </html>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-4-header-ink",numbers:!0,trim:!0,detab:14},'{ "id": "strat-4-header-ink", "numbers": true, "trim": true, "detab": 14 }',[...this._toNodeList(`
                <style>
                  img { width: 100px; height: 100px; }
                  h6 { margin: 0; }
                </style>
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand, logo } = props();
                </script>
                <header>
                  <img src={logo} alt={brand} />
                  <h6>{brand}</h6>
                </header>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-4-footer-ink",style:"display:none",numbers:!0,trim:!0,detab:14},'{ "id": "strat-4-footer-ink", "style": "display:none", "numbers": true, "trim": true, "detab": 14 }',[...this._toNodeList(`
                <style>
                  copy { 
                    display: block; 
                    text-align: center; 
                  }
                </style>
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand } = props();
                </script>
                <footer>
                  <a href="/about">About</a>
                  <copy>&copy; 2025 {brand}</copy>
                </footer>
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"fouc"},'{ "name": "fouc" }',[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{},"{ }",[...this._toNodeList(l("Flash of Unstyled Content"))]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
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
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            A flash of unstyled content (FOUC) can cause irritating layout 
            shifts as well as reveal content that should have been 
            progressively disclosed. In order to prevent a reflow of other 
            content you can add the following general solution to your 
            global stylesheet.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{lang:"css",numbers:!0,detab:12},'{ "lang": "css", "numbers": true, "detab": 12 }',[...this._toNodeList(`
            *:not(:defined) {
              opacity: 0;
            }
          `)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},'{ "p": true, "trim": true, "class": "tx-lh-36 py-20" }',[e.InkRegistry.createText(`
            This style will apply to all elements that are not defined,
            which are usually web components and will hide the content 
            until the browser has fully rendered the component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("nav",{class:"flex"},'{ "class": "flex" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/state-management.html"},'{ "class": "tx-primary py-40", "href": "/ink/docs/state-management.html" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-left",theme:"tx-1"},'{ "name": "chevron-left", "theme": "tx-1" }'),e.InkRegistry.createText(`
              `,!1),...this._toNodeList(l("State Management")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/compiler-api.html"},'{ "class": "flex-grow tx-right tx-primary py-40", "href": "/ink/docs/compiler-api.html" }',[e.InkRegistry.createText(`
              `,!1),...this._toNodeList(l("Compiler API")),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-right",theme:"tx-1"},'{ "name": "chevron-right", "theme": "tx-1" }'),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("footer",{class:"foot"},'{ "class": "foot" }',[]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return ue(Ye);})();
;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;