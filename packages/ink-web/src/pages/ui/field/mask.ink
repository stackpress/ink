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
<link rel="import" type="component" href="@stackpress/ink-ui/field/mask.ink" name="field-mask" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/field/mask.html';
  const title = _('Ink UI - Mask Field');
  const description = _('A masked input field using Inputmask for formatted input.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Mask Field' }
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
            <a class="block tx-t-0" href="#mask">{_('Mask Field')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#custom-mask">• {_('Custom Mask')}</a>
              <a class="block tx-t-1" href="#alias">• {_('Alias Mask')}</a>
              <a class="block tx-t-1" href="#numeric">• {_('Numeric Input')}</a>
              <a class="block tx-t-1" href="#alignment">• {_('Right Alignment')}</a>
              <a class="block tx-t-1" href="#repeat">• {_('Repeated Mask')}</a>
              <a class="block tx-t-1" href="#styling">• {_('Styling')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="mask"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Mask Field')}</h1>
          <ide-app title="Mask Field" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Mask from '@stackpress/ink-ui/field/mask';
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
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial value')}</table-col>
            </table-row>
            <table-row>
              <table-col>mask</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Mask pattern (e.g., "999-999-9999")')}</table-col>
            </table-row>
            <table-row>
              <table-col>regex</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Regex pattern for mask (alternative to mask)')}</table-col>
            </table-row>
            <table-row>
              <table-col>alias</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Predefined mask alias (e.g., "phone", "email")')}</table-col>
            </table-row>
            <table-row>
              <table-col>repeat</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Number of times to repeat mask')}</table-col>
            </table-row>
            <table-row>
              <table-col>greedy</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Greedy masking behavior')}</table-col>
            </table-row>
            <table-row>
              <table-col>numericInput</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Forces numeric input')}</table-col>
            </table-row>
            <table-row>
              <table-col>rightAlign</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Aligns input to the right')}</table-col>
            </table-row>
            <table-row>
              <table-col>definitions</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom mask definitions')}</table-col>
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
              <table-col>{_('Callback for value updates')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A simple masked input for a phone number.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-mask 
              name="phone" 
              mask="999-999-9999" 
              placeholder="999-999-9999" 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-mask 
              name="phone" 
              mask="999-999-9999" 
              placeholder="999-999-9999" 
            />
          `}</ide-code>

          <a name="custom-mask"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Mask')}</h2>
          <div class="mb-10">Masked input with a custom date format and numeric input.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-mask 
              name="date" 
              mask="99/99/9999" 
              placeholder="MM/DD/YYYY" 
              numericInput={true}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-mask 
              name="date" 
              mask="99/99/9999" 
              placeholder="MM/DD/YYYY" 
              numericInput={true}
            />
          `}</ide-code>

          <a name="alias"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Alias Mask')}</h2>
          <div class="mb-10">Masked input using a predefined alias for email.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-mask 
              name="email" 
              alias="email" 
              placeholder="user@domain.com" 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-mask 
              name="email" 
              alias="email" 
              placeholder="user@domain.com" 
            />
          `}</ide-code>

          <a name="numeric"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Numeric Input')}</h2>
          <div class="mb-10">Masked input restricted to numbers with a disabled state.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-mask 
              name="numeric" 
              mask="9999-9999" 
              numericInput={true} 
              placeholder="1234-5678" 
              disabled={true}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-mask 
              name="numeric" 
              mask="9999-9999" 
              numericInput={true} 
              placeholder="1234-5678" 
              disabled={true}
            />
          `}</ide-code>

          <a name="alignment"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Right Alignment')}</h2>
          <div class="mb-10">Masked input aligned to the right with a currency mask.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-mask 
              name="currency" 
              mask="$ 999.99" 
              placeholder="$ 123.45" 
              rightAlign={true} 
              numericInput={true}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-mask 
              name="currency" 
              mask="$ 999.99" 
              placeholder="$ 123.45" 
              rightAlign={true} 
              numericInput={true}
            />
          `}</ide-code>

          <a name="repeat"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Repeated Mask')}</h2>
          <div class="mb-10">Masked input with a repeating pattern and greedy behavior.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-mask 
              name="repeat" 
              mask="9" 
              repeat={5} 
              greedy={true} 
              placeholder="12345" 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-mask 
              name="repeat" 
              mask="9" 
              repeat={5} 
              greedy={true} 
              placeholder="12345" 
            />
          `}</ide-code>

          <a name="styling"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styling')}</h2>
          <div class="mb-10">Masked input with custom styling and change callback.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-mask 
              name="custom-phone" 
              mask="(999) 999-9999" 
              placeholder="(999) 999-9999" 
              class="w-200 rounded b-solid b-primary p-5"
              change={(e) => console.log('Changed to:', e.target.value)}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-mask 
              name="custom-phone" 
              mask="(999) 999-9999" 
              placeholder="(999) 999-9999" 
              class="w-200 rounded b-solid b-primary p-5"
              change={(e) => console.log('Changed to:', e.target.value)}
            />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/markdown.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Markdown Field')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/metadata.html">
              {_('Metadata Field')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>