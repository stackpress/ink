<header class="flex flex-center-y bg-t-2 py-15 pr-5 pl-10">
  <a href="/ink">
    <img class="h-26 mr-10" src="/ink/ink-icon.png" alt="Ink Logo" />
  </a>
  <h3 class="flex-grow m-0 tx-upper">
    <a class="tx-primary" href="/ink">Ink</a>
  </h3>
  <i class="fas fa-fw fa-chevron-left cursor-pointer none md-inline-block" click=toggle></i>
</header>
<nav class="bg-t-1 scroll-auto h-calc-full-60">
  <h6 class="bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper">
    {_('Introduction')}
  </h6>
  <if true={url === '/docs/index.html'}>
    <a class="block tx-info py-10 pl-10 tx-bold" href="/ink/docs/index.html">
      {_('Documentation')}
    </a>
  <else />
    <a class="block tx-info py-10 pl-10" href="/ink/docs/index.html">
      {_('Documentation')}
    </a>
  </if>
  <if true={url === '/docs/getting-started.html'}>
    <a class="block tx-info py-10 pl-10 tx-bold" href="/ink/docs/getting-started.html">
      {_('Getting Started')}
    </a>
  <else />
    <a class="block tx-info py-10 pl-10" href="/ink/docs/getting-started.html">
      {_('Getting Started')}
    </a>
  </if>

  <h6 class="bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper">
    {_('Features')}
  </h6>
  <if true={url === '/docs/markup-syntax.html'}>
    <a class="block tx-info py-10 pl-10 tx-bold" href="/ink/docs/markup-syntax.html">
      {_('Markup Syntax')}
    </a>
  <else />
    <a class="block tx-info py-10 pl-10" href="/ink/docs/markup-syntax.html">
      {_('Markup Syntax')}
    </a>
  </if>
  <if true={url === '/docs/state-management.html'}>
    <a class="block tx-info py-10 pl-10 tx-bold" href="/ink/docs/state-management.html">
      {_('State Management')}
    </a>
  <else />
    <a class="block tx-info py-10 pl-10" href="/ink/docs/state-management.html">
      {_('State Management')}
    </a>
  </if>
  <if true={url === '/docs/component-strategy.html'}>
    <a class="block tx-info py-10 pl-10 tx-bold" href="/ink/docs/component-strategy.html">
      {_('Component Strategy')}
    </a>
  <else />
    <a class="block tx-info py-10 pl-10" href="/ink/docs/component-strategy.html">
      {_('Component Strategy')}
    </a>
  </if>
  <if true={url === '/docs/compiler-api.html'}>
    <a class="block tx-info py-10 pl-10 tx-bold" href="/ink/docs/compiler-api.html">
      {_('Compiler API')}
    </a>
  <else />
    <a class="block tx-info py-10 pl-10" href="/ink/docs/compiler-api.html">
      {_('Compiler API')}
    </a>
  </if>
  <if true={url === '/docs/client-api.html'}>
    <a class="block tx-info py-10 pl-10 tx-bold" href="/ink/docs/client-api.html">
      {_('Client API')}
    </a>
  <else />
    <a class="block tx-info py-10 pl-10" href="/ink/docs/client-api.html">
      {_('Client API')}
    </a>
  </if>

  <h6 class="bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper">
    {_('Usage')}
  </h6>
  <if true={url === '/docs/template-engine.html'}>
    <a class="block tx-info py-10 pl-10 tx-bold" href="/ink/docs/template-engine.html">
      {_('Template Engine')}
    </a>
  <else />
    <a class="block tx-info py-10 pl-10" href="/ink/docs/template-engine.html">
      {_('Template Engine')}
    </a>
  </if>
  <if true={url === '/docs/single-page.html'}>
    <a class="block tx-info py-10 pl-10 tx-bold" href="/ink/docs/single-page.html">
      {_('Single Page App')}
    </a>
  <else />
    <a class="block tx-info py-10 pl-10" href="/ink/docs/single-page.html">
      {_('Single Page App')}
    </a>
  </if>
  <if true={url === '/docs/static-site.html'}>
    <a class="block tx-info py-10 pl-10 tx-bold" href="/ink/docs/static-site.html">
      {_('Static Site Generator')}
    </a>
  <else />
    <a class="block tx-info py-10 pl-10" href="/ink/docs/static-site.html">
      {_('Static Site Generator')}
    </a>
  </if>
  <if true={url === '/docs/component-publisher.html'}>
    <a class="block tx-info py-10 pl-10 tx-bold" href="/ink/docs/component-publisher.html">
      {_('Component Publisher')}
    </a>
  <else />
    <a class="block tx-info py-10 pl-10" href="/ink/docs/component-publisher.html">
      {_('Component Publisher')}
    </a>
  </if>
  <if true={url === '/docs/developer-tools.html'}>
    <a class="block tx-info py-10 pl-10 tx-bold" href="/ink/docs/developer-tools.html">
      {_('Developer Tools')}
    </a>
  <else />
    <a class="block tx-info py-10 pl-10" href="/ink/docs/developer-tools.html">
      {_('Developer Tools')}
    </a>
  </if>


    <h6 class="bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper">
  {_('UI')}
</h6>
<if true={url === '/ui/index.html'}>
  <a class="block tx-info py-10 pl-10 tx-bold" href="/ink/ui/index.html">
    {_('Components')}
  </a>
<else />
  <a class="block tx-info py-10 pl-10" href="/ink/ui/index.html">
    {_('Components')}
  </a>
</if>

<if true={url === '/ui/form/index.html'}>
  <a class="block tx-info py-10 pl-10 tx-bold" href="/ink/ui/form/index.html">
    {_('Forms and Fields')}
  </a>
<else />
  <a class="block tx-info py-10 pl-10" href="/ink/ui/form/index.html">
    {_('Forms and Fields')}
  </a>
</if>

<if true={url === '/ui/format/index.html'}>
  <a class="block tx-info py-10 pl-10 tx-bold" href="/ink/ui/format/index.html">
    {_('Formats')}
  </a>
<else />
  <a class="block tx-info py-10 pl-10 mb-100" href="/ink/ui/format/index.html">
    {_('Formats')}
  </a>
</if>
</nav>