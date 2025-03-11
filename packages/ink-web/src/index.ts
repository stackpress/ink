import type { Request, Response } from 'express';

import path from 'path';
import express from 'express';
import ink, { 
  cache, 
  Exception, 
  DocumentException 
} from '@stackpress/ink/compiler';
import { view, dev } from '@stackpress/ink-express';
import { plugin as css } from '@stackpress/ink-css';

type Next = () => void;

const docs = path.join(__dirname, '../../../docs');

//create ink compiler
const compiler = ink({ 
  brand: '', 
  cwd: __dirname, 
  minify: process.env.PUBLIC_ENV !== 'development' 
});

//create express app
const app = express();
//set the view engine to ink
app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ink');

//if production (live)
if (process.env.PUBLIC_ENV !== 'development') {
  //let's use express' template engine feature
  app.engine('ink', view(compiler));
  //...other production settings...
//if development mode
} else {
  //get development middleware
  const { router, view } = dev({ cwd: __dirname });
  //use development middleware
  app.use(router);
  //let's use express' template engine feature
  app.engine('ink', view(compiler));
}

//routes
app.get('/ink/client/:build', async (req, res) => {
  //get filename ie. abc123.js
  const filename = req.params.build;
  //get asset
  const { type, content } = await compiler.asset(filename);
  //send response
  res.type(type).send(content);
});

app.get('/ink/', (req, res) => {
  const props = { title: 'Ink Documentation' };
  return res.type('text/html').render('index', props);
});

app.get('/ink/**', (req, res) => {
  const { fs } = compiler;
  const props = { title: 'Ink Documentation' };
  // from /ink/index.html to index
  const route = (() => {
    const route = req.path.endsWith('.html')
      ? req.path.substring(5, req.path.length - 5)
      : req.path.substring(5);
    return route.length === 0 ? 'index' : route;
  })();
  //try /path/to/pages/[route].ink
  const template = path.join(__dirname, 'pages', route + '.ink');
  if (fs.existsSync(template)) {
    return res.type('text/html').render(route, props);
  }
  //else if static file
  const resource = (req.url || '').substring(5).replace(/\/\//, '/'); 
  const file = path.join(docs, resource);
  if (fs.existsSync(file)) {
    return res.status(200).sendFile(file);
  }
  res.status(404).end('Not Found');
});

app.post('/ink/**', express.urlencoded({ extended: true }), (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(String(JSON.stringify(req.body, null, 2)))
});

//use ink css
compiler.use(css());
//use build cache
if (process.env.PUBLIC_ENV !== 'development') {
  compiler.use(cache({ 
    clientPath: path.join(docs, 'client'),
    manifestPath: path.join(docs, 'manifest.json')
  }));
}
//use error handling
app.use((error: Error, req: Request, res: Response, next: Next) => {
  if (error) {
    const exception = error instanceof Exception ? error 
      : error instanceof DocumentException ? error 
      : (() => {
        const exception = new Exception(error.message, 500);
        exception.name = error.name;
        exception.stack = error.stack;
        return exception;
      })();

    const response = exception.toResponse();

    if (process.env.PUBLIC_ENV === 'production') {
      delete response.stack;
    }
    
    res.status(500);
    res.render('500', exception.toResponse());
    return;
  }
  next();
});

//listen
app.listen(3000, () => {
  console.log(`HTTP server is running on http://localhost:3000`);
});