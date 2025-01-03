var InkAPI=(()=>{var fe=Object.create;var _=Object.defineProperty;var me=Object.getOwnPropertyDescriptor;var xe=Object.getOwnPropertyNames;var he=Object.getPrototypeOf,de=Object.prototype.hasOwnProperty;var o=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),be=(a,t)=>{for(var s in t)_(a,s,{get:t[s],enumerable:!0})},Q=(a,t,s,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of xe(t))!de.call(a,r)&&r!==s&&_(a,r,{get:()=>t[r],enumerable:!(l=me(t,r))||l.enumerable});return a};var V=(a,t,s)=>(s=a!=null?fe(he(a)):{},Q(t||!a||!a.__esModule?_(s,"default",{value:a,enumerable:!0}):s,a)),ue=a=>Q(_({},"__esModule",{value:!0}),a);var S=o(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});var L=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(s=>this._elements.add(s))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};j.default=L});var X=o(y=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});y.getStatus=pe;var z={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};y.default=z;function pe(a){return Object.values(z).find(t=>t.code===a)}});var Z=o(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});var Te=X(),A=class a extends Error{static for(t,...s){return s.forEach(function(l){t=t.replace("%s",String(l))}),new this(t)}static forErrors(t){let s=new this("Invalid Parameters");return s.withErrors(t),s}static require(t,s,...l){if(!t){for(let r of l)s=s.replace("%s",r);throw new this(s)}}static try(t){return{catch:s=>{try{return t()}catch(l){if(l instanceof a)return s(l,l.type);if(l instanceof Error){let r=a.upgrade(l);return s(r,r.type)}else if(typeof l=="string"){let r=a.for(l);return s(r,r.type)}return s(l,"unknown")}}}}static upgrade(t,s=500){if(t instanceof a)return t;let l=new this(t.message,s);return l.name=t.name,l.stack=t.stack,l}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,s=500){var l;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=s,this._status=((l=(0,Te.getStatus)(s))===null||l===void 0?void 0:l.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,s=0){let l={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,s)};return Object.keys(this._errors).length>0&&(l.errors=this._errors),l}trace(t=0,s=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,s||this.stack.length).map(r=>r.trim()).map(r=>{if(!r.startsWith("at"))return!1;let[n,f,x]=r.split(" ");x||(x=`(${f})`,f="<none>");let[N,O,D]=x.substring(1,x.length-1).split(":");return{method:f,file:N,line:parseInt(O)||0,char:parseInt(D)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,s){return this._start=t,this._end=s,this}};R.default=A});var M=o(d=>{"use strict";var ge=d&&d.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(d,"__esModule",{value:!0});var ke=ge(Z()),P=class extends ke.default{};d.default=P});var b=o(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});var Ee=new Map;C.default=Ee});var B=o(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});var U=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,s=!1){this._escape=s,this._value=t}toString(){return this.value}};q.default=U});var G=o(u=>{"use strict";var _e=u&&u.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(u,"__esModule",{value:!0});var ye=_e(S()),ve=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],F=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,s={},l="",r=[]){this._attributes={},this._name=t,this._attributes=s,this._props=l,this._children=new ye.default(r)}toString(){let t=Object.entries(this._attributes),s=t.length>0?" "+t.map(([r,n])=>{if(typeof n=="string"&&!/["<>\n]/.test(n))return`${r}="${n}"`;if(typeof n=="boolean")return n?r:""}).join(" "):"";if(ve.includes(this._name))return`<${this._name}${s} />`;let l=this._children.toString();return`<${this._name}${s}>${l}</${this._name}>`}};u.default=F});var $=o(p=>{"use strict";var te=p&&p.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(p,"__esModule",{value:!0});var we=te(B()),ee=te(G()),Y=class{static render(t){return t.filter(Boolean).map(s=>s.toString()).join("")}static registry(t,s=new Set){return t.forEach(l=>{l instanceof ee.default&&(["html","head","body"].includes(l.name)||s.add(l),l.name!=="head"&&l.children.length>0&&this.registry(l.children.toArray(),s))}),s}static createElement(t,s,l,r=[]){return new ee.default(t,s,l,r)}static createText(t,s=!0){return new we.default(t,s)}};p.default=Y});var ae=o(T=>{"use strict";var J=T&&T.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(T,"__esModule",{value:!0});var Ie=J(M()),h=J(b()),H=J($()),W=class{bindings(t={}){h.default.set("props",t||{});let s=Object.fromEntries(Object.entries(process.env||{}).filter(n=>n[0].startsWith("PUBLIC_")));h.default.set("env",Object.assign(Object.assign({},s),{BUILD_ID:this.id()}));let l=H.default.registry(this.template()),r={};return Array.from(l.values()).forEach((n,f)=>{r[String(f)]=n.attributes}),r}render(t={}){h.default.set("props",t||{}),h.default.set("bindings",this.bindings(t));let s=Object.fromEntries(Object.entries(process.env||{}).filter(x=>x[0].startsWith("PUBLIC_")));h.default.set("env",Object.assign(Object.assign({},s),{BUILD_ID:this.id()}));let l=this.template(),r=H.default.render(l).trim();if(!r.toLowerCase().startsWith("<html"))throw Ie.default.for("Document must start with an <html> tag.");let n=Object.fromEntries(h.default.entries()),f=JSON.stringify(n).replace(/\n/g,`
  `);return`<!DOCTYPE html>
${r.replace("__CLIENT_DATA__",f)}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(s=>typeof s=="object"&&typeof s.nodeType=="number")?t:[H.default.createText(String(t))]}};T.default=W});var se=o(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});g.InkEmitter=void 0;var v=class{emit(t,s){return this}on(t,s){return this}once(t,s){return this}unbind(t,s){return this}};g.InkEmitter=v;var Ne=new v;g.default=Ne});var le=o(k=>{"use strict";var Oe=k&&k.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(k,"__esModule",{value:!0});var De=Oe(b());function Le(a){let t=De.default.get("env")||{};return a?t[a]||null:t}k.default=Le});var re=o(E=>{"use strict";var je=E&&E.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(E,"__esModule",{value:!0});E.default=Ae;var Se=je(b());function Ae(){return Se.default.get("props")||{}}});var ie=o(c=>{"use strict";var Re=c&&c.__createBinding||(Object.create?function(a,t,s,l){l===void 0&&(l=s);var r=Object.getOwnPropertyDescriptor(t,s);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[s]}}),Object.defineProperty(a,l,r)}:function(a,t,s,l){l===void 0&&(l=s),a[l]=t[s]}),Pe=c&&c.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),Me=c&&c.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(s){var l=[];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(l[l.length]=r);return l},a(t)};return function(t){if(t&&t.__esModule)return t;var s={};if(t!=null)for(var l=a(t),r=0;r<l.length;r++)l[r]!=="default"&&Re(s,t,l[r]);return Pe(s,t),s}}(),m=c&&c.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0});c.InkText=c.InkException=c.InkEmitter=c.InkElement=c.InkRegistry=c.InkDocument=c.InkCollection=c.props=c.emitter=c.env=c.data=void 0;var Ce=m(S());c.InkCollection=Ce.default;var Ue=m(ae());c.InkDocument=Ue.default;var qe=m($());c.InkRegistry=qe.default;var Be=m(G());c.InkElement=Be.default;var ce=Me(se());c.emitter=ce.default;Object.defineProperty(c,"InkEmitter",{enumerable:!0,get:function(){return ce.InkEmitter}});var Fe=m(B());c.InkText=Fe.default;var Ge=m(b());c.data=Ge.default;var Ye=m(le());c.env=Ye.default;var $e=m(re());c.props=$e.default;var He=m(M());c.InkException=He.default});var K=o((ot,ne)=>{ne.exports={...ie()}});var Je={};be(Je,{default:()=>I});var e=V(K()),w=V(K());var i=function(a,...t){let s=We(a);for(let l=0;l<t.length;l++)s=s.replace("%s",String(t[l]));return s},We=function(a){return a};var I=class extends e.InkDocument{id(){return"abf141ff08e3db04b6fa"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/ink/panel.html",s=i("Ink UI - Web Components Meets Atomic Styles."),l=i("Ink UI atomically generates CSS styles and provides out of box web components."),r=()=>{document.querySelector("panel-layout").toggle("left")},n={icon:"book",label:"Docs"},f={x:10,y:20},x='<h1><strong style="color: green">Hello</strong> World</h1>',N=["https://images.wsj.net/im-580612/8SR","https://images.wsj.net/im-580612/8SR"],O=["Item 1","Item 2"],D={name:"John Doe",age:25},oe=[{id:2,name:"Jane Doe",age:25}],Ke=["bg-t-2","bg-t-3"];return[e.InkRegistry.createText(`
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
      `,!1),e.InkRegistry.createElement("main",{},"{ }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("api-docs",{},"{ }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},'{ "class": "tx-primary tx-upper tx-30 py-20" }',[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(i("Formats")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("section",{class:"flex flex-wrap gap-10"},'{ "class": "flex flex-wrap gap-10" }',[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-code",{lang:"js"},'{ "lang": "js" }',[e.InkRegistry.createText("compiler.render('./page.ink')",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/code.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/code.html" }',[e.InkRegistry.createText(`
                Code
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-color",{"box-md":!0,"text-md":!0,value:"red"},'{ "box-md": true, "text-md": true, "value": "red" }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/color.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/color.html" }',[e.InkRegistry.createText(`
                Color
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-country",{"flag-md":!0,"text-md":!0,value:"us"},'{ "flag-md": true, "text-md": true, "value": "us" }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/country.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/country.html" }',[e.InkRegistry.createText(`
                Country
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-currency",{"flag-lg":!0,"text-lg":!0,value:"usd"},'{ "flag-lg": true, "text-lg": true, "value": "usd" }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/currency.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/currency.html" }',[e.InkRegistry.createText(`
                Currency
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-date",{format:"MMMM D YYYY, h:mm:ss a"},'{ "format": "MMMM D YYYY, h:mm:ss a" }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/date.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/date.html" }',[e.InkRegistry.createText(`
                Date
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-email",{primary:!0,underline:!0,md:!0,value:"john@doe.com"},'{ "primary": true, "underline": true, "md": true, "value": "john@doe.com" }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/email.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/email.html" }',[e.InkRegistry.createText(`
                Email
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                10 + 29 + 20 = 
                `,!1),e.InkRegistry.createElement("format-formula",{value:"29",formula:"{x} + {this} + {y}",data:f,bold:!0},'{ "value": "29", "formula": "{x} + {this} + {y}", "data": variables, "bold": true }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/formula.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/formula.html" }',[e.InkRegistry.createText(`
                Formula
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-html",{value:x},'{ "value": html }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/html.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/html.html" }',[e.InkRegistry.createText(`
                HTML
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-image",{width:"70",value:"https://images.wsj.net/im-580612/8SR"},'{ "width": "70", "value": "https://images.wsj.net/im-580612/8SR" }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/image.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/image.html" }',[e.InkRegistry.createText(`
                Image
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-imagelist",{width:"70",value:N},'{ "width": "70", "value": images }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/imagelist.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/imagelist.html" }',[e.InkRegistry.createText(`
                Imagelist
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-json",{value:n},'{ "value": json }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/json.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/json.html" }',[e.InkRegistry.createText(`
                JSON
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-link",{secondary:!0,underline:!0,md:!0,target:"_blank",value:"https://iamawesome.com/"},'{ "secondary": true, "underline": true, "md": true, "target": "_blank", "value": "https://iamawesome.com/" }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/link.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/link.html" }',[e.InkRegistry.createText(`
                Link
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-list",{value:O,item:"tx-lh-36"},'{ "value": list, "item": "tx-lh-36" }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/list.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/list.html" }',[e.InkRegistry.createText(`
                List
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-markdown",{value:"**Hello** World"},'{ "value": "**Hello** World" }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/markdown.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/markdown.html" }',[e.InkRegistry.createText(`
                Markdown
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-metadata",{value:D,padding:"10",align:"center","background-theme":"bg-1","stripe-theme":"bg-2","border-theme":"black",format:!0},'{ "value": metadata, "padding": "10", "align": "center", "background-theme": "bg-1", "stripe-theme": "bg-2", "border-theme": "black", "format": true }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/metadata.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/metadata.html" }',[e.InkRegistry.createText(`
                Metadata
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-number",{value:"12345.67",separator:",",decimal:".",decimals:2},'{ "value": "12345.67", "separator": ",", "decimal": ".", "decimals": 2 }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/number.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/number.html" }',[e.InkRegistry.createText(`
                Number
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-overflow",{value:"Lorem Ipsum",length:8,hellip:!0},'{ "value": "Lorem Ipsum", "length": 8, "hellip": true }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/overflow.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/overflow.html" }',[e.InkRegistry.createText(`
                Overflow
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-phone",{value:"+63 (917) 555-2424"},'{ "value": "+63 (917) 555-2424" }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/phone.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/phone.html" }',[e.InkRegistry.createText(`
                Phone
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-rating",{class:"tx-warning",value:"3.5",max:5,remainder:!0,round:"floor"},'{ "class": "tx-warning", "value": "3.5", "max": 5, "remainder": true, "round": "floor" }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/rating.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/rating.html" }',[e.InkRegistry.createText(`
                Rating
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-separated",{value:["Foo","bar"],separator:"line"},`{ "value": ['Foo', 'bar'], "separator": "line" }`),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/separated.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/separated.html" }',[e.InkRegistry.createText(`
                Separated
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-table",{value:oe,padding:"10",align:"center","background-theme":"bg-1","stripe-theme":"bg-2","header-theme":"bg-2","border-theme":"black"},'{ "value": table, "padding": "10", "align": "center", "background-theme": "bg-1", "stripe-theme": "bg-2", "header-theme": "bg-2", "border-theme": "black" }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/table.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/table.html" }',[e.InkRegistry.createText(`
                Table
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-taglist",{value:["Foo","bar"],pill:!0},`{ "value": ['Foo', 'bar'], "pill": true }`),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/taglist.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/taglist.html" }',[e.InkRegistry.createText(`
                Taglist
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-text",{value:"i am a title",capital:!0},'{ "value": "i am a title", "capital": true }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/text.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/text.html" }',[e.InkRegistry.createText(`
                Text
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},'{ "class": "basis-third-10 lg-basis-half-10 md-basis-full" }',[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},'{ "class": "bg-t-3 h-120 flex flex-center" }',[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-yesno",{value:!0},'{ "value": true }'),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/yesno.html"},'{ "class": "block tx-center tx-white p-10 b-solid b-t-3 b-1", "href": "/ink/ui/format/yesno.html" }',[e.InkRegistry.createText(`
                Yesno
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return ue(Je);})();
;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;;
;module.exports = InkAPI;