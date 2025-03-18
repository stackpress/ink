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

  const url = '/ink/ui/components/icon.html';
  const title = _('Ink UI - Icon Component');
  const description = _('A customizable icon component using Font Awesome icons.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
    { icon: 'icons', label: 'Components', href: '/ink/ui/index.html' },
    { label: 'Icon' }
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
            <a class="block tx-t-0" href="#icon">{_('Icon')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#colors">• {_('Colors')}</a>
              <a class="block tx-t-1" href="#sizes">• {_('Sizes')}</a>
              <a class="block tx-t-1" href="#types">• {_('Types')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="icon"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Icon')}</h1>
          <ide-app title="Icon" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Icon from '@stackpress/ink-ui/element/icon';
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
              <table-col>Yes</table-col>
              <table-col>{_('Font Awesome icon name (e.g., "info-circle", "star")')}</table-col>
            </table-row>
            <table-row>
              <table-col>solid</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Uses solid icon style (default)')}</table-col>
            </table-row>
            <table-row>
              <table-col>brand</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Uses brand icon style (overrides solid)')}</table-col>
            </table-row>
            <table-row>
              <table-col>size</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets custom font size (e.g., "md", "lg")')}</table-col>
            </table-row>
            <table-row>
              <table-col>xs</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 10px')}</table-col>
            </table-row>
            <table-row>
              <table-col>sm</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 12px')}</table-col>
            </table-row>
            <table-row>
              <table-col>md</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 14px')}</table-col>
            </table-row>
            <table-row>
              <table-col>lg</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 16px')}</table-col>
            </table-row>
            <table-row>
              <table-col>xl</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 18px')}</table-col>
            </table-row>
            <table-row>
              <table-col>xl2</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 20px')}</table-col>
            </table-row>
            <table-row>
              <table-col>xl3</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 22px')}</table-col>
            </table-row>
            <table-row>
              <table-col>xl4</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 24px')}</table-col>
            </table-row>
            <table-row>
              <table-col>xl5</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets font size to 26px')}</table-col>
            </table-row>
            <table-row>
              <table-col>color</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets custom color (e.g., "salmon", "#ff0000")')}</table-col>
            </table-row>
            <table-row>
              <table-col>white</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets color to var(--white)')}</table-col>
            </table-row>
            <table-row>
              <table-col>black</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets color to var(--black)')}</table-col>
            </table-row>
            <table-row>
              <table-col>info</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets color to var(--info)')}</table-col>
            </table-row>
            <table-row>
              <table-col>warning</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets color to var(--warning)')}</table-col>
            </table-row>
            <table-row>
              <table-col>success</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets color to var(--success)')}</table-col>
            </table-row>
            <table-row>
              <table-col>error</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets color to var(--error)')}</table-col>
            </table-row>
            <table-row>
              <table-col>muted</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets color to var(--muted)')}</table-col>
            </table-row>
            <table-row>
              <table-col>primary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets color to var(--primary)')}</table-col>
            </table-row>
            <table-row>
              <table-col>secondary</table-col>
              <table-col>Boolean</table-col>
              <table-col>No</table-col>
              <table-col>{_('Sets color to var(--secondary)')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">Basic icons with default solid style.</div>
          <div class="bg-t-3 p-10 flex gap-10">
            <element-icon name="star" />
            <element-icon name="heart" />
            <element-icon name="bell" />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-icon name="star" />
            <element-icon name="heart" />
            <element-icon name="bell" />
          `}</ide-code>

          <a name="colors"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Colors')}</h2>
          <div class="mb-10">Customize icon colors with predefined or custom values.</div>
          <div class="bg-t-3 p-10 flex gap-10">
            <element-icon name="info-circle" info />
            <element-icon name="exclamation-triangle" warning />
            <element-icon name="times-circle" error />
            <element-icon name="check-circle" success />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-icon name="info-circle" info />
            <element-icon name="exclamation-triangle" warning />
            <element-icon name="times-circle" error />
            <element-icon name="check-circle" success />
          `}</ide-code>
          <div class="bg-t-3 p-10 flex gap-10">
            <element-icon name="star" color="purple" />
            <element-icon name="heart" color="#ff4500" />
            <element-icon name="bell" primary />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-icon name="star" color="purple" />
            <element-icon name="heart" color="#ff4500" />
            <element-icon name="bell" primary />
          `}</ide-code>

          <a name="sizes"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Sizes')}</h2>
          <div class="mb-10">Adjust icon sizes with predefined options.</div>
          <div class="bg-t-3 p-10 flex gap-10 align-center">
            <element-icon name="star" sm />
            <element-icon name="star" md />
            <element-icon name="star" lg />
            <element-icon name="star" xl2 />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-icon name="star" sm />
            <element-icon name="star" md />
            <element-icon name="star" lg />
            <element-icon name="star" xl2 />
          `}</ide-code>

          <a name="types"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Types')}</h2>
          <div class="mb-10">Use solid or brand icon styles.</div>
          <div class="bg-t-3 p-10 flex gap-10">
            <element-icon name="star" solid />
            <element-icon name="twitter" brand />
            <element-icon name="github" brand />
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <element-icon name="star" solid />
            <element-icon name="twitter" brand />
            <element-icon name="github" brand />
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/components/crumbs.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Crumbs')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/components/loader.html">
              {_('Loader')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>