# 💧 Ink - KOA Example

Boilerplate using KOA and Ink as a template engine.

## Integration Example

```js
import path from 'path';
import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import { document } from '@stackpress/ink/server';
const app = new Koa();

const template = document({
  buildFolder: '../.ink',
  cwd: __dirname,
  useCache: false
});

const router = new Router();
router.get('/', async (ctx, next) => {
  const render = await template('./templates/page.ink');
  ctx.body = render({
    title: 'Ink',
    description: 'Edit this file to change the content of the page.',
    start: 0,
    list: [
      'Edit this file',
      'Restyle this page',
      'Create your own component',
      'Star the Ink Repo',
      'Write a blog post about Ink',
      'Fork the respository',
      'Contribute to the project'
    ]
  });
});

app.use(router.routes());
app.use(router.allowedMethods());   
app.use(serve(path.join(path.dirname(__dirname), 'public')));  


app.listen(3000);
```