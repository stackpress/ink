# 💧 Ink - Express Example

Boilerplate using Express and Ink as a template engine.

## Integration Example

```js
import express from 'express';
import { document } from '@stackpress/ink/server';

const app = express();
//general options for ink
const template = document({
  buildFolder: '../.ink',
  cwd: __dirname,
  useCache: false
});
//let's use express' template engine feature
app.engine(
  'ink',
  async (
    filePath: string,
    options: Record<string, any>,
    callback: (err: Error | null, results: string | undefined) => void,
  ) => {
    const render = await template(filePath);
    const results = render(options);
    callback(null, results);
  },
);
//set the view engine to ink
app.set('views', './templates');
app.set('view engine', 'ink');

app.get('/', async (req, res) => {
  //now use the ink template engine
  res.render('page', {
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

//open public folder
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```