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
<link rel="import" type="component" href="@stackpress/ink-ui/field/metadata.ink" name="field-metadata" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/field/metadata.html';
  const title = _('Ink UI - Metadata Field');
  const description = _('A key-value pair input field for metadata with dynamic rows.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Metadata Field' }
  ];

  const initialMetadata = { "title": "Home", "description": "Welcome page" };
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
            <a class="block tx-t-0" href="#metadata">{_('Metadata Field')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#initial">• {_('Initial Values')}</a>
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

          <a name="metadata"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Metadata Field')}</h1>
          <ide-app title="Metadata Field" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Metadata from '@stackpress/ink-ui/field/metadata';
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
              <table-col>{_('Base name for form submission (e.g., "metadata[key]")')}</table-col>
            </table-row>
            <table-row>
              <table-col>value</table-col>
              <table-col>Object</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial key-value pairs (default: {})')}</table-col>
            </table-row>
            <table-row>
              <table-col>add</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text for the add button (default: "Add")')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A simple metadata field with default add button.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-metadata 
              name="basic-metadata" 
              class="w-250"
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-metadata 
              name="basic-metadata" 
              class="w-250"
            />
          `}</ide-code>

          <a name="initial"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Initial Values')}</h2>
          <div class="mb-10">Metadata field with preloaded key-value pairs.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-metadata 
              name="initial-metadata" 
              class="w-250"
              value={{"title": "Home", "description": "Welcome page"}}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-metadata 
              name="initial-metadata" 
              class="w-250"
              value={{"title": "Home", "description": "Welcome page"}}
            />
          `}</ide-code>

          <a name="custom"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Styling')}</h2>
          <div class="mb-10">Metadata field with custom styling, placeholder, and update callback.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-metadata 
              class="w-250 b-solid b-primary rounded"
              name="custom-metadata" 
              placeholder="Enter text" 
              value={initialMetadata} 
              add="Add New"
              update={(value) => console.log('Updated metadata:', value)}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <script>
              const initialMetadata = { "title": "Home", "description": "Welcome page" };
            </script>
            <field-metadata 
              class="w-250 b-solid b-primary rounded"
              name="custom-metadata" 
              placeholder="Enter text" 
              value={initialMetadata} 
              add="Add New"
              update={(value) => console.log('Updated metadata:', value)}
            />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/mask.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Mask Field')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/number.html">
              {_('Number Field')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>