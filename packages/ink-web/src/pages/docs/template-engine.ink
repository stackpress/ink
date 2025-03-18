<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/tab.ink" name="element-tab" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="element-icon" />
<link rel="import" type="component" href="@/components/api/docs.ink" name="api-docs" />
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

  const url = '/docs/template-engine.html';
  const title = _('Template Engine - Ink reactive web component template engine.');
  const description = _('How to use Ink as a template engine.');
  const toggle = () => {
    document.getElementsByTagName('panel-layout')[0].toggle('left');
  };
</script>
<html>
  <html-head />
  <body class="light bg-t-0 tx-t-1 tx-arial">
    <panel-layout>
      <header><html-header /></header>
      <aside left><html-aside /></aside>
      <main>
        <api-docs>
          <h1 class="tx-primary tx-upper tx-30 py-20">
            {_('Template Engine')}
          </h1>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Template engines are used when you want to rapidly build web 
            applications that are split into different pages. Templates 
            also enable fast rendering of the server-side data that needs
            to be passed to the application. You can use Ink, TypeScript 
            and the native Node.js HTTP server to serve up HTML documents
            from the server-side.
          </i18n-translate>

          <i18n-translate p trim class="tx-lh-36 py-20">
            First, create a project with the following structure and files.
          </i18n-translate>
          <ide-app height={410} title="My Project">
            <app-head>
              <div class="flex scroll-x-auto pt-5 pl-5">
                <element-tab 
                  on
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="engine" 
                  selector="#index-ts"
                >
                  src/index.ts
                </element-tab>
                <element-tab 
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="engine" 
                  selector="#page-ink"
                >
                  src/page.ink
                </element-tab>
                <element-tab 
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="engine" 
                  selector="#package-json"
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
                inactive="tx-muted"  
                group="engine" 
                selector="#index-ts"
              >
                <element-icon name="file" />
                index.ts
              </element-tab>
              <element-tab 
                class="pl-15 pt-10 block" 
                active="tx-white"
                inactive="tx-muted" 
                group="engine" 
                selector="#page-ink"
              >
                <element-icon name="file" />
                page.ink
              </element-tab>
              <element-tab 
                class="pt-10 block" 
                active="tx-white"
                inactive="tx-muted" 
                group="engine" 
                selector="#package-json"
              >
                <element-icon name="file" />
                package.json
              </element-tab>
            </app-left>
            <app-main>
              <ide-code id="index-ts" lang="js" numbers trim detab={16}>{`
                import http from 'http';
                import ink from '@stackpress/ink/compiler';

                //create ink compiler
                const compiler = ink({ cwd: __dirname });
                //create http server
                const server = http.createServer(async (req, res) => {
                  //if build asset...
                  if (req.url?.startsWith('/build/')) {
                    //get filename ie. abc123.js
                    const filename = req.url.substring(7);
                    //get asset
                    const { type, content } = await compiler.asset(filename);
                    //send response
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  //if home page
                  } else if (req.url === '/') {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    return res.end(await compiler.render('./index.ink', {
                      title: 'Hello World'
                    }));
                  }
                });
                //listen on port 3000
                server.listen(3000);
              `}</ide-code>
              <ide-code id="page-ink" style="display:none" numbers trim detab={16}>{`
                <style>
                  .title { text-align: center; }
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
                    <h1 class="title">{title}</h1>
                  </body>
                </html>
              `}</ide-code>
              <ide-code id="package-json" style="display:none" lang="js" numbers trim detab={16}>{`
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
            The server file 
            <ide-code inline>src/index.ts</ide-code> 
            implements a simple server utilizing the Ink compiler in 
            its most simplistic form. The document file
            <ide-code inline>src/page.ink</ide-code> 
            is using the most basic Ink syntax. To test the script and 
            see the results, run the following command in terminal.
          </i18n-translate>
          <ide-code trim lang="bash">
            npm run dev
          </ide-code>
          <i18n-translate p trim class="tx-lh-36 py-20">
            Load 
            <ide-code lang="js" inline>http://localhost:3000/</ide-code> 
            in your browser to see your application.
          </i18n-translate>
          
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/docs/client-api.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Client API')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/docs/single-page.html">
              {_('Single Page App')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>