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
<link rel="import" type="component" href="@stackpress/ink-ui/form/fieldset.ink" name="form-fieldset" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/input.ink" name="field-input" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/components/fieldset.html';
  const title = _('Ink UI - Form Fieldset');
  const description = _('A component for grouping form fields with a legend and optional multiple rows.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Fieldset' }
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
            <a class="block tx-t-0" href="#fieldset">{_('Fieldset')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#multiple">• {_('Multiple Rows')}</a>
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

          <a name="fieldset"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Fieldset')}</h1>
          <ide-app title="Fieldset" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Fieldset from '@stackpress/ink-ui/form/fieldset';
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
              <table-col>legend</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text for the fieldset legend; supports %s for row count')}</table-col>
            </table-row>
            <table-row>
              <table-col>name</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Name attribute for the fieldset')}</table-col>
            </table-row>
            <table-row>
              <table-col>value</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial values for the fields')}</table-col>
            </table-row>
            <table-row>
              <table-col>multiple</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Allows adding multiple rows with an "Add" button')}</table-col>
            </table-row>
            <table-row>
              <table-col>inputs</table-col>
              <table-col>Array | Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial input values (array for multiple, object for single)')}</table-col>
            </table-row>
            <table-row>
              <table-col>errors</table-col>
              <table-col>Array | Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial error states (array for multiple, object for single)')}</table-col>
            </table-row>
            <table-row>
              <table-col>add</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text for the "Add" button (default: "Add")')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A simple fieldset with a single field.</div>
          <div class="bg-t-3 p-10 mb-10">
            <form-fieldset legend="User Info">
              <field-input name="username" placeholder="Enter your username" />
            </form-fieldset>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <form-fieldset legend="User Info">
              <field-input name="username" placeholder="Enter your username" />
            </form-fieldset>
          `}</ide-code>

          <a name="multiple"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Multiple Rows')}</h2>
          <div class="mb-10">A fieldset with multiple rows and an "Add" button.</div>
          <div class="bg-t-3 p-10 mb-10">
            <form-fieldset legend="Fieldset %s" name="fieldset1" multiple>
              <field-input name="first" placeholder="Enter your first name" />
            </form-fieldset>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <form-fieldset legend="Fieldset %s" name="fieldset1" multiple>
              <field-input name="first" placeholder="Enter your first name" />
            </form-fieldset>
          `}</ide-code>

          <a name="custom"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Styling')}</h2>
          <div class="mb-10">A styled fieldset with initial values and custom "Add" text.</div>
          <div class="bg-t-3 p-10 mb-10">
            <form-fieldset 
              legend="Contact %s" 
              name="contacts" 
              multiple 
              add="Add Contact" 
              class="p-10 b-solid b-muted rounded" 
              inputs={[{ first: 'John' }]} 
              errors={[{ first: 'Invalid name' }]}
            >
              <field-input name="first" placeholder="Enter first name" />
            </form-fieldset>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <form-fieldset 
              legend="Contact %s" 
              name="contacts" 
              multiple 
              add="Add Contact" 
              class="p-10 b-solid b-muted rounded" 
              inputs={[{ first: 'John' }]} 
              errors={[{ first: 'Invalid name' }]}
            >
              <field-input name="first" placeholder="Enter first name" />
            </form-fieldset>
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/form/control.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Form Control')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/checkbox.html">
              {_('Checkbox')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>