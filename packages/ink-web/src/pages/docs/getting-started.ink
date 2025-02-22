<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/alert.ink" name="element-alert" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="element-icon" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/tab.ink" name="element-tab" />
<link rel="import" type="component" href="@/components/api/docs.ink" name="api-docs" />
<link rel="import" type="component" href="@/components/api/ui.ink" name="api-ui" />
<link rel="import" type="component" href="@/components/ide/app/head.ink" name="app-head" />
<link rel="import" type="component" href="@/components/ide/app/left.ink" name="app-left" />
<link rel="import" type="component" href="@/components/ide/app/main.ink" name="app-main" />
<link rel="import" type="component" href="@/components/ide/app.ink" name="ide-app" />
<link rel="import" type="component" href="@/components/ide/code.ink" name="ide-code" />
<link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />
<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>
<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/docs/getting-started.html';
  const title = _('Getting Started - Ink reactive web component template engine.');
  const description = _('How to install, setup and use Ink in a project.');
  const toggle = () => {
    document.getElementsByTagName('panel-layout')[0].toggle('left');
  };
  const examples = 'https://github.com/stackpress/ink/tree/main/examples';
</script>
<html>
  <html-head />
  <body class="light bg-t-0 tx-t-1 tx-arial">
    <panel-layout>
      <header><html-header /></header>
      <aside left><html-aside /></aside>
      <aside right>
        <menu class="m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto">
          <h6 class="tx-muted tx-14 mb-0 mt-0 pb-10 tx-uppercase">
            {_('On this page')}
          </h6>
          <nav class="tx-14 tx-lh-32">
            <a class="block tx-t-0" href="#http">
              {_('1. Add HTTP')}
            </a>
            <a class="block tx-t-0" href="#develop">
              {_('2. Add Dev Tools')}
            </a>
            <a class="block tx-t-0" href="#cache">
              {_('3. Add File Cache')}
            </a>
            <a class="block tx-t-0" href="#tailwind">
              {_('4. Add TailwindCSS')}
            </a>
            <a class="block tx-t-0" href="#express">
              {_('5. Add ExpressJS')}
            </a>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <h1 class="tx-primary tx-uppercase tx-30 py-20">
            {_('Getting Started')}
          </h1>

          <i18n-translate p trim class="tx-lh-36 py-20">
            To try out Ink, run the following commands in terminal: 
          </i18n-translate>
          <ide-app title="Terminal" class="py-20">
            <ide-code lang="bash">
              npm init -y && npm install --save @stackpress/ink && npm install --save-dev ts-node typescript @types/node
            </ide-code>
          </ide-app>
          <element-alert solid curved info class="my-20 tx-lh-24">
            <element-icon name="info-circle" />
            <strong>Recommended:</strong>
            Download the Ink editor plugin at the <a 
              target="_blank" 
              class="tx-white tx-underline"
              href="https://marketplace.visualstudio.com/items?itemName=stackpress.ink-language"
            >Visual Studio Marketplace</a>.
          </element-alert>
          <i18n-translate p trim class="tx-lh-36 py-20">
            Create a server file called
            <ide-code inline>src/index.ts</ide-code> 
            with the following code that uses the compiler.
          </i18n-translate>

          <ide-app title="src/index.ts" class="py-20">
            <ide-code class="scroll-auto" lang="js" numbers trim detab={14}>{`
              import ink from '@stackpress/ink/compiler';
              // make a ink compiler
              const compiler = ink();
              // render HTML
              compiler.render('./src/page.ink').then(console.log);
              // render CSS
              compiler.styles('./src/page.ink').then(console.log);
              // render JS
              compiler.client('./src/page.ink').then(console.log);
            `}</ide-code>
          </ide-app>
          <i18n-translate p trim class="tx-lh-36 py-20">
            Last, create a document file called
            <ide-code inline>src/page.ink</ide-code> 
            with the following template code.
          </i18n-translate>
          <ide-app title="src/page.ink" class="py-20">
            <ide-code class="scroll-auto" numbers trim detab={14}>{`
              <style>
                .center { text-align: center; }
              </style>
              <script>
                import { env } from '@stackpress/ink';
                const { BUILD_ID, APP_DATA } = env();
                const title = 'Hello World';
              </script>
              <html>
                <head>
                  <title>{title}</title>
                  <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                  <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                </head>
                <body>
                  <h1 class="center">{title}</h1>
                </body>
              </html>
            `}</ide-code>
          </ide-app>
          <i18n-translate p trim class="tx-lh-36 py-20">
            To try out the basic implementation of Ink and see the 
            results, just run the following command in terminal.
          </i18n-translate>
          <ide-app title="Terminal" class="py-20">
            <ide-code lang="bash">
              npx ts-node src/index.ts
            </ide-code>
          </ide-app>

          <a name="http"></a>
          <h2 class="tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0">
            {_('1. Add HTTP')}
          </h2>

          <i18n-translate p trim class="tx-lh-36 py-20">
            In most cases Ink will be used to render a front end from 
            a server framework. In this example, we will use the native
            NodeJS HTTP module to create a server that renders a page
            using Ink. Start by replacing the 
            <ide-code inline>{`'src/index.ts'`}</ide-code>
            file with the following code. 
          </i18n-translate>

          <element-alert solid curved info class="my-20 tx-lh-24">
            <element-icon name="info-circle" />
            <strong>Optional:</strong> You can also check your other 
            files to make sure you are following along.
          </element-alert>

          <ide-app height={410} title="With NodeJS HTTP">
            <app-head>
              <div class="flex scroll-x-auto pt-5 pl-5">
                <element-tab 
                  on
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"  
                  group="http" 
                  selector="#http-index-ts"
                >
                  src/index.ts
                </element-tab>
                <element-tab 
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="http" 
                  selector="#http-page-ink"
                >
                  src/page.ink
                </element-tab>
                <element-tab 
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="http" 
                  selector="#http-package-json"
                >
                  package.json
                </element-tab>
              </div>
            </app-head>
            <app-left>
              <h5 class="p-5">
                <element-icon name="chevron-down" />
                <span>src</span>
              </h5>
              <element-tab 
                on
                class="pl-15 pt-10 block" 
                active="tx-white"
                inactive="tx-t-1"  
                group="http" 
                selector="#http-index-ts"
              >
                <element-icon name="file" />
                index.ts
              </element-tab>
              <element-tab 
                class="pl-15 pt-10 block" 
                active="tx-white"
                inactive="tx-t-1" 
                group="http" 
                selector="#http-page-ink"
              >
                <element-icon name="file" />
                page.ink
              </element-tab>
              <element-tab 
                class="pt-10 block" 
                active="tx-white"
                inactive="tx-t-1" 
                group="http" 
                selector="#http-package-json"
              >
                <element-icon name="file" />
                package.json
              </element-tab>
            </app-left>
            <app-main>
              <ide-code id="http-index-ts" lang="js" numbers trim detab={16}>{`
                import http from 'http';
                import ink from '@stackpress/ink/compiler';

                // create ink compiler
                const compiler = ink();
                // create http server
                const server = http.createServer(async (req, res) => {
                  // if build asset...
                  if (req.url?.startsWith('/build/')) {
                    // get filename ie. abc123.js
                    const filename = req.url.substring(7);
                    // get asset
                    const { type, content } = await compiler.asset(filename);
                    // send response
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  // if home page
                  } else if (req.url === '/') {
                    // render and send response
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    return res.end(await compiler.render('./src/page.ink', {
                      title: 'Hello World'
                    }));
                  }
                });
                // listen on port 3000
                server.listen(3000);
              `}</ide-code>
              <ide-code id="http-page-ink" style="display:none" numbers trim detab={16}>{`
                <style>
                  .center { text-align: center; }
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                  </head>
                  <body>
                    <h1 class="center">{title}</h1>
                  </body>
                </html>
              `}</ide-code>
              <ide-code id="http-package-json" style="display:none" lang="js" numbers trim detab={16}>{`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.30"
                  },
                  "devDependencies": {
                    "@types/node": "22.1.0",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `}</ide-code>
            </app-main>
          </ide-app>

          <i18n-translate p trim class="tx-lh-36 py-20">
            To run your first Ink web app, just run the following 
            command in terminal.
          </i18n-translate>
          <ide-app title="Terminal" class="py-20">
            <ide-code lang="bash">
              npx ts-node src/index.ts
            </ide-code>
          </ide-app>

          <i18n-translate p trim class="tx-lh-36 py-20">
            You can now check 
            <ide-code lang="js" inline>http://localhost:3000/</ide-code> 
            in your browser to see your Ink application. The 
            <ide-code lang="js" inline>ink()</ide-code> 
            function takes in the following options, all of 
            which are optional.
          </i18n-translate>

          <api-ui start="Render Methods" />

          <a name="develop"></a>
          <h2 class="tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0">
            {_('2. Add Developer Tools')}
          </h2>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Ink provides a separate package for a better development 
            experience when working with server frameworks that utilize 
            the native http module. Start by installing adding 
            <ide-code lang="js" inline>{`@stackpress/ink-dev`}</ide-code>
            to your project.
          </i18n-translate>
          <ide-app title="Terminal" class="py-20">
            <ide-code lang="bash">
              npm install --save-dev @stackpress/ink-dev
            </ide-code>
          </ide-app>
          <i18n-translate p trim class="tx-lh-36 py-20">
            Next, import the <ide-code lang="js" inline>{`dev()`}</ide-code> 
            function from the package and use it in your existing 
            <ide-code lang="js" inline>{`src/index.ts`}</ide-code> 
            file to create a development server as shown in the example below.
          </i18n-translate>
          <ide-app title="src/index.ts" class="py-20">
            <ide-code lang="js" numbers trim detab={14}>{`
              // ...
              import { dev } from '@stackpress/ink-dev';
              // ...create ink compiler...
              // 1. create dev tools
              const { router, refresh } = dev();

              const server = http.createServer(async (req, res) => {
                // 2. Add dev router
                if (router(req, res)) return;

                if (req.url?.startsWith('/build/')) {
                  // ...
                } else if (req.url === '/') {
                  // 3. sync builder with refresh server
                  refresh.sync(compiler.fromSource('./src/page.ink'));
                  // ... compile and send response ...
                }
              });
              //...listen on port 3000...
            `}</ide-code>
          </ide-app>
          <i18n-translate p trim class="tx-lh-36 py-20">
            The <ide-code inline lang="js">{`dev()`}</ide-code> export 
            from  <ide-code inline lang="js">{`@stackpress/ink-dev`}</ide-code>
            exports tools that supports development mode and accepts the 
            following options.
          </i18n-translate>

          <api-ui start="DeveloperOptions" />

          <i18n-translate p trim class="tx-lh-36 py-20">
            This returns several tools you can use in your server app.
          </i18n-translate>

          <api-ui start="Developer Tools" />

          <i18n-translate p trim class="tx-lh-36 py-20">
            Lastly, update the document file 
            <ide-code lang="js" inline>{`src/page.ink`}</ide-code> 
            to include the development script 
            <ide-code inline>{`<script src="/dev.js"></script>`}</ide-code> 
            as shown below.
          </i18n-translate>
          <ide-app title="src/page.ink" class="py-20">
            <ide-code numbers trim detab={14}>{`
              <style>
                /* ... */
              </style>
              <script>
                //... 
              </script>
              <html>
                <head>
                  <!-- ... -->
                  <!-- 4. include dev script -->
                  <script src="/dev.js"></script>
                </head>
                <body>
                  <!-- ... -->
                </body>
              </html>
            `}</ide-code>
          </ide-app>

          <i18n-translate p trim class="tx-lh-36 py-20">
            The project should now look like the example below.
          </i18n-translate>

          <ide-app height={410} title="With Developer Tools" class="py-20">
            <app-head>
              <div class="flex scroll-x-auto pt-5 pl-5">
                <element-tab 
                  on
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="develop" 
                  selector="#develop-index-ts"
                >
                  src/index.ts
                </element-tab>
                <element-tab 
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="develop" 
                  selector="#develop-page-ink"
                >
                  src/page.ink
                </element-tab>
                <element-tab 
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="develop" 
                  selector="#develop-package-json"
                >
                  package.json
                </element-tab>
              </div>
            </app-head>
            <app-left>
              <h5 class="p-5">
                <element-icon name="chevron-down" />
                <span>src</span>
              </h5>
              <element-tab 
                on
                class="pl-15 pt-10 block" 
                active="tx-white"
                inactive="tx-t-1"  
                group="develop" 
                selector="#develop-index-ts"
              >
                <element-icon name="file" />
                index.ts
              </element-tab>
              <element-tab 
                class="pl-15 pt-10 block" 
                active="tx-white"
                inactive="tx-t-1" 
                group="develop" 
                selector="#develop-page-ink"
              >
                <element-icon name="file" />
                page.ink
              </element-tab>
              <element-tab 
                class="pt-10 block" 
                active="tx-white"
                inactive="tx-t-1" 
                group="develop" 
                selector="#develop-package-json"
              >
                <element-icon name="file" />
                package.json
              </element-tab>
            </app-left>
            <app-main>
              <ide-code id="develop-index-ts" lang="js" numbers trim detab={16}>{`
                import http from 'http';
                import ink from '@stackpress/ink/compiler';
                import { dev } from '@stackpress/ink-dev';

                const compiler = ink();
                // 1. create dev tools
                const { router, refresh } = dev();

                const server = http.createServer(async (req, res) => {
                  // 2. Add dev router
                  if (router(req, res)) return;
                  
                  if (req.url?.startsWith('/build/')) {
                    const filename = req.url.substring(7);
                    const { type, content } = await compiler.asset(filename);
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  } else if (req.url === '/') {
                    // 3. sync builder with refresh server
                    refresh.sync(compiler.fromSource('./src/page.ink'));
                    
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    return res.end(await compiler.render('./src/page.ink', {
                      title: 'Hello World'
                    }));
                  }
                });
                server.listen(3000);
              `}</ide-code>
              <ide-code id="develop-page-ink" style="display:none" numbers trim detab={16}>{`
                <style>
                  .center { text-align: center; }
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                    <script src="/dev.js"></script>
                  </head>
                  <body>
                    <h1 class="center">{title}</h1>
                  </body>
                </html>
              `}</ide-code>
              <ide-code id="develop-package-json" style="display:none" lang="js" numbers trim detab={16}>{`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.30"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "0.3.30",
                    "@types/node": "22.1.0",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `}</ide-code>
            </app-main>
          </ide-app>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Re-run the following command in terminal. It shouldn't look 
            like anything has changed, but the development server is now
            running in the background. Try to change
            <ide-code lang="js" inline>{`src/page.ink`}</ide-code>.
          </i18n-translate>
          <ide-app title="Terminal" class="py-20">
            <ide-code lang="bash">
              npx ts-node src/index.ts
            </ide-code>
          </ide-app>
          <i18n-translate p trim class="tx-lh-36 py-20">
            Whenever <ide-code lang="js" inline>{`src/page.ink`}</ide-code> 
            is saved, the development server will automatically refresh 
            the page. Components will also be updated in real-time without
            the page reloading.
          </i18n-translate>

          <a name="cache"></a>
          <h2 class="tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0">
            {_('3. Add Cache Files')}
          </h2>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Ink has an out-of-the-box cache and build strategy that
            can be used to store and serve pre-compiled files. To use the
            cache, you just need to import it from the 
            <ide-code lang="js" inline>{`@stackpress/ink/compiler`}</ide-code> 
            module and use it like the following example.
          </i18n-translate>

          <ide-app title="src/index.ts" class="py-20">
            <ide-code lang="js" numbers trim detab={14}>{`
              // ...
              import path from 'path';
              import { cache } from '@stackpress/ink/compiler';
              // ...create ink compiler...
              // 1. use cache
              compiler.use(cache({
                buildPath: path.join(__dirname, '../build')
              }));
              // ...create dev tools...
              // ...create http server...
              // ...listen on port 3000...
            `}</ide-code>
          </ide-app>

          <i18n-translate p trim class="tx-lh-36 py-20">
            The <ide-code lang="js" inline>{`src/index.ts`}</ide-code> 
            file should now look like the example below.
          </i18n-translate>

          <ide-app title="src/index.ts" class="py-20">
            <ide-code lang="js" numbers trim detab={14}>{`
              import path from 'path';
              import http from 'http';
              import ink, { cache } from '@stackpress/ink/compiler';
              import { dev } from '@stackpress/ink-dev';

              const compiler = ink();
              // 1. use cache
              compiler.use(cache({
                buildPath: path.join(__dirname, '../build')
              }));
              const { router, refresh } = dev();
              const server = http.createServer(async (req, res) => {
                if (router(req, res)) return;
                if (req.url?.startsWith('/build/')) {
                  const filename = req.url.substring(7);
                  const { type, content } = await compiler.asset(filename);
                  res.writeHead(200, { 'Content-Type': type });
                  return res.end(content);
                } else if (req.url === '/') {
                  refresh.sync(compiler.fromSource('./src/page.ink'));
                  res.writeHead(200, { 'Content-Type': 'text/html' });
                  return res.end(await compiler.render('./src/page.ink', {
                    title: 'Hello World'
                  }));
                }
              });
              server.listen(3000);
            `}</ide-code>
          </ide-app>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Re-run the following command in terminal to start the cache 
            server.
          </i18n-translate>
          <ide-app title="Terminal" class="py-20">
            <ide-code lang="bash">
              npx ts-node src/index.ts
            </ide-code>
          </ide-app>
          <i18n-translate p trim class="tx-lh-36 py-20">
            Load 
            <ide-code lang="js" inline>http://localhost:3000/</ide-code> 
            in your browser. After loading you should see files that were 
            generated in a new build folder found in your project root. 
            The <ide-code lang="js" inline>cache()</ide-code> plugin is 
            just a wrapper that listens for build related events and
            stores the generated files in the specified build path.
          </i18n-translate>

          <ide-app height={400} title="cache.ts (Internal)" class="py-20">
            <ide-code lang="js" numbers trim detab={14}>{`
              emitter.on('manifest-resolved', (event: Event<string>) => {
                const manifest = event.params.manifest as Manifest
                //write the manifest to the file system
                writeFile(paths.manifest, manifest.toJson());
              });

              // on pre render, try to use cache if live
              emitter.on('render', (event: Event<string>) => {
                //if not live, dont retrieve from cache
                if (environment !== 'production') return;
                //extract props and builder from params
                const props = (event.params.props || {}) as Hash;
                const builder = event.params.builder as Builder;
                //get fs and id ie. abc123c
                const { fs, id } = builder.document;
                //get cache file path ie. /path/to/docs/build/client/abc123c.js
                const cache = path.join(paths.build, 'server', \`\${id}.js\`);
                //if production and cache file exists
                if (fs.existsSync(cache)) {
                  //get the build object
                  const build = compiler.fromCache(cache);
                  //render the document
                  const html = build.document.render(props);
                  //return the cached content
                  event.set(html);
                }
              });

              // on post render, cache (dev and live)
              emitter.on('rendered', (event: Event<string>) => {
                //extract build and builder from params
                const builder = event.params.builder as Builder;
                const html = event.params.html as string;
                //get fs and id ie. abc123c
                const { id } = builder.document;
                //get cache file path ie. /path/to/docs/build/client/abc123c.html
                const cache = path.join(paths.build, 'client', \`\${id}.html\`);
                //write the server source code to cache
                writeFile(cache, html);
              });

              // on pre client build, try to use cache if live
              emitter.on('build-client', (event: Event<string>) => {
                //if not live, dont retrieve from cache
                if (environment !== 'production') return;
                //extract builder from params
                const builder = event.params.builder as Builder;
                //get fs and id ie. abc123c
                const id = builder.document.id;
                //get cache file path ie. /path/to/docs/build/client/abc123c.js
                const cache = path.join(paths.build, 'client', \`\${id}.js\`);
                //if cache file exists, send it
                if (fs.existsSync(cache)) {
                  event.set(fs.readFileSync(cache, 'utf8'));
                }
              });

              // on post client build, cache (dev and live)
              emitter.on('built-client', (event: Event<string>) => {
                //extract builder and sourcecode from params
                const builder = event.params.builder as Builder;
                const sourceCode = event.params.sourceCode as string;
                //get fs and id ie. abc123c
                const id = builder.document.id;
                //get cache file path ie. /path/to/docs/build/client/abc123c.js
                const cache = path.join(paths.build, 'client', \`\${id}.js\`);
                //write the client source code to cache
                writeFile(cache, sourceCode);
              });

              // on pre markup build, try to use cache if live
              emitter.on('build-markup', /* ... */);
              //on post markup build, cache (dev and live)
              emitter.on('built-markup', /* ... */);
              //on pre server build, try to use cache if live
              emitter.on('build-server', /* ... */);
              //on post server build, cache (dev and live)
              emitter.on('built-server', /* ... */);
              //on pre styles build, try to use cache if live
              emitter.on('build-styles', /* ... */);
              //on post styles build, cache (dev and live)
              emitter.on('built-styles', /* ... */);

              // Initialize: if there's a manifest
              if (fs.existsSync(paths.manifest)) {
                //load the manifest file
                compiler.manifest.load(
                  JSON.parse(fs.readFileSync(paths.manifest, 'utf-8'))
                );
              }
            `}</ide-code>
          </ide-app>

          <i18n-translate p trim class="tx-lh-36 py-20">
            This means you can also use your own cache strategy by 
            listening to the events emitted by the compiler. The
            following table lists all the events that the compiler
            emits during the build cycle of a document.
          </i18n-translate>

          <api-ui start="EventEmitter" />

          <a name="tailwind"></a>
          <h2 class="tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0">
            {_('4. Add TailwindCSS')}
          </h2>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Tailwind is an atomic CSS collection of styles that favours 
            small, single-purpose classes with their selector names based 
            on its visual function. It works by using a build process to
            read your source files to generate its styles based only on 
            what is being used. This makes using Tailwind optimal because
            it doesn't bloat your CSS with unused styles.
          </i18n-translate>

          <i18n-translate p trim class="tx-lh-36 py-20">
            At the same time, web components with the
            <ide-code inline>{`<style>`}</ide-code> tag imply using the 
            component's shadow DOM which will encapsulate the styles within
            the component and not be affected by global styles. Since 
            Tailwind in turn implies that you do not need to (necessarily) 
            define styles, you do not need to use the shadow DOM at all if
            you are using Tailwind.
          </i18n-translate>

          <element-alert solid curved warning class="my-20 tx-lh-24">
            <element-icon name="exclamation-triangle" />
            <strong>Warning:</strong>
            The caveat for using TailwindCSS, means that web components 
            using it will not be shippable to other projects that do not
            use Tailwind. It all comes down to preference in the end.
          </element-alert>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Ink has a separate package called
            <ide-code inline lang="js">{`@stackpress/ink-tailwind`}</ide-code>
            to use TailwindCSS with Ink. This is just another wrapper 
            class that listens to the compiler's build events. You can 
            install this plugin by running the following command in terminal.
          </i18n-translate>

          <ide-app title="Terminal" class="py-20">
            <ide-code lang="bash">
              npm install --save-dev @stackpress/ink-tailwind autoprefixer postcss tailwindcss
            </ide-code>
          </ide-app>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Next, in <ide-code inline lang="js">{`src/index.ts`}</ide-code>
            import the <ide-code inline lang="js">{`tailwind()`}</ide-code>
            plugin from the package and use it in the compiler as shown
            in the example below.
          </i18n-translate>

          <ide-app title="src/index.ts" class="py-20">
            <ide-code lang="js" numbers trim detab={14}>{`
              // ...
              import { tailwind } from '@stackpress/ink-tailwind';
              // ...create ink compiler...
              // ...use cache...
              // 1. Use Tailwind
              compiler.use(tailwind({
                darkMode: 'class',
                theme: { extend: {} },
                plugins: [],
                content: []
              }));

              // ...create dev tools...
              // ...create http server...
              // ...listen on port 3000...
            `}</ide-code>
          </ide-app>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Lastly, in <ide-code inline lang="js">{`src/page.ink`}</ide-code>
            add the Tailwind directives inside the 
            <ide-code inline>{`<style>`}</ide-code> tag like the code 
            below. Also add a tailwind class, (like 
            <ide-code inline lang="js">{`<style>`}</ide-code>) to the 
            markup to verify that the plugin is working and the styles 
            are being applied.
          </i18n-translate>
          
          <ide-app title="src/page.ink" class="py-20">
            <ide-code numbers trim detab={14}>{`
              <style>
                /* 2. Add tailwind directives */
                @tailwind base;
                @tailwind components;
                @tailwind utilities;

                /* ...Other styles... */
              </style>
              <script>
                //... 
              </script>
              <html>
                <head>
                  <!-- ... -->
                </head>
                <body>
                  <h1 class="text-center">{title}</h1>
                </body>
              </html>
            `}</ide-code>
          </ide-app>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Check to see if the project files look like the example below.
          </i18n-translate>

          <ide-app height={410} title="With TailwindCSS" class="py-20">
            <app-head>
              <div class="flex scroll-x-auto pt-5 pl-5">
                <element-tab 
                  on
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="tailwind" 
                  selector="#tailwind-index-ts"
                >
                  src/index.ts
                </element-tab>
                <element-tab 
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="tailwind" 
                  selector="#tailwind-page-ink"
                >
                  src/page.ink
                </element-tab>
                <element-tab 
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="tailwind" 
                  selector="#tailwind-package-json"
                >
                  package.json
                </element-tab>
              </div>
            </app-head>
            <app-left>
              <h5 class="p-5">
                <element-icon name="chevron-down" />
                <span>src</span>
              </h5>
              <element-tab 
                on
                class="pl-15 pt-10 block" 
                active="tx-white"
                inactive="tx-t-1"  
                group="tailwind" 
                selector="#tailwind-index-ts"
              >
                <element-icon name="file" />
                index.ts
              </element-tab>
              <element-tab 
                class="pl-15 pt-10 block" 
                active="tx-white"
                inactive="tx-t-1" 
                group="tailwind" 
                selector="#tailwind-page-ink"
              >
                <element-icon name="file" />
                page.ink
              </element-tab>
              <element-tab 
                class="pt-10 block" 
                active="tx-white"
                inactive="tx-t-1" 
                group="tailwind" 
                selector="#tailwind-package-json"
              >
                <element-icon name="file" />
                package.json
              </element-tab>
            </app-left>
            <app-main>
              <ide-code id="tailwind-index-ts" lang="js" numbers trim detab={16}>{`
                import path from 'path';
                import http from 'http';
                import ink, { cache } from '@stackpress/ink/compiler';
                import { dev } from '@stackpress/ink-dev';
                import { tailwind } from '@stackpress/ink-tailwind';

                const compiler = ink();
                compiler.use(cache({
                  buildPath: path.join(__dirname, '../build')
                }));
                // 1. use tailwind
                compiler.use(tailwind({
                  darkMode: 'class',
                  theme: { extend: {} },
                  plugins: [],
                  content: []
                }));
                
                const { router, refresh } = dev();
                const server = http.createServer(async (req, res) => {
                  if (router(req, res)) return;
                  if (req.url?.startsWith('/build/')) {
                    const filename = req.url.substring(7);
                    const { type, content } = await compiler.asset(filename);
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  } else if (req.url === '/') {
                    refresh.sync(compiler.fromSource('./src/page.ink'));
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    return res.end(await compiler.render('./src/page.ink', {
                      title: 'Hello World'
                    }));
                  }
                });
                server.listen(3000);
              `}</ide-code>
              <ide-code id="tailwind-page-ink" style="display:none" numbers trim detab={16}>{`
                <style>
                  /* 2. Add tailwind directives */
                  @tailwind base;
                  @tailwind components;
                  @tailwind utilities;
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                    <script src="/dev.js"></script>
                  </head>
                  <body>
                    <h1 class="text-center">{title}</h1>
                  </body>
                </html>
              `}</ide-code>
              <ide-code id="tailwind-package-json" style="display:none" lang="js" numbers trim detab={16}>{`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.3.30"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "0.3.30",
                    "@stackpress/ink-tailwind": "0.3.30",
                    "@types/node": "22.1.0",
                    "autoprefixer": "10.4.20",
                    "postcss": "8.4.44",
                    "tailwindcss": "3.4.10",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
              `}</ide-code>
            </app-main>
          </ide-app>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Re-run the following command in terminal to initialize the 
            tailwind plugin.
          </i18n-translate>
          <ide-app title="Terminal" class="py-20">
            <ide-code lang="bash">
              npx ts-node src/index.ts
            </ide-code>
          </ide-app>
          <i18n-translate p trim class="tx-lh-36 py-20">
            Load 
            <ide-code lang="js" inline>http://localhost:3000/</ide-code> 
            in your browser. After loading you should see files that were 
            generated in a new build folder found in your project root. 
            Try to add a Tailwind class to the markup in
            <ide-code lang="js" inline>{`src/page.ink`}</ide-code> and 
            save. The development server will automatically refresh 
            the styles and component styles will also be update in 
            real-time without the page reloading.
          </i18n-translate>

          <a name="express"></a>
          <h2 class="tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0">
            {_('5. Add ExpressJS')}
          </h2>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Ink has a separate package called
            <ide-code inline lang="js">{`@stackpress/ink-express`}</ide-code>
            to use Express with Ink. You can install this plugin by 
            running the following command in terminal.
          </i18n-translate>

          <ide-app title="Terminal" class="py-20">
            <ide-code lang="bash">
              npm install --save @stackpress/ink-express express && npm install --save-dev @types/express
            </ide-code>
          </ide-app>

          <i18n-translate p trim class="tx-lh-36 py-20">
            The package 
            <ide-code inline lang="js">{`@stackpress/ink-express`}</ide-code>
            exports two plugins for express.
            <ide-code inline lang="js">{`view()`}</ide-code> is the view 
            engine for production (live) environments. It can be used with
            an express app like 
            <ide-code inline lang="js">{`app.use(view(compiler))`}</ide-code>.
            The other export, <ide-code inline lang="js">{`dev()`}</ide-code> 
            is the same export from the Developer Tools documentation above, 
            but returns several tools used to integrate with express.
          </i18n-translate>

          <api-ui start="Express Developer Tools" />

          <i18n-translate p trim class="tx-lh-36 py-20">
            Example logic to use the all the Ink Express tools together
            with Ink developer tools could look like the following code
            that cases for 
            <ide-code inline lang="js">{`development`}</ide-code> and 
            <ide-code inline lang="js">{`production`}</ide-code> modes.
          </i18n-translate>

          <ide-code numbers trim detab={12} lang="js" class="py-20">{`
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
          `}</ide-code>

          <i18n-translate p trim class="tx-lh-36 py-20">
            And you can now case for development mode in 
            <ide-code inline lang="js">{`src/page.ink`}</ide-code>
            like in the example below
          </i18n-translate>

          <ide-code numbers trim detab={12} class="py-20">{`
            <style>
              /* ... */
            </style>
            <script>
              import { env } from '@stackpress/ink';
              const { NODE_ENV } = env();
            </script>
            <html>
              <head>
                <!-- ... -->
                <if true={NODE_ENV !== 'production'}>
                  <script src="/dev.js"></script>
                </if>
              </head>
              <body>
                <!-- ... -->
              </body>
            </html>
          `}</ide-code>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Check to see if the project files look like the example below.
          </i18n-translate>

          <ide-app height={410} title="With ExpressJS" class="py-20">
            <app-head>
              <div class="flex scroll-x-auto pt-5 pl-5">
                <element-tab 
                  on
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="express" 
                  selector="#express-index-ts"
                >
                  src/index.ts
                </element-tab>
                <element-tab 
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="express" 
                  selector="#express-page-ink"
                >
                  src/page.ink
                </element-tab>
                <element-tab 
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="express" 
                  selector="#express-package-json"
                >
                  package.json
                </element-tab>
              </div>
            </app-head>
            <app-left>
              <h5 class="p-5">
                <element-icon name="chevron-down" />
                <span>src</span>
              </h5>
              <element-tab 
                on
                class="pl-15 pt-10 block" 
                active="tx-white"
                inactive="tx-t-1"  
                group="express" 
                selector="#express-index-ts"
              >
                <element-icon name="file" />
                index.ts
              </element-tab>
              <element-tab 
                class="pl-15 pt-10 block" 
                active="tx-white"
                inactive="tx-t-1" 
                group="express" 
                selector="#express-page-ink"
              >
                <element-icon name="file" />
                page.ink
              </element-tab>
              <element-tab 
                class="pt-10 block" 
                active="tx-white"
                inactive="tx-t-1" 
                group="express" 
                selector="#express-package-json"
              >
                <element-icon name="file" />
                package.json
              </element-tab>
            </app-left>
            <app-main>
              <ide-code id="express-index-ts" lang="js" numbers trim detab={16}>{`
                import path from 'path';
                import express from 'express';
                import ink, { cache } from '@stackpress/ink/compiler';
                import { view, dev } from '@stackpress/ink-express';
                import { tailwind } from '@stackpress/ink-tailwind';

                //create ink compiler
                const compiler = ink();
                //use tailwind
                compiler.use(tailwind({
                  darkMode: 'class',
                  theme: { extend: {} },
                  plugins: [],
                  content: []
                }));
                //use build cache
                compiler.use(cache({ 
                  environment: process.env.NODE_ENV,
                  buildPath: path.join(__dirname, '../build')
                }));

                //create express app
                const app = express();
                //set the view engine to ink
                app.set('views', __dirname);
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
                app.get('/build/:build', async (req, res) => {
                  //get filename ie. abc123.js
                  const filename = req.params.build;
                  //get asset
                  const { type, content } = await compiler.asset(filename);
                  //send response
                  res.type(type).send(content);
                });

                app.get('/', (req, res) => {
                  //now use the ink template engine
                  res.render('page', { title: 'Hello World' });
                  res.type('text/html');
                });

                //listen
                app.listen(3000, () => {
                  console.log('HTTP server is running on http://localhost:3000');
                });
              `}</ide-code>
              <ide-code id="express-page-ink" style="display:none" numbers trim detab={16}>{`
                <style>
                  @tailwind base;
                  @tailwind components;
                  @tailwind utilities;
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA, NODE_ENV } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                    <if true={NODE_ENV !== 'production'}>
                      <script src="/dev.js"></script>
                    </if>
                  </head>
                  <body>
                    <h1 class="text-center">{title}</h1>
                  </body>
                </html>
              `}</ide-code>
              <ide-code id="express-package-json" style="display:none" lang="js" numbers trim detab={16}>{`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "^0.1.9",
                    "@stackpress/ink-express": "^0.1.9",
                    "express": "^4.19.2"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "^0.1.9",
                    "@stackpress/ink-tailwind": "^0.1.9",
                    "@types/express": "^4.17.21",
                    "@types/node": "^22.5.3",
                    "autoprefixer": "^10.4.20",
                    "postcss": "^8.4.45",
                    "tailwindcss": "^3.4.10",
                    "ts-node": "^10.9.2",
                    "typescript": "^5.5.4"
                  }
                }
              `}</ide-code>
            </app-main>
          </ide-app>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Re-run the following command in terminal to initialize the 
            re-run your application using Express.
          </i18n-translate>
          <ide-app title="Terminal" class="py-20">
            <ide-code lang="bash">
              npx ts-node src/index.ts
            </ide-code>
          </ide-app>
          <i18n-translate p trim class="tx-lh-36 py-20">
            Load 
            <ide-code lang="js" inline>http://localhost:3000/</ide-code> 
            in your browser. After loading you should see everything is 
            exactly as it was, but you now benefit from using ExpressJS.
          </i18n-translate>

          <h3 class="tx-t-1 tx-uppercase tx-22 pt-40 pb-20">
            -- {_('Read On')} --
          </h3>

          <i18n-translate p trim class="tx-lh-36 py-20">
            To see other getting started examples with various frameworks,
            you can check out the following project examples in the 
            official repository.
          </i18n-translate>
          <ul>
            <li class="py-5">
              <a class="tx-t-1 tx-underline" target="_blank" href={`${examples}/with-fastify`}>
                Fastify
              </a>
            </li>
            <li class="py-5">
              <a class="tx-t-1 tx-underline" target="_blank" href={`${examples}/with-hapi`}>
                Hapi
              </a>
            </li>
            <li class="py-5">
              <a class="tx-t-1 tx-underline" target="_blank" href={`${examples}/with-koa`}>
                Koa
              </a>
            </li>
            <li class="py-5">
              <a class="tx-t-1 tx-underline" target="_blank" href={`${examples}/with-nest`}>
                NestJS
              </a>
            </li>
            <li class="py-5">
              <a class="tx-t-1 tx-underline" target="_blank" href={`${examples}/with-restify`}>
                Restify
              </a>
            </li>
            <li class="py-5">
              <a class="tx-t-1 tx-underline" target="_blank" href={`${examples}/with-webpack`}>
                Webpack
              </a>
            </li>
          </ul> 
          <i18n-translate p trim class="tx-lh-36 py-10">
            Depending on how you plan to use Ink, you can also look at 
            the following project setups.
          </i18n-translate>
          <ul>
            <li class="py-5">
              <a class="tx-t-1 tx-underline" href="/ink/docs/template-engine.html">
                Template Engine
              </a>
            </li>
            <li class="py-5">
              <a class="tx-t-1 tx-underline" href="/ink/docs/single-page.html">
                Single Page App
              </a>
            </li>
            <li class="py-5">
              <a class="tx-t-1 tx-underline" href="/ink/docs/static-site.html">
                Static Site Generator
              </a>
            </li>
            <li class="py-5">
              <a class="tx-t-1 tx-underline" href="/ink/docs/component-publisher.html">
                Web Component Publisher
              </a>
            </li>
          </ul>
          
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/docs/index.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Documentation')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/docs/markup-syntax.html">
              {_('Markup Syntax')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>