var InkAPI=(()=>{var oe=Object.create;var y=Object.defineProperty;var fe=Object.getOwnPropertyDescriptor;var pe=Object.getOwnPropertyNames;var ue=Object.getPrototypeOf,me=Object.prototype.hasOwnProperty;var i=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports),de=(s,t)=>{for(var a in t)y(s,a,{get:t[a],enumerable:!0})},Y=(s,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of pe(t))!me.call(s,l)&&l!==a&&y(s,l,{get:()=>t[l],enumerable:!(r=fe(t,l))||r.enumerable});return s};var J=(s,t,a)=>(a=s!=null?oe(ue(s)):{},Y(t||!s||!s.__esModule?y(a,"default",{value:s,enumerable:!0}):a,s)),he=s=>Y(y({},"__esModule",{value:!0}),s);var Q=i(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.status=xe;var K={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};E.default=K;function xe(s){return Object.values(K).find(t=>t.code===s)}});var D=i(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});var be=Q(),N=class s extends Error{static try(t){return{catch:a=>{try{return t()}catch(r){if(r instanceof s)return a(r,r.type);if(r instanceof Error){let l=s.upgrade(r);return a(l,l.type)}else if(typeof r=="string"){let l=s.for(r);return a(l,l.type)}return a(r,"unknown")}}}}static for(t,...a){return a.forEach(function(r){t=t.replace("%s",String(r))}),new this(t)}static forErrors(t){let a=new this("Invalid Parameters");return a.withErrors(t),a}static require(t,a,...r){if(!t){for(let l of r)a=a.replace("%s",l);throw new this(a)}}static upgrade(t,a=500){if(t instanceof s)return t;let r=new this(t.message,a);return r.name=t.name,r.stack=t.stack,r}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,a=500){var r;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=a,this._status=((r=(0,be.status)(a))===null||r===void 0?void 0:r.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,a=0){let r={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,a)};return Object.keys(this._errors).length>0&&(r.errors=this._errors),r}trace(t=0,a=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,a||this.stack.length).map(l=>l.trim()).map(l=>{if(!l.startsWith("at"))return!1;let[f,O,_]=l.split(" ");_||(_=`(${O})`,O="<none>");let[ce,ne,ie]=_.substring(1,_.length-1).split(":");return{method:O,file:ce,line:parseInt(ne)||0,char:parseInt(ie)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,a){return this._start=t,this._end=a,this}};I.default=N});var V=i(u=>{"use strict";var Te=u&&u.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(u,"__esModule",{value:!0});var ge=Te(D()),j=class extends ge.default{};u.default=j});var A=i(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});var L=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(a=>this._elements.add(a))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};P.default=L});var m=i(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});var ke=new Map;R.default=ke});var C=i(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});var S=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,a=!1){this._escape=a,this._value=t}toString(){return this.value}};M.default=S});var q=i(d=>{"use strict";var _e=d&&d.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(d,"__esModule",{value:!0});var ye=_e(A()),Ee=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],U=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,a={},r="",l=[]){this._attributes={},this._name=t,this._attributes=a,this._props=r,this._children=new ye.default(l)}toString(){let t=Object.entries(this._attributes),a=t.length>0?" "+t.map(([l,f])=>{if(typeof f=="string"&&!/["<>\n]/.test(f))return`${l}="${f}"`;if(typeof f=="boolean")return f?l:""}).join(" "):"";if(Ee.includes(this._name))return`<${this._name}${a} />`;let r=this._children.toString();return`<${this._name}${a}>${r}</${this._name}>`}};d.default=U});var G=i(h=>{"use strict";var X=h&&h.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(h,"__esModule",{value:!0});var ve=X(C()),z=X(q()),B=class{static render(t){return t.filter(Boolean).map(a=>a.toString()).join("")}static registry(t,a=new Set){return t.forEach(r=>{r instanceof z.default&&(["html","head","body"].includes(r.name)||a.add(r),r.name!=="head"&&r.children.length>0&&this.registry(r.children.toArray(),a))}),a}static createElement(t,a,r,l=[]){return new z.default(t,a,r,l)}static createText(t,a=!0){return new ve.default(t,a)}};h.default=B});var Z=i(x=>{"use strict";var H=x&&x.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(x,"__esModule",{value:!0});var we=H(D()),p=H(m()),$=H(G()),F=class{bindings(t={}){p.default.set("props",t||{}),p.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(p.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(l=>l[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let a=$.default.registry(this.template());return`{ ${Array.from(a.values()).map((l,f)=>l.props!=="{ }"?`'${f}': ${l.props}`:"").filter(l=>l!=="").join(", ")} }`}render(t={}){p.default.set("props",t||{}),p.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(p.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(l=>l[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let a=this.template(),r=$.default.render(a).trim();if(!r.toLowerCase().startsWith("<html"))throw we.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${r}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(a=>typeof a=="object"&&typeof a.nodeType=="number")?t:[$.default.createText(String(t))]}};x.default=F});var ee=i(b=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.InkEmitter=void 0;var v=class{emit(t,a){return this}on(t,a){return this}once(t,a){return this}unbind(t,a){return this}};b.InkEmitter=v;var Oe=new v;b.default=Oe});var te=i(T=>{"use strict";var Ne=T&&T.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(T,"__esModule",{value:!0});var Ie=Ne(m());function De(s){let t=Ie.default.get("env")||{};return s?t[s]||null:t}T.default=De});var se=i(g=>{"use strict";var je=g&&g.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(g,"__esModule",{value:!0});g.default=Pe;var Le=je(m());function Pe(){return Le.default.get("props")||{}}});var re=i(n=>{"use strict";var Ae=n&&n.__createBinding||(Object.create?function(s,t,a,r){r===void 0&&(r=a);var l=Object.getOwnPropertyDescriptor(t,a);(!l||("get"in l?!t.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(s,r,l)}:function(s,t,a,r){r===void 0&&(r=a),s[r]=t[a]}),Re=n&&n.__setModuleDefault||(Object.create?function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}:function(s,t){s.default=t}),Se=n&&n.__importStar||function(){var s=function(t){return s=Object.getOwnPropertyNames||function(a){var r=[];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(r[r.length]=l);return r},s(t)};return function(t){if(t&&t.__esModule)return t;var a={};if(t!=null)for(var r=s(t),l=0;l<r.length;l++)r[l]!=="default"&&Ae(a,t,r[l]);return Re(a,t),a}}(),o=n&&n.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(n,"__esModule",{value:!0});n.InkText=n.InkException=n.InkEmitter=n.InkElement=n.InkRegistry=n.InkDocument=n.InkCollection=n.props=n.emitter=n.env=n.data=void 0;var Me=o(V());n.InkException=Me.default;var Ce=o(A());n.InkCollection=Ce.default;var Ue=o(Z());n.InkDocument=Ue.default;var qe=o(G());n.InkRegistry=qe.default;var Be=o(q());n.InkElement=Be.default;var ae=Se(ee());n.emitter=ae.default;Object.defineProperty(n,"InkEmitter",{enumerable:!0,get:function(){return ae.InkEmitter}});var Ge=o(C());n.InkText=Ge.default;var $e=o(m());n.data=$e.default;var Fe=o(te());n.env=Fe.default;var He=o(se());n.props=He.default});var W=i((nt,le)=>{le.exports={...re()}});var Ye={};de(Ye,{default:()=>w});var e=J(W()),k=J(W());var c=function(s,...t){let a=We(s);for(let r=0;r<t.length;r++)a=a.replace("%s",String(t[r]));return a},We=function(s){return s};var w=class extends e.InkDocument{id(){return"c1fe9c8143f6abad8224"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/docs/component-publisher.html",a=c("Component Publisher - Ink reactive web component template engine."),r=c("How to use Ink to publish web components."),l=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[e.InkRegistry.createText(`
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
            `,!1),...this._toNodeList(c("Component Publisher")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Web components are a set of web platform APIs that allow you 
            to create new custom, reusable, encapsulated HTML tags to use 
            in web pages and web apps. Custom components and widgets build 
            on the Web Component standards, will work across modern 
            browsers, and can be used with any JavaScript library or 
            framework that works with HTML.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Web components are based on existing web standards. Features 
            to support web components are currently being added to the 
            HTML and DOM specs, letting web developers easily extend HTML 
            with new elements with encapsulated styling and custom behavior.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("element-alert",{solid:!0,curved:!0,info:!0},"{ 'solid': true, 'curved': true, 'info': true }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("element-icon",{name:"info-circle"},"{ 'name': `info-circle` }"),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("strong",{},"{ }",[e.InkRegistry.createText("Note:",!1)]),e.InkRegistry.createText(` Web components even work in React 
            projects.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            First, create a project with the following structure and files.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{height:290,title:"My Project"},"{ 'height': 290, 'title': `My Project` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},"{ 'class': `flex scroll-x-auto pt-5 pl-5` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"publisher",selector:"#build-ts"},"{ 'on': true, 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `publisher`, 'selector': `#build-ts` }",[e.InkRegistry.createText(`
                  src/build.ts
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"publisher",selector:"#component-ink"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `publisher`, 'selector': `#component-ink` }",[e.InkRegistry.createText(`
                  src/component.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"publisher",selector:"#package-json"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `publisher`, 'selector': `#package-json` }",[e.InkRegistry.createText(`
                  package.json
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"p-5"},"{ 'class': `p-5` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},"{ 'name': `chevron-down` }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"publisher",selector:"#build-ts"},"{ 'on': true, 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `publisher`, 'selector': `#build-ts` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                build.ts
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"publisher",selector:"#component-ink"},"{ 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `publisher`, 'selector': `#component-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                component.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-muted",group:"publisher",selector:"#package-json"},"{ 'class': `pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `publisher`, 'selector': `#package-json` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                package.json
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"build-ts",lang:"js",numbers:!0,trim:!0,detab:16},"{ 'id': `build-ts`, 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                import http from 'http';
                import ink from '@stackpress/ink/compiler';

                //create ink compiler
                const compiler = ink({ cwd: __dirname });
                //load component, and render
                const component = compiler
                  .fromSource('./component.ink')
                  .component();
                
                //save component
                compiler.fs.writeFileSync('/path/to/component.js', component);
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"component-ink",style:"display:none",numbers:!0,trim:!0,detab:16},"{ 'id': `component-ink`, 'style': `display:none`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                <style>
                  .title { text-align: center; }
                </style>
                <script>
                  const title = 'Hello';
                </script>
                <h1 class="title">{title}</h1>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"package-json",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},"{ 'id': `package-json`, 'style': `display:none`, 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "build": "ts-node ./src/build.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.10"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "0.3.10",
                    "@types/node": "22.1.0",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            To test the build script and see the results, run the 
            following command in terminal.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-code",{lang:"bash"},"{ 'lang': `bash` }",[e.InkRegistry.createText(`
            npm run build
          `,!1)]),e.InkRegistry.createText(`
          
          `,!1),e.InkRegistry.createElement("nav",{class:"flex"},"{ 'class': `flex` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/static-site.html"},"{ 'class': `tx-primary py-40`, 'href': `/ink/docs/static-site.html` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-left",theme:"tx-1"},"{ 'name': `chevron-left`, 'theme': `tx-1` }"),e.InkRegistry.createText(`
              `,!1),...this._toNodeList(c("Static Site Generator")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/developer-tools.html"},"{ 'class': `flex-grow tx-right tx-primary py-40`, 'href': `/ink/docs/developer-tools.html` }",[e.InkRegistry.createText(`
              `,!1),...this._toNodeList(c("Developer Tools")),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-right",theme:"tx-1"},"{ 'name': `chevron-right`, 'theme': `tx-1` }"),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("footer",{class:"foot"},"{ 'class': `foot` }",[]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return he(Ye);})();
