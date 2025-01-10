var InkAPI=(()=>{var xe=Object.create;var N=Object.defineProperty;var Te=Object.getOwnPropertyDescriptor;var _e=Object.getOwnPropertyNames;var Ee=Object.getPrototypeOf,ge=Object.prototype.hasOwnProperty;var i=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),be=(r,t)=>{for(var a in t)N(r,a,{get:t[a],enumerable:!0})},re=(r,t,a,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of _e(t))!ge.call(r,n)&&n!==a&&N(r,n,{get:()=>t[n],enumerable:!(s=Te(t,n))||s.enumerable});return r};var j=(r,t,a)=>(a=r!=null?xe(Ee(r)):{},re(t||!r||!r.__esModule?N(a,"default",{value:r,enumerable:!0}):a,r)),ye=r=>re(N({},"__esModule",{value:!0}),r);var p=i(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});var R=class{constructor(){this._parent=null}get parent(){return this._parent}get parentElement(){return this._parent}set parent(t){this._parent=t}};I.default=R});var q=i(m=>{"use strict";var ke=m&&m.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(m,"__esModule",{value:!0});var ve=ke(p()),C=class extends ve.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#comment",this.type=8,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!--${this.value}-->`}};m.default=C});var B=i(x=>{"use strict";var Oe=x&&x.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(x,"__esModule",{value:!0});var Ne=Oe(p()),U=class extends Ne.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#doctype",this.type=10,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!DOCTYPE ${this.value}>`}};x.default=U});var F=i(T=>{"use strict";var De=T&&T.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(T,"__esModule",{value:!0});var Le=De(p()),Ae=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],G=class r extends Le.default{get attributes(){return Object.fromEntries(this._attributes)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof r)}get nodeName(){return this.name.toUpperCase()}get nodes(){let t=[this];return this._flatten(Array.from(this.children),t),t}get nodeType(){return this.type}get parent(){return this._parent}set parent(t){this._parent=t}constructor(t,a={},s=[]){super(),this.type=1,this._parent=null,this.name=t,this._attributes=new Map(Object.entries(a)),this.children=new Set(s.filter(Boolean))}appendChild(t){return this.children.add(t),t.parent=this,this}export(){return{type:this.type,name:this.name,attributes:Object.fromEntries(this._attributes.entries()),children:Array.from(this.children).map(t=>t.export())}}getAttribute(t){return this._attributes.get(t)}hasAttribute(t){return this._attributes.has(t)}removeAttribute(t){return this._attributes.delete(t),this}removeChild(t){this.children.delete(t),t.parent=null}setAttribute(t,a){return this._attributes.set(t,a),this}toString(){let t=Array.from(this._attributes.entries()),a=t.length>0?" "+t.map(([n,o])=>{if(typeof o=="string"&&!/["<>\n]/.test(o))return`${n}="${o}"`;if(typeof o=="boolean")return o?n:""}).join(" "):"";if(Ae.includes(this.name))return`<${this.name}${a} />`;let s=Array.from(this.children.values()).map(n=>n.toString()).join("");return`<${this.name}${a}>${s}</${this.name}>`}_flatten(t,a){t.forEach(s=>{a.push(s),s instanceof r&&this._flatten(Array.from(s.children),a)})}};T.default=G});var H=i(_=>{"use strict";var we=_&&_.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(_,"__esModule",{value:!0});var Se=we(p()),$=class extends Se.default{get nodeName(){return"#text"}get nodeType(){return this.type}get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,a=!1){super(),this.name="#text",this.type=3,this._escape=a,this._value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return this.value}};_.default=$});var L=i(E=>{"use strict";var D=E&&E.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(E,"__esModule",{value:!0});var Me=D(q()),Pe=D(B()),Y=D(F()),je=D(H()),W=class r{static createComment(t,a){let s=new Me.default(t);return a&&(s.parent=a),s}static createDoctype(t="html",a){let s=new Pe.default(t);return a&&(s.parent=a),s}static createElement(t,a={},s=[],n){let o=new Y.default(t,a,s);return n&&(o.parent=n),o}static createText(t,a=!1,s){let n=new je.default(t,a);return s&&(n.parent=s),n}static import(t,a){return t.map(s=>{let{value:n}=s,{name:o,attributes:f,children:d}=s;switch(s.type){case 1:let h=this.createElement(o,f,[],a);return r.import(d,h).forEach(P=>h.appendChild(P)),h;case 3:return this.createText(n,!0,a);case 8:return this.createComment(n,a);case 10:return this.createDoctype(n,a)}return null}).filter(Boolean)}static load(t){return new r(t)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof Y.default)}get nodes(){return Array.from(this.children).map(t=>t instanceof Y.default?t.nodes:[t]).flat()}constructor(t){this.children=new Set(t.filter(Boolean))}export(){return this.childList.map(t=>t.export())}toString(){return Array.from(this.children).map(t=>t.toString()).join("")}};E.default=W});var se=i(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.getStatus=Re;var ae={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};A.default=ae;function Re(r){return Object.values(ae).find(t=>t.code===r)}});var ne=i(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});var Ie=se(),K=class r extends Error{static for(t,...a){return a.forEach(function(s){t=t.replace("%s",String(s))}),new this(t)}static forErrors(t){let a=new this("Invalid Parameters");return a.withErrors(t),a}static require(t,a,...s){if(!t){for(let n of s)a=a.replace("%s",n);throw new this(a)}}static try(t){return{catch:a=>{try{return t()}catch(s){if(s instanceof r)return a(s,s.type);if(s instanceof Error){let n=r.upgrade(s);return a(n,n.type)}else if(typeof s=="string"){let n=r.for(s);return a(n,n.type)}return a(s,"unknown")}}}}static upgrade(t,a=500){if(t instanceof r)return t;let s=new this(t.message,a);return s.name=t.name,s.stack=t.stack,s}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,a=500){var s;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=a,this._status=((s=(0,Ie.getStatus)(a))===null||s===void 0?void 0:s.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,a=0){let s={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,a)};return Object.keys(this._errors).length>0&&(s.errors=this._errors),s}trace(t=0,a=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,a||this.stack.length).map(n=>n.trim()).map(n=>{if(!n.startsWith("at"))return!1;let[o,f,d]=n.split(" ");d||(d=`(${f})`,f="<none>");let[h,P,me]=d.substring(1,d.length-1).split(":");return{method:f,file:h,line:parseInt(P)||0,char:parseInt(me)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,a){return this._start=t,this._end=a,this}};Q.default=K});var J=i(g=>{"use strict";var Ce=g&&g.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(g,"__esModule",{value:!0});var qe=Ce(ne()),V=class extends qe.default{};g.default=V});var b=i(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});var Ue=new Map;z.default=Ue});var te=i(y=>{"use strict";var ee=y&&y.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(y,"__esModule",{value:!0});var Be=ee(J()),le=ee(L()),X=ee(b()),Z=class{render(t={}){X.default.set("props",t||{});let a=process.env||{};X.default.set("env",Object.assign(Object.assign({},a),{BUILD_ID:this.id()}));let s=JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(X.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(a).filter(f=>f[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})),n=this.template(),o=le.default.load(n).toString().trim();if(!o.toLowerCase().startsWith("<html"))throw Be.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${o.replace("__TEMPLATE_DATA__",s)}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(a=>typeof a=="object"&&typeof a.nodeType=="number")?t:[le.default.createText(String(t),!0)]}};y.default=Z});var ce=i(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.ServerEmitter=void 0;var w=class{emit(t,a){return this}on(t,a){return this}once(t,a){return this}unbind(t,a){return this}};k.ServerEmitter=w;var Ge=new w;k.default=Ge});var ie=i(v=>{"use strict";var Fe=v&&v.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(v,"__esModule",{value:!0});var $e=Fe(b());function He(r){let t=$e.default.get("env")||{};return r?t[r]||null:t}v.default=He});var oe=i(O=>{"use strict";var Ye=O&&O.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(O,"__esModule",{value:!0});O.default=Ke;var We=Ye(b());function Ke(){return We.default.get("props")||{}}});var fe=i(l=>{"use strict";var Qe=l&&l.__createBinding||(Object.create?function(r,t,a,s){s===void 0&&(s=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(r,s,n)}:function(r,t,a,s){s===void 0&&(s=a),r[s]=t[a]}),Ve=l&&l.__setModuleDefault||(Object.create?function(r,t){Object.defineProperty(r,"default",{enumerable:!0,value:t})}:function(r,t){r.default=t}),Je=l&&l.__importStar||function(){var r=function(t){return r=Object.getOwnPropertyNames||function(a){var s=[];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(s[s.length]=n);return s},r(t)};return function(t){if(t&&t.__esModule)return t;var a={};if(t!=null)for(var s=r(t),n=0;n<s.length;n++)s[n]!=="default"&&Qe(a,t,s[n]);return Ve(a,t),a}}(),u=l&&l.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(l,"__esModule",{value:!0});l.props=l.emitter=l.env=l.data=l.ServerException=l.ServerEmitter=l.ServerDocument=l.DOMNode=l.DOMText=l.DOMElement=l.DOMDocument=l.DOMDoctype=l.DOMComment=void 0;var ze=u(q());l.DOMComment=ze.default;var Xe=u(B());l.DOMDoctype=Xe.default;var Ze=u(L());l.DOMDocument=Ze.default;var et=u(F());l.DOMElement=et.default;var tt=u(H());l.DOMText=tt.default;var rt=u(p());l.DOMNode=rt.default;var at=u(te());l.ServerDocument=at.default;var ue=Je(ce());l.emitter=ue.default;Object.defineProperty(l,"ServerEmitter",{enumerable:!0,get:function(){return ue.ServerEmitter}});var st=u(b());l.data=st.default;var nt=u(ie());l.env=nt.default;var lt=u(oe());l.props=lt.default;var ct=u(J());l.ServerException=ct.default});var pe=i((Nt,de)=>{de.exports={...fe()}});var ot={};be(ot,{default:()=>M});var e=j(L()),he=j(te()),S=j(pe());var c=function(r,...t){let a=it(r);for(let s=0;s<t.length;s++)a=a.replace("%s",String(t[s]));return a},it=function(r){return r};var M=class extends he.default{id(){return"b850022d56283c8ebbb8"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/docs/developer-tools.html",a=c("Developer Tools - Ink reactive web component template engine."),s=c("Enable tools for a better developer experience and debugging."),n=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[e.default.createText(`
`,!1),e.default.createElement("html",{},[e.default.createText(`
  `,!1),e.default.createElement("head",{},[e.default.createText(`
  `,!1),e.default.createElement("meta",{charset:"utf-8"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.default.createText(`
  `,!1),e.default.createElement("title",{},[...this._toNodeList(a)]),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"description",content:s}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:title",content:a}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:description",content:s}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:type",content:"website"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:card",content:"summary"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:site",content:"@stackpress"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:title",content:a}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:description",content:s}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,S.env)("BUILD_ID")}.css`}),e.default.createElement("script",{"data-template":!0,type:"text/json"},[e.default.createText("__TEMPLATE_DATA__",!0)]),e.default.createText(`
  `,!1),e.default.createElement("script",{src:`/ink/build/client/${(0,S.env)("BUILD_ID")}.js`}),e.default.createText(`
  `,!1),...(0,S.env)("PUBLIC_ENV")==="development"?[e.default.createText(`
    `,!1),e.default.createElement("script",{src:"/dev.js"}),e.default.createText(`
  `,!1)]:[],e.default.createText(`
`,!1)]),e.default.createText(`
  `,!1),e.default.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},[e.default.createText(`
    `,!1),e.default.createElement("panel-layout",{},[e.default.createText(`
      `,!1),e.default.createElement("header",{},[e.default.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},[e.default.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.default.createText(`
    `,!1),e.default.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:n},[]),e.default.createText(`
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
  `,!1),e.default.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:n},[]),e.default.createText(`
`,!1)]),e.default.createText(`
`,!1),e.default.createElement("nav",{class:"bg-t-1 scroll-auto h-calc-full-60"},[e.default.createText(`
  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(c("Introduction")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/index.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(c("Features")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(c("Usage")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(c("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
`,!1)])]),e.default.createText(`
      `,!1),e.default.createElement("main",{},[e.default.createText(`
        `,!1),e.default.createElement("api-docs",{},[e.default.createText(`
          `,!1),e.default.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},[e.default.createText(`
            `,!1),...this._toNodeList(c("Developer Tools")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Ink provides a separate package for a better development 
            experience when working with server frameworks that utilize 
            the native http module. Start by installing adding 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("@stackpress/ink-dev")]),e.default.createText(`
            to your project.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npm install --save-dev @stackpress/ink-dev
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Next, import the `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("dev()")]),e.default.createText(` 
            function from the package and use it in your existing 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("src/index.ts")]),e.default.createText(` 
            file to create a development server as shown in the example below.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"src/index.ts",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:12},[...this._toNodeList(`
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
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Lastly, update the document file 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("src/page.ink")]),e.default.createText(` 
            to include the development script 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList('<script src="/dev.js"></script>')]),e.default.createText(` 
            as shown below.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"src/page.ink",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:12},[...this._toNodeList(`
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
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Run the following command in terminal.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Whenever `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("src/page.ink")]),e.default.createText(` 
            is updated, the development server will automatically refresh 
            the page. Components will also be updated in real-time.
          `,!1)]),e.default.createText(`
          
          `,!1),e.default.createElement("nav",{class:"flex"},[e.default.createText(`
            `,!1),e.default.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
              `,!1),e.default.createElement("element-icon",{name:"chevron-left",theme:"tx-1"}),e.default.createText(`
              `,!1),...this._toNodeList(c("Component Publisher")),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("footer",{class:"foot"},[]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]),e.default.createText(`
`,!1)])]}};return ye(ot);})();
;
;module.exports = InkAPI;