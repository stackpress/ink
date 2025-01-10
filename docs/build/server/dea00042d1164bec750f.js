var InkAPI=(()=>{var xe=Object.create;var O=Object.defineProperty;var Te=Object.getOwnPropertyDescriptor;var _e=Object.getOwnPropertyNames;var be=Object.getPrototypeOf,Ee=Object.prototype.hasOwnProperty;var i=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),ge=(a,t)=>{for(var r in t)O(a,r,{get:t[r],enumerable:!0})},ae=(a,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of _e(t))!Ee.call(a,n)&&n!==r&&O(a,n,{get:()=>t[n],enumerable:!(s=Te(t,n))||s.enumerable});return a};var I=(a,t,r)=>(r=a!=null?xe(be(a)):{},ae(t||!a||!a.__esModule?O(r,"default",{value:a,enumerable:!0}):r,a)),ye=a=>ae(O({},"__esModule",{value:!0}),a);var d=i(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});var R=class{constructor(){this._parent=null}get parent(){return this._parent}get parentElement(){return this._parent}set parent(t){this._parent=t}};P.default=R});var q=i(p=>{"use strict";var ve=p&&p.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(p,"__esModule",{value:!0});var ke=ve(d()),C=class extends ke.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#comment",this.type=8,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!--${this.value}-->`}};p.default=C});var B=i(x=>{"use strict";var we=x&&x.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(x,"__esModule",{value:!0});var Oe=we(d()),U=class extends Oe.default{get nodeName(){return this.name}get nodeType(){return this.type}constructor(t){super(),this.name="#doctype",this.type=10,this.value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return`<!DOCTYPE ${this.value}>`}};x.default=U});var F=i(T=>{"use strict";var De=T&&T.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(T,"__esModule",{value:!0});var Ne=De(d()),Me=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],H=class a extends Ne.default{get attributes(){return Object.fromEntries(this._attributes)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof a)}get nodeName(){return this.name.toUpperCase()}get nodes(){let t=[this];return this._flatten(Array.from(this.children),t),t}get nodeType(){return this.type}get parent(){return this._parent}set parent(t){this._parent=t}constructor(t,r={},s=[]){super(),this.type=1,this._parent=null,this.name=t,this._attributes=new Map(Object.entries(r)),this.children=new Set(s.filter(Boolean))}appendChild(t){return this.children.add(t),t.parent=this,this}export(){return{type:this.type,name:this.name,attributes:Object.fromEntries(this._attributes.entries()),children:Array.from(this.children).map(t=>t.export())}}getAttribute(t){return this._attributes.get(t)}hasAttribute(t){return this._attributes.has(t)}removeAttribute(t){return this._attributes.delete(t),this}removeChild(t){this.children.delete(t),t.parent=null}setAttribute(t,r){return this._attributes.set(t,r),this}toString(){let t=Array.from(this._attributes.entries()),r=t.length>0?" "+t.map(([n,o])=>{if(typeof o=="string"&&!/["<>\n]/.test(o))return`${n}="${o}"`;if(typeof o=="boolean")return o?n:""}).join(" "):"";if(Me.includes(this.name))return`<${this.name}${r} />`;let s=Array.from(this.children.values()).map(n=>n.toString()).join("");return`<${this.name}${r}>${s}</${this.name}>`}_flatten(t,r){t.forEach(s=>{r.push(s),s instanceof a&&this._flatten(Array.from(s.children),r)})}};T.default=H});var $=i(_=>{"use strict";var je=_&&_.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(_,"__esModule",{value:!0});var Ae=je(d()),G=class extends Ae.default{get nodeName(){return"#text"}get nodeType(){return this.type}get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,r=!1){super(),this.name="#text",this.type=3,this._escape=r,this._value=t}export(){return{type:this.type,name:this.name,value:this.value}}toString(){return this.value}};_.default=G});var N=i(b=>{"use strict";var D=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var Le=D(q()),Se=D(B()),z=D(F()),Ie=D($()),W=class a{static createComment(t,r){let s=new Le.default(t);return r&&(s.parent=r),s}static createDoctype(t="html",r){let s=new Se.default(t);return r&&(s.parent=r),s}static createElement(t,r={},s=[],n){let o=new z.default(t,r,s);return n&&(o.parent=n),o}static createText(t,r=!1,s){let n=new Ie.default(t,r);return s&&(n.parent=s),n}static import(t,r){return t.map(s=>{let{value:n}=s,{name:o,attributes:f,children:m}=s;switch(s.type){case 1:let h=this.createElement(o,f,[],r);return a.import(m,h).forEach(S=>h.appendChild(S)),h;case 3:return this.createText(n,!0,r);case 8:return this.createComment(n,r);case 10:return this.createDoctype(n,r)}return null}).filter(Boolean)}static load(t){return new a(t)}get childList(){return Array.from(this.children)}get elements(){return this.nodes.filter(t=>t instanceof z.default)}get nodes(){return Array.from(this.children).map(t=>t instanceof z.default?t.nodes:[t]).flat()}constructor(t){this.children=new Set(t.filter(Boolean))}export(){return this.childList.map(t=>t.export())}toString(){return Array.from(this.children).map(t=>t.toString()).join("")}};b.default=W});var se=i(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});M.getStatus=Re;var re={CONTINUE:{code:100,status:"Continue"},PROCESSING:{code:102,status:"Processing"},OK:{code:200,status:"OK"},CREATED:{code:201,status:"Created"},ACCEPTED:{code:202,status:"Accepted"},EMPTY:{code:204,status:"No Content"},RESET:{code:205,status:"Reset Content"},PARTIAL:{code:206,status:"Partial Content"},MOVED:{code:301,status:"Moved Permanently"},FOUND:{code:302,status:"Found"},REDIRECT:{code:303,status:"See Other"},CACHE:{code:304,status:"Not Modified"},TEMPORARY:{code:307,status:"Temporary Redirect"},PERMANENT:{code:308,status:"Permanent Redirect"},ABORT:{code:309,status:"Aborted"},BAD_REQUEST:{code:400,status:"Bad Request"},UNAUTHORIZED:{code:401,status:"Unauthorized"},FORBIDDEN:{code:403,status:"Forbidden"},NOT_FOUND:{code:404,status:"Not Found"},BAD_METHOD:{code:405,status:"Method Not Allowed"},NOT_ACCEPTABLE:{code:406,status:"Not Acceptable"},REQUEST_TIMEOUT:{code:408,status:"Request Timeout"},CONFLICT:{code:409,status:"Conflict"},GONE:{code:410,status:"Gone"},LENGTH_REQUIRED:{code:411,status:"Length Required"},TOO_LARGE:{code:413,status:"Payload Too Large"},TOO_LONG:{code:414,status:"URI Too Long"},UNSUPPORTED_TYPE:{code:415,status:"Unsupported Media Type"},BAD_RANGE:{code:416,status:"Range Not Satisfiable"},BAD_EXPECTATION:{code:417,status:"Expectation Failed"},MISDIRECTED:{code:421,status:"Misdirected Request"},UNPROCESSABLE:{code:422,status:"Unprocessable Content"},LOCKED:{code:423,status:"Locked"},BAD_DEPENDENCY:{code:424,status:"Failed Dependency"},UPGRADE_REQUIRED:{code:426,status:"Upgrade Required"},BAD_PRECONDITION:{code:428,status:"Precondition Required"},TOO_MANY:{code:429,status:"Too Many Requests"},HEADER_TOO_LARGE:{code:431,status:"Request Header Fields Too Large"},LEGAL_REASONS:{code:451,status:"Unavailable For Legal Reasons"},ERROR:{code:500,status:"Internal Server Error"},NOT_IMPLEMENTED:{code:501,status:"Not Implemented"},BAD_GATEWAY:{code:502,status:"Bad Gateway"},UNAVAILABLE:{code:503,status:"Service Unavailable"},RESPONSE_TIMEOUT:{code:504,status:"Gateway Timeout"},BAD_VERSION:{code:505,status:"HTTP Version Not Supported"},INSUFFICIENT_STORAGE:{code:507,status:"Insufficient Storage"},INFINITE_LOOP:{code:508,status:"Loop Detected"},NETWORK_AUTHENTICATION_REQUIRED:{code:511,status:"Network Authentication Required"}};M.default=re;function Re(a){return Object.values(re).find(t=>t.code===a)}});var ne=i(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});var Pe=se(),Y=class a extends Error{static for(t,...r){return r.forEach(function(s){t=t.replace("%s",String(s))}),new this(t)}static forErrors(t){let r=new this("Invalid Parameters");return r.withErrors(t),r}static require(t,r,...s){if(!t){for(let n of s)r=r.replace("%s",n);throw new this(r)}}static try(t){return{catch:r=>{try{return t()}catch(s){if(s instanceof a)return r(s,s.type);if(s instanceof Error){let n=a.upgrade(s);return r(n,n.type)}else if(typeof s=="string"){let n=a.for(s);return r(n,n.type)}return r(s,"unknown")}}}}static upgrade(t,r=500){if(t instanceof a)return t;let s=new this(t.message,r);return s.name=t.name,s.stack=t.stack,s}get code(){return this._code}get end(){return this._end}get errors(){return Object.assign({},this._errors)}get start(){return this._start}get type(){return this._type}constructor(t,r=500){var s;super(t),this._errors={},this._start=0,this._end=0,this.name=this.constructor.name,this._type=this.constructor.name,this._code=r,this._status=((s=(0,Pe.getStatus)(r))===null||s===void 0?void 0:s.status)||"Unknown"}toJSON(){return JSON.stringify(this.toResponse(),null,2)}toResponse(t=0,r=0){let s={code:this._code,status:this._status,error:this.message,start:this._start,end:this._end,stack:this.trace(t,r)};return Object.keys(this._errors).length>0&&(s.errors=this._errors),s}trace(t=0,r=0){return typeof this.stack!="string"?[]:this.stack.split(`
`).slice(t,r||this.stack.length).map(n=>n.trim()).map(n=>{if(!n.startsWith("at"))return!1;let[o,f,m]=n.split(" ");m||(m=`(${f})`,f="<none>");let[h,S,pe]=m.substring(1,m.length-1).split(":");return{method:f,file:h,line:parseInt(S)||0,char:parseInt(pe)||0}}).filter(Boolean)}withCode(t){return this._code=t,this}withErrors(t){return this._errors=t,this}withPosition(t,r){return this._start=t,this._end=r,this}};K.default=Y});var Q=i(E=>{"use strict";var Ce=E&&E.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(E,"__esModule",{value:!0});var qe=Ce(ne()),J=class extends qe.default{};E.default=J});var g=i(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});var Ue=new Map;V.default=Ue});var te=i(y=>{"use strict";var ee=y&&y.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(y,"__esModule",{value:!0});var Be=ee(Q()),ce=ee(N()),X=ee(g()),Z=class{render(t={}){X.default.set("props",t||{});let r=process.env||{};X.default.set("env",Object.assign(Object.assign({},r),{BUILD_ID:this.id()}));let s=JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(X.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(r).filter(f=>f[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})),n=this.template(),o=ce.default.load(n).toString().trim();if(!o.toLowerCase().startsWith("<html"))throw Be.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${o.replace("__TEMPLATE_DATA__",s)}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(r=>typeof r=="object"&&typeof r.nodeType=="number")?t:[ce.default.createText(String(t),!0)]}};y.default=Z});var le=i(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});v.ServerEmitter=void 0;var j=class{emit(t,r){return this}on(t,r){return this}once(t,r){return this}unbind(t,r){return this}};v.ServerEmitter=j;var He=new j;v.default=He});var ie=i(k=>{"use strict";var Fe=k&&k.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(k,"__esModule",{value:!0});var Ge=Fe(g());function $e(a){let t=Ge.default.get("env")||{};return a?t[a]||null:t}k.default=$e});var oe=i(w=>{"use strict";var ze=w&&w.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(w,"__esModule",{value:!0});w.default=Ye;var We=ze(g());function Ye(){return We.default.get("props")||{}}});var fe=i(c=>{"use strict";var Ke=c&&c.__createBinding||(Object.create?function(a,t,r,s){s===void 0&&(s=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(a,s,n)}:function(a,t,r,s){s===void 0&&(s=r),a[s]=t[r]}),Je=c&&c.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),Qe=c&&c.__importStar||function(){var a=function(t){return a=Object.getOwnPropertyNames||function(r){var s=[];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[s.length]=n);return s},a(t)};return function(t){if(t&&t.__esModule)return t;var r={};if(t!=null)for(var s=a(t),n=0;n<s.length;n++)s[n]!=="default"&&Ke(r,t,s[n]);return Je(r,t),r}}(),u=c&&c.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0});c.props=c.emitter=c.env=c.data=c.ServerException=c.ServerEmitter=c.ServerDocument=c.DOMNode=c.DOMText=c.DOMElement=c.DOMDocument=c.DOMDoctype=c.DOMComment=void 0;var Ve=u(q());c.DOMComment=Ve.default;var Xe=u(B());c.DOMDoctype=Xe.default;var Ze=u(N());c.DOMDocument=Ze.default;var et=u(F());c.DOMElement=et.default;var tt=u($());c.DOMText=tt.default;var at=u(d());c.DOMNode=at.default;var rt=u(te());c.ServerDocument=rt.default;var ue=Qe(le());c.emitter=ue.default;Object.defineProperty(c,"ServerEmitter",{enumerable:!0,get:function(){return ue.ServerEmitter}});var st=u(g());c.data=st.default;var nt=u(ie());c.env=nt.default;var ct=u(oe());c.props=ct.default;var lt=u(Q());c.ServerException=lt.default});var de=i((Ot,me)=>{me.exports={...fe()}});var ot={};ge(ot,{default:()=>L});var e=I(N()),he=I(te()),A=I(de());var l=function(a,...t){let r=it(a);for(let s=0;s<t.length;s++)r=r.replace("%s",String(t[s]));return r},it=function(a){return a};var L=class extends he.default{id(){return"dea00042d1164bec750f"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/ink/index.html",r=l("Ink - The reactive web component template engine."),s=l("Ink is a template engine that generates web components and support reactivity.");return[e.default.createText(`
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
  `,!1),e.default.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,A.env)("BUILD_ID")}.css`}),e.default.createElement("script",{"data-template":!0,type:"text/json"},[e.default.createText("__TEMPLATE_DATA__",!0)]),e.default.createText(`
  `,!1),e.default.createElement("script",{src:`/ink/build/client/${(0,A.env)("BUILD_ID")}.js`}),e.default.createText(`
  `,!1),...(0,A.env)("PUBLIC_ENV")==="development"?[e.default.createText(`
    `,!1),e.default.createElement("script",{src:"/dev.js"}),e.default.createText(`
  `,!1)]:[],e.default.createText(`
`,!1)]),e.default.createText(`
  `,!1),e.default.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},[e.default.createText(`
    `,!1),e.default.createElement("panel-layout",{},[e.default.createText(`
      `,!1),e.default.createElement("header",{},[e.default.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},[e.default.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.default.createText(`
    `,!1),e.default.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:toggle},[]),e.default.createText(`
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
      `,!1),e.default.createElement("main",{class:"scroll-auto"},[e.default.createText(`
        `,!1),e.default.createElement("section",{class:"bg-t-1 py-40 tx-center w-full"},[e.default.createText(`
          `,!1),e.default.createElement("img",{class:"h-100",src:"/ink/ink-logo.png",alt:"Ink Logo"}),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-30 py-30 tx-lh-36"},[e.default.createText(`
            The reactive web component template engine.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("element-button",{primary:!0,xl:!0,rounded:!0,class:"mr-10",href:"/ink/docs/getting-started.html"},[e.default.createText(`
            `,!1),...this._toNodeList(l("Get Started")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("element-button",{secondary:!0,xl:!0,rounded:!0,class:"inline-block",href:"/ink/docs/index.html"},[e.default.createText(`
            `,!1),...this._toNodeList(l("Read the Docs")),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
        `,!1),e.default.createElement("section",{class:"m-auto mw-960 px-20"},[e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"p-20 tx-center tx-lh-36 tx-18"},[e.default.createText(`
            Ink is a modern HTML markup language and a server first 
            template engine with a built-in parser/compiler that 
            generates web components and supports reactivity.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{class:"block",title:"Basic Example"},[e.default.createText(`
            `,!1),e.default.createElement("div",{class:"flex bg-white md-block"},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:16,class:"basis-half"},[...this._toNodeList(`
                <style>
                  h1 { font-weight: bold; }
                </style>
                <script>
                  const name = 'world';
                </script>
                <h1>Hello {name}!</h1>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-preview",{class:"basis-half"},[e.default.createText(`
                `,!1),e.default.createElement("div",{},[e.default.createText(`
                  `,!1),e.default.createElement("h1",{},[...this._toNodeList(l("Hello world!"))]),e.default.createText(`
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
        `,!1),e.default.createElement("section",{class:"bg-t-1 m-auto py-40 px-20 tx-center"},[e.default.createText(`
          `,!1),e.default.createElement("ul",{class:"flex flex-center list-none p-0 tx-center md-block"},[e.default.createText(`
            `,!1),e.default.createElement("li",{class:"w-third mw-300 md-mw-400 md-w-auto md-m-auto"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"p-10"},[e.default.createText(`
                `,!1),e.default.createElement("h3",{class:"mb-20 tx-upper"},[e.default.createText(`
                  `,!1),...this._toNodeList(l("Expressive Markup")),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-16 tx-lh-24"},[e.default.createText(`
                  Any data type as attributes. Easily express logic with 
                  markup directives like if, each, and try catch. 
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"w-third mw-300 md-mw-400 md-w-auto md-m-auto md-mt-20"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"p-10"},[e.default.createText(`
                `,!1),e.default.createElement("h3",{class:"mb-20 tx-upper"},[e.default.createText(`
                  `,!1),...this._toNodeList(l("Reactive Signals")),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-16 tx-lh-24"},[e.default.createText(`
                  Easily transition from backend logic to reactive states.
                  No Hydration and no memoization needed.
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("li",{class:"w-third mw-300 md-mw-400 md-w-auto md-m-auto md-mt-20"},[e.default.createText(`
              `,!1),e.default.createElement("div",{class:"p-10"},[e.default.createText(`
                `,!1),e.default.createElement("h3",{class:"mb-20 tx-upper"},[e.default.createText(`
                  `,!1),...this._toNodeList(l("Bare Metal")),e.default.createText(`
                `,!1)]),e.default.createText(`
                `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-16 tx-lh-24"},[e.default.createText(`
                  Work with the DOM directly. Import any web components 
                  from any source. Works with Lit, HTMX.
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
        `,!1),e.default.createElement("section",{class:"m-auto mw-960 px-20 py-40"},[e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"mt-40 mb-20 tx-center tx-upper"},[e.default.createText(`
            `,!1),...this._toNodeList(l("Server Setup")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-center tx-lh-24 mb-20"},[e.default.createText(`
            Ink can be used with popular server 
            frameworks in just a few lines of code.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Server Example"},[e.default.createText(`
            `,!1),e.default.createElement("ide-code",{lang:"js",numbers:!0,trim:!0,detab:14},[...this._toNodeList(`
              import ink from '@stackpress/ink/compiler';
              //make a ink compiler
              const compiler = ink();
              //render HTML
              const results = compiler.render('./page.ink');
            `)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("h3",{class:"mt-40 mb-20 tx-center tx-upper"},[e.default.createText(`
            `,!1),...this._toNodeList(l("Props")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-center tx-lh-24 mb-20"},[e.default.createText(`
            Import your component props and use immediately
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Props Example"},[e.default.createText(`
            `,!1),e.default.createElement("div",{class:"flex bg-white md-block"},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:16,class:"basis-half"},[...this._toNodeList(`
                <style>
                  h1 { font-weight: bold; }
                </style>
                <script>
                  import { props } from '@stackpress/ink';
                  const { name } = props();
                </script>
                <h1>Hello {name}!</h1>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-preview",{class:"basis-half"},[e.default.createText(`
                `,!1),e.default.createElement("div",{},[e.default.createText(`
                  `,!1),e.default.createElement("h1",{},[...this._toNodeList(l("Hello world!"))]),e.default.createText(`
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("h3",{class:"mt-40 mb-20 tx-center tx-upper"},[e.default.createText(`
            `,!1),...this._toNodeList(l("Reactive Signals")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-center tx-lh-24 mb-20"},[e.default.createText(`
            Use signals to manage state changes and re-renders.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Signal Example"},[e.default.createText(`
            `,!1),e.default.createElement("div",{class:"flex bg-white md-block"},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:16,class:"basis-half"},[...this._toNodeList(`
                <style>
                  h1 { font-weight: bold; }
                </style>
                <script>
                  import { signal } from '@stackpress/ink';
                  const name = signal('world');
                  name.value += '!';
                </script>
                <h1>Hello {name.value}</h1>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-preview",{class:"basis-half"},[e.default.createText(`
                `,!1),e.default.createElement("div",{},[e.default.createText(`
                  `,!1),e.default.createElement("h1",{},[...this._toNodeList(l("Hello world!"))]),e.default.createText(`
                `,!1)]),e.default.createText(`
              `,!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("h3",{class:"mt-40 mb-20 tx-center tx-upper"},[e.default.createText(`
            `,!1),...this._toNodeList(l("Components and Templates")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-center tx-lh-24 mb-20"},[e.default.createText(`
            Import components and templates for reusability.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Import Example"},[e.default.createText(`
            `,!1),e.default.createElement("div",{class:"flex bg-white md-block"},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:16,class:"basis-half"},[...this._toNodeList(`
                <!-- page.html -->
                <link rel="import" href="./my-heading.html" />
                <script>
                  const name = 'world';
                </script>
                <my-heading {name}>Hello</my-heading>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{class:"basis-half b-t-1 b-solid by-0 bl-1 br-0 md-b-0",trim:!0,detab:16},[...this._toNodeList(`
                <!-- my-heading.html -->
                <script>
                  import { props } from '@stackpress/ink';
                  const { name, children } = props();
                </script>
                <h1>{children} {name}</h1>
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`

          `,!1),e.default.createElement("h3",{class:"mt-40 mb-20 tx-center tx-upper"},[e.default.createText(`
            `,!1),...this._toNodeList(l("Conditionals and Iterations")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-center tx-lh-24 mb-20"},[e.default.createText(`
            Case for conditions and iterations in an expressive way.
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("ide-app",{title:"Conditional + Iteration Example"},[e.default.createText(`
            `,!1),e.default.createElement("div",{class:"flex bg-white md-block"},[e.default.createText(`
              `,!1),e.default.createElement("ide-code",{numbers:!0,trim:!0,detab:16,class:"basis-half"},[...this._toNodeList(`
                <script>
                  const name = 'world';
                  const show = name === "world";
                </script>

                <if true=show>
                  <h1>Hello {name}</h1>
                </if>
              `)]),e.default.createText(`
              `,!1),e.default.createElement("ide-code",{class:"basis-half b-t-1 b-solid by-0 bl-1 br-0 md-b-0",trim:!0,detab:16},[...this._toNodeList(`
                <script>
                  const list = [ 'a', 'b', 'c' ];
                </script>
                <ul>
                  <each key=i value=item from=list>
                    <li>{i}: {item}</li>
                  </each>
                </ul>
              `)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
        `,!1),e.default.createElement("section",{class:"m-auto px-20 py-40 tx-center bg-t-2"},[e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-h-242424 tx-30 tx-upper"},[e.default.createText(`
            `,!1),...this._toNodeList(l("Works With Popular Server Frameworks")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("div",{class:"flex flex-center flex-wrap mx-auto mt-40 mb-0 sm-block"},[e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block basis-third mb-20",href:"https://expressjs.com/",target:"_blank"},[e.default.createText(`
              `,!1),e.default.createElement("img",{class:"h-60",src:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",alt:"Express"}),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block basis-third mb-20",href:"https://fastify.dev/",target:"_blank"},[e.default.createText(`
              `,!1),e.default.createElement("img",{class:"h-60",src:"https://upload.wikimedia.org/wikipedia/commons/0/0a/Fastify_logo.svg",alt:"Fastify"}),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block basis-third mb-20",href:"https://hapi.dev/",target:"_blank"},[e.default.createText(`
              `,!1),e.default.createElement("img",{class:"h-60",src:"https://raw.githubusercontent.com/hapijs/assets/master/images/hapi.png",alt:"Hapi"}),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block basis-third mb-20",href:"https://koajs.com/",target:"_blank"},[e.default.createText(`
              `,!1),e.default.createElement("img",{class:"h-60",src:"https://cdn.icon-icons.com/icons2/2699/PNG/512/koajs_logo_icon_168379.png",alt:"Koa"}),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block basis-third mb-20",href:"https://nestjs.com/",target:"_blank"},[e.default.createText(`
              `,!1),e.default.createElement("img",{class:"h-60",src:"https://cdn.icon-icons.com/icons2/2699/PNG/512/nestjs_logo_icon_169927.png",alt:"NestJS"}),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("a",{class:"block basis-third mb-20",href:"http://restify.com/",target:"_blank"},[e.default.createText(`
              `,!1),e.default.createElement("img",{class:"h-60",src:"https://raw.githubusercontent.com/restify/node-restify/gh-images/logo/png/restify_logo_black_transp_288x288.png?raw=true",alt:"Restify"}),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
        `,!1),e.default.createElement("section",{class:"bg-t-1 m-auto py-40 px-20"},[e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-26 tx-center"},[e.default.createText(`
            `,!1),...this._toNodeList(l("Ink Loves Developers!")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("section",{class:"flex flex-wrap md-block"},[e.default.createText(`
            `,!1),e.default.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Joff Tiquez",handle:"@jrtiquez",href:"https://twitter.com/jrtiquez",src:"https://github.com/jofftiquez.png"},[e.default.createText(`
              `,!1),e.default.createElement("p",{},[e.default.createText("Im a vue developer. No need for this. OSSPH does not support this project.",!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Primeagen",handle:"@theprimeagen",href:"https://twitter.com/ThePrimeagen",src:"https://pbs.twimg.com/profile_images/1759330620160049152/2i_wkOoK_400x400.jpg"},[e.default.createText(`
              `,!1),e.default.createElement("p",{},[e.default.createText("Ink? Never heard of it...",!1),e.default.createElement("br",{}),e.default.createText('"The Name..."',!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Kristian Quirapas",handle:"@YourCompanyCTO",href:"https://twitter.com/YourCompanyCTO",src:"https://avatars.githubusercontent.com/u/85150796?v=4"},[e.default.createText(`
              `,!1),e.default.createElement("p",{},[e.default.createText("Ink is good news for Node developers. I'm a rust developer so it don't matter to me.",!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Drizzle Team",handle:"@drizzle.team",href:"https://twitter.com/DrizzleORM",src:"https://pbs.twimg.com/profile_images/1767809210060877824/mAtEmNk0_400x400.jpg"},[e.default.createText(`
              `,!1),e.default.createElement("p",{},[e.default.createText("Ink copied this section from us. We are the original.",!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Chris B",handle:"@cblanquera",href:"https://twitter.com/cblanquera",src:"https://avatars.githubusercontent.com/u/120378?v=4"},[e.default.createText(`
              `,!1),e.default.createElement("p",{},[e.default.createText("After creating the Ink project, I am really excited to get back to ReactJS.",!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
            `,!1),e.default.createElement("tweet-box",{class:"block basis-third lg-basis-half",name:"Theo",handle:"@t3dotgg",href:"https://twitter.com/t3dotgg",src:"https://yt3.googleusercontent.com/4NapxEtLcHQ6wN2zA_DMmkOk47RFb_gy6sjSmUZGg_ARHjlIUjFsrNFddrcKMkTYpBNxCp3J=s160-c-k-c0x00ffffff-no-rj"},[e.default.createText(`
              `,!1),e.default.createElement("p",{},[e.default.createText("Ink? no thanks. Keep your stack front end. App router for life.",!1)]),e.default.createText(`
            `,!1)]),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
        `,!1),e.default.createElement("section",{class:"m-auto py-40 px-20 tx-center"},[e.default.createText(`
          `,!1),e.default.createElement("h3",{class:"tx-26 mb-20"},[e.default.createText(`
            `,!1),...this._toNodeList(l("What are you waiting for?")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("element-button",{primary:!0,xl:!0,rounded:!0,class:"inline-block",style:"margin-right:10px;",href:"/ink/docs/getting-started.html"},[e.default.createText(`
            `,!1),...this._toNodeList(l("Get Started")),e.default.createText(`
          `,!1)]),e.default.createText(`
          `,!1),e.default.createElement("element-button",{secondary:!0,xl:!0,rounded:!0,class:"inline-block",href:"/ink/docs/index.html"},[e.default.createText(`
            `,!1),...this._toNodeList(l("Read the Docs")),e.default.createText(`
          `,!1)]),e.default.createText(`
        `,!1)]),e.default.createText(`
      `,!1)]),e.default.createText(`
    `,!1)]),e.default.createText(`
  `,!1)]),e.default.createText(`
`,!1)])]}};return ye(ot);})();
;
;module.exports = InkAPI;