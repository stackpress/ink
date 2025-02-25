//modules
import fs from 'node:fs';
import path from 'node:path';
import { globSync as glob } from 'fast-glob';
//ink
import type { InkEvent, DocumentBuilder } from '@stackpress/ink/compiler';
import ink from '@stackpress/ink/compiler';
import { plugin } from '@stackpress/ink-css';
//get docs folder, assume it exists
const docs = path.resolve(__dirname, '../../../docs');
//get other paths
const paths = { 
  client: path.join(docs, 'client'),
  manifest: path.join(docs, 'manifest.json')
};
//make client folder
if (!fs.existsSync(paths.client)) {
  fs.mkdirSync(paths.client, { recursive: true });
}
//create ink compiler
const compiler = ink({ 
  brand: '',
  cwd: __dirname,
  minify: true
});

//use ink ui
compiler.use(plugin());
//on post markup build, cache
compiler.emitter.on('rendered', async (event: InkEvent<string>) => {
  //extract builder and sourcecode from params
  const builder = event.params.builder as DocumentBuilder;
  //get fs and id ie. abc123c
  const { id, fs, absolute } = builder.document;
  const root = path.join(__dirname, 'pages');
  if (absolute.startsWith(root)) {
    const extname = path.extname(absolute);
    const route = absolute.substring(
      root.length + 1, 
      absolute.length - extname.length
    );
    //get file path ie. /path/to/docs/client/abc123c.html
    const cache = path.join(docs, `${route || 'index'}.html`);
    //write the markup code to cache
    const dirname = path.dirname(cache);
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname, { recursive: true });
    }
    //write html
    fs.writeFileSync(cache, event.params.html as string);
    //write client js
    fs.writeFileSync(
      path.join(paths.client, `${id}.js`), 
      await builder.client()
    );
    //write client css
    fs.writeFileSync(
      path.join(paths.client, `${id}.css`), 
      await builder.styles()
    );
  }
});

//get all the templates
const templates = glob('pages/**/*.ink', { cwd: __dirname });

async function build() {
  //loop through the templates
  for (const file of templates) {
    //default props
    const props = { title: 'Ink Documentation' };
    //ex. pages/index.ink
    const template = path.join(__dirname, file);
    //get builder
    const builder = compiler.fromSource(template);
    //get the build object
    const build = await builder.build();
    //emit view render event
    const pre = await compiler.emitter.waitFor<string>(
      'render', 
      { builder, build, props }
    );
    //render the document
    const html = pre.data || build.document.render(props);
    //emit view rendered event
    await compiler.emitter.waitFor<string>(
      'rendered', 
      { builder, build, props, html }
    );
  }
  //write manifest
  fs.writeFileSync(paths.manifest, compiler.manifest.toJson());
}

build().then(() => {
  process.exit(0);
}).catch(e => {
  console.error(e);
  process.exit(1);
});