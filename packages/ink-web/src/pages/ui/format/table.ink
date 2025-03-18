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
<link rel="import" type="component" href="@stackpress/ink-ui/format/table.ink" name="format-table" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/format/table.html';
  const title = _('Ink UI - Table Format Component');
  const description = _('A component for rendering tabular data with customizable styling and sticky headers.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'Table' }
  ];
  const table = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'London' },
    { name: 'Charlie', age: 35, city: 'Tokyo' }
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
            <a class="block tx-t-0" href="#table">{_('Table')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#styled">• {_('Styled Table')}</a>
              <a class="block tx-t-1" href="#sticky">• {_('Sticky Headers')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="table"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Table')}</h1>
          <ide-app title="Table Format" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Table from '@stackpress/ink-ui/format/table';
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
              <table-col>Array</table-col>
              <table-col>No</table-col>
              <table-col>{_('Array of objects to render as rows (e.g., [{ name: "Alice", age: 25 }]). Defaults to empty array.')}</table-col>
            </table-row>

            <table-row>
              <table-col>padding</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Padding for cells in pixels (e.g., "10"). Applied as `padding` to `td,th`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>align</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text alignment for cells (e.g., "center", "left"). Applied to `td,th`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>background</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Background color for cells using Ink utilities (e.g., "bg-1"). Applied to `td,th`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>header</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Background color for header row using Ink utilities (e.g., "bg-2"). Applied to `tr th`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>stripe</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Background color for even rows using Ink utilities (e.g., "bg-2"). Applied to `tr:nth-child(even) td`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>border</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Border-top color using Ink utilities (e.g., "black"). Applied to `td` with 1px solid style.')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text color using Ink utilities (e.g., "primary"). Applied to the host.')}</table-col>
            </table-row>

            <table-row>
              <table-col>top</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the header row sticky at the top if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>left</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the first column sticky on the left if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>right</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the last column sticky on the right if `true`.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Usage -->
          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">{_('Renders a basic table from an array of objects.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-table value={table} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <script>
              const table = [
                { name: 'Alice', age: 25, city: 'New York' },
                { name: 'Bob', age: 30, city: 'London' },
                { name: 'Charlie', age: 35, city: 'Tokyo' }
              ];
            </script>
            <format-table value={table} />
          `}</ide-code>

          <!-- Styled Table -->
          <a name="styled"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Table')}</h2>
          <div class="mb-10">{_('Renders a table with custom styling for padding, alignment, and colors.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-table 
              value={table} 
              padding="10"
              align="center"
              background-theme="bg-1"
              stripe-theme="bg-2"
              header-theme="bg-2"
              border-theme="black"
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <script>
              const table = [
                { name: 'Alice', age: 25, city: 'New York' },
                { name: 'Bob', age: 30, city: 'London' },
                { name: 'Charlie', age: 35, city: 'Tokyo' }
              ];
            </script>
            <format-table 
              value={table} 
              padding="10"
              align="center"
              background-theme="bg-1"
              stripe-theme="bg-2"
              header-theme="bg-2"
              border-theme="black"
            />
          `}</ide-code>

          <!-- Sticky Headers -->
          <a name="sticky"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Sticky Headers')}</h2>
          <div class="mb-10">{_('Renders a table with sticky headers and columns.')}</div>
          <div class="bg-t-3 p-10 mb-20" style="max-height: 200px;">
            <format-table 
              value={table} 
              top 
              left 
              padding="10" 
              border-theme="black" 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <script>
              const table = [
                { name: 'Alice', age: 25, city: 'New York' },
                { name: 'Bob', age: 30, city: 'London' },
                { name: 'Charlie', age: 35, city: 'Tokyo' }
              ];
            </script>
            <div style="max-height: 200px;">
              <format-table 
                value={table} 
                top 
                left 
                padding="10" 
                border-theme="black" 
              />
            </div>
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/separated.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Separated')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/taglist.html">
              {_('Taglist')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>