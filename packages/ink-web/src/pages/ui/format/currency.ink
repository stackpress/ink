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
<link rel="import" type="component" href="@stackpress/ink-ui/format/currency.ink" name="format-currency" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/format/currency.html';
  const title = _('Ink UI - Currency Format');
  const description = _('A component for displaying currency flags and names based on currency or country codes.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'Currency' }
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
            <a class="block tx-t-0" href="#currency">{_('Currency')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#flag-only">• {_('Flag Only')}</a>
              <a class="block tx-t-1" href="#text-only">• {_('Text Only')}</a>
              <a class="block tx-t-1" href="#custom">• {_('Custom Styling')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="currency"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Currency')}</h1>
          <ide-app title="Currency Format" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Currency from '@stackpress/ink-ui/format/currency';
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
              <table-col>String</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('Three-letter currency code (e.g., "usd", "eur"). "usd" maps to "US" country code. Case-insensitive.')}</table-col>
            </table-row>

            <table-row>
              <table-col>flag</table-col>
              <table-col>Boolean | Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Displays the country flag. If `true`, uses default size (16px). If an object, accepts size props (e.g., `sm`, `lg`). Set to `false` to hide.')}</table-col>
            </table-row>

            <table-row>
              <table-col>text</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Displays the currency name. Defaults to `true` if `flag` is unset; set to `false` to hide.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes for styling the container (e.g., "flex gap-10").')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Display style (e.g., "inline-flex", "block"). Defaults to "inline-flex".')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text color using Ink utilities (e.g., "tx-primary").')}</table-col>
            </table-row>

            <table-row>
              <table-col>size</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Font size using Ink utilities (e.g., "tx-md", "tx-lg").')}</table-col>
            </table-row>

            <table-row>
              <table-col>bold</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies bold font weight if `true`.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Usage -->
          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">{_('Displays a currency flag and name with default settings.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-currency value="usd" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-currency value="usd" />
          `}</ide-code>

          <!-- Flag Only -->
          <a name="flag-only"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Flag Only')}</h2>
          <div class="mb-10">{_('Shows only the country flag, hiding the currency name.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-currency value="eur" flag text={false} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-currency value="eur" flag text={false} />
          `}</ide-code>

          <!-- Text Only -->
          <a name="text-only"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Text Only')}</h2>
          <div class="mb-10">{_('Shows only the currency name, hiding the flag.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-currency value="jpy" flag={false} text />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-currency value="jpy" flag={false} text />
          `}</ide-code>

          <!-- Custom Styling -->
          <a name="custom"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Styling')}</h2>
          <div class="mb-10">{_('Customizes the flag size, text size, and adds styling with Ink utilities.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-currency 
              value="usd" 
              flag-lg 
              text-lg 
              class="gap-10 tx-primary bold" 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-currency 
              value="usd" 
              flag-lg 
              text-lg 
              class="gap-10 tx-primary bold" 
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/country.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Country')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/date.html">
              {_('Date')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>