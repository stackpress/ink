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
<link rel="import" type="component" href="@stackpress/ink-ui/format/color.ink" name="format-color" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/format/color.html';
  const title = _('Ink UI - Color Format');
  const description = _('A component for displaying colors with a swatch and optional text label.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Format', href: '/ink/ui/format/index.html' },
    { label: 'Color' }
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
            <a class="block tx-t-0" href="#color">{_('Color')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Color')}</a>
              <a class="block tx-t-1" href="#box-only">• {_('Box Only')}</a>
              <a class="block tx-t-1" href="#text-only">• {_('Text Only')}</a>
              <a class="block tx-t-1" href="#sized">• {_('Sized Color')}</a>
              <a class="block tx-t-1" href="#bold">• {_('Bold Color')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="color"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Color')}</h1>
          <ide-app title="Format Color" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Color from '@stackpress/ink-ui/format/color';
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
            <table-head>{_('Default')}</table-head>
            <table-head>{_('Description')}</table-head>

            <table-row>
              <table-col>value</table-col>
              <table-col>String</table-col>
              <table-col>-</table-col>
              <table-col>{_('Color value (e.g., "red", "#FF0000") for the swatch and text label.')}</table-col>
            </table-row>

            <table-row>
              <table-col>box</table-col>
              <table-col>Boolean | Object</table-col>
              <table-col>false</table-col>
              <table-col>{_('Shows a color swatch. If an object, accepts size props (e.g., `box-sm`, `box-md`). Defaults to 16px if true.')}</table-col>
            </table-row>

            <table-row>
              <table-col>text</table-col>
              <table-col>Boolean</table-col>
              <table-col>false</table-col>
              <table-col>{_('Shows the color value as text. Automatically enables `box` if set without `box`.')}</table-col>
            </table-row>

            <table-row>
              <table-col>size</table-col>
              <table-col>String</table-col>
              <table-col>-</table-col>
              <table-col>{_('Text size (e.g., "sm", "md", "lg") applied to the component.')}</table-col>
            </table-row>

            <table-row>
              <table-col>bold</table-col>
              <table-col>Boolean</table-col>
              <table-col>false</table-col>
              <table-col>{_('Applies bold font weight to the text.')}</table-col>
            </table-row>

            <table-row>
              <table-col>display</table-col>
              <table-col>String</table-col>
              <table-col>"inline-flex"</table-col>
              <table-col>{_('Display style ("flex", "inline-flex", "block", etc.). Aligns box and text if flex.')}</table-col>
            </table-row>

            <table-row>
              <table-col>class</table-col>
              <table-col>String</table-col>
              <table-col>-</table-col>
              <table-col>{_('Ink utility classes for styling (e.g., "p-5 gap-10").')}</table-col>
            </table-row>
          </layout-table>

          <!-- Basic Color -->
          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Color')}</h2>
          <div class="mb-10">{_('A color swatch with its value as text.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-color box-md text-md value="red" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-color box-md text-md value="red" />
          `}</ide-code>

          <!-- Box Only -->
          <a name="box-only"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Box Only')}</h2>
          <div class="mb-10">{_('A standalone color swatch without text.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-color box value="#00FF00" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-color box value="#00FF00" />
          `}</ide-code>

          <!-- Text Only -->
          <a name="text-only"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Text Only')}</h2>
          <div class="mb-10">{_('The color value as text without a swatch.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-color text value="blue" box={false} />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-color text value="blue" box={false} />
          `}</ide-code>

          <!-- Sized Color -->
          <a name="sized"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Sized Color')}</h2>
          <div class="mb-10">{_('A color display with custom box and text sizes.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-color box-lg text-xl value="purple" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-color box-lg text-xl value="purple" />
          `}</ide-code>

          <!-- Bold Color -->
          <a name="bold"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Bold Color')}</h2>
          <div class="mb-10">{_('A color with bold text and a swatch.')}</div>
          <div class="bg-t-3 p-10 mb-20">
            <format-color box-sm text-md bold value="#FFA500" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full bg-black text-white" lang="html" trim detab={12}>{`
            <format-color box-sm text-md bold value="#FFA500" />
          `}</ide-code>

          <!-- Navigation -->
          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/format/code.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Code')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/format/country.html">
              {_('Country')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>