<link rel="import" type="component" href="@/components/form.ink" name="sample-form" />
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
</script>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <link rel="stylesheet" type="text/css" href="/ink/styles/global.css" />
    <link rel="stylesheet" type="text/css" href={`/ink/build/client/${env('BUILD_ID')}.css`} />
    
    <script data-app={env('APP_DATA')} src={`/ink/build/client/${env('BUILD_ID')}.js`}></script>
    <if true={env('NODE_ENV') === 'development'}>
      <script src="/dev.js"></script>
    </if>
  </head>
  <body class="light bg-t-0 tx-t-1 tx-arial">
    <sample-form action={url} />
  </body>
</html>