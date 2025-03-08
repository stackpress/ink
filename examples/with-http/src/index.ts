import path from 'path';
import http from 'http';
import ink from '@stackpress/ink/compiler';
import { http as dev } from '@stackpress/ink-dev';

const assets = path.resolve(__dirname, '../public');

//create ink compiler
const compiler = ink({ cwd: __dirname });
const { router, refresh } = dev({ cwd: __dirname });

const server = http.createServer(async (req, res) => {
  //if development route
  if (router(req, res)) return;
  //if home page
  if (req.url === '/') {
    //determine template file
    const template = './pages/index.ink';
    //sync builder with refresh server
    refresh.sync(compiler.fromSource(template));
    //prepare response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(await compiler.render(template, {
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
    return;
  } else if (req.url?.startsWith('/build/')) {
    //get filename ie. abc123.js
    const filename = req.url.substring(7);
    //get asset
    const { type, content } = await compiler.asset(filename);
    //send response
    res.writeHead(200, { 'Content-Type': type });
    res.end(content);
    return;
  }
  
  //else if static file
  const { fs } = compiler;
  const resource = (req.url || '').substring(1).replace(/\/\//, '/'); 
  const file = path.join(assets, resource); 
  if (fs.existsSync(file)) {
    res.writeHead(200);
    fs.createReadStream(file).pipe(res);
    return;
  }
  res.statusCode = 404;
  res.end('Not Found');
});
server.listen(3000);