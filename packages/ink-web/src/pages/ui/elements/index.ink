<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@/components/api/docs.ink" name="api-docs" />
<link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table.ink" name="interface-table" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/head.ink" name="table-head" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/foot.ink" name="table-foot" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/row.ink" name="table-row" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/col.ink" name="table-col" />
<link rel="import" type="component" href="@stackpress/ink-ui/form/button.ink" name="interface-button" />
<link rel="import" type="component" href="@stackpress/ink-ui/form/control.ink" name="interface-control" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/input.ink" name="interface-input" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/textarea.ink" name="interface-textarea" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/alert.ink" name="interface-alert" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/tab.ink" name="interface-tab" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="interface-icon" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/badge.ink" name="interface-badge" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/loader.ink" name="interface-loader" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/tooltip.ink" name="interface-tip" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/pager.ink" name="interface-pager" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/crumbs.ink" name="interface-crumbs" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/progress.ink" name="interface-progress" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/notify.ink" name="interface-notify" />
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
  const title = _('Ink UI - Web Components Meets Atomic Styles.');
  const description = _('Ink UI atomically generates CSS styles and provides out of box web components.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs' }
  ];
</script>
<html>
  <html-head />
  <body class="light bg-t-0 tx-t-1 tx-arial">
    <panel-layout>
      <header><html-header /></header>
      <aside left><html-aside /></aside>
      <main>
        <api-docs>
          <h1 class="tx-primary tx-upper tx-30 py-20">
            {_('Components')}
          </h1>
          <section class="flex flex-wrap gap-10">
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <interface-alert success>
                  <interface-icon name="check-circle" />
                  Good News!
                </interface-alert>
              </div>
              <a 
                class="block tx-center tx-white p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/alert.html"
              >
                Alerts
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <interface-badge warning curved class="mb-10">999</interface-badge>
              </div>
              <a 
                class="block tx-center tx-white p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/badge.html"
              >
                Badges
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <interface-crumbs 
                  crumbs={crumbs} 
                  block 
                  bold 
                  white 
                  underline
                  icon-muted
                  link-primary
                  spacing={2}
                />
              </div>
              <a 
                class="block tx-center tx-white p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/crumbs.html"
              >
                Crumbs
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <interface-icon name="info-circle" class="tx-info" />
                <interface-icon name="exclamation-triangle" class="tx-warning" />
                <interface-icon name="times-circle" class="tx-error" />
                <interface-icon name="check-circle" class="tx-success" />
              </div>
              <a 
                class="block tx-center tx-white p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/icon.html"
              >
                Icons
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <interface-loader success size={5} thickness={5} dotted />
                <interface-loader info slice={2} />
                <interface-loader warning dashed />
                <interface-loader error dashed thickness={10} size={10} speed={1500} />
              </div>
              <a 
                class="block tx-center tx-white p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/loader.html"
              >
                Loaders
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <interface-alert error>
                  <interface-icon name="times-circle" />
                  Errors on Submit
                </interface-alert>
              </div>
              <a 
                class="block tx-center tx-white p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/notify.html"
              >
                Notify
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <interface-pager 
                  total={500} 
                  range={100} 
                  start={90} 
                  show={3} 
                  next
                  prev
                  rewind
                  forward
                  white
                  bold
                  underline
                  bg-info
                  border-theme="bd-2"
                  square={40}
                  select={console.log}
                />
              </div>
              <a 
                class="block tx-center tx-white p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/pager.html"
              >
                Pagers
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120">
                <div class="relative w-full h-full">
                  <header class="absolute top-0 left-20p right-0 h-50p b-solid b-t-1"><div class="p-5">Head</div></header>
                  <aside class="absolute w-20p top-0 bottom-0 left-0 b-solid b-t-1"><div class="p-5">Left</div></aside>
                  <aside class="absolute w-30p top-50p bottom-0 right-0 b-solid b-t-1"><div class="p-5">Right</div></aside>
                  <main class="absolute top-50p bottom-0 left-20p right-30p b-solid b-t-1"><div class="p-5">Main</div></main>
                </div>
              </div>
              <a 
                class="block tx-center tx-white p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/panel.html"
              >
                Panels
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <interface-progress width={50} info class="bg-muted rounded tx-13 h-20 tx-lh-20 w-full-20" />
              </div>
              <a 
                class="block tx-center tx-white p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/progress.html"
              >
                Progress Bars
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <interface-tab 
                  on
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-muted"  
                  group="http" 
                  selector="#http-index-ts"
                >
                  Tab 1
                </interface-tab>
                <interface-tab 
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-muted"  
                  group="http" 
                  selector="#http-page-ink"
                >
                  Tab 2
                </interface-tab>
                <interface-tab 
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-muted"  
                  group="http" 
                  selector="#http-package-json"
                >
                  Tab 3
                </interface-tab>
              </div>
              <a 
                class="block tx-center tx-white p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/tab.html"
              >
                Tabs
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <interface-table 
                  class="h-90 w-250"
                  top left
                  head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" 
                  body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" 
                  odd="bg-t-1"
                  even="bg-t-0"
                >
                  <table-row col="b-t-3 bg-t-3">
                    <table-col nowrap>John Doe</table-col>
                    <table-col>21</table-col>
                    <table-col wrap-5>
                      Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit. Duis laoreet lectus eget enim rhoncus, vel 
                      volutpat eros tincidunt. In molestie nunc ut pulvinar 
                      sollicitudin.
                    </table-col>
                    <table-col nowrap>
                      <interface-icon name="eye" class="mr-5 tx-info" />
                      <interface-icon name="edit" class="mr-5 tx-warning" />
                      <interface-icon name="trash" class="tx-error" />
                    </table-col>
                  </table-row>
                </interface-table>
              </div>
              <a 
                class="block tx-center tx-white p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/table.html"
              >
                Tables
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <interface-tip 
                  background-info 
                  curved 
                  top="-15"
                  left="50" 
                  padding="5"
                >This is the first and last name</interface-tip>
              </div>
              <a 
                class="block tx-center tx-white p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/tooltip.html"
              >
                Tooltips
              </a>
            </div>
          </section>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>