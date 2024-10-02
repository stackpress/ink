var InkAPI=(()=>{var ae=Object.create;var k=Object.defineProperty;var se=Object.getOwnPropertyDescriptor;var re=Object.getOwnPropertyNames;var ce=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty;var o=(l,t)=>()=>(t||l((t={exports:{}}).exports,t),t.exports),ne=(l,t)=>{for(var a in t)k(l,a,{get:t[a],enumerable:!0})},z=(l,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of re(t))!ie.call(l,n)&&n!==a&&k(l,n,{get:()=>t[n],enumerable:!(r=se(t,n))||r.enumerable});return l};var G=(l,t,a)=>(a=l!=null?ae(ce(l)):{},z(t||!l||!l.__esModule?k(a,"default",{value:l,enumerable:!0}):a,l)),oe=l=>z(k({},"__esModule",{value:!0}),l);var I=o(_=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});var w=class extends Error{static for(t,...a){return a.forEach(function(r){t=t.replace("%s",r)}),new this(t)}static forErrorsFound(t){let a=new this("Invalid Parameters");return a.errors=t,a}static require(t,a,...r){if(!t){for(let n of r)a=a.replace("%s",n);throw new this(a)}}constructor(t,a=500){super(),this.errors={},this.start=0,this.end=0,this.message=t,this.name=this.constructor.name,this.code=a}withCode(t){return this.code=t,this}withPosition(t,a){return this.start=t,this.end=a,this}toJSON(){return{error:!0,code:this.code,message:this.message}}};_.default=w});var L=o(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});var j=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(a=>this._elements.add(a))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};D.default=j});var m=o(S=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0});var fe=new Map;S.default=fe});var P=o(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});var N=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,a=!1){this._escape=a,this._value=t}toString(){return this.value}};O.default=N});var A=o(h=>{"use strict";var xe=h&&h.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(h,"__esModule",{value:!0});var me=xe(L()),he=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],M=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,a={},r="",n=[]){this._attributes={},this._name=t,this._attributes=a,this._props=r,this._children=new me.default(n)}toString(){let t=Object.entries(this._attributes),a=t.length>0?" "+t.map(([n,x])=>{if(typeof x=="string"&&!/["<>\n]/.test(x))return`${n}="${x}"`;if(typeof x=="boolean")return x?n:""}).join(" "):"";if(he.includes(this._name))return`<${this._name}${a} />`;let r=this._children.toString();return`<${this._name}${a}>${r}</${this._name}>`}};h.default=M});var q=o(d=>{"use strict";var W=d&&d.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(d,"__esModule",{value:!0});var de=W(P()),J=W(A()),C=class{static render(t){return t.filter(Boolean).map(a=>a.toString()).join("")}static registry(t,a=new Set){return t.forEach(r=>{r instanceof J.default&&(["html","head","body"].includes(r.name)||a.add(r),r.name!=="head"&&r.children.length>0&&this.registry(r.children.toArray(),a))}),a}static createElement(t,a,r,n=[]){return new J.default(t,a,r,n)}static createText(t,a=!0){return new de.default(t,a)}};d.default=C});var Y=o(b=>{"use strict";var F=b&&b.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(b,"__esModule",{value:!0});var be=F(I()),$=F(m()),B=F(q()),U=class{bindings(){let t=B.default.registry(this.template());return`{ ${Array.from(t.values()).map((r,n)=>r.props!=="{ }"?`'${n}': ${r.props}`:"").filter(r=>r!=="").join(", ")} }`}render(t={}){$.default.set("props",t||{}),$.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries($.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(n=>n[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let a=this.template(),r=B.default.render(a).trim();if(!r.toLowerCase().startsWith("<html"))throw be.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${r}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(a=>typeof a=="object"&&typeof a.nodeType=="number")?t:[B.default.createText(String(t))]}};b.default=U});var V=o(u=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0});u.InkEmitter=void 0;var E=class{emit(t,a){return this}on(t,a){return this}once(t,a){return this}unbind(t,a){return this}};u.InkEmitter=E;var ue=new E;u.default=ue});var H=o(p=>{"use strict";var pe=p&&p.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(p,"__esModule",{value:!0});var ge=pe(m());function Te(l){let t=ge.default.get("env")||{};return l?t[l]||null:t}p.default=Te});var K=o(g=>{"use strict";var ke=g&&g.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(g,"__esModule",{value:!0});g.default=ye;var Ee=ke(m());function ye(){return Ee.default.get("props")||{}}});var X=o(c=>{"use strict";var ve=c&&c.__createBinding||(Object.create?function(l,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(l,r,n)}:function(l,t,a,r){r===void 0&&(r=a),l[r]=t[a]}),we=c&&c.__setModuleDefault||(Object.create?function(l,t){Object.defineProperty(l,"default",{enumerable:!0,value:t})}:function(l,t){l.default=t}),_e=c&&c.__importStar||function(l){if(l&&l.__esModule)return l;var t={};if(l!=null)for(var a in l)a!=="default"&&Object.prototype.hasOwnProperty.call(l,a)&&ve(t,l,a);return we(t,l),t},f=c&&c.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(c,"__esModule",{value:!0});c.InkText=c.InkException=c.InkEmitter=c.InkElement=c.InkRegistry=c.InkDocument=c.InkCollection=c.props=c.emitter=c.env=c.data=void 0;var Ie=f(I());c.InkException=Ie.default;var je=f(L());c.InkCollection=je.default;var De=f(Y());c.InkDocument=De.default;var Le=f(q());c.InkRegistry=Le.default;var Se=f(A());c.InkElement=Se.default;var Q=_e(V());c.emitter=Q.default;Object.defineProperty(c,"InkEmitter",{enumerable:!0,get:function(){return Q.InkEmitter}});var Ne=f(P());c.InkText=Ne.default;var Oe=f(m());c.data=Oe.default;var Pe=f(H());c.env=Pe.default;var Me=f(K());c.props=Me.default});var R=o((Qe,Z)=>{Z.exports={...X()}});var Ce={};ne(Ce,{default:()=>y});var e=G(R()),T=G(R());var i=function(l,...t){let a=Ae(l);for(let r=0;r<t.length;r++)a=a.replace("%s",String(t[r]));return a},Ae=function(l){return l};var y=class extends e.InkDocument{id(){return"5b0064b8e058fcd88a3c"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/ink/panel.html",a=i("Ink UI - Web Components Meets Atomic Styles."),r=i("Ink UI atomically generates CSS styles and provides out of box web components."),n=()=>{document.querySelector("panel-layout").toggle("left")},x=(s,v)=>{setTimeout(()=>{v("https://images.wsj.net/im-580612/8SR")},5e3)},ee=(s,v)=>{setTimeout(()=>{v(s.map((qe,$e)=>"https://images.wsj.net/im-580612/8SR"))},1e3)},te={first:"Jane",last:"Doe"},le=[{first1:"John",last1:"Doe",fieldset2:[{first2:"Jane",last2:"Doe"}]}];return[e.InkRegistry.createText(`
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
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,T.env)("BUILD_ID")}.css`},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/build/client/${env('BUILD_ID')}.css` }"),e.InkRegistry.createText(`
  
  `,!1),e.InkRegistry.createElement("script",{"data-app":(0,T.env)("APP_DATA"),src:`/ink/build/client/${(0,T.env)("BUILD_ID")}.js`},"{ 'data-app': env('APP_DATA'), 'src': `/ink/build/client/${env('BUILD_ID')}.js` }"),e.InkRegistry.createText(`
  `,!1),...(0,T.env)("NODE_ENV")==="development"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("script",{src:"/dev.js"},"{ 'src': `/dev.js` }"),e.InkRegistry.createText(`
  `,!1)]:[],e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},"{ 'class': `light bg-t-0 tx-t-1 tx-arial` }",[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("panel-layout",{},"{ }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("header",{},"{ }",[e.InkRegistry.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},"{ 'class': `flex flex-center-y px-20 py-15 m-0 bg-t-1` }",[e.InkRegistry.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:n},"{ 'class': `fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1`, 'click': toggle }",[]),e.InkRegistry.createText(`
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
  `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:n},"{ 'class': `fas fa-fw fa-chevron-left cursor-pointer none md-inline-block`, 'click': toggle }",[]),e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("nav",{class:"bg-t-1 scroll-auto h-calc-full-60"},"{ 'class': `bg-t-1 scroll-auto h-calc-full-60` }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(i("Introduction")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/index.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(i("Features")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/markup-syntax.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/markup-syntax.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/component-strategy.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/component-strategy.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/compiler-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/compiler-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/client-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/client-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(i("Usage")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/template-engine.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/template-engine.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/single-page.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/single-page.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/static-site.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/static-site.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/component-publisher.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/component-publisher.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold mb-100`, 'href': `/ink/docs/developer-tools.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},"{ 'class': `block tx-info py-10 pl-10 mb-100`, 'href': `/ink/docs/developer-tools.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(i("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
`,!1)])]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("main",{},"{ }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("api-docs",{},"{ }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},"{ 'class': `tx-primary tx-upper tx-30 py-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(i("Form")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("form",{method:"get",action:"/ink/ui/form/index.html"},"{ 'method': `get`, 'action': `/ink/ui/form/index.html` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("section",{class:"flex flex-wrap gap-10"},"{ 'class': `flex flex-wrap gap-10` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("form-button",{class:"mr-5",md:!0,success:!0,curved:!0,solid:!0},"{ 'class': `mr-5`, 'md': true, 'success': true, 'curved': true, 'solid': true }",[e.InkRegistry.createText(`
                    Submit
                  `,!1)]),e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("form-button",{md:!0,warning:!0,rounded:!0,transparent:!0,href:"#"},"{ 'md': true, 'warning': true, 'rounded': true, 'transparent': true, 'href': `#` }",[e.InkRegistry.createText(`
                    Submit
                  `,!1)]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/button.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/button.html` }",[e.InkRegistry.createText(`
                  Buttons
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("form-control",{class:"py-5",label:"First Name*",error:"Some Error"},"{ 'class': `py-5`, 'label': `First Name*`, 'error': `Some Error` }",[e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("field-input",{name:"first",placeholder:"Enter your first name",error:!0},"{ 'name': `first`, 'placeholder': `Enter your first name`, 'error': true }"),e.InkRegistry.createText(`
                  `,!1)]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/control.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/control.html` }",[e.InkRegistry.createText(`
                  Control
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("form-fieldset",{legend:"Fieldset %s",name:"fieldset1",value:le},"{ 'legend': `Fieldset %s`, 'name': `fieldset1`, 'value': fieldset }",[e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("field-input",{name:"first1",placeholder:"Enter your first name"},"{ 'name': `first1`, 'placeholder': `Enter your first name` }"),e.InkRegistry.createText(`
                  `,!1)]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/fieldset.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/fieldset.html` }",[e.InkRegistry.createText(`
                  Fieldset
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},"{ 'class': `tx-primary tx-upper tx-30 py-20` }",[e.InkRegistry.createText(`
              `,!1),...this._toNodeList(i("Fields")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("section",{class:"flex flex-wrap gap-10"},"{ 'class': `flex flex-wrap gap-10` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-checkbox",{name:"checkbox",label:"Active?",value:"yes",checked:!0,orange:!0,update:console.log},"{ 'name': `checkbox`, 'label': `Active?`, 'value': `yes`, 'checked': true, 'orange': true, 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/checkbox.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/checkbox.html` }",[e.InkRegistry.createText(`
                  Checkbox
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-color",{name:"color",placeholder:"Enter color"},"{ 'name': `color`, 'placeholder': `Enter color` }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/color.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/color.html` }",[e.InkRegistry.createText(`
                  Color
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-country",{name:"country",class:"w-200 relative z-1",placeholder:"Choose Country",value:"US",open:s=>console.log("open",s),close:s=>console.log("close",s),filter:s=>console.log("filter",s),select:s=>console.log("select",s),remove:s=>console.log("remove",s),add:s=>console.log("add",s),clear:s=>console.log("clear",s),change:s=>console.log("change",s),update:s=>console.log("update",s)},"{ 'name': `country`, 'class': `w-200 relative z-1`, 'placeholder': `Choose Country`, 'value': `US`, 'open': (e) => console.log('open', e), 'close': (e) => console.log('close', e), 'filter': (e) => console.log('filter', e), 'select': (e) => console.log('select', e), 'remove': (e) => console.log('remove', e), 'add': (e) => console.log('add', e), 'clear': (e) => console.log('clear', e), 'change': (e) => console.log('change', e), 'update': (e) => console.log('update', e) }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/country.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/country.html` }",[e.InkRegistry.createText(`
                  Country
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-currency",{name:"currency",class:"w-200",placeholder:"Choose Currency",value:"PHP",open:s=>console.log("open",s),close:s=>console.log("close",s),filter:s=>console.log("filter",s),select:s=>console.log("select",s),remove:s=>console.log("remove",s),add:s=>console.log("add",s),clear:s=>console.log("clear",s),change:s=>console.log("change",s),update:s=>console.log("update",s)},"{ 'name': `currency`, 'class': `w-200`, 'placeholder': `Choose Currency`, 'value': `PHP`, 'open': (e) => console.log('open', e), 'close': (e) => console.log('close', e), 'filter': (e) => console.log('filter', e), 'select': (e) => console.log('select', e), 'remove': (e) => console.log('remove', e), 'add': (e) => console.log('add', e), 'clear': (e) => console.log('clear', e), 'change': (e) => console.log('change', e), 'update': (e) => console.log('update', e) }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/currency.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/currency.html` }",[e.InkRegistry.createText(`
                  Currency
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-date",{name:"date",placeholder:"Enter date",value:"2020-01-01",update:console.log},"{ 'name': `date`, 'placeholder': `Enter date`, 'value': `2020-01-01`, 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/date.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/date.html` }",[e.InkRegistry.createText(`
                  Date
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-datetime",{name:"datetime",placeholder:"Enter datetime",value:"2020-01-01 13:20:10",update:console.log},"{ 'name': `datetime`, 'placeholder': `Enter datetime`, 'value': `2020-01-01 13:20:10`, 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/datetime.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/datetime.html` }",[e.InkRegistry.createText(`
                  Datetime
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-editor",{lang:"javascript",class:"w-200 h-80 scroll-auto",numbers:!0,name:"editor",value:"ink.render(true);",update:console.log},"{ 'lang': `javascript`, 'class': `w-200 h-80 scroll-auto`, 'numbers': true, 'name': `editor`, 'value': `ink.render(true);`, 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/editor.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/editor.html` }",[e.InkRegistry.createText(`
                  Editor
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-file",{name:"file",class:"block w-250",upload:x,update:console.log},"{ 'name': `file`, 'class': `block w-250`, 'upload': fileupload, 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/file.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/file.html` }",[e.InkRegistry.createText(`
                  File
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-filelist",{image:!0,name:"filelist",class:"block w-250",upload:ee,update:console.log},"{ 'image': true, 'name': `filelist`, 'class': `block w-250`, 'upload': filelistupload, 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/filelist.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/filelist.html` }",[e.InkRegistry.createText(`
                  Filelist
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-input",{name:"first",placeholder:"Enter your first name",value:"test"},"{ 'name': `first`, 'placeholder': `Enter your first name`, 'value': `test` }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/input.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/input.html` }",[e.InkRegistry.createText(`
                  Input
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/knob.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/knob.html` }",[e.InkRegistry.createText(`
                  Knob
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-markdown",{class:"w-200 h-80 block",numbers:!0,name:"markdown",value:"**I AM BOLD**",update:console.log},"{ 'class': `w-200 h-80 block`, 'numbers': true, 'name': `markdown`, 'value': `**I AM BOLD**`, 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/markdown.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/markdown.html` }",[e.InkRegistry.createText(`
                  Markdown
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-mask",{mask:"999-999-9999",placeholder:"999-999-9999"},"{ 'mask': `999-999-9999`, 'placeholder': `999-999-9999` }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/mask.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/mask.html` }",[e.InkRegistry.createText(`
                  Mask
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-metadata",{class:"w-250",name:"metadata",placeholder:"Enter text",value:te,update:console.log},"{ 'class': `w-250`, 'name': `metadata`, 'placeholder': `Enter text`, 'value': metadata, 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/metadata.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/metadata.html` }",[e.InkRegistry.createText(`
                  Metadata
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center tx-black"},"{ 'class': `bg-t-3 h-120 flex flex-center tx-black` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-number",{name:"number",min:"0",max:"10000",step:"0.01",value:"1234.56",update:console.log},"{ 'name': `number`, 'min': `0`, 'max': `10000`, 'step': `0.01`, 'value': `1234.56`, 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/number.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/number.html` }",[e.InkRegistry.createText(`
                  Number
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-password",{name:"password",placeholder:"Enter password",update:console.log},"{ 'name': `password`, 'placeholder': `Enter password`, 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/password.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/password.html` }",[e.InkRegistry.createText(`
                  Password
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-radio",{name:"radio",label:"Yes",value:"yes",checked:!0,rounded:!0,update:console.log,class:"mr-10"},"{ 'name': `radio`, 'label': `Yes`, 'value': `yes`, 'checked': true, 'rounded': true, 'update': console.log, 'class': `mr-10` }"),e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-radio",{name:"radio",label:"No",value:"no",rounded:!0,update:console.log},"{ 'name': `radio`, 'label': `No`, 'value': `no`, 'rounded': true, 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/radio.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/radio.html` }",[e.InkRegistry.createText(`
                  Radio
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-range",{name:"range",min:"0",max:"100",step:"10",value:"0"},"{ 'name': `range`, 'min': `0`, 'max': `100`, 'step': `10`, 'value': `0` }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/range.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/range.html` }",[e.InkRegistry.createText(`
                  Range
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-rating",{name:"rating",value:"0",primary:!0,xl2:!0,update:console.log},"{ 'name': `rating`, 'value': `0`, 'primary': true, 'xl2': true, 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/rating.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/rating.html` }",[e.InkRegistry.createText(`
                  Rating
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-select",{class:"w-200 relative z-1",name:"select",placeholder:"Choose",value:"1",search:!0,custom:!0,multiple:!0,open:s=>console.log("open",s),close:s=>console.log("close",s),filter:s=>console.log("filter",s),select:s=>console.log("select",s),remove:s=>console.log("remove",s),add:s=>console.log("add",s),clear:s=>console.log("clear",s),change:s=>console.log("change",s),update:s=>console.log("update",s)},"{ 'class': `w-200 relative z-1`, 'name': `select`, 'placeholder': `Choose`, 'value': `1`, 'search': true, 'custom': true, 'multiple': true, 'open': (e) => console.log('open', e), 'close': (e) => console.log('close', e), 'filter': (e) => console.log('filter', e), 'select': (e) => console.log('select', e), 'remove': (e) => console.log('remove', e), 'add': (e) => console.log('add', e), 'clear': (e) => console.log('clear', e), 'change': (e) => console.log('change', e), 'update': (e) => console.log('update', e) }",[e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("option",{value:"1",keyword:"option 1"},"{ 'value': `1`, 'keyword': `option 1` }",[e.InkRegistry.createText("Option 1",!1)]),e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("option",{value:4,keyword:"option 2"},"{ 'value': 4, 'keyword': `option 2` }",[e.InkRegistry.createElement("strong",{},"{ }",[e.InkRegistry.createText("Option 2",!1)])]),e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("option",{value:[1,"2",3],keyword:"option 3"},"{ 'value': [1, '2', 3], 'keyword': `option 3` }",[e.InkRegistry.createText("Option 3",!1)]),e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("option",{value:[1,"2",3],keyword:"option 3"},"{ 'value': [1, '2', 3], 'keyword': `option 3` }",[e.InkRegistry.createText("Option 4",!1)]),e.InkRegistry.createText(`
                  `,!1)]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/select.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/select.html` }",[e.InkRegistry.createText(`
                  Select
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-slug",{name:"slug",placeholder:"Enter slug",value:"I AM A SLUG",update:console.log},"{ 'name': `slug`, 'placeholder': `Enter slug`, 'value': `I AM A SLUG`, 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/slug.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/slug.html` }",[e.InkRegistry.createText(`
                  Slug
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-switch",{name:"switch",label:"Active?",value:"yes",checked:!0,update:console.log},"{ 'name': `switch`, 'label': `Active?`, 'value': `yes`, 'checked': true, 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/switch.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/switch.html` }",[e.InkRegistry.createText(`
                  Switch
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-taglist",{name:"taglist",class:"w-250",placeholder:"Enter Value",value:["foo","bar"]},"{ 'name': `taglist`, 'class': `w-250`, 'placeholder': `Enter Value`, 'value': ['foo', 'bar'] }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/taglist.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/taglist.html` }",[e.InkRegistry.createText(`
                  Taglist
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-textarea",{name:"textarea",placeholder:"Enter text",update:console.log},"{ 'name': `textarea`, 'placeholder': `Enter text`, 'update': console.log }",[e.InkRegistry.createText("Some Text",!1)]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/textarea.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/textarea.html` }",[e.InkRegistry.createText(`
                  Textarea
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-textlist",{name:"textlist[]",placeholder:"Enter text",value:["foo","bar"],update:console.log},"{ 'name': `textlist[]`, 'placeholder': `Enter text`, 'value': ['foo', 'bar'], 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/textlist.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/textlist.html` }",[e.InkRegistry.createText(`
                  Textlist
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-time",{name:"time",placeholder:"Enter time",value:new Date().getTime(),update:console.log},"{ 'name': `time`, 'placeholder': `Enter time`, 'value': new Date().getTime(), 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/time.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/time.html` }",[e.InkRegistry.createText(`
                  Time
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center scroll-hidden"},"{ 'class': `bg-t-3 h-120 flex flex-center scroll-hidden` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("field-wysiwyg",{class:"w-200 h-100",name:"wysiwyg",value:"I am ironman.",size:!0,color:!0,update:console.log},"{ 'class': `w-200 h-100`, 'name': `wysiwyg`, 'value': `I am ironman.`, 'size': true, 'color': true, 'update': console.log }"),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/form/wysiwyg.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/form/wysiwyg.html` }",[e.InkRegistry.createText(`
                  WYSIWYG
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return oe(Ce);})();
