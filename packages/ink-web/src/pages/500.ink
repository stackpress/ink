<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table.ink" name="table-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/head.ink" name="table-head" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/row.ink" name="table-row" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/col.ink" name="table-col" />
<link rel="import" type="component" href="@/components/ide/app.ink" name="ide-app" />
<link rel="import" type="component" href="@/components/ide/code.ink" name="ide-code" />
<link rel="import" type="component" href="@/components/ide/preview.ink" name="ide-preview" />
<link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />
<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>
<script>
  import { env, props } from '@stackpress/ink';
  import { _ } from '@/components/i18n';

  const url = '/ink/500.html';
  const title = _('Oops... - Ink - The reactive web component template engine.');
  const description = _('Ink is a template engine hat generates web components and support reactivity.');
  const { code, status, stack = [] } = props('document');

  if (Array.isArray(stack)) {
    stack.forEach(trace => {
      const { source, line, char } = trace;
      if (!source) return;
      const lines = source.split('\n');
      const snippet: Record<string, string|undefined> = {
        before: lines[line - 2] || undefined,
        main: lines[line - 1] || undefined,
        after: lines[line] || undefined,
      };
      //if location doesnt match main line
      if (snippet.main && snippet.main.length >= char) {
        snippet.location = ' '.repeat(Math.max(char - 1, 0)) + '^';
      }

      trace.snippet = snippet;
    });
  }

  
</script>
<html>
  <html-head />
  <body class="light bg-t-0 tx-t-1 tx-arial">
    <panel-layout>
      <header><html-header /></header>
      <main class="scroll-auto">
        <div class="p-20 w-calc-full-40">
          <h1 class="pt-10 pb-20">{_('Oops...')}</h1>
          <i18n-translate p trim>
            Something went wrong. Please try again later.
          </i18n-translate>
          <div class="bg-t-4 courier tx-lh-22 tx-word-wrap p-10 scroll-x-auto">
            {status}
          </div>
          <if true={stack.length}>
            <table-layout 
              class="w-full mt-20"
              top
              head="py-16 px-12 bg-t-2 b-solid b-black bt-1 bb-0 bx-0 tx-upper tx-bold" 
              body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" 
              odd="bg-t-1"
              even="bg-black tx-white tx-lh-8"
            >
              <each value=trace from=stack>
                <table-row>
                  <table-col nowrap>{trace.file} &mdash; {trace.method}</table-col>
                </table-row>
                <if true={trace.snippet}>
                  <table-row>
                    <table-col>
                      <if true={trace.snippet.before}>
                        <pre>{trace.line - 1} | {trace.snippet.before}</pre>
                      </if>
                      <if true={trace.snippet.main}>
                        <pre>{trace.line} | {trace.snippet.main}</pre>
                      </if>
                      <if true={trace.snippet.location}>
                        <pre>{' '.repeat(String(trace.line).length + 3)}{trace.snippet.location}</pre>
                      </if>
                      <if true={trace.snippet.after}>
                        <pre>{trace.line + 1} | {trace.snippet.after}</pre>
                      </if>
                    </table-col>
                  </table-row>
                </if>
              </each>
            </table-layout>
          </if>
        </div>
      </main>
    </panel-layout>
  </body>
</html>