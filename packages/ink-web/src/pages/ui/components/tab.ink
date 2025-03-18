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
<link rel="import" type="component" href="@stackpress/ink-ui/element/tab.ink" name="element-tab" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/components/tab.html';
  const title = _('Ink UI - Tab Component');
  const description = _('A tab component for switching between content sections.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Components', href: '/ink/ui/index.html' },
    { label: 'Tab' }
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
            <a class="block tx-t-0" href="#tab">{_('Tab')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#styling">• {_('Styling')}</a>
              <a class="block tx-t-1" href="#multiple">• {_('Multiple Groups')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="tab"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Tab')}</h1>
          <ide-app title="Tab" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Tab from '@stackpress/ink-ui/element/tab';
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
              <table-col>group</table-col>
              <table-col>String</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('Groups tabs together; only one tab per group can be active')}</table-col>
            </table-row>
            <table-row>
              <table-col>selector</table-col>
              <table-col>String</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('CSS selector for content to show/hide (e.g., "#content-id")')}</table-col>
            </table-row>
            <table-row>
              <table-col>active</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Space-separated classes for active state (default: "")')}</table-col>
            </table-row>
            <table-row>
              <table-col>inactive</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Space-separated classes for inactive state (default: "")')}</table-col>
            </table-row>
            <table-row>
              <table-col>on</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets tab as initially active')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">Basic tab setup with content switching.</div>
          <div class="bg-t-3 p-10 mb-10">
            <div class="flex">
              <element-tab group="basic" selector="#tab1-content" on class="p-10">Tab 1</element-tab>
              <element-tab group="basic" selector="#tab2-content" class="p-10">Tab 2</element-tab>
            </div>
            <div id="tab1-content" class="p-10 bg-t-1">Content for Tab 1</div>
            <div id="tab2-content" class="p-10 bg-t-1" style="display: none;">Content for Tab 2</div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <div class="flex">
              <element-tab group="basic" selector="#tab1-content" on class="p-10">Tab 1</element-tab>
              <element-tab group="basic" selector="#tab2-content" class="p-10">Tab 2</element-tab>
            </div>
            <div id="tab1-content" class="p-10 bg-t-1">Content for Tab 1</div>
            <div id="tab2-content" class="p-10 bg-t-1" style="display: none;">Content for Tab 2</div>
          `}</ide-code>

          <a name="styling"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styling')}</h2>
          <div class="mb-10">Customize active and inactive states with classes.</div>
          <div class="bg-t-3 p-10 mb-10">
            <div class="flex">
              <element-tab 
                on
                class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                active="bg-black tx-white"
                inactive="bg-t-1 tx-muted"  
                group="styled" 
                selector="#styled-tab1"
              >Tab 1</element-tab>
              <element-tab 
                class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                active="bg-black tx-white"
                inactive="bg-t-1 tx-muted"  
                group="styled" 
                selector="#styled-tab2"
              >Tab 2</element-tab>
              <element-tab 
                class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                active="bg-black tx-white"
                inactive="bg-t-1 tx-muted"  
                group="styled" 
                selector="#styled-tab3"
              >Tab 3</element-tab>
            </div>
            <div id="styled-tab1" class="p-10 bg-t-1">Content for Tab 1</div>
            <div id="styled-tab2" class="p-10 bg-t-1" style="display: none;">Content for Tab 2</div>
            <div id="styled-tab3" class="p-10 bg-t-1" style="display: none;">Content for Tab 3</div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <div class="flex">
              <element-tab 
                on
                class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                active="bg-black tx-white"
                inactive="bg-t-1 tx-muted"  
                group="styled" 
                selector="#styled-tab1"
              >Tab 1</element-tab>
              <element-tab 
                class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                active="bg-black tx-white"
                inactive="bg-t-1 tx-muted"  
                group="styled" 
                selector="#styled-tab2"
              >Tab 2</element-tab>
              <element-tab 
                class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                active="bg-black tx-white"
                inactive="bg-t-1 tx-muted"  
                group="styled" 
                selector="#styled-tab3"
              >Tab 3</element-tab>
            </div>
            <div id="styled-tab1" class="p-10 bg-t-1">Content for Tab 1</div>
            <div id="styled-tab2" class="p-10 bg-t-1" style="display: none;">Content for Tab 2</div>
            <div id="styled-tab3" class="p-10 bg-t-1" style="display: none;">Content for Tab 3</div>
          `}</ide-code>

          <a name="multiple"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Multiple Groups')}</h2>
          <div class="mb-10">Use different groups to manage separate tab sets.</div>
          <div class="bg-t-3 p-10 mb-10">
            <div class="mb-20">
              <div class="flex">
                <element-tab 
                  on
                  class="p-10 bg-t-2 tx-primary mr-5 rounded-t"
                  active="bg-primary tx-white"
                  inactive="bg-t-2 tx-muted"  
                  group="group1" 
                  selector="#group1-tab1"
                >Group 1 - Tab 1</element-tab>
                <element-tab 
                  class="p-10 bg-t-2 tx-primary mr-5 rounded-t"
                  active="bg-primary tx-white"
                  inactive="bg-t-2 tx-muted"  
                  group="group1" 
                  selector="#group1-tab2"
                >Group 1 - Tab 2</element-tab>
              </div>
              <div id="group1-tab1" class="p-10 bg-t-1">Content for Group 1 - Tab 1</div>
              <div id="group1-tab2" class="p-10 bg-t-1" style="display: none;">Content for Group 1 - Tab 2</div>
            </div>
            <div>
              <div class="flex">
                <element-tab 
                  on
                  class="p-10 bg-t-2 tx-primary mr-5 rounded-t"
                  active="bg-success tx-white"
                  inactive="bg-t-2 tx-muted"  
                  group="group2" 
                  selector="#group2-tab1"
                >Group 2 - Tab 1</element-tab>
                <element-tab 
                  class="p-10 bg-t-2 tx-primary mr-5 rounded-t"
                  active="bg-success tx-white"
                  inactive="bg-t-2 tx-muted"  
                  group="group2" 
                  selector="#group2-tab2"
                >Group 2 - Tab 2</element-tab>
              </div>
              <div id="group2-tab1" class="p-10 bg-t-1">Content for Group 2 - Tab 1</div>
              <div id="group2-tab2" class="p-10 bg-t-1" style="display: none;">Content for Group 2 - Tab 2</div>
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <div class="mb-20">
              <div class="flex">
                <element-tab 
                  on
                  class="p-10 bg-t-2 tx-primary mr-5 rounded-t"
                  active="bg-primary tx-white"
                  inactive="bg-t-2 tx-muted"  
                  group="group1" 
                  selector="#group1-tab1"
                >Group 1 - Tab 1</element-tab>
                <element-tab 
                  class="p-10 bg-t-2 tx-primary mr-5 rounded-t"
                  active="bg-primary tx-white"
                  inactive="bg-t-2 tx-muted"  
                  group="group1" 
                  selector="#group1-tab2"
                >Group 1 - Tab 2</element-tab>
              </div>
              <div id="group1-tab1" class="p-10 bg-t-1">Content for Group 1 - Tab 1</div>
              <div id="group1-tab2" class="p-10 bg-t-1" style="display: none;">Content for Group 1 - Tab 2</div>
            </div>
            <div>
              <div class="flex">
                <element-tab 
                  on
                  class="p-10 bg-t-2 tx-primary mr-5 rounded-t"
                  active="bg-success tx-white"
                  inactive="bg-t-2 tx-muted"  
                  group="group2" 
                  selector="#group2-tab1"
                >Group 2 - Tab 1</element-tab>
                <element-tab 
                  class="p-10 bg-t-2 tx-primary mr-5 rounded-t"
                  active="bg-success tx-white"
                  inactive="bg-t-2 tx-muted"  
                  group="group2" 
                  selector="#group2-tab2"
                >Group 2 - Tab 2</element-tab>
              </div>
              <div id="group2-tab1" class="p-10 bg-t-1">Content for Group 2 - Tab 1</div>
              <div id="group2-tab2" class="p-10 bg-t-1" style="display: none;">Content for Group 2 - Tab 2</div>
            </div>
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/progress.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Progress')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/table.html">
              {_('Tables')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>