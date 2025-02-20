var InkAPI=(()=>{var he=Object.create;var N=Object.defineProperty;var Te=Object.getOwnPropertyDescriptor;var be=Object.getOwnPropertyNames;var ge=Object.getPrototypeOf,Ee=Object.prototype.hasOwnProperty;var o=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),ye=(a,t)=>{for(var s in t)N(a,s,{get:t[s],enumerable:!0})},ae=(a,t,s,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of be(t))!Ee.call(a,l)&&l!==s&&N(a,l,{get:()=>t[l],enumerable:!(r=Te(t,l))||r.enumerable});return a};var P=(a,t,s)=>(s=a!=null?he(ge(a)):{},ae(t||!a||!a.__esModule?N(s,"default",{value:a,enumerable:!0}):s,a)),ve=a=>ae(N({},"__esModule",{value:!0}),a);var m=o(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});var C=class{constructor(){this._parent=null}get parent(){return this._parent}get parentElement(){return this._parent}set parent(t){this._parent=t}};M.default=C});var R=o(x=>{"use strict";var ke=x&&x.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(x,"__esModule",{value:!0});var _e=ke(m()),q=class extends _e.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#comment",this.type=8,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!--${this.value}-->`}};x.default=q});var B=o(h=>{"use strict";var we=h&&h.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(h,"__esModule",{value:!0});var Ne=we(m()),U=class extends Ne.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#doctype",this.type=10,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!DOCTYPE ${this.value}>`}};h.default=U});var H=o(T=>{"use strict";var je=T&&T.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(T,"__esModule",{value:!0});var De=je(m()),Le=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],$=class a extends De.default{get attributes(){return Object.fromEntries(this._attributes)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof a)}get nodeName(){return this.name.toUpperCase()}get nodes(){let t=[this];return this._flatten(Array.from(this.children),t),t}get nodeType(){return this.type}get parent(){return this._parent}set parent(t){this._parent=t}constructor(t,s={},r=[]){super(),this.type=1,this._parent=null,this.name=t,this._attributes=new Map(Object.entries(s)),this.children=new Set(r.filter(Boolean))}appendChild(t){return this.children.add(t),t.parent=this,this}export(){return{type:this.type,name:this.name,attributes:Object.fromEntries(this._attributes.entries()),children:Array.from(this.children).map(t=>t.export())}}getAttribute(t){return this._attributes.get(t)}hasAttribute(t){return this._attributes.has(t)}removeAttribute(t){return this._attributes.delete(t),this}removeChild(t){this.children.delete(t),t.parent=null}setAttribute(t,s){return this._attributes.set(t,s),this}toString(){let t=Array.from(this._attributes.entries()),s=t.length>0?" "+t.map(([l,c])=>{if(typeof c=="string"&&!/["<>\n]/.test(c))return`${l}="${c}"`;if(typeof c=="boolean")return c?l:""}).join(" "):"";if(Le.includes(this.name))return`<${this.name}${s} />`;let r=Array.from(this.children.values()).map(l=>l.toString()).join("");return`<${this.name}${s}>${r}</${this.name}>`}_flatten(t,s){t.forEach(r=>{s.push(r),r instanceof a&&this._flatten(Array.from(r.children),s)})}};T.default=$});var F=o(b=>{"use strict";var Ae=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var Oe=Ae(m()),W=class extends Oe.default{get nodeName(){return"#text"}get nodeType(){return this.type}get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,s=!1){super(),this.name="#text",this.type=3,this._escape=s,this._value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return this.value}};b.default=W});var D=o(g=>{"use strict";var j=g&&g.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(g,"__esModule",{value:!0});var Se=j(R()),Ie=j(B()),G=j(H()),Pe=j(F()),J=class a{static createComment(t,s){let r=new Se.default(t);return s&&(r.parent=s),r}static createDoctype(t="html",s){let r=new Ie.default(t);return s&&(r.parent=s),r}static createElement(t,s={},r=[],l){let c=new G.default(t,s,r);return l&&(c.parent=l),c}static createText(t,s=!1,r){let l=new Pe.default(t,s);return r&&(l.parent=r),l}static import(t,s){return t.map(r=>{let{value:l}=r,{name:c,attributes:d,children:f}=r;switch(r.type){case 1:let u=this.createElement(c,d,[],s);return a.import(f,u).forEach(I=>u.appendChild(I)),u;case 3:return this.createText(l,!0,s);case 8:return this.createComment(l,s);case 10:return this.createDoctype(l,s)}return null}).filter(Boolean)}static load(t){return new a(t)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof G.default)}get nodes(){return Array.from(this.children).map(t=>t instanceof G.default?t.nodes:[t]).flat()}constructor(t){this.children=new Set(t.filter(Boolean))}export(){return this.childList.map(t=>t.export())}toString(){return Array.from(this.children).map(t=>t.toString()).join("")}};g.default=J});var re=o(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});L.getStatus=Ce;var se={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};L.default=se;function Ce(a){return Object.values(se).find(t=>t.code===a)}});var le=o(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});var Me=re(),V=class a extends Error{static for(t,...s){return s.forEach(function(r){t=t.replace("%s",String(r))}),new this(t)}static forErrors(t){let s=new this("Invalid Parameters");return s.withErrors(t),s}static require(t,s,...r){if(!t){for(let l of r)s=s.replace("%s",l);throw new this(s)}}static try(t){return{catch:s=>{try{return t()}catch(r){if(r instanceof a)return s(r,r.type);if(r instanceof Error){let l=a.upgrade(r);return s(l,l.type)}else if(typeof r=="string"){let l=a.for(r);return s(l,l.type)}return s(r,"unknown")}}}}static upgrade(t,s=500){if(t instanceof a)return t;let r=new this(t.message,s);return r.name=t.name,r.stack=t.stack,r}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,s=500){var r;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=s,this._status=((r=(0,Me.getStatus)(s))===null||r===void 0?void 0:r.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,s=0){let r={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,s)};return Object.keys(this._errors).length>0&&(r.errors=this._errors),r}trace(t=0,s=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,s||this.stack.length).map(l=>l.trim()).map(l=>{if(!l.startsWith("at"))return!1;let[c,d,f]=l.split(" ");f||(f=`(${d})`,d="<none>");let[u,I,xe]=f.substring(1,f.length-1).split(":");return{method:d,file:u,line:parseInt(I)||0,char:parseInt(xe)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,s){return this._start=t,this._end=s,this}};Y.default=V});var z=o(E=>{"use strict";var qe=E&&E.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(E,"__esModule",{value:!0});var Re=qe(le()),K=class extends Re.default{};E.default=K});var y=o(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});var Ue=new Map;Q.default=Ue});var te=o(v=>{"use strict";var ee=v&&v.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(v,"__esModule",{value:!0});var Be=ee(z()),ne=ee(D()),X=ee(y()),Z=class{render(t={}){X.default.set("props",t||{});let s=process.env||{};X.default.set("env",Object.assign(Object.assign({},s),{BUILD_ID:this.id()}));let r=JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(X.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(s).filter(d=>d[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})),l=this.template(),c=ne.default.load(l).toString().trim();if(!c.toLowerCase().startsWith("<html"))throw Be.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${c.replace("__TEMPLATE_DATA__",r)}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(s=>typeof s=="object"&&typeof s.nodeType=="number")?t:[ne.default.createText(String(t),!0)]}};v.default=Z});var ie=o(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.ServerEmitter=void 0;var A=class{emit(t,s){return this}on(t,s){return this}once(t,s){return this}unbind(t,s){return this}};k.ServerEmitter=A;var $e=new A;k.default=$e});var ce=o(_=>{"use strict";var He=_&&_.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(_,"__esModule",{value:!0});var We=He(y());function Fe(a){let t=We.default.get("env")||{};return a?t[a]||null:t}_.default=Fe});var oe=o(w=>{"use strict";var Ge=w&&w.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(w,"__esModule",{value:!0});w.default=Ve;var Je=Ge(y());function Ve(){return Je.default.get("props")||{}}});var de=o(i=>{"use strict";var Ye=i&&i.__createBinding||(Object.create?function(a,t,s,r){r===void 0&&(r=s);var l=Object.getOwnPropertyDescriptor(t,s);(!l||("get"in l?!t.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return t[s]}}),Object.defineProperty(a,r,l)}:function(a,t,s,r){r===void 0&&(r=s),a[r]=t[s]}),Ke=i&&i.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),ze=i&&i.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(s){var r=[];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(r[r.length]=l);return r},a(t)};return function(t){if(t&&t.__esModule)return t;var s={};if(t!=null)for(var r=a(t),l=0;l<r.length;l++)r[l]!=="default"&&Ye(s,t,r[l]);return Ke(s,t),s}}(),p=i&&i.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(i,"__esModule",{value:!0});i.props=i.emitter=i.env=i.data=i.ServerException=i.ServerEmitter=i.ServerDocument=i.DOMNode=i.DOMText=i.DOMElement=i.DOMDocument=i.DOMDoctype=i.DOMComment=void 0;var Qe=p(R());i.DOMComment=Qe.default;var Xe=p(B());i.DOMDoctype=Xe.default;var Ze=p(D());i.DOMDocument=Ze.default;var et=p(H());i.DOMElement=et.default;var tt=p(F());i.DOMText=tt.default;var at=p(m());i.DOMNode=at.default;var st=p(te());i.ServerDocument=st.default;var pe=ze(ie());i.emitter=pe.default;Object.defineProperty(i,"ServerEmitter",{enumerable:!0,get:function(){return pe.ServerEmitter}});var rt=p(y());i.data=rt.default;var lt=p(ce());i.env=lt.default;var nt=p(oe());i.props=nt.default;var it=p(z());i.ServerException=it.default});var me=o((Nt,fe)=>{fe.exports={...de()}});var ot={};ye(ot,{default:()=>S});var e=P(D()),ue=P(te()),O=P(me());var n=function(a,...t){let s=ct(a);for(let r=0;r<t.length;r++)s=s.replace("%s",String(t[r]));return s},ct=function(a){return a};var S=class extends ue.default{id(){return"f6f2efdabe1b6c7275f5"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/docs/getting-started.html",s=n("Getting Started - Ink reactive web component template engine."),r=n("How to install, setup and use Ink in a project."),l=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")},c="https://github.com/stackpress/ink/tree/main/examples";return[e.default.createText(`
`,!1),e.default.createElement("html",{},[e.default.createText(`
  `,!1),e.default.createElement("head",{},[e.default.createText(`
  `,!1),e.default.createElement("meta",{charset:"utf-8"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.default.createText(`
  `,!1),e.default.createElement("title",{},[...this._toNodeList(s)]),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"description",content:r}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:title",content:s}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:description",content:r}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:type",content:"website"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:card",content:"summary"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:site",content:"@stackpress"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:title",content:s}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:description",content:r}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,O.env)("BUILD_ID")}.css`}),e.default.createElement("script",{"data-template":!0,type:"text/json"},[e.default.createText("__TEMPLATE_DATA__",!0)]),e.default.createText(`
  `,!1),e.default.createElement("script",{src:`/ink/build/client/${(0,O.env)("BUILD_ID")}.js`}),e.default.createText(`
  `,!1),...(0,O.env)("PUBLIC_ENV")==="development"?[e.default.createText(`
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
      `,!1),e.default.createElement("aside",{right:!0},[e.default.createText(`
        `,!1),e.default.createElement("menu",{class:"m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto"},[e.default.createText(`
          `,!1),e.default.createElement("h6",{class:"tx-muted tx-14 mb-0 mt-0 pb-10 tx-uppercase"},[e.default.createText(`
            `,!1),...this._toNodeList(n("On this page")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("nav",{class:"tx-14 tx-lh-32"},[e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#http"},[e.default.createText(`
              `,!1),...this._toNodeList(n("1. Add HTTP")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#develop"},[e.default.createText(`
              `,!1),...this._toNodeList(n("2. Add Dev Tools")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#cache"},[e.default.createText(`
              `,!1),...this._toNodeList(n("3. Add File Cache")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#tailwind"},[e.default.createText(`
              `,!1),...this._toNodeList(n("4. Add TailwindCSS")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block tx-t-0",href:"#express"},[e.default.createText(`
              `,!1),...this._toNodeList(n("5. Add ExpressJS")),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
      `,!1),e.default.createElement("main",{},[e.default.createText(`
        `,!1),e.default.createElement("api-docs",{},[e.default.createText(`
          `,!1),e.default.createElement("h1",{class:"tx-primary tx-uppercase tx-30 py-20"},[e.default.createText(`
            `,!1),...this._toNodeList(n("Getting Started")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            To try out Ink, run the following commands in terminal: 
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npm init -y && npm install --save @stackpress/ink && npm install --save-dev ts-node typescript @types/node
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("element-alert",{solid:!0,curved:!0,info:!0,class:"my-20 tx-lh-24"},[e.default.createText(`
            `,!1),e.default.createElement("element-icon",{name:"info-circle"}),e.default.createText(`
            `,!1),e.default.createElement("strong",{},[e.default.createText("Recommended:",!1)]),e.default.createText(`
            Download the Ink editor plugin at the `,!1),e.default.createElement("a",{target:"_blank",class:"tx-white tx-underline",href:"https://marketplace.visualstudio.com/items?itemName=stackpress.ink-language"},[e.default.createText("Visual Studio Marketplace",!1)]),e.default.createText(`.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Create a server file called
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("src/index.ts",!1)]),e.default.createText(` 
            with the following code that uses the compiler.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"src/index.ts",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{class:"scroll-auto",lang:"js",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              import ink from '@stackpress/ink/compiler';
              // make a ink compiler
              const compiler = ink();
              // render HTML
              compiler.render('./src/page.ink').then(console.log);
              // render CSS
              compiler.styles('./src/page.ink').then(console.log);
              // render JS
              compiler.client('./src/page.ink').then(console.log);
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Last, create a document file called
            `,!1),e.default.createElement("ide-code",{inline:!0},[e.default.createText("src/page.ink",!1)]),e.default.createText(` 
            with the following template code.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"src/page.ink",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <style>
                .center { text-align: center; }
              </style>
              <script>
                import { env } from '@stackpress/ink';
                const { BUILD_ID, APP_DATA } = env();
                const title = 'Hello World';
              </script>
              <html>
                <head>
                  <title>{title}</title>
                  <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                  <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                </head>
                <body>
                  <h1 class="center">{title}</h1>
                </body>
              </html>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            To try out the basic implementation of Ink and see the 
            results, just run the following command in terminal.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"http"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(n("1. Add HTTP")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            In most cases Ink will be used to render a front end from 
            a server framework. In this example, we will use the native
            NodeJS HTTP module to create a server that renders a page
            using Ink. Start by replacing the 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("'src/index.ts'")]),e.default.createText(`
            file with the following code. 
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("element-alert",{solid:!0,curved:!0,info:!0,class:"my-20 tx-lh-24"},[e.default.createText(`
            `,!1),e.default.createElement("element-icon",{name:"info-circle"}),e.default.createText(`
            `,!1),e.default.createElement("strong",{},[e.default.createText("Optional:",!1)]),e.default.createText(` You can also check your other 
            files to make sure you are following along.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:410,title:"With NodeJS HTTP"},[e.default.createText(`
            `,!1),e.default.createElement("app-head",{},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"http",selector:"#http-index-ts"},[e.default.createText(`
                  src/index.ts
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"http",selector:"#http-page-ink"},[e.default.createText(`
                  src/page.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"http",selector:"#http-package-json"},[e.default.createText(`
                  package.json
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-left",{},[e.default.createText(`
              `,!1),e.default.createElement("h5",{class:"p-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"chevron-down"}),e.default.createText(`
                `,!1),e.default.createElement("span",{},[e.default.createText("src",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"http",selector:"#http-index-ts"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                index.ts
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"http",selector:"#http-page-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                page.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"http",selector:"#http-package-json"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                package.json
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-main",{},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"http-index-ts",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                import http from 'http';
                import ink from '@stackpress/ink/compiler';

                // create ink compiler
                const compiler = ink();
                // create http server
                const server = http.createServer(async (req, res) => {
                  // if build asset...
                  if (req.url?.startsWith('/build/')) {
                    // get filename ie. abc123.js
                    const filename = req.url.substring(7);
                    // get asset
                    const { type, content } = await compiler.asset(filename);
                    // send response
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  // if home page
                  } else if (req.url === '/') {
                    // render and send response
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    return res.end(await compiler.render('./src/page.ink', {
                      title: 'Hello World'
                    }));
                  }
                });
                // listen on port 3000
                server.listen(3000);
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"http-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <style>
                  .center { text-align: center; }
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                  </head>
                  <body>
                    <h1 class="center">{title}</h1>
                  </body>
                </html>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"http-package-json",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.28"
                  },
                  "devDependencies": {
                    "@types/node": "22.1.0",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            To run your first Ink web app, just run the following 
            command in terminal.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            You can now check 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[e.default.createText("http://localhost:3000/",!1)]),e.default.createText(` 
            in your browser to see your Ink application. The 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[e.default.createText("ink()",!1)]),e.default.createText(` 
            function takes in the following options, all of 
            which are optional.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("api-ui",{start:"Render Methods"}),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"develop"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(n("2. Add Developer Tools")),e.default.createText(`
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
            `,!1),e.default.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              // ...
              import { dev } from '@stackpress/ink-dev';
              // ...create ink compiler...
              // 1. create dev tools
              const { router, refresh } = dev();

              const server = http.createServer(async (req, res) => {
                // 2. Add dev router
                if (router(req, res)) return;

                if (req.url?.startsWith('/build/')) {
                  // ...
                } else if (req.url === '/') {
                  // 3. sync builder with refresh server
                  refresh.sync(compiler.fromSource('./src/page.ink'));
                  // ... compile and send response ...
                }
              });
              //...listen on port 3000...
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("dev()")]),e.default.createText(` export 
            from  `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("@stackpress/ink-dev")]),e.default.createText(`
            exports tools that supports development mode and accepts the 
            following options.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("api-ui",{start:"DeveloperOptions"}),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            This returns several tools you can use in your server app.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("api-ui",{start:"Developer Tools"}),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Lastly, update the document file 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("src/page.ink")]),e.default.createText(` 
            to include the development script 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList('<script src="/dev.js"></script>')]),e.default.createText(` 
            as shown below.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"src/page.ink",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <style>
                /* ... */
              </style>
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
            The project should now look like the example below.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:410,title:"With Developer Tools",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("app-head",{},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"develop",selector:"#develop-index-ts"},[e.default.createText(`
                  src/index.ts
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"develop",selector:"#develop-page-ink"},[e.default.createText(`
                  src/page.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"develop",selector:"#develop-package-json"},[e.default.createText(`
                  package.json
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-left",{},[e.default.createText(`
              `,!1),e.default.createElement("h5",{class:"p-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"chevron-down"}),e.default.createText(`
                `,!1),e.default.createElement("span",{},[e.default.createText("src",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"develop",selector:"#develop-index-ts"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                index.ts
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"develop",selector:"#develop-page-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                page.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"develop",selector:"#develop-package-json"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                package.json
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-main",{},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"develop-index-ts",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                import http from 'http';
                import ink from '@stackpress/ink/compiler';
                import { dev } from '@stackpress/ink-dev';

                const compiler = ink();
                // 1. create dev tools
                const { router, refresh } = dev();

                const server = http.createServer(async (req, res) => {
                  // 2. Add dev router
                  if (router(req, res)) return;
                  
                  if (req.url?.startsWith('/build/')) {
                    const filename = req.url.substring(7);
                    const { type, content } = await compiler.asset(filename);
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  } else if (req.url === '/') {
                    // 3. sync builder with refresh server
                    refresh.sync(compiler.fromSource('./src/page.ink'));
                    
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    return res.end(await compiler.render('./src/page.ink', {
                      title: 'Hello World'
                    }));
                  }
                });
                server.listen(3000);
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"develop-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <style>
                  .center { text-align: center; }
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                    <script src="/dev.js"></script>
                  </head>
                  <body>
                    <h1 class="center">{title}</h1>
                  </body>
                </html>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"develop-package-json",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.28"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "0.3.28",
                    "@types/node": "22.1.0",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Re-run the following command in terminal. It shouldn't look 
            like anything has changed, but the development server is now
            running in the background. Try to change
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("src/page.ink")]),e.default.createText(`.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Whenever `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("src/page.ink")]),e.default.createText(` 
            is saved, the development server will automatically refresh 
            the page. Components will also be updated in real-time without
            the page reloading.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"cache"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(n("3. Add Cache Files")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Ink has an out-of-the-box cache and build strategy that
            can be used to store and serve pre-compiled files. To use the
            cache, you just need to import it from the 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("@stackpress/ink/compiler")]),e.default.createText(` 
            module and use it like the following example.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"src/index.ts",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              // ...
              import path from 'path';
              import { cache } from '@stackpress/ink/compiler';
              // ...create ink compiler...
              // 1. use cache
              compiler.use(cache({
                buildPath: path.join(__dirname, '../build')
              }));
              // ...create dev tools...
              // ...create http server...
              // ...listen on port 3000...
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("src/index.ts")]),e.default.createText(` 
            file should now look like the example below.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"src/index.ts",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              import path from 'path';
              import http from 'http';
              import ink, { cache } from '@stackpress/ink/compiler';
              import { dev } from '@stackpress/ink-dev';

              const compiler = ink();
              // 1. use cache
              compiler.use(cache({
                buildPath: path.join(__dirname, '../build')
              }));
              const { router, refresh } = dev();
              const server = http.createServer(async (req, res) => {
                if (router(req, res)) return;
                if (req.url?.startsWith('/build/')) {
                  const filename = req.url.substring(7);
                  const { type, content } = await compiler.asset(filename);
                  res.writeHead(200, { 'Content-Type': type });
                  return res.end(content);
                } else if (req.url === '/') {
                  refresh.sync(compiler.fromSource('./src/page.ink'));
                  res.writeHead(200, { 'Content-Type': 'text/html' });
                  return res.end(await compiler.render('./src/page.ink', {
                    title: 'Hello World'
                  }));
                }
              });
              server.listen(3000);
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Re-run the following command in terminal to start the cache 
            server.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Load 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[e.default.createText("http://localhost:3000/",!1)]),e.default.createText(` 
            in your browser. After loading you should see files that were 
            generated in a new build folder found in your project root. 
            The `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[e.default.createText("cache()",!1)]),e.default.createText(` plugin is 
            just a wrapper that listens for build related events and
            stores the generated files in the specified build path.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:400,title:"cache.ts (Internal)",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              emitter.on('manifest-resolved', (event: Event<string>) => {
                const manifest = event.params.manifest as Manifest
                //write the manifest to the file system
                writeFile(paths.manifest, manifest.toJson());
              });

              // on pre render, try to use cache if live
              emitter.on('render', (event: Event<string>) => {
                //if not live, dont retrieve from cache
                if (environment !== 'production') return;
                //extract props and builder from params
                const props = (event.params.props || {}) as Hash;
                const builder = event.params.builder as Builder;
                //get fs and id ie. abc123c
                const { fs, id } = builder.document;
                //get cache file path ie. /path/to/docs/build/client/abc123c.js
                const cache = path.join(paths.build, 'server', \`\${id}.js\`);
                //if production and cache file exists
                if (fs.existsSync(cache)) {
                  //get the build object
                  const build = compiler.fromCache(cache);
                  //render the document
                  const html = build.document.render(props);
                  //return the cached content
                  event.set(html);
                }
              });

              // on post render, cache (dev and live)
              emitter.on('rendered', (event: Event<string>) => {
                //extract build and builder from params
                const builder = event.params.builder as Builder;
                const html = event.params.html as string;
                //get fs and id ie. abc123c
                const { id } = builder.document;
                //get cache file path ie. /path/to/docs/build/client/abc123c.html
                const cache = path.join(paths.build, 'client', \`\${id}.html\`);
                //write the server source code to cache
                writeFile(cache, html);
              });

              // on pre client build, try to use cache if live
              emitter.on('build-client', (event: Event<string>) => {
                //if not live, dont retrieve from cache
                if (environment !== 'production') return;
                //extract builder from params
                const builder = event.params.builder as Builder;
                //get fs and id ie. abc123c
                const id = builder.document.id;
                //get cache file path ie. /path/to/docs/build/client/abc123c.js
                const cache = path.join(paths.build, 'client', \`\${id}.js\`);
                //if cache file exists, send it
                if (fs.existsSync(cache)) {
                  event.set(fs.readFileSync(cache, 'utf8'));
                }
              });

              // on post client build, cache (dev and live)
              emitter.on('built-client', (event: Event<string>) => {
                //extract builder and sourcecode from params
                const builder = event.params.builder as Builder;
                const sourceCode = event.params.sourceCode as string;
                //get fs and id ie. abc123c
                const id = builder.document.id;
                //get cache file path ie. /path/to/docs/build/client/abc123c.js
                const cache = path.join(paths.build, 'client', \`\${id}.js\`);
                //write the client source code to cache
                writeFile(cache, sourceCode);
              });

              // on pre markup build, try to use cache if live
              emitter.on('build-markup', /* ... */);
              //on post markup build, cache (dev and live)
              emitter.on('built-markup', /* ... */);
              //on pre server build, try to use cache if live
              emitter.on('build-server', /* ... */);
              //on post server build, cache (dev and live)
              emitter.on('built-server', /* ... */);
              //on pre styles build, try to use cache if live
              emitter.on('build-styles', /* ... */);
              //on post styles build, cache (dev and live)
              emitter.on('built-styles', /* ... */);

              // Initialize: if there's a manifest
              if (fs.existsSync(paths.manifest)) {
                //load the manifest file
                compiler.manifest.load(
                  JSON.parse(fs.readFileSync(paths.manifest, 'utf-8'))
                );
              }
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            This means you can also use your own cache strategy by 
            listening to the events emitted by the compiler. The
            following table lists all the events that the compiler
            emits during the build cycle of a document.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("api-ui",{start:"EventEmitter"}),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"tailwind"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(n("4. Add TailwindCSS")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Tailwind is an atomic CSS collection of styles that favours 
            small, single-purpose classes with their selector names based 
            on its visual function. It works by using a build process to
            read your source files to generate its styles based only on 
            what is being used. This makes using Tailwind optimal because
            it doesn't bloat your CSS with unused styles.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            At the same time, web components with the
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<style>")]),e.default.createText(` tag imply using the 
            component's shadow DOM which will encapsulate the styles within
            the component and not be affected by global styles. Since 
            Tailwind in turn implies that you do not need to (necessarily) 
            define styles, you do not need to use the shadow DOM at all if
            you are using Tailwind.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("element-alert",{solid:!0,curved:!0,warning:!0,class:"my-20 tx-lh-24"},[e.default.createText(`
            `,!1),e.default.createElement("element-icon",{name:"exclamation-triangle"}),e.default.createText(`
            `,!1),e.default.createElement("strong",{},[e.default.createText("Warning:",!1)]),e.default.createText(`
            The caveat for using TailwindCSS, means that web components 
            using it will not be shippable to other projects that do not
            use Tailwind. It all comes down to preference in the end.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Ink has a separate package called
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("@stackpress/ink-tailwind")]),e.default.createText(`
            to use TailwindCSS with Ink. This is just another wrapper 
            class that listens to the compiler's build events. You can 
            install this plugin by running the following command in terminal.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npm install --save-dev @stackpress/ink-tailwind autoprefixer postcss tailwindcss
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Next, in `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("src/index.ts")]),e.default.createText(`
            import the `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("tailwind()")]),e.default.createText(`
            plugin from the package and use it in the compiler as shown
            in the example below.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"src/index.ts",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              // ...
              import { tailwind } from '@stackpress/ink-tailwind';
              // ...create ink compiler...
              // ...use cache...
              // 1. Use Tailwind
              compiler.use(tailwind({
                darkMode: 'class',
                theme: { extend: {} },
                plugins: [],
                content: []
              }));

              // ...create dev tools...
              // ...create http server...
              // ...listen on port 3000...
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Lastly, in `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("src/page.ink")]),e.default.createText(`
            add the Tailwind directives inside the 
            `,!1),e.default.createElement("ide-code",{inline:!0},[...this._toNodeList("<style>")]),e.default.createText(` tag like the code 
            below. Also add a tailwind class, (like 
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("<style>")]),e.default.createText(`) to the 
            markup to verify that the plugin is working and the styles 
            are being applied.
          `,!1)]),e.default.createText(`
          
          `,!1),e.default.createElement("ide-app",{title:"src/page.ink",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              <style>
                /* 2. Add tailwind directives */
                @tailwind base;
                @tailwind components;
                @tailwind utilities;

                /* ...Other styles... */
              </style>
              <script>
                //... 
              </script>
              <html>
                <head>
                  <!-- ... -->
                </head>
                <body>
                  <h1 class="text-center">{title}</h1>
                </body>
              </html>
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Check to see if the project files look like the example below.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:410,title:"With TailwindCSS",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("app-head",{},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"tailwind",selector:"#tailwind-index-ts"},[e.default.createText(`
                  src/index.ts
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"tailwind",selector:"#tailwind-page-ink"},[e.default.createText(`
                  src/page.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"tailwind",selector:"#tailwind-package-json"},[e.default.createText(`
                  package.json
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-left",{},[e.default.createText(`
              `,!1),e.default.createElement("h5",{class:"p-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"chevron-down"}),e.default.createText(`
                `,!1),e.default.createElement("span",{},[e.default.createText("src",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"tailwind",selector:"#tailwind-index-ts"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                index.ts
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"tailwind",selector:"#tailwind-page-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                page.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"tailwind",selector:"#tailwind-package-json"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                package.json
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-main",{},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"tailwind-index-ts",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                import path from 'path';
                import http from 'http';
                import ink, { cache } from '@stackpress/ink/compiler';
                import { dev } from '@stackpress/ink-dev';
                import { tailwind } from '@stackpress/ink-tailwind';

                const compiler = ink();
                compiler.use(cache({
                  buildPath: path.join(__dirname, '../build')
                }));
                // 1. use tailwind
                compiler.use(tailwind({
                  darkMode: 'class',
                  theme: { extend: {} },
                  plugins: [],
                  content: []
                }));
                
                const { router, refresh } = dev();
                const server = http.createServer(async (req, res) => {
                  if (router(req, res)) return;
                  if (req.url?.startsWith('/build/')) {
                    const filename = req.url.substring(7);
                    const { type, content } = await compiler.asset(filename);
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  } else if (req.url === '/') {
                    refresh.sync(compiler.fromSource('./src/page.ink'));
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    return res.end(await compiler.render('./src/page.ink', {
                      title: 'Hello World'
                    }));
                  }
                });
                server.listen(3000);
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"tailwind-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <style>
                  /* 2. Add tailwind directives */
                  @tailwind base;
                  @tailwind components;
                  @tailwind utilities;
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                    <script src="/dev.js"></script>
                  </head>
                  <body>
                    <h1 class="text-center">{title}</h1>
                  </body>
                </html>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"tailwind-package-json",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.28"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "0.3.28",
                    "@stackpress/ink-tailwind": "0.3.28",
                    "@types/node": "22.1.0",
                    "autoprefixer": "10.4.20",
                    "postcss": "8.4.44",
                    "tailwindcss": "3.4.10",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Re-run the following command in terminal to initialize the 
            tailwind plugin.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Load 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[e.default.createText("http://localhost:3000/",!1)]),e.default.createText(` 
            in your browser. After loading you should see files that were 
            generated in a new build folder found in your project root. 
            Try to add a Tailwind class to the markup in
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[...this._toNodeList("src/page.ink")]),e.default.createText(` and 
            save. The development server will automatically refresh 
            the styles and component styles will also be update in 
            real-time without the page reloading.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("a",{name:"express"},[]),e.default.createText(`
          `,!1),e.default.createElement("h2",{class:"tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},[e.default.createText(`
            `,!1),...this._toNodeList(n("5. Add ExpressJS")),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Ink has a separate package called
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("@stackpress/ink-express")]),e.default.createText(`
            to use Express with Ink. You can install this plugin by 
            running the following command in terminal.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npm install --save @stackpress/ink-express express && npm install --save-dev @types/express
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            The package 
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("@stackpress/ink-express")]),e.default.createText(`
            exports two plugins for express.
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("view()")]),e.default.createText(` is the view 
            engine for production (live) environments. It can be used with
            an express app like 
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("app.use(view(compiler))")]),e.default.createText(`.
            The other export, `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("dev()")]),e.default.createText(` 
            is the same export from the Developer Tools documentation above, 
            but returns several tools used to integrate with express.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("api-ui",{start:"Express Developer Tools"}),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Example logic to use the all the Ink Express tools together
            with Ink developer tools could look like the following code
            that cases for 
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("development")]),e.default.createText(` and 
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("production")]),e.default.createText(` modes.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:12,lang:"js",class:"py-20"},[...this._toNodeList(`
            import { view, dev } from '@stackpress/ink-express';

            //create ink compiler
            const compiler = ink({ cwd: __dirname, minify: false });
            //create express app
            const app = express();
            //set the view engine to ink
            app.set('views', path.join(__dirname, 'pages'));
            app.set('view engine', 'ink');

            //if production (live)
            if (process.env.NODE_ENV === 'production') {
              //let's use express' template engine feature
              app.engine('ink', view(compiler));
              //...other production settings...
            //if development mode
            } else {
              //get development middleware
              const { router, view } = dev({ cwd: __dirname });
              //use development middleware
              app.use(router);
              //let's use express' template engine feature
              app.engine('ink', view(compiler));
            }
          `)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            And you can now case for development mode in 
            `,!1),e.default.createElement("ide-code",{inline:!0,lang:"js"},[...this._toNodeList("src/page.ink")]),e.default.createText(`
            like in the example below
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:12,class:"py-20"},[...this._toNodeList(`
            <style>
              /* ... */
            </style>
            <script>
              import { env } from '@stackpress/ink';
              const { NODE_ENV } = env();
            </script>
            <html>
              <head>
                <!-- ... -->
                <if true={NODE_ENV !== 'production'}>
                  <script src="/dev.js"></script>
                </if>
              </head>
              <body>
                <!-- ... -->
              </body>
            </html>
          `)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Check to see if the project files look like the example below.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("ide-app",{height:410,title:"With ExpressJS",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("app-head",{},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"express",selector:"#express-index-ts"},[e.default.createText(`
                  src/index.ts
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"express",selector:"#express-page-ink"},[e.default.createText(`
                  src/page.ink
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"express",selector:"#express-package-json"},[e.default.createText(`
                  package.json
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-left",{},[e.default.createText(`
              `,!1),e.default.createElement("h5",{class:"p-5"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"chevron-down"}),e.default.createText(`
                `,!1),e.default.createElement("span",{},[e.default.createText("src",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"express",selector:"#express-index-ts"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                index.ts
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"express",selector:"#express-page-ink"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                page.ink
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("element-tab",{class:"pt-10 block",active:"tx-white",inactive:"tx-t-1",group:"express",selector:"#express-package-json"},[e.default.createText(`
                `,!1),e.default.createElement("element-icon",{name:"file"}),e.default.createText(`
                package.json
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("app-main",{},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"express-index-ts",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                import path from 'path';
                import express from 'express';
                import ink, { cache } from '@stackpress/ink/compiler';
                import { view, dev } from '@stackpress/ink-express';
                import { tailwind } from '@stackpress/ink-tailwind';

                //create ink compiler
                const compiler = ink();
                //use tailwind
                compiler.use(tailwind({
                  darkMode: 'class',
                  theme: { extend: {} },
                  plugins: [],
                  content: []
                }));
                //use build cache
                compiler.use(cache({ 
                  environment: process.env.NODE_ENV,
                  buildPath: path.join(__dirname, '../build')
                }));

                //create express app
                const app = express();
                //set the view engine to ink
                app.set('views', __dirname);
                app.set('view engine', 'ink');

                //if production (live)
                if (process.env.NODE_ENV === 'production') {
                  //let's use express' template engine feature
                  app.engine('ink', view(compiler));
                  //...other production settings...
                //if development mode
                } else {
                  //get development middleware
                  const { router, view } = dev({ cwd: __dirname });
                  //use development middleware
                  app.use(router);
                  //let's use express' template engine feature
                  app.engine('ink', view(compiler));
                }

                //routes
                app.get('/build/:build', async (req, res) => {
                  //get filename ie. abc123.js
                  const filename = req.params.build;
                  //get asset
                  const { type, content } = await compiler.asset(filename);
                  //send response
                  res.type(type).send(content);
                });

                app.get('/', (req, res) => {
                  //now use the ink template engine
                  res.render('page', { title: 'Hello World' });
                  res.type('text/html');
                });

                //listen
                app.listen(3000, () => {
                  console.log('HTTP server is running on http://localhost:3000');
                });
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"express-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                <style>
                  @tailwind base;
                  @tailwind components;
                  @tailwind utilities;
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA, NODE_ENV } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                    <if true={NODE_ENV !== 'production'}>
                      <script src="/dev.js"></script>
                    </if>
                  </head>
                  <body>
                    <h1 class="text-center">{title}</h1>
                  </body>
                </html>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{id:"express-package-json",style:"display:none",lang:"js",numbers:!0,trim:!0,detab:16},[...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "^0.1.9",
                    "@stackpress/ink-express": "^0.1.9",
                    "express": "^4.19.2"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "^0.1.9",
                    "@stackpress/ink-tailwind": "^0.1.9",
                    "@types/express": "^4.17.21",
                    "@types/node": "^22.5.3",
                    "autoprefixer": "^10.4.20",
                    "postcss": "^8.4.45",
                    "tailwindcss": "^3.4.10",
                    "ts-node": "^10.9.2",
                    "typescript": "^5.5.4"
                  }
                }
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Re-run the following command in terminal to initialize the 
            re-run your application using Express.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Terminal",class:"py-20"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"bash"},[e.default.createText(`
              npx ts-node src/index.ts
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            Load 
            `,!1),e.default.createElement("ide-code",{lang:"js",inline:!0},[e.default.createText("http://localhost:3000/",!1)]),e.default.createText(` 
            in your browser. After loading you should see everything is 
            exactly as it was, but you now benefit from using ExpressJS.
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("h3",{class:"tx-t-1 tx-uppercase tx-22 pt-40 pb-20"},[e.default.createText(`
            -- `,!1),...this._toNodeList(n("Read On")),e.default.createText(` --
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},[e.default.createText(`
            To see other getting started examples with various frameworks,
            you can check out the following project examples in the 
            official repository.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ul",{},[e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${c}/with-fastify`},[e.default.createText(`
                Fastify
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${c}/with-hapi`},[e.default.createText(`
                Hapi
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${c}/with-koa`},[e.default.createText(`
                Koa
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${c}/with-nest`},[e.default.createText(`
                NestJS
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${c}/with-restify`},[e.default.createText(`
                Restify
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",target:"_blank",href:`${c}/with-webpack`},[e.default.createText(`
                Webpack
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(` 
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-10"},[e.default.createText(`
            Depending on how you plan to use Ink, you can also look at 
            the following project setups.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ul",{},[e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",href:"/ink/docs/template-engine.html"},[e.default.createText(`
                Template Engine
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",href:"/ink/docs/single-page.html"},[e.default.createText(`
                Single Page App
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",href:"/ink/docs/static-site.html"},[e.default.createText(`
                Static Site Generator
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"py-5"},[e.default.createText(`
              `,!1),e.default.createElement("a",{class:"tx-t-1 tx-underline",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
                Web Component Publisher
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          
          `,!1),e.default.createElement("nav",{class:"flex"},[e.default.createText(`
            `,!1),e.default.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/index.html"},[e.default.createText(`
              `,!1),e.default.createElement("element-icon",{name:"chevron-left",theme:"tx-1"}),e.default.createText(`
              `,!1),...this._toNodeList(n("Documentation")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
              `,!1),...this._toNodeList(n("Markup Syntax")),e.default.createText(`
              `,!1),e.default.createElement("element-icon",{name:"chevron-right",theme:"tx-1"}),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("footer",{class:"foot"},[]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]),e.default.createText(`
`,!1)])]}};return ve(ot);})();
;
;module.exports = InkAPI;