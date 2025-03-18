<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@/components/api/docs.ink" name="api-docs" />
<link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/code.ink" name="format-code" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/color.ink" name="format-color" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/country.ink" name="format-country" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/currency.ink" name="format-currency" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/date.ink" name="format-date" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/email.ink" name="format-email" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/formula.ink" name="format-formula" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/html.ink" name="format-html" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/image.ink" name="format-image" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/imagelist.ink" name="format-imagelist" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/json.ink" name="format-json" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/link.ink" name="format-link" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/list.ink" name="format-list" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/markdown.ink" name="format-markdown" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/metadata.ink" name="format-metadata" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/number.ink" name="format-number" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/overflow.ink" name="format-overflow" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/phone.ink" name="format-phone" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/rating.ink" name="format-rating" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/separated.ink" name="format-separated" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/table.ink" name="format-table" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/taglist.ink" name="format-taglist" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/text.ink" name="format-text" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/yesno.ink" name="format-yesno" />
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
  const json = { icon: 'book', label: 'Docs' };
  const variables = { x: 10, y: 20 };
  const html = '<h1><strong style="color: green">Hello</strong> World</h1>';
  const images = [
    'https://images.wsj.net/im-580612/8SR', 
    'https://images.wsj.net/im-580612/8SR'
  ];
  const list = [ 'Item 1', 'Item 2' ];
  const metadata = { name: 'John Doe', age: 25 };
  const table = [
    { id: 2, name: 'Jane Doe', age: 25 }
  ];
  const stripes = [ 'bg-t-2', 'bg-t-3' ];
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
            {_('Formats')}
          </h1>
          <section class="flex flex-wrap gap-10">
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-code lang="js">compiler.render('./page.ink')</format-code>
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/code.html"
              >
                Code
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-color box-md text-md value="red" />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/color.html"
              >
                Color
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-country flag-md text-md value="us" />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/country.html"
              >
                Country
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-currency flag-lg text-lg value="usd" />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/currency.html"
              >
                Currency
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-date format="MMMM D YYYY, h:mm:ss a" />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/date.html"
              >
                Date
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-email primary underline md value="john@doe.com" />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/email.html"
              >
                Email
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                10 + 29 + 20 = 
                <format-formula 
                  value="29" 
                  formula="{x} + {this} + {y}" 
                  data={variables} 
                  bold
                />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/formula.html"
              >
                Formula
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-html value={html} />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/html.html"
              >
                HTML
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-image width="70" value="https://images.wsj.net/im-580612/8SR" />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/image.html"
              >
                Image
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-imagelist width="70" value={images} />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/imagelist.html"
              >
                Imagelist
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-json value={json} />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/json.html"
              >
                JSON
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-link 
                  secondary 
                  underline 
                  md 
                  target="_blank" 
                  value="https://iamawesome.com/" 
                />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/link.html"
              >
                Link
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-list value={list} item="tx-lh-36" />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/list.html"
              >
                List
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-markdown value="**Hello** World" />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/markdown.html"
              >
                Markdown
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-metadata 
                  value={metadata}
                  padding="10"
                  align="center"
                  background-theme="bg-1"
                  stripe-theme="bg-2"
                  border-theme="black"
                  format
                />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/metadata.html"
              >
                Metadata
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-number value="12345.67" separator="," decimal="." decimals={2} />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/number.html"
              >
                Number
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-overflow value="Lorem Ipsum" length={8} hellip />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/overflow.html"
              >
                Overflow
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-phone value="+63 (917) 555-2424" />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/phone.html"
              >
                Phone
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-rating class="tx-warning" value="3.5" max={5} remainder round="floor" />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/rating.html"
              >
                Rating
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-separated value={['Foo', 'bar']} separator="line" />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/separated.html"
              >
                Separated
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-table 
                  value={table} 
                  padding="10"
                  align="center"
                  background-theme="bg-1"
                  stripe-theme="bg-2"
                  header-theme="bg-2"
                  border-theme="black"
                />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/table.html"
              >
                Table
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-taglist value={['Foo', 'bar']} pill />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/taglist.html"
              >
                Taglist
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-text value="i am a title" capital />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/text.html"
              >
                Text
              </a>
            </div>
            <div class="basis-third-10 lg-basis-half-10 md-basis-full">
              <div class="bg-t-3 h-120 flex flex-center">
                <format-yesno value={true} />
              </div>
              <a 
                class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                href="/ink/ui/format/yesno.html"
              >
                Yesno
              </a>
            </div>
          </section>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>