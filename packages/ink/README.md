<div align="center">
  <img src="https://stackpress.github.io/ink/ink-icon.png" width="100" />
  <h1>Ink</h1>
  <p>The reactive web component template engine.</p>
  <a href="https://www.npmjs.com/package/@stackpress/ink"><img src="https://img.shields.io/npm/v/%40stackpress%2Fink.svg?style=flat" /></a>
  <a href="https://github.com/stackpress/ink/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat" /></a>
  <a href="https://github.com/stackpress/ink/commits/main/"><img src="https://img.shields.io/github/last-commit/stackpress/ink" /></a>
  <a href="https://github.com/stackpress/ink/blob/main/README.md#contributing"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <br />
  <br />
  <a href="https://stackpress.github.io/ink">Documentation</a>
  <br />
  <hr />
</div>

## Install

```bash
$ npm -i @stackpress/ink
```

## Compiler Usage

```js
//on server:
import ink from '@stackpress/ink/compiler';
//make a ink compiler
const compiler = ink();
//render HTML
const results = compiler.render('./page.ink');
//show HTML
console.log(results);
```

## Ink Markup

**Basic Markup**

```html
<!-- page.html -->
<script>
  const name = 'world';
</script>
<h1>Hello {name}!</h1>
```

**Markup with Styles**

```html
<!-- page.html -->
<style>
  :host {
    color: purple;
  }
  :host h1 {
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }
</style>
<script>
  const name = 'world';
</script>
<h1>Hello {name}!</h1>
```

**Markup with Props**

```html
<!-- page.html -->
<script>
  import { props } from '@stackpress/ink';
  const { name } = props();
</script>
<h1>Hello {name}</h1>
```

**Markup with Reactivity**

```html
<!-- page.html -->
<script>
  import { signal } from '@stackpress/ink';
  const name = signal('world');
  const add = () => name.value += '!';
</script>
<h1 click=add>Hello {name.value}</h1>
```

**Markup with Imports**

```html
<!-- page.html -->
<link rel="import" type="component" href="./my-heading.ink" />
<script>
  const name = 'world';
</script>
<my-heading {name}>Hello</my-heading>
```

```html
<!-- my-heading.html -->
<script>
  import { props, children } from '@stackpress/ink';
  const { name } = props();

</script>
<h1>{children()} {name}</h1>
```

**Markup with Conditional**

```html
<!-- page.html -->
<script>
  const name = 'world';
  const show = name === "world";
</script>
<if true={show}>
  <h1>Hello {name}</h1>
</if>
```

**Markup with Loops**

```html
<!-- page.html -->
<script>
  const list = [ 'a', 'b', 'c' ];
</script>
<ul>
  <each key=i value=item from=list>
    <li>{i}: {item}</li>
  </each>
</ul>
```

**Document Markup**

```html
<!-- page.html -->
<link rel="import" type="template" href="./templates/html-head.ink" />
<link rel="import" type="component" href="./components/to-do.ink" />
<style>
  body { 
    background-color: #DA532C; 
    color: #EFEFEF; 
  }
</style>
<html>
  <html-head />
  <body>
    <h1>{title}</h1>
    <to-do list=list start=start />
  </body>
</html>
```

## Why Ink?

Current frontend solutions for the most part, come in the form of a 
"frontend framework" and are "all encompassing", requiring more import 
into the frontend framework and give little export out to support server 
first solutions. Ink is a modern HTML markup language and a server 
first template engine with a built-in parser/compiler that generates 
web components and support reactivity. 

Ink works with most server frameworks including:

 - [Express](https://github.com/stackpress/ink/tree/main/examples/with-express)
 - [Fastify](https://github.com/stackpress/ink/tree/main/examples/with-fastify)
 - [Hapi](https://github.com/stackpress/ink/tree/main/examples/with-hapi)
 - [Koa](https://github.com/stackpress/ink/tree/main/examples/with-koa)
 - [NestJS](https://github.com/stackpress/ink/tree/main/examples/with-nest)
 - [Webpack](https://github.com/stackpress/ink/tree/main/examples/with-webpack)
