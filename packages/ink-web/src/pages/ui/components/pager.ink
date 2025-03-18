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
<link rel="import" type="component" href="@stackpress/ink-ui/element/pager.ink" name="element-pager" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/components/pager.html';
  const title = _('Ink UI - Pager Component');
  const description = _('A pagination component for navigating through a set of items.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Components', href: '/ink/ui/index.html' },
    { label: 'Pager' }
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
            <a class="block tx-t-0" href="#pager">{_('Pager')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#controls">• {_('Controls')}</a>
              <a class="block tx-t-1" href="#styling">• {_('Styling')}</a>
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

          <a name="pager"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Pager')}</h1>
          <ide-app title="Pager" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Pager from '@stackpress/ink-ui/element/pager';
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
              <table-col>total</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Total number of items (default: 0)')}</table-col>
            </table-row>
            <table-row>
              <table-col>start</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Starting index of current range (default: 0)')}</table-col>
            </table-row>
            <table-row>
              <table-col>range</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Items per page (default: 50)')}</table-col>
            </table-row>
            <table-row>
              <table-col>radius</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Number of pages shown before/after current page (default: 2)')}</table-col>
            </table-row>
            <table-row>
              <table-col>next</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Shows next page button')}</table-col>
            </table-row>
            <table-row>
              <table-col>prev</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Shows previous page button')}</table-col>
            </table-row>
            <table-row>
              <table-col>rewind</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Shows first page button')}</table-col>
            </table-row>
            <table-row>
              <table-col>forward</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Shows last page button')}</table-col>
            </table-row>
            <table-row>
              <table-col>link</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets link color (e.g., { primary: true })')}</table-col>
            </table-row>
            <table-row>
              <table-col>control</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets control icon props (e.g., { info: true })')}</table-col>
            </table-row>
            <table-row>
              <table-col>border</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border color (e.g., { black: true })')}</table-col>
            </table-row>
            <table-row>
              <table-col>background</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets background color (e.g., { info: true })')}</table-col>
            </table-row>
            <table-row>
              <table-col>square</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets width and height in pixels for square layout (default: 0)')}</table-col>
            </table-row>
            <table-row>
              <table-col>size</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size (e.g., "md", "lg")')}</table-col>
            </table-row>
            <table-row>
              <table-col>xs</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 10px')}</table-col>
            </table-row>
            <table-row>
              <table-col>sm</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 12px')}</table-col>
            </table-row>
            <table-row>
              <table-col>md</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 14px')}</table-col>
            </table-row>
            <table-row>
              <table-col>lg</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 16px')}</table-col>
            </table-row>
            <table-row>
              <table-col>xl</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 18px')}</table-col>
            </table-row>
            <table-row>
              <table-col>xl2</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 20px')}</table-col>
            </table-row>
            <table-row>
              <table-col>xl3</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 22px')}</table-col>
            </table-row>
            <table-row>
              <table-col>xl4</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 24px')}</table-col>
            </table-row>
            <table-row>
              <table-col>xl5</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 26px')}</table-col>
            </table-row>
            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets text color (e.g., "salmon", "#ff0000")')}</table-col>
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
              <table-col>bold</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes current page number bold')}</table-col>
            </table-row>
            <table-row>
              <table-col>underline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Underlines page links')}</table-col>
            </table-row>
            <table-row>
              <table-col>page</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback function when a page is selected (receives page number)')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">Simple pagination with page numbers.</div>
          <div class="bg-t-3 p-10">
            <element-pager total={500} range={100} start={0} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-pager total={500} range={100} start={0} />
          `}</ide-code>

          <a name="controls"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Controls')}</h2>
          <div class="mb-10">Add navigation controls for first, previous, next, and last pages.</div>
          <div class="bg-t-3 p-10">
            <element-pager total={500} range={100} start={90} rewind prev next forward />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-pager total={500} range={100} start={90} rewind prev next forward />
          `}</ide-code>

          <a name="styling"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styling')}</h2>
          <div class="mb-10">Customize colors, borders, and text styles.</div>
          <div class="bg-t-3 p-10">
            <element-pager total={500} range={100} start={90} white bold underline background={ { info: true } } border={ { black: true } } />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-pager total={500} range={100} start={90} white bold underline background={ { info: true } } border={ { black: true } } />
          `}</ide-code>
          <div class="bg-t-3 p-10">
            <element-pager total={500} range={100} start={90} link={ { primary: true } } control={ { muted: true } } background={ { white: true } } border={ { muted: true } } />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-pager total={500} range={100} start={90} link={ { primary: true } } control={ { muted: true } } background={ { white: true } } border={ { muted: true } } />
          `}</ide-code>

          <a name="custom"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Customizations')}</h2>
          <div class="mb-10">Combine size, radius, square layout, and callback functionality.</div>
          <div class="bg-t-3 p-10">
            <element-pager total={500} range={100} start={90} show={3} next prev rewind forward white bold underline background={ { info: true } } border={ { black: true } } square={40} select={console.log} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-pager total={500} range={100} start={90} show={3} next prev rewind forward white bold underline background={ { info: true } } border={ { black: true } } square={40} select={console.log} />
          `}</ide-code>
          <div class="bg-t-3 p-10">
            <element-pager total={1000} range={200} start={400} radius={1} lg next prev background={ { muted: true } } square={30} select={console.log} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-pager total={1000} range={200} start={400} radius={1} lg next prev background={ { muted: true } } square={30} select={console.log} />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/notify.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Notify')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/panel.html">
              {_('Panels')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>