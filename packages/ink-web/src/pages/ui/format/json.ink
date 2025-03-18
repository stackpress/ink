<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@/components/api/docs.ink" name="api-docs" />
<link rel="import" type="component" href="@/components/ide/app.ink" name="ide-app" />
<link rel="import" type="component" href="@/components/ide/code.ink" name="ide-code" />
<link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="element-icon" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/crumbs.ink" name="element-crumbs" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table.ink" name="layout-table" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/head.ink" name="table-head" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/row.ink" name="table-row" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/col.ink" name="table-col" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/json.ink" name="format-json" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/format/json.html';
  const title = _('Ink UI - JSON Format');
  const description = _('A component for rendering JSON data as formatted text within a `<pre>` tag.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'JSON' }
  ];
  const json = { icon: 'book', label: 'Docs' };
</script>

<html>
  <html-head />
  <body class="light bg-t-0 tx-t-1 tx-arial">
    <panel-layout>
      <header><html-header /></header>
      <aside left><html-aside /></aside>
      <aside right>
        <menu class="m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto">
          <h6 class="tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper">{_('On this page')}</h6>
          <nav class="tx-14 tx-lh-32">
            <a class="block tx-t-0" href="#json">{_('JSON')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#complex">• {_('Complex JSON')}</a>
              <a class="block tx-t-1" href="#display">• {_('Custom Display')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="json"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('JSON')}</h1>
          <ide-app title="JSON Format" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import JSON from '@stackpress/ink-ui/format/json';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <layout-table 
            top
            head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" 
            body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" 
            odd="bg-t-0" 
            even="bg-t-1"
          >
            <table-head>{_('Name')}</table-head>
            <table-head>{_('Type')}</table-head>
            <table-head>{_('Required')}</table-head>
            <table-head>{_('Description')}</table-head>

            <table-row>
              <table-col>value</table-col>
              <table-col>Any</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('JSON data to render (e.g., object, array). Passed to `JSON.stringify` with 2-space indentation.')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Display style (e.g., "block", "inline"). Defaults to "block".')}</table-col>
            </table-row>

            <table-row>
              <table-col>flex</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to "flex" if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>none</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to "none" if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>inline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to "inline" if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>block</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to "block" if `true`. Reinforces default.')}</table-col>
            </table-row>

            <table-row>
              <table-col>inline-block</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to "inline-block" if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>inline-flex</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to "inline-flex" if `true`.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Usage -->
          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">{_('Renders a simple JSON object with default formatting.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-json value={json} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <script>
              const json = { icon: 'book', label: 'Docs' };
            </script>
            <format-json value={json} />
          `}</ide-code>

          <!-- Complex JSON -->
          <a name="complex"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Complex JSON')}</h2>
          <div class="mb-10">{_('Renders a more complex JSON structure.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-json value={{ name: 'Example', details: { id: 1, active: true }, items: [1, 2, 3] }} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-json value={{ name: 'Example', details: { id: 1, active: true }, items: [1, 2, 3] }} />
          `}</ide-code>

          <!-- Custom Display -->
          <a name="display"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Display')}</h2>
          <div class="mb-10">{_('Renders JSON with a custom display style.')}</div>
          <div class="bg-t-3 p-10 mb-20 flex gap-20">
            <format-json value={json} inline />
            <format-json value={json} flex class="gap-10" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <script>
              const json = { icon: 'book', label: 'Docs' };
            </script>
            <div class="flex gap-20">
              <format-json value={json} inline />
              <format-json value={json} flex class="gap-10" />
            </div>
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/imagelist.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Imagelist')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/link.html">
              {_('Link')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>