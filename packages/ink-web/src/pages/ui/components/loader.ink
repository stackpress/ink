<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@/components/api/docs.ink" name="api-docs" />
<link rel="import" type="component" href="@/components/ide/app.ink" name="ide-app" />
<link rel="import" type="component" href="@/components/ide/code.ink" name="ide-code" />
<link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/loader.ink" name="element-loader" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="element-icon" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/crumbs.ink" name="element-crumbs" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table.ink" name="layout-table" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/head.ink" name="table-head" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/row.ink" name="table-row" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/col.ink" name="table-col" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/components/loader.html';
  const title = _('Ink UI - Loader Component');
  const description = _('A customizable loading spinner component.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Components', href: '/ink/ui/index.html' },
    { label: 'Loader' }
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
            <a class="block tx-t-0" href="#loader">{_('Loader')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#styles">• {_('Styles')}</a>
              <a class="block tx-t-1" href="#colors">• {_('Colors')}</a>
              <a class="block tx-t-1" href="#custom">• {_('Customizations')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="loader"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Loader')}</h1>
          <ide-app title="Loader" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Loader from '@stackpress/ink-ui/element/loader';
            </ide-code>
          </ide-app>

          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <layout-table top head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0".ass odd="bg-t-0" even="bg-t-1">
            <table-head>{_('Name')}</table-head>
            <table-head>{_('Type')}</table-head>
            <table-head>{_('Required')}</table-head>
            <table-head>{_('Notes')}</table-head>
            <table-row>
              <table-col>size</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets width and height in pixels (default: 20)')}</table-col>
            </table-row>
            <table-row>
              <table-col>slice</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Number of transparent sides (0-3, default: 0)')}</table-col>
            </table-row>
            <table-row>
              <table-col>speed</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Animation duration in milliseconds (default: 1000)')}</table-col>
            </table-row>
            <table-row>
              <table-col>thickness</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Border thickness in pixels (default: 2)')}</table-col>
            </table-row>
            <table-row>
              <table-col>solid</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets solid border style (default)')}</table-col>
            </table-row>
            <table-row>
              <table-col>dotted</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets dotted border style')}</table-col>
            </table-row>
            <table-row>
              <table-col>dashed</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets dashed border style')}</table-col>
            </table-row>
            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets custom border color (e.g., "salmon", "#ff0000")')}</table-col>
            </table-row>
            <table-row>
              <table-col>white</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border color to var(--white)')}</table-col>
            </table-row>
            <table-row>
              <table-col>black</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border color to var(--black)')}</table-col>
            </table-row>
            <table-row>
              <table-col>info</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border color to var(--info)')}</table-col>
            </table-row>
            <table-row>
              <table-col>warning</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border color to var(--warning)')}</table-col>
            </table-row>
            <table-row>
              <table-col>success</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border color to var(--success)')}</table-col>
            </table-row>
            <table-row>
              <table-col>error</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border color to var(--error)')}</table-col>
            </table-row>
            <table-row>
              <table-col>muted</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border color to var(--muted)')}</table-col>
            </table-row>
            <table-row>
              <table-col>primary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border color to var(--primary)')}</table-col>
            </table-row>
            <table-row>
              <table-col>secondary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border color to var(--secondary)')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">Default loader with solid style.</div>
          <div class="bg-t-3 p-10 flex gap-10">
            <element-loader />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader />
          `}</ide-code>

          <a name="styles"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styles')}</h2>
          <div class="mb-10">Customize border styles.</div>
          <div class="bg-t-3 p-10 flex gap-10">
            <element-loader solid />
            <element-loader dotted />
            <element-loader dashed />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader solid />
            <element-loader dotted />
            <element-loader dashed />
          `}</ide-code>

          <a name="colors"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Colors')}</h2>
          <div class="mb-10">Predefined and custom colors for loaders.</div>
          <div class="bg-t-3 p-10 flex gap-10">
            <element-loader success />
            <element-loader info />
            <element-loader warning />
            <element-loader error />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader success />
            <element-loader info />
            <element-loader warning />
            <element-loader error />
          `}</ide-code>
          <div class="bg-t-3 p-10 flex gap-10">
            <element-loader color="purple" />
            <element-loader primary />
            <element-loader muted />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader color="purple" />
            <element-loader primary />
            <element-loader muted />
          `}</ide-code>

          <a name="custom"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Customizations')}</h2>
          <div class="mb-10">Combine size, thickness, slices, and speed.</div>
          <div class="bg-t-3 p-10 flex gap-10">
            <element-loader success size={5} thickness={5} dotted />
            <element-loader info slice={2} />
            <element-loader warning dashed />
            <element-loader error dashed thickness={10} size={10} speed={1500} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader success size={5} thickness={5} dotted />
            <element-loader info slice={2} />
            <element-loader warning dashed />
            <element-loader error dashed thickness={10} size={10} speed={1500} />
          `}</ide-code>
          <div class="bg-t-3 p-10 flex gap-10">
            <element-loader primary size={30} thickness={4} slice={1} speed={800} />
            <element-loader color="#ff4500" size={15} dotted slice={3} />
            <element-loader secondary dashed thickness={6} speed={2000} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-loader primary size={30} thickness={4} slice={1} speed={800} />
            <element-loader color="#ff4500" size={15} dotted slice={3} />
            <element-loader secondary dashed thickness={6} speed={2000} />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/icon.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Icons')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/notify.html">
              {_('Notify')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>