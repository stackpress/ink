# 💧 Ink DEV

This package is designed for [Ink](https://github.com/stackpress/ink),
the reactive web component template engine. See [docs](https://github.com/stackpress/ink)
for more information.

Ink developer mode with hot page reload. 
Not suited for production environments.

## Install

```bash
$ npm -i @stackpress/ink-dev
```

# Usage

```js
import http from 'http';
import ink from '@stackpress/ink/compiler';
import { dev } from '@stackpress/ink-dev';

//create ink compiler
const compiler = ink({ cwd: __dirname });
//1. create dev tools
const { router, refresh } = dev({ cwd: __dirname });

//create http server
const server = http.createServer(async (req, res) => {
  //2. Add dev router
  if (router(req, res)) return;
  //if home page
  if (req.url === '/') {
    //3. sync builder with refresh server
    refresh.sync(compiler.fromSource('./page.ink'));
    //compile the document
    const html = await compiler.render('./page.ink');
    //... send response ...
  }
  //... other routes ...
});
//listen on port 3000
server.listen(3000);
```