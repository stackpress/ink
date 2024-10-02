import path from 'path';
import fastify from 'fastify';
import fstatic from '@fastify/static';
import ink from '@stackpress/ink/compiler';

const app = fastify({ logger: true });

app.register(fstatic, {
  root: path.join(path.dirname(__dirname), 'public')
})

const compiler = ink({ cwd: __dirname });

app.get('/', async (req, res) => {
  res.type('text/html');
  res.send(await compiler.render('./pages/index.ink', {
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
  }));
});

app.get<{Params: { build: string}}>('/build/:build', async (req, res) => {
  //get filename ie. abc123.js
  const filename = req.params.build;
  //get asset
  const { type, content } = await compiler.asset(filename);
  //send response
  res.type(type).send(content);
});

app.listen({ port: 3000 }, function (err, address) {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})