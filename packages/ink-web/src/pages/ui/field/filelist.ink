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
<link rel="import" type="component" href="@stackpress/ink-ui/field/filelist.ink" name="field-filelist" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/input.ink" name="field-input" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/field/filelist.html';
  const title = _('Ink UI - Filelist Field');
  const description = _('A multi-file upload field with preview and list management.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Filelist Field' }
  ];

  const filelistupload = (files, next) => {
    setTimeout(() => {
      next(files.map((file, i) => 'https://images.wsj.net/im-580612/8SR'));
    }, 1000);
  };
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
            <a class="block tx-t-0" href="#filelist">{_('Filelist Field')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#image-mode">• {_('Image Mode')}</a>
              <a class="block tx-t-1" href="#default-values">• {_('Default Values')}</a>
              <a class="block tx-t-1" href="#custom">• {_('Custom Upload')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="filelist"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Filelist Field')}</h1>
          <ide-app title="Filelist Field" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Filelist from '@stackpress/ink-ui/field/filelist';
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
              <table-col>{_('Name attribute for form submission')}</table-col>
            </table-row>
            <table-row>
              <table-col>value</table-col>
              <table-col>Array</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial array of file URLs (default: [])')}</table-col>
            </table-row>
            <table-row>
              <table-col>image</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Restricts to images and shows previews')}</table-col>
            </table-row>
            <table-row>
              <table-col>uploading</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text during upload (default: "Uploading...")')}</table-col>
            </table-row>
            <table-row>
              <table-col>upload</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Upload handler (files, next) => void; next receives URL array')}</table-col>
            </table-row>
            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback for change event (receives ChangeEvent)')}</table-col>
            </table-row>
            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback with updated URL array (not implemented in source)')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A simple filelist field without upload handling.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-filelist name="basic-filelist" class="block w-250" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-filelist name="basic-filelist" class="block w-250" />
          `}</ide-code>

          <a name="image-mode"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Image Mode')}</h2>
          <div class="mb-10">Filelist field restricted to images, showing previews of uploaded files after a mock upload (uses a static URL for demo; replace upload function for real URLs).</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-filelist 
              name="image-filelist" 
              image={true} 
              upload={filelistupload} 
              class="block w-250" 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <script>
              const filelistupload = (files, next) => {
                setTimeout(() => {
                  next(files.map((file, i) => 'https://images.wsj.net/im-580612/8SR'));
                }, 1000);
              };
            </script>
            <field-filelist 
              name="image-filelist" 
              image={true} 
              upload={filelistupload} 
              class="block w-250" 
            />
          `}</ide-code>

          <a name="default-values"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Default Values')}</h2>
          <div class="mb-10">Filelist field with preloaded image URLs and removal options.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-filelist 
              name="default-filelist" 
              image={true} 
              class="block w-250" 
              value={['https://images.wsj.net/im-580612/8SR', 'https://images.wsj.net/im-580612/8SR']} 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-filelist 
              name="default-filelist" 
              image={true} 
              class="block w-250" 
              value={['https://example.com/sample1.jpg', 'https://example.com/sample2.jpg']} 
            />
          `}</ide-code>

          <a name="custom"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Upload')}</h2>
          <div class="mb-10">Filelist field with custom upload function and update callback.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-filelist 
              name="custom-filelist" 
              image={true}
              class="block w-250 rounded b-solid b-primary" 
              upload={filelistupload} 
              update={(urls) => console.log('Uploaded URLs:', urls)}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <script>
              const filelistupload = (files, next) => {
                setTimeout(() => {
                  next(files.map((file, i) => 'https://images.wsj.net/im-580612/8SR'));
                }, 1000);
              };
            </script>
            <field-filelist 
              name="custom-filelist" 
              image={true}
              class="block w-250 rounded b-solid b-primary" 
              upload={filelistupload} 
              update={(urls) => console.log('Uploaded URLs:', urls)}
            />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/file.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('File Field')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/input.html">
              {_('Input Field')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>