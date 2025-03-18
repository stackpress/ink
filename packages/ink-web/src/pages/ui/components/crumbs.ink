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

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/components/crumbs.html';
  const title = _('Ink UI - Crumbs Component');
  const description = _('A breadcrumb navigation component with customizable links, icons, and separators.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Components', href: '/ink/ui/index.html' },
    { label: 'Crumbs' }
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
            <a class="block tx-t-0" href="#crumbs">{_('Crumbs')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#colors">• {_('Colors')}</a>
              <a class="block tx-t-1" href="#sizes">• {_('Sizes')}</a>
              <a class="block tx-t-1" href="#styles">• {_('Styles')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="crumbs"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Crumbs')}</h1>
          <ide-app title="Crumbs" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Crumbs from '@stackpress/ink-ui/element/crumbs';
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
              <table-col>crumbs</table-col>
              <table-col>Array</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('Array of objects with icon, label, and href properties')}</table-col>
            </table-row>
            <table-row>
              <table-col>link</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Props to customize link color (e.g., { primary: true })')}</table-col>
            </table-row>
            <table-row>
              <table-col>sep</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Props to customize separator icon (e.g., { muted: true })')}</table-col>
            </table-row>
            <table-row>
              <table-col>icon</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Props to customize crumb icons (e.g., { size: "lg" })')}</table-col>
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
              <table-col>{_('Sets custom text color (e.g., "salmon", "#ff0000")')}</table-col>
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
              <table-col>spacing</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets separator margin in pixels (default: 0)')}</table-col>
            </table-row>
            <table-row>
              <table-col>bold</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets non-link text to bold')}</table-col>
            </table-row>
            <table-row>
              <table-col>underline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Underlines links')}</table-col>
            </table-row>
            <table-row>
              <table-col>block</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to block (default)')}</table-col>
            </table-row>
            <table-row>
              <table-col>inline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to inline')}</table-col>
            </table-row>
            <table-row>
              <table-col>flex</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to flex with centered items')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">Basic breadcrumb navigation with icons and links.</div>
          <div class="bg-t-3 p-10">
            <element-crumbs crumbs={crumbs} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <script>
              const crumbs = [
                { icon: 'home', label: 'Home', href: '/ink/index.html' },
                { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
                { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
                { icon: 'icons', label: 'Components', href: '/ink/ui/index.html' },
                { label: 'Crumbs' }
              ];
            </script>
            <element-crumbs crumbs={crumbs} />
          `}</ide-code>

          <a name="colors"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Colors')}</h2>
          <div class="mb-10">Customize text, link, and separator colors.</div>
          <div class="bg-t-3 p-10">
            <element-crumbs crumbs={crumbs} white link-primary sep-muted />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-crumbs crumbs={crumbs} white link-primary sep-muted />
          `}</ide-code>
          <div class="bg-t-3 p-10">
            <element-crumbs crumbs={crumbs} info link-warning sep-error />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-crumbs crumbs={crumbs} info link-warning sep-error />
          `}</ide-code>
          <div class="bg-t-3 p-10">
            <element-crumbs crumbs={crumbs} color="#ff4500" link={ { color: "purple" } } sep-success />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-crumbs crumbs={crumbs} color="#ff4500" link={ { color: "purple" } } sep-success />
          `}</ide-code>

          <a name="sizes"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Sizes')}</h2>
          <div class="mb-10">Adjust font and icon sizes.</div>
          <div class="bg-t-3 p-10">
            <element-crumbs crumbs={crumbs} sm />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-crumbs crumbs={crumbs} sm />
          `}</ide-code>
          <div class="bg-t-3 p-10">
            <element-crumbs crumbs={crumbs} lg icon={ { xl: true } } />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-crumbs crumbs={crumbs} lg icon={ { xl: true } } />
          `}</ide-code>
          <div class="bg-t-3 p-10">
            <element-crumbs crumbs={crumbs} xl2 sep={ { md: true } } />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-crumbs crumbs={crumbs} xl2 sep={ { md: true } } />
          `}</ide-code>

          <a name="styles"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styles')}</h2>
          <div class="mb-10">Combine display, boldness, underlines, and spacing.</div>
          <div class="bg-t-3 p-10">
            <element-crumbs crumbs={crumbs} flex bold spacing={4} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-crumbs crumbs={crumbs} flex bold spacing={4} />
          `}</ide-code>
          <div class="bg-t-3 p-10">
            <element-crumbs crumbs={crumbs} inline underline link-secondary spacing={2} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-crumbs crumbs={crumbs} inline underline link-secondary spacing={2} />
          `}</ide-code>
          <div class="bg-t-3 p-10">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} class="tx-italic" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} class="tx-italic" />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/badge.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Badge')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/icon.html">
              {_('Icon')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>