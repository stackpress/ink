var InkAPI=(()=>{var oe=Object.create;var v=Object.defineProperty;var fe=Object.getOwnPropertyDescriptor;var de=Object.getOwnPropertyNames;var xe=Object.getPrototypeOf,me=Object.prototype.hasOwnProperty;var f=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),he=(a,t)=>{for(var l in t)v(a,l,{get:t[l],enumerable:!0})},J=(a,t,l,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let c of de(t))!me.call(a,c)&&c!==l&&v(a,c,{get:()=>t[c],enumerable:!(s=fe(t,c))||s.enumerable});return a};var K=(a,t,l)=>(l=a!=null?oe(xe(a)):{},J(t||!a||!a.__esModule?v(l,"default",{value:a,enumerable:!0}):l,a)),ue=a=>J(v({},"__esModule",{value:!0}),a);var A=f(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});var S=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(l=>this._elements.add(l))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};L.default=S});var X=f(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});w.getStatus=be;var Q={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};w.default=Q;function be(a){return Object.values(Q).find(t=>t.code===a)}});var Z=f(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});var pe=X(),C=class a extends Error{static for(t,...l){return l.forEach(function(s){t=t.replace("%s",String(s))}),new this(t)}static forErrors(t){let l=new this("Invalid Parameters");return l.withErrors(t),l}static require(t,l,...s){if(!t){for(let c of s)l=l.replace("%s",c);throw new this(l)}}static try(t){return{catch:l=>{try{return t()}catch(s){if(s instanceof a)return l(s,s.type);if(s instanceof Error){let c=a.upgrade(s);return l(c,c.type)}else if(typeof s=="string"){let c=a.for(s);return l(c,c.type)}return l(s,"unknown")}}}}static upgrade(t,l=500){if(t instanceof a)return t;let s=new this(t.message,l);return s.name=t.name,s.stack=t.stack,s}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,l=500){var s;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=l,this._status=((s=(0,pe.getStatus)(l))===null||s===void 0?void 0:s.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,l=0){let s={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,l)};return Object.keys(this._errors).length>0&&(s.errors=this._errors),s}trace(t=0,l=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,l||this.stack.length).map(c=>c.trim()).map(c=>{if(!c.startsWith("at"))return!1;let[o,d,m]=c.split(" ");m||(m=`(${d})`,d="<none>");let[D,r,u]=m.substring(1,m.length-1).split(":");return{method:d,file:D,line:parseInt(r)||0,char:parseInt(u)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,l){return this._start=t,this._end=l,this}};P.default=C});var j=f(b=>{"use strict";var Te=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var ge=Te(Z()),R=class extends ge.default{};b.default=R});var p=f(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});var ke=new Map;M.default=ke});var B=f(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});var U=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,l=!1){this._escape=l,this._value=t}toString(){return this.value}};q.default=U});var G=f(T=>{"use strict";var Ee=T&&T.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(T,"__esModule",{value:!0});var ye=Ee(A()),_e=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],F=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,l={},s="",c=[]){this._attributes={},this._name=t,this._attributes=l,this._props=s,this._children=new ye.default(c)}toString(){let t=Object.entries(this._attributes),l=t.length>0?" "+t.map(([c,o])=>{if(typeof o=="string"&&!/["<>\n]/.test(o))return`${c}="${o}"`;if(typeof o=="boolean")return o?c:""}).join(" "):"";if(_e.includes(this._name))return`<${this._name}${l} />`;let s=this._children.toString();return`<${this._name}${l}>${s}</${this._name}>`}};T.default=F});var Y=f(g=>{"use strict";var te=g&&g.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(g,"__esModule",{value:!0});var ve=te(B()),ee=te(G()),$=class{static render(t){return t.filter(Boolean).map(l=>l.toString()).join("")}static registry(t,l=new Set){return t.forEach(s=>{s instanceof ee.default&&(["html","head","body"].includes(s.name)||l.add(s),s.name!=="head"&&s.children.length>0&&this.registry(s.children.toArray(),l))}),l}static createElement(t,l,s,c=[]){return new ee.default(t,l,s,c)}static createText(t,l=!0){return new ve.default(t,l)}};g.default=$});var ae=f(k=>{"use strict";var z=k&&k.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(k,"__esModule",{value:!0});var we=z(j()),h=z(p()),H=z(Y()),W=class{bindings(t={}){h.default.set("props",t||{});let l=Object.fromEntries(Object.entries(process.env||{}).filter(o=>o[0].startsWith("PUBLIC_")));h.default.set("env",Object.assign(Object.assign({},l),{BUILD_ID:this.id()}));let s=H.default.registry(this.template()),c={};return Array.from(s.values()).forEach((o,d)=>{c[String(d)]=o.attributes}),c}render(t={}){h.default.set("props",t||{}),h.default.set("bindings",this.bindings(t));let l=Object.fromEntries(Object.entries(process.env||{}).filter(m=>m[0].startsWith("PUBLIC_")));h.default.set("env",Object.assign(Object.assign({},l),{BUILD_ID:this.id()}));let s=this.template(),c=H.default.render(s).trim();if(!c.toLowerCase().startsWith("<html"))throw we.default.for("Document must start with an <html> tag.");let o=Object.fromEntries(h.default.entries()),d=JSON.stringify(o).replace(/\n/g,`
  `);return`<!DOCTYPE html>
${c.replace("__CLIENT_DATA__",d)}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(l=>typeof l=="object"&&typeof l.nodeType=="number")?t:[H.default.createText(String(t))]}};k.default=W});var le=f(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.InkEmitter=void 0;var I=class{emit(t,l){return this}on(t,l){return this}once(t,l){return this}unbind(t,l){return this}};E.InkEmitter=I;var Ie=new I;E.default=Ie});var se=f(y=>{"use strict";var Ne=y&&y.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(y,"__esModule",{value:!0});var Oe=Ne(p());function De(a){let t=Oe.default.get("env")||{};return a?t[a]||null:t}y.default=De});var re=f(_=>{"use strict";var Se=_&&_.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(_,"__esModule",{value:!0});_.default=Ae;var Le=Se(p());function Ae(){return Le.default.get("props")||{}}});var ie=f(i=>{"use strict";var Ce=i&&i.__createBinding||(Object.create?function(a,t,l,s){s===void 0&&(s=l);var c=Object.getOwnPropertyDescriptor(t,l);(!c||("get"in c?!t.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return t[l]}}),Object.defineProperty(a,s,c)}:function(a,t,l,s){s===void 0&&(s=l),a[s]=t[l]}),Pe=i&&i.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),Re=i&&i.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(l){var s=[];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(s[s.length]=c);return s},a(t)};return function(t){if(t&&t.__esModule)return t;var l={};if(t!=null)for(var s=a(t),c=0;c<s.length;c++)s[c]!=="default"&&Ce(l,t,s[c]);return Pe(l,t),l}}(),x=i&&i.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(i,"__esModule",{value:!0});i.InkText=i.InkException=i.InkEmitter=i.InkElement=i.InkRegistry=i.InkDocument=i.InkCollection=i.props=i.emitter=i.env=i.data=void 0;var je=x(A());i.InkCollection=je.default;var Me=x(ae());i.InkDocument=Me.default;var Ue=x(Y());i.InkRegistry=Ue.default;var qe=x(G());i.InkElement=qe.default;var ce=Re(le());i.emitter=ce.default;Object.defineProperty(i,"InkEmitter",{enumerable:!0,get:function(){return ce.InkEmitter}});var Be=x(B());i.InkText=Be.default;var Fe=x(p());i.data=Fe.default;var Ge=x(se());i.env=Ge.default;var $e=x(re());i.props=$e.default;var Ye=x(j());i.InkException=Ye.default});var V=f((ot,ne)=>{ne.exports={...ie()}});var We={};he(We,{default:()=>O});var e=K(V()),N=K(V());var n=function(a,...t){let l=He(a);for(let s=0;s<t.length;s++)l=l.replace("%s",String(t[s]));return l},He=function(a){return a};var O=class extends e.InkDocument{id(){return"5b0064b8e058fcd88a3c"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/ink/panel.html",l=n("Ink UI - Web Components Meets Atomic Styles."),s=n("Ink UI atomically generates CSS styles and provides out of box web components."),c=()=>{document.querySelector("panel-layout").toggle("left")},o=(r,u)=>{setTimeout(()=>{u("https://images.wsj.net/im-580612/8SR")},5e3)},d=(r,u)=>{setTimeout(()=>{u(r.map((ze,Ve)=>"https://images.wsj.net/im-580612/8SR"))},1e3)},m={first:"Jane",last:"Doe"},D=[{first1:"John",last1:"Doe",fieldset2:[{first2:"Jane",last2:"Doe"}]}];return[e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("html",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("head",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{charset:"utf-8"},'{ "charset": "utf-8" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},'{ "name": "viewport", "content": "width=device-width, initial-scale=1" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("title",{},"{ }",[...this._toNodeList(l)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"url",property:"og:url",content:`https://stackpress.github.io/ink${t}`},'{ "name": "url", "property": "og:url", "content": `https://stackpress.github.io/ink${url}` }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"type",property:"og:type",content:"website"},'{ "name": "type", "property": "og:type", "content": "website" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"image",property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"},'{ "name": "image", "property": "og:image", "content": "https://stackpress.github.io/ink/ink-logo.png" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"title",property:"og:title",content:l},'{ "name": "title", "property": "og:title", "content": title }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"description",property:"og:description",content:s},'{ "name": "description", "property": "og:description", "content": description }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:card",content:"summary"},'{ "name": "twitter:card", "content": "summary" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:site",content:"@stackpress"},'{ "name": "twitter:site", "content": "@stackpress" }'),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:title",content:l},'{ "name": "twitter:title", "content": title }'),e.InkRegistry.createText(`
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
            `,!1),...this._toNodeList(n("Form")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("form",{method:"get",action:"/ink/ui/form/index.html"},'{ "method": "get", "action": "/ink/ui/form/index.html" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("section",{class:"flex flex-wrap gap-10"},'{ "class": "flex flex-wrap gap-10" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("form-button",{class:"mr-5",md:!0,success:!0,curved:!0,solid:!0},'{ "class": "mr-5", "md": true, "success": true, "curved": true, "solid": true }',[e.InkRegistry.createText(`
                    Submit
                  `,!1)]),e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("form-button",{md:!0,warning:!0,rounded:!0,transparent:!0,href:"#"},'{ "md": true, "warning": true, "rounded": true, "transparent": true, "href": "#" }',[e.InkRegistry.createText(`
                    Submit
                  `,!1)]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/button.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/button.html" }',[e.InkRegistry.createText(`
                  Buttons
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("form-control",{class:"py-5",label:"First Name*",error:"Some Error"},'{ "class": "py-5", "label": "First Name*", "error": "Some Error" }',[e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("field-input",{name:"first",placeholder:"Enter your first name",error:!0},'{ "name": "first", "placeholder": "Enter your first name", "error": true }'),e.InkRegistry.createText(`
                  `,!1)]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/control.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/control.html" }',[e.InkRegistry.createText(`
                  Control
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("form-fieldset",{legend:"Fieldset %s",name:"fieldset1",value:D,multiple:!0},'{ "legend": "Fieldset %s", "name": "fieldset1", "value": fieldset, "multiple": true }',[e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("field-input",{name:"first1",placeholder:"Enter your first name"},'{ "name": "first1", "placeholder": "Enter your first name" }'),e.InkRegistry.createText(`
                  `,!1)]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/fieldset.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/fieldset.html" }',[e.InkRegistry.createText(`
                  Fieldset
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},'{ "class": "tx-primary tx-upper tx-30 py-20" }',[e.InkRegistry.createText(`
              `,!1),...this._toNodeList(n("Fields")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("section",{class:"flex flex-wrap gap-10"},'{ "class": "flex flex-wrap gap-10" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-checkbox",{name:"checkbox",label:"Active?",value:"yes",checked:!0,orange:!0,update:console.log},'{ "name": "checkbox", "label": "Active?", "value": "yes", "checked": true, "orange": true, "update": console.log }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/checkbox.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/checkbox.html" }',[e.InkRegistry.createText(`
                  Checkbox
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-color",{name:"color",placeholder:"Enter color"},'{ "name": "color", "placeholder": "Enter color" }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/color.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/color.html" }',[e.InkRegistry.createText(`
                  Color
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-country",{name:"country",class:"w-200 relative z-1",placeholder:"Choose Country",value:"US",open:r=>console.log("open",r),close:r=>console.log("close",r),filter:r=>console.log("filter",r),select:r=>console.log("select",r),remove:r=>console.log("remove",r),add:r=>console.log("add",r),clear:r=>console.log("clear",r),change:r=>console.log("change",r),update:r=>console.log("update",r)},`{ "name": "country", "class": "w-200 relative z-1", "placeholder": "Choose Country", "value": "US", "open": (e) => console.log('open', e), "close": (e) => console.log('close', e), "filter": (e) => console.log('filter', e), "select": (e) => console.log('select', e), "remove": (e) => console.log('remove', e), "add": (e) => console.log('add', e), "clear": (e) => console.log('clear', e), "change": (e) => console.log('change', e), "update": (e) => console.log('update', e) }`),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/country.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/country.html" }',[e.InkRegistry.createText(`
                  Country
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-currency",{name:"currency",class:"w-200",placeholder:"Choose Currency",value:"PHP",open:r=>console.log("open",r),close:r=>console.log("close",r),filter:r=>console.log("filter",r),select:r=>console.log("select",r),remove:r=>console.log("remove",r),add:r=>console.log("add",r),clear:r=>console.log("clear",r),change:r=>console.log("change",r),update:r=>console.log("update",r)},`{ "name": "currency", "class": "w-200", "placeholder": "Choose Currency", "value": "PHP", "open": (e) => console.log('open', e), "close": (e) => console.log('close', e), "filter": (e) => console.log('filter', e), "select": (e) => console.log('select', e), "remove": (e) => console.log('remove', e), "add": (e) => console.log('add', e), "clear": (e) => console.log('clear', e), "change": (e) => console.log('change', e), "update": (e) => console.log('update', e) }`),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/currency.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/currency.html" }',[e.InkRegistry.createText(`
                  Currency
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-date",{name:"date",placeholder:"Enter date",value:"2020-01-01",update:console.log},'{ "name": "date", "placeholder": "Enter date", "value": "2020-01-01", "update": console.log }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/date.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/date.html" }',[e.InkRegistry.createText(`
                  Date
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-datetime",{name:"datetime",placeholder:"Enter datetime",value:"2020-01-01 13:20:10",update:console.log},'{ "name": "datetime", "placeholder": "Enter datetime", "value": "2020-01-01 13:20:10", "update": console.log }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/datetime.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/datetime.html" }',[e.InkRegistry.createText(`
                  Datetime
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-editor",{lang:"javascript",class:"w-200 h-80 scroll-auto",numbers:!0,name:"editor",value:"ink.render(true);",update:console.log},'{ "lang": "javascript", "class": "w-200 h-80 scroll-auto", "numbers": true, "name": "editor", "value": "ink.render(true);", "update": console.log }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/editor.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/editor.html" }',[e.InkRegistry.createText(`
                  Editor
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-file",{name:"file",class:"block w-250",upload:o,update:console.log},'{ "name": "file", "class": "block w-250", "upload": fileupload, "update": console.log }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/file.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/file.html" }',[e.InkRegistry.createText(`
                  File
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-filelist",{image:!0,name:"filelist",class:"block w-250",upload:d,update:console.log},'{ "image": true, "name": "filelist", "class": "block w-250", "upload": filelistupload, "update": console.log }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/filelist.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/filelist.html" }',[e.InkRegistry.createText(`
                  Filelist
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-input",{name:"first",placeholder:"Enter your first name",value:"test"},'{ "name": "first", "placeholder": "Enter your first name", "value": "test" }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/input.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/input.html" }',[e.InkRegistry.createText(`
                  Input
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/knob.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/knob.html" }',[e.InkRegistry.createText(`
                  Knob
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-markdown",{class:"w-200 h-80 block",numbers:!0,name:"markdown",value:"**I AM BOLD**",update:console.log},'{ "class": "w-200 h-80 block", "numbers": true, "name": "markdown", "value": "**I AM BOLD**", "update": console.log }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/markdown.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/markdown.html" }',[e.InkRegistry.createText(`
                  Markdown
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-mask",{mask:"999-999-9999",placeholder:"999-999-9999"},'{ "mask": "999-999-9999", "placeholder": "999-999-9999" }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/mask.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/mask.html" }',[e.InkRegistry.createText(`
                  Mask
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-metadata",{class:"w-250",name:"metadata",placeholder:"Enter text",value:m,update:console.log},'{ "class": "w-250", "name": "metadata", "placeholder": "Enter text", "value": metadata, "update": console.log }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/metadata.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/metadata.html" }',[e.InkRegistry.createText(`
                  Metadata
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center tx-black"},'{ "class": "bg-t-3 h-120 flex flex-center tx-black" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-number",{name:"number",min:"0",max:"10000",step:"0.01",value:"1234.56",update:console.log},'{ "name": "number", "min": "0", "max": "10000", "step": "0.01", "value": "1234.56", "update": console.log }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/number.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/number.html" }',[e.InkRegistry.createText(`
                  Number
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-password",{name:"password",placeholder:"Enter password",update:console.log},'{ "name": "password", "placeholder": "Enter password", "update": console.log }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/password.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/password.html" }',[e.InkRegistry.createText(`
                  Password
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-radio",{name:"radio",label:"Yes",value:"yes",checked:!0,rounded:!0,update:console.log,class:"mr-10"},'{ "name": "radio", "label": "Yes", "value": "yes", "checked": true, "rounded": true, "update": console.log, "class": "mr-10" }'),e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-radio",{name:"radio",label:"No",value:"no",rounded:!0,update:console.log},'{ "name": "radio", "label": "No", "value": "no", "rounded": true, "update": console.log }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/radio.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/radio.html" }',[e.InkRegistry.createText(`
                  Radio
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-range",{name:"range",min:"0",max:"100",step:"10",value:"0"},'{ "name": "range", "min": "0", "max": "100", "step": "10", "value": "0" }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/range.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/range.html" }',[e.InkRegistry.createText(`
                  Range
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-rating",{name:"rating",value:"0",primary:!0,xl2:!0,update:console.log},'{ "name": "rating", "value": "0", "primary": true, "xl2": true, "update": console.log }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/rating.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/rating.html" }',[e.InkRegistry.createText(`
                  Rating
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-select",{class:"w-200 relative z-1",name:"select",placeholder:"Choose",value:"1",search:!0,custom:!0,multiple:!0,open:r=>console.log("open",r),close:r=>console.log("close",r),filter:r=>console.log("filter",r),select:r=>console.log("select",r),remove:r=>console.log("remove",r),add:r=>console.log("add",r),clear:r=>console.log("clear",r),change:r=>console.log("change",r),update:r=>console.log("update",r)},`{ "class": "w-200 relative z-1", "name": "select", "placeholder": "Choose", "value": "1", "search": true, "custom": true, "multiple": true, "open": (e) => console.log('open', e), "close": (e) => console.log('close', e), "filter": (e) => console.log('filter', e), "select": (e) => console.log('select', e), "remove": (e) => console.log('remove', e), "add": (e) => console.log('add', e), "clear": (e) => console.log('clear', e), "change": (e) => console.log('change', e), "update": (e) => console.log('update', e) }`,[e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("option",{value:"1",keyword:"option 1"},'{ "value": "1", "keyword": "option 1" }',[e.InkRegistry.createText("Option 1",!1)]),e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("option",{value:4,keyword:"option 2"},'{ "value": 4, "keyword": "option 2" }',[e.InkRegistry.createElement("strong",{},"{ }",[e.InkRegistry.createText("Option 2",!1)])]),e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("option",{value:[1,"2",3],keyword:"option 3"},`{ "value": [1, '2', 3], "keyword": "option 3" }`,[e.InkRegistry.createText("Option 3",!1)]),e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("option",{value:[1,"2",3],keyword:"option 3"},`{ "value": [1, '2', 3], "keyword": "option 3" }`,[e.InkRegistry.createText("Option 4",!1)]),e.InkRegistry.createText(`
                  `,!1)]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/select.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/select.html" }',[e.InkRegistry.createText(`
                  Select
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-slug",{name:"slug",placeholder:"Enter slug",value:"I AM A SLUG",update:console.log},'{ "name": "slug", "placeholder": "Enter slug", "value": "I AM A SLUG", "update": console.log }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/slug.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/slug.html" }',[e.InkRegistry.createText(`
                  Slug
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-switch",{name:"switch",label:"Active?",value:"yes",checked:!0,update:console.log},'{ "name": "switch", "label": "Active?", "value": "yes", "checked": true, "update": console.log }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/switch.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/switch.html" }',[e.InkRegistry.createText(`
                  Switch
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-taglist",{name:"taglist",class:"w-250",placeholder:"Enter Value",value:["foo","bar"]},`{ "name": "taglist", "class": "w-250", "placeholder": "Enter Value", "value": ['foo', 'bar'] }`),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/taglist.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/taglist.html" }',[e.InkRegistry.createText(`
                  Taglist
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-textarea",{name:"textarea",placeholder:"Enter text",update:console.log},'{ "name": "textarea", "placeholder": "Enter text", "update": console.log }',[e.InkRegistry.createText("Some Text",!1)]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/textarea.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/textarea.html" }',[e.InkRegistry.createText(`
                  Textarea
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-textlist",{name:"textlist[]",placeholder:"Enter text",value:["foo","bar"],update:console.log},`{ "name": "textlist[]", "placeholder": "Enter text", "value": ['foo', 'bar'], "update": console.log }`),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/textlist.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/textlist.html" }',[e.InkRegistry.createText(`
                  Textlist
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-time",{name:"time",placeholder:"Enter time",value:new Date().getTime(),update:console.log},'{ "name": "time", "placeholder": "Enter time", "value": new Date().getTime(), "update": console.log }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/time.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/time.html" }',[e.InkRegistry.createText(`
                  Time
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center scroll-hidden"},'{ "class": "bg-t-3 h-120 flex flex-center scroll-hidden" }',[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-wysiwyg",{class:"w-200 h-100",name:"wysiwyg",value:"I am ironman.",size:!0,color:!0,update:console.log},'{ "class": "w-200 h-100", "name": "wysiwyg", "value": "I am ironman.", "size": true, "color": true, "update": console.log }'),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/wysiwyg.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/form/wysiwyg.html" }',[e.InkRegistry.createText(`
                  WYSIWYG
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return ue(We);})();
;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;