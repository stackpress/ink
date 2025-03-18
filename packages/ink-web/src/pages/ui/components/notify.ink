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
<link rel="import" type="component" href="@stackpress/ink-ui/element/notify.ink" name="element-notify" />
<link rel="import" type="component" href="@stackpress/ink-ui/form/button.ink" name="element-button" />

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/components/notify.html';
  const title = _('Ink UI - Notify Component');
  const description = _('A customizable notification component with dismissible alerts and progress bars.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Components', href: '/ink/ui/index.html' },
    { label: 'Notify' }
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
            <a class="block tx-t-0" href="#notify">{_('Notify')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#variants">• {_('Variants')}</a>
              <a class="block tx-t-1" href="#position">• {_('Position')}</a>
              <a class="block tx-t-1" href="#timeout">• {_('Timeout')}</a>
              <a class="block tx-t-1" href="#dismiss">• {_('Dismiss')}</a>
              <a class="block tx-t-1" href="#stacked">• {_('Stacked')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="notify"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Notify')}</h1>
          <ide-app title="Notify" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Notify from '@stackpress/ink-ui/element/notify';
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
              <table-col>top</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Positions notifications 20px from the top (default: bottom 20px)')}</table-col>
            </table-row>
            <table-row>
              <table-col>left</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Aligns notifications 20px from the left (default: right 20px)')}</table-col>
            </table-row>
            <table-row>
              <table-col>center</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Centers notifications horizontally')}</table-col>
            </table-row>
            <table-row>
              <table-col>smooth</table-col>
              <table-col>Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets interval for opacity and progress updates in milliseconds (default: 10)')}</table-col>
            </table-row>
            <table-row>
              <table-col>type</table-col>
              <table-col>String</table-col>
              <table-col>Yes (for notify)</table-col>
              <table-col>{_('Defines notification type: "info", "warning", "error", "success", "primary", "secondary", "muted"')}</table-col>
            </table-row>
            <table-row>
              <table-col>message</table-col>
              <table-col>String</table-col>
              <table-col>Yes (for notify)</table-col>
              <table-col>{_('Sets the notification message content')}</table-col>
            </table-row>
            <table-row>
              <table-col>timeout</table-col>
              <table-col>Number</table-col>
              <table-col>No (for notify)</table-col>
              <table-col>{_('Duration in milliseconds before auto-dismissal (default: 5000)')}</table-col>
            </table-row>
          </layout-table>

          <a name="variants"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Variants')}</h2>
          <div class="mb-10">Notifications support multiple variants with distinct styles and icons.</div>
          <element-notify />
          <div class="grid gap-10">
            <element-button md info curved solid onclick="
              const notify = document.querySelector('element-notify');
              if (notify) {
                notify.innerHTML = '';
                notify.notify('info', 'Information alert!');
              }
            ">Show Info</element-button>
            <element-button md warning curved solid onclick="
              const notify = document.querySelector('element-notify');
              if (notify) {
                notify.innerHTML = '';
                notify.notify('warning', 'Warning alert!');
              }
            ">Show Warning</element-button>
            <element-button md success curved solid onclick="
              const notify = document.querySelector('element-notify');
              if (notify) {
                notify.innerHTML = '';
                notify.notify('success', 'Success alert!');
              }
            ">Show Success</element-button>
            <element-button md error curved solid onclick="
              const notify = document.querySelector('element-notify');
              if (notify) {
                notify.innerHTML = '';
                notify.notify('error', 'Error alert!');
              }
            ">Show Error</element-button>
            <element-button md primary curved solid onclick="
              const notify = document.querySelector('element-notify');
              if (notify) {
                notify.innerHTML = '';
                notify.notify('primary', 'Primary alert!');
              }
            ">Show Primary</element-button>
            <element-button md secondary curved solid onclick="
              const notify = document.querySelector('element-notify');
              if (notify) {
                notify.innerHTML = '';
                notify.notify('secondary', 'Secondary alert!');
              }
            ">Show Secondary</element-button>
            <element-button md muted curved solid onclick="
              const notify = document.querySelector('element-notify');
              if (notify) {
                notify.innerHTML = '';
                notify.notify('muted', 'Muted alert!');
              }
            ">Show Muted</element-button>
          </div>
          <ide-code class="scroll-y-auto mb-10 mt-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-notify />
            <element-button md info curved solid onclick="document.querySelector('element-notify').notify('info', 'Information alert!')">
              Show Info
            </element-button>
          `}</ide-code>

          <a name="position"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Position')}</h2>
          <div class="mb-10">Customize notification position with top, left, or center alignment.</div>
          <element-notify top />
          <element-notify left />
          <element-notify center />
          <element-notify />
          <div class="grid gap-10">
            <element-button md info curved solid onclick="
              document.querySelectorAll('element-notify').forEach(el => el.innerHTML = '');
              document.querySelector('element-notify[top]').notify('info', 'Top notification!');
            ">Show Top</element-button>
            <element-button md info curved solid onclick="
              document.querySelectorAll('element-notify').forEach(el => el.innerHTML = '');
              document.querySelector('element-notify[left]').notify('info', 'Left notification!');
            ">Show Left</element-button>
            <element-button md info curved solid onclick="
              document.querySelectorAll('element-notify').forEach(el => el.innerHTML = '');
              document.querySelector('element-notify[center]').notify('info', 'Centered notification!');
            ">Show Center</element-button>
            <element-button md info curved solid onclick="
              document.querySelectorAll('element-notify').forEach(el => el.innerHTML = '');
              document.querySelector('element-notify:not([top]):not([left]):not([center])').notify('info', 'Bottom right notification!');
            ">Show Bottom Right</element-button>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-notify top />
            <element-button md info curved solid onclick="document.querySelector('element-notify[top]').notify('info', 'Top notification!')">
              Show Top
            </element-button>
          `}</ide-code>

          <a name="timeout"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Timeout')}</h2>
          <div class="mb-10">Adjust how long notifications remain visible.</div>
          <element-notify />
          <div class="grid gap-10">
            <element-button md info curved solid onclick="
              const notify = document.querySelector('element-notify');
              if (notify) {
                notify.innerHTML = '';
                notify.notify('info', 'This lasts 8 seconds!', 8000);
              }
            ">Show 8s Notification</element-button>
            <element-button md info curved solid onclick="
              const notify = document.querySelector('element-notify');
              if (notify) {
                notify.innerHTML = '';
                notify.notify('info', 'Quick 3-second alert!', 3000);
              }
            ">Show 3s Notification</element-button>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-notify />
            <element-button md info curved solid onclick="document.querySelector('element-notify').notify('info', 'This lasts 8 seconds!', 8000)">
              Show 8s Notification
            </element-button>
          `}</ide-code>

          <a name="dismiss"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Dismiss')}</h2>
          <div class="mb-10">Notifications include a close button for manual dismissal.</div>
          <element-notify />
          <div class="grid gap-10">
            <element-button md info curved solid onclick="
              const notify = document.querySelector('element-notify');
              if (notify) {
                notify.innerHTML = '';
                notify.notify('info', 'Click the close icon to dismiss!');
              }
            ">Show Dismissible</element-button>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-notify />
            <element-button md info curved solid onclick="document.querySelector('element-notify').notify('info', 'Click the close icon to dismiss!')">
              Show Dismissible
            </element-button>
          `}</ide-code>

          <a name="stacked"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Stacked')}</h2>
          <div class="mb-10">Trigger multiple notifications to stack them vertically.</div>
          <element-notify />
          <div class="grid gap-10">
            <element-button md info curved solid onclick="
              const notify = document.querySelector('element-notify');
              if (notify) {
                notify.innerHTML = '';
                notify.notify('info', 'First notification!');
                setTimeout(() => notify.notify('success', 'Second notification!'), 1000);
                setTimeout(() => notify.notify('warning', 'Third notification!'), 2000);
              }
            ">Show Stacked Notifications</element-button>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-notify />
            <element-button md info curved solid onclick="const notify = document.querySelector('element-notify'); notify.notify('info', 'First notification!'); setTimeout(() => notify.notify('success', 'Second notification!'), 1000); setTimeout(() => notify.notify('warning', 'Third notification!'), 2000);">
              Show Stacked Notifications
            </element-button>
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/loader.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Loader')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/pager.html">
              {_('Pager')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>