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
<link rel="import" type="component" href="@stackpress/ink-ui/format/imagelist.ink" name="format-imagelist" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/format/imagelist.html';
  const title = _('Ink UI - Imagelist Format');
  const description = _('A component for rendering a list of images with lazy loading and shared attributes.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'Imagelist' }
  ];
  const images = [
    'https://images.wsj.net/im-580612/8SR',
    'https://images.wsj.net/im-580612/8SR'
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
            <a class="block tx-t-0" href="#imagelist">{_('Image List')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#sized">• {_('Sized List')}</a>
              <a class="block tx-t-1" href="#attributes">• {_('Image Attributes')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="imagelist"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Image List')}</h1>
          <ide-app title="Image List Format" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Imagelist from '@stackpress/ink-ui/format/imagelist';
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
              <table-col>Array</table-col>
              <table-col>Yes</table-col>
              <table-col>{_('Array of image URLs (e.g., ["https://example.com/img1.jpg"]). Sets the `src` for each `<img>`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes for the container (e.g., "flex gap-10").')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Display style for the container (e.g., "block", "flex"). Defaults to "block".')}</table-col>
            </table-row>

            <table-row>
              <table-col>[html-attributes]</table-col>
              <table-col>Any</table-col>
              <table-col>No</table-col>
              <table-col>{_('Additional HTML attributes (e.g., `width`, `alt`) applied to each `<img>` tag. `loading` defaults to "lazy" if unset.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Sized List -->
          <a name="sized"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Sized List')}</h2>
          <div class="mb-10">{_('Renders a list of images with a uniform width.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-imagelist width="70" value={images} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <script>
              const images = [
                'https://images.wsj.net/im-580612/8SR',
                'https://images.wsj.net/im-580612/8SR'
              ];
            </script>
            <format-imagelist width="70" value={images} />
          `}</ide-code>

          <!-- Image Attributes -->
          <a name="attributes"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Image Attributes')}</h2>
          <div class="mb-10">{_('Renders a list of images with additional HTML attributes and custom layout.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-imagelist 
              value={images} 
              width="100" 
              height="50" 
              alt="Sample Image" 
              class="flex gap-10" 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <script>
              const images = [
                'https://images.wsj.net/im-580612/8SR',
                'https://images.wsj.net/im-580612/8SR'
              ];
            </script>
            <format-imagelist 
              value={images} 
              width="100" 
              height="50" 
              alt="Sample Image" 
              class="flex gap-10" 
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/image.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Image')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/json.html">
              {_('JSON')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>