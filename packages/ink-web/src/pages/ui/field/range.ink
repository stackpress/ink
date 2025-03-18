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
<link rel="import" type="component" href="@stackpress/ink-ui/field/range.ink" name="field-range" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/field/range.html';
  const title = _('Ink UI - Range Field');
  const description = _('A range slider with synchronized number input for precise control.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Range Field' }
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
            <a class="block tx-t-0" href="#range">{_('Range Field')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#custom-range">• {_('Custom Range')}</a>
              <a class="block tx-t-1" href="#disabled">• {_('Disabled State')}</a>
              <a class="block tx-t-1" href="#styled">• {_('Styled Range')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="range"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Range Field')}</h1>
          <ide-app title="Range Field" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Range from '@stackpress/ink-ui/field/range';
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
              <table-col>autocomplete</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Autocomplete attribute (e.g., "off")')}</table-col>
            </table-row>
            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Disables both inputs')}</table-col>
            </table-row>
            <table-row>
              <table-col>name</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Name attribute for form submission')}</table-col>
            </table-row>
            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes both inputs read-only')}</table-col>
            </table-row>
            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Marks the input as required')}</table-col>
            </table-row>
            <table-row>
              <table-col>value</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial value')}</table-col>
            </table-row>
            <table-row>
              <table-col>min</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Minimum value (default: 0)')}</table-col>
            </table-row>
            <table-row>
              <table-col>max</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Maximum value (default: 100)')}</table-col>
            </table-row>
            <table-row>
              <table-col>step</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Step increment (default: 1)')}</table-col>
            </table-row>
            <table-row>
              <table-col>width</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Width of the number input in pixels (default: 60)')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A basic range slider with default settings.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-range 
              name="basic-range" 
              min="0" 
              max="100" 
              step="10" 
              value="0"
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-range 
              name="basic-range" 
              min="0" 
              max="100" 
              step="10" 
              value="0"
            />
          `}</ide-code>

          <a name="custom-range"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Range')}</h2>
          <div class="mb-10">Range slider with custom min, max, step, and wider number input.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-range 
              name="custom-range" 
              min="-50" 
              max="50" 
              step="5" 
              value="25" 
              width="80"
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-range 
              name="custom-range" 
              min="-50" 
              max="50" 
              step="5" 
              value="25" 
              width="80"
            />
          `}</ide-code>

          <a name="disabled"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Disabled State')}</h2>
          <div class="mb-10">Range slider in disabled and readonly states.</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20">
            <field-range 
              name="disabled-range" 
              min="0" 
              max="100" 
              step="10" 
              value="50" 
              disabled
            />
            <field-range 
              name="readonly-range" 
              min="0" 
              max="100" 
              step="10" 
              value="75" 
              readonly
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-range 
              name="disabled-range" 
              min="0" 
              max="100" 
              step="10" 
              value="50" 
              disabled
            />
            <field-range 
              name="readonly-range" 
              min="0" 
              max="100" 
              step="10" 
              value="75" 
              readonly
            />
          `}</ide-code>

          <a name="styled"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Range')}</h2>
          <div class="mb-10">Range slider with custom styling and required attribute.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-range 
              name="styled-range" 
              min="0" 
              max="200" 
              step="1" 
              value="100" 
              width="100"
              class="w-300 rounded b-solid b-primary bg-white p-10"
              required
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-range 
              name="styled-range" 
              min="0" 
              max="200" 
              step="1" 
              value="100" 
              width="100"
              class="w-300 rounded b-solid b-primary bg-white p-10"
              required
            />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/radio.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Radio Field')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/rating.html">
              {_('Rating Field')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>