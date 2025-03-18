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
<link rel="import" type="component" href="@stackpress/ink-ui/form/control.ink" name="form-control" />
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

  const url = '/ink/ui/components/control.html';
  const title = _('Ink UI - Form Control');
  const description = _('A wrapper component for form fields with labels and error messages.');
  
  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const crumbs = [
    { icon: 'home', label: 'Home', href: '/ink/index.html' },
    { icon: 'book', label: 'Docs', href: '/ink/docs/index.html' },
    { icon: 'icons', label: 'UI', href: '/ink/ui/index.html' },
        { icon: 'icons', label: 'Forms', href: '/ink/ui/form/index.html' },
    { label: 'Form Control' }
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
            <a class="block tx-t-0" href="#control">{_('Form Control')}</a>
            <nav class="pl-20">
              <a class="block tx-t-1" href="#props">• {_('Props')}</a>
              <a class="block tx-t-1" href="#basic">• {_('Basic Usage')}</a>
              <a class="block tx-t-1" href="#error">• {_('Error State')}</a>
              <a class="block tx-t-1" href="#combined">• {_('Combined Fields')}</a>
            </nav>
          </nav>
        </menu>
      </aside>
      <main>
        <api-docs>
          <nav class="p-10 bg-t-3 sticky top-0 z-50">
            <element-crumbs crumbs={crumbs} block bold white sep-muted link-primary spacing={2} />
          </nav>

          <a name="control"></a>
          <h1 class="tx-primary tx-upper tx-30 py-20">{_('Form Control')}</h1>
          <ide-app title="Form Control" class="py-20">
            <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" lang="js" trim>
              import Control from '@stackpress/ink-ui/form/control';
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
              <table-col>label</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Text for the field label')}</table-col>
            </table-row>
            <table-row>
              <table-col>error</table-col>
              <table-col>String</table-col>
              <table-col>No</table-col>
              <table-col>{_('Error message; sets text color to var(--error) if present')}</table-col>
            </table-row>
          </layout-table>

          <a name="basic"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Basic Usage')}</h2>
          <div class="mb-10">A simple form control with a label and input.</div>
          <div class="bg-t-3 p-10 mb-10">
            <form-control label="First Name">
              <field-input name="first" placeholder="Enter your first name" />
            </form-control>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <form-control label="First Name">
              <field-input name="first" placeholder="Enter your first name" />
            </form-control>
          `}</ide-code>

          <a name="error"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Error State')}</h2>
          <div class="mb-10">Display an error message below the field.</div>
          <div class="bg-t-3 p-10 mb-10">
            <form-control class="py-5" label="First Name*" error="Some Error">
              <field-input name="first" placeholder="Enter your first name" error />
            </form-control>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <form-control class="py-5" label="First Name*" error="Some Error">
              <field-input name="first" placeholder="Enter your first name" error />
            </form-control>
          `}</ide-code>

          <a name="combined"></a>
          <h2 class="tx-primary tx-upper tx-30 py-20">{_('Combined Fields')}</h2>
          <div class="mb-10">Multiple controls in a form with varying states.</div>
          <div class="bg-t-3 p-10 mb-10">
            <form-control class="py-5" label="First Name*">
              <field-input name="first" placeholder="Enter your first name" />
            </form-control>
            <form-control class="py-5" label="Last Name*" error="Last name is required">
              <field-input name="last" placeholder="Enter your last name" error />
            </form-control>
            <form-control class="py-5" label="Email">
              <field-input name="email" placeholder="Enter your email" type="email" />
            </form-control>
          </div>
          <ide-code class="scroll-y-auto mb-10 w-full max-w-full min-w-full overflow-auto bg-black text-white" trim detab={12}>{`
            <form-control class="py-5" label="First Name*">
              <field-input name="first" placeholder="Enter your first name" />
            </form-control>
            <form-control class="py-5" label="Last Name*" error="Last name is required">
              <field-input name="last" placeholder="Enter your last name" error />
            </form-control>
            <form-control class="py-5" label="Email">
              <field-input name="email" placeholder="Enter your email" type="email" />
            </form-control>
          `}</ide-code>

          <nav class="flex">
            <a class="tx-primary py-40" href="/ink/ui/form/button.html">
              <element-icon name="chevron-left" theme="tx-1" />{_('Buttons')}
            </a>
            <a class="flex-grow tx-right tx-primary py-40" href="/ink/ui/form/fieldset.html">
              {_('Fieldset')}<element-icon name="chevron-right" theme="tx-1" />
            </a>
          </nav>
          <footer class="foot"></footer>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>