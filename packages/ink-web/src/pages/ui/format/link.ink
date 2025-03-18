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
<link rel="import" type="component" href="@stackpress/ink-ui/format/link.ink" name="format-link" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/format/link.html';
  const title = _('Ink UI - Link Format');
  const description = _('A component for rendering clickable hyperlinks with customizable labels and styles.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'Link' }
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
            <a class="block tx-t-0" href="#link">{_('Link')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#label">• {_('Custom Label')}</a>
              <a class="block tx-t-1" href="#styled">• {_('Styled Link')}</a>
              <a class="block tx-t-1" href="#attributes">• {_('Link Attributes')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="link"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Link')}</h1>
          <ide-app title="Link Format" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Link from '@stackpress/ink-ui/format/link';
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
            <table-head>{_('Name')}</table-head>
            <table-head>{_('Type')}</table-head>
            <table-head>{_('Required')}</table-head>
            <table-head>{_('Description')}</table-head>

            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('URL for the hyperlink (e.g., "https://iamawesome.com/"). Sets the `href` attribute and default display text.')}</table-col>
            </table-row>

            <table-row>
              <table-col>label</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom text to display instead of the URL.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes for the container (e.g., "tx-md").')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Display style for the container (e.g., "inline-block", "block"). Defaults to "inline-block".')}</table-col>
            </table-row>

            <table-row>
              <table-col>size</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Font size using Ink utilities (e.g., "md", "lg"). Defaults to "13px".')}</table-col>
            </table-row>

            <table-row>
              <table-col>bold</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies bold font weight to the link if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text color for the link using Ink utilities (e.g., "primary", "secondary").')}</table-col>
            </table-row>

            <table-row>
              <table-col>underline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Underlines the link if `true`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>[html-attributes]</table-col>
              <table-col>Any</table-col>
              <table-col>No</table-col>
              <table-col>{_('Additional HTML attributes (e.g., `target`, `rel`) passed to the `<a>` tag.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Usage -->
          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">{_('Renders a basic hyperlink with default styling.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-link value="https://example.com/" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim det-\
ab={12}>{`
            <format-link value="https://example.com/" />
          `}</ide-code>

          <!-- Custom Label -->
          <a name="label"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Label')}</h2>
          <div class="mb-10">{_('Renders a link with a custom display label.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-link value="https://example.com/" label="Visit Example" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-link value="https://example.com/" label="Visit Example" />
          `}</ide-code>

          <!-- Styled Link -->
          <a name="styled"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled Link')}</h2>
          <div class="mb-10">{_('Renders a styled link with size, color, and underline options.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-link 
              secondary 
              underline 
              md 
              target="_blank" 
              value="https://iamawesome.com/" 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-link 
              secondary 
              underline 
              md 
              target="_blank" 
              value="https://iamawesome.com/" 
            />
          `}</ide-code>

          <!-- Link Attributes -->
          <a name="attributes"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Link Attributes')}</h2>
          <div class="mb-10">{_('Renders a link with additional HTML attributes.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-link 
              value="https://example.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              bold 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-link 
              value="https://example.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              bold 
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/json.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('JSON')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/list.html">
              {_('List')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>