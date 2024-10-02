# 💧 Ink Tailwind

This package is designed for [Ink](https://github.com/stackpress/ink),
the reactive web component template engine. See [docs](https://github.com/stackpress/ink)
for more information.

TailwindCSS support for the Ink markup language.

## Install

```bash
$ npm -i @stackpress/ink-tailwind
```

## Usage

```js
import ink from '@stackpress/ink/compiler';
import { tailwind } from '@stackpress/ink-tailwind';

//create ink compiler
const compiler = ink({ cwd: __dirname });
//and use tailwind...
compiler.use(tailwind({
  darkMode: 'class',
  theme: { extend: {} },
  plugins: [],
  content: []
}));
```
