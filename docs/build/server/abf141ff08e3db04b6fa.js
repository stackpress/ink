var InkAPI=(()=>{var pe=Object.create;var N=Object.defineProperty;var be=Object.getOwnPropertyDescriptor;var Ee=Object.getOwnPropertyNames;var ge=Object.getPrototypeOf,_e=Object.prototype.hasOwnProperty;var o=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),ye=(a,t)=>{for(var r in t)N(a,r,{get:t[r],enumerable:!0})},re=(a,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of Ee(t))!_e.call(a,l)&&l!==r&&N(a,l,{get:()=>t[l],enumerable:!(s=be(t,l))||s.enumerable});return a};var j=(a,t,r)=>(r=a!=null?pe(ge(a)):{},re(t||!a||!a.__esModule?N(r,"default",{value:a,enumerable:!0}):r,a)),ke=a=>re(N({},"__esModule",{value:!0}),a);var d=o(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});var R=class{constructor(){this._parent=null}get parent(){return this._parent}get parentElement(){return this._parent}set parent(t){this._parent=t}};C.default=R});var U=o(T=>{"use strict";var ve=T&&T.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(T,"__esModule",{value:!0});var Oe=ve(d()),q=class extends Oe.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#comment",this.type=8,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!--${this.value}-->`}};T.default=q});var F=o(p=>{"use strict";var De=p&&p.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(p,"__esModule",{value:!0});var Ne=De(d()),B=class extends Ne.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#doctype",this.type=10,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!DOCTYPE ${this.value}>`}};p.default=B});var $=o(b=>{"use strict";var we=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var Me=we(d()),Se=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],G=class a extends Me.default{get attributes(){return Object.fromEntries(this._attributes)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof a)}get nodeName(){return this.name.toUpperCase()}get nodes(){let t=[this];return this._flatten(Array.from(this.children),t),t}get nodeType(){return this.type}get parent(){return this._parent}set parent(t){this._parent=t}constructor(t,r={},s=[]){super(),this.type=1,this._parent=null,this.name=t,this._attributes=new Map(Object.entries(r)),this.children=new Set(s.filter(Boolean))}appendChild(t){return this.children.add(t),t.parent=this,this}export(){return{type:this.type,name:this.name,attributes:Object.fromEntries(this._attributes.entries()),children:Array.from(this.children).map(t=>t.export())}}getAttribute(t){return this._attributes.get(t)}hasAttribute(t){return this._attributes.has(t)}removeAttribute(t){return this._attributes.delete(t),this}removeChild(t){this.children.delete(t),t.parent=null}setAttribute(t,r){return this._attributes.set(t,r),this}toString(){let t=Array.from(this._attributes.entries()),r=t.length>0?" "+t.map(([l,i])=>{if(typeof i=="string"&&!/["<>\n]/.test(i))return`${l}="${i}"`;if(typeof i=="boolean")return i?l:""}).join(" "):"";if(Se.includes(this.name))return`<${this.name}${r} />`;let s=Array.from(this.children.values()).map(l=>l.toString()).join("");return`<${this.name}${r}>${s}</${this.name}>`}_flatten(t,r){t.forEach(s=>{r.push(s),s instanceof a&&this._flatten(Array.from(s.children),r)})}};b.default=G});var H=o(E=>{"use strict";var Ae=E&&E.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(E,"__esModule",{value:!0});var Le=Ae(d()),Y=class extends Le.default{get nodeName(){return"#text"}get nodeType(){return this.type}get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,r=!1){super(),this.name="#text",this.type=3,this._escape=r,this._value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return this.value}};E.default=Y});var M=o(g=>{"use strict";var w=g&&g.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(g,"__esModule",{value:!0});var Pe=w(U()),Ie=w(F()),W=w($()),je=w(H()),J=class a{static createComment(t,r){let s=new Pe.default(t);return r&&(s.parent=r),s}static createDoctype(t="html",r){let s=new Ie.default(t);return r&&(s.parent=r),s}static createElement(t,r={},s=[],l){let i=new W.default(t,r,s);return l&&(i.parent=l),i}static createText(t,r=!1,s){let l=new je.default(t,r);return s&&(l.parent=s),l}static import(t,r){return t.map(s=>{let{value:l}=s,{name:i,attributes:u,children:m}=s;switch(s.type){case 1:let x=this.createElement(i,u,[],r);return a.import(m,x).forEach(h=>x.appendChild(h)),x;case 3:return this.createText(l,!0,r);case 8:return this.createComment(l,r);case 10:return this.createDoctype(l,r)}return null}).filter(Boolean)}static load(t){return new a(t)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof W.default)}get nodes(){return Array.from(this.children).map(t=>t instanceof W.default?t.nodes:[t]).flat()}constructor(t){this.children=new Set(t.filter(Boolean))}export(){return this.childList.map(t=>t.export())}toString(){return Array.from(this.children).map(t=>t.toString()).join("")}};g.default=J});var le=o(S=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0});S.getStatus=Re;var se={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};S.default=se;function Re(a){return Object.values(se).find(t=>t.code===a)}});var ce=o(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});var Ce=le(),K=class a extends Error{static for(t,...r){return r.forEach(function(s){t=t.replace("%s",String(s))}),new this(t)}static forErrors(t){let r=new this("Invalid Parameters");return r.withErrors(t),r}static require(t,r,...s){if(!t){for(let l of s)r=r.replace("%s",l);throw new this(r)}}static try(t){return{catch:r=>{try{return t()}catch(s){if(s instanceof a)return r(s,s.type);if(s instanceof Error){let l=a.upgrade(s);return r(l,l.type)}else if(typeof s=="string"){let l=a.for(s);return r(l,l.type)}return r(s,"unknown")}}}}static upgrade(t,r=500){if(t instanceof a)return t;let s=new this(t.message,r);return s.name=t.name,s.stack=t.stack,s}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,r=500){var s;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=r,this._status=((s=(0,Ce.getStatus)(r))===null||s===void 0?void 0:s.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,r=0){let s={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,r)};return Object.keys(this._errors).length>0&&(s.errors=this._errors),s}trace(t=0,r=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,r||this.stack.length).map(l=>l.trim()).map(l=>{if(!l.startsWith("at"))return!1;let[i,u,m]=l.split(" ");m||(m=`(${u})`,u="<none>");let[x,h,I]=m.substring(1,m.length-1).split(":");return{method:u,file:x,line:parseInt(h)||0,char:parseInt(I)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,r){return this._start=t,this._end=r,this}};Q.default=K});var z=o(_=>{"use strict";var qe=_&&_.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(_,"__esModule",{value:!0});var Ue=qe(ce()),V=class extends Ue.default{};_.default=V});var y=o(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});var Be=new Map;X.default=Be});var ae=o(k=>{"use strict";var te=k&&k.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(k,"__esModule",{value:!0});var Fe=te(z()),ne=te(M()),Z=te(y()),ee=class{render(t={}){Z.default.set("props",t||{});let r=process.env||{};Z.default.set("env",Object.assign(Object.assign({},r),{BUILD_ID:this.id()}));let s=JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(Z.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(r).filter(u=>u[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})),l=this.template(),i=ne.default.load(l).toString().trim();if(!i.toLowerCase().startsWith("<html"))throw Fe.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${i.replace("__TEMPLATE_DATA__",s)}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(r=>typeof r=="object"&&typeof r.nodeType=="number")?t:[ne.default.createText(String(t),!0)]}};k.default=ee});var ie=o(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});v.ServerEmitter=void 0;var A=class{emit(t,r){return this}on(t,r){return this}once(t,r){return this}unbind(t,r){return this}};v.ServerEmitter=A;var Ge=new A;v.default=Ge});var oe=o(O=>{"use strict";var $e=O&&O.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(O,"__esModule",{value:!0});var Ye=$e(y());function He(a){let t=Ye.default.get("env")||{};return a?t[a]||null:t}O.default=He});var fe=o(D=>{"use strict";var We=D&&D.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(D,"__esModule",{value:!0});D.default=Ke;var Je=We(y());function Ke(){return Je.default.get("props")||{}}});var me=o(c=>{"use strict";var Qe=c&&c.__createBinding||(Object.create?function(a,t,r,s){s===void 0&&(s=r);var l=Object.getOwnPropertyDescriptor(t,r);(!l||("get"in l?!t.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(a,s,l)}:function(a,t,r,s){s===void 0&&(s=r),a[s]=t[r]}),Ve=c&&c.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),ze=c&&c.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(r){var s=[];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[s.length]=l);return s},a(t)};return function(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var s=a(t),l=0;l<s.length;l++)s[l]!=="default"&&Qe(r,t,s[l]);return Ve(r,t),r}}(),f=c&&c.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0});c.props=c.emitter=c.env=c.data=c.ServerException=c.ServerEmitter=c.ServerDocument=c.DOMNode=c.DOMText=c.DOMElement=c.DOMDocument=c.DOMDoctype=c.DOMComment=void 0;var Xe=f(U());c.DOMComment=Xe.default;var Ze=f(F());c.DOMDoctype=Ze.default;var et=f(M());c.DOMDocument=et.default;var tt=f($());c.DOMElement=tt.default;var at=f(H());c.DOMText=at.default;var rt=f(d());c.DOMNode=rt.default;var st=f(ae());c.ServerDocument=st.default;var ue=ze(ie());c.emitter=ue.default;Object.defineProperty(c,"ServerEmitter",{enumerable:!0,get:function(){return ue.ServerEmitter}});var lt=f(y());c.data=lt.default;var ct=f(oe());c.env=ct.default;var nt=f(fe());c.props=nt.default;var it=f(z());c.ServerException=it.default});var de=o((wt,xe)=>{xe.exports={...me()}});var ft={};ye(ft,{default:()=>P});var e=j(M()),he=j(ae()),L=j(de());var n=function(a,...t){let r=ot(a);for(let s=0;s<t.length;s++)r=r.replace("%s",String(t[s]));return r},ot=function(a){return a};var P=class extends he.default{id(){return"abf141ff08e3db04b6fa"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/ink/panel.html",r=n("Ink UI - Web Components Meets Atomic Styles."),s=n("Ink UI atomically generates CSS styles and provides out of box web components."),l=()=>{document.querySelector("panel-layout").toggle("left")},i={icon:"book",label:"Docs"},u={x:10,y:20},m='<h1><strong style="color: green">Hello</strong> World</h1>',x=["https://images.wsj.net/im-580612/8SR","https://images.wsj.net/im-580612/8SR"],h=["Item 1","Item 2"],I={name:"John Doe",age:25},Te=[{id:2,name:"Jane Doe",age:25}],ut=["bg-t-2","bg-t-3"];return[e.default.createText(`
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
            `,!1),...this._toNodeList(n("Formats")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("section",{class:"flex flex-wrap gap-10"},[e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-code",{lang:"js"},[e.default.createText("compiler.render('./page.ink')",!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/code.html"},[e.default.createText(`
                Code
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-color",{"box-md":!0,"text-md":!0,value:"red"}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/color.html"},[e.default.createText(`
                Color
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-country",{"flag-md":!0,"text-md":!0,value:"us"}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/country.html"},[e.default.createText(`
                Country
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-currency",{"flag-lg":!0,"text-lg":!0,value:"usd"}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/currency.html"},[e.default.createText(`
                Currency
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-date",{format:"MMMM D YYYY, h:mm:ss a"}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/date.html"},[e.default.createText(`
                Date
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-email",{primary:!0,underline:!0,md:!0,value:"john@doe.com"}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/email.html"},[e.default.createText(`
                Email
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                10 + 29 + 20 = 
                `,!1),e.default.createElement("format-formula",{value:"29",formula:"{x} + {this} + {y}",data:u,bold:!0}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/formula.html"},[e.default.createText(`
                Formula
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-html",{value:m}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/html.html"},[e.default.createText(`
                HTML
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-image",{width:"70",value:"https://images.wsj.net/im-580612/8SR"}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/image.html"},[e.default.createText(`
                Image
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-imagelist",{width:"70",value:x}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/imagelist.html"},[e.default.createText(`
                Imagelist
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-json",{value:i}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/json.html"},[e.default.createText(`
                JSON
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-link",{secondary:!0,underline:!0,md:!0,target:"_blank",value:"https://iamawesome.com/"}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/link.html"},[e.default.createText(`
                Link
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-list",{value:h,item:"tx-lh-36"}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/list.html"},[e.default.createText(`
                List
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-markdown",{value:"**Hello** World"}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/markdown.html"},[e.default.createText(`
                Markdown
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-metadata",{value:I,padding:"10",align:"center","background-theme":"bg-1","stripe-theme":"bg-2","border-theme":"black",format:!0}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/metadata.html"},[e.default.createText(`
                Metadata
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-number",{value:"12345.67",separator:",",decimal:".",decimals:2}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/number.html"},[e.default.createText(`
                Number
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-overflow",{value:"Lorem Ipsum",length:8,hellip:!0}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/overflow.html"},[e.default.createText(`
                Overflow
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-phone",{value:"+63 (917) 555-2424"}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/phone.html"},[e.default.createText(`
                Phone
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-rating",{class:"tx-warning",value:"3.5",max:5,remainder:!0,round:"floor"}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/rating.html"},[e.default.createText(`
                Rating
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-separated",{value:["Foo","bar"],separator:"line"}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/separated.html"},[e.default.createText(`
                Separated
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-table",{value:Te,padding:"10",align:"center","background-theme":"bg-1","stripe-theme":"bg-2","header-theme":"bg-2","border-theme":"black"}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/table.html"},[e.default.createText(`
                Table
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-taglist",{value:["Foo","bar"],pill:!0}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/taglist.html"},[e.default.createText(`
                Taglist
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-text",{value:"i am a title",capital:!0}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/text.html"},[e.default.createText(`
                Text
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},[e.default.createText(`
                `,!1),e.default.createElement("format-yesno",{value:!0}),e.default.createText(`
              `,!1)]),e.default.createText(`
              `,!1),e.default.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/yesno.html"},[e.default.createText(`
                Yesno
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]),e.default.createText(`
`,!1)])]}};return ke(ft);})();
;
;module.exports = InkAPI;