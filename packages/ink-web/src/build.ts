import type { InkEvent, DocumentBuilder } from '@stackpress/ink/compiler';

import path from 'path';
import { globSync as glob } from 'fast-glob';
import ink, { cache } from '@stackpress/ink/compiler';
import { plugin } from '@stackpress/ink-css';

const docs = path.resolve(__dirname, '../../../docs');
//create ink compiler
const compiler = ink({ 
  brand: '',
  cwd: __dirname,
  minify: true
});
//use ink ui
compiler.use(plugin());
//use cache
compiler.use(cache({ 
  environment: 'production',
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

// first build all the templates
glob(
  'pages/**/*.ink', 
  { cwd: __dirname }
).forEach(async file => {
  //default props
  const props = { title: 'Ink Documentation' };
  //ex. pages/index.ink
  const template = path.join(__dirname, file);
  //get builder
  const builder = compiler.fromSource(template);
  //update manifest in memory
  compiler.manifest.set(
    builder.document.id, 
    builder.document.absolute
  );
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
  await builder.client();
  await builder.styles();
  await builder.markup();
});