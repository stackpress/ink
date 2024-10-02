# 💧 Ink ESBuild

This package is designed for [Ink](https://github.com/stackpress/ink),
the reactive web component template engine. See [docs](https://github.com/stackpress/ink)
for more information.

ESBuild support for the Ink markup language.

## Install

```bash
$ npm -i @stackpress/ink-esbuild
```

## Usage

```js
import esbuild from 'esbuild';
import { esComponentPlugin } from 'ink-esbuild';

esbuild.build({
  entryPoints: [ './app.ink' ],
  plugins: [ esComponentPlugin() ]
});
```
