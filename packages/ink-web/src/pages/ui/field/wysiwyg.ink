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
<link rel="import" type="component" href="@stackpress/ink-ui/field/wysiwyg.ink" name="field-wysiwyg" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/field/wysiwyg.html';
  const title = _('Ink UI - WYSIWYG Field');
  const description = _('A rich text editor field with customizable toolbar options and styling, powered by SunEditor.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Form', href: '/ink/ui/form/index.html' },
    { label: 'WYSIWYG' }
  ];
  const handleChange = (e) => console.log('Change event:', e.target.value);
  const handleUpdate = (value) => console.log('Updated content:', value);
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
            <a class="block tx-t-0" href="#wysiwyg">{_('WYSIWYG')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic WYSIWYG')}</a>
              <a class="block tx-t-1" href="#styled">• {_('Styled WYSIWYG')}</a>
              <a class="block tx-t-1" href="#minimal">• {_('Minimal WYSIWYG')}</a>
              <a class="block tx-t-1" href="#full">• {_('Full-Featured WYSIWYG')}</a>
              <a class="block tx-t-1" href="#prefilled">• {_('Pre-filled WYSIWYG')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="wysiwyg"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('WYSIWYG')}</h1>
          <p class="mb-20">{_('The `<field-wysiwyg>` component is a rich text editor built with SunEditor, offering customizable toolbar options and responsive styling via Ink utilities.')}</p>
          <ide-app title="WYSIWYG Field" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import WYSIWYG from '@stackpress/ink-ui/field/wysiwyg';
            </ide-code>
          </ide-app>

          <!-- Props Section -->
          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <p class="mb-20">{_('Customize the editor’s toolbar and behavior with the props below. Use the `class` prop with Ink utilities for responsive styling.')}</p>
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
              <table-col>No</table-col>
              <table-col>{_('Initial content of the editor (defaults to "").')}</table-col>
            </table-row>

            <table-row>
              <table-col>name</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Name attribute for the underlying `<textarea>` used in form submission.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Ink utility classes for styling (e.g., "w-full min-h-200 p-4").')}</table-col>
            </table-row>

            <table-row>
              <table-col>change</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Handler for content changes, receives a synthetic event with `target.value`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>update</table-col>
              <table-col>Function</table-col>
              <table-col>No</table-col>
              <table-col>{_('Callback receiving the updated content string directly.')}</table-col>
            </table-row>

            <table-row>
              <table-col>history</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds undo/redo buttons to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>font</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds font family selector to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>size</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds font size selector to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>format</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds format block selector (e.g., headings) to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>paragraph</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds paragraph style options to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>blockquote</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds blockquote button to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>style</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds bold, italic, underline, etc., buttons to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds font color selector to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>highlight</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds highlight color selector to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>text</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds text style options to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>remove</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds remove format button to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>indent</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds indent/outdent buttons to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>align</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds alignment options to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>rule</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds horizontal rule button to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>list</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds ordered/unordered list buttons to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>lineheight</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds line height selector to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>table</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds table insertion button to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>link</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds link insertion button to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>image</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds image insertion button to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>video</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds video insertion button to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>audio</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds audio insertion button to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>fullscreen</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds fullscreen toggle button to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>showblocks</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds show blocks toggle button to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>code</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds code view toggle button to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>print</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds preview and print buttons to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>save</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds save and template buttons to the toolbar.')}</table-col>
            </table-row>

            <table-row>
              <table-col>dir</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Adds direction toggle buttons (LTR/RTL) to the toolbar.')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic WYSIWYG -->
          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic WYSIWYG')}</h2>
          <div class="mb-10">{_('A simple WYSIWYG editor with common toolbar options.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <field-wysiwyg 
              name="basic" 
              history 
              style 
              color 
              align 
              list 
              class="w-full min-h-200" 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <field-wysiwyg 
              name="basic" 
              history 
              style 
              color 
              align 
              list 
              class="w-full min-h-200" 
            />
          `}</ide-code>

          <!-- Styled WYSIWYG -->
          <a name="styled"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styled WYSIWYG')}</h2>
          <div class="mb-10">{_('A WYSIWYG editor styled with Ink utilities and event handlers.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <field-wysiwyg 
              name="styled" 
              history 
              font 
              size 
              style 
              color 
              align 
              list 
              link 
              class="w-full min-h-300 p-4 b-solid b-t-2 shadow-md hover:b-primary hover:shadow-lg transition-300" 
              change={handleChange} 
              update={handleUpdate} 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <field-wysiwyg 
              name="styled" 
              history 
              font 
              size 
              style 
              color 
              align 
              list 
              link 
              class="w-full min-h-300 p-4 b-solid b-t-2 shadow-md hover:b-primary hover:shadow-lg transition-300" 
              change={handleChange} 
              update={handleUpdate} 
            />
          `}</ide-code>

          <!-- Minimal WYSIWYG -->
          <a name="minimal"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Minimal WYSIWYG')}</h2>
          <div class="mb-10">{_('A minimal WYSIWYG editor with basic formatting options.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <field-wysiwyg 
              name="minimal" 
              style 
              color 
              class="w-full min-h-150 p-2 b-dashed b-t-1" 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <field-wysiwyg 
              name="minimal" 
              style 
              color 
              class="w-full min-h-150 p-2 b-dashed b-t-1" 
            />
          `}</ide-code>

          <!-- Full-Featured WYSIWYG -->
          <a name="full"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Full-Featured WYSIWYG')}</h2>
          <div class="mb-10">{_('A WYSIWYG editor with all toolbar options enabled.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <field-wysiwyg 
              name="full" 
              history 
              font 
              size 
              format 
              paragraph 
              blockquote 
              style 
              color 
              highlight 
              text 
              remove 
              indent 
              align 
              rule 
              list 
              lineheight 
              table 
              link 
              image 
              video 
              audio 
              fullscreen 
              showblocks 
              code 
              print 
              save 
              dir 
              class="w-full min-h-400 p-6 b-solid b-t-3" 
              change={handleChange} 
              update={handleUpdate} 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <field-wysiwyg 
              name="full" 
              history 
              font 
              size 
              format 
              paragraph 
              blockquote 
              style 
              color 
              highlight 
              text 
              remove 
              indent 
              align 
              rule 
              list 
              lineheight 
              table 
              link 
              image 
              video 
              audio 
              fullscreen 
              showblocks 
              code 
              print 
              save 
              dir 
              class="w-full min-h-400 p-6 b-solid b-t-3" 
              change={handleChange} 
              update={handleUpdate} 
            />
          `}</ide-code>

          <!-- Pre-filled WYSIWYG -->
          <a name="prefilled"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Pre-filled WYSIWYG')}</h2>
          <div class="mb-10">{_('A WYSIWYG editor with pre-filled content.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <field-wysiwyg 
              name="prefilled" 
              value="<h2>Hello World</h2><p>This is a <strong>pre-filled</strong> editor.</p>" 
              history 
              style 
              color 
              align 
              list 
              class="w-full min-h-200 p-4 b-solid b-t-2" 
              update={handleUpdate} 
            />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <field-wysiwyg 
              name="prefilled" 
              value="<h2>Hello World</h2><p>This is a <strong>pre-filled</strong> editor.</p>" 
              history 
              style 
              color 
              align 
              list 
              class="w-full min-h-200 p-4 b-solid b-t-2" 
              update={handleUpdate} 
            />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/field/time.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Time')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/index.html">
              {_('Formats')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>