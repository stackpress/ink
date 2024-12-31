import path from 'path';
import express from 'express';
import ink from '@stackpress/ink/compiler';
import { view, dev } from '@stackpress/ink-express';

//create ink compiler
const compiler = ink({ cwd: __dirname, minify: false });

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

//open public folder
app.use(express.static('public'));

//routes
app.get('/build/:build', async (req, res) => {
  //get filename ie. abc123.js
  const filename = req.params.build;
  //get asset
  const { type, content } = await compiler.asset(filename);
  //send response
  res.type(type).send(content);
});

app.get('/', async (req, res) => {
  //now use the ink template engine
  res.render('index', {
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
  })
  res.type('text/html');
});

//listen
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});