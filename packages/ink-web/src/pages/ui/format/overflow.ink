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
<link rel="import" type="component" href="@stackpress/ink-ui/format/overflow.ink" name="format-overflow" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/format/overflow.html';
  const title = _('Ink UI - Overflow Format');
  const description = _('A component for truncating text by character or word count with optional ellipsis.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'Overflow' }
  ];

  const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
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
            <a class="block tx-t-0" href="#overflow">{_('Overflow')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Overflow')}</a>
              <a class="block tx-t-1" href="#truncate">• {_('Truncated Overflow')}</a>
              <a class="block tx-t-1" href="#words">• {_('Word-Based Overflow')}</a>
              <a class="block tx-t-1" href="#styled">• {_('Styled Overflow')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="overflow"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Overflow')}</h1>
          <ide-app title="Overflow Format" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Overflow from '@stackpress/ink-ui/format/overflow';
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
            <table-col>{_('Text to truncate (e.g., "Lorem Ipsum").')}</table-col>
          </table-row>

          <table-row>
            <table-col>length</table-col>
            <table-col>Number</table-col>
            <table-col>No</table-col>
            <table-col>{_('Maximum character or word count (e.g., 8). Truncates if exceeded; converts string input to number.')}</table-col>
          </table-row>

          <table-row>
            <table-col>words</table-col>
            <table-col>Boolean</table-col>
            <table-col>No</table-col>
            <table-col>{_('Truncates by word count instead of characters if `true`. Uses `length` as word limit.')}</table-col>
          </table-row>

          <table-row>
            <table-col>hellip</table-col>
            <table-col>Boolean</table-col>
            <table-col>No</table-col>
            <table-col>{_('Adds an ellipsis ("…") to truncated text if `true`.')}</table-col>
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
        </layout-table>

          <!-- Basic Overflow -->
          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Overflow')}</h2>
          <div class="mb-10">{_('Renders the full text without truncation.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-overflow value="Lorem Ipsum" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-overflow value="Lorem Ipsum" />
          `}</ide-code>

          <!-- Truncated Overflow -->
          <a name="truncate"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Truncated Overflow')}</h2>
          <div class="mb-10">{_('Truncates text by character count with an ellipsis.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-overflow value="Lorem Ipsum" length={8} hellip />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-overflow value="Lorem Ipsum" length={8} hellip />
          `}</ide-code>

          <!-- Word-Based Overflow -->
          <a name="words"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Word-Based Overflow')}</h2>
          <div class="mb-10">{_('Truncates text by word count with an ellipsis.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-overflow value={longText} length={3} words hellip />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <script>
              const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
            </script>
            <format-overflow value={longText} length={3} words hellip />
          `}</ide-code>

          <!-- Styled Overflow -->
          <a name="styled"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Overflow')}</h2>
          <div class="mb-10">{_('Truncates text with custom styling.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-overflow value={longText} length={10} hellip color="primary" lg bold />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <script>
              const longText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
            </script>
            <format-overflow value={longText} length={10} hellip color="primary" lg bold />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/number.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Number')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/phone.html">
              {_('Phone')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>