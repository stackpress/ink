import type { Request, Response } from 'express';
import type { InkEvent, DocumentBuilder } from '@stackpress/ink/compiler';

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
  minify: process.env.NODE_ENV !== 'development' 
});
//use ink css
compiler.use(css());
//use build cache
compiler.use(cache({ 
  environment: process.env.NODE_ENV,
  buildPath: path.join(docs, 'build') 
}));

//on post markup build, cache (dev and live)
compiler.emitter.on('rendered', (event: InkEvent<string>) => {
  //extract builder and sourcecode from params
  const builder = event.params.builder as DocumentBuilder;
  const html = event.params.html as string;
  //get fs and id ie. abc123c
  const { fs, absolute } = builder.document;
  const root = path.join(__dirname, 'pages');
  if (absolute.startsWith(root)) {
    const extname = path.extname(absolute);
    const route = absolute.substring(
      root.length + 1, 
      absolute.length - extname.length
    );
    //get file path ie. /path/to/docs/client/abc123c.html
    const cache = path.join(docs, `${route || 'index'}.html`);
    //write the client source code to cache
    const dirname = path.dirname(cache);
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname, { recursive: true });
    }
    fs.writeFileSync(cache, html);
  }
});

//create express app
const app = express();
//set the view engine to ink
app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ink');

//if production (live)
if (process.env.NODE_ENV === 'production') {
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
app.get('/ink/build/client/:build', async (req, res) => {
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

//error handling
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

    if (process.env.NODE_ENV === 'production') {
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