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
<link rel="import" type="component" href="@stackpress/ink-ui/format/taglist.ink" name="format-taglist" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/format/taglist.html';
  const title = _('Ink UI - Taglist Format');
  const description = _('A component for rendering a list of tags using the `<element-badge>` component with customizable styles.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'Taglist' }
  ];
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
            <a class="block tx-t-0" href="#taglist">{_('Taglist')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#shaped">• {_('Shaped Tags')}</a>
              <a class="block tx-t-1" href="#colored">• {_('Colored Tags')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="taglist"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Taglist')}</h1>
          <ide-app title="Taglist Format" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Taglist from '@stackpress/ink-ui/format/taglist';
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
            <table-head>{_('Property')}</table-head>
            <table-head>{_('Type')}</table-head>
            <table-head>{_('Required')}</table-head>
            <table-head>{_('Description')}</table-head>

            <table-row>
              <table-col>value</table-col>
              <table-col>Array</table-col>
              <table-col>No</table-col>
              <table-col>{_('Array of tags to render (e.g., ["Foo", "bar"]). Defaults to empty array.')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Display style for the container (e.g., "inline-block", "block"). Defaults to "inline-block".')}</table-col>
            </table-row>

            <table-row>
              <table-col>curved</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies slightly curved edges to tags if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>rounded</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies fully rounded edges to tags if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>pill</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies pill-shaped (capsule) styling to tags if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>info</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Styles tags with an info theme (e.g., blue) if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>warning</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Styles tags with a warning theme (e.g., yellow) if `true`. Default if no color specified.')}</table-col>
            </table-row>

            <table-row>
              <table-col>success</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Styles tags with a success theme (e.g., green) if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>error</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Styles tags with an error theme (e.g., red) if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>muted</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Styles tags with a muted theme (e.g., gray) if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>primary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Styles tags with a primary theme (e.g., blue) if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>secondary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Styles tags with a secondary theme (e.g., gray-blue) if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom color for tags using Ink utilities (e.g., "tx-red"). Overrides theme props.')}</table-col>
            </table-row>

            <table-row>
              <table-col>outline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies outline styling (border only) to tags if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>solid</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies solid background styling to tags if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>transparent</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies transparent background styling to tags if `true`.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Usage -->
          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">{_('Renders a list of tags with default styling.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-taglist value={['Foo', 'bar']} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-taglist value={['Foo', 'bar']} />
          `}</ide-code>

          <!-- Shaped Tags -->
          <a name="shaped"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Shaped Tags')}</h2>
          <div class="mb-10">{_('Renders tags with different shape styles.')}</div>
          <div class="bg-t-3 p-10 mb-20 flex gap-10">
            <format-taglist value={['Foo', 'bar']} pill />
            <format-taglist value={['Baz']} rounded />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <div class="flex gap-10">
              <format-taglist value={['Foo', 'bar']} pill />
              <format-taglist value={['Baz']} rounded />
            </div>
          `}</ide-code>

          <!-- Colored Tags -->
          <a name="colored"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Colored Tags')}</h2>
          <div class="mb-10">{_('Renders tags with different color themes.')}</div>
          <div class="bg-t-3 p-10 mb-20 flex gap-10">
            <format-taglist value={['Success']} success solid pill />
            <format-taglist value={['Error']} error outline pill />
            <format-taglist value={['Primary']} primary transparent pill />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <div class="flex gap-10">
              <format-taglist value={['Success']} success solid pill />
              <format-taglist value={['Error']} error outline pill />
              <format-taglist value={['Primary']} primary transparent pill />
            </div>
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/table.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Table')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/text.html">
              {_('Text')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>