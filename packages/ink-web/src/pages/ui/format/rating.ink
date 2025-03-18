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
<link rel="import" type="component" href="@stackpress/ink-ui/format/rating.ink" name="format-rating" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/format/rating.html';
  const title = _('Ink UI - Rating Format');
  const description = _('A component for displaying star ratings with customizable rounding, maximum stars, and styling.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'Rating' }
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
            <a class="block tx-t-0" href="#rating">{_('Rating')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Rating')}</a>
              <a class="block tx-t-1" href="#remainder">• {_('With Remainder')}</a>
              <a class="block tx-t-1" href="#styled">• {_('Styled Rating')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="rating"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Rating')}</h1>
          <ide-app title="Rating Format" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Rating from '@stackpress/ink-ui/format/rating';
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
              <table-col>Number</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('Rating value (e.g., 3.5). Determines filled stars (★).')}</table-col>
            </table-row>

            <table-row>
              <table-col>max</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Maximum number of stars. Defaults to the rounded `value` if unset.')}</table-col>
            </table-row>

            <table-row>
              <table-col>remainder</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Shows empty stars (☆) for remaining count up to `max` if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>round</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Rounding method: "round", "ceil", "floor". Defaults to "round".')}</table-col>
            </table-row>

            <table-row>
              <table-col>spacing</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Letter spacing between stars in pixels (e.g., 2).')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Display style (e.g., "inline-block", "block"). Defaults to "inline-block".')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text color using Ink utilities (e.g., "primary").')}</table-col>
            </table-row>

            <table-row>
              <table-col>size</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Font size using Ink utilities (e.g., "md").')}</table-col>
            </table-row>

            <table-row>
              <table-col>bold</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies bold font weight if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes applied to the host (e.g., "tx-warning").')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Rating -->
          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Rating')}</h2>
          <div class="mb-10">{_('Renders a basic star rating with default rounding.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-rating value="3.5" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-rating value="3.5" />
          `}</ide-code>

          <!-- With Remainder -->
          <a name="remainder"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('With Remainder')}</h2>
          <div class="mb-10">{_('Renders a rating with remainder stars, matching the reference example.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-rating class="tx-warning" value="3.5" max={5} remainder round="floor" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-rating class="tx-warning" value="3.5" max={5} remainder round="floor" />
          `}</ide-code>

          <!-- Styled Rating -->
          <a name="styled"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Rating')}</h2>
          <div class="mb-10">{_('Renders a rating with custom styling and spacing.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-rating 
              class="tx-primary" 
              value="4.7" 
              max={5} 
              remainder 
              round="ceil" 
              spacing={2} 
              lg
              bold 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-rating 
              class="tx-primary" 
              value="4.7" 
              max={5} 
              remainder 
              round="ceil" 
              spacing={2} 
              lg
              bold 
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/phone.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Phone')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/separated.html">
              {_('Separated')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>