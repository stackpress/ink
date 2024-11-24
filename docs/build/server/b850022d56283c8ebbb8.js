var InkAPI=(()=>{var oe=Object.create;var y=Object.defineProperty;var fe=Object.getOwnPropertyDescriptor;var pe=Object.getOwnPropertyNames;var ue=Object.getPrototypeOf,de=Object.prototype.hasOwnProperty;var i=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports),he=(s,t)=>{for(var a in t)y(s,a,{get:t[a],enumerable:!0})},Y=(s,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of pe(t))!de.call(s,l)&&l!==a&&y(s,l,{get:()=>t[l],enumerable:!(r=fe(t,l))||r.enumerable});return s};var K=(s,t,a)=>(a=s!=null?oe(ue(s)):{},Y(t||!s||!s.__esModule?y(a,"default",{value:s,enumerable:!0}):a,s)),me=s=>Y(y({},"__esModule",{value:!0}),s);var V=i(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.status=xe;var Q={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};E.default=Q;function xe(s){return Object.values(Q).find(t=>t.code===s)}});var D=i(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});var Te=V(),I=class s extends Error{static try(t){return{catch:a=>{try{return t()}catch(r){if(r instanceof s)return a(r,r.type);if(r instanceof Error){let l=s.upgrade(r);return a(l,l.type)}else if(typeof r=="string"){let l=s.for(r);return a(l,l.type)}return a(r,"unknown")}}}}static for(t,...a){return a.forEach(function(r){t=t.replace("%s",String(r))}),new this(t)}static forErrors(t){let a=new this("Invalid Parameters");return a.withErrors(t),a}static require(t,a,...r){if(!t){for(let l of r)a=a.replace("%s",l);throw new this(a)}}static upgrade(t,a=500){if(t instanceof s)return t;let r=new this(t.message,a);return r.name=t.name,r.stack=t.stack,r}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,a=500){var r;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=a,this._status=((r=(0,Te.status)(a))===null||r===void 0?void 0:r.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,a=0){let r={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,a)};return Object.keys(this._errors).length>0&&(r.errors=this._errors),r}trace(t=0,a=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,a||this.stack.length).map(l=>l.trim()).map(l=>{if(!l.startsWith("at"))return!1;let[f,N,_]=l.split(" ");_||(_=`(${N})`,N="<none>");let[ne,ce,ie]=_.substring(1,_.length-1).split(":");return{method:N,file:ne,line:parseInt(ce)||0,char:parseInt(ie)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,a){return this._start=t,this._end=a,this}};w.default=I});var J=i(u=>{"use strict";var be=u&&u.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(u,"__esModule",{value:!0});var ge=be(D()),j=class extends ge.default{};u.default=j});var P=i(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});var L=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(a=>this._elements.add(a))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};A.default=L});var d=i(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});var ke=new Map;R.default=ke});var M=i(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});var S=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,a=!1){this._escape=a,this._value=t}toString(){return this.value}};C.default=S});var q=i(h=>{"use strict";var _e=h&&h.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(h,"__esModule",{value:!0});var ye=_e(P()),Ee=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],U=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,a={},r="",l=[]){this._attributes={},this._name=t,this._attributes=a,this._props=r,this._children=new ye.default(l)}toString(){let t=Object.entries(this._attributes),a=t.length>0?" "+t.map(([l,f])=>{if(typeof f=="string"&&!/["<>\n]/.test(f))return`${l}="${f}"`;if(typeof f=="boolean")return f?l:""}).join(" "):"";if(Ee.includes(this._name))return`<${this._name}${a} />`;let r=this._children.toString();return`<${this._name}${a}>${r}</${this._name}>`}};h.default=U});var $=i(m=>{"use strict";var X=m&&m.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(m,"__esModule",{value:!0});var ve=X(M()),z=X(q()),B=class{static render(t){return t.filter(Boolean).map(a=>a.toString()).join("")}static registry(t,a=new Set){return t.forEach(r=>{r instanceof z.default&&(["html","head","body"].includes(r.name)||a.add(r),r.name!=="head"&&r.children.length>0&&this.registry(r.children.toArray(),a))}),a}static createElement(t,a,r,l=[]){return new z.default(t,a,r,l)}static createText(t,a=!0){return new ve.default(t,a)}};m.default=B});var Z=i(x=>{"use strict";var H=x&&x.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(x,"__esModule",{value:!0});var Oe=H(D()),p=H(d()),G=H($()),F=class{bindings(t={}){p.default.set("props",t||{}),p.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(p.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(l=>l[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let a=G.default.registry(this.template());return`{ ${Array.from(a.values()).map((l,f)=>l.props!=="{ }"?`'${f}': ${l.props}`:"").filter(l=>l!=="").join(", ")} }`}render(t={}){p.default.set("props",t||{}),p.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(p.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(l=>l[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let a=this.template(),r=G.default.render(a).trim();if(!r.toLowerCase().startsWith("<html"))throw Oe.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${r}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(a=>typeof a=="object"&&typeof a.nodeType=="number")?t:[G.default.createText(String(t))]}};x.default=F});var ee=i(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.InkEmitter=void 0;var v=class{emit(t,a){return this}on(t,a){return this}once(t,a){return this}unbind(t,a){return this}};T.InkEmitter=v;var Ne=new v;T.default=Ne});var te=i(b=>{"use strict";var Ie=b&&b.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(b,"__esModule",{value:!0});var we=Ie(d());function De(s){let t=we.default.get("env")||{};return s?t[s]||null:t}b.default=De});var se=i(g=>{"use strict";var je=g&&g.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(g,"__esModule",{value:!0});g.default=Ae;var Le=je(d());function Ae(){return Le.default.get("props")||{}}});var re=i(n=>{"use strict";var Pe=n&&n.__createBinding||(Object.create?function(s,t,a,r){r===void 0&&(r=a);var l=Object.getOwnPropertyDescriptor(t,a);(!l||("get"in l?!t.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(s,r,l)}:function(s,t,a,r){r===void 0&&(r=a),s[r]=t[a]}),Re=n&&n.__setModuleDefault||(Object.create?function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}:function(s,t){s.default=t}),Se=n&&n.__importStar||function(){var s=function(t){return s=Object.getOwnPropertyNames||function(a){var r=[];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(r[r.length]=l);return r},s(t)};return function(t){if(t&&t.__esModule)return t;var a={};if(t!=null)for(var r=s(t),l=0;l<r.length;l++)r[l]!=="default"&&Pe(a,t,r[l]);return Re(a,t),a}}(),o=n&&n.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(n,"__esModule",{value:!0});n.InkText=n.InkException=n.InkEmitter=n.InkElement=n.InkRegistry=n.InkDocument=n.InkCollection=n.props=n.emitter=n.env=n.data=void 0;var Ce=o(J());n.InkException=Ce.default;var Me=o(P());n.InkCollection=Me.default;var Ue=o(Z());n.InkDocument=Ue.default;var qe=o($());n.InkRegistry=qe.default;var Be=o(q());n.InkElement=Be.default;var ae=Se(ee());n.emitter=ae.default;Object.defineProperty(n,"InkEmitter",{enumerable:!0,get:function(){return ae.InkEmitter}});var $e=o(M());n.InkText=$e.default;var Ge=o(d());n.data=Ge.default;var Fe=o(te());n.env=Fe.default;var He=o(se());n.props=He.default});var W=i((ct,le)=>{le.exports={...re()}});var Ye={};he(Ye,{default:()=>O});var e=K(W()),k=K(W());var c=function(s,...t){let a=We(s);for(let r=0;r<t.length;r++)a=a.replace("%s",String(t[r]));return a},We=function(s){return s};var O=class extends e.InkDocument{id(){return"b850022d56283c8ebbb8"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/docs/developer-tools.html",a=c("Developer Tools - Ink reactive web component template engine."),r=c("Enable tools for a better developer experience and debugging."),l=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("html",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("head",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{charset:"utf-8"},"{ 'charset': `utf-8` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},"{ 'name': `viewport`, 'content': `width=device-width, initial-scale=1` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("title",{},"{ }",[...this._toNodeList(a)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"description",content:r},"{ 'name': `description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:title",content:a},"{ 'property': `og:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:description",content:r},"{ 'property': `og:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'property': `og:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`},"{ 'property': `og:url`, 'content': `https://stackpress.github.io/ink${url}` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:type",content:"website"},"{ 'property': `og:type`, 'content': `website` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:card",content:"summary"},"{ 'name': `twitter:card`, 'content': `summary` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:site",content:"@stackpress"},"{ 'name': `twitter:site`, 'content': `@stackpress` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:title",content:a},"{ 'name': `twitter:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:description",content:r},"{ 'name': `twitter:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'name': `twitter:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"},"{ 'rel': `favicon`, 'href': `/ink/favicon.ico` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"},"{ 'rel': `shortcut icon`, 'type': `image/png`, 'href': `/ink/favicon.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",media:"(prefers-color-scheme:light)",href:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css"},"{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:light)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",media:"(prefers-color-scheme:dark)",href:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css"},"{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:dark)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/styles/global.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,k.env)("BUILD_ID")}.css`},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/build/client/${env('BUILD_ID')}.css` }"),e.InkRegistry.createText(`
  
  `,!1),e.InkRegistry.createElement("script",{"data-app":(0,k.env)("APP_DATA"),src:`/ink/build/client/${(0,k.env)("BUILD_ID")}.js`},"{ 'data-app': env('APP_DATA'), 'src': `/ink/build/client/${env('BUILD_ID')}.js` }"),e.InkRegistry.createText(`
  `,!1),...(0,k.env)("NODE_ENV")==="development"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("script",{src:"/dev.js"},"{ 'src': `/dev.js` }"),e.InkRegistry.createText(`
  `,!1)]:[],e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},"{ 'class': `light bg-t-0 tx-t-1 tx-arial` }",[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("panel-layout",{},"{ }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("header",{},"{ }",[e.InkRegistry.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},"{ 'class': `flex flex-center-y px-20 py-15 m-0 bg-t-1` }",[e.InkRegistry.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:l},"{ 'class': `fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1`, 'click': toggle }",[]),e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("div",{class:"flex-grow"},"{ 'class': `flex-grow` }",[]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{href:"/ink"},"{ 'href': `/ink` }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("img",{alt:"Ink Logo",class:"h-26 mr-10",src:"/ink/ink-icon.png"},"{ 'alt': `Ink Logo`, 'class': `h-26 mr-10`, 'src': `/ink/ink-icon.png` }"),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("nav",{class:"flex flex-center-y"},"{ 'class': `flex flex-center-y` }",[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"tx-primary",href:"/ink/docs/index.html"},"{ 'class': `tx-primary`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText("Docs",!1)]),e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"tx-t-1 tx-5xl ml-10",href:"https://github.com/stackpress/ink",target:"_blank"},"{ 'class': `tx-t-1 tx-5xl ml-10`, 'href': `https://github.com/stackpress/ink`, 'target': `_blank` }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("i",{class:"fab fa-github"},"{ 'class': `fab fa-github` }",[]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center",href:"https://www.npmjs.com/package/@stackpress/ink",target:"_blank"},"{ 'class': `bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center`, 'href': `https://www.npmjs.com/package/@stackpress/ink`, 'target': `_blank` }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("i",{class:"fab fa-npm tx-white"},"{ 'class': `fab fa-npm tx-white` }",[]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("aside",{left:!0},"{ 'left': true }",[e.InkRegistry.createElement("header",{class:"flex flex-center-y bg-t-2 py-15 pr-5 pl-10"},"{ 'class': `flex flex-center-y bg-t-2 py-15 pr-5 pl-10` }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("a",{href:"/ink"},"{ 'href': `/ink` }",[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("img",{class:"h-26 mr-10",src:"/ink/ink-icon.png",alt:"Ink Logo"},"{ 'class': `h-26 mr-10`, 'src': `/ink/ink-icon.png`, 'alt': `Ink Logo` }"),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("h3",{class:"flex-grow m-0 tx-upper"},"{ 'class': `flex-grow m-0 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"tx-primary",href:"/ink"},"{ 'class': `tx-primary`, 'href': `/ink` }",[e.InkRegistry.createText("Ink",!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:l},"{ 'class': `fas fa-fw fa-chevron-left cursor-pointer none md-inline-block`, 'click': toggle }",[]),e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("nav",{class:"bg-t-1 scroll-auto h-calc-full-60"},"{ 'class': `bg-t-1 scroll-auto h-calc-full-60` }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(c("Introduction")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/index.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(c("Features")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/markup-syntax.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/markup-syntax.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/component-strategy.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/component-strategy.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/compiler-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/compiler-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/client-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/client-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(c("Usage")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/template-engine.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/template-engine.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/single-page.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/single-page.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/static-site.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/static-site.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/component-publisher.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/component-publisher.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold mb-100`, 'href': `/ink/docs/developer-tools.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},"{ 'class': `block tx-info py-10 pl-10 mb-100`, 'href': `/ink/docs/developer-tools.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
`,!1)])]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("main",{},"{ }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("api-docs",{},"{ }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},"{ 'class': `tx-primary tx-upper tx-30 py-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(c("Developer Tools")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Ink provides a separate package for a better development 
            experience when working with server frameworks that utilize 
            the native http module. Start by installing adding 
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},"{ 'lang': `js`, 'inline': true }",[...this._toNodeList("@stackpress/ink-dev")]),e.InkRegistry.createText(`
            to your project.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Terminal",class:"py-20"},"{ 'title': `Terminal`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"bash"},"{ 'lang': `bash` }",[e.InkRegistry.createText(`
              npm install --save-dev @stackpress/ink-dev
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Next, import the `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},"{ 'lang': `js`, 'inline': true }",[...this._toNodeList("dev()")]),e.InkRegistry.createText(` 
            function from the package and use it in your existing 
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},"{ 'lang': `js`, 'inline': true }",[...this._toNodeList("src/index.ts")]),e.InkRegistry.createText(` 
            file to create a development server as shown in the example below.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"src/index.ts",class:"py-20"},"{ 'title': `src/index.ts`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:12},"{ 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 12 }",[...this._toNodeList(`
              import http from 'http';
              import ink from '@stackpress/ink/compiler';
              import { dev } from '@stackpress/ink-dev';

              //create ink compiler
              const compiler = ink({ cwd: __dirname });
              //1. create dev tools
              const { router, refresh } = dev({ cwd: __dirname });

              //create http server
              const server = http.createServer(async (req, res) => {
                //2. Add dev router
                if (router(req, res)) return;
                //if home page
                if (req.url === '/') {
                  //3. sync builder with refresh server
                  refresh.sync(compiler.fromSource('./page.ink'));
                  //compile the document
                  const html = await compiler.render('./page.ink');
                  //... send response ...
                }
                //... other routes ...
              });
              //listen on port 3000
              server.listen(3000);
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Lastly, update the document file 
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},"{ 'lang': `js`, 'inline': true }",[...this._toNodeList("src/page.ink")]),e.InkRegistry.createText(` 
            to include the development script 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList('<script src="/dev.js"></script>')]),e.InkRegistry.createText(` 
            as shown below.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"src/page.ink",class:"py-20"},"{ 'title': `src/page.ink`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:12},"{ 'numbers': true, 'trim': true, 'detab': 12 }",[...this._toNodeList(`
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
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Run the following command in terminal.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Terminal",class:"py-20"},"{ 'title': `Terminal`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"bash"},"{ 'lang': `bash` }",[e.InkRegistry.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Whenever `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},"{ 'lang': `js`, 'inline': true }",[...this._toNodeList("src/page.ink")]),e.InkRegistry.createText(` 
            is updated, the development server will automatically refresh 
            the page. Components will also be updated in real-time.
          `,!1)]),e.InkRegistry.createText(`
          
          `,!1),e.InkRegistry.createElement("nav",{class:"flex"},"{ 'class': `flex` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/component-publisher.html"},"{ 'class': `tx-primary py-40`, 'href': `/ink/docs/component-publisher.html` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-left",theme:"tx-1"},"{ 'name': `chevron-left`, 'theme': `tx-1` }"),e.InkRegistry.createText(`
              `,!1),...this._toNodeList(c("Component Publisher")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("footer",{class:"foot"},"{ 'class': `foot` }",[]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return me(Ye);})();
