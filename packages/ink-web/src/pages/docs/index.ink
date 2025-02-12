<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="element-icon" />
<link rel="import" type="component" href="@/components/api/docs.ink" name="api-docs" />
<link rel="import" type="component" href="@/components/ide/app.ink" name="ide-app" />
<link rel="import" type="component" href="@/components/ide/code.ink" name="ide-code" />
<link rel="import" type="component" href="@/components/ide/preview.ink" name="ide-preview" />
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

  const url = '/docs/index.html';
  const title = _('Documentation - Ink reactive web component template engine.');
  const description = _('Ink is a template engine hat generates web components and support reactivity.');
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
            {_('Documentation')}
          </h1>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Ink is a template engine with a built-in compiler that 
            generates HTML markup, web components and support reactivity. 
          </i18n-translate>
          <i18n-translate p trim class="tx-lh-36 py-20">
            Like React and Svelte, Ink is a modern approach to building
            front-end code addressing state management and reactivity. 
            Unlike React and Svelte that focus on keeping the developer 
            experience mostly on the front-end, Ink focuses on being 
            a modern templating solution for server side frameworks.
          </i18n-translate>
          <i18n-translate p trim class="tx-lh-36 py-20">
            Ink can be used as a template engine on the server side, 
            as a site generator to make static websites and single page 
            applications, or can be used to publish native HTML5 web 
            components.
          </i18n-translate>
          <i18n-translate p trim class="tx-lh-36 py-20">
            Ink sticks closely to the classic web development model of 
            HTML, CSS, and JS, just adding a few extensions to HTML and 
            JavaScript. It arguably has fewer concepts and tools to learn 
            than some of the other framework options.
          </i18n-translate>
          <ide-app class="block py-20" title="Basic Example">
            <div class="flex bg-white lg-block">
              <ide-code numbers trim detab={16} class="basis-half">{`
                <style>
                  h1 { font-weight: bold; }
                </style>
                <script>
                  const name = 'world';
                </script>
                <h1>Hello {name}!</h1>
              `}</ide-code>
              <ide-preview class="basis-half">
                <div>
                  <h1>{_('Hello world!')}</h1>
                </div>
              </ide-preview>
            </div>
          </ide-app>
          <i18n-translate p trim class="tx-lh-36 py-20">
            At it's core, a ink file is a special template file that 
            allows HTML, JavaScript, CSS and importing of components and 
            templates. All of which are transpiled to TypeScript or 
            JavaScript source code.
          </i18n-translate>
          <ide-app title="Transpiler Example" class="py-20">
            <div class="flex bg-h-EFEFEF h-full lg-block">
              <ide-code class="basis-half scroll-auto" scroll numbers ltrim detab={16}>{`
                <style>
                  h1 { font-weight: bold; }
                </style>
                <script>
                  import { props } from '@stackpress/ink';
                  const { name } = props();
                </script>
                <h1>Hello {name}!!</h1>
                
                

              `}</ide-code>
              <ide-code class="basis-half h-full b-t-1 b-solid by-0 bl-1 br-0 lg-bl-0 lg-bt-1 lg-pt-10 lg-h-auto scroll-auto" lang="js" trim scroll detab={16}>{`
                import { props } from '@stackpress/ink';
                export default class Hello extends InkComponent {
                  styles() {
                    return 'h1 { font-weight: bold; }';
                  }
                  template() {
                    const { name } = props();
                    return () => [
                      Registry.createElement('h1', null, \`Hello \${name}\`)
                    ]
                  }
                }
              `}</ide-code>
            </div>
          </ide-app>

          <nav class="flex">
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/docs/getting-started.html">
              {_('Getting Started')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>