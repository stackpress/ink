<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="element-icon" />
<link rel="import" type="component" href="@/components/api/docs.ink" name="api-docs" />
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

  const url = '/docs/developer-tools.html';
  const title = _('Developer Tools - Ink reactive web component template engine.');
  const description = _('Enable tools for a better developer experience and debugging.');
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
            {_('Developer Tools')}
          </h1>

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
            <ide-code lang="js" numbers trim detab={12}>{`
              import http from 'http';
              import ink from '@stackpress/ink/compiler';
              import { dev } from '@stackpress/ink-dev';

              //create ink compiler
              const compiler = ink({ cwd: __dirname });
              //1. create dev tools
              const { router, refresh } = dev({ cwd: __dirname });

              //create http server
              const server = http.createServer(async (req, res) => {
                //2. Add dev router
                if (router(req, res)) return;
                //if home page
                if (req.url === '/') {
                  //3. sync builder with refresh server
                  refresh.sync(compiler.fromSource('./page.ink'));
                  //compile the document
                  const html = await compiler.render('./page.ink');
                  //... send response ...
                }
                //... other routes ...
              });
              //listen on port 3000
              server.listen(3000);
            `}</ide-code>
          </ide-app>
          <i18n-translate p trim class="tx-lh-36 py-20">
            Lastly, update the document file 
            <ide-code lang="js" inline>{`src/page.ink`}</ide-code> 
            to include the development script 
            <ide-code inline>{`<script src="/dev.js"></script>`}</ide-code> 
            as shown below.
          </i18n-translate>
          <ide-app title="src/page.ink" class="py-20">
            <ide-code numbers trim detab={12}>{`
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
            Run the following command in terminal.
          </i18n-translate>
          <ide-app title="Terminal" class="py-20">
            <ide-code lang="bash">
              npx ts-node src/index.ts
            </ide-code>
          </ide-app>
          <i18n-translate p trim class="tx-lh-36 py-20">
            Whenever <ide-code lang="js" inline>{`src/page.ink`}</ide-code> 
            is updated, the development server will automatically refresh 
            the page. Components will also be updated in real-time.
          </i18n-translate>
          
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/docs/component-publisher.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Component Publisher')}
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>