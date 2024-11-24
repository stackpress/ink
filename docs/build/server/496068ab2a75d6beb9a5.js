var InkAPI=(()=>{var oe=Object.create;var k=Object.defineProperty;var ue=Object.getOwnPropertyDescriptor;var fe=Object.getOwnPropertyNames;var me=Object.getPrototypeOf,pe=Object.prototype.hasOwnProperty;var n=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),de=(a,t)=>{for(var r in t)k(a,r,{get:t[r],enumerable:!0})},W=(a,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of fe(t))!pe.call(a,l)&&l!==r&&k(a,l,{get:()=>t[l],enumerable:!(s=ue(t,l))||s.enumerable});return a};var J=(a,t,r)=>(r=a!=null?oe(me(a)):{},W(t||!a||!a.__esModule?k(r,"default",{value:a,enumerable:!0}):r,a)),xe=a=>W(k({},"__esModule",{value:!0}),a);var z=n(_=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});_.status=he;var V={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};_.default=V;function he(a){return Object.values(V).find(t=>t.code===a)}});var O=n(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});var Te=z(),w=class a extends Error{static try(t){return{catch:r=>{try{return t()}catch(s){if(s instanceof a)return r(s,s.type);if(s instanceof Error){let l=a.upgrade(s);return r(l,l.type)}else if(typeof s=="string"){let l=a.for(s);return r(l,l.type)}return r(s,"unknown")}}}}static for(t,...r){return r.forEach(function(s){t=t.replace("%s",String(s))}),new this(t)}static forErrors(t){let r=new this("Invalid Parameters");return r.withErrors(t),r}static require(t,r,...s){if(!t){for(let l of s)r=r.replace("%s",l);throw new this(r)}}static upgrade(t,r=500){if(t instanceof a)return t;let s=new this(t.message,r);return s.name=t.name,s.stack=t.stack,s}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,r=500){var s;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=r,this._status=((s=(0,Te.status)(r))===null||s===void 0?void 0:s.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,r=0){let s={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,r)};return Object.keys(this._errors).length>0&&(s.errors=this._errors),s}trace(t=0,r=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,r||this.stack.length).map(l=>l.trim()).map(l=>{if(!l.startsWith("at"))return!1;let[u,v,g]=l.split(" ");g||(g=`(${v})`,v="<none>");let[ce,ie,ne]=g.substring(1,g.length-1).split(":");return{method:v,file:ce,line:parseInt(ie)||0,char:parseInt(ne)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,r){return this._start=t,this._end=r,this}};I.default=w});var K=n(m=>{"use strict";var be=m&&m.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(m,"__esModule",{value:!0});var ye=be(O()),D=class extends ye.default{};m.default=D});var C=n(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});var S=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(r=>this._elements.add(r))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};A.default=S});var p=n(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});var Ee=new Map;j.default=Ee});var R=n(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});var P=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,r=!1){this._escape=r,this._value=t}toString(){return this.value}};M.default=P});var q=n(d=>{"use strict";var ge=d&&d.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(d,"__esModule",{value:!0});var ke=ge(C()),_e=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],U=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,r={},s="",l=[]){this._attributes={},this._name=t,this._attributes=r,this._props=s,this._children=new ke.default(l)}toString(){let t=Object.entries(this._attributes),r=t.length>0?" "+t.map(([l,u])=>{if(typeof u=="string"&&!/["<>\n]/.test(u))return`${l}="${u}"`;if(typeof u=="boolean")return u?l:""}).join(" "):"";if(_e.includes(this._name))return`<${this._name}${r} />`;let s=this._children.toString();return`<${this._name}${r}>${s}</${this._name}>`}};d.default=U});var F=n(x=>{"use strict";var X=x&&x.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(x,"__esModule",{value:!0});var Ne=X(R()),Q=X(q()),B=class{static render(t){return t.filter(Boolean).map(r=>r.toString()).join("")}static registry(t,r=new Set){return t.forEach(s=>{s instanceof Q.default&&(["html","head","body"].includes(s.name)||r.add(s),s.name!=="head"&&s.children.length>0&&this.registry(s.children.toArray(),r))}),r}static createElement(t,r,s,l=[]){return new Q.default(t,r,s,l)}static createText(t,r=!0){return new Ne.default(t,r)}};x.default=B});var Z=n(h=>{"use strict";var H=h&&h.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(h,"__esModule",{value:!0});var Le=H(O()),f=H(p()),$=H(F()),G=class{bindings(t={}){f.default.set("props",t||{}),f.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(f.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(l=>l[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let r=$.default.registry(this.template());return`{ ${Array.from(r.values()).map((l,u)=>l.props!=="{ }"?`'${u}': ${l.props}`:"").filter(l=>l!=="").join(", ")} }`}render(t={}){f.default.set("props",t||{}),f.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(f.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(l=>l[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let r=this.template(),s=$.default.render(r).trim();if(!s.toLowerCase().startsWith("<html"))throw Le.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${s}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(r=>typeof r=="object"&&typeof r.nodeType=="number")?t:[$.default.createText(String(t))]}};h.default=G});var ee=n(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.InkEmitter=void 0;var N=class{emit(t,r){return this}on(t,r){return this}once(t,r){return this}unbind(t,r){return this}};T.InkEmitter=N;var ve=new N;T.default=ve});var te=n(b=>{"use strict";var we=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var Ie=we(p());function Oe(a){let t=Ie.default.get("env")||{};return a?t[a]||null:t}b.default=Oe});var ae=n(y=>{"use strict";var De=y&&y.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(y,"__esModule",{value:!0});y.default=Ae;var Se=De(p());function Ae(){return Se.default.get("props")||{}}});var se=n(i=>{"use strict";var Ce=i&&i.__createBinding||(Object.create?function(a,t,r,s){s===void 0&&(s=r);var l=Object.getOwnPropertyDescriptor(t,r);(!l||("get"in l?!t.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(a,s,l)}:function(a,t,r,s){s===void 0&&(s=r),a[s]=t[r]}),je=i&&i.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),Pe=i&&i.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(r){var s=[];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[s.length]=l);return s},a(t)};return function(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var s=a(t),l=0;l<s.length;l++)s[l]!=="default"&&Ce(r,t,s[l]);return je(r,t),r}}(),o=i&&i.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(i,"__esModule",{value:!0});i.InkText=i.InkException=i.InkEmitter=i.InkElement=i.InkRegistry=i.InkDocument=i.InkCollection=i.props=i.emitter=i.env=i.data=void 0;var Me=o(K());i.InkException=Me.default;var Re=o(C());i.InkCollection=Re.default;var Ue=o(Z());i.InkDocument=Ue.default;var qe=o(F());i.InkRegistry=qe.default;var Be=o(q());i.InkElement=Be.default;var re=Pe(ee());i.emitter=re.default;Object.defineProperty(i,"InkEmitter",{enumerable:!0,get:function(){return re.InkEmitter}});var Fe=o(R());i.InkText=Fe.default;var $e=o(p());i.data=$e.default;var Ge=o(te());i.env=Ge.default;var He=o(ae());i.props=He.default});var Y=n((it,le)=>{le.exports={...se()}});var We={};de(We,{default:()=>L});var e=J(Y()),E=J(Y());var c=function(a,...t){let r=Ye(a);for(let s=0;s<t.length;s++)r=r.replace("%s",String(t[s]));return r},Ye=function(a){return a};var L=class extends e.InkDocument{id(){return"496068ab2a75d6beb9a5"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/docs/markup-syntax.html",r=c("Markup Syntax - Ink reactive web component template engine."),s=c("Learn how to write markup in Ink."),l=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("html",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("head",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{charset:"utf-8"},"{ 'charset': `utf-8` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},"{ 'name': `viewport`, 'content': `width=device-width, initial-scale=1` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("title",{},"{ }",[...this._toNodeList(r)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"description",content:s},"{ 'name': `description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:title",content:r},"{ 'property': `og:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:description",content:s},"{ 'property': `og:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'property': `og:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`},"{ 'property': `og:url`, 'content': `https://stackpress.github.io/ink${url}` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:type",content:"website"},"{ 'property': `og:type`, 'content': `website` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:card",content:"summary"},"{ 'name': `twitter:card`, 'content': `summary` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:site",content:"@stackpress"},"{ 'name': `twitter:site`, 'content': `@stackpress` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:title",content:r},"{ 'name': `twitter:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:description",content:s},"{ 'name': `twitter:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'name': `twitter:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"},"{ 'rel': `favicon`, 'href': `/ink/favicon.ico` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"},"{ 'rel': `shortcut icon`, 'type': `image/png`, 'href': `/ink/favicon.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",media:"(prefers-color-scheme:light)",href:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css"},"{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:light)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",media:"(prefers-color-scheme:dark)",href:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css"},"{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:dark)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/styles/global.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,E.env)("BUILD_ID")}.css`},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/build/client/${env('BUILD_ID')}.css` }"),e.InkRegistry.createText(`
  
  `,!1),e.InkRegistry.createElement("script",{"data-app":(0,E.env)("APP_DATA"),src:`/ink/build/client/${(0,E.env)("BUILD_ID")}.js`},"{ 'data-app': env('APP_DATA'), 'src': `/ink/build/client/${env('BUILD_ID')}.js` }"),e.InkRegistry.createText(`
  `,!1),...(0,E.env)("NODE_ENV")==="development"?[e.InkRegistry.createText(`
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
      `,!1),e.InkRegistry.createElement("aside",{right:!0},"{ 'right': true }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("menu",{class:"m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto"},"{ 'class': `m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto` }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h6",{class:"tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper"},"{ 'class': `tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(c("On this page")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("nav",{class:"tx-14 tx-lh-32"},"{ 'class': `tx-14 tx-lh-32` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#imports"},"{ 'class': `block tx-t-0`, 'href': `#imports` }",[...this._toNodeList(c("Imports"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#styles"},"{ 'class': `block tx-t-0`, 'href': `#styles` }",[...this._toNodeList(c("Styles"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#scripts"},"{ 'class': `block tx-t-0`, 'href': `#scripts` }",[...this._toNodeList(c("Scripts"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#markup"},"{ 'class': `block tx-t-0`, 'href': `#markup` }",[...this._toNodeList(c("Markup"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("nav",{class:"pl-20"},"{ 'class': `pl-20` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#tagnames"},"{ 'class': `block tx-t-1`, 'href': `#tagnames` }",[...this._toNodeList(c("Tag Names"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#attributes"},"{ 'class': `block tx-t-1`, 'href': `#attributes` }",[...this._toNodeList(c("Attributes"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#conditionals"},"{ 'class': `block tx-t-1`, 'href': `#conditionals` }",[...this._toNodeList(c("Conditionals"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#iterations"},"{ 'class': `block tx-t-1`, 'href': `#iterations` }",[...this._toNodeList(c("Iterations"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#trycatch"},"{ 'class': `block tx-t-1`, 'href': `#trycatch` }",[...this._toNodeList(c("Try/Catch"))]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("main",{},"{ }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("api-docs",{},"{ }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},"{ 'class': `tx-primary tx-upper tx-30 py-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(c("Markup Syntax")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Components are the building blocks of Ink files. Documents 
            and page level markup are written in 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText(".ink",!1)]),e.InkRegistry.createText(` files. Components 
            and templates are written in 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText(".ink",!1)]),e.InkRegistry.createText(` files. In both 
            cases, the code is written in a superset of HTML.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The four sections that make up a ink file \u2014 imports, 
            script, styles and markup \u2014 are all optional and can be 
            used in any order.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Code Structure",class:"py-20"},"{ 'title': `Code Structure`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,detab:14},"{ 'numbers': true, 'detab': 14 }",[...this._toNodeList(`
              <!-- imports go here -->

              <style>
                /* styles go here */
              </style>

              <script>
                // logic goes here
              </script>
              
              <!-- HTML goes here -->
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"imports"},"{ 'name': `imports` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(c("Imports")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Imports are used to include additional components, templates 
            and stylesheets in the current component. Components can 
            be imported as a `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("template",!1)]),e.InkRegistry.createText(` or 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("component",!1)]),e.InkRegistry.createText(` type.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Import Examples",class:"py-20"},"{ 'title': `Import Examples`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},"{ 'class': `scroll-auto`, 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/prism.min.css" />
              <link rel="stylesheet" type="text/css" href="/styles/layout.css" />
              <link rel="import" type="template" href="@/components/html-head.ink" />
              <link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />

              <style>
                /* styles go here */
              </style>

              <script>
                // logic goes here
              </script>
              
              <!-- HTML goes here -->
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("rel",!1)]),e.InkRegistry.createText(` attribute 
            specifies the relationship between the current document and 
            the linked resource. 
            
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText('rel="import"',!1)]),e.InkRegistry.createText(` denotes
            that the imported resource is a component or template.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("type",!1)]),e.InkRegistry.createText(` 
            attribute specifies the type of the linked resource. 
            
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText('type="component"',!1)]),e.InkRegistry.createText(` 
            imports a web component that can be used as regular markup
            with attributes and children. 
            
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText('type="template"',!1)]),e.InkRegistry.createText(` 
            imports a template partial that can be included in the current 
            markup. Template partials do not process attributes or children
            if given.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("href",!1)]),e.InkRegistry.createText(` attribute specifies
            the URL of the linked resource. The 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("name",!1)]),e.InkRegistry.createText(`
            attribute specifies the tag name of the imported component or template.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"styles"},"{ 'name': `styles` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(c("Styles")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            CSS styles inside a `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<style>")]),e.InkRegistry.createText(` 
            block enables the native `,!1),e.InkRegistry.createElement("a",{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM"},"{ 'target': `_blank`, 'href': `https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM` }",[e.InkRegistry.createText("shadow DOM",!1)]),e.InkRegistry.createText(` and will be scoped only to that component. 
            Additionally styles defined outside of the component such as 
            global styles will not affect the component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            External stylesheets can be imported using the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<link>")]),e.InkRegistry.createText(` tag or using 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("@import()")]),e.InkRegistry.createText(` CSS directive. 
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            You can use host selectors to style an element from within 
            a component. The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList(":host")]),e.InkRegistry.createText(` 
            pseudo-class always applies styles to the root element of the 
            web component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Using :host",class:"py-20"},"{ 'title': `Using :host`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <style>
                :host {
                  display: block;
                }
              </style>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            You can also add conditional styles using the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList(":host")]),e.InkRegistry.createText(` selector function. 
            This can be used to style the host so long as it matches the 
            given selector. For example, it can be used to select for 
            hosts that have a given attribute or class.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:":host Conditionals",class:"py-20"},"{ 'title': `:host Conditionals`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <style>
                :host([active]) {
                  background-color: #333;
                  color: #FFF;
                }
                :host(.active) {
                  background-color: #333;
                  color: #FFF;
                }
              </style>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"scripts"},"{ 'name': `scripts` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(c("Scripts")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<script>")]),e.InkRegistry.createText(` block is used 
            to write TypeScript logic for the component. The script block 
            can be used to define variables, functions, and event listeners.
            Variables declared (or imported) at the top level are 
            'visible' from the component's markup. 
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Top-Level Variables",class:"py-20"},"{ 'title': `Top-Level Variables`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <script>
                const title = 'Hello World';
              </script>

              <h1>{title}</h1>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<script>")]),e.InkRegistry.createText(` block can also 
            be used to import variables from other components to be used
            in the markup.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Importing Files",class:"py-20"},"{ 'title': `Importing Files`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},"{ 'class': `scroll-auto`, 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <script>
                import getTitle from './getTitle';
                const title = getTitle();
              </script>

              <h1 title={title}>{title}</h1>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            You can use `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("@/")]),e.InkRegistry.createText(` to prefix the 
            current working directory. This is useful when importing
            files completely in a separate directory in your project
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"@ Imports",class:"py-20"},"{ 'title': `@ Imports`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},"{ 'class': `scroll-auto`, 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <script>
                import getTitle from '@/data/getTitle';
                const title = getTitle();
              </script>

              <h1 title={title}>{title}</h1>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"markup"},"{ 'name': `markup` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(c("Markup")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            In order to be closer to the native, Ink follows the same 
            standards and conventions as HTML5 web components. Ink 
            components are compiled to native web components that possibly 
            can be used in other projects any modern browser.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"tagnames"},"{ 'name': `tagnames` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},"{ 'class': `tx-t-1 tx-upper tx-22 pt-40 pb-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(c("Tag Names")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            For web components it's recommended that tag names must have 
            at least one dash (-) in them. As such you probably want to 
            name your element with two distinct words like 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("i18n-translate")]),e.InkRegistry.createText(`. You can 
            use as many dashes as you want, you're not limited to one. 
            Some specific rules to follow in order to make a valid tag 
            name:
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ul",{},"{ }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              It must use all lowercase characters of the alphabet (a-z).
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              It must contain at least one dash (-). Ink will 
              auto prefix component names based on your configuration.
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              It must not be an already reserved tag name including 
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("annotation-xml",!1)]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("color-profile",!1)]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("font-face",!1)]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("font-face-src",!1)]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("font-face-uri",!1)]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("font-face-format",!1)]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("font-face-name",!1)]),e.InkRegistry.createText(`, and 
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("missing-glyph",!1)]),e.InkRegistry.createText(`.
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              It must not contain symbols, like =, @, $.
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              It can contain underscores, and numbers.
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              It can contain characters from different alphabets, 
              such as \xE9, \xF0, \xF6, \u7231.
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Additionally, Ink works best with correct markup. The 
            following standards should be followed:
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ul",{},"{ }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              Self closing tags like 
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<img />")]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<link />")]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<meta />")]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<input />")]),e.InkRegistry.createText(`
              must have a slash before the closing.
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              When using tables, rows should be wrapped in a 
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<tbody>")]),e.InkRegistry.createText(` tag and cells
              should be wrapped in a `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<tr>")]),e.InkRegistry.createText(` 
              tag. ie. `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<table><tbody><tr><td>")]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              When using lists, items should be wrapped in a 
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<ul>")]),e.InkRegistry.createText(` or 
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<ol>")]),e.InkRegistry.createText(` tags.
              ie. `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<ul><li>")]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("element-alert",{solid:!0,curved:!0,secondary:!0,class:"my-20 tx-lh-24"},"{ 'solid': true, 'curved': true, 'secondary': true, 'class': `my-20 tx-lh-24` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("element-icon",{name:"exclamation-triangle"},"{ 'name': `exclamation-triangle` }"),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("strong",{},"{ }",[e.InkRegistry.createText("Warning:",!1)]),e.InkRegistry.createText(` Any markup auto corrected by browser will cause data syncing 
            issues with Ink.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Ink components can loosely be self closing
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<i18n-translate />")]),e.InkRegistry.createText(`
            or expressed as a block
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<i18n-translate></i18n-translate>")]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"attributes"},"{ 'name': `attributes` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},"{ 'class': `tx-t-1 tx-upper tx-22 pt-40 pb-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(c("Attributes")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Markup Expressions"},"{ 'title': `Markup Expressions` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},"{ 'class': `scroll-auto`, 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <a title={title} {href} {...attributes}>
                {title}
              </a>
              <i18n-translate title=title>
                {detail}
              </i18n-translate>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Attributes can be bound to expressions using the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("{}")]),e.InkRegistry.createText(` syntax. 
            Expressions can be variables, functions, or any valid 
            JavaScript expression. By default, attributes work exactly 
            like their HTML counterparts.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{trim:!0},"{ 'trim': true }",[...this._toNodeList(`
              <button type="button" disabled>Submit</button>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Traditional HTML attributes can be assigned string values or 
            no value evaluates as `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("true")]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{trim:!0},"{ 'trim': true }",[...this._toNodeList(`
            <a title={title}>Click</a>
          `)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Attributes can be assigned variable names.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{trim:!0},"{ 'trim': true }",[...this._toNodeList(`
            <a title=title>Click</a>
          `)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Variable names do not need to be wrapped in curly braces
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("{}")]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{trim:!0},"{ 'trim': true }",[...this._toNodeList(`
            <a {title}>Click</a>
          `)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Attributes with the same name as a variable can be assigned
            by just wrapping curly braces. ie. 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("{title}")]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{trim:!0,detab:14},"{ 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <script>
                const attributes = { target: '_blank' };
              </script>
              <a {...attributes}>Click</a>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Spread operators can be used to assign multiple attributes.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <script>
                let count = 10
                const metadata = { foo: 'bar', baz: 1, qux: true };
                const data = () => metadata
              </script>
              <a {count} get={data} data-meta={metadata} disable={count < 10}>
                Click
              </a>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            You can assign any valid JavaScript expression to an attribute.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"conditionals"},"{ 'name': `conditionals` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},"{ 'class': `tx-t-1 tx-upper tx-22 pt-40 pb-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(c("Conditionals")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Conditionals",class:"py-20"},"{ 'title': `Conditionals`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},"{ 'class': `scroll-auto`, 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <if true={count > 10}>
                <p>Count is greater than 10</p>
              <elif true={count < 5} />
                <p>Count is less than 5</p>
              <else />
                <p>Count is between 5 and 10</p>
              </if>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Conditionals can be used to show or hide elements based on 
            the value of a variable.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <if true={count > 10}>
                <p>Count is greater than 10</p>
              </if>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The basic syntax for an if statement looks like this and can be 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("truesy")]),e.InkRegistry.createText(` or 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("falsey")]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <if false={count > 10}>
                <p>Count is not greater than 10</p>
              </if>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            You can also use the `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("false")]),e.InkRegistry.createText(`
            attribute to negate the condition.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <if true={count > 10}>
                <p>Count is greater than 10</p>
              <else />
                <p>Count is less than or equal to 10</p>
              </if>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            You can use the `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("else")]),e.InkRegistry.createText(` block to 
            show content when the condition is false.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:12},"{ 'numbers': true, 'trim': true, 'detab': 12 }",[...this._toNodeList(`
            <if true={count > 10}>
              <p>Count is greater than 10</p>
            <elif true={count < 5} />
              <p>Count is less than 5</p>
            </if>
          `)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            You can use the `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("elif")]),e.InkRegistry.createText(` block to 
            show content when the previous condition is false.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"iterations"},"{ 'name': `iterations` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},"{ 'class': `tx-t-1 tx-upper tx-22 pt-40 pb-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(c("Iterations")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Each",class:"py-20"},"{ 'title': `Each`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},"{ 'class': `scroll-auto`, 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <each key=index value=article from=articles>
                <h1>#{index + 1} {article.title}</h1>
                <p>{article.body}</p>
              </each>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<each>")]),e.InkRegistry.createText(` block can be used 
            to iterate over an array of items or objects.
            The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("from")]),e.InkRegistry.createText(` attribute value is 
            required and can be an array, object or JavaScript expression 
            that evaluates to an array or object. Both the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("key")]),e.InkRegistry.createText(` and 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("value")]),e.InkRegistry.createText(` attributes are optional.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <each value={article} from={articles}>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
              </each>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The value of `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("value")]),e.InkRegistry.createText(`, in this 
            case `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("article")]),e.InkRegistry.createText(` can be used 
            only with in the block. This can be any valid JavaScript 
            variable name.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:12},"{ 'numbers': true, 'trim': true, 'detab': 12 }",[...this._toNodeList(`
            <each key={index} from={[1, 2, 3]}>
              <h1>#{index} ???</h1>
            </each>
          `)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The value of `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("key")]),e.InkRegistry.createText(`, in this 
            case `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("index")]),e.InkRegistry.createText(` can be used 
            only with in the block. This can be any valid JavaScript 
            variable name.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"trycatch"},"{ 'name': `trycatch` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},"{ 'class': `tx-t-1 tx-upper tx-22 pt-40 pb-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(c("Try/Catch")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Try/Catch Example",class:"py-20"},"{ 'title': `Try/Catch Example`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <try>
                <p>{mayCauseError()}</p>
              <catch error={e} />
                <p>Error: {e.message}</p>
              </try>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<try><catch>")]),e.InkRegistry.createText(` block can 
            be used to catch errors that occur in the block. The 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<catch>")]),e.InkRegistry.createText(` block is required and 
            can be used to handle the error.

            The value of `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("error")]),e.InkRegistry.createText(`, in the  
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<catch>")]),e.InkRegistry.createText(` block in this case
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("e")]),e.InkRegistry.createText(` is an 
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},"{ 'lang': `js`, 'inline': true }",[...this._toNodeList("Error")]),e.InkRegistry.createText(` object
            that can only be used with in the block. 
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("nav",{class:"flex"},"{ 'class': `flex` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/getting-started.html"},"{ 'class': `tx-primary py-40`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-left",theme:"tx-1"},"{ 'name': `chevron-left`, 'theme': `tx-1` }"),e.InkRegistry.createText(`
              `,!1),...this._toNodeList(c("Getting Started")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/state-management.html"},"{ 'class': `flex-grow tx-right tx-primary py-40`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
              `,!1),...this._toNodeList(c("State Management")),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-right",theme:"tx-1"},"{ 'name': `chevron-right`, 'theme': `tx-1` }"),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("footer",{class:"foot"},"{ 'class': `foot` }",[]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return xe(We);})();
