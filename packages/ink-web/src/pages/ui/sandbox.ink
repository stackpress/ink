<link rel="import" type="template" href="@/components/html/head.ink" name="html-head" />
<link rel="import" type="component" href="@stackpress/ink-ui/form/button.ink" name="form-button" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="element-icon" />
<link rel="import" type="component" href="@/components/sandbox/app.ink" name="admin-app" />
<link rel="import" type="component" href="@/components/sandbox/filters.ink" name="profile-filters" />
<style>
  @ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
</style>
<script>
  import { env, props } from '@stackpress/ink';

  const { 
    q,
    code = 200, 
    status = 'OK',
    span = {}, 
    filter = {},
    results = [],
    settings = { menu: [] },
    total = 0,
    skip = 0,
    take = 50
  } = props('document');
  
  const url = '/ink/index.html';
  const title = 'Profile Search';
  const description = 'Search for profiles in the system.';

  const crumbs = [
    { icon: 'home', label: 'Home', href: '/admin' },
    { icon: 'user', label: 'Profiles' }
  ];
</script>
<html>
  <html-head />
  <body class="relative dark bg-t-0 tx-t-1 tx-arial">
    <admin-app {settings} {url} {title} {code} {status}>
      <aside class="absolute z-5 bottom-0 top-0 right-0 w-360 flex flex-col">
        <header class="flex flex-center-y bg-t-0 px-5 py-8">
          <element-icon name="chevron-left" class="pr-10" />
          <h3 class="tx-upper">Filters</h3>
        </header>
        <main class="flex-grow bg-t-1">
          <profile-filters {filter} {span} />
        </main>
      </aside>
    </admin-app>
  </body>
</html>