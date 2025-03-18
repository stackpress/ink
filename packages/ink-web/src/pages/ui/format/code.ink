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
<link rel="import" type="component" href="@stackpress/ink-ui/format/code.ink" name="format-code" />

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
  const title = _('Ink UI - Code Format');
  const description = _('Ink UI atomically generates CSS styles and provides out of box web components.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Formats', href: '/ink/ui/format/index.html' },
    { label: 'Code' }
  ];
  const basicCode = "compiler.render('./page.ink')";
  const inlineCode = "<div>";
  const jsCode = "function greet(name) {\n    console.log('Hello, ' + name + '!');\n}\ngreet('World');";
  const terminalCode = "npm install";
  const cssCode = ".button {\n    background-color: #007bff;\n    color: white;\n    padding: 10px;\n}";
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
            <a class="block tx-t-0" href="#Code">{_('Code')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basicCode">• {_('Basic Code Format')}</a>
              <a class="block tx-t-1" href="#inlineCode">• {_('Inline Code Format')}</a>
              <a class="block tx-t-1" href="#lineNumbersCode">• {_('Code with Line Numbers')}</a>
              <a class="block tx-t-1" href="#terminalCode">• {_('Terminal Code Format')}</a>
              <a class="block tx-t-1" href="#styledCode">• {_('Styled Code Format')}</a>
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

          <a name="Code"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Code')}</h1>
          <ide-app title="Code" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Code from '@stackpress/ink-ui/format/code';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <layout-table 
            top
            head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" 
            body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" 
            odd="bg-t-1"
            even="bg-t-0"
          >
            <table-head>{_('Name')}</table-head>
            <table-head>{_('Type')}</table-head>
            <table-head>{_('Required')}</table-head>
            <table-head>{_('Description')}</table-head>

            <table-row>
              <table-col>lang</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Programming language for syntax highlighting (e.g., "js", "bash", "html"). Defaults to "markup".')}</table-col>
            </table-row>

            <table-row>
              <table-col>numbers</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, displays line numbers on the left. Defaults to false.')}</table-col>
            </table-row>

            <table-row>
              <table-col>inline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, renders the code inline instead of as a block. Defaults to false.')}</table-col>
            </table-row>

            <table-row>
              <table-col>trim</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, trims whitespace from both ends of the code snippet. Defaults to false.')}</table-col>
            </table-row>

            <table-row>
              <table-col>ltrim</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, trims whitespace from the start of the code snippet. Defaults to false.')}</table-col>
            </table-row>

            <table-row>
              <table-col>rtrim</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('If true, trims whitespace from the end of the code snippet. Defaults to false.')}</table-col>
            </table-row>

            <table-row>
              <table-col>detab</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Replaces leading spaces (in multiples of this value) with a newline. Defaults to 0.')}</table-col>
            </table-row>

            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('The code snippet to display. If not provided, uses the component’s child content.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes for additional styling (e.g., "tx-lg p-10").')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Code Format -->
          <a name="basicCode"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Code Format')}</h2>
          <div class="mb-10">{_('A basic code snippet displayed as a block.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              <format-code lang="js" value={basicCode} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <script>
              const basicCode = "compiler.render('./page.ink')";
            </script>
            <format-code lang="js" value={basicCode} />
          `}</ide-code>

          <!-- Inline Code Format -->
          <a name="inlineCode"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Inline Code Format')}</h2>
          <div class="mb-10">{_('A code snippet displayed inline within text.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full">
            <div class="bg-t-3 h-120 flex flex-center">
              Use the <format-code lang="html" inline value={inlineCode} /> tag for layout.
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <script>
              const inlineCode = "<div>";
            </script>
            Use the <format-code lang="html" inline value={inlineCode} /> tag for layout.
          `}</ide-code>

          <!-- Code with Line Numbers -->
          <a name="lineNumbersCode"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Code with Line Numbers')}</h2>
          <div class="mb-10">{_('A code snippet with line numbers enabled.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full">
            <div class="bg-t-3 h-200 flex flex-center">
              <format-code lang="js" numbers detab={4} value={jsCode} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <script>
              const jsCode = "function greet(name) {\n    console.log('Hello, ' + name + '!');\n}\ngreet('World');";
            </script>
            <format-code lang="js" numbers detab={4} value={jsCode} />
          `}</ide-code>

          <!-- Styled Code Format -->
          <a name="styledCode"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Code Format')}</h2>
          <div class="mb-10">{_('A styled code snippet with custom Ink utilities.')}</div>
          <div class="basis-third-10 lg:basis-half-10 md:basis-full">
            <div class="bg-t-3 h-200 flex flex-center">
              <format-code lang="css" numbers class="tx-lg p-10 b-dashed b-t-3" value={cssCode} />
            </div>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={4}>{`
            <script>
              const cssCode = ".button {\n    background-color: #007bff;\n    color: white;\n    padding: 10px;\n}";
            </script>
            <format-code lang="css" numbers class="tx-lg p-10 b-dashed b-t-3" value={cssCode} />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/index.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Formats')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/color.html">
              {_('Color')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>