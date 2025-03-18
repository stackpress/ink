<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@/components/api/docs.ink" name="api-docs" />
<link rel="import" type="component" href="@/components/ide/app.ink" name="ide-app" />
<link rel="import" type="component" href="@/components/ide/code.ink" name="ide-code" />
<link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/alert.ink" name="element-alert" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="element-icon" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/crumbs.ink" name="element-crumbs" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table.ink" name="layout-table" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/head.ink" name="table-head" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/row.ink" name="table-row" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/col.ink" name="table-col" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/badge.ink" name="element-badge" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>
<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/panel.html';
  const title = _('Ink UI - Panel Component');
  const description = _('Ink UI atomically generates CSS styles and provides out of box web components.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Components', href: '/ink/ui/index.html' },
    { label: 'Panel' }
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
          <h6 class="tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper">
            {_('On this page')}
          </h6>
          <nav class="tx-14 tx-lh-32">
            <a class="block tx-t-0" href="#pager">{_('Panel')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#BasicPanelLayout">• {_('Basic Panel Layout')}</a>
              <a class="block tx-t-1" href="#PanelLayoutWithFooter">• {_('Panel Layout with Footer')}</a>
              <a class="block tx-t-1" href="#CenteredPanelLayout">• {_('Centered Panel Layout')}</a>
              <a class="block tx-t-1" href="#StickyHeader&Footer">• {_('Sticky Header & Footer')}</a>
              
            </nav>
          </nav>
        </menu>
      </aside>



      <main>
      <api-docs>
        <nav class="p-10 bg-t-3 sticky top-0 z-50">
          <element-crumbs 
            crumbs={crumbs} 
            block 
            bold 
            white 
            sep-muted
            link-primary
            spacing={2}
          />
      </nav>


        
        <a name="pager"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">
            {_(' Panel')}
          </h1>
          <ide-app title="Editor" class="py-20 ">
            <ide-code class="scroll-y-auto" lang="js" trim>
              import Panel from '@stackpress/ink-ui/element/panel';
            </ide-code>
          </ide-app>
             <a name="slots"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Slots')}</h2>
          <layout-table 
            top 
            head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" 
            body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" 
            odd="bg-t-0" 
            even="bg-t-1"
          >
            <table-head>{_('Slot')}</table-head>
            <table-head>{_('Tag')}</table-head>
            <table-head>{_('Required')}</table-head>
            <table-head>{_('Notes')}</table-head>

            <table-row>
              <table-col>main</table-col>
              <table-col>&lt;main&gt;</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('Main content area (fixed between header/footer and sidebars)')}</table-col>
            </table-row>

            <table-row>
              <table-col>header</table-col>
              <table-col>&lt;header&gt;</table-col>
              <table-col>No</table-col>
              <table-col>{_('Top panel, 60px height, adjusts for left sidebar')}</table-col>
            </table-row>

            <table-row>
              <table-col>footer</table-col>
              <table-col>&lt;footer&gt;</table-col>
              <table-col>No</table-col>
              <table-col>{_('Bottom panel, 60px height, adjusts for left sidebar')}</table-col>
            </table-row>

            <table-row>
              <table-col>left</table-col>
              <table-col>&lt;aside left&gt;</table-col>
              <table-col>No</table-col>
              <table-col>{_('Left sidebar, 226px width, toggleable')}</table-col>
            </table-row>

            <table-row>
              <table-col>right</table-col>
              <table-col>&lt;aside right&gt;</table-col>
              <table-col>No</table-col>
              <table-col>{_('Right sidebar, 200px width, toggleable')}</table-col>
            </table-row>
          </layout-table>

        <a name="BasicPanelLayout"></a>
        <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Panel Layout')}</h2>
        <div class="mb-10">{_('A simple layout with a header, left sidebar, right sidebar, and main content, using absolute positioning:')}</div>

        <div class="basis-half-10 lg-basis-full h-200 bg-t-3 relative">
          <header class="absolute top-0 left-0 right-0 h-50 bg-t-1 b-solid b-muted">
            <div class="p-10">Header</div>
          </header>
          <aside class="absolute top-50 bottom-0 left-0 w-200 bg-t-2 b-solid b-muted">
            <div class="p-10">Left Sidebar</div>
          </aside>
          <aside class="absolute top-50 bottom-0 right-0 w-250 bg-t-2 b-solid b-muted">
            <div class="p-10">Right Sidebar</div>
          </aside>
          <main class="absolute top-50 bottom-0 left-200 right-250 bg-t-0 b-solid b-muted">
            <div class="p-10">Main Content</div>
          </main>
        </div>

        <ide-code class="scroll-y-auto mb-20 w-full max-w-full min-w-full overflow-auto bg-black tx-white" trim detab={12}>{`
          <div class="h-200 bg-t-3 relative">
            <header class="absolute top-0 left-0 right-0 h-50 bg-t-1 b-solid b-muted">
              <div class="p-10">Header</div>
            </header>
            <aside class="absolute top-50 bottom-0 left-0 w-200 bg-t-2 b-solid b-muted">
              <div class="p-10">Left Sidebar</div>
            </aside>
            <aside class="absolute top-50 bottom-0 right-0 w-250 bg-t-2 b-solid b-muted">
              <div class="p-10">Right Sidebar</div>
            </aside>
            <main class="absolute top-50 bottom-0 left-200 right-250 bg-t-0 b-solid b-muted">
              <div class="p-10">Main Content</div>
            </main>
          </div>
        `}</ide-code>

        <a name="PanelLayoutWithFooter"></a>
        <h2 class="tx-primary tx-upper tx-30 py-20">{_('Panel Layout with Footer')}</h2>
        <div class="mb-10">{_('Extends the basic layout by adding a footer at the bottom:')}</div>

        <div class="basis-half-10 lg-basis-full h-300 bg-t-3 relative">
          <header class="absolute top-0 left-0 right-0 h-50 bg-t-1 b-solid b-muted">
            <div class="p-10">Header</div>
          </header>
          <aside class="absolute top-50 bottom-50 left-0 w-200 bg-t-2 b-solid b-muted">
            <div class="p-10">Left Sidebar</div>
          </aside>
          <aside class="absolute top-50 bottom-50 right-0 w-250 bg-t-2 b-solid b-muted">
            <div class="p-10">Right Sidebar</div>
          </aside>
          <main class="absolute top-50 bottom-50 left-200 right-250 bg-t-0 b-solid b-muted">
            <div class="p-10">Main Content</div>
          </main>
          <footer class="absolute bottom-0 left-0 right-0 h-50 bg-t-1 b-solid b-muted">
            <div class="p-10">Footer</div>
          </footer>
        </div>

        <ide-code class="scroll-y-auto mb-20 w-full max-w-full min-w-full overflow-auto bg-black tx-white" trim detab={12}>{`
          <div class="h-300 bg-t-3 relative">
            <header class="absolute top-0 left-0 right-0 h-50 bg-t-1 b-solid b-muted">
              <div class="p-10">Header</div>
            </header>
            <aside class="absolute top-50 bottom-50 left-0 w-200 bg-t-2 b-solid b-muted">
              <div class="p-10">Left Sidebar</div>
            </aside>
            <aside class="absolute top-50 bottom-50 right-0 w-250 bg-t-2 b-solid b-muted">
              <div class="p-10">Right Sidebar</div>
            </aside>
            <main class="absolute top-50 bottom-50 left-200 right-250 bg-t-0 b-solid b-muted">
              <div class="p-10">Main Content</div>
            </main>
            <footer class="absolute bottom-0 left-0 right-0 h-50 bg-t-1 b-solid b-muted">
              <div class="p-10">Footer</div>
            </footer>
          </div>
        `}</ide-code>

        <a name="CenteredPanelLayout"></a>
        <h2 class="tx-primary tx-upper tx-30 py-20">
          {_('Centered Panel Layout')}
        </h2>

        <div class="mb-10">
          A centered layout with only a header and main content.
        </div>

        <div class="bg-t-3 h-120 flex items-center justify-center">
          <div class="relative w-80p h-80p b-solid b-t-1">

            <header class="absolute top-0 left-0 right-0 h-50p b-solid b-t-1">
              <div class="p-5">Header</div>
            </header>

            <main class="absolute top-50p bottom-0 left-0 right-0 b-solid b-t-1">
              <div class="p-5">Main Content</div>
            </main>
          </div>
        </div>


      <ide-code class="scroll-y-auto mb-20 w-full max-w-full min-w-full overflow-auto bg-black tx-white" trim detab={12}>{`
        <div class="bg-t-3 h-120 flex items-center justify-center">
          <div class="relative w-80p h-80p b-solid b-t-1">

            <header class="absolute top-0 left-0 right-0 h-50p b-solid b-t-1">
              <div class="p-5">Header</div>
            </header>


            <main class="absolute top-50p bottom-0 left-0 right-0 b-solid b-t-1">
              <div class="p-5">Main Content</div>
            </main>
          </div>
        </div>
        `}</ide-code>

        <a name="StickyHeaderFooter"></a>
        <h2 class="tx-primary tx-upper tx-30 py-20">{_('Sticky Header & Footer')}</h2>
        <div class="mb-10">{_('A layout with a sticky header and footer, and a scrollable main content area using flexbox:')}</div>

        <div class="basis-half-10 lg-basis-full h-300 bg-t-3 flex flex-col">
          <header class="h-50 bg-t-1 b-solid b-muted sticky top-0 z-10">
            <div class="p-10">Sticky Header</div>
          </header>
          <main class="flex-1 min-h-0 overflow-auto bg-t-0 b-solid b-muted">
            <div class="p-10">
              <p>Main Content (Scroll Down)</p>
              <p>Additional content to demonstrate scrolling.</p>
              <p>More content here...</p>
              <div class="h-400"></div>
              <p>End of content.</p>
            </div>
          </main>
          <footer class="h-50 bg-t-1 b-solid b-muted sticky bottom-0 z-10">
            <div class="p-10">Sticky Footer</div>
          </footer>
        </div>

        <ide-code class="scroll-y-auto mb-20 mt-300 w-full max-w-full min-w-full min-h-50 overflow-auto bg-black tx-white" lang="html">{`
        <div class="h-300 bg-t-3 flex flex-col">
          <header class="h-50 bg-t-1 b-solid b-muted sticky top-0 z-10">
            <div class="p-10">Sticky Header</div>
          </header>
          <main class="flex-1 min-h-0 overflow-auto bg-t-0 b-solid b-muted">
            <div class="p-10">
              <p>Main Content (Scroll Down)</p>
              <p>Additional content to demonstrate scrolling.</p>
              <p>More content here...</p>
              <div class="h-400"></div>
              <p>End of content.</p>
            </div>
          </main>
          <footer class="h-50 bg-t-1 b-solid b-muted sticky bottom-0 z-10">
            <div class="p-10">Sticky Footer</div>
          </footer>
        </div>
        `}</ide-code>

        <a name="ResponsivePanelLayout"></a>
        <h2 class="tx-primary tx-upper tx-30 py-20">{_('Responsive Panel Layout')}</h2>
        <div class="mb-10">{_('A layout that stacks on mobile and splits into columns on larger screens using flexbox and responsive utilities:')}</div>

        <div class="basis-half-10 lg-basis-full h-300 bg-t-3 flex flex-col lg-flex-row">
          <header class="h-50 bg-t-1 b-solid b-muted">
            <div class="p-10">Header</div>
          </header>
          <aside class="h-200 lg-h-auto lg-w-200 bg-t-2 b-solid b-muted">
            <div class="p-10">Left Sidebar</div>
          </aside>
          <main class="flex-1 min-h-0 overflow-auto bg-t-0 b-solid b-muted">
            <div class="p-10">Main Content</div>
          </main>
          <aside class="h-200 lg-h-auto lg-w-250 bg-t-2 b-solid b-muted">
            <div class="p-10">Right Sidebar</div>
          </aside>
        </div>

        <ide-code class="scroll-y-auto mb-20 w-full max-w-full min-w-full overflow-auto bg-black tx-white" trim detab={12}>{`
          <div class="h-300 bg-t-3 flex flex-col lg-flex-row">
            <header class="h-50 bg-t-1 b-solid b-muted">
              <div class="p-10">Header</div>
            </header>
            <aside class="h-200 lg-h-auto lg-w-200 bg-t-2 b-solid b-muted">
              <div class="p-10">Left Sidebar</div>
            </aside>
            <main class="flex-1 min-h-0 overflow-auto bg-t-0 b-solid b-muted">
              <div class="p-10">Main Content</div>
            </main>
            <aside class="h-200 lg-h-auto lg-w-250 bg-t-2 b-solid b-muted">
              <div class="p-10">Right Sidebar</div>
            </aside>
          </div>
        `}</ide-code>

            <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/pager.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Pager')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/progress.html">
              {_('Progress Bars')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>