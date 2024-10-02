# 💧 Ink - Fastify Example

Boilerplate using Fastify and Ink as a template engine.

## Integration Example

```js
import path from 'path';
import fastify from 'fastify';
import fstatic from '@fastify/static';
import { document } from '@stackpress/ink/server';

const app = fastify({ logger: true });

app.register(fstatic, {
  root: path.join(path.dirname(__dirname), 'public')
})

const template = document({
  buildFolder: '../.ink',
  cwd: __dirname,
  useCache: false
});

app.get('/', async (req, res) => {
  const render = await template('./templates/page.ink');
  const results = render({
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
  res.type('text/html');
  res.send(results);
});

app.listen({ port: 3000 }, function (err, address) {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
```