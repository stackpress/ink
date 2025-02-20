var InkAPI=(()=>{var xe=Object.create;var L=Object.defineProperty;var Te=Object.getOwnPropertyDescriptor;var be=Object.getOwnPropertyNames;var Ee=Object.getPrototypeOf,_e=Object.prototype.hasOwnProperty;var i=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),ye=(a,t)=>{for(var r in t)L(a,r,{get:t[r],enumerable:!0})},ae=(a,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of be(t))!_e.call(a,l)&&l!==r&&L(a,l,{get:()=>t[l],enumerable:!(s=Te(t,l))||s.enumerable});return a};var I=(a,t,r)=>(r=a!=null?xe(Ee(a)):{},ae(t||!a||!a.__esModule?L(r,"default",{value:a,enumerable:!0}):r,a)),ge=a=>ae(L({},"__esModule",{value:!0}),a);var m=i(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});var P=class{constructor(){this._parent=null}get parent(){return this._parent}get parentElement(){return this._parent}set parent(t){this._parent=t}};j.default=P});var q=i(p=>{"use strict";var ke=p&&p.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(p,"__esModule",{value:!0});var Ne=ke(m()),R=class extends Ne.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#comment",this.type=8,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!--${this.value}-->`}};p.default=R});var B=i(x=>{"use strict";var ve=x&&x.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(x,"__esModule",{value:!0});var Le=ve(m()),U=class extends Le.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#doctype",this.type=10,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!DOCTYPE ${this.value}>`}};x.default=U});var G=i(T=>{"use strict";var we=T&&T.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(T,"__esModule",{value:!0});var Oe=we(m()),De=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],F=class a extends Oe.default{get attributes(){return Object.fromEntries(this._attributes)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof a)}get nodeName(){return this.name.toUpperCase()}get nodes(){let t=[this];return this._flatten(Array.from(this.children),t),t}get nodeType(){return this.type}get parent(){return this._parent}set parent(t){this._parent=t}constructor(t,r={},s=[]){super(),this.type=1,this._parent=null,this.name=t,this._attributes=new Map(Object.entries(r)),this.children=new Set(s.filter(Boolean))}appendChild(t){return this.children.add(t),t.parent=this,this}export(){return{type:this.type,name:this.name,attributes:Object.fromEntries(this._attributes.entries()),children:Array.from(this.children).map(t=>t.export())}}getAttribute(t){return this._attributes.get(t)}hasAttribute(t){return this._attributes.has(t)}removeAttribute(t){return this._attributes.delete(t),this}removeChild(t){this.children.delete(t),t.parent=null}setAttribute(t,r){return this._attributes.set(t,r),this}toString(){let t=Array.from(this._attributes.entries()),r=t.length>0?" "+t.map(([l,o])=>{if(typeof o=="string"&&!/["<>\n]/.test(o))return`${l}="${o}"`;if(typeof o=="boolean")return o?l:""}).join(" "):"";if(De.includes(this.name))return`<${this.name}${r} />`;let s=Array.from(this.children.values()).map(l=>l.toString()).join("");return`<${this.name}${r}>${s}</${this.name}>`}_flatten(t,r){t.forEach(s=>{r.push(s),s instanceof a&&this._flatten(Array.from(s.children),r)})}};T.default=F});var $=i(b=>{"use strict";var Se=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var Ce=Se(m()),Y=class extends Ce.default{get nodeName(){return"#text"}get nodeType(){return this.type}get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,r=!1){super(),this.name="#text",this.type=3,this._escape=r,this._value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return this.value}};b.default=Y});var O=i(E=>{"use strict";var w=E&&E.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(E,"__esModule",{value:!0});var Me=w(q()),Ae=w(B()),H=w(G()),Ie=w($()),W=class a{static createComment(t,r){let s=new Me.default(t);return r&&(s.parent=r),s}static createDoctype(t="html",r){let s=new Ae.default(t);return r&&(s.parent=r),s}static createElement(t,r={},s=[],l){let o=new H.default(t,r,s);return l&&(o.parent=l),o}static createText(t,r=!1,s){let l=new Ie.default(t,r);return s&&(l.parent=s),l}static import(t,r){return t.map(s=>{let{value:l}=s,{name:o,attributes:f,children:d}=s;switch(s.type){case 1:let h=this.createElement(o,f,[],r);return a.import(d,h).forEach(A=>h.appendChild(A)),h;case 3:return this.createText(l,!0,r);case 8:return this.createComment(l,r);case 10:return this.createDoctype(l,r)}return null}).filter(Boolean)}static load(t){return new a(t)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof H.default)}get nodes(){return Array.from(this.children).map(t=>t instanceof H.default?t.nodes:[t]).flat()}constructor(t){this.children=new Set(t.filter(Boolean))}export(){return this.childList.map(t=>t.export())}toString(){return Array.from(this.children).map(t=>t.toString()).join("")}};E.default=W});var se=i(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.getStatus=Pe;var re={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};D.default=re;function Pe(a){return Object.values(re).find(t=>t.code===a)}});var le=i(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});var je=se(),J=class a extends Error{static for(t,...r){return r.forEach(function(s){t=t.replace("%s",String(s))}),new this(t)}static forErrors(t){let r=new this("Invalid Parameters");return r.withErrors(t),r}static require(t,r,...s){if(!t){for(let l of s)r=r.replace("%s",l);throw new this(r)}}static try(t){return{catch:r=>{try{return t()}catch(s){if(s instanceof a)return r(s,s.type);if(s instanceof Error){let l=a.upgrade(s);return r(l,l.type)}else if(typeof s=="string"){let l=a.for(s);return r(l,l.type)}return r(s,"unknown")}}}}static upgrade(t,r=500){if(t instanceof a)return t;let s=new this(t.message,r);return s.name=t.name,s.stack=t.stack,s}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,r=500){var s;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=r,this._status=((s=(0,je.getStatus)(r))===null||s===void 0?void 0:s.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,r=0){let s={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,r)};return Object.keys(this._errors).length>0&&(s.errors=this._errors),s}trace(t=0,r=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,r||this.stack.length).map(l=>l.trim()).map(l=>{if(!l.startsWith("at"))return!1;let[o,f,d]=l.split(" ");d||(d=`(${f})`,f="<none>");let[h,A,pe]=d.substring(1,d.length-1).split(":");return{method:f,file:h,line:parseInt(A)||0,char:parseInt(pe)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,r){return this._start=t,this._end=r,this}};V.default=J});var Q=i(_=>{"use strict";var Re=_&&_.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(_,"__esModule",{value:!0});var qe=Re(le()),K=class extends qe.default{};_.default=K});var y=i(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});var Ue=new Map;z.default=Ue});var te=i(g=>{"use strict";var ee=g&&g.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(g,"__esModule",{value:!0});var Be=ee(Q()),ce=ee(O()),X=ee(y()),Z=class{render(t={}){X.default.set("props",t||{});let r=process.env||{};X.default.set("env",Object.assign(Object.assign({},r),{BUILD_ID:this.id()}));let s=JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(X.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(r).filter(f=>f[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})),l=this.template(),o=ce.default.load(l).toString().trim();if(!o.toLowerCase().startsWith("<html"))throw Be.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${o.replace("__TEMPLATE_DATA__",s)}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(r=>typeof r=="object"&&typeof r.nodeType=="number")?t:[ce.default.createText(String(t),!0)]}};g.default=Z});var ne=i(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.ServerEmitter=void 0;var S=class{emit(t,r){return this}on(t,r){return this}once(t,r){return this}unbind(t,r){return this}};k.ServerEmitter=S;var Fe=new S;k.default=Fe});var ie=i(N=>{"use strict";var Ge=N&&N.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(N,"__esModule",{value:!0});var Ye=Ge(y());function $e(a){let t=Ye.default.get("env")||{};return a?t[a]||null:t}N.default=$e});var oe=i(v=>{"use strict";var He=v&&v.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(v,"__esModule",{value:!0});v.default=Je;var We=He(y());function Je(){return We.default.get("props")||{}}});var fe=i(n=>{"use strict";var Ve=n&&n.__createBinding||(Object.create?function(a,t,r,s){s===void 0&&(s=r);var l=Object.getOwnPropertyDescriptor(t,r);(!l||("get"in l?!t.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(a,s,l)}:function(a,t,r,s){s===void 0&&(s=r),a[s]=t[r]}),Ke=n&&n.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),Qe=n&&n.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(r){var s=[];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[s.length]=l);return s},a(t)};return function(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var s=a(t),l=0;l<s.length;l++)s[l]!=="default"&&Ve(r,t,s[l]);return Ke(r,t),r}}(),u=n&&n.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(n,"__esModule",{value:!0});n.props=n.emitter=n.env=n.data=n.ServerException=n.ServerEmitter=n.ServerDocument=n.DOMNode=n.DOMText=n.DOMElement=n.DOMDocument=n.DOMDoctype=n.DOMComment=void 0;var ze=u(q());n.DOMComment=ze.default;var Xe=u(B());n.DOMDoctype=Xe.default;var Ze=u(O());n.DOMDocument=Ze.default;var et=u(G());n.DOMElement=et.default;var tt=u($());n.DOMText=tt.default;var at=u(m());n.DOMNode=at.default;var rt=u(te());n.ServerDocument=rt.default;var ue=Qe(ne());n.emitter=ue.default;Object.defineProperty(n,"ServerEmitter",{enumerable:!0,get:function(){return ue.ServerEmitter}});var st=u(y());n.data=st.default;var lt=u(ie());n.env=lt.default;var ct=u(oe());n.props=ct.default;var nt=u(Q());n.ServerException=nt.default});var me=i((Lt,de)=>{de.exports={...fe()}});var ot={};ye(ot,{default:()=>M});var e=I(O()),he=I(te()),C=I(me());var c=function(a,...t){let r=it(a);for(let s=0;s<t.length;s++)r=r.replace("%s",String(t[s]));return r},it=function(a){return a};var M=class extends he.default{id(){return"a98612416a44af00aabd"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/docs/markup-syntax.html",r=c("Markup Syntax - Ink reactive web component template engine."),s=c("Learn how to write markup in Ink."),l=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[e.default.createText(`
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
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,C.env)("BUILD_ID")}.css`}),e.default.createElement("script",{"data-template":!0,type:"text/json"},[e.default.createText("__TEMPLATE_DATA__",!0)]),e.default.createText(`
  `,!1),e.default.createElement("script",{src:`/ink/build/client/${(0,C.env)("BUILD_ID")}.js`}),e.default.createText(`
  `,!1),...(0,C.env)("PUBLIC_ENV")==="development"?[e.default.createText(`
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
      `,!1),e.default.createElement("aside",{right:!0},[e.default.createText(`
        `,!1),e.default.createElement("menu",{class:"m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto"},[e.default.createText(`
          `,!1),e.default.createElement("h6",{class:"tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper"},[e.default.createText(`
            `,!1),...this._toNodeList(c("On this page")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("nav",{class:"tx-14 tx-lh-32"},[e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#imports"},[...this._toNodeList(c("Imports"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#styles"},[...this._toNodeList(c("Styles"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#scripts"},[...this._toNodeList(c("Scripts"))]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#markup"},[...this._toNodeList(c("Markup"))]),e.default.createText(`
            `,!1),e.default.createElement("nav",{class:"pl-20"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-t-1",href:"#tagnames"},[...this._toNodeList(c("Tag Names"))]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-t-1",href:"#attributes"},[...this._toNodeList(c("Attributes"))]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-t-1",href:"#conditionals"},[...this._toNodeList(c("Conditionals"))]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-t-1",href:"#iterations"},[...this._toNodeList(c("Iterations"))]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-t-1",href:"#trycatch"},[...this._toNodeList(c("Try/Catch"))]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
      `,!1),e.default.createElement("main",{},[e.default.createText(`
        `,!1),e.default.createElement("api-docs",{},[e.default.createText(`
          `,!1),e.default.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},[e.default.createText(`
            `,!1),...this._toNodeList(c("Markup Syntax")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Components are the building blocks of Ink files. Documents 
            and page level markup are written in 
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText(".ink",!1)]),e.default.createText(` files. Components 
            and templates are written in 
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText(".ink",!1)]),e.default.createText(` files. In both 
            cases, the code is written in a superset of HTML.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The four sections that make up a ink file \u2014 imports, 
            script, styles and markup \u2014 are all optional and can be 
            used in any order.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Code Structure",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,detab:14},[...this._toNodeList(`
              <!-- imports go here -->

              <style>
                /* styles go here */
              </style>

              <script>
                // logic goes here
              </script>
              
              <!-- HTML goes here -->
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"imports"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(c("Imports")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Imports are used to include additional components, templates 
            and stylesheets in the current component. Components can 
            be imported as a `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("template",!1)]),e.default.createText(` or 
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("component",!1)]),e.default.createText(` type.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Import Examples",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
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
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("rel",!1)]),e.default.createText(` attribute 
            specifies the relationship between the current document and 
            the linked resource. 
            
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText('rel="import"',!1)]),e.default.createText(` denotes
            that the imported resource is a component or template.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("type",!1)]),e.default.createText(` 
            attribute specifies the type of the linked resource. 
            
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText('type="component"',!1)]),e.default.createText(` 
            imports a web component that can be used as regular markup
            with attributes and children. 
            
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText('type="template"',!1)]),e.default.createText(` 
            imports a template partial that can be included in the current 
            markup. Template partials do not process attributes or children
            if given.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The 
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("href",!1)]),e.default.createText(` attribute specifies
            the URL of the linked resource. The 
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("name",!1)]),e.default.createText(`
            attribute specifies the tag name of the imported component or template.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"styles"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(c("Styles")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            CSS styles inside a `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<style>")]),e.default.createText(` 
            block enables the native `,!1),e.default.createElement("a",{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM"},[e.default.createText("shadow DOM",!1)]),e.default.createText(` and will be scoped only to that component. 
            Additionally styles defined outside of the component such as 
            global styles will not affect the component.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            External stylesheets can be imported using the 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<link>")]),e.default.createText(` tag or using 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("@import()")]),e.default.createText(` CSS directive. 
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can use host selectors to style an element from within 
            a component. The `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList(":host")]),e.default.createText(` 
            pseudo-class always applies styles to the root element of the 
            web component.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Using :host",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <style>
                :host {
                  display: block;
                }
              </style>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can also add conditional styles using the 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList(":host")]),e.default.createText(` selector function. 
            This can be used to style the host so long as it matches the 
            given selector. For example, it can be used to select for 
            hosts that have a given attribute or class.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:":host Conditionals",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
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
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"scripts"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(c("Scripts")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<script>")]),e.default.createText(` block is used 
            to write TypeScript logic for the component. The script block 
            can be used to define variables, functions, and event listeners.
            Variables declared (or imported) at the top level are 
            'visible' from the component's markup. 
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Top-Level Variables",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <script>
                const title = 'Hello World';
              </script>

              <h1>{title}</h1>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<script>")]),e.default.createText(` block can also 
            be used to import variables from other components to be used
            in the markup.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Importing Files",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <script>
                import getTitle from './getTitle';
                const title = getTitle();
              </script>

              <h1 title={title}>{title}</h1>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can use `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("@/")]),e.default.createText(` to prefix the 
            current working directory. This is useful when importing
            files completely in a separate directory in your project
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"@ Imports",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <script>
                import getTitle from '@/data/getTitle';
                const title = getTitle();
              </script>

              <h1 title={title}>{title}</h1>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"markup"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(c("Markup")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            In order to be closer to the native, Ink follows the same 
            standards and conventions as HTML5 web components. Ink 
            components are compiled to native web components that possibly 
            can be used in other projects any modern browser.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"tagnames"},[]),e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},[e.default.createText(`
            `,!1),...this._toNodeList(c("Tag Names")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            For web components it's recommended that tag names must have 
            at least one dash (-) in them. As such you probably want to 
            name your element with two distinct words like 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("i18n-translate")]),e.default.createText(`. You can 
            use as many dashes as you want, you're not limited to one. 
            Some specific rules to follow in order to make a valid tag 
            name:
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ul",{},[e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              It must use all lowercase characters of the alphabet (a-z).
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              It must contain at least one dash (-). Ink will 
              auto prefix component names based on your configuration.
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              It must not be an already reserved tag name including 
              `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("annotation-xml",!1)]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("color-profile",!1)]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("font-face",!1)]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("font-face-src",!1)]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("font-face-uri",!1)]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("font-face-format",!1)]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("font-face-name",!1)]),e.default.createText(`, and 
              `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("missing-glyph",!1)]),e.default.createText(`.
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              It must not contain symbols, like =, @, $.
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              It can contain underscores, and numbers.
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              It can contain characters from different alphabets, 
              such as \xE9, \xF0, \xF6, \u7231.
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Additionally, Ink works best with correct markup. The 
            following standards should be followed:
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ul",{},[e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              Self closing tags like 
              `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<img />")]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<link />")]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<meta />")]),e.default.createText(`,
              `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<input />")]),e.default.createText(`
              must have a slash before the closing.
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              When using tables, rows should be wrapped in a 
              `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<tbody>")]),e.default.createText(` tag and cells
              should be wrapped in a `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<tr>")]),e.default.createText(` 
              tag. ie. `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<table><tbody><tr><td>")]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},[e.default.createText(`
              When using lists, items should be wrapped in a 
              `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<ul>")]),e.default.createText(` or 
              `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<ol>")]),e.default.createText(` tags.
              ie. `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<ul><li>")]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("element-alert",{solid:!0,curved:!0,secondary:!0,class:"my-20 tx-lh-24"},[e.default.createText(`
            `,!1),e.default.createElement("element-icon",{name:"exclamation-triangle"}),e.default.createText(`
            `,!1),e.default.createElement("strong",{},[e.default.createText("Warning:",!1)]),e.default.createText(` Any markup auto corrected by browser will cause data syncing 
            issues with Ink.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Ink components can loosely be self closing
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<i18n-translate />")]),e.default.createText(`
            or expressed as a block
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<i18n-translate></i18n-translate>")]),e.default.createText(`.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"attributes"},[]),e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},[e.default.createText(`
            `,!1),...this._toNodeList(c("Attributes")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Markup Expressions"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <a title={title} {href} {...attributes}>
                {title}
              </a>
              <i18n-translate title=title>
                {detail}
              </i18n-translate>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Attributes can be bound to expressions using the 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("{}")]),e.default.createText(` syntax. 
            Expressions can be variables, functions, or any valid 
            JavaScript expression. By default, attributes work exactly 
            like their HTML counterparts.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{trim:!0},[...this._toNodeList(`
              <button type="button" disabled>Submit</button>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Traditional HTML attributes can be assigned string values or 
            no value evaluates as `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("true")]),e.default.createText(`.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{trim:!0},[...this._toNodeList(`
            <a title={title}>Click</a>
          `)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Attributes can be assigned variable names.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{trim:!0},[...this._toNodeList(`
            <a title=title>Click</a>
          `)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Variable names do not need to be wrapped in curly braces
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("{}")]),e.default.createText(`.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{trim:!0},[...this._toNodeList(`
            <a {title}>Click</a>
          `)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Attributes with the same name as a variable can be assigned
            by just wrapping curly braces. ie. 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("{title}")]),e.default.createText(`.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{trim:!0,detab:14},[...this._toNodeList(`
              <script>
                const attributes = { target: '_blank' };
              </script>
              <a {...attributes}>Click</a>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Spread operators can be used to assign multiple attributes.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <script>
                let count = 10
                const metadata = { foo: 'bar', baz: 1, qux: true };
                const data = () => metadata
              </script>
              <a {count} get={data} data-meta={metadata} disable={count < 10}>
                Click
              </a>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can assign any valid JavaScript expression to an attribute.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"conditionals"},[]),e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},[e.default.createText(`
            `,!1),...this._toNodeList(c("Conditionals")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Conditionals",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <if true={count > 10}>
                <p>Count is greater than 10</p>
              <elif true={count < 5} />
                <p>Count is less than 5</p>
              <else />
                <p>Count is between 5 and 10</p>
              </if>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Conditionals can be used to show or hide elements based on 
            the value of a variable.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <if true={count > 10}>
                <p>Count is greater than 10</p>
              </if>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The basic syntax for an if statement looks like this and can be 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("truesy")]),e.default.createText(` or 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("falsey")]),e.default.createText(`.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <if false={count > 10}>
                <p>Count is not greater than 10</p>
              </if>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can also use the `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("false")]),e.default.createText(`
            attribute to negate the condition.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <if true={count > 10}>
                <p>Count is greater than 10</p>
              <else />
                <p>Count is less than or equal to 10</p>
              </if>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can use the `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("else")]),e.default.createText(` block to 
            show content when the condition is false.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:12},[...this._toNodeList(`
            <if true={count > 10}>
              <p>Count is greater than 10</p>
            <elif true={count < 5} />
              <p>Count is less than 5</p>
            </if>
          `)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can use the `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("elif")]),e.default.createText(` block to 
            show content when the previous condition is false.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"iterations"},[]),e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},[e.default.createText(`
            `,!1),...this._toNodeList(c("Iterations")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Each",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <each key=index value=article from=articles>
                <h1>#{index + 1} {article.title}</h1>
                <p>{article.body}</p>
              </each>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<each>")]),e.default.createText(` block can be used 
            to iterate over an array of items or objects.
            The `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("from")]),e.default.createText(` attribute value is 
            required and can be an array, object or JavaScript expression 
            that evaluates to an array or object. Both the 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("key")]),e.default.createText(` and 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("value")]),e.default.createText(` attributes are optional.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("div",{class:"scroll-auto bg-black"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <each value={article} from={articles}>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
              </each>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The value of `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("value")]),e.default.createText(`, in this 
            case `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("article")]),e.default.createText(` can be used 
            only with in the block. This can be any valid JavaScript 
            variable name.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:12},[...this._toNodeList(`
            <each key={index} from={[1, 2, 3]}>
              <h1>#{index} ???</h1>
            </each>
          `)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The value of `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("key")]),e.default.createText(`, in this 
            case `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("index")]),e.default.createText(` can be used 
            only with in the block. This can be any valid JavaScript 
            variable name.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"trycatch"},[]),e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},[e.default.createText(`
            `,!1),...this._toNodeList(c("Try/Catch")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Try/Catch Example",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <try>
                <p>{mayCauseError()}</p>
              <catch error={e} />
                <p>Error: {e.message}</p>
              </try>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<try><catch>")]),e.default.createText(` block can 
            be used to catch errors that occur in the block. The 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<catch>")]),e.default.createText(` block is required and 
            can be used to handle the error.

            The value of `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("error")]),e.default.createText(`, in the  
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<catch>")]),e.default.createText(` block in this case
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("e")]),e.default.createText(` is an 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("Error")]),e.default.createText(` object
            that can only be used with in the block. 
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("nav",{class:"flex"},[e.default.createText(`
            `,!1),e.default.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/getting-started.html"},[e.default.createText(`
              `,!1),e.default.createElement("element-icon",{name:"chevron-left",theme:"tx-1"}),e.default.createText(`
              `,!1),...this._toNodeList(c("Getting Started")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/state-management.html"},[e.default.createText(`
              `,!1),...this._toNodeList(c("State Management")),e.default.createText(`
              `,!1),e.default.createElement("element-icon",{name:"chevron-right",theme:"tx-1"}),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("footer",{class:"foot"},[]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]),e.default.createText(`
`,!1)])]}};return ge(ot);})();
;
;module.exports = InkAPI;