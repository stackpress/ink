<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
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
  import { env, props } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/500.html';
  const title = _('Oops... - Ink - The reactive web component template engine.');
  const description = _('Ink is a template engine hat generates web components and support reactivity.');

  const { error = 'Unknown Error' } = props();
</script>
<html>
  <html-head />
  <body class="light bg-t-0 tx-t-1 tx-arial">
    <panel-layout>
      <header><html-header /></header>
      <main class="scroll-auto">
        <div class="p-20 w-calc-full-40">
          <h1 class="pt-10 pb-20">{_('Oops...')}</h1>
          <i18n-translate p trim>
            Something went wrong. Please try again later.
          </i18n-translate>
          <if true={error}>
            <pre class="bg-black courier tx-lh-22 tx-word-wrap p-10 scroll-x-auto tx-prewrap">{error}</pre>
          </if>
        </div>
      </main>
    </panel-layout>
  </body>
</html>