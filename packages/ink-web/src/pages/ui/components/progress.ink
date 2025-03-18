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
<link rel="import" type="component" href="@stackpress/ink-ui/element/progress.ink" name="element-progress" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/components/progress.html';
  const title = _('Ink UI - Progress Component');
  const description = _('A customizable progress bar component with dynamic width updates.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Components', href: '/ink/ui/index.html' },
    { label: 'Progress' }
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
            <a class="block tx-t-0" href="#progress">{_('Progress')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#colors">• {_('Colors')}</a>
              <a class="block tx-t-1" href="#label">• {_('Label')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="progress"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Progress')}</h1>
          <ide-app title="Progress" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Progress from '@stackpress/ink-ui/element/progress';
            </ide-code>
          </ide-app>

          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <layout-table top head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" odd="bg-t-0" even="bg-t-1">
            <table-head>{_('Name')}</table-head>
            <table-head>{_('Type')}</table-head>
            <table-head>{_('Required')}</table-head>
            <table-head>{_('Notes')}</table-head>
            <table-row>
              <table-col>width</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Progress percentage (0-100, default: 0)')}</table-col>
            </table-row>
            <table-row>
              <table-col>height</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Height of the progress bar in pixels (default: 20)')}</table-col>
            </table-row>
            <table-row>
              <table-col>bg</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Background color of the container (e.g., { muted: true })')}</table-col>
            </table-row>
            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Bar color (e.g., "salmon", "#ff0000")')}</table-col>
            </table-row>
            <table-row>
              <table-col>white</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets bar color to var(--white)')}</table-col>
            </table-row>
            <table-row>
              <table-col>black</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets bar color to var(--black)')}</table-col>
            </table-row>
            <table-row>
              <table-col>info</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets bar color to var(--info)')}</table-col>
            </table-row>
            <table-row>
              <table-col>warning</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets bar color to var(--warning)')}</table-col>
            </table-row>
            <table-row>
              <table-col>success</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets bar color to var(--success)')}</table-col>
            </table-row>
            <table-row>
              <table-col>error</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets bar color to var(--error)')}</table-col>
            </table-row>
            <table-row>
              <table-col>muted</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets bar color to var(--muted)')}</table-col>
            </table-row>
            <table-row>
              <table-col>primary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets bar color to var(--primary)')}</table-col>
            </table-row>
            <table-row>
              <table-col>secondary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets bar color to var(--secondary)')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A simple progress bar with a set width.</div>
          <div class="bg-t-3 p-10">
            <element-progress width={50} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-progress width={50} />
          `}</ide-code>

          <a name="colors"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Colors')}</h2>
          <div class="mb-10">Customize bar and background colors.</div>
          <div class="bg-t-3 p-10 mb-10">
            <element-progress width={75} success bg={ { muted: true } } class="rounded" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-progress width={75} success bg={ { muted: true } } class="rounded" />
          `}</ide-code>
          <div class="bg-t-3 p-10 mb-10">
            <element-progress width={40} info bg={ { white: true } } class="rounded" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-progress width={40} info bg={ { white: true } } class="rounded" />
          `}</ide-code>
          <div class="bg-t-3 p-10 mb-10">
            <element-progress width={60} color="#ff4500" bg={ { black: true } } class="rounded" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-progress width={60} color="#ff4500" bg={ { black: true } } class="rounded" />
          `}</ide-code>

          <a name="label"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Label')}</h2>
          <div class="mb-10">Add a centered label inside the progress bar.</div>
          <div class="bg-t-3 p-10 mb-10">
            <element-progress width={50} info class="bg-muted rounded tx-13 h-20 tx-lh-20 w-full-20">
              50%
            </element-progress>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-progress width={50} info class="bg-muted rounded tx-13 h-20 tx-lh-20 w-full-20">
              50%
            </element-progress>
          `}</ide-code>
          <div class="bg-t-3 p-10 mb-10">
            <element-progress width={75} success bg={ { muted: true } } class="rounded tx-white">
              Loading...
            </element-progress>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-progress width={75} success bg={ { muted: true } } class="rounded tx-white">
              Loading...
            </element-progress>
          `}</ide-code>

      

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/pager.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Panel')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/tab.html">
              {_('Tabs')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>