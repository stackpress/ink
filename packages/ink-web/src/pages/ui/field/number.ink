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
<link rel="import" type="component" href="@stackpress/ink-ui/field/number.ink" name="field-number" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/field/number.html';
  const title = _('Ink UI - Number Field');
  const description = _('A formatted number input with min/max/step constraints.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Number Field' }
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
            <a class="block tx-t-0" href="#number">{_('Number Field')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#formatting">• {_('Formatting Options')}</a>
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

          <a name="number"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Number Field')}</h1>
          <ide-app title="Number Field" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Number from '@stackpress/ink-ui/field/number';
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
              <table-col>{_('Autocomplete attribute (e.g., "on", "off")')}</table-col>
            </table-row>
            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Disables the input')}</table-col>
            </table-row>
            <table-row>
              <table-col>max</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Maximum value')}</table-col>
            </table-row>
            <table-row>
              <table-col>min</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Minimum value')}</table-col>
            </table-row>
            <table-row>
              <table-col>name</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Name attribute for form submission')}</table-col>
            </table-row>
            <table-row>
              <table-col>pattern</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Regex pattern for validation')}</table-col>
            </table-row>
            <table-row>
              <table-col>placeholder</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Placeholder text')}</table-col>
            </table-row>
            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the input read-only')}</table-col>
            </table-row>
            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Marks the input as required')}</table-col>
            </table-row>
            <table-row>
              <table-col>step</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Step increment (determines decimal places)')}</table-col>
            </table-row>
            <table-row>
              <table-col>type</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Input type (default: "text", not "number")')}</table-col>
            </table-row>
            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial value')}</table-col>
            </table-row>
            <table-row>
              <table-col>separator</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Thousands separator (default: ",")')}</table-col>
            </table-row>
            <table-row>
              <table-col>decimal</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Decimal point character (default: ".")')}</table-col>
            </table-row>
            <table-row>
              <table-col>absolute</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Forces positive values (default: false)')}</table-col>
            </table-row>
            <table-row>
              <table-col>background</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Background color (default: "var(--white)")')}</table-col>
            </table-row>
            <table-row>
              <table-col>border</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Border color (default: "var(--black)")')}</table-col>
            </table-row>
            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback for change event')}</table-col>
            </table-row>
            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback with numeric value as string')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A simple number input with constraints.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-number 
              name="basic-number"
              min="0" 
              max="100" 
              step="1" 
              value="50"
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-number 
              name="basic-number"
              min="0" 
              max="100" 
              step="1" 
              value="50"
            />
          `}</ide-code>

          <a name="formatting"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Formatting Options')}</h2>
          <div class="mb-10">Number field with custom separator and decimal formatting.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-number 
              name="format-number"
              min="0" 
              max="10000" 
              step="0.01" 
              value="1234.56"
              separator=" " 
              decimal=","
              absolute={true}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-number 
              name="format-number"
              min="0" 
              max="10000" 
              step="0.01" 
              value="1234.56"
              separator=" " 
              decimal=","
              absolute={true}
            />
          `}</ide-code>

          <a name="custom"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Styling')}</h2>
          <div class="mb-10">Number field with custom styling and update callback.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-number 
              name="custom-number"
              min="0" 
              max="10000" 
              step="0.01" 
              value="1234.56" 
              class="w-200 rounded b-solid b-primary p-5"
              background="var(--gray-light)"
              update={(value) => console.log('Updated to:', value)}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-number 
              name="custom-number"
              min="0" 
              max="10000" 
              step="0.01" 
              value="1234.56" 
              class="w-200 rounded b-solid b-primary p-5"
              background="var(--gray-light)"
              update={(value) => console.log('Updated to:', value)}
            />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/metadata.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Metadata Field')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/password.html">
              {_('Password Field')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>