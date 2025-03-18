<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@/components/api/docs.ink" name="api-docs" />
<link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table.ink" name="table-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/head.ink" name="table-head" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/foot.ink" name="table-foot" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/row.ink" name="table-row" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/col.ink" name="table-col" />
<link rel="import" type="component" href="@stackpress/ink-ui/form/button.ink" name="element-button" />
<link rel="import" type="component" href="@stackpress/ink-ui/form/control.ink" name="element-control" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/input.ink" name="element-input" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/textarea.ink" name="element-textarea" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/alert.ink" name="element-alert" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/tab.ink" name="element-tab" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="element-icon" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/badge.ink" name="element-badge" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/loader.ink" name="element-loader" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/tooltip.ink" name="element-tip" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/pager.ink" name="element-pager" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/crumbs.ink" name="element-crumbs" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/progress.ink" name="element-progress" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/notify.ink" name="element-notify" />
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
  const title = _('Ink UI - Components');
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
                <element-alert success>
                  <element-icon name="check-circle" />
                  Good News!
                </element-alert>
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/alert.html"
              >
                Alerts
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <element-badge warning curved class="mb-10">999</element-badge>
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/badge.html"
              >
                Badges
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <element-crumbs 
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
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/crumbs.html"
              >
                Crumbs
              </a>
            </div>
            
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <element-icon name="info-circle" class="tx-info" />
                <element-icon name="exclamation-triangle" class="tx-warning" />
                <element-icon name="times-circle" class="tx-error" />
                <element-icon name="check-circle" class="tx-success" />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/icon.html"
              >
                Icons
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <element-loader success size={5} thickness={5} dotted />
                <element-loader info slice={2} />
                <element-loader warning dashed />
                <element-loader error dashed thickness={10} size={10} speed={1500} />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/loader.html"
              >
                Loaders
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <element-alert error>
                  <element-icon name="times-circle" />
                  Errors on Submit
                </element-alert>
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/notify.html"
              >
                Notify
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <element-pager 
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
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/pager.html"
              >
                Pager
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
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/panel.html"
              >
                Panels
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <element-progress width={50} info class="bg-muted rounded tx-13 h-20 tx-lh-20 w-full-20" />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/progress.html"
              >
                Progress Bars
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <element-tab 
                  on
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-muted"  
                  group="http" 
                  selector="#http-index-ts"
                >
                  Tab 1
                </element-tab>
                <element-tab 
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-muted"  
                  group="http" 
                  selector="#http-page-ink"
                >
                  Tab 2
                </element-tab>
                <element-tab 
                  class="relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0"
                  active="bg-black tx-white"
                  inactive="bg-t-1 tx-muted"  
                  group="http" 
                  selector="#http-package-json"
                >
                  Tab 3
                </element-tab>
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/tab.html"
              >
                Tabs
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <table-layout 
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
                      <element-icon name="eye" class="mr-5 tx-info" />
                      <element-icon name="edit" class="mr-5 tx-warning" />
                      <element-icon name="trash" class="tx-error" />
                    </table-col>
                  </table-row>
                </table-layout>
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/components/table.html"
              >
                Tables
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
             
              <div class="bg-t-3 h-120 flex flex-center">
               <div class="tx-center"> Hover me! </div>
                <element-tip 
                  background-info 
                  curved 
                  top="-15"
                  left="50" 
                  padding="5"
                >This is the first and last name</element-tip>
                
              </div>
                
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
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