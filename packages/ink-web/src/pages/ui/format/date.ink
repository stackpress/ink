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
<link rel="import" type="component" href="@stackpress/ink-ui/format/date.ink" name="format-date" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/format/date.html';
  const title = _('Ink UI - Date Format');
  const description = _('A component for formatting dates with dayjs, supporting custom patterns, locales, and relative time.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'Date' }
  ];
  const pastDate = new Date('2024-12-25T10:00:00').toISOString();
  const recentDate = new Date(Date.now() - 5 * 60 * 1000).toISOString(); // 5 minutes ago
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
            <a class="block tx-t-0" href="#date">{_('Date')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#defaultFormat">• {_('Default Format')}</a>
              <a class="block tx-t-1" href="#customFormats">• {_('Custom Formats')}</a>
              <a class="block tx-t-1" href="#relativeTimeAgo">• {_('Relative Time (Ago)')}</a>
              <a class="block tx-t-1" href="#shortRelativeTime">• {_('Short Relative Time')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs 
              crumbs={crumbs} 
              block 
              bold 
              white 
              sep-muted 
              link-primary 
              spacing={2} 
            />
          </nav>

          <a name="date"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Date')}</h1>
          <ide-app title="Date Format" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Date from '@stackpress/ink-ui/format/date';
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
              <table-col>String | Date</table-col>
              <table-col>No</table-col>
              <table-col>{_('Date to format (e.g., "2024-12-25T10:00:00Z" or Date object). Defaults to current date.')}</table-col>
            </table-row>

            <table-row>
              <table-col>format</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Dayjs format pattern (e.g., "YYYY-MM-DD") or special values: "ago" for relative time, "a" for short relative time. Defaults to "MMMM D, YYYY, h:mm:ss a".')}</table-col>
            </table-row>

            <table-row>
              <table-col>locale</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Dayjs locale (e.g., "en", "fr"). Defaults to "en". Use "short" for abbreviated relative time.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes for styling (e.g., "tx-md p-4").')}</table-col>
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

          <!-- Default Format -->
          <a name="defaultFormat"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Default Format')}</h2>
          <div class="mb-10">{_('Displays the current date in the default format (MMMM D, YYYY, h:mm:ss a).')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-date />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-date />
          `}</ide-code>

          <!-- Custom Formats -->
          <a name="customFormats"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Formats')}</h2>
          <div class="mb-10">{_('Displays a specific date in various Day.js-compatible formats.')}</div>
          <div class="bg-t-3 p-10 mb-20 flex flex-wrap gap-20">
            <format-date value={pastDate} format="YYYY-MM-DD" />
            <format-date value={pastDate} format="DD/MM/YYYY" />
            <format-date value={pastDate} format="D MMM YYYY" />
            <format-date value={pastDate} format="HH:mm:ss" />
            <format-date value={pastDate} format="MMMM D YYYY, h:mm:ss a" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-date value="2024-12-25T10:00:00Z" format="YYYY-MM-DD" />
            <format-date value="2024-12-25T10:00:00Z" format="DD/MM/YYYY" />
            <format-date value="2024-12-25T10:00:00Z" format="D MMM YYYY" />
            <format-date value="2024-12-25T10:00:00Z" format="HH:mm:ss" />
            <format-date value="2024-12-25T10:00:00Z" format="MMMM D YYYY, h:mm:ss a" />
          `}</ide-code>

          <!-- Relative Time (Ago) -->
          <a name="relativeTimeAgo"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Relative Time (Ago)')}</h2>
          <div class="mb-10">{_('Displays a date as relative time using the "ago" format.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-date value={recentDate} format="ago" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <!-- Assuming the date is 5 minutes ago -->
            <format-date value={recentDate} format="ago" />
          `}</ide-code>

          <!-- Short Relative Time -->
          <a name="shortRelativeTime"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Short Relative Time')}</h2>
          <div class="mb-10">{_('Displays a date as short relative time using the "a" format.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-date value={recentDate} format="a" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <!-- Assuming the date is 5 minutes ago -->
            <format-date value={recentDate} format="a" />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/currency.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Currency')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/email.html">
              {_('Email')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>