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
<link rel="import" type="component" href="@stackpress/ink-ui/field/radio.ink" name="field-radio" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/field/radio.html';
  const title = _('Ink UI - Radio Field');
  const description = _('A radio button input with customizable label, shape, and style.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Radio Field' }
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
            <a class="block tx-t-0" href="#radio">{_('Radio Field')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#simple">• {_('Simple Radio')}</a>
              <a class="block tx-t-1" href="#group">• {_('Styled Group')}</a>
              <a class="block tx-t-1" href="#disabled">• {_('Disabled and Readonly')}</a>
              <a class="block tx-t-1" href="#required">• {_('Required Group')}</a>
              <a class="block tx-t-1" href="#styled">• {_('Styled Radio Button')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="radio"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Radio Field')}</h1>
          <ide-app title="Radio Field" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Radio from '@stackpress/ink-ui/field/radio';
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
              <table-col>{_('Initial checked state')}</table-col>
            </table-row>
            <table-row>
              <table-col>disabled</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Disables the radio')}</table-col>
            </table-row>
            <table-row>
              <table-col>name</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Name attribute for form submission and grouping')}</table-col>
            </table-row>
            <table-row>
              <table-col>readonly</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Prevents changing the radio state')}</table-col>
            </table-row>
            <table-row>
              <table-col>required</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Marks the radio group as required in a form')}</table-col>
            </table-row>
            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Value of the radio option')}</table-col>
            </table-row>
            <table-row>
              <table-col>label</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text label for the radio (default: "")')}</table-col>
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
              <table-col>{_('Callback with updated value')}</table-col>
            </table-row>
          </layout-table>

          <a name="simple"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Simple Radio')}</h2>
          <div class="mb-10">A basic radio button with a square shape.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-radio 
              name="simple-radio" 
              label="Agree" 
              value="agree"
              style="border-radius: 0;"
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-radio 
              name="simple-radio" 
              label=" Agree" 
              value="agree"
              style="border-radius: 0;"
            />
          `}</ide-code>

          <a name="group"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Group')}</h2>
          <div class="mb-10">A group of radio buttons with rounded shapes, spacing, and update callback.</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20">
            <field-radio 
              name="group-radio" 
              label="Yes" 
              value="yes" 
              checked
              rounded
              class="p-5"
              update={(value) => console.log('Selected:', value)}
            />
            <field-radio 
              name="group-radio" 
              label="No" 
              value="no"
              rounded
              class="p-5"
              update={(value) => console.log('Selected:', value)}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-radio 
              name="group-radio" 
              label="Yes" 
              value="yes" 
              checked
              rounded
              class="p-5"
              update={(value) => console.log('Selected:', value)}
            />
            <field-radio 
              name="group-radio" 
              label="No" 
              value="no"
              rounded
              class="p-5"
              update={(value) => console.log('Selected:', value)}
            />
          `}</ide-code>

          <a name="disabled"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Disabled and Readonly')}</h2>
          <div class="mb-10">Radio buttons demonstrating disabled and readonly states.</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20">
            <field-radio 
              name="state-radio" 
              label="Enabled" 
              value="enabled" 
              checked
            />
            <field-radio 
              name="state-radio" 
              label="Disabled" 
              value="disabled"
              disabled
            />
            <field-radio 
              name="state-radio" 
              label="Readonly" 
              value="readonly"
              readonly
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-radio 
              name="state-radio" 
              label="Enabled" 
              value="enabled" 
              checked
            />
            <field-radio 
              name="state-radio" 
              label="Disabled" 
              value="disabled"
              disabled
            />
            <field-radio 
              name="state-radio" 
              label="Readonly" 
              value="readonly"
              readonly
            />
          `}</ide-code>

          <a name="required"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Required Group')}</h2>
          <div class="mb-10">A group of radio buttons marked as required.</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20">
            <field-radio 
              name="required-radio" 
              label="Option A" 
              value="a" 
              required
            />
            <field-radio 
              name="required-radio" 
              label="Option B" 
              value="b"
              required
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-radio 
              name="required-radio" 
              label="Option A" 
              value="a" 
              required
            />
            <field-radio 
              name="required-radio" 
              label="Option B" 
              value="b"
              required
            />
          `}</ide-code>

          <a name="styled"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Radio Button')}</h2>
          <div class="mb-10">A styled radio group with custom class and style props, including hover effects.</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20">
            <field-radio 
              name="styled-radio" 
              value="yes" 
              label="Yes" 
              class="flex align-center gap-10 w-200 p-10 rounded-8 bg-white tx-t-1 b-solid b-t-1 transition-all duration-300 hover:b-primary hover:shadow-2" 
              style="border-color: var(--t-2); transition: border-color 0.3s ease, box-shadow 0.3s ease;"
              onmouseover="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 4px 12px var(--t-2)'" 
              onmouseout="this.style.borderColor='var(--t-2)'; this.style.boxShadow='none'" 
            />
            <field-radio 
              name="styled-radio" 
              value="no" 
              label="No" 
              class="flex align-center gap-10 w-200 p-10 rounded-8 bg-white tx-t-1 b-solid b-t-1 transition-all duration-300 hover:b-primary hover:shadow-2" 
              style="border-color: var(--t-2); transition: border-color 0.3s ease, box-shadow 0.3s ease;"
              onmouseover="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 4px 12px var(--t-2)'" 
              onmouseout="this.style.borderColor='var(--t-2)'; this.style.boxShadow='none'" 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-radio 
              name="styled-radio" 
              value="yes" 
              label="Yes" 
              class="flex align-center gap-10 w-200 p-10 rounded-8 bg-white tx-t-1 b-solid b-t-1 transition-all duration-300 hover:b-primary hover:shadow-2" 
              style="border-color: var(--t-2); transition: border-color 0.3s ease, box-shadow 0.3s ease;"
              onmouseover="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 4px 12px var(--t-2)'" 
              onmouseout="this.style.borderColor='var(--t-2)'; this.style.boxShadow='none'" 
            />
            <field-radio 
              name="styled-radio" 
              value="no" 
              label="No" 
              class="flex align-center gap-10 w-200 p-10 rounded-8 bg-white tx-t-1 b-solid b-t-1 transition-all duration-300 hover:b-primary hover:shadow-2" 
              style="border-color: var(--t-2); transition: border-color 0.3s ease, box-shadow 0.3s ease;"
              onmouseover="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 4px 12px var(--t-2)'" 
              onmouseout="this.style.borderColor='var(--t-2)'; this.style.boxShadow='none'" 
            />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/password.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Password Field')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/range.html">
              {_('Range Field')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>