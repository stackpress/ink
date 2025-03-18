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
<link rel="import" type="component" href="@stackpress/ink-ui/element/tooltip.ink" name="element-tip" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/components/tooltip.html';
  const title = _('Ink UI - Tooltip Component');
  const description = _('A customizable tooltip component that appears on hover.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Components', href: '/ink/ui/index.html' },
    { label: 'Tooltip' }
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
            <a class="block tx-t-0" href="#tooltip">{_('Tooltip')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#position">• {_('Position')}</a>
              <a class="block tx-t-1" href="#styling">• {_('Styling')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="tooltip"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Tooltip')}</h1>
          <ide-app title="Tooltip" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Tooltip from '@stackpress/ink-ui/element/tooltip';
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
              <table-col>top</table-col>
              <table-col>Boolean | Number | String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Position from top (true = 0px, number = px, string = custom)')}</table-col>
            </table-row>
            <table-row>
              <table-col>bottom</table-col>
              <table-col>Boolean | Number | String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Position from bottom (true = 0px, number = px, string = custom)')}</table-col>
            </table-row>
            <table-row>
              <table-col>left</table-col>
              <table-col>Boolean | Number | String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Position from left (true = 0px, number = px, string = custom)')}</table-col>
            </table-row>
            <table-row>
              <table-col>right</table-col>
              <table-col>Boolean | Number | String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Position from right (true = 0px, number = px, string = custom)')}</table-col>
            </table-row>
            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text color (e.g., "salmon", "#ff0000")')}</table-col>
            </table-row>
            <table-row>
              <table-col>white</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets text color to var(--white)')}</table-col>
            </table-row>
            <table-row>
              <table-col>black</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets text color to var(--black)')}</table-col>
            </table-row>
            <table-row>
              <table-col>info</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets text color to var(--info)')}</table-col>
            </table-row>
            <table-row>
              <table-col>warning</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets text color to var(--warning)')}</table-col>
            </table-row>
            <table-row>
              <table-col>success</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets text color to var(--success)')}</table-col>
            </table-row>
            <table-row>
              <table-col>error</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets text color to var(--error)')}</table-col>
            </table-row>
            <table-row>
              <table-col>muted</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets text color to var(--muted)')}</table-col>
            </table-row>
            <table-row>
              <table-col>primary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets text color to var(--primary)')}</table-col>
            </table-row>
            <table-row>
              <table-col>secondary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets text color to var(--secondary)')}</table-col>
            </table-row>
            <table-row>
              <table-col>background</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Background color (e.g., { info: true })')}</table-col>
            </table-row>
            <table-row>
              <table-col>curved</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border-radius to 4px')}</table-col>
            </table-row>
            <table-row>
              <table-col>curve</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets custom border-radius in pixels')}</table-col>
            </table-row>
            <table-row>
              <table-col>center</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Centers text horizontally')}</table-col>
            </table-row>
            <table-row>
              <table-col>padding</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets padding in pixels')}</table-col>
            </table-row>
            <table-row>
              <table-col>opacity</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets opacity (0-100)')}</table-col>
            </table-row>
            <table-row>
              <table-col>width</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets width ("auto" or pixels, default: "auto")')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A simple tooltip that appears on hover.</div>
          <div class="bg-t-3 p-10 mb-10">
            <span class="relative inline-block p-10">
              Hover me
              <element-tip background={ { muted: true } } top="-30" left="0" padding="5">Tooltip text</element-tip>
            </span>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <span class="relative inline-block p-10">
              Hover me
              <element-tip background={ { muted: true } } top="-30" left="0" padding="5">Tooltip text</element-tip>
            </span>
          `}</ide-code>

          <a name="position"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Position')}</h2>
          <div class="mb-10">Adjust tooltip position with top, bottom, left, or right.</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20">
            <span class="relative inline-block p-10">
              Top
              <element-tip background={ { info: true } } top="-30" left="0" padding="5">Top Tooltip</element-tip>
            </span>
            <span class="relative inline-block p-10">
              Bottom
              <element-tip background={ { info: true } } bottom="-30" left="0" padding="5">Bottom Tooltip</element-tip>
            </span>
            <span class="relative inline-block p-10">
              Left
              <element-tip background={ { info: true } } top="0" left="-100" padding="5">Left Tooltip</element-tip>
            </span>
            <span class="relative inline-block p-10">
              Right
              <element-tip background={ { info: true } } top="0" right="-100" padding="5">Right Tooltip</element-tip>
            </span>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <span class="relative inline-block p-10">
              Top
              <element-tip background={ { info: true } } top="-30" left="0" padding="5">Top Tooltip</element-tip>
            </span>
            <span class="relative inline-block p-10">
              Bottom
              <element-tip background={ { info: true } } bottom="-30" left="0" padding="5">Bottom Tooltip</element-tip>
            </span>
          `}</ide-code>

          <a name="styling"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styling')}</h2>
          <div class="mb-10">Customize appearance with colors, curves, padding, and more.</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20">
            <span class="relative inline-block p-10">
              Info
              <element-tip background={ { info: true } } curved top="-15" left="50" padding="5">This is the first and last name</element-tip>
            </span>
            <span class="relative inline-block p-10">
              Success
              <element-tip background={ { success: true } } curve="10" top="-30" left="0" padding="10" white>Success Tooltip</element-tip>
            </span>
            <span class="relative inline-block p-10">
              Warning
              <element-tip background={ { warning: true } } curved top="-30" left="0" padding="5" opacity="80">Warning Tooltip</element-tip>
            </span>
            <span class="relative inline-block p-10">
              Custom Width
              <element-tip background={ { primary: true } } curved top="-30" left="0" padding="5" width="150">Custom Width Tooltip</element-tip>
            </span>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <span class="relative inline-block p-10">
              Info
              <element-tip background={ { info: true } } curved top="-15" left="50" padding="5">This is the first and last name</element-tip>
            </span>
            <span class="relative inline-block p-10">
              Success
              <element-tip background={ { success: true } } curve="10" top="-30" left="0" padding="10" white>Success Tooltip</element-tip>
            </span>
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/tab.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Tab')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/form/index.html">
              {_('Forms and Fields')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>