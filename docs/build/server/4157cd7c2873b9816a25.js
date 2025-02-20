var InkAPI=(()=>{var Te=Object.create;var N=Object.defineProperty;var pe=Object.getOwnPropertyDescriptor;var be=Object.getOwnPropertyNames;var Ee=Object.getPrototypeOf,ge=Object.prototype.hasOwnProperty;var f=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),_e=(a,t)=>{for(var s in t)N(a,s,{get:t[s],enumerable:!0})},se=(a,t,s,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let c of be(t))!ge.call(a,c)&&c!==s&&N(a,c,{get:()=>t[c],enumerable:!(l=pe(t,c))||l.enumerable});return a};var I=(a,t,s)=>(s=a!=null?Te(Ee(a)):{},se(t||!a||!a.__esModule?N(s,"default",{value:a,enumerable:!0}):s,a)),ke=a=>se(N({},"__esModule",{value:!0}),a);var h=f(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});var R=class{constructor(){this._parent=null}get parent(){return this._parent}get parentElement(){return this._parent}set parent(t){this._parent=t}};j.default=R});var U=f(p=>{"use strict";var ve=p&&p.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(p,"__esModule",{value:!0});var ye=ve(h()),q=class extends ye.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#comment",this.type=8,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!--${this.value}-->`}};p.default=q});var F=f(b=>{"use strict";var we=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var Oe=we(h()),B=class extends Oe.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#doctype",this.type=10,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!DOCTYPE ${this.value}>`}};b.default=B});var $=f(E=>{"use strict";var De=E&&E.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(E,"__esModule",{value:!0});var Ne=De(h()),Se=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],G=class a extends Ne.default{get attributes(){return Object.fromEntries(this._attributes)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof a)}get nodeName(){return this.name.toUpperCase()}get nodes(){let t=[this];return this._flatten(Array.from(this.children),t),t}get nodeType(){return this.type}get parent(){return this._parent}set parent(t){this._parent=t}constructor(t,s={},l=[]){super(),this.type=1,this._parent=null,this.name=t,this._attributes=new Map(Object.entries(s)),this.children=new Set(l.filter(Boolean))}appendChild(t){return this.children.add(t),t.parent=this,this}export(){return{type:this.type,name:this.name,attributes:Object.fromEntries(this._attributes.entries()),children:Array.from(this.children).map(t=>t.export())}}getAttribute(t){return this._attributes.get(t)}hasAttribute(t){return this._attributes.has(t)}removeAttribute(t){return this._attributes.delete(t),this}removeChild(t){this.children.delete(t),t.parent=null}setAttribute(t,s){return this._attributes.set(t,s),this}toString(){let t=Array.from(this._attributes.entries()),s=t.length>0?" "+t.map(([c,o])=>{if(typeof o=="string"&&!/["<>\n]/.test(o))return`${c}="${o}"`;if(typeof o=="boolean")return o?c:""}).join(" "):"";if(Se.includes(this.name))return`<${this.name}${s} />`;let l=Array.from(this.children.values()).map(c=>c.toString()).join("");return`<${this.name}${s}>${l}</${this.name}>`}_flatten(t,s){t.forEach(l=>{s.push(l),l instanceof a&&this._flatten(Array.from(l.children),s)})}};E.default=G});var H=f(g=>{"use strict";var Ae=g&&g.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(g,"__esModule",{value:!0});var Me=Ae(h()),Y=class extends Me.default{get nodeName(){return"#text"}get nodeType(){return this.type}get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,s=!1){super(),this.name="#text",this.type=3,this._escape=s,this._value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return this.value}};g.default=Y});var A=f(_=>{"use strict";var S=_&&_.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(_,"__esModule",{value:!0});var Le=S(U()),Pe=S(F()),W=S($()),Ce=S(H()),J=class a{static createComment(t,s){let l=new Le.default(t);return s&&(l.parent=s),l}static createDoctype(t="html",s){let l=new Pe.default(t);return s&&(l.parent=s),l}static createElement(t,s={},l=[],c){let o=new W.default(t,s,l);return c&&(o.parent=c),o}static createText(t,s=!1,l){let c=new Ce.default(t,s);return l&&(c.parent=l),c}static import(t,s){return t.map(l=>{let{value:c}=l,{name:o,attributes:d,children:x}=l;switch(l.type){case 1:let m=this.createElement(o,d,[],s);return a.import(x,m).forEach(r=>m.appendChild(r)),m;case 3:return this.createText(c,!0,s);case 8:return this.createComment(c,s);case 10:return this.createDoctype(c,s)}return null}).filter(Boolean)}static load(t){return new a(t)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof W.default)}get nodes(){return Array.from(this.children).map(t=>t instanceof W.default?t.nodes:[t]).flat()}constructor(t){this.children=new Set(t.filter(Boolean))}export(){return this.childList.map(t=>t.export())}toString(){return Array.from(this.children).map(t=>t.toString()).join("")}};_.default=J});var re=f(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});M.getStatus=Ie;var le={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};M.default=le;function Ie(a){return Object.values(le).find(t=>t.code===a)}});var ce=f(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});var Re=re(),K=class a extends Error{static for(t,...s){return s.forEach(function(l){t=t.replace("%s",String(l))}),new this(t)}static forErrors(t){let s=new this("Invalid Parameters");return s.withErrors(t),s}static require(t,s,...l){if(!t){for(let c of l)s=s.replace("%s",c);throw new this(s)}}static try(t){return{catch:s=>{try{return t()}catch(l){if(l instanceof a)return s(l,l.type);if(l instanceof Error){let c=a.upgrade(l);return s(c,c.type)}else if(typeof l=="string"){let c=a.for(l);return s(c,c.type)}return s(l,"unknown")}}}}static upgrade(t,s=500){if(t instanceof a)return t;let l=new this(t.message,s);return l.name=t.name,l.stack=t.stack,l}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,s=500){var l;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=s,this._status=((l=(0,Re.getStatus)(s))===null||l===void 0?void 0:l.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,s=0){let l={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,s)};return Object.keys(this._errors).length>0&&(l.errors=this._errors),l}trace(t=0,s=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,s||this.stack.length).map(c=>c.trim()).map(c=>{if(!c.startsWith("at"))return!1;let[o,d,x]=c.split(" ");x||(x=`(${d})`,d="<none>");let[m,r,T]=x.substring(1,x.length-1).split(":");return{method:d,file:m,line:parseInt(r)||0,char:parseInt(T)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,s){return this._start=t,this._end=s,this}};V.default=K});var z=f(k=>{"use strict";var je=k&&k.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(k,"__esModule",{value:!0});var qe=je(ce()),Q=class extends qe.default{};k.default=Q});var v=f(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});var Ue=new Map;X.default=Ue});var ae=f(y=>{"use strict";var te=y&&y.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(y,"__esModule",{value:!0});var Be=te(z()),ne=te(A()),Z=te(v()),ee=class{render(t={}){Z.default.set("props",t||{});let s=process.env||{};Z.default.set("env",Object.assign(Object.assign({},s),{BUILD_ID:this.id()}));let l=JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(Z.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(s).filter(d=>d[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})),c=this.template(),o=ne.default.load(c).toString().trim();if(!o.toLowerCase().startsWith("<html"))throw Be.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${o.replace("__TEMPLATE_DATA__",l)}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(s=>typeof s=="object"&&typeof s.nodeType=="number")?t:[ne.default.createText(String(t),!0)]}};y.default=ee});var ie=f(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});w.ServerEmitter=void 0;var L=class{emit(t,s){return this}on(t,s){return this}once(t,s){return this}unbind(t,s){return this}};w.ServerEmitter=L;var Fe=new L;w.default=Fe});var oe=f(O=>{"use strict";var Ge=O&&O.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(O,"__esModule",{value:!0});var $e=Ge(v());function Ye(a){let t=$e.default.get("env")||{};return a?t[a]||null:t}O.default=Ye});var fe=f(D=>{"use strict";var He=D&&D.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(D,"__esModule",{value:!0});D.default=Je;var We=He(v());function Je(){return We.default.get("props")||{}}});var de=f(n=>{"use strict";var Ke=n&&n.__createBinding||(Object.create?function(a,t,s,l){l===void 0&&(l=s);var c=Object.getOwnPropertyDescriptor(t,s);(!c||("get"in c?!t.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return t[s]}}),Object.defineProperty(a,l,c)}:function(a,t,s,l){l===void 0&&(l=s),a[l]=t[s]}),Ve=n&&n.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),Qe=n&&n.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(s){var l=[];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(l[l.length]=c);return l},a(t)};return function(t){if(t&&t.__esModule)return t;var s={};if(t!=null)for(var l=a(t),c=0;c<l.length;c++)l[c]!=="default"&&Ke(s,t,l[c]);return Ve(s,t),s}}(),u=n&&n.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(n,"__esModule",{value:!0});n.props=n.emitter=n.env=n.data=n.ServerException=n.ServerEmitter=n.ServerDocument=n.DOMNode=n.DOMText=n.DOMElement=n.DOMDocument=n.DOMDoctype=n.DOMComment=void 0;var ze=u(U());n.DOMComment=ze.default;var Xe=u(F());n.DOMDoctype=Xe.default;var Ze=u(A());n.DOMDocument=Ze.default;var et=u($());n.DOMElement=et.default;var tt=u(H());n.DOMText=tt.default;var at=u(h());n.DOMNode=at.default;var st=u(ae());n.ServerDocument=st.default;var ue=Qe(ie());n.emitter=ue.default;Object.defineProperty(n,"ServerEmitter",{enumerable:!0,get:function(){return ue.ServerEmitter}});var lt=u(v());n.data=lt.default;var rt=u(oe());n.env=rt.default;var ct=u(fe());n.props=ct.default;var nt=u(z());n.ServerException=nt.default});var me=f((Nt,xe)=>{xe.exports={...de()}});var ot={};_e(ot,{default:()=>C});var e=I(A()),he=I(ae()),P=I(me());var i=function(a,...t){let s=it(a);for(let l=0;l<t.length;l++)s=s.replace("%s",String(t[l]));return s},it=function(a){return a};var C=class extends he.default{id(){return"4157cd7c2873b9816a25"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/ink/panel.html",s=i("Ink UI - Web Components Meets Atomic Styles."),l=i("Ink UI atomically generates CSS styles and provides out of box web components."),c=()=>{document.querySelector("panel-layout").toggle("left")},o=(r,T)=>{setTimeout(()=>{T("https://images.wsj.net/im-580612/8SR")},5e3)},d=(r,T)=>{setTimeout(()=>{T(r.map((ft,ut)=>"https://images.wsj.net/im-580612/8SR"))},1e3)},x={first:"Jane",last:"Doe"},m=[{first1:"John",last1:"Doe",fieldset2:[{first2:"Jane",last2:"Doe"}]}];return[e.default.createText(`
`,!1),e.default.createElement("html",{},[e.default.createText(`
  `,!1),e.default.createElement("head",{},[e.default.createText(`
  `,!1),e.default.createElement("meta",{charset:"utf-8"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.default.createText(`
  `,!1),e.default.createElement("title",{},[...this._toNodeList(s)]),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"description",content:l}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:title",content:s}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:description",content:l}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`}),e.default.createText(`
  `,!1),e.default.createElement("meta",{property:"og:type",content:"website"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:card",content:"summary"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:site",content:"@stackpress"}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:title",content:s}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:description",content:l}),e.default.createText(`
  `,!1),e.default.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"}),e.default.createText(`
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,P.env)("BUILD_ID")}.css`}),e.default.createElement("script",{"data-template":!0,type:"text/json"},[e.default.createText("__TEMPLATE_DATA__",!0)]),e.default.createText(`
  `,!1),e.default.createElement("script",{src:`/ink/build/client/${(0,P.env)("BUILD_ID")}.js`}),e.default.createText(`
  `,!1),...(0,P.env)("PUBLIC_ENV")==="development"?[e.default.createText(`
    `,!1),e.default.createElement("script",{src:"/dev.js"}),e.default.createText(`
  `,!1)]:[],e.default.createText(`
