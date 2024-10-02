# 💧 Ink Express

This package is designed for [Ink](https://github.com/stackpress/ink),
the reactive web component template engine. See [docs](https://github.com/stackpress/ink)
for more information.

Ink plugin for Express and native HTTP.

## Install

```bash
$ npm -i @stackpress/ink-express
```

## Usage

```js
import path from 'path';
import express from 'express';
import { view } from '@stackpress/ink-express';

//create ink compiler
const compiler = ink({ cwd: __dirname, minify: false });
//create express app
const app = express();

//let's use express' template engine feature
app.engine('ink', view(compiler));
//set the view engine to ink
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ink');
//..other routes
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```
