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
<link rel="import" type="component" href="@stackpress/ink-ui/field/checkbox.ink" name="field-checkbox" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/field/checkbox.html';
  const title = _('Ink UI - Checkbox Field');
  const description = _('A customizable checkbox field with label and state management.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Checkbox Field' }
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
            <a class="block tx-t-0" href="#checkbox">{_('Checkbox Field')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#states">• {_('States')}</a>
              <a class="block tx-t-1" href="#shape">• {_('Shape')}</a>
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

          <a name="checkbox"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Checkbox Field')}</h1>
          <ide-app title="Checkbox Field" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Checkbox from '@stackpress/ink-ui/field/checkbox';
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
              <table-col>{_('Name attribute for the checkbox')}</table-col>
            </table-row>
            <table-row>
              <table-col>label</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text displayed next to the checkbox (default: "")')}</table-col>
            </table-row>
            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Value attribute when checked')}</table-col>
            </table-row>
            <table-row>
              <table-col>checked</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial checked state')}</table-col>
            </table-row>
            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Disables the checkbox')}</table-col>
            </table-row>
            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the checkbox read-only')}</table-col>
            </table-row>
            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Marks the checkbox as required')}</table-col>
            </table-row>
            <table-row>
              <table-col>white</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets checkbox color to var(--white)')}</table-col>
            </table-row>
            <table-row>
              <table-col>black</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets checkbox color to var(--black)')}</table-col>
            </table-row>
            <table-row>
              <table-col>info</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets checkbox color to var(--info)')}</table-col>
            </table-row>
            <table-row>
              <table-col>warning</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets checkbox color to var(--warning)')}</table-col>
            </table-row>
            <table-row>
              <table-col>success</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets checkbox color to var(--success)')}</table-col>
            </table-row>
            <table-row>
              <table-col>error</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets checkbox color to var(--error)')}</table-col>
            </table-row>
            <table-row>
              <table-col>muted</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets checkbox color to var(--muted)')}</table-col>
            </table-row>
            <table-row>
              <table-col>primary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets checkbox color to var(--primary)')}</table-col>
            </table-row>
            <table-row>
              <table-col>secondary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets checkbox color to var(--secondary)')}</table-col>
            </table-row>
            <table-row>
              <table-col>orange</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets checkbox color to orange (custom utility)')}</table-col>
            </table-row>
            <table-row>
              <table-col>rounded</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets checkbox to a rounded square shape')}</table-col>
            </table-row>
            <table-row>
              <table-col>circle</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets checkbox to a circular shape')}</table-col>
            </table-row>
            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback function on change (receives event)')}</table-col>
            </table-row>
            <table-row>
              <table-col>click</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom click handler')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A simple checkbox with a label.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-checkbox name="basic" label="Agree to terms" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-checkbox name="basic" label=" Agree to terms" />
          `}</ide-code>

          <a name="states"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('States')}</h2>
          <div class="mb-10">Checkbox with different states: checked, disabled, required.</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20">
            <field-checkbox name="checked" label="Checked" value="yes" checked />
            <field-checkbox name="disabled" label="Disabled" disabled />
            <field-checkbox name="required" label="Required" required />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-checkbox name="checked" label="Checked" value="yes" checked />
            <field-checkbox name="disabled" label="Disabled" disabled />
            <field-checkbox name="required" label="Required" required />
          `}</ide-code>

          <a name="shape"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Shape')}</h2>
          <div class="mb-10">Checkbox with different shapes: default (square), rounded, circle.</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20">
            <field-checkbox name="square" label="Checked" value="yes" checked />
            <field-checkbox name="rounded" label="Rounded" value="yes" rounded circle/>
            <field-checkbox name="circle" label="Square" value="yes" square />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-checkbox name="square" label="Checked" value="yes" checked />
            <field-checkbox name="rounded" label="Rounded" value="yes" rounded circle/>
            <field-checkbox name="circle" label="Square" value="yes" square />
          `}</ide-code>

          <a name="custom"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Styling')}</h2>
          <div class="mb-10">Checkbox with custom color and update callback.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-checkbox 
              name="custom" 
              label="Active?" 
              value="yes" 
              checked 
              orange
              update={(e) => console.log('Checkbox changed:', e.target.checked)}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-checkbox 
              name="custom" 
              label="Active?" 
              value="yes" 
              checked 
              orange
              update={(e) => console.log('Checkbox changed:', e.target.checked)}
            />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/form/fieldset.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Fieldset')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/color.html">
              {_('Color Field')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>