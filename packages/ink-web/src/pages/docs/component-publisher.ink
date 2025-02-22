<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="element-icon" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/tab.ink" name="element-tab" />
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

  const url = '/docs/component-publisher.html';
  const title = _('Component Publisher - Ink reactive web component template engine.');
  const description = _('How to use Ink to publish web components.');
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
            {_('Component Publisher')}
          </h1>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Web components are a set of web platform APIs that allow you 
            to create new custom, reusable, encapsulated HTML tags to use 
            in web pages and web apps. Custom components and widgets build 
            on the Web Component standards, will work across modern 
            browsers, and can be used with any JavaScript library or 
            framework that works with HTML.
          </i18n-translate>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Web components are based on existing web standards. Features 
            to support web components are currently being added to the 
            HTML and DOM specs, letting web developers easily extend HTML 
            with new elements with encapsulated styling and custom behavior.
          </i18n-translate>

          <element-alert solid curved info>
            <element-icon name="info-circle" />
            <strong>Note:</strong> Web components even work in React 
            projects.
          </element-alert>

          <i18n-translate p trim class="tx-lh-36 py-20">
            First, create a project with the following structure and files.
          </i18n-translate>
          <ide-app height={290} title="My Project">
            <app-head>
              <div class="flex scroll-x-auto pt-5 pl-5">
                <element-tab 
                  on
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="publisher" 
                  selector="#build-ts"
                >
                  src/build.ts
                </element-tab>
                <element-tab 
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="publisher" 
                  selector="#component-ink"
                >
                  src/component.ink
                </element-tab>
                <element-tab 
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-t-1"   
                  group="publisher" 
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
                group="publisher" 
                selector="#build-ts"
              >
                <element-icon name="file" />
                build.ts
              </element-tab>
              <element-tab 
                class="pl-15 pt-10 block" 
                active="tx-white"
                inactive="tx-muted" 
                group="publisher" 
                selector="#component-ink"
              >
                <element-icon name="file" />
                component.ink
              </element-tab>
              <element-tab 
                class="pt-10 block" 
                active="tx-white"
                inactive="tx-muted" 
                group="publisher" 
                selector="#package-json"
              >
                <element-icon name="file" />
                package.json
              </element-tab>
            </app-left>
            <app-main>
              <ide-code id="build-ts" lang="js" numbers trim detab={16}>{`
                import http from 'http';
                import ink from '@stackpress/ink/compiler';

                //create ink compiler
                const compiler = ink({ cwd: __dirname });
                //load component, and render
                const component = compiler
                  .fromSource('./component.ink')
                  .component();
                
                //save component
                compiler.fs.writeFileSync('/path/to/component.js', component);
              `}</ide-code>
              <ide-code id="component-ink" style="display:none" numbers trim detab={16}>{`
                <style>
                  .title { text-align: center; }
                </style>
                <script>
                  const title = 'Hello';
                </script>
                <h1 class="title">{title}</h1>
              `}</ide-code>
              <ide-code id="package-json" style="display:none" lang="js" numbers trim detab={16}>{`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "build": "ts-node ./src/build.ts"
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
            To test the build script and see the results, run the 
            following command in terminal.
          </i18n-translate>
          <ide-code lang="bash">
            npm run build
          </ide-code>
          
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/docs/static-site.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Static Site Generator')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/docs/developer-tools.html">
              {_('Developer Tools')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>