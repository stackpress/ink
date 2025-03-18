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

<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>

<script>
  import { env } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/ui/layout/table.html';
  const title = _('Ink UI - Table Component');
  const description = _('A customizable table component with sticky headers, columns, and responsive features.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'layout', label: 'Layout', href: '/ink/ui/layout/index.html' },
    { label: 'Table' }
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
            <a class="block tx-t-0" href="#table">{_('Table')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#outline">• {_('Outline Example')}</a>
              <a class="block tx-t-1" href="#borders">• {_('Table with Borders')}</a>
              <a class="block tx-t-1" href="#striped">• {_('Striped Table')}</a>
              <a class="block tx-t-1" href="#mobile-icon">• {_('Table with Mobile Icon Header')}</a>
              <a class="block tx-t-1" href="#sticky-footer">• {_('Table with Sticky Footer')}</a>
              <a class="block tx-t-1" href="#sticky-columns">• {_('Table with Sticky Columns')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="table"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Table')}</h1>
          <ide-app title="Table" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Table from '@stackpress/ink-ui/layout/table';
            </ide-code>
          </ide-app>

          <a name="props"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Props')}</h2>
          <layout-table top head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" odd="bg-t-0" even="bg-t-1">
            <table-head>{_('Property')}</table-head>
            <table-head>{_('Type')}</table-head>
            <table-head>{_('Required')}</table-head>
            <table-head>{_('Notes')}</table-head>
            <table-row>
              <table-col>top</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes headers sticky at the top (e.g., "10" or "10px"). Defaults to "0".')}</table-col>
            </table-row>
            <table-row>
              <table-col>bottom</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes footers sticky at the bottom (e.g., "10" or "10px"). Defaults to "0".')}</table-col>
            </table-row>
            <table-row>
              <table-col>left</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes first column sticky on the left (e.g., "10" or "10px"). Defaults to "0".')}</table-col>
            </table-row>
            <table-row>
              <table-col>right</table-col>
              <table-col>String | Number</table-col>
              <table-col>No</table-col>
              <table-col>{_('Makes last column sticky on the right (e.g., "10" or "10px"). Defaults to "0".')}</table-col>
            </table-row>
            <table-row>
              <table-col>head</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Classes for headers (e.g., "bg-primary tx-white").')}</table-col>
            </table-row>
            <table-row>
              <table-col>body</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Classes for body cells (e.g., "py-12 px-10").')}</table-col>
            </table-row>
            <table-row>
              <table-col>odd</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Classes for odd rows (e.g., "bg-t-0").')}</table-col>
            </table-row>
            <table-row>
              <table-col>even</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Classes for even rows (e.g., "bg-t-1").')}</table-col>
            </table-row>
            <table-row>
              <table-col>foot</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Classes for footers (e.g., "bg-t-2").')}</table-col>
            </table-row>
            <table-row>
              <table-col>nowrap</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Prevents text wrapping in cells (e.g., nowrap="").')}</table-col>
            </table-row>
            <table-row>
              <table-col>wrap1</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets cell width to 100px (e.g., wrap1="").')}</table-col>
            </table-row>
            <table-row>
              <table-col>wrap2</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets cell width to 200px (e.g., wrap2="").')}</table-col>
            </table-row>
            <table-row>
              <table-col>wrap3</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets cell width to 300px (e.g., wrap3="").')}</table-col>
            </table-row>
            <table-row>
              <table-col>wrap4</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets cell width to 400px (e.g., wrap4="").')}</table-col>
            </table-row>
            <table-row>
              <table-col>wrap5</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets cell width to 500px (e.g., wrap5="").')}</table-col>
            </table-row>
          </layout-table>

          <a name="outline"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Outline Example')}</h2>
          <div class="mb-10">{_('A simple table with alternating row colors.')}</div>
          <layout-table top head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" odd="bg-t-0" even="bg-t-1">
            <table-head>{_('Name')}</table-head>
            <table-head>{_('Role')}</table-head>
            <table-head>{_('Status')}</table-head>
            <table-row>
              <table-col>John Doe</table-col>
              <table-col>Developer</table-col>
              <table-col>Active</table-col>
            </table-row>
            <table-row>
              <table-col>Jane Smith</table-col>
              <table-col>Designer</table-col>
              <table-col>Pending</table-col>
            </table-row>
          </layout-table>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <layout-table top head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0" body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" odd="bg-t-0" even="bg-t-1">
              <table-head>{_('Name')}</table-head>
              <table-head>{_('Role')}</table-head>
              <table-head>{_('Status')}</table-head>
              <table-row>
                <table-col>John Doe</table-col>
                <table-col>Developer</table-col>
                <table-col>Active</table-col>
              </table-row>
              <table-row>
                <table-col>Jane Smith</table-col>
                <table-col>Designer</table-col>
                <table-col>Pending</table-col>
              </table-row>
            </layout-table>
          `}</ide-code>

          <a name="borders"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Table with Borders')}</h2>
          <div class="mb-10">{_('A table with borders around all cells.')}</div>
          <layout-table top head="py-12 px-10 bg-t-1 b-solid b-black bt-1 bx-1" body="py-12 px-10 b-solid b-black bt-1 bx-1" odd="bg-t-0" even="bg-t-1">
            <table-head>{_('ID')}</table-head>
            <table-head>{_('Name')}</table-head>
            <table-head>{_('Age')}</table-head>
            <table-row>
              <table-col>1</table-col>
              <table-col>Emily Watson</table-col>
              <table-col>29</table-col>
            </table-row>
            <table-row>
              <table-col>2</table-col>
              <table-col>Omar Ali</table-col>
              <table-col>35</table-col>
            </table-row>
          </layout-table>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <layout-table top head="py-12 px-10 bg-t-1 b-solid b-black bt-1 bx-1" body="py-12 px-10 b-solid b-black bt-1 bx-1" odd="bg-t-0" even="bg-t-1">
              <table-head>{_('ID')}</table-head>
              <table-head>{_('Name')}</table-head>
              <table-head>{_('Age')}</table-head>
              <table-row>
                <table-col>1</table-col>
                <table-col>Emily Watson</table-col>
                <table-col>29</table-col>
              </table-row>
              <table-row>
                <table-col>2</table-col>
                <table-col>Omar Ali</table-col>
                <table-col>35</table-col>
              </table-row>
            </layout-table>
          `}</ide-code>

          <a name="striped"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Striped Table')}</h2>
          <div class="mb-10">{_('A table with alternating row colors for better readability.')}</div>
          <layout-table top head="py-12 px-10 bg-t-2 tx-white" body="py-12 px-10" odd="bg-t-0" even="bg-t-1">
            <table-head>{_('Product')}</table-head>
            <table-head>{_('Category')}</table-head>
            <table-head>{_('Price')}</table-head>
            <table-row>
              <table-col>iPhone 13</table-col>
              <table-col>Electronics</table-col>
              <table-col>$799</table-col>
            </table-row>
            <table-row>
              <table-col>Nike Sneakers</table-col>
              <table-col>Fashion</table-col>
              <table-col>$120</table-col>
            </table-row>
          </layout-table>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <layout-table top head="py-12 px-10 bg-t-2 tx-white" body="py-12 px-10" odd="bg-t-0" even="bg-t-1">
              <table-head>{_('Product')}</table-head>
              <table-head>{_('Category')}</table-head>
              <table-head>{_('Price')}</table-head>
              <table-row>
                <table-col>iPhone 13</table-col>
                <table-col>Electronics</table-col>
                <table-col>$799</table-col>
              </table-row>
              <table-row>
                <table-col>Nike Sneakers</table-col>
                <table-col>Fashion</table-col>
                <table-col>$120</table-col>
              </table-row>
            </layout-table>
          `}</ide-code>

          <a name="mobile-icon"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Table with Mobile Icon Header')}</h2>
          <div class="mb-10">{_('A table where the "Actions" header toggles between text and an icon based on screen size, controlled by JavaScript.')}</div>
          <layout-table top head="py-12 px-10 bg-primary tx-white" body="py-12 px-10" odd="bg-t-0" even="bg-t-1">
            <table-head>{_('User')}</table-head>
            <table-head>{_('Email')}</table-head>
            <table-head>{_('Status')}</table-head>
            <table-head class="mobile-icon-header">
              <element-icon name="cog" class="tx-white icon" />
              <span class="text">{_('Actions')}</span>
            </table-head>
            <table-row>
              <table-col>John Doe</table-col>
              <table-col>john@example.com</table-col>
              <table-col>Active</table-col>
              <table-col>
                <element-icon name="eye" class="mr-5 tx-info" />
                <element-icon name="edit" class="mr-5 tx-warning" />
                <element-icon name="trash" class="tx-error" />
              </table-col>
            </table-row>
            <table-row>
              <table-col>Mary Jane</table-col>
              <table-col>mary@example.com</table-col>
              <table-col>Pending</table-col>
              <table-col>
                <element-icon name="eye" class="mr-5 tx-info" />
                <element-icon name="edit" class="mr-5 tx-warning" />
                <element-icon name="trash" class="tx-error" />
              </table-col>
            </table-row>
          </layout-table>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <script>
              function toggleMobileIconHeader() {
                const headers = document.querySelectorAll('.mobile-icon-header');
                const isMobile = window.innerWidth <= 768;
                headers.forEach(header => {
                  const icon = header.querySelector('.icon');
                  const text = header.querySelector('.text');
                  if (isMobile) {
                    icon.style.display = 'inline-block';
                    text.style.display = 'none';
                  } else {
                    icon.style.display = 'none';
                    text.style.display = 'inline-block';
                  }
                });
              }
              window.addEventListener('resize', toggleMobileIconHeader);
              window.addEventListener('load', toggleMobileIconHeader);
            </script>
            <layout-table top head="py-12 px-10 bg-primary tx-white" body="py-12 px-10" odd="bg-t-0" even="bg-t-1">
              <table-head>{_('User')}</table-head>
              <table-head>{_('Email')}</table-head>
              <table-head>{_('Status')}</table-head>
              <table-head class="mobile-icon-header">
                <element-icon name="cog" class="tx-white icon" />
                <span class="text">{_('Actions')}</span>
              </table-head>
              <table-row>
                <table-col>John Doe</table-col>
                <table-col>john@example.com</table-col>
                <table-col>Active</table-col>
                <table-col>
                  <element-icon name="eye" class="mr-5 tx-info" />
                  <element-icon name="edit" class="mr-5 tx-warning" />
                  <element-icon name="trash" class="tx-error" />
                </table-col>
              </table-row>
              <table-row>
                <table-col>Mary Jane</table-col>
                <table-col>mary@example.com</table-col>
                <table-col>Pending</table-col>
                <table-col>
                  <element-icon name="eye" class="mr-5 tx-info" />
                  <element-icon name="edit" class="mr-5 tx-warning" />
                  <element-icon name="trash" class="tx-error" />
                </table-col>
              </table-row>
            </layout-table>
          `}</ide-code>

          <a name="sticky-footer"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Table with Sticky Footer')}</h2>
          <div class="mb-10">{_('A table with a sticky footer using the `bottom` prop.')}</div>
          <layout-table top bottom head="py-12 px-10 bg-primary tx-white" body="py-12 px-10" foot="py-12 px-10 bg-t-2 tx-white" odd="bg-t-0" even="bg-t-1">
            <table-head>{_('ID')}</table-head>
            <table-head>{_('Name')}</table-head>
            <table-head>{_('Score')}</table-head>
            <table-row>
              <table-col>1</table-col>
              <table-col>Alex</table-col>
              <table-col>85</table-col>
            </table-row>
            <table-row>
              <table-col>2</table-col>
              <table-col>Blake</table-col>
              <table-col>92</table-col>
            </table-row>
            <table-foot>{_('Total')}</table-foot>
            <table-foot>-</table-foot>
            <table-foot>177</table-foot>
          </layout-table>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <layout-table top bottom head="py-12 px-10 bg-primary tx-white" body="py-12 px-10" foot="py-12 px-10 bg-t-2 tx-white" odd="bg-t-0" even="bg-t-1">
              <table-head>{_('ID')}</table-head>
              <table-head>{_('Name')}</table-head>
              <table-head>{_('Score')}</table-head>
              <table-row>
                <table-col>1</table-col>
                <table-col>Alex</table-col>
                <table-col>85</table-col>
              </table-row>
              <table-row>
                <table-col>2</table-col>
                <table-col>Blake</table-col>
                <table-col>92</table-col>
              </table-row>
              <table-foot>{_('Total')}</table-foot>
              <table-foot>-</table-foot>
              <table-foot>177</table-foot>
            </layout-table>
          `}</ide-code>

          <a name="sticky-columns"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Table with Sticky Columns')}</h2>
          <div class="mb-10">{_('A table with sticky left and right columns using `left` and `right` props.')}</div>
          <div class="overflow-auto">
            <layout-table top left right head="py-12 px-10 bg-primary tx-white" body="py-12 px-10" odd="bg-t-0" even="bg-t-1">
              <table-head>{_('ID')}</table-head>
              <table-head>{_('First Name')}</table-head>
              <table-head>{_('Last Name')}</table-head>
              <table-head>{_('Email')}</table-head>
              <table-head>{_('Status')}</table-head>
              <table-row>
                <table-col>1</table-col>
                <table-col>Emma</table-col>
                <table-col>Wilson</table-col>
                <table-col>emma@example.com</table-col>
                <table-col>Active</table-col>
              </table-row>
              <table-row>
                <table-col>2</table-col>
                <table-col>Liam</table-col>
                <table-col>Chen</table-col>
                <table-col>liam@example.com</table-col>
                <table-col>Pending</table-col>
              </table-row>
            </layout-table>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <div class="overflow-auto">
              <layout-table top left right head="py-12 px-10 bg-primary tx-white" body="py-12 px-10" odd="bg-t-0" even="bg-t-1">
                <table-head>{_('ID')}</table-head>
                <table-head>{_('First Name')}</table-head>
                <table-head>{_('Last Name')}</table-head>
                <table-head>{_('Email')}</table-head>
                <table-head>{_('Status')}</table-head>
                <table-row>
                  <table-col>1</table-col>
                  <table-col>Emma</table-col>
                  <table-col>Wilson</table-col>
                  <table-col>emma@example.com</table-col>
                  <table-col>Active</table-col>
                </table-row>
                <table-row>
                  <table-col>2</table-col>
                  <table-col>Liam</table-col>
                  <table-col>Chen</table-col>
                  <table-col>liam@example.com</table-col>
                  <table-col>Pending</table-col>
                </table-row>
              </layout-table>
            </div>
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/tab.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Tab')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/tooltip.html">
              {_('Tooltip')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>