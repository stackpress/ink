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
<link rel="import" type="component" href="@stackpress/ink-ui/format/formula.ink" name="format-formula" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/format/formula.html';
  const title = _('Ink UI - Formula Format');
  const description = _('A component for evaluating and displaying mathematical formulas with dynamic variables.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'Formula' }
  ];
  const variables = { x: 10, y: 20 };
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
            <a class="block tx-t-0" href="#formula">{_('Formula')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#variables">• {_('With Variables')}</a>
              <a class="block tx-t-1" href="#complex">• {_('Complex Formula')}</a>
              <a class="block tx-t-1" href="#styled">• {_('Styled Formula')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="formula"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Formula')}</h1>
          <ide-app title="Formula Format" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Formula from '@stackpress/ink-ui/format/formula';
            </ide-code>
          </ide-app>

   
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
              <table-col>String | Number</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('Base value for the formula, replaced into `{this}`. Converted to number; defaults to 0 if invalid.')}</table-col>
            </table-row>

            <table-row>
              <table-col>formula</table-col>
              <table-col>String</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('Mathematical expression (e.g., "{x} + {this} + {y}"). Variables in `{}` are replaced; unresolved ones become 0.')}</table-col>
            </table-row>

            <table-row>
              <table-col>data</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Key-value pairs for variables (e.g., `{ x: 10 }`). Values are converted to numbers; defaults to empty object.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes for styling (e.g., "tx-md").')}</table-col>
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

          <!-- Basic Usage -->
          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">{_('Evaluates a simple formula with just the base value.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            5 × 2 = <format-formula value="5" formula="{this} * 2" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            5 × 2 = <format-formula value="5" formula="{this} * 2" />
          `}</ide-code>

          <!-- With Variables -->
          <a name="variables"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('With Variables')}</h2>
          <div class="mb-10">{_('Evaluates a formula using variables from the `data` prop.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            10 + 29 + 20 = 
            <format-formula value="29" formula="{x} + {this} + {y}" data={variables} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <script>
              const variables = { x: 10, y: 20 };
            </script>
            10 + 29 + 20 = 
            <format-formula value="29" formula="{x} + {this} + {y}" data={variables} />
          `}</ide-code>

          <!-- Complex Formula -->
          <a name="complex"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Complex Formula')}</h2>
          <div class="mb-10">{_('Evaluates a more complex formula with multiple operations.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            (10 × 5 + 29) / 2 = 
            <format-formula value="29" formula="({x} * 5 + {this}) / 2" data={variables} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <script>
              const variables = { x: 10 };
            </script>
            (10 × 5 + 29) / 2 = 
            <format-formula value="29" formula="({x} * 5 + {this}) / 2" data={variables} />
          `}</ide-code>

          <!-- Styled Formula -->
          <a name="styled"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Formula')}</h2>
          <div class="mb-10">{_('Styles the formula result with Ink utilities.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            10 + 29 + 20 = 
            <format-formula 
              value="29" 
              formula="{x} + {this} + {y}" 
              data={variables} 
              bold 
              tx-lg 
              tx-primary 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <script>
              const variables = { x: 10, y: 20 };
            </script>
            10 + 29 + 20 = 
            <format-formula 
              value="29" 
              formula="{x} + {this} + {y}" 
              data={variables} 
              bold 
              tx-lg 
              tx-primary 
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/email.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Email')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/html.html">
              {_('HTML')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>