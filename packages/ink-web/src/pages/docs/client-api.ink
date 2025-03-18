<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/alert.ink" name="element-alert" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="element-icon" />
<link rel="import" type="component" href="@/components/api/docs.ink" name="api-docs" />
<link rel="import" type="component" href="@/components/api/ui.ink" name="api-ui" />
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

  const url = '/docs/client-api.html';
  const title = _('Client API - Ink reactive web component template engine.');
  const description = _('Client API documentation for Ink.');
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
            {_('Client API')}
          </h1>

          <i18n-translate p trim class="tx-lh-36 py-20">
            Ink exposes a variable on the browser called 
            <ide-code inline>InkAPI</ide-code> that includes all the 
            components, classes, functions and variables used to render
            the document on the client-side. 
          </i18n-translate>

          <element-alert curved secondary class="tx-lh-24">
            <element-icon name="exclamation-triangle" />
            <strong>Warning:</strong> Using the client API in the wrong 
            way could possibly break your client application.
          </element-alert>

          <api-ui start="InkAPI" />

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/docs/compiler-api.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Compiler API')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/docs/template-engine.html">
              {_('Template Engine')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>