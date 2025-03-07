import path from 'path';
import http from 'http';
import type { Readable } from 'node:stream';
import { createServerAdapter } from '@whatwg-node/server';
import ink from '@stackpress/ink/compiler';
import { whatwg } from '@stackpress/ink-dev';

const assets = path.resolve(__dirname, '../public');

//create ink compiler
const compiler = ink({ cwd: __dirname });
const { router, refresh } = whatwg({ cwd: __dirname });

const adapter = createServerAdapter(async (req) => {
  //if req is a development route
  const development = router(req);
  if (development) return development;
  const url = new URL(req.url);
  //if home page
  if (url.pathname === '/') {
    //determine template file
    const template = './pages/index.ink';
    //sync builder with refresh server
    refresh.sync(compiler.fromSource(template));
    const html = await compiler.render(template, {
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
    return new Response(html, { 
      status: 200, 
      headers: { 'Content-Type': 'text/html' } 
    });
  } else if (url.pathname?.startsWith('/build/')) {
    //get filename ie. abc123.js
    const filename = req.url.substring(7);
    //get asset
    const { type, content } = await compiler.asset(filename);
    //send response
    return new Response(content, { 
      status: 200, 
      headers: { 'Content-Type': type } 
    });
  }

  //else if static file
  const { fs } = compiler;
  const resource = (url.pathname).substring(1).replace(/\/\//, '/'); 
  const file = path.join(assets, resource); 
  if (fs.existsSync(file)) {
    const readable = fs.createReadStream(file) as Readable;
    const stream = new ReadableStream({
      start(controller) {
        readable.on('data', chunk => controller.enqueue(chunk));
        readable.on('end', () => controller.close());
      }
    });
    return new Response(stream, { status: 200 });
  }

  return new Response('Not Found', { status: 404 });
});

const server = http.createServer(adapter);
server.listen(3000);