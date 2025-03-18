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
<link rel="import" type="component" href="@stackpress/ink-ui/format/text.ink" name="format-text" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/format/text.html';
  const title = _('Ink UI - Text Format');
  const description = _('A component for rendering styled text with case transformation options.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'Text' }
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
            <a class="block tx-t-0" href="#text">{_('Text')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#case">• {_('Case Transformation')}</a>
              <a class="block tx-t-1" href="#styled">• {_('Styled Text')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="text"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Text')}</h1>
          <ide-app title="Text Format" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Text from '@stackpress/ink-ui/format/text';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <layout-table 
            top
            head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" 
            body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" 
            odd="bg-t-0" 
            even="bg-t-1"
          >
            <table-head>{_('Property')}</table-head>
            <table-head>{_('Type')}</table-head>
            <table-head>{_('Required')}</table-head>
            <table-head>{_('Description')}</table-head>

            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('Text to render (e.g., "i am a title").')}</table-col>
            </table-row>

            <table-row>
              <table-col>upper</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Converts text to uppercase if `true` (e.g., "I AM A TITLE").')}</table-col>
            </table-row>

            <table-row>
              <table-col>lower</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Converts text to lowercase if `true` (e.g., "i am a title").')}</table-col>
            </table-row>

            <table-row>
              <table-col>capital</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Capitalizes each word if `true` (e.g., "I Am A Title").')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Display style for the container (e.g., "inline-block", "block"). Defaults to "inline-block".')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text color using Ink utilities (e.g., "primary", "tx-2").')}</table-col>
            </table-row>

            <table-row>
              <table-col>size</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Font size using Ink utilities (e.g., "md", "16px").')}</table-col>
            </table-row>

            <table-row>
              <table-col>bold</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies bold font weight if `true`.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Usage -->
          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">{_('Renders text with default styling.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-text value="i am a title" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-text value="i am a title" />
          `}</ide-code>

          <!-- Case Transformation -->
          <a name="case"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Case Transformation')}</h2>
          <div class="mb-10">{_('Renders text with different case styles.')}</div>
          <div class="bg-t-3 p-10 mb-20 flex flex-col gap-10">
            <format-text value="i am a title" capital />
            <format-text value="i am a title" upper />
            <format-text value="I AM A TITLE" lower />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <div class="flex flex-col gap-10">
              <format-text value="i am a title" capital />
              <format-text value="i am a title" upper />
              <format-text value="I AM A TITLE" lower />
            </div>
          `}</ide-code>

          <!-- Styled Text -->
          <a name="styled"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Text')}</h2>
          <div class="mb-10">{_('Renders text with custom styling.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-text value="i am a title" capital bold lg color="primary" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-text value="i am a title" capital bold lg color="primary" />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/taglist.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Taglist')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/yesno.html">
              {_('YesNo')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>