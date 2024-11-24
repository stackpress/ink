var InkAPI=(()=>{var oe=Object.create;var y=Object.defineProperty;var fe=Object.getOwnPropertyDescriptor;var ue=Object.getOwnPropertyNames;var me=Object.getPrototypeOf,de=Object.prototype.hasOwnProperty;var i=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),xe=(a,t)=>{for(var s in t)y(a,s,{get:t[s],enumerable:!0})},V=(a,t,s,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let c of ue(t))!de.call(a,c)&&c!==s&&y(a,c,{get:()=>t[c],enumerable:!(r=fe(t,c))||r.enumerable});return a};var Y=(a,t,s)=>(s=a!=null?oe(me(a)):{},V(t||!a||!a.__esModule?y(s,"default",{value:a,enumerable:!0}):s,a)),pe=a=>V(y({},"__esModule",{value:!0}),a);var Q=i(_=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});_.status=he;var K={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};_.default=K;function he(a){return Object.values(K).find(t=>t.code===a)}});var w=i(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});var Te=Q(),I=class a extends Error{static try(t){return{catch:s=>{try{return t()}catch(r){if(r instanceof a)return s(r,r.type);if(r instanceof Error){let c=a.upgrade(r);return s(c,c.type)}else if(typeof r=="string"){let c=a.for(r);return s(c,c.type)}return s(r,"unknown")}}}}static for(t,...s){return s.forEach(function(r){t=t.replace("%s",String(r))}),new this(t)}static forErrors(t){let s=new this("Invalid Parameters");return s.withErrors(t),s}static require(t,s,...r){if(!t){for(let c of r)s=s.replace("%s",c);throw new this(s)}}static upgrade(t,s=500){if(t instanceof a)return t;let r=new this(t.message,s);return r.name=t.name,r.stack=t.stack,r}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,s=500){var r;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=s,this._status=((r=(0,Te.status)(s))===null||r===void 0?void 0:r.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,s=0){let r={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,s)};return Object.keys(this._errors).length>0&&(r.errors=this._errors),r}trace(t=0,s=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,s||this.stack.length).map(c=>c.trim()).map(c=>{if(!c.startsWith("at"))return!1;let[f,L,k]=c.split(" ");k||(k=`(${L})`,L="<none>");let[ce,ne,ie]=k.substring(1,k.length-1).split(":");return{method:L,file:ce,line:parseInt(ne)||0,char:parseInt(ie)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,s){return this._start=t,this._end=s,this}};O.default=I});var z=i(m=>{"use strict";var be=m&&m.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(m,"__esModule",{value:!0});var Ee=be(w()),D=class extends Ee.default{};m.default=D});var P=i(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});var j=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(s=>this._elements.add(s))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};A.default=j});var d=i(S=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0});var ge=new Map;S.default=ge});var R=i(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});var C=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,s=!1){this._escape=s,this._value=t}toString(){return this.value}};M.default=C});var q=i(x=>{"use strict";var ke=x&&x.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(x,"__esModule",{value:!0});var ye=ke(P()),_e=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],U=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,s={},r="",c=[]){this._attributes={},this._name=t,this._attributes=s,this._props=r,this._children=new ye.default(c)}toString(){let t=Object.entries(this._attributes),s=t.length>0?" "+t.map(([c,f])=>{if(typeof f=="string"&&!/["<>\n]/.test(f))return`${c}="${f}"`;if(typeof f=="boolean")return f?c:""}).join(" "):"";if(_e.includes(this._name))return`<${this._name}${s} />`;let r=this._children.toString();return`<${this._name}${s}>${r}</${this._name}>`}};x.default=U});var $=i(p=>{"use strict";var X=p&&p.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(p,"__esModule",{value:!0});var ve=X(R()),J=X(q()),B=class{static render(t){return t.filter(Boolean).map(s=>s.toString()).join("")}static registry(t,s=new Set){return t.forEach(r=>{r instanceof J.default&&(["html","head","body"].includes(r.name)||s.add(r),r.name!=="head"&&r.children.length>0&&this.registry(r.children.toArray(),s))}),s}static createElement(t,s,r,c=[]){return new J.default(t,s,r,c)}static createText(t,s=!0){return new ve.default(t,s)}};p.default=B});var Z=i(h=>{"use strict";var H=h&&h.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(h,"__esModule",{value:!0});var Ne=H(w()),u=H(d()),F=H($()),G=class{bindings(t={}){u.default.set("props",t||{}),u.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(u.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(c=>c[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let s=F.default.registry(this.template());return`{ ${Array.from(s.values()).map((c,f)=>c.props!=="{ }"?`'${f}': ${c.props}`:"").filter(c=>c!=="").join(", ")} }`}render(t={}){u.default.set("props",t||{}),u.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(u.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(c=>c[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let s=this.template(),r=F.default.render(s).trim();if(!r.toLowerCase().startsWith("<html"))throw Ne.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${r}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(s=>typeof s=="object"&&typeof s.nodeType=="number")?t:[F.default.createText(String(t))]}};h.default=G});var ee=i(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.InkEmitter=void 0;var v=class{emit(t,s){return this}on(t,s){return this}once(t,s){return this}unbind(t,s){return this}};T.InkEmitter=v;var Le=new v;T.default=Le});var te=i(b=>{"use strict";var Ie=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var Oe=Ie(d());function we(a){let t=Oe.default.get("env")||{};return a?t[a]||null:t}b.default=we});var ae=i(E=>{"use strict";var De=E&&E.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(E,"__esModule",{value:!0});E.default=Ae;var je=De(d());function Ae(){return je.default.get("props")||{}}});var re=i(n=>{"use strict";var Pe=n&&n.__createBinding||(Object.create?function(a,t,s,r){r===void 0&&(r=s);var c=Object.getOwnPropertyDescriptor(t,s);(!c||("get"in c?!t.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return t[s]}}),Object.defineProperty(a,r,c)}:function(a,t,s,r){r===void 0&&(r=s),a[r]=t[s]}),Se=n&&n.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),Ce=n&&n.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(s){var r=[];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(r[r.length]=c);return r},a(t)};return function(t){if(t&&t.__esModule)return t;var s={};if(t!=null)for(var r=a(t),c=0;c<r.length;c++)r[c]!=="default"&&Pe(s,t,r[c]);return Se(s,t),s}}(),o=n&&n.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(n,"__esModule",{value:!0});n.InkText=n.InkException=n.InkEmitter=n.InkElement=n.InkRegistry=n.InkDocument=n.InkCollection=n.props=n.emitter=n.env=n.data=void 0;var Me=o(z());n.InkException=Me.default;var Re=o(P());n.InkCollection=Re.default;var Ue=o(Z());n.InkDocument=Ue.default;var qe=o($());n.InkRegistry=qe.default;var Be=o(q());n.InkElement=Be.default;var se=Ce(ee());n.emitter=se.default;Object.defineProperty(n,"InkEmitter",{enumerable:!0,get:function(){return se.InkEmitter}});var $e=o(R());n.InkText=$e.default;var Fe=o(d());n.data=Fe.default;var Ge=o(te());n.env=Ge.default;var He=o(ae());n.props=He.default});var W=i((nt,le)=>{le.exports={...re()}});var Ve={};xe(Ve,{default:()=>N});var e=Y(W()),g=Y(W());var l=function(a,...t){let s=We(a);for(let r=0;r<t.length;r++)s=s.replace("%s",String(t[r]));return s},We=function(a){return a};var N=class extends e.InkDocument{id(){return"82c040caab27f511cc51"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
  .col-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }`}template(){let t="/docs/state-management.html",s=l("State Management - Ink reactive web component template engine."),r=l("Learn how to manage states in Ink."),c=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("html",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("head",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{charset:"utf-8"},"{ 'charset': `utf-8` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},"{ 'name': `viewport`, 'content': `width=device-width, initial-scale=1` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("title",{},"{ }",[...this._toNodeList(s)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"description",content:r},"{ 'name': `description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:title",content:s},"{ 'property': `og:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:description",content:r},"{ 'property': `og:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'property': `og:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`},"{ 'property': `og:url`, 'content': `https://stackpress.github.io/ink${url}` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:type",content:"website"},"{ 'property': `og:type`, 'content': `website` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:card",content:"summary"},"{ 'name': `twitter:card`, 'content': `summary` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:site",content:"@stackpress"},"{ 'name': `twitter:site`, 'content': `@stackpress` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:title",content:s},"{ 'name': `twitter:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:description",content:r},"{ 'name': `twitter:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'name': `twitter:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"},"{ 'rel': `favicon`, 'href': `/ink/favicon.ico` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"},"{ 'rel': `shortcut icon`, 'type': `image/png`, 'href': `/ink/favicon.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",media:"(prefers-color-scheme:light)",href:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css"},"{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:light)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",media:"(prefers-color-scheme:dark)",href:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css"},"{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:dark)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/styles/global.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,g.env)("BUILD_ID")}.css`},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/build/client/${env('BUILD_ID')}.css` }"),e.InkRegistry.createText(`
  
  `,!1),e.InkRegistry.createElement("script",{"data-app":(0,g.env)("APP_DATA"),src:`/ink/build/client/${(0,g.env)("BUILD_ID")}.js`},"{ 'data-app': env('APP_DATA'), 'src': `/ink/build/client/${env('BUILD_ID')}.js` }"),e.InkRegistry.createText(`
  `,!1),...(0,g.env)("NODE_ENV")==="development"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("script",{src:"/dev.js"},"{ 'src': `/dev.js` }"),e.InkRegistry.createText(`
  `,!1)]:[],e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},"{ 'class': `light bg-t-0 tx-t-1 tx-arial` }",[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("panel-layout",{},"{ }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("header",{},"{ }",[e.InkRegistry.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},"{ 'class': `flex flex-center-y px-20 py-15 m-0 bg-t-1` }",[e.InkRegistry.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:c},"{ 'class': `fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1`, 'click': toggle }",[]),e.InkRegistry.createText(`
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
  `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:c},"{ 'class': `fas fa-fw fa-chevron-left cursor-pointer none md-inline-block`, 'click': toggle }",[]),e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("nav",{class:"bg-t-1 scroll-auto h-calc-full-60"},"{ 'class': `bg-t-1 scroll-auto h-calc-full-60` }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(l("Introduction")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/index.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(l("Features")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/markup-syntax.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/markup-syntax.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/component-strategy.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/component-strategy.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/compiler-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/compiler-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/client-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/client-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(l("Usage")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/template-engine.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/template-engine.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/single-page.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/single-page.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/static-site.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/static-site.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/component-publisher.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/component-publisher.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold mb-100`, 'href': `/ink/docs/developer-tools.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},"{ 'class': `block tx-info py-10 pl-10 mb-100`, 'href': `/ink/docs/developer-tools.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(l("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
`,!1)])]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("aside",{right:!0},"{ 'right': true }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("menu",{class:"m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto"},"{ 'class': `m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto` }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h6",{class:"tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper"},"{ 'class': `tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("On this page")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("nav",{class:"tx-14 tx-lh-32"},"{ 'class': `tx-14 tx-lh-32` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#props"},"{ 'class': `block tx-t-0`, 'href': `#props` }",[...this._toNodeList(l("Props"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#signals"},"{ 'class': `block tx-t-0`, 'href': `#signals` }",[...this._toNodeList(l("Signals"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#events"},"{ 'class': `block tx-t-0`, 'href': `#events` }",[...this._toNodeList(l("Events"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#classnames"},"{ 'class': `block tx-t-0`, 'href': `#classnames` }",[...this._toNodeList(l("Class Names"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#children"},"{ 'class': `block tx-t-0`, 'href': `#children` }",[...this._toNodeList(l("Children"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#component"},"{ 'class': `block tx-t-0`, 'href': `#component` }",[...this._toNodeList(l("Component"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#env"},"{ 'class': `block tx-t-0`, 'href': `#env` }",[...this._toNodeList(l("Env Variables"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#this"},"{ 'class': `block tx-t-0`, 'href': `#this` }",[...this._toNodeList(l("this"))]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("main",{},"{ }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("api-docs",{},"{ }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},"{ 'class': `tx-primary tx-upper tx-30 py-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("State Management")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Ink provides several ways to manage properties and states 
            in your components.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"props"},"{ 'name': `props` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Props")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",trim:!0,detab:12},"{ 'lang': `js`, 'trim': true, 'detab': 12 }",[...this._toNodeList(`
            import { props } from '@stackpress/ink';
            const { title, description } = props();
          `)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("props",!1)]),e.InkRegistry.createText(` function can be used to access the 
            properties of a component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"signals"},"{ 'name': `signals` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Signals")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Ink provides a reactive state management system that allows 
            you to manage states in your components. The system is based 
            on signals, which are reactive variables that can be used to 
            store and update data. Signals can be used to store any type 
            of data, including numbers, strings, objects, arrays, and even 
            functions.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{trim:!0,detab:14},"{ 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <script>
                import { signal } from '@stackpress/ink';
                const count = signal<number>(1);
              </script>
              <em class=classlist>Count #{count.value}</em>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            To create a signal, you can use the 
            `,!1),e.InkRegistry.createElement("ide-code",{type:"javascript",inline:!0},"{ 'type': `javascript`, 'inline': true }",[...this._toNodeList("signal()")]),e.InkRegistry.createText(` 
            function, which takes an initial value as an argument. Signals 
            can be read and updated using the `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("value",!1)]),e.InkRegistry.createText(` property. 
            Setting the value will trigger a re-render of the component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Signals can be used in your components to manage states and 
            trigger updates when the state changes. You can use signals to 
            store data that needs to be shared between components, or to 
            trigger side effects when the state changes. Signals can also 
            be used to store data that needs to be persisted across page 
            reloads, such as form data or user preferences.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"events"},"{ 'name': `events` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Events")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{trim:!0,number:!0,detab:14},"{ 'trim': true, 'number': true, 'detab': 14 }",[...this._toNodeList(`
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

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            For example, you can use the `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("click",!1)]),e.InkRegistry.createText(` 
            attribute assigned to a function to trigger a function when 
            the element is clicked. In combination with updating a signal, 
            can trigger a re-render of the component. The following event 
            attributes are supported.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"col-2"},"{ 'class': `col-2` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(l("Mouse Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},"{ 'class': `tx-lh-36` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("click",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("dblclick",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("mousedown",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("mouseup",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("mousemove",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("mouseover",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("mouseout",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("wheel",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(l("Keyboard Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},"{ 'class': `tx-lh-36` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("keydown",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("keypress",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("keyup",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(l("Form Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},"{ 'class': `tx-lh-36` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("blur",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("change",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("contextmenu",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("focus",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("input",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("submit",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("invalid",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("reset",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("search",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("select",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(l("Clipboard Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},"{ 'class': `tx-lh-36` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("copy",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("cut",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("paste",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(l("Transition Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},"{ 'class': `tx-lh-36` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("transitionend",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(l("Drag Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},"{ 'class': `tx-lh-36` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("drag",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("dragstart",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("dragend",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("dragover",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("dragenter",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("dragleave",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("drop",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("scroll",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(l("Media Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},"{ 'class': `tx-lh-36` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("durationchange",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("ended",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("error",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("loadeddata",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("loadedmetadata",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("loadstart",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("pause",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("play",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("playing",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("progress",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("ratechange",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("seeked",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("seeking",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("stalled",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("suspend",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("timeupdate",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("volumechange",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("waiting",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(l("Animation Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},"{ 'class': `tx-lh-36` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("animationstart",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("animationend",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("animationiteration",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"classnames"},"{ 'name': `classnames` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Class Names")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",trim:!0,detab:14},"{ 'lang': `js`, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              import { classnames } from '@stackpress/ink';
              const classlist = classnames(); //--> 'class1 class2 class3'
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("classnames",!1)]),e.InkRegistry.createText(` function can be used to generate 
            a list of class names based on the properties of an object.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"children"},"{ 'name': `children` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Children")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",trim:!0,detab:14},"{ 'lang': `js`, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              import { children } from '@stackpress/ink';
              const childlist = children(); //--> Node[]
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("children",!1)]),e.InkRegistry.createText(` function can be used to render 
            child components in a parent component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"component"},"{ 'name': `component` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Component")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",trim:!0,detab:14},"{ 'lang': `js`, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              import { component } from '@stackpress/ink';
              const button = component(); //--> HTMLElement
              console.log(button.querySelector('span'));
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            For other edge cases, the `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("component",!1)]),e.InkRegistry.createText(` function 
            can be used to get raw access to the component's 
            functionality.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"env"},"{ 'name': `env` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("Environment Variables")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{trim:!0,detab:12},"{ 'trim': true, 'detab': 12 }",[...this._toNodeList(`
            <script>
              import { env } from '@stackpress/ink';
              const { BUILD_ID, NODE_ENV } = env();
            </script>
            <if true={NODE_ENV === 'development'}>
              <p>Development mode</p>
            </if>
          `)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("env",!1)]),e.InkRegistry.createText(` function can be used to access environment 
            variables in a component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"this"},"{ 'name': `this` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(l("this")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"What's this",class:"py-20"},"{ 'title': `What's this`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,detab:14},"{ 'numbers': true, 'detab': 14 }",[...this._toNodeList(`
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

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("this",!1)]),e.InkRegistry.createText(` refers to the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("InkComponent",!1)]),e.InkRegistry.createText(` that extends 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("HTMLElement",!1)]),e.InkRegistry.createText(`. This means all
            components in Ink are in fact are HTML elements and has
            access to the common functionality like 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("innerHTML",!1)]),e.InkRegistry.createText(` and
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("querySelector()")]),e.InkRegistry.createText(` to name a 
            few. `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("InkComponent",!1)]),e.InkRegistry.createText(` has the
            additional following properties and methods that you can access
            using `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("this",!1)]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("api-ui",{start:"InkComponent"},"{ 'start': `InkComponent` }"),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("element-alert",{curved:!0,info:!0,class:"py-20 tx-lh-24"},"{ 'curved': true, 'info': true, 'class': `py-20 tx-lh-24` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("element-icon",{name:"info-circle"},"{ 'name': `info-circle` }"),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("strong",{},"{ }",[e.InkRegistry.createText("Info:",!1)]),e.InkRegistry.createText(` You can discover more methods and properties
            of the `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("HTMLElement",!1)]),e.InkRegistry.createText(` class on the
            `,!1),e.InkRegistry.createElement("a",{target:"_blank",class:"tx-white tx-underline",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"},"{ 'target': `_blank`, 'class': `tx-white tx-underline`, 'href': `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement` }",[e.InkRegistry.createText(`
              MDN Web Docs
            `,!1)]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("nav",{class:"flex"},"{ 'class': `flex` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/markup-syntax.html"},"{ 'class': `tx-primary py-40`, 'href': `/ink/docs/markup-syntax.html` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-left",theme:"tx-1"},"{ 'name': `chevron-left`, 'theme': `tx-1` }"),e.InkRegistry.createText(`
              `,!1),...this._toNodeList(l("Markup Syntax")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/component-strategy.html"},"{ 'class': `flex-grow tx-right tx-primary py-40`, 'href': `/ink/docs/component-strategy.html` }",[e.InkRegistry.createText(`
              `,!1),...this._toNodeList(l("Component Strategy")),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-right",theme:"tx-1"},"{ 'name': `chevron-right`, 'theme': `tx-1` }"),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("footer",{class:"foot"},"{ 'class': `foot` }",[]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return pe(Ve);})();
