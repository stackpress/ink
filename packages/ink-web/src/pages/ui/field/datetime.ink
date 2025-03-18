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
<link rel="import" type="component" href="@stackpress/ink-ui/field/datetime.ink" name="field-datetime" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/field/datetime.html';
  const title = _('Ink UI - Datetime Field');
  const description = _('A datetime-local picker field with ISO datetime formatting and change handling.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Datetime Field' }
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
            <a class="block tx-t-0" href="#datetime">{_('Datetime Field')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#states">• {_('States')}</a>
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

          <a name="datetime"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Datetime Field')}</h1>
          <ide-app title="Datetime Field" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Datetime from '@stackpress/ink-ui/field/datetime';
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
              <table-col>{_('Disables the datetime picker')}</table-col>
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
              <table-col>{_('Regex pattern for validation (e.g., "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}")')}</table-col>
            </table-row>
            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the datetime picker read-only')}</table-col>
            </table-row>
            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Marks the field as required')}</table-col>
            </table-row>
            <table-row>
              <table-col>value</table-col>
              <table-col>String | Date</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial datetime value (e.g., "2020-01-01T13:20:10" or Date object), converted to ISO without Z')}</table-col>
            </table-row>
            <table-row>
              <table-col>placeholder</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Placeholder text for the datetime input')}</table-col>
            </table-row>
            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback for change event (receives ChangeEvent)')}</table-col>
            </table-row>
            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback with formatted datetime string (e.g., "2020-01-01T13:20:10")')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A simple datetime field with a placeholder.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-datetime name="basic-datetime" placeholder="Select a datetime" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-datetime name="basic-datetime" placeholder="Select a datetime" />
          `}</ide-code>

          <a name="states"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('States')}</h2>
          <div class="mb-10">Datetime field with different states: value, disabled, required.</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20">
            <field-datetime name="valued-datetime" value="2023-06-15T09:30:00" placeholder="With Value" />
            <field-datetime name="disabled-datetime" disabled placeholder="Disabled" />
            <field-datetime name="required-datetime" required placeholder="Required" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-datetime name="valued-datetime" value="2023-06-15T09:30:00" placeholder="With Value" />
            <field-datetime name="disabled-datetime" disabled placeholder="Disabled" />
            <field-datetime name="required-datetime" required placeholder="Required" />
          `}</ide-code>

          <a name="custom"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Styling')}</h2>
          <div class="mb-10">Datetime field with custom styling, initial value, and update callback.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-datetime 
              name="custom-datetime" 
              placeholder="Enter datetime" 
              value="2020-01-01T13:20:10" 
              update={(datetime) => console.log('Updated datetime:', datetime)}
              class="rounded b-solid b-primary p-5 w-250"
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-datetime 
              name="custom-datetime" 
              placeholder="Enter datetime" 
              value="2020-01-01T13:20:10" 
              update={(datetime) => console.log('Updated datetime:', datetime)}
              class="rounded b-solid b-primary p-5 w-250"
            />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/date.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Date Field')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/editor.html">
              {_('Editor Field')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>