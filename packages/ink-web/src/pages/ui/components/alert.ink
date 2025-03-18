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
  const title = _('Ink UI - Alert Component');
  const description = _('Ink UI atomically generates CSS styles and provides out of box web components.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Components', href: '/ink/ui/index.html' },
    { label: 'Alert' }
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
            <a class="block tx-t-0" href="#alert">{_('Alert')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#types">• {_('Types')}</a>
              <a class="block tx-t-1" href="#customColor">• {_('Custom Color')}</a>
              <a class="block tx-t-1" href="#rounded">• {_('Rounded')}</a>
              <a class="block tx-t-1" href="#padding">• {_('Padding')}</a>
              <a class="block tx-t-1" href="#transparent">• {_('Transparent')}</a>
              <a class="block tx-t-1" href="#outline">• {_('Outline')}</a>
              <a class="block tx-t-1" href="#combine">• {_('Combine')}</a>
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

          <a name="alert"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">
            {_('Alert')}
          </h1>
          <ide-app title="Alert" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Alert from '@stackpress/ink-ui/element/alert';
            </ide-code>
          </ide-app>

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
            <table-head>{_('Notes')}</table-head>
            
            <table-row>
              <table-col>outline</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Displays the alert with a white background and colored border/text')}</table-col>
            </table-row>

            <table-row>
              <table-col>solid</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Displays the alert with a solid colored background (default if outline/transparent omitted)')}</table-col>
            </table-row>

            <table-row>
              <table-col>transparent</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Displays the alert with a transparent background and colored border/text')}</table-col>
            </table-row>

            <table-row>
              <table-col>padding</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets custom padding in pixels (default: 16)')}</table-col>
            </table-row>

            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a custom CSS color for background (solid) or text/border (outline/transparent), e.g., "salmon", "#ff0000"')}</table-col>
            </table-row>

            <table-row>
              <table-col>info</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a predefined info style (blue background)')}</table-col>
            </table-row>

            <table-row>
              <table-col>warning</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a predefined warning style (yellow background)')}</table-col>
            </table-row>

            <table-row>
              <table-col>success</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a predefined success style (green background)')}</table-col>
            </table-row>

            <table-row>
              <table-col>error</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a predefined error style (red background)')}</table-col>
            </table-row>

            <table-row>
              <table-col>muted</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a predefined muted style (gray background)')}</table-col>
            </table-row>

            <table-row>
              <table-col>white</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a predefined white background style')}</table-col>
            </table-row>

            <table-row>
              <table-col>black</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a predefined black background style')}</table-col>
            </table-row>

            <table-row>
              <table-col>primary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a predefined primary style (theme-defined color)')}</table-col>
            </table-row>

            <table-row>
              <table-col>secondary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets a predefined secondary style (theme-defined color)')}</table-col>
            </table-row>

            <table-row>
              <table-col>curved</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies a slightly rounded border radius (4px)')}</table-col>
            </table-row>

            <table-row>
              <table-col>rounded</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies a fully rounded border radius (8px)')}</table-col>
            </table-row>

            <table-row>
              <table-col>pill</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Applies a pill-shaped border radius (9999px)')}</table-col>
            </table-row>
          </layout-table>

          <a name="types"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Types')}
          </h2>

          <div class="mb-10">
            Alerts have the following predefined color types:  
            <span class="bg-info tx-white tx-italic p-3">info</span>,  
            <span class="bg-warning tx-black tx-italic p-3">warning</span>,  
            <span class="bg-success tx-white tx-italic p-3">success</span>,  
            <span class="bg-error tx-white tx-italic p-3">error</span>, and  
            <span class="bg-muted tx-white tx-italic p-3">muted</span>.
          </div>

          <element-alert class="mb-5" info>
            <element-icon name="info-circle" />
            No Results found
          </element-alert>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-alert info>
              <element-icon name="info-circle" />
              No Results found
            </element-alert>
          `}</ide-code>

          <element-alert class="mb-5" warning>
            <element-icon name="exclamation-triangle" />
            Are you sure?
          </element-alert>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-alert warning>
              <element-icon name="exclamation-triangle" />
              Are you sure?
            </element-alert>
          `}</ide-code>

          <element-alert class="mb-5" success>
            <element-icon name="check-circle" />
            Successfully saved!
          </element-alert>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-alert success>
              <element-icon name="check-circle" />
              Successfully saved!
            </element-alert>
          `}</ide-code>

          <element-alert class="mb-5" error>
            <element-icon name="exclamation-circle" />
            Could not save
          </element-alert>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-alert error>
              <element-icon name="exclamation-circle" />
              Could not save
            </element-alert>
          `}</ide-code>

          <element-alert class="mb-5" muted>
            <element-icon name="ban" />
            I am disabled
          </element-alert>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-alert muted>
              <element-icon name="ban" />
              I am disabled
            </element-alert>
          `}</ide-code>

          <a name="customColor"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Custom Color')}
          </h2>

          <div class="mb-10">
            Alerts can use custom CSS-compatible colors for the background (solid) or text/border (outline/transparent), including hex values and color names.
          </div>

          <element-alert class="mb-5" color="salmon">
            <element-icon name="exclamation-circle" />
            Who likes salmon?
          </element-alert>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-alert color="salmon">
              <element-icon name="exclamation-circle" />
              Who likes salmon?
            </element-alert>
          `}</ide-code>

          <a name="rounded"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Rounded')}
          </h2>

          <div class="mb-10">
            Alerts can be rounded in three ways:
            <span class="bg-info tx-white tx-italic p-3">curved</span> (4px),  
            <span class="bg-info tx-white tx-italic p-3">rounded</span> (8px),  
            and <span class="bg-info tx-white tx-italic p-3">pill</span> (9999px).
          </div>

          <element-alert curved class="mb-5" info>
            <element-icon name="info-circle" />
            No Results found
          </element-alert>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-alert info curved>
              <element-icon name="info-circle" />
              No Results found
            </element-alert>
          `}</ide-code>

          <element-alert rounded class="mb-5" warning>
            <element-icon name="exclamation-triangle" />
            Are you sure?
          </element-alert>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-alert warning rounded>
              <element-icon name="exclamation-triangle" />
              Are you sure?
            </element-alert>
          `}</ide-code>

          <element-alert pill class="mb-5" success>
            <element-icon name="check-circle" />
            Successfully saved!
          </element-alert>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-alert success pill>
              <element-icon name="check-circle" />
              Successfully saved!
            </element-alert>
          `}</ide-code>

          <a name="padding"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Padding')}
          </h2>

          <div class="mb-10">
            Alerts can have custom padding values in pixels. The default is 16px, but you can override it with the <span class="tx-italic p-3">padding</span> attribute.
          </div>

          <element-alert class="mb-5" success padding="32">
            <element-icon name="check-circle" />
            Extra padded success message!
          </element-alert>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-alert success padding="32">
              <element-icon name="check-circle" />
              Extra padded success message!
            </element-alert>
          `}</ide-code>

          <a name="transparent"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Transparent')}
          </h2>

          <div class="mb-10">
            Setting <span class="tx-italic p-3">transparent</span> removes the background color while retaining a colored border and text.
          </div>

          <element-alert class="mb-5" transparent info>
            <element-icon name="info-circle" />
            This is a transparent alert.
          </element-alert>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-alert transparent info>
              <element-icon name="info-circle" />
              This is a transparent alert.
            </element-alert>
          `}</ide-code>

          <a name="outline"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Outline')}
          </h2>

          <div class="mb-10">
            An <span class="tx-italic p-3">outline</span> alert has a white background with a colored border and text.
          </div>

          <element-alert class="mb-5" outline warning>
            <element-icon name="exclamation-triangle" />
            Warning alert with outline!
          </element-alert>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-alert outline warning>
              <element-icon name="exclamation-triangle" />
              Warning alert with outline!
            </element-alert>
          `}</ide-code>

          <a name="combine"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">
            {_('Combining Props')}
          </h2>

          <div class="mb-10">
            You can combine multiple props like <span class="tx-italic p-3">outline</span>, <span class="tx-italic p-3">curved</span>, and <span class="tx-italic p-3">padding</span> to create custom styles.
          </div>

          <element-alert class="mb-5" outline curved padding="24" muted>
            <element-icon name="info-circle" />
            Curved outline with padding.
          </element-alert>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-alert outline curved padding="24" muted>
              <element-icon name="info-circle" />
              Curved outline with padding.
            </element-alert>
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/index.html">
              <element-icon name="chevron-left" theme="tx-1" />
              {_('Components')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/badge.html">
              {_('Badges')}
              <element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>