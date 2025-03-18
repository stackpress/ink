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
<link rel="import" type="component" href="@stackpress/ink-ui/format/metadata.ink" name="format-metadata" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/format/metadata.html';
  const title = _('Ink UI - Metadata Format');
  const description = _('A component for rendering key-value metadata in a styled table with optional formatting.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'Metadata' }
  ];
  const metadata = {
    'content-type': 'application/json',
    'last-modified': '2023-01-01'
  };
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
            <a class="block tx-t-0" href="#metadata">{_('Metadata')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#formatted">• {_('Formatted Keys')}</a>
              <a class="block tx-t-1" href="#styled">• {_('Styled Metadata')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="metadata"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Metadata')}</h1>
          <ide-app title="Metadata Format" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Metadata from '@stackpress/ink-ui/format/metadata';
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
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Key-value pairs to render (e.g., { "key": "value" }). Defaults to empty object.')}</table-col>
            </table-row>

            <table-row>
              <table-col>padding</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Padding for table cells in pixels (e.g., 10).')}</table-col>
            </table-row>

            <table-row>
              <table-col>align</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text alignment for cells (e.g., "left", "center", "right").')}</table-col>
            </table-row>

            <table-row>
              <table-col>format</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Formats keys to title case (e.g., "content-type" → "Content Type") if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>background</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Background color for cells using Ink utilities (e.g., "bg-1").')}</table-col>
            </table-row>

            <table-row>
              <table-col>stripe</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Background color for odd rows (e.g., "bg-2") for striping effect.')}</table-col>
            </table-row>

            <table-row>
              <table-col>border</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Top border color for cells (e.g., "black"). Enables 1px solid top border.')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text color for the table using Ink utilities (e.g., "tx-1").')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Usage -->
          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">{_('Renders a basic metadata table.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-metadata value={metadata} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <script>
              const metadata = {
                'content-type': 'application/json',
                'last-modified': '2023-01-01'
              };
            </script>
            <format-metadata value={metadata} />
          `}</ide-code>

          <!-- Formatted Keys -->
          <a name="formatted"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Formatted Keys')}</h2>
          <div class="mb-10">{_('Renders metadata with formatted keys.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-metadata value={metadata} format />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <script>
              const metadata = {
                'content-type': 'application/json',
                'last-modified': '2023-01-01'
              };
            </script>
            <format-metadata value={metadata} format />
          `}</ide-code>

          <!-- Styled Metadata -->
          <a name="styled"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Metadata')}</h2>
          <div class="mb-10">{_('Renders metadata with custom styling.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-metadata 
              value={metadata}
              padding="10"
              align="center"
              background-theme="bg-1"
              stripe-theme="bg-2"
              border-theme="black"
              format
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <script>
              const metadata = {
                'content-type': 'application/json',
                'last-modified': '2023-01-01'
              };
            </script>
            <format-metadata 
              value={metadata}
              padding="10"
              align="center"
              background-theme="bg-1"
              stripe-theme="bg-2"
              border-theme="black"
              format
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/markdown.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Markdown')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/number.html">
              {_('Number')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>