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
<link rel="import" type="component" href="@stackpress/ink-ui/field/country.ink" name="field-country" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/field/country.html';
  const title = _('Ink UI - Country Field');
  const description = _('A dropdown field for selecting countries with flags and search functionality.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Country Field' }
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
            <a class="block tx-t-0" href="#country">{_('Country Field')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#events">• {_('Events')}</a>
                 </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="country"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Country Field')}</h1>
          <ide-app title="Country Field" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Country from '@stackpress/ink-ui/field/country';
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
              <table-col>name</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Name attribute for form submission')}</table-col>
            </table-row>
            <table-row>
              <table-col>value</table-col>
              <table-col>String | Array</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial selected country code(s) (e.g., "US")')}</table-col>
            </table-row>
            <table-row>
              <table-col>placeholder</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Placeholder text when no country is selected (default: "Select Country")')}</table-col>
            </table-row>
            <table-row>
              <table-col>open</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback when dropdown opens')}</table-col>
            </table-row>
            <table-row>
              <table-col>close</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback when dropdown closes')}</table-col>
            </table-row>
            <table-row>
              <table-col>filter</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback when search input changes')}</table-col>
            </table-row>
            <table-row>
              <table-col>select</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback when a country is selected')}</table-col>
            </table-row>
            <table-row>
              <table-col>remove</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback when a country is removed')}</table-col>
            </table-row>
            <table-row>
              <table-col>add</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback when add button is clicked (if enabled)')}</table-col>
            </table-row>
            <table-row>
              <table-col>clear</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback when clear button is clicked')}</table-col>
            </table-row>
            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback when selection changes')}</table-col>
            </table-row>
            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback for general updates')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A simple country selector with a placeholder.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-country name="country" placeholder="Choose a Country" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-country name="country" placeholder="Choose a Country" />
          `}</ide-code>

          <a name="events"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Events')}</h2>
          <div class="mb-10">Country field with event handlers for interaction logging.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-country  
              name="country"
              placeholder="Choose Country" 
              value="US"
              open={(e) => console.log('open', e)}
              close={(e) => console.log('close', e)}
              filter={(e) => console.log('filter', e)}
              select={(e) => console.log('select', e)}
              remove={(e) => console.log('remove', e)}
              add={(e) => console.log('add', e)}
              clear={(e) => console.log('clear', e)}
              change={(e) => console.log('change', e)}
              update={(e) => console.log('update', e)}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-country  
              name="country"
              placeholder="Choose Country" 
              value="US"
              open={(e) => console.log('open', e)}
              close={(e) => console.log('close', e)}
              filter={(e) => console.log('filter', e)}
              select={(e) => console.log('select', e)}
              remove={(e) => console.log('remove', e)}
              add={(e) => console.log('add', e)}
              clear={(e) => console.log('clear', e)}
              change={(e) => console.log('change', e)}
              update={(e) => console.log('update', e)}
            />
          `}</ide-code>


          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/color.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Color Field')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/currency.html">
              {_('Currency')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>