var InkAPI=(()=>{var oe=Object.create;var _=Object.defineProperty;var fe=Object.getOwnPropertyDescriptor;var ue=Object.getOwnPropertyNames;var de=Object.getPrototypeOf,me=Object.prototype.hasOwnProperty;var i=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports),xe=(s,t)=>{for(var a in t)_(s,a,{get:t[a],enumerable:!0})},Y=(s,t,a,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ue(t))!me.call(s,r)&&r!==a&&_(s,r,{get:()=>t[r],enumerable:!(l=fe(t,r))||l.enumerable});return s};var z=(s,t,a)=>(a=s!=null?oe(de(s)):{},Y(t||!s||!s.__esModule?_(a,"default",{value:s,enumerable:!0}):a,s)),pe=s=>Y(_({},"__esModule",{value:!0}),s);var K=i(y=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});y.status=be;var J={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};y.default=J;function be(s){return Object.values(J).find(t=>t.code===s)}});var D=i(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});var he=K(),I=class s extends Error{static try(t){return{catch:a=>{try{return t()}catch(l){if(l instanceof s)return a(l,l.type);if(l instanceof Error){let r=s.upgrade(l);return a(r,r.type)}else if(typeof l=="string"){let r=s.for(l);return a(r,r.type)}return a(l,"unknown")}}}}static for(t,...a){return a.forEach(function(l){t=t.replace("%s",String(l))}),new this(t)}static forErrors(t){let a=new this("Invalid Parameters");return a.withErrors(t),a}static require(t,a,...l){if(!t){for(let r of l)a=a.replace("%s",r);throw new this(a)}}static upgrade(t,a=500){if(t instanceof s)return t;let l=new this(t.message,a);return l.name=t.name,l.stack=t.stack,l}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,a=500){var l;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=a,this._status=((l=(0,he.status)(a))===null||l===void 0?void 0:l.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,a=0){let l={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,a)};return Object.keys(this._errors).length>0&&(l.errors=this._errors),l}trace(t=0,a=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,a||this.stack.length).map(r=>r.trim()).map(r=>{if(!r.startsWith("at"))return!1;let[o,O,E]=r.split(" ");E||(E=`(${O})`,O="<none>");let[ce,ne,ie]=E.substring(1,E.length-1).split(":");return{method:O,file:ce,line:parseInt(ne)||0,char:parseInt(ie)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,a){return this._start=t,this._end=a,this}};N.default=I});var Q=i(d=>{"use strict";var Te=d&&d.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(d,"__esModule",{value:!0});var ge=Te(D()),L=class extends ge.default{};d.default=L});var j=i(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});var A=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(a=>this._elements.add(a))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};P.default=A});var m=i(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});var ke=new Map;R.default=ke});var M=i(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});var S=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,a=!1){this._escape=a,this._value=t}toString(){return this.value}};C.default=S});var q=i(x=>{"use strict";var Ee=x&&x.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(x,"__esModule",{value:!0});var _e=Ee(j()),ye=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],U=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,a={},l="",r=[]){this._attributes={},this._name=t,this._attributes=a,this._props=l,this._children=new _e.default(r)}toString(){let t=Object.entries(this._attributes),a=t.length>0?" "+t.map(([r,o])=>{if(typeof o=="string"&&!/["<>\n]/.test(o))return`${r}="${o}"`;if(typeof o=="boolean")return o?r:""}).join(" "):"";if(ye.includes(this._name))return`<${this._name}${a} />`;let l=this._children.toString();return`<${this._name}${a}>${l}</${this._name}>`}};x.default=U});var G=i(p=>{"use strict";var X=p&&p.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(p,"__esModule",{value:!0});var ve=X(M()),V=X(q()),B=class{static render(t){return t.filter(Boolean).map(a=>a.toString()).join("")}static registry(t,a=new Set){return t.forEach(l=>{l instanceof V.default&&(["html","head","body"].includes(l.name)||a.add(l),l.name!=="head"&&l.children.length>0&&this.registry(l.children.toArray(),a))}),a}static createElement(t,a,l,r=[]){return new V.default(t,a,l,r)}static createText(t,a=!0){return new ve.default(t,a)}};p.default=B});var Z=i(b=>{"use strict";var H=b&&b.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(b,"__esModule",{value:!0});var we=H(D()),u=H(m()),$=H(G()),F=class{bindings(t={}){u.default.set("props",t||{}),u.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(u.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(r=>r[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let a=$.default.registry(this.template());return`{ ${Array.from(a.values()).map((r,o)=>r.props!=="{ }"?`'${o}': ${r.props}`:"").filter(r=>r!=="").join(", ")} }`}render(t={}){u.default.set("props",t||{}),u.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(u.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(r=>r[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let a=this.template(),l=$.default.render(a).trim();if(!l.toLowerCase().startsWith("<html"))throw we.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${l}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(a=>typeof a=="object"&&typeof a.nodeType=="number")?t:[$.default.createText(String(t))]}};b.default=F});var ee=i(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});h.InkEmitter=void 0;var v=class{emit(t,a){return this}on(t,a){return this}once(t,a){return this}unbind(t,a){return this}};h.InkEmitter=v;var Oe=new v;h.default=Oe});var te=i(T=>{"use strict";var Ie=T&&T.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(T,"__esModule",{value:!0});var Ne=Ie(m());function De(s){let t=Ne.default.get("env")||{};return s?t[s]||null:t}T.default=De});var se=i(g=>{"use strict";var Le=g&&g.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(g,"__esModule",{value:!0});g.default=Pe;var Ae=Le(m());function Pe(){return Ae.default.get("props")||{}}});var le=i(c=>{"use strict";var je=c&&c.__createBinding||(Object.create?function(s,t,a,l){l===void 0&&(l=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(s,l,r)}:function(s,t,a,l){l===void 0&&(l=a),s[l]=t[a]}),Re=c&&c.__setModuleDefault||(Object.create?function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}:function(s,t){s.default=t}),Se=c&&c.__importStar||function(){var s=function(t){return s=Object.getOwnPropertyNames||function(a){var l=[];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(l[l.length]=r);return l},s(t)};return function(t){if(t&&t.__esModule)return t;var a={};if(t!=null)for(var l=s(t),r=0;r<l.length;r++)l[r]!=="default"&&je(a,t,l[r]);return Re(a,t),a}}(),f=c&&c.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(c,"__esModule",{value:!0});c.InkText=c.InkException=c.InkEmitter=c.InkElement=c.InkRegistry=c.InkDocument=c.InkCollection=c.props=c.emitter=c.env=c.data=void 0;var Ce=f(Q());c.InkException=Ce.default;var Me=f(j());c.InkCollection=Me.default;var Ue=f(Z());c.InkDocument=Ue.default;var qe=f(G());c.InkRegistry=qe.default;var Be=f(q());c.InkElement=Be.default;var ae=Se(ee());c.emitter=ae.default;Object.defineProperty(c,"InkEmitter",{enumerable:!0,get:function(){return ae.InkEmitter}});var Ge=f(M());c.InkText=Ge.default;var $e=f(m());c.data=$e.default;var Fe=f(te());c.env=Fe.default;var He=f(se());c.props=He.default});var W=i((nt,re)=>{re.exports={...le()}});var Ye={};xe(Ye,{default:()=>w});var e=z(W()),k=z(W());var n=function(s,...t){let a=We(s);for(let l=0;l<t.length;l++)a=a.replace("%s",String(t[l]));return a},We=function(s){return s};var w=class extends e.InkDocument{id(){return"7ad2066fa8e2de93d27d"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/ink/panel.html",a=n("Ink UI - Web Components Meets Atomic Styles."),l=n("Ink UI atomically generates CSS styles and provides out of box web components."),r=()=>{document.querySelector("panel-layout").toggle("left")},o=[{icon:"home",label:"Home",href:"/ink/index.html"},{icon:"book",label:"Docs"}];return[e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("html",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("head",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{charset:"utf-8"},"{ 'charset': `utf-8` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},"{ 'name': `viewport`, 'content': `width=device-width, initial-scale=1` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("title",{},"{ }",[...this._toNodeList(a)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"description",content:l},"{ 'name': `description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:title",content:a},"{ 'property': `og:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:description",content:l},"{ 'property': `og:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'property': `og:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`},"{ 'property': `og:url`, 'content': `https://stackpress.github.io/ink${url}` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:type",content:"website"},"{ 'property': `og:type`, 'content': `website` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:card",content:"summary"},"{ 'name': `twitter:card`, 'content': `summary` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:site",content:"@stackpress"},"{ 'name': `twitter:site`, 'content': `@stackpress` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:title",content:a},"{ 'name': `twitter:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:description",content:l},"{ 'name': `twitter:description`, 'content': description }"),e.InkRegistry.createText(`
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
    `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:r},"{ 'class': `fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1`, 'click': toggle }",[]),e.InkRegistry.createText(`
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
  `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:r},"{ 'class': `fas fa-fw fa-chevron-left cursor-pointer none md-inline-block`, 'click': toggle }",[]),e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("nav",{class:"bg-t-1 scroll-auto h-calc-full-60"},"{ 'class': `bg-t-1 scroll-auto h-calc-full-60` }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(n("Introduction")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/index.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(n("Features")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/markup-syntax.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/markup-syntax.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/component-strategy.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/component-strategy.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/compiler-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/compiler-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/client-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/client-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(n("Usage")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/template-engine.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/template-engine.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/single-page.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/single-page.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/static-site.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/static-site.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/component-publisher.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/component-publisher.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold mb-100`, 'href': `/ink/docs/developer-tools.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},"{ 'class': `block tx-info py-10 pl-10 mb-100`, 'href': `/ink/docs/developer-tools.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(n("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
`,!1)])]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("main",{},"{ }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("api-docs",{},"{ }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},"{ 'class': `tx-primary tx-upper tx-30 py-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(n("Components")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("section",{class:"flex flex-wrap gap-10"},"{ 'class': `flex flex-wrap gap-10` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-alert",{success:!0},"{ 'success': true }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("element-icon",{name:"check-circle"},"{ 'name': `check-circle` }"),e.InkRegistry.createText(`
                  Good News!
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/alert.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/alert.html` }",[e.InkRegistry.createText(`
                Alerts
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-badge",{warning:!0,curved:!0,class:"mb-10"},"{ 'warning': true, 'curved': true, 'class': `mb-10` }",[e.InkRegistry.createText("999",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/badge.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/badge.html` }",[e.InkRegistry.createText(`
                Badges
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-crumbs",{crumbs:o,block:!0,bold:!0,white:!0,underline:!0,"icon-muted":!0,"link-primary":!0,spacing:2},"{ 'crumbs': crumbs, 'block': true, 'bold': true, 'white': true, 'underline': true, 'icon-muted': true, 'link-primary': true, 'spacing': 2 }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/crumbs.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/crumbs.html` }",[e.InkRegistry.createText(`
                Crumbs
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"info-circle",class:"tx-info"},"{ 'name': `info-circle`, 'class': `tx-info` }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"exclamation-triangle",class:"tx-warning"},"{ 'name': `exclamation-triangle`, 'class': `tx-warning` }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"times-circle",class:"tx-error"},"{ 'name': `times-circle`, 'class': `tx-error` }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"check-circle",class:"tx-success"},"{ 'name': `check-circle`, 'class': `tx-success` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/icon.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/icon.html` }",[e.InkRegistry.createText(`
                Icons
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-loader",{success:!0,size:5,thickness:5,dotted:!0},"{ 'success': true, 'size': 5, 'thickness': 5, 'dotted': true }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-loader",{info:!0,slice:2},"{ 'info': true, 'slice': 2 }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-loader",{warning:!0,dashed:!0},"{ 'warning': true, 'dashed': true }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-loader",{error:!0,dashed:!0,thickness:10,size:10,speed:1500},"{ 'error': true, 'dashed': true, 'thickness': 10, 'size': 10, 'speed': 1500 }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/loader.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/loader.html` }",[e.InkRegistry.createText(`
                Loaders
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-alert",{error:!0},"{ 'error': true }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("element-icon",{name:"times-circle"},"{ 'name': `times-circle` }"),e.InkRegistry.createText(`
                  Errors on Submit
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/notify.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/notify.html` }",[e.InkRegistry.createText(`
                Notify
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-pager",{total:500,range:100,start:90,show:3,next:!0,prev:!0,rewind:!0,forward:!0,white:!0,bold:!0,underline:!0,"bg-info":!0,"border-theme":"bd-2",square:40,select:console.log},"{ 'total': 500, 'range': 100, 'start': 90, 'show': 3, 'next': true, 'prev': true, 'rewind': true, 'forward': true, 'white': true, 'bold': true, 'underline': true, 'bg-info': true, 'border-theme': `bd-2`, 'square': 40, 'select': console.log }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/pager.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/pager.html` }",[e.InkRegistry.createText(`
                Pagers
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120"},"{ 'class': `bg-t-3 h-120` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"relative w-full h-full"},"{ 'class': `relative w-full h-full` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("header",{class:"absolute top-0 left-20p right-0 h-50p b-solid b-t-1"},"{ 'class': `absolute top-0 left-20p right-0 h-50p b-solid b-t-1` }",[e.InkRegistry.createElement("div",{class:"p-5"},"{ 'class': `p-5` }",[e.InkRegistry.createText("Head",!1)])]),e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("aside",{class:"absolute w-20p top-0 bottom-0 left-0 b-solid b-t-1"},"{ 'class': `absolute w-20p top-0 bottom-0 left-0 b-solid b-t-1` }",[e.InkRegistry.createElement("div",{class:"p-5"},"{ 'class': `p-5` }",[e.InkRegistry.createText("Left",!1)])]),e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("aside",{class:"absolute w-30p top-50p bottom-0 right-0 b-solid b-t-1"},"{ 'class': `absolute w-30p top-50p bottom-0 right-0 b-solid b-t-1` }",[e.InkRegistry.createElement("div",{class:"p-5"},"{ 'class': `p-5` }",[e.InkRegistry.createText("Right",!1)])]),e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("main",{class:"absolute top-50p bottom-0 left-20p right-30p b-solid b-t-1"},"{ 'class': `absolute top-50p bottom-0 left-20p right-30p b-solid b-t-1` }",[e.InkRegistry.createElement("div",{class:"p-5"},"{ 'class': `p-5` }",[e.InkRegistry.createText("Main",!1)])]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/panel.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/panel.html` }",[e.InkRegistry.createText(`
                Panels
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-progress",{width:50,info:!0,class:"bg-muted rounded tx-13 h-20 tx-lh-20 w-full-20"},"{ 'width': 50, 'info': true, 'class': `bg-muted rounded tx-13 h-20 tx-lh-20 w-full-20` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/progress.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/progress.html` }",[e.InkRegistry.createText(`
                Progress Bars
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-muted",group:"http",selector:"#http-index-ts"},"{ 'on': true, 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-muted`, 'group': `http`, 'selector': `#http-index-ts` }",[e.InkRegistry.createText(`
                  Tab 1
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-muted",group:"http",selector:"#http-page-ink"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-muted`, 'group': `http`, 'selector': `#http-page-ink` }",[e.InkRegistry.createText(`
                  Tab 2
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-muted",group:"http",selector:"#http-package-json"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-muted`, 'group': `http`, 'selector': `#http-package-json` }",[e.InkRegistry.createText(`
                  Tab 3
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/tab.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/tab.html` }",[e.InkRegistry.createText(`
                Tabs
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("table-layout",{class:"h-90 w-250",top:!0,left:!0,head:"py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0",body:"py-16 px-12 b-solid b-black bt-1 bb-0 bx-0",odd:"bg-t-1",even:"bg-t-0"},"{ 'class': `h-90 w-250`, 'top': true, 'left': true, 'head': `py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0`, 'body': `py-16 px-12 b-solid b-black bt-1 bb-0 bx-0`, 'odd': `bg-t-1`, 'even': `bg-t-0` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("table-row",{col:"b-t-3 bg-t-3"},"{ 'col': `b-t-3 bg-t-3` }",[e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("table-col",{nowrap:!0},"{ 'nowrap': true }",[e.InkRegistry.createText("John Doe",!1)]),e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("table-col",{},"{ }",[e.InkRegistry.createText("21",!1)]),e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("table-col",{"wrap-5":!0},"{ 'wrap-5': true }",[e.InkRegistry.createText(`
                      Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit. Duis laoreet lectus eget enim rhoncus, vel 
                      volutpat eros tincidunt. In molestie nunc ut pulvinar 
                      sollicitudin.
                    `,!1)]),e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("table-col",{nowrap:!0},"{ 'nowrap': true }",[e.InkRegistry.createText(`
                      `,!1),e.InkRegistry.createElement("element-icon",{name:"eye",class:"mr-5 tx-info"},"{ 'name': `eye`, 'class': `mr-5 tx-info` }"),e.InkRegistry.createText(`
                      `,!1),e.InkRegistry.createElement("element-icon",{name:"edit",class:"mr-5 tx-warning"},"{ 'name': `edit`, 'class': `mr-5 tx-warning` }"),e.InkRegistry.createText(`
                      `,!1),e.InkRegistry.createElement("element-icon",{name:"trash",class:"tx-error"},"{ 'name': `trash`, 'class': `tx-error` }"),e.InkRegistry.createText(`
                    `,!1)]),e.InkRegistry.createText(`
                  `,!1)]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/table.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/table.html` }",[e.InkRegistry.createText(`
                Tables
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tip",{"background-info":!0,curved:!0,top:"-15",left:"50",padding:"5"},"{ 'background-info': true, 'curved': true, 'top': `-15`, 'left': `50`, 'padding': `5` }",[e.InkRegistry.createText("This is the first and last name",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/tooltip.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/tooltip.html` }",[e.InkRegistry.createText(`
                Tooltips
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return pe(Ye);})();
