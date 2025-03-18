<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@/components/api/docs.ink" name="api-docs" />
<link rel="import" type="component" href="@/components/ide/app.ink" name="ide-app" />
<link rel="import" type="component" href="@/components/ide/code.ink" name="ide-code" />
<link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/alert.ink" name="element-alert" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="element-icon" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/crumbs.ink" name="element-crumbs" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table.ink" name="layout-table" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/head.ink" name="table-head" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/row.ink" name="table-row" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/col.ink" name="table-col" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/badge.ink" name="element-badge" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/components/badge.html';
  const title = _('Ink UI - Badge Component');
  const description = _('A customizable badge component for displaying small notifications or labels.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Components', href: '/ink/ui/index.html' },
    { label: 'Badge' }
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
            <a class="block tx-t-0" href="#badge">{_('Badge')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#types">• {_('Types')}</a>
              <a class="block tx-t-1" href="#customColor">• {_('Custom Color')}</a>
              <a class="block tx-t-1" href="#rounded">• {_('Rounded')}</a>
              <a class="block tx-t-1" href="#padding">• {_('Padding')}</a>
              <a class="block tx-t-1" href="#combinations">• {_('Combinations')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="badge"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Badge')}</h1>
          <ide-app title="Badge" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Badge from '@stackpress/ink-ui/element/badge';
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
              <table-col>outline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Displays the badge with a white background and colored border/text (default: muted)')}</table-col>
            </table-row>
            <table-row>
              <table-col>solid</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Displays the badge with a solid colored background and white text (default: muted)')}</table-col>
            </table-row>
            <table-row>
              <table-col>transparent</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Displays the badge with a transparent background and colored border/text (default: muted)')}</table-col>
            </table-row>
            <table-row>
              <table-col>padding</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets uniform padding in pixels (default: "2px 8px")')}</table-col>
            </table-row>
            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a custom CSS color (e.g., "salmon", "#ff0000") for background (solid) or text/border (outline/transparent)')}</table-col>
            </table-row>
            <table-row>
              <table-col>info</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a blue background (var(--info))')}</table-col>
            </table-row>
            <table-row>
              <table-col>warning</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a yellow background (var(--warning))')}</table-col>
            </table-row>
            <table-row>
              <table-col>success</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a green background (var(--success))')}</table-col>
            </table-row>
            <table-row>
              <table-col>error</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a red background (var(--error))')}</table-col>
            </table-row>
            <table-row>
              <table-col>muted</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a gray background (var(--muted))')}</table-col>
            </table-row>
            <table-row>
              <table-col>white</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a white background (var(--white))')}</table-col>
            </table-row>
            <table-row>
              <table-col>black</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a black background (var(--black))')}</table-col>
            </table-row>
            <table-row>
              <table-col>primary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a theme-defined primary color background (var(--primary))')}</table-col>
            </table-row>
            <table-row>
              <table-col>secondary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a theme-defined secondary color background (var(--secondary))')}</table-col>
            </table-row>
            <table-row>
              <table-col>curved</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies a 4px border radius')}</table-col>
            </table-row>
            <table-row>
              <table-col>rounded</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies a 12px border radius')}</table-col>
            </table-row>
            <table-row>
              <table-col>pill</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies a 10000px border radius for a pill shape')}</table-col>
            </table-row>
          </layout-table>

          <a name="types"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Types')}</h2>
          <div class="mb-10">
            Badges have predefined color types: <span class="bg-info tx-white tx-italic p-3">info</span>, <span class="bg-warning tx-black tx-italic p-3">warning</span>, <span class="bg-success tx-white tx-italic p-3">success</span>, <span class="bg-error tx-white tx-italic p-3">error</span>, and <span class="bg-muted tx-white tx-italic p-3">muted</span>.
          </div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge info>Info</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge info>Info</element-badge>`}</ide-code>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge warning>Warning</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge warning>Warning</element-badge>`}</ide-code>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge success>Success</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge success>Success</element-badge>`}</ide-code>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge error>Error</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge error>Error</element-badge>`}</ide-code>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge muted>Muted</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge muted>Muted</element-badge>`}</ide-code>

          <a name="customColor"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Color')}</h2>
          <div class="mb-10">Badges support custom CSS colors for background (solid) or text/border (outline/transparent).</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge color="salmon">Salmon</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge color="salmon">Salmon</element-badge>`}</ide-code>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge color="#ff4500">Orange</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge color="#ff4500">Orange</element-badge>`}</ide-code>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge color="purple" transparent>Transparent</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge color="purple" transparent>Transparent</element-badge>`}</ide-code>

          <a name="rounded"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Rounded')}</h2>
          <div class="mb-10">Badges can have curved (4px), rounded (12px), or pill-shaped (10000px) corners.</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge info curved>Curved</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge info curved>Curved</element-badge>`}</ide-code>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge warning rounded>Rounded</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge warning rounded>Rounded</element-badge>`}</ide-code>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge success pill>Pill</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge success pill>Pill</element-badge>`}</ide-code>

          <a name="padding"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Padding')}</h2>
          <div class="mb-10">Adjust padding with the <span class="tx-italic p-3">padding</span> prop (default: 2px 8px).</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge info padding="4">Padding 4</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge info padding="4">Padding 4</element-badge>`}</ide-code>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge success padding="10">Padding 10</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge success padding="10">Padding 10</element-badge>`}</ide-code>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge error padding="2">Tight</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge error padding="2">Tight</element-badge>`}</ide-code>

          <a name="combinations"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Combinations')}</h2>
          <div class="mb-10">Combine props and Ink utilities for custom badge styles.</div>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge outline primary curved padding="6" class="tx-sm">Primary Outline</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge outline primary curved padding="6" class="tx-sm">Primary Outline</element-badge>`}</ide-code>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge transparent black pill class="tx-bold">Black Pill</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge transparent black pill class="tx-bold">Black Pill</element-badge>`}</ide-code>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge color="#ff4500" rounded class="tx-italic">Orange Italic</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge color="#ff4500" rounded class="tx-italic">Orange Italic</element-badge>`}</ide-code>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge white padding="8" class="tx-t-2 tx-sm">White Theme</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge white padding="8" class="tx-t-2 tx-sm">White Theme</element-badge>`}</ide-code>
          <div class="basis-third-10 lg-basis-half-10 md-basis-full">
            <div class="bg-t-3 pt-10 pb-10 flex flex-center"><element-badge secondary curved class="tx-upper">Secondary</element-badge></div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`<element-badge secondary curved class="tx-upper">Secondary</element-badge>`}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/alert.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Alerts')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/crumbs.html">
              {_('Crumbs')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>