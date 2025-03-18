<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="template" href="@/components/html/header.ink" name="html-header" />
<link rel="import" type="template" href="@/components/html/aside.ink" name="html-aside" />
<link rel="import" type="component" href="@/components/api/docs.ink" name="api-docs" />
<link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/panel.ink" name="panel-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/form/button.ink" name="form-button"/>
<link rel="import" type="component" href="@stackpress/ink-ui/form/control.ink" name="form-control" />
<link rel="import" type="component" href="@stackpress/ink-ui/form/fieldset.ink" name="form-fieldset" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/color.ink" name="field-color" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/checkbox.ink" name="field-checkbox" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/country.ink" name="field-country" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/currency.ink" name="field-currency" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/date.ink" name="field-date" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/datetime.ink" name="field-datetime" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/editor.ink" name="field-editor" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/file.ink" name="field-file" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/filelist.ink" name="field-filelist" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/input.ink" name="field-input" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/markdown.ink" name="field-markdown" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/mask.ink" name="field-mask" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/metadata.ink" name="field-metadata" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/number.ink" name="field-number" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/password.ink" name="field-password" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/radio.ink" name="field-radio" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/range.ink" name="field-range" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/rating.ink" name="field-rating" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/select.ink" name="field-select" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/slug.ink" name="field-slug" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/switch.ink" name="field-switch" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/textarea.ink" name="field-textarea" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/taglist.ink" name="field-taglist" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/textlist.ink" name="field-textlist" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/time.ink" name="field-time" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/wysiwyg.ink" name="field-wysiwyg" />
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
  const title = _('Ink UI - Forms and Fields');
  const description = _('Ink UI atomically generates CSS styles and provides out of box web components.');

  const toggle = () => {
    document.querySelector('panel-layout').toggle('left');
  };
  const fileupload = (file, next) => {
    //just a mock call
    setTimeout(() => {
      next('https://images.wsj.net/im-580612/8SR')
    }, 5000)
  };
  const filelistupload = (files, next) => {
    //just a mock call
    setTimeout(() => {
      next(files.map((file, i) => 'https://images.wsj.net/im-580612/8SR'))
    }, 1000)
  };
  const metadata = { first: 'Jane', last: 'Doe' };
  const fieldset = [
    { first1: 'John', last1: 'Doe', fieldset2: [{ first2: 'Jane', last2: 'Doe' }] }
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
            {_('Forms')}
          </h1>
          <form method="get" action="/ink/ui/form/index.html">
            <section class="flex flex-wrap gap-10">
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <form-button class="mr-5" md success curved solid>
                    Submit
                  </form-button>
                  <form-button md warning rounded transparent href="#">
                    Submit
                  </form-button>
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/form/button.html"
                >
                  Buttons
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <form-control class="py-5" label="First Name*" error="Some Error">
                    <field-input name="first" placeholder="Enter your first name" error />
                  </form-control>
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/form/control.html"
                >
                  Control
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <form-fieldset legend="Fieldset %s" name="fieldset1" value={fieldset} multiple>
                    <field-input name="first1" placeholder="Enter your first name" />
                  </form-fieldset>
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/form/fieldset.html"
                >
                  Fieldset
                </a>
              </div>
            </section>
            <h1 class="tx-primary tx-upper tx-30 py-20">
              {_('Fields')}
            </h1>
            <section class="flex flex-wrap gap-10">
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-checkbox 
                    name="checkbox" 
                    label="Active?" 
                    value="yes" 
                    checked 
                    orange
                    update={console.log}
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/checkbox.html"
                >
                  Checkbox
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-color name="color" placeholder="Enter color" />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/color.html"
                >
                  Color
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-country  
                    name="country"
                    class="w-200 relative z-1"
                    placeholder="Choose Country" 
                    value="US"
                    open={(e) => console.log('open', e)}
                    close={(e) => console.log('close', e)}
                    filter={(e) => console.log('filter', e)}
                    select={(e) => console.log('select', e)}
                    remove={(e) => console.log('remove', e)}
                    add={(e) => console.log('add', e)}
                    clear={(e) => console.log('clear', e)}
                    change={(e) => console.log('change', e)}
                    update={(e) => console.log('update', e)}
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/country.html"
                >
                  Country
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-currency 
                    name="currency"
                    class="w-200"
                    placeholder="Choose Currency" 
                    value="PHP"
                    open={(e) => console.log('open', e)}
                    close={(e) => console.log('close', e)}
                    filter={(e) => console.log('filter', e)}
                    select={(e) => console.log('select', e)}
                    remove={(e) => console.log('remove', e)}
                    add={(e) => console.log('add', e)}
                    clear={(e) => console.log('clear', e)}
                    change={(e) => console.log('change', e)}
                    update={(e) => console.log('update', e)}
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/currency.html"
                >
                  Currency
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-date 
                    name="date" 
                    placeholder="Enter date" 
                    value="2020-01-01" 
                    update={console.log}
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/date.html"
                >
                  Date
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-datetime
                    name="datetime" 
                    placeholder="Enter datetime" 
                    value="2020-01-01 13:20:10" 
                    update={console.log}
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/datetime.html"
                >
                  Datetime
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-editor 
                    lang="javascript"
                    class="w-200 h-80 scroll-auto"
                    numbers={true}
                    name="editor" 
                    value="ink.render(true);" 
                    update={console.log}
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/editor.html"
                >
                  Editor
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-file 
                    name="file" 
                    class="block w-250" 
                    upload={fileupload} 
                    update={console.log} 
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/file.html"
                >
                  File
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-filelist
                    image
                    name="filelist" 
                    class="block w-250" 
                    upload={filelistupload} 
                    update={console.log} 
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/filelist.html"
                >
                  Filelist
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-input 
                    name="first"
                    placeholder="Enter your first name" 
                    value="test"
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/input.html"
                >
                  Input
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-markdown 
                    class="w-200 h-80 block"
                    numbers={true}
                    name="markdown" 
                    value="**I AM BOLD**" 
                    update={console.log}
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/markdown.html"
                >
                  Markdown
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-mask mask="999-999-9999" placeholder="999-999-9999" />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/mask.html"
                >
                  Mask
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-metadata 
                    class="w-250"
                    name="metadata" 
                    placeholder="Enter text" 
                    value={metadata} 
                    update={console.log}
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/metadata.html"
                >
                  Metadata
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center tx-black">
                  <field-number 
                    name="number"
                    min="0" 
                    max="10000" 
                    step="0.01" 
                    value="1234.56" 
                    update={console.log} 
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/number.html"
                >
                  Number
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-password 
                    name="password" 
                    placeholder="Enter password" 
                    update={console.log}
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/password.html"
                >
                  Password
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-radio 
                    name="radio" 
                    label="Yes" 
                    value="yes" 
                    checked
                    rounded
                    update={console.log}
                    class="mr-10"
                  />
                  <field-radio 
                    name="radio" 
                    label="No" 
                    value="no" 
                    rounded
                    update={console.log}
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/radio.html"
                >
                  Radio
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-range name="range" min="0" max="100" step="10" value="0" />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/range.html"
                >
                  Range
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-rating 
                    name="rating" 
                    value="0" 
                    primary xl2
                    update={console.log}
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/rating.html"
                >
                  Rating
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-select  
                    class="w-200 relative z-1"
                    name="select"
                    placeholder="Choose" 
                    value="1"
                    search
                    custom
                    multiple
                    open={(e) => console.log('open', e)}
                    close={(e) => console.log('close', e)}
                    filter={(e) => console.log('filter', e)}
                    select={(e) => console.log('select', e)}
                    remove={(e) => console.log('remove', e)}
                    add={(e) => console.log('add', e)}
                    clear={(e) => console.log('clear', e)}
                    change={(e) => console.log('change', e)}
                    update={(e) => console.log('update', e)}
                  >
                    <option value="1" keyword="option 1">Option 1</option>
                    <option value={4} keyword="option 2"><strong>Option 2</strong></option>
                    <option value={[1, '2', 3]} keyword="option 3">Option 3</option>
                    <option value={[1, '2', 3]} keyword="option 3">Option 4</option>
                  </field-select>
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/select.html"
                >
                  Select
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-slug
                    name="slug" 
                    placeholder="Enter slug" 
                    value="I AM A SLUG" 
                    update={console.log}
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/slug.html"
                >
                  Slug
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-switch 
                    name="switch" 
                    label="Active?" 
                    value="yes" 
                    checked 
                    update={console.log}
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/switch.html"
                >
                  Switch
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-taglist name="taglist" class="w-250"
                    placeholder="Enter Value" 
                    value={['foo', 'bar']} 
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/taglist.html"
                >
                  Taglist
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-textarea 
                    name="textarea" 
                    placeholder="Enter text" 
                    update={console.log}
                  >Some Text</field-textarea>
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/textarea.html"
                >
                  Textarea
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-textlist 
                    name="textlist[]" 
                    placeholder="Enter text" 
                    value={['foo', 'bar']} 
                    update={console.log}
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/textlist.html"
                >
                  Textlist
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center">
                  <field-time
                    name="time" 
                    placeholder="Enter time" 
                    value={new Date().getTime()} 
                    update={console.log}
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/time.html"
                >
                  Time
                </a>
              </div>
              <div class="basis-third-10 lg-basis-half-10 md-basis-full">
                <div class="bg-t-3 h-120 flex flex-center scroll-hidden">
                  <field-wysiwyg 
                    class="w-200 h-100"
                    name="wysiwyg" 
                    value="I am ironman." 
                    size 
                    color     
                    update={console.log}
                  />
                </div>
                <a 
                  class="block tx-center tx-primary p-10 b-solid b-t-3 b-1" 
                  href="/ink/ui/field/wysiwyg.html"
                >
                  WYSIWYG
                </a>
              </div>
            </section>
          </form>
        </api-docs>
      </main>
    </panel-layout>
  </body>
</html>