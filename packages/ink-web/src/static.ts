import path from 'path';
import express from 'express';
import ink from '@stackpress/ink/compiler';

const docs = path.join(__dirname, '../../../docs');

//create ink compiler
const compiler = ink({ 
  brand: '',
  cwd: __dirname,
  minify: false
});

//create express app
const app = express();

app.get('/ink/**', (req, res) => {
  const { fs } = compiler;
  const resource = (req.url || '/ink/index.html')
    .substring(5)
    .replace(/\/\//, '/'); 
  
  const file = path.join(docs, resource); 
  if (fs.existsSync(file)) {
    return res.status(200).sendFile(file);
  }
  res.status(404).end('Not Found');
});

//listen
app.listen(3000, () => {
  console.log(`HTTP server is running on http://localhost:3000`);
});