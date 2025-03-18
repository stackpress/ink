<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
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

  const url = '/docs/compiler-api.html';
  const title = _('Compiler API - Ink reactive web component template engine.');
  const description = _('Compiler documentation for Ink.');
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
            {_('Compiler API')}
          </h1>

          <i18n-translate p trim class="tx-lh-36 py-20">
            The developer interface for the Ink compiler is designed 
            to be expressive and easily access the Ink library in most 
            scenarios. To create a new ink compiler you can follow the 
            code below.
          </i18n-translate>
          <ide-code lang="js" trim detab={10}>
            import ink from '@stackpress/ink';
            const compiler = ink();
          </ide-code> 
          <i18n-translate p trim class="tx-lh-36 py-20">  
            The <ide-code lang="js" inline>ink()</ide-code> 
            function itself takes in the following options, all of 
            which are optional.
          </i18n-translate>

          <api-ui start="InkOptions" />
          <i18n-translate p trim class="tx-lh-36 py-20">
            Calling <ide-code lang="js" inline>{`ink()`}</ide-code> as in 
            <ide-code lang="js" inline>{`compiler = ink({/*options*/})`}</ide-code> 
            returns the Ink compiler which contains the following object.
          </i18n-translate>
          <api-ui />

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/docs/component-strategy.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Component Strategy')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/docs/client-api.html">
              {_('Client API')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>