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
<link rel="import" type="component" href="@stackpress/ink-ui/field/switch.ink" name="field-switch" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/field/switch.html';
  const title = _('Ink UI - Switch Field');
  const description = _('A customizable toggle switch field for boolean inputs.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Switch Field' }
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
            <a class="block tx-t-0" href="#switch">{_('Switch Field')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#states">• {_('States')}</a>
              <a class="block tx-t-1" href="#styles">• {_('Styles')}</a>
              <a class="block tx-t-1" href="#variations">• {_('Variations')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="switch"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Switch Field')}</h1>
          <ide-app title="Switch Field" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Switch from '@stackpress/ink-ui/field/switch';
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
              <table-col>checked</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets the switch to checked state initially.')}</table-col>
            </table-row>
            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Disables the switch.')}</table-col>
            </table-row>
            <table-row>
              <table-col>name</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Name attribute for form submission.')}</table-col>
            </table-row>
            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the switch read-only.')}</table-col>
            </table-row>
            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Marks the switch as required in a form.')}</table-col>
            </table-row>
            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Value submitted when checked.')}</table-col>
            </table-row>
            <table-row>
              <table-col>label</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text displayed next to the switch. Defaults to empty string.')}</table-col>
            </table-row>
            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback triggered on switch change event.')}</table-col>
            </table-row>
            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback triggered with the switch value on change.')}</table-col>
            </table-row>
            <table-row>
              <table-col>onoff</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Displays "ON" and "OFF" in the switch.')}</table-col>
            </table-row>
            <table-row>
              <table-col>yesno</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Displays "YES" and "NO" in the switch.')}</table-col>
            </table-row>
            <table-row>
              <table-col>checkex</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Displays check (✓) and cross (✖) symbols in the switch.')}</table-col>
            </table-row>
            <table-row>
              <table-col>sunmoon</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Displays sun (☼) and moon (☽) symbols in the switch.')}</table-col>
            </table-row>
            <table-row>
              <table-col>rounded</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Rounds the switch track and thumb.')}</table-col>
            </table-row>
            <table-row>
              <table-col>ridge</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds ridges ("|||") to the switch thumb.')}</table-col>
            </table-row>
            <table-row>
              <table-col>smooth</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes the switch thumb smooth (no content).')}</table-col>
            </table-row>
            <table-row>
              <table-col>blue</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies a blue color scheme to the switch.')}</table-col>
            </table-row>
            <table-row>
              <table-col>orange</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies an orange color scheme to the switch.')}</table-col>
            </table-row>
            <table-row>
              <table-col>green</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies a green color scheme to the switch.')}</table-col>
            </table-row>
            <table-row>
              <table-col>error</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Indicates an error state (not styled by default).')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">{_('A simple switch with a label and default styling.')}</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-switch name="switch" label="Active?" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-switch name="switch" label="Active?" />
          `}</ide-code>

          <a name="states"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('States')}</h2>
          <div class="mb-10">{_('Switch field with different states.')}</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20">
            <field-switch name="checked" label="Checked" checked />
            <field-switch name="disabled" label="Disabled" disabled />
            <field-switch name="required" label="Required" required />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-switch name="checked" label="Checked" checked />
            <field-switch name="disabled" label="Disabled" disabled />
            <field-switch name="required" label="Required" required />
          `}</ide-code>

          <a name="styles"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styles')}</h2>
          <div class="mb-10">{_('Switch field with different styling options.')}</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20">
            <field-switch name="rounded" label="Rounded" rounded />
            <field-switch name="ridge" label="Ridge" ridge />
            <field-switch name="smooth" label="Smooth" smooth />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-switch name="rounded" label="Rounded" rounded />
            <field-switch name="ridge" label="Ridge" ridge />
            <field-switch name="smooth" label="Smooth" smooth />
          `}</ide-code>

          <a name="variations"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Variations')}</h2>
          <div class="mb-10">{_('Switch field with different text/symbols and colors.')}</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20 flex-wrap">
            <field-switch name="onoff" label="On/Off" onoff green />
            <field-switch name="yesno" label="Yes/No" yesno orange />
            <field-switch name="checkex" label="Check/Ex" checkex blue />
            <field-switch name="sunmoon" label="Sun/Moon" sunmoon />
            <field-switch 
              name="custom" 
              label="Custom" 
              value="yes" 
              checked 
              rounded 
              green 
              update={(value) => console.log('Switch updated:', value)}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-switch name="onoff" label="On/Off" onoff green />
            <field-switch name="yesno" label="Yes/No" yesno orange />
            <field-switch name="checkex" label="Check/Ex" checkex blue />
            <field-switch name="sunmoon" label="Sun/Moon" sunmoon />
            <field-switch 
              name="custom" 
              label="Custom" 
              value="yes" 
              checked 
              rounded 
              green 
              update={(value) => console.log('Switch updated:', value)}
            />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/slug.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Slug Field')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/taglist.html">
              {_('Taglist Field')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>