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
<link rel="import" type="component" href="@stackpress/ink-ui/field/file.ink" name="field-file" />
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

  const url = '/ink/ui/field/file.html';
  const title = _('Ink UI - File Field');
  const description = _('A file upload field with preview and upload handling.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'File Field' }
  ];

  const fileupload = (file, next) => {
    setTimeout(() => {
      next('https://images.wsj.net/im-580612/8SR');
    }, 5000);
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
            <a class="block tx-t-0" href="#file">{_('File Field')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#image">• {_('Image Preview')}</a>
              <a class="block tx-t-1" href="#image-mode">• {_('Image Mode')}</a>
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

          <a name="file"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('File Field')}</h1>
          <ide-app title="File Field" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import File from '@stackpress/ink-ui/field/file';
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
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Initial file URL')}</table-col>
            </table-row>
            <table-row>
              <table-col>image</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Restricts to images and shows preview')}</table-col>
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
              <table-col>{_('Upload handler (file, next) => void; next receives URL')}</table-col>
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
              <table-col>{_('Callback with uploaded file URL')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A simple file field without upload handling.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-file name="basic-file" class="block w-250" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-file name="basic-file" class="block w-250" />
          `}</ide-code>

          <a name="image"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Image Preview')}</h2>
          <div class="mb-10">File field with image restriction and preview.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-file 
              name="image-file" 
              image={true} 
              class="block w-250" 
              value="https://images.wsj.net/im-580612/8SR" 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-file 
              name="image-file" 
              image={true} 
              class="block w-250" 
              value="https://images.wsj.net/im-580612/8SR" 
            />
          `}</ide-code>


          <a name="image-mode"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Image Mode')}</h2>
          <div class="mb-10">File field restricted to images with preview.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-file name="image-file" image={true} upload={fileupload} class="w-250" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <field-file name="image-file" image={true} upload={fileupload} class="w-250" />
          `}</ide-code>

          <a name="custom"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Custom Upload')}</h2>
          <div class="mb-10">File field with custom upload function and update callback.</div>
          <div class="bg-t-3 p-10 mb-10">
            <field-file 
              name="custom-file" 
              class="block w-250 rounded b-solid b-primary" 
              upload={fileupload} 
              update={(url) => console.log('Uploaded URL:', url)}
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <script>
              const fileupload = (file, next) => {
                setTimeout(() => {
                  next('https://images.wsj.net/im-580612/8SR');
                }, 5000);
              };
            </script>
            <field-file 
              name="custom-file" 
              class="block w-250 rounded b-solid b-primary" 
              upload={fileupload} 
              update={(url) => console.log('Uploaded URL:', url)}
            />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/editor.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Editor Field')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/field/filelist.html">
              {_('Filelist Field')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>