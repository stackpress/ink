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
<link rel="import" type="component" href="@stackpress/ink-ui/field/taglist.ink" name="field-taglist" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/field/taglist.html';
  const title = _('Ink UI - Taglist Field');
  const description = _('A field for managing a list of tags with dynamic input and removal.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Taglist Field' }
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
            <a class="block tx-t-0" href="#taglist">{_('Taglist Field')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#states">• {_('States')}</a>
              <a class="block tx-t-1" href="#colors">• {_('Color Variations')}</a>
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

          <a name="taglist"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Taglist Field')}</h1>
          <ide-app title="Taglist Field" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Taglist from '@stackpress/ink-ui/field/taglist';
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
              <table-col>{_('Name attribute for hidden inputs, used in form submission.')}</table-col>
            </table-row>
            <table-row>
              <table-col>value</table-col>
              <table-col>Array | String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial tags. Can be an array or comma-separated string. Defaults to empty array.')}</table-col>
            </table-row>
            <table-row>
              <table-col>placeholder</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Placeholder text for the input field.')}</table-col>
            </table-row>
            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback triggered on input change event.')}</table-col>
            </table-row>
            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback triggered with updated tag list on add/remove.')}</table-col>
            </table-row>
            <table-row>
              <table-col>info</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets tag background to info color (e.g., blue).')}</table-col>
            </table-row>
            <table-row>
              <table-col>warning</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets tag background to warning color (default: yellow).')}</table-col>
            </table-row>
            <table-row>
              <table-col>success</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets tag background to success color (e.g., green).')}</table-col>
            </table-row>
            <table-row>
              <table-col>error</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets tag background to error color (e.g., red).')}</table-col>
            </table-row>
            <table-row>
              <table-col>muted</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets tag background to muted color (e.g., gray).')}</table-col>
            </table-row>
            <table-row>
              <table-col>primary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets tag background to primary color (e.g., blue).')}</table-col>
            </table-row>
            <table-row>
              <table-col>secondary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets tag background to secondary color (e.g., gray).')}</table-col>
            </table-row>
            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom background color for tags (e.g., "#FF0000"). Overrides other color props.')}</table-col>
            </table-row>
            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom CSS classes for the taglist container (e.g., "w-250").')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">{_('A simple taglist with initial values and a placeholder.')}</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-taglist name="taglist" placeholder="Enter Value" value={['foo', 'bar']} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-taglist name="taglist" placeholder="Enter Value" value={['foo', 'bar']} />
          `}</ide-code>

          <a name="states"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('States')}</h2>
          <div class="mb-10">{_('Taglist with different initial states.')}</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20 flex-wrap">
            <field-taglist name="empty" placeholder="No Tags" />
            <field-taglist name="string" placeholder="Comma-separated" value="tag1,tag2" />
            <field-taglist name="array" placeholder="Array" value={['item1', 'item2', 'item3']} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-taglist name="empty" placeholder="No Tags" />
            <field-taglist name="string" placeholder="Comma-separated" value="tag1,tag2" />
            <field-taglist name="array" placeholder="Array" value={['item1', 'item2', 'item3']} />
          `}</ide-code>

          <a name="colors"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Color Variations')}</h2>
          <div class="mb-10">{_('Taglist with different background colors for tags.')}</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-20 flex-wrap">
            <field-taglist name="success" value={['good']} success />
            <field-taglist name="error" value={['bad']} error />
            <field-taglist name="primary" value={['main']} primary />
            <field-taglist name="custom" value={['unique']} color="#8A2BE2" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-taglist name="success" value={['good']} success />
            <field-taglist name="error" value={['bad']} error />
            <field-taglist name="primary" value={['main']} primary />
            <field-taglist name="custom" value={['unique']} color="#8A2BE2" />
          `}</ide-code>

          <a name="custom"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Styling')}</h2>
          <div class="mb-10">{_('Taglist with custom width, initial values, and update callback.')}</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-taglist 
              name="custom" 
              class="w-250" 
              placeholder="Enter Value" 
              value={['foo', 'bar']} 
              primary
              update={(tags) => console.log('Tags updated:', tags)}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-taglist 
              name="custom" 
              class="w-250" 
              placeholder="Enter Value" 
              value={['foo', 'bar']} 
              primary
              update={(tags) => console.log('Tags updated:', tags)}
            />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/switch.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Switch Field')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/textarea.html">
              {_('Textarea Field')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>