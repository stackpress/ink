<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
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
<link rel="import" type="component" href="@stackpress/ink-ui/field/select.ink" name="field-select" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/field/select.html';
  const title = _('Ink UI - Select Field');
  const description = _('A customizable dropdown select field with search and multiple selection options.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Select Field' }
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
            <a class="block tx-t-0" href="#select">{_('Select Field')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#search">• {_('With Search')}</a>
              <a class="block tx-t-1" href="#enhanced">• {_('Enhanced Features')}</a>
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

          <a name="select"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Select Field')}</h1>
          <ide-app title="Select Field" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Select from '@stackpress/ink-ui/field/select';
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
              <table-col>{_('Initial value(s); string for single, array for multiple')}</table-col>
            </table-row>
            <table-row>
              <table-col>placeholder</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text when no option is selected (default: "Choose Option")')}</table-col>
            </table-row>
            <table-row>
              <table-col>custom</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables adding custom options via input')}</table-col>
            </table-row>
            <table-row>
              <table-col>search</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Enables search filtering of options')}</table-col>
            </table-row>
            <table-row>
              <table-col>multiple</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Allows multiple selections (assumed supported)')}</table-col>
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
              <table-col>{_('Callback on search input change')}</table-col>
            </table-row>
            <table-row>
              <table-col>select</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback when an option is selected')}</table-col>
            </table-row>
            <table-row>
              <table-col>remove</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback when an option is removed')}</table-col>
            </table-row>
            <table-row>
              <table-col>add</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback when a custom option is added')}</table-col>
            </table-row>
            <table-row>
              <table-col>clear</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback when selections are cleared')}</table-col>
            </table-row>
            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback on selection change')}</table-col>
            </table-row>
            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback with updated value(s)')}</table-col>
            </table-row>
            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom CSS classes for the host element')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A simple single-select dropdown with options.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-select name="color">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </field-select>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-select name="color">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </field-select>
          `}</ide-code>

          <a name="search"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('With Search')}</h2>
          <div class="mb-10">A select field with search and multiple selection.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-select 
              name="fruits" 
              value='["apple", "banana"]' 
              search 
              multiple 
              filter={(e) => console.log('Filter:', e.target.value)}
            >
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
              <option value="grape">Grape</option>
            </field-select>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-select 
              name="fruits" 
              value='["apple", "banana"]' 
              search 
              multiple 
              filter={(e) => console.log('Filter:', e.target.value)}
            >
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
              <option value="grape">Grape</option>
            </field-select>
          `}</ide-code>

          <a name="enhanced"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Enhanced Features')}</h2>
          <div class="mb-10">A select field with search, custom input, multiple selection, and event handlers.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-select  
              class="w-200 relative z-1"
              name="select"
              placeholder="Choose" 
              value="1"
              search
              custom
              multiple
              open={(e) => console.log('Open:', e)}
              close={(e) => console.log('Close:', e)}
              filter={(e) => console.log('Filter:', e)}
              select={(e) => console.log('Select:', e)}
              remove={(e) => console.log('Remove:', e)}
              add={(e) => console.log('Add:', e)}
              clear={(e) => console.log('Clear:', e)}
              change={(e) => console.log('Change:', e)}
              update={(e) => console.log('Update:', e)}
            >
              <option value="1" keyword="option 1">Option 1</option>
              <option value="4" keyword="option 2"><strong>Option 2</strong></option>
              <option value="3" keyword="option 3">Option 3</option>
              <option value="2" keyword="option 4">Option 4</option>
            </field-select>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-select  
              class="w-200 relative z-1"
              name="select"
              placeholder="Choose" 
              value="1"
              search
              custom
              multiple
              open={(e) => console.log('Open:', e)}
              close={(e) => console.log('Close:', e)}
              filter={(e) => console.log('Filter:', e)}
              select={(e) => console.log('Select:', e)}
              remove={(e) => console.log('Remove:', e)}
              add={(e) => console.log('Add:', e)}
              clear={(e) => console.log('Clear:', e)}
              change={(e) => console.log('Change:', e)}
              update={(e) => console.log('Update:', e)}
            >
              <option value="1" keyword="option 1">Option 1</option>
              <option value="4" keyword="option 2"><strong>Option 2</strong></option>
              <option value="3" keyword="option 3">Option 3</option>
              <option value="2" keyword="option 4">Option 4</option>
            </field-select>
          `}</ide-code>

 <!-- Styled Select Input -->
          <a name="styledSelect"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Select Input')}</h2>
          <div class="mb-10">{_('A styled select input with custom options, styling, and hover effects using Ink utilities.')}</div>
          <div class="basis-third lg-basis-half md-basis-full mb-20">
            <div class="bg-t-3 p-10 flex flex-col items-center justify-center">
              <field-select 
                name="category" 
                placeholder="Select Category" 
                custom 
                class="w-200 p-5 b-solid b-t-2 c-5 bg-white tx-t-1 transition-300 hover:b-primary hover:shadow-0-2-8-t-3" 
                style="cursor: pointer;"
              >
                <option value="tech">Technology</option>
                <option value="sports">Sports</option>
                <option value="music">Music</option>
              </field-select>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" trim detab={4}>{`
            <field-select 
              name="category" 
              placeholder="Select Category" 
              custom 
              class="w-200 p-5 b-solid b-t-2 c-5 bg-white tx-t-1 transition-300 hover:b-primary hover:shadow-0-2-8-t-3" 
              style="cursor: pointer;"
            >
              <option value="tech">Technology</option>
              <option value="sports">Sports</option>
              <option value="music">Music</option>
            </field-select>
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/rating.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Rating Field')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/slug.html">
              {_('Slug Field')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>