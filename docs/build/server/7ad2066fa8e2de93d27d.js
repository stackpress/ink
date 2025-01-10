var InkAPI=(()=>{var pe=Object.create;var D=Object.defineProperty;var Te=Object.getOwnPropertyDescriptor;var be=Object.getOwnPropertyNames;var Ee=Object.getPrototypeOf,_e=Object.prototype.hasOwnProperty;var o=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),ge=(a,t)=>{for(var r in t)D(a,r,{get:t[r],enumerable:!0})},ae=(a,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of be(t))!_e.call(a,l)&&l!==r&&D(a,l,{get:()=>t[l],enumerable:!(s=Te(t,l))||s.enumerable});return a};var I=(a,t,r)=>(r=a!=null?pe(Ee(a)):{},ae(t||!a||!a.__esModule?D(r,"default",{value:a,enumerable:!0}):r,a)),ye=a=>ae(D({},"__esModule",{value:!0}),a);var d=o(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});var C=class{constructor(){this._parent=null}get parent(){return this._parent}get parentElement(){return this._parent}set parent(t){this._parent=t}};R.default=C});var q=o(h=>{"use strict";var ke=h&&h.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(h,"__esModule",{value:!0});var ve=ke(d()),j=class extends ve.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#comment",this.type=8,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!--${this.value}-->`}};h.default=j});var B=o(p=>{"use strict";var Oe=p&&p.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(p,"__esModule",{value:!0});var De=Oe(d()),U=class extends De.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#doctype",this.type=10,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!DOCTYPE ${this.value}>`}};p.default=U});var F=o(T=>{"use strict";var Ne=T&&T.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(T,"__esModule",{value:!0});var we=Ne(d()),Ae=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],G=class a extends we.default{get attributes(){return Object.fromEntries(this._attributes)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof a)}get nodeName(){return this.name.toUpperCase()}get nodes(){let t=[this];return this._flatten(Array.from(this.children),t),t}get nodeType(){return this.type}get parent(){return this._parent}set parent(t){this._parent=t}constructor(t,r={},s=[]){super(),this.type=1,this._parent=null,this.name=t,this._attributes=new Map(Object.entries(r)),this.children=new Set(s.filter(Boolean))}appendChild(t){return this.children.add(t),t.parent=this,this}export(){return{type:this.type,name:this.name,attributes:Object.fromEntries(this._attributes.entries()),children:Array.from(this.children).map(t=>t.export())}}getAttribute(t){return this._attributes.get(t)}hasAttribute(t){return this._attributes.has(t)}removeAttribute(t){return this._attributes.delete(t),this}removeChild(t){this.children.delete(t),t.parent=null}setAttribute(t,r){return this._attributes.set(t,r),this}toString(){let t=Array.from(this._attributes.entries()),r=t.length>0?" "+t.map(([l,i])=>{if(typeof i=="string"&&!/["<>\n]/.test(i))return`${l}="${i}"`;if(typeof i=="boolean")return i?l:""}).join(" "):"";if(Ae.includes(this.name))return`<${this.name}${r} />`;let s=Array.from(this.children.values()).map(l=>l.toString()).join("");return`<${this.name}${r}>${s}</${this.name}>`}_flatten(t,r){t.forEach(s=>{r.push(s),s instanceof a&&this._flatten(Array.from(s.children),r)})}};T.default=G});var H=o(b=>{"use strict";var Se=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var Le=Se(d()),$=class extends Le.default{get nodeName(){return"#text"}get nodeType(){return this.type}get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,r=!1){super(),this.name="#text",this.type=3,this._escape=r,this._value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return this.value}};b.default=$});var w=o(E=>{"use strict";var N=E&&E.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(E,"__esModule",{value:!0});var Me=N(q()),Pe=N(B()),Y=N(F()),Ie=N(H()),W=class a{static createComment(t,r){let s=new Me.default(t);return r&&(s.parent=r),s}static createDoctype(t="html",r){let s=new Pe.default(t);return r&&(s.parent=r),s}static createElement(t,r={},s=[],l){let i=new Y.default(t,r,s);return l&&(i.parent=l),i}static createText(t,r=!1,s){let l=new Ie.default(t,r);return s&&(l.parent=s),l}static import(t,r){return t.map(s=>{let{value:l}=s,{name:i,attributes:u,children:m}=s;switch(s.type){case 1:let x=this.createElement(i,u,[],r);return a.import(m,x).forEach(P=>x.appendChild(P)),x;case 3:return this.createText(l,!0,r);case 8:return this.createComment(l,r);case 10:return this.createDoctype(l,r)}return null}).filter(Boolean)}static load(t){return new a(t)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof Y.default)}get nodes(){return Array.from(this.children).map(t=>t instanceof Y.default?t.nodes:[t]).flat()}constructor(t){this.children=new Set(t.filter(Boolean))}export(){return this.childList.map(t=>t.export())}toString(){return Array.from(this.children).map(t=>t.toString()).join("")}};E.default=W});var se=o(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.getStatus=Ce;var re={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};A.default=re;function Ce(a){return Object.values(re).find(t=>t.code===a)}});var le=o(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});var Re=se(),K=class a extends Error{static for(t,...r){return r.forEach(function(s){t=t.replace("%s",String(s))}),new this(t)}static forErrors(t){let r=new this("Invalid Parameters");return r.withErrors(t),r}static require(t,r,...s){if(!t){for(let l of s)r=r.replace("%s",l);throw new this(r)}}static try(t){return{catch:r=>{try{return t()}catch(s){if(s instanceof a)return r(s,s.type);if(s instanceof Error){let l=a.upgrade(s);return r(l,l.type)}else if(typeof s=="string"){let l=a.for(s);return r(l,l.type)}return r(s,"unknown")}}}}static upgrade(t,r=500){if(t instanceof a)return t;let s=new this(t.message,r);return s.name=t.name,s.stack=t.stack,s}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,r=500){var s;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=r,this._status=((s=(0,Re.getStatus)(r))===null||s===void 0?void 0:s.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,r=0){let s={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,r)};return Object.keys(this._errors).length>0&&(s.errors=this._errors),s}trace(t=0,r=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,r||this.stack.length).map(l=>l.trim()).map(l=>{if(!l.startsWith("at"))return!1;let[i,u,m]=l.split(" ");m||(m=`(${u})`,u="<none>");let[x,P,he]=m.substring(1,m.length-1).split(":");return{method:u,file:x,line:parseInt(P)||0,char:parseInt(he)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,r){return this._start=t,this._end=r,this}};Q.default=K});var J=o(_=>{"use strict";var je=_&&_.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(_,"__esModule",{value:!0});var qe=je(le()),V=class extends qe.default{};_.default=V});var g=o(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});var Ue=new Map;z.default=Ue});var te=o(y=>{"use strict";var ee=y&&y.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(y,"__esModule",{value:!0});var Be=ee(J()),ce=ee(w()),X=ee(g()),Z=class{render(t={}){X.default.set("props",t||{});let r=process.env||{};X.default.set("env",Object.assign(Object.assign({},r),{BUILD_ID:this.id()}));let s=JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(X.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(r).filter(u=>u[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})),l=this.template(),i=ce.default.load(l).toString().trim();if(!i.toLowerCase().startsWith("<html"))throw Be.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${i.replace("__TEMPLATE_DATA__",s)}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(r=>typeof r=="object"&&typeof r.nodeType=="number")?t:[ce.default.createText(String(t),!0)]}};y.default=Z});var ne=o(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.ServerEmitter=void 0;var S=class{emit(t,r){return this}on(t,r){return this}once(t,r){return this}unbind(t,r){return this}};k.ServerEmitter=S;var Ge=new S;k.default=Ge});var ie=o(v=>{"use strict";var Fe=v&&v.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(v,"__esModule",{value:!0});var $e=Fe(g());function He(a){let t=$e.default.get("env")||{};return a?t[a]||null:t}v.default=He});var oe=o(O=>{"use strict";var Ye=O&&O.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(O,"__esModule",{value:!0});O.default=Ke;var We=Ye(g());function Ke(){return We.default.get("props")||{}}});var ue=o(c=>{"use strict";var Qe=c&&c.__createBinding||(Object.create?function(a,t,r,s){s===void 0&&(s=r);var l=Object.getOwnPropertyDescriptor(t,r);(!l||("get"in l?!t.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(a,s,l)}:function(a,t,r,s){s===void 0&&(s=r),a[s]=t[r]}),Ve=c&&c.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),Je=c&&c.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(r){var s=[];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[s.length]=l);return s},a(t)};return function(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var s=a(t),l=0;l<s.length;l++)s[l]!=="default"&&Qe(r,t,s[l]);return Ve(r,t),r}}(),f=c&&c.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0});c.props=c.emitter=c.env=c.data=c.ServerException=c.ServerEmitter=c.ServerDocument=c.DOMNode=c.DOMText=c.DOMElement=c.DOMDocument=c.DOMDoctype=c.DOMComment=void 0;var ze=f(q());c.DOMComment=ze.default;var Xe=f(B());c.DOMDoctype=Xe.default;var Ze=f(w());c.DOMDocument=Ze.default;var et=f(F());c.DOMElement=et.default;var tt=f(H());c.DOMText=tt.default;var at=f(d());c.DOMNode=at.default;var rt=f(te());c.ServerDocument=rt.default;var fe=Je(ne());c.emitter=fe.default;Object.defineProperty(c,"ServerEmitter",{enumerable:!0,get:function(){return fe.ServerEmitter}});var st=f(g());c.data=st.default;var lt=f(ie());c.env=lt.default;var ct=f(oe());c.props=ct.default;var nt=f(J());c.ServerException=nt.default});var de=o((Dt,me)=>{me.exports={...ue()}});var ot={};ge(ot,{default:()=>M});var e=I(w()),xe=I(te()),L=I(de());var n=function(a,...t){let r=it(a);for(let s=0;s<t.length;s++)r=r.replace("%s",String(t[s]));return r},it=function(a){return a};var M=class extends xe.default{id(){return"7ad2066fa8e2de93d27d"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/ink/panel.html",r=n("Ink UI - Web Components Meets Atomic Styles."),s=n("Ink UI atomically generates CSS styles and provides out of box web components."),l=()=>{document.querySelector("panel-layout").toggle("left")},i=[{icon:"home",label:"Home",href:"/ink/index.html"},{icon:"book",label:"Docs"}];return[e.default.createText(`
`,!1),e.default.createElement("html",{},[e.default.createText(`
  `,!1),e.default.createElement("head",{},[e.default.createText(`
  `,!1),e.default.createElement("meta",{charset:"utf-8"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.default.createText(`
  `,!1),e.default.createElement("title",{},[...this._toNodeList(r)]),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"description",content:s}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:title",content:r}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:description",content:s}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:type",content:"website"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:card",content:"summary"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:site",content:"@stackpress"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:title",content:r}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:description",content:s}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,L.env)("BUILD_ID")}.css`}),e.default.createElement("script",{"data-template":!0,type:"text/json"},[e.default.createText("__TEMPLATE_DATA__",!0)]),e.default.createText(`
  `,!1),e.default.createElement("script",{src:`/ink/build/client/${(0,L.env)("BUILD_ID")}.js`}),e.default.createText(`
  `,!1),...(0,L.env)("PUBLIC_ENV")==="development"?[e.default.createText(`
    `,!1),e.default.createElement("script",{src:"/dev.js"}),e.default.createText(`
  `,!1)]:[],e.default.createText(`
`,!1)]),e.default.createText(`
  `,!1),e.default.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},[e.default.createText(`
    `,!1),e.default.createElement("panel-layout",{},[e.default.createText(`
      `,!1),e.default.createElement("header",{},[e.default.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},[e.default.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.default.createText(`
    `,!1),e.default.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:l},[]),e.default.createText(`
    `,!1),e.default.createElement("div",{class:"flex-grow"},[]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{href:"/ink"},[e.default.createText(`
      `,!1),e.default.createElement("img",{alt:"Ink Logo",class:"h-26 mr-10",src:"/ink/ink-icon.png"}),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),e.default.createElement("nav",{class:"flex flex-center-y"},[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"tx-primary",href:"/ink/docs/index.html"},[e.default.createText("Docs",!1)]),e.default.createText(`
    `,!1),e.default.createElement("a",{class:"tx-t-1 tx-5xl ml-10",href:"https://github.com/stackpress/ink",target:"_blank"},[e.default.createText(`
      `,!1),e.default.createElement("i",{class:"fab fa-github"},[]),e.default.createText(`
    `,!1)]),e.default.createText(`
    `,!1),e.default.createElement("a",{class:"bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center",href:"https://www.npmjs.com/package/@stackpress/ink",target:"_blank"},[e.default.createText(`
      `,!1),e.default.createElement("i",{class:"fab fa-npm tx-white"},[]),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]),e.default.createText(`
`,!1)])]),e.default.createText(`
      `,!1),e.default.createElement("aside",{left:!0},[e.default.createElement("header",{class:"flex flex-center-y bg-t-2 py-15 pr-5 pl-10"},[e.default.createText(`
  `,!1),e.default.createElement("a",{href:"/ink"},[e.default.createText(`
    `,!1),e.default.createElement("img",{class:"h-26 mr-10",src:"/ink/ink-icon.png",alt:"Ink Logo"}),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),e.default.createElement("h3",{class:"flex-grow m-0 tx-upper"},[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"tx-primary",href:"/ink"},[e.default.createText("Ink",!1)]),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),e.default.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:l},[]),e.default.createText(`
`,!1)]),e.default.createText(`
`,!1),e.default.createElement("nav",{class:"bg-t-1 scroll-auto h-calc-full-60"},[e.default.createText(`
  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(n("Introduction")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/index.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(n("Features")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(n("Usage")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(n("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
`,!1)])]),e.default.createText(`
      `,!1),e.default.createElement("main",{},[e.default.createText(`
        `,!1),e.default.createElement("api-docs",{},[e.default.createText(`
          `,!1),e.default.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},[e.default.createText(`
            `,!1),...this._toNodeList(n("Components")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("section",{class:"flex flex-wrap gap-10"},[e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("element-alert",{success:!0},[e.default.createText(`
                  `,!1),e.default.createElement("element-icon",{name:"check-circle"}),e.default.createText(`
                  Good News!
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/alert.html"},[e.default.createText(`
                Alerts
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("element-badge",{warning:!0,curved:!0,class:"mb-10"},[e.default.createText("999",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/badge.html"},[e.default.createText(`
                Badges
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("element-crumbs",{crumbs:i,block:!0,bold:!0,white:!0,underline:!0,"icon-muted":!0,"link-primary":!0,spacing:2}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/crumbs.html"},[e.default.createText(`
                Crumbs
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"info-circle",class:"tx-info"}),e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"exclamation-triangle",class:"tx-warning"}),e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"times-circle",class:"tx-error"}),e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"check-circle",class:"tx-success"}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/icon.html"},[e.default.createText(`
                Icons
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("element-loader",{success:!0,size:5,thickness:5,dotted:!0}),e.default.createText(`
                `,!1),e.default.createElement("element-loader",{info:!0,slice:2}),e.default.createText(`
                `,!1),e.default.createElement("element-loader",{warning:!0,dashed:!0}),e.default.createText(`
                `,!1),e.default.createElement("element-loader",{error:!0,dashed:!0,thickness:10,size:10,speed:1500}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/loader.html"},[e.default.createText(`
                Loaders
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("element-alert",{error:!0},[e.default.createText(`
                  `,!1),e.default.createElement("element-icon",{name:"times-circle"}),e.default.createText(`
                  Errors on Submit
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/notify.html"},[e.default.createText(`
                Notify
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("element-pager",{total:500,range:100,start:90,show:3,next:!0,prev:!0,rewind:!0,forward:!0,white:!0,bold:!0,underline:!0,"bg-info":!0,"border-theme":"bd-2",square:40,select:console.log}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/pager.html"},[e.default.createText(`
                Pagers
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"relative w-full h-full"},[e.default.createText(`
                  `,!1),e.default.createElement("header",{class:"absolute top-0 left-20p right-0 h-50p b-solid b-t-1"},[e.default.createElement("div",{class:"p-5"},[e.default.createText("Head",!1)])]),e.default.createText(`
                  `,!1),e.default.createElement("aside",{class:"absolute w-20p top-0 bottom-0 left-0 b-solid b-t-1"},[e.default.createElement("div",{class:"p-5"},[e.default.createText("Left",!1)])]),e.default.createText(`
                  `,!1),e.default.createElement("aside",{class:"absolute w-30p top-50p bottom-0 right-0 b-solid b-t-1"},[e.default.createElement("div",{class:"p-5"},[e.default.createText("Right",!1)])]),e.default.createText(`
                  `,!1),e.default.createElement("main",{class:"absolute top-50p bottom-0 left-20p right-30p b-solid b-t-1"},[e.default.createElement("div",{class:"p-5"},[e.default.createText("Main",!1)])]),e.default.createText(`
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/panel.html"},[e.default.createText(`
                Panels
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("element-progress",{width:50,info:!0,class:"bg-muted rounded tx-13 h-20 tx-lh-20 w-full-20"}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/progress.html"},[e.default.createText(`
                Progress Bars
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-muted",group:"http",selector:"#http-index-ts"},[e.default.createText(`
                  Tab 1
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-muted",group:"http",selector:"#http-page-ink"},[e.default.createText(`
                  Tab 2
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-muted",group:"http",selector:"#http-package-json"},[e.default.createText(`
                  Tab 3
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/tab.html"},[e.default.createText(`
                Tabs
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("table-layout",{class:"h-90 w-250",top:!0,left:!0,head:"py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0",body:"py-16 px-12 b-solid b-black bt-1 bb-0 bx-0",odd:"bg-t-1",even:"bg-t-0"},[e.default.createText(`
                  `,!1),e.default.createElement("table-row",{col:"b-t-3 bg-t-3"},[e.default.createText(`
                    `,!1),e.default.createElement("table-col",{nowrap:!0},[e.default.createText("John Doe",!1)]),e.default.createText(`
                    `,!1),e.default.createElement("table-col",{},[e.default.createText("21",!1)]),e.default.createText(`
                    `,!1),e.default.createElement("table-col",{"wrap-5":!0},[e.default.createText(`
                      Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit. Duis laoreet lectus eget enim rhoncus, vel 
                      volutpat eros tincidunt. In molestie nunc ut pulvinar 
                      sollicitudin.
                    `,!1)]),e.default.createText(`
                    `,!1),e.default.createElement("table-col",{nowrap:!0},[e.default.createText(`
                      `,!1),e.default.createElement("element-icon",{name:"eye",class:"mr-5 tx-info"}),e.default.createText(`
                      `,!1),e.default.createElement("element-icon",{name:"edit",class:"mr-5 tx-warning"}),e.default.createText(`
                      `,!1),e.default.createElement("element-icon",{name:"trash",class:"tx-error"}),e.default.createText(`
                    `,!1)]),e.default.createText(`
                  `,!1)]),e.default.createText(`
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/table.html"},[e.default.createText(`
                Tables
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("element-tip",{"background-info":!0,curved:!0,top:"-15",left:"50",padding:"5"},[e.default.createText("This is the first and last name",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/tooltip.html"},[e.default.createText(`
                Tooltips
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]),e.default.createText(`
`,!1)])]}};return ye(ot);})();
;
;module.exports = InkAPI;