`,!1)]),e.default.createText(`
  `,!1),e.default.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},[e.default.createText(`
    `,!1),e.default.createElement("panel-layout",{},[e.default.createText(`
      `,!1),e.default.createElement("header",{},[e.default.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},[e.default.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.default.createText(`
    `,!1),e.default.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:c},[]),e.default.createText(`
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
  `,!1),e.default.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:c},[]),e.default.createText(`
`,!1)]),e.default.createText(`
`,!1),e.default.createElement("nav",{class:"bg-t-1 scroll-auto h-calc-full-60"},[e.default.createText(`
  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(i("Introduction")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/index.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Documentation")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Getting Started")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(i("Features")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Markup Syntax")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("State Management")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Component Strategy")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Compiler API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Client API")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`

  `,!1),e.default.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},[e.default.createText(`
    `,!1),...this._toNodeList(i("Usage")),e.default.createText(`
  `,!1)]),e.default.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Template Engine")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Single Page App")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Static Site Generator")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Component Publisher")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]:[,e.default.createText(`
    `,!1),e.default.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},[e.default.createText(`
      `,!1),...this._toNodeList(i("Developer Tools")),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)],e.default.createText(`
`,!1)])]),e.default.createText(`
      `,!1),e.default.createElement("main",{},[e.default.createText(`
        `,!1),e.default.createElement("api-docs",{},[e.default.createText(`
          `,!1),e.default.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},[e.default.createText(`
            `,!1),...this._toNodeList(i("Form")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("form",{method:"get",action:"/ink/ui/form/index.html"},[e.default.createText(`
            `,!1),e.default.createElement("section",{class:"flex flex-wrap gap-10"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("form-button",{class:"mr-5",md:!0,success:!0,curved:!0,solid:!0},[e.default.createText(`
                    Submit
                  `,!1)]),e.default.createText(`
                  `,!1),e.default.createElement("form-button",{md:!0,warning:!0,rounded:!0,transparent:!0,href:"#"},[e.default.createText(`
                    Submit
                  `,!1)]),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/button.html"},[e.default.createText(`
                  Buttons
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("form-control",{class:"py-5",label:"First Name*",error:"Some Error"},[e.default.createText(`
                    `,!1),e.default.createElement("field-input",{name:"first",placeholder:"Enter your first name",error:!0}),e.default.createText(`
                  `,!1)]),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/control.html"},[e.default.createText(`
                  Control
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("form-fieldset",{legend:"Fieldset %s",name:"fieldset1",value:m,multiple:!0},[e.default.createText(`
                    `,!1),e.default.createElement("field-input",{name:"first1",placeholder:"Enter your first name"}),e.default.createText(`
                  `,!1)]),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/fieldset.html"},[e.default.createText(`
                  Fieldset
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},[e.default.createText(`
              `,!1),...this._toNodeList(i("Fields")),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("section",{class:"flex flex-wrap gap-10"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-checkbox",{name:"checkbox",label:"Active?",value:"yes",checked:!0,orange:!0,update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/checkbox.html"},[e.default.createText(`
                  Checkbox
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-color",{name:"color",placeholder:"Enter color"}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/color.html"},[e.default.createText(`
                  Color
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-country",{name:"country",class:"w-200 relative z-1",placeholder:"Choose Country",value:"US",open:r=>console.log("open",r),close:r=>console.log("close",r),filter:r=>console.log("filter",r),select:r=>console.log("select",r),remove:r=>console.log("remove",r),add:r=>console.log("add",r),clear:r=>console.log("clear",r),change:r=>console.log("change",r),update:r=>console.log("update",r)}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/country.html"},[e.default.createText(`
                  Country
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-currency",{name:"currency",class:"w-200",placeholder:"Choose Currency",value:"PHP",open:r=>console.log("open",r),close:r=>console.log("close",r),filter:r=>console.log("filter",r),select:r=>console.log("select",r),remove:r=>console.log("remove",r),add:r=>console.log("add",r),clear:r=>console.log("clear",r),change:r=>console.log("change",r),update:r=>console.log("update",r)}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/currency.html"},[e.default.createText(`
                  Currency
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-date",{name:"date",placeholder:"Enter date",value:"2020-01-01",update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/date.html"},[e.default.createText(`
                  Date
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-datetime",{name:"datetime",placeholder:"Enter datetime",value:"2020-01-01 13:20:10",update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/datetime.html"},[e.default.createText(`
                  Datetime
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-editor",{lang:"javascript",class:"w-200 h-80 scroll-auto",numbers:!0,name:"editor",value:"ink.render(true);",update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/editor.html"},[e.default.createText(`
                  Editor
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-file",{name:"file",class:"block w-250",upload:o,update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/file.html"},[e.default.createText(`
                  File
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-filelist",{image:!0,name:"filelist",class:"block w-250",upload:d,update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/filelist.html"},[e.default.createText(`
                  Filelist
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-input",{name:"first",placeholder:"Enter your first name",value:"test"}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/input.html"},[e.default.createText(`
                  Input
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/knob.html"},[e.default.createText(`
                  Knob
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-markdown",{class:"w-200 h-80 block",numbers:!0,name:"markdown",value:"**I AM BOLD**",update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/markdown.html"},[e.default.createText(`
                  Markdown
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-mask",{mask:"999-999-9999",placeholder:"999-999-9999"}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/mask.html"},[e.default.createText(`
                  Mask
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-metadata",{class:"w-250",name:"metadata",placeholder:"Enter text",value:x,update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/metadata.html"},[e.default.createText(`
                  Metadata
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center tx-black"},[e.default.createText(`
                  `,!1),e.default.createElement("field-number",{name:"number",min:"0",max:"10000",step:"0.01",value:"1234.56",update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/number.html"},[e.default.createText(`
                  Number
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-password",{name:"password",placeholder:"Enter password",update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/password.html"},[e.default.createText(`
                  Password
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-radio",{name:"radio",label:"Yes",value:"yes",checked:!0,rounded:!0,update:console.log,class:"mr-10"}),e.default.createText(`
                  `,!1),e.default.createElement("field-radio",{name:"radio",label:"No",value:"no",rounded:!0,update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/radio.html"},[e.default.createText(`
                  Radio
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-range",{name:"range",min:"0",max:"100",step:"10",value:"0"}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/range.html"},[e.default.createText(`
                  Range
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-rating",{name:"rating",value:"0",primary:!0,xl2:!0,update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/rating.html"},[e.default.createText(`
                  Rating
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-select",{class:"w-200 relative z-1",name:"select",placeholder:"Choose",value:"1",search:!0,custom:!0,multiple:!0,open:r=>console.log("open",r),close:r=>console.log("close",r),filter:r=>console.log("filter",r),select:r=>console.log("select",r),remove:r=>console.log("remove",r),add:r=>console.log("add",r),clear:r=>console.log("clear",r),change:r=>console.log("change",r),update:r=>console.log("update",r)},[e.default.createText(`
                    `,!1),e.default.createElement("option",{value:"1",keyword:"option 1"},[e.default.createText("Option 1",!1)]),e.default.createText(`
                    `,!1),e.default.createElement("option",{value:4,keyword:"option 2"},[e.default.createElement("strong",{},[e.default.createText("Option 2",!1)])]),e.default.createText(`
                    `,!1),e.default.createElement("option",{value:[1,"2",3],keyword:"option 3"},[e.default.createText("Option 3",!1)]),e.default.createText(`
                    `,!1),e.default.createElement("option",{value:[1,"2",3],keyword:"option 3"},[e.default.createText("Option 4",!1)]),e.default.createText(`
                  `,!1)]),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/select.html"},[e.default.createText(`
                  Select
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-slug",{name:"slug",placeholder:"Enter slug",value:"I AM A SLUG",update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/slug.html"},[e.default.createText(`
                  Slug
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-switch",{name:"switch",label:"Active?",value:"yes",checked:!0,update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/switch.html"},[e.default.createText(`
                  Switch
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-taglist",{name:"taglist",class:"w-250",placeholder:"Enter Value",value:["foo","bar"]}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/taglist.html"},[e.default.createText(`
                  Taglist
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-textarea",{name:"textarea",placeholder:"Enter text",update:console.log},[e.default.createText("Some Text",!1)]),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/textarea.html"},[e.default.createText(`
                  Textarea
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-textlist",{name:"textlist[]",placeholder:"Enter text",value:["foo","bar"],update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/textlist.html"},[e.default.createText(`
                  Textlist
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                  `,!1),e.default.createElement("field-time",{name:"time",placeholder:"Enter time",value:new Date().getTime(),update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/time.html"},[e.default.createText(`
                  Time
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
                `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center scroll-hidden"},[e.default.createText(`
                  `,!1),e.default.createElement("field-wysiwyg",{class:"w-200 h-100",name:"wysiwyg",value:"I am ironman.",size:!0,color:!0,update:console.log}),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/wysiwyg.html"},[e.default.createText(`
                  WYSIWYG
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]),e.default.createText(`
`,!1)])]}};return ke(ot);})();
;
;module.exports = InkAPI;