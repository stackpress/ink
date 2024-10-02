<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/input.ink" name="field-input" />
<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>
<script>
  import env from '@stackpress/ink/dist/client/env';
  import { _ } from '@/components/i18n';

  const url = '/ink/panel.html';
  const title = _('Ink UI - Web Components Meets Atomic Styles.');
  const description = _('Ink UI atomically generates CSS styles and provides out of box web components.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
</script>
<html>
  <html-head />
  <body class="light sl-theme-dark bg-t-0 tx-t-1 tx-arial">
    <panel-layout>
      <header><html-header /></header>
      <main class="p-20">
        <h1>Sandbox</h1>
        <field-input name="first" placeholder="Enter your first name" error />
      </main>
    </panel-layout>
  </body>
</html>