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
<link rel="import" type="component" href="@stackpress/ink-ui/form/button.ink" name="form-button" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/components/button.html';
  const title = _('Ink UI - Form Button');
  const description = _('A customizable button component for forms and links.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Button' }
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
            <a class="block tx-t-0" href="#button">{_('Button')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#variants">• {_('Variants')}</a>
              <a class="block tx-t-1" href="#sizes">• {_('Sizes')}</a>
              <a class="block tx-t-1" href="#styles">• {_('Styles')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="button"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Button')}</h1>
          <ide-app title="Button" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Button from '@stackpress/ink-ui/form/button';
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
              <table-col>flex</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to flex')}</table-col>
            </table-row>
            <table-row>
              <table-col>none</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to none')}</table-col>
            </table-row>
            <table-row>
              <table-col>inline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to inline')}</table-col>
            </table-row>
            <table-row>
              <table-col>block</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to block')}</table-col>
            </table-row>
            <table-row>
              <table-col>inline-block</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to inline-block (default)')}</table-col>
            </table-row>
            <table-row>
              <table-col>inline-flex</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets display to inline-flex')}</table-col>
            </table-row>
            <table-row>
              <table-col>padding</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets padding (e.g., "10px")')}</table-col>
            </table-row>
            <table-row>
              <table-col>padding-x</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets horizontal padding')}</table-col>
            </table-row>
            <table-row>
              <table-col>padding-y</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets vertical padding')}</table-col>
            </table-row>
            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets text color (e.g., "salmon", "#ff0000")')}</table-col>
            </table-row>
            <table-row>
              <table-col>white</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets text color to var(--white)')}</table-col>
            </table-row>
            <table-row>
              <table-col>black</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets text color to var(--black)')}</table-col>
            </table-row>
            <table-row>
              <table-col>info</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets background or border color to var(--info)')}</table-col>
            </table-row>
            <table-row>
              <table-col>warning</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets background or border color to var(--warning)')}</table-col>
            </table-row>
            <table-row>
              <table-col>success</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets background or border color to var(--success)')}</table-col>
            </table-row>
            <table-row>
              <table-col>error</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets background or border color to var(--error)')}</table-col>
            </table-row>
            <table-row>
              <table-col>muted</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets background or border color to var(--muted)')}</table-col>
            </table-row>
            <table-row>
              <table-col>primary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets background or border color to var(--primary)')}</table-col>
            </table-row>
            <table-row>
              <table-col>secondary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets background or border color to var(--secondary)')}</table-col>
            </table-row>
            <table-row>
              <table-col>theme</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets background or border color to var(--theme)')}</table-col>
            </table-row>
            <table-row>
              <table-col>size</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Custom font size (e.g., "16px")')}</table-col>
            </table-row>
            <table-row>
              <table-col>xs</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets padding to 2px 4px')}</table-col>
            </table-row>
            <table-row>
              <table-col>sm</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets padding to 5px 10px')}</table-col>
            </table-row>
            <table-row>
              <table-col>md</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets padding to 8px 16px')}</table-col>
            </table-row>
            <table-row>
              <table-col>lg</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets padding to 12px 24px')}</table-col>
            </table-row>
            <table-row>
              <table-col>xl</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets padding to 15px 30px')}</table-col>
            </table-row>
            <table-row>
              <table-col>xl2</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets padding to 18px 36px')}</table-col>
            </table-row>
            <table-row>
              <table-col>xl3</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets padding to 22px 44px')}</table-col>
            </table-row>
            <table-row>
              <table-col>xl4</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets padding to 26px 52px')}</table-col>
            </table-row>
            <table-row>
              <table-col>xl5</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets padding to 30px 60px')}</table-col>
            </table-row>
            <table-row>
              <table-col>curve</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets custom border-radius (e.g., "10px")')}</table-col>
            </table-row>
            <table-row>
              <table-col>curved</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border-radius to 4px')}</table-col>
            </table-row>
            <table-row>
              <table-col>rounded</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border-radius to 8px')}</table-col>
            </table-row>
            <table-row>
              <table-col>pill</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets border-radius to 9999px')}</table-col>
            </table-row>
            <table-row>
              <table-col>outline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets outline style with colored border')}</table-col>
            </table-row>
            <table-row>
              <table-col>solid</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets solid background color (default)')}</table-col>
            </table-row>
            <table-row>
              <table-col>transparent</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets transparent background with colored border')}</table-col>
            </table-row>
            <table-row>
              <table-col>full</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets width to 100%')}</table-col>
            </table-row>
            <table-row>
              <table-col>href</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Converts button to a link with specified URL')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A simple button with default styling.</div>
          <div class="bg-t-3 p-10 mb-10">
            <form-button>Click Me</form-button>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <form-button>Click Me</form-button>
          `}</ide-code>

          <a name="variants"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Variants')}</h2>
          <div class="mb-10">Different button styles: solid, outline, and transparent.</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-10">
            <form-button class="mr-5" md success curved solid>Submit</form-button>
            <form-button md warning rounded outline>Outline</form-button>
            <form-button md primary rounded transparent href="#">Link</form-button>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <form-button class="mr-5" md success curved solid>Submit</form-button>
            <form-button md warning rounded outline>Outline</form-button>
            <form-button md primary rounded transparent href="#">Link</form-button>
          `}</ide-code>

          <a name="sizes"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Sizes')}</h2>
          <div class="mb-10">Buttons with various size options.</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-10">
            <form-button xs primary solid curved>XS</form-button>
            <form-button sm info solid curved>SM</form-button>
            <form-button md success solid curved>MD</form-button>
            <form-button lg warning solid curved>LG</form-button>
            <form-button xl muted solid curved>XL</form-button>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <form-button xs primary solid curved>XS</form-button>
            <form-button sm info solid curved>SM</form-button>
            <form-button md success solid curved>MD</form-button>
            <form-button lg warning solid curved>LG</form-button>
            <form-button xl muted solid curved>XL</form-button>
          `}</ide-code>

          <a name="styles"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Styles')}</h2>
          <div class="mb-10">Customize with colors, curves, and full width.</div>
          <div class="bg-t-3 p-10 mb-10 flex gap-10">
            <form-button md info pill full>Solid Pill</form-button>
            <form-button md error curved transparent full>Transparent Curved</form-button>
            <form-button md success rounded outline padding="10px 20px">Custom Padding</form-button>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <form-button md info pill full>Solid Pill</form-button>
            <form-button md error curved transparent full>Transparent Curved</form-button>
            <form-button md success rounded outline padding="10px 20px">Custom Padding</form-button>
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/form/index.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Forms and Fields')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/form/control.html">
              {_('Control')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>