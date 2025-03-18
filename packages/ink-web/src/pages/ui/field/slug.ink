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
<link rel="import" type="component" href="@stackpress/ink-ui/field/slug.ink" name="field-slug" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/field/slug.html';
  const title = _('Ink UI - Slug Field');
  const description = _('A text input field that transforms input into a slug format.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Slug Field' }
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
            <a class="block tx-t-0" href="#slug">{_('Slug Field')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#states">• {_('States')}</a>
              <a class="block tx-t-1" href="#formats">• {_('Slug Formats')}</a>
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

          <a name="slug"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Slug Field')}</h1>
          <ide-app title="Slug Field" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Slug from '@stackpress/ink-ui/field/slug';
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
              <table-col>{_('Regex pattern for input validation')}</table-col>
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
              <table-col>{_('Initial value, transformed to slug format')}</table-col>
            </table-row>
            <table-row>
              <table-col>dash</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Uses dashes instead of underscores in slugs')}</table-col>
            </table-row>
            <table-row>
              <table-col>line</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Preserves underscores in slugs')}</table-col>
            </table-row>
            <table-row>
              <table-col>camel</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Transforms to camelCase instead of slug format')}</table-col>
            </table-row>
            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback on input change event')}</table-col>
            </table-row>
            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback with transformed slug value')}</table-col>
            </table-row>
            <table-row>
              <table-col>placeholder</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Placeholder text for the input')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A simple slug field with a placeholder.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-slug name="slug" placeholder="Enter slug" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-slug name="slug" placeholder="Enter slug" />
          `}</ide-code>

          <a name="states"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('States')}</h2>
          <div class="mb-10">Slug field with different states.</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20">
            <field-slug name="valued" value="I AM A SLUG" placeholder="Default" />
            <field-slug name="required" required placeholder="Required" />
            <field-slug name="disabled" disabled placeholder="Disabled" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-slug name="valued" value="I AM A SLUG" placeholder="Default" />
            <field-slug name="required" required placeholder="Required" />
            <field-slug name="disabled" disabled placeholder="Disabled" />
          `}</ide-code>

          <a name="formats"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Slug Formats')}</h2>
          <div class="mb-10">Slug field with different transformation formats: dash, line, and camel.</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20">
            <field-slug name="dash-slug" value="I AM A SLUG" dash placeholder="Dash (i-am-a-slug)" />
            <field-slug name="line-slug" value="I AM A SLUG" line placeholder="Line (i_am_a_slug)" />
            <field-slug name="camel-slug" value="I AM A SLUG" camel placeholder="Camel (iAmASlug)" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-slug name="dash-slug" value="I AM A SLUG" dash placeholder="Dash (i-am-a-slug)" />
            <field-slug name="line-slug" value="I AM A SLUG" line placeholder="Line (i_am_a_slug)" />
            <field-slug name="camel-slug" value="I AM A SLUG" camel placeholder="Camel (iAmASlug)" />
          `}</ide-code>

          <a name="custom"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Styling')}</h2>
          <div class="mb-10">Slug field with custom styling, initial value, and update callback.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-slug 
              name="custom-slug" 
              placeholder="Enter slug" 
              value="I AM A SLUG" 
              dash
              class="p-5 b-solid b-t-2 tx-t-1 bg-white"
              update={(value) => console.log('Slug updated:', value)}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-slug 
              name="custom-slug" 
              placeholder="Enter slug" 
              value="I AM A SLUG" 
              dash
              class="p-5 b-solid b-t-2 tx-t-1 bg-white"
              update={(value) => console.log('Slug updated:', value)}
            />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/select.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Select Field')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/switch.html">
              {_('Switch Field')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>