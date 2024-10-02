<menu class="flex flex-center-y px-20 py-15 m-0 bg-t-1">
  <if true={url !== '/ink/index.html' && url !== '/ink/500.html'}>
    <i 
      class="fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1" 
      click=toggle
    ></i>
    <div class="flex-grow"></div>
  <else />
    <a href="/ink">
      <img 
        alt="Ink Logo" 
        class="h-26 mr-10" 
        src="/ink/ink-icon.png" 
      />
    </a>
  </if>
  <nav class="flex flex-center-y">
    <a class="tx-primary" href="/ink/docs/index.html">Docs</a>
    <a 
      class="tx-t-1 tx-5xl ml-10" 
      href="https://github.com/stackpress/ink" 
      target="_blank"
    >
      <i class="fab fa-github"></i>
    </a>
    <a 
      class="bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center" 
      href="https://www.npmjs.com/package/@stackpress/ink"
      target="_blank"
    >
      <i class="fab fa-npm tx-white"></i>
    </a>
  </nav>
</menu>