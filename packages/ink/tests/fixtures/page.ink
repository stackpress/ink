<link rel="import" type="component" href="./dollar.ink" />
<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
</style>
<script form observe="disabled,on">
  import snippets from '@/modules/snippets/home';
  const url = '/';
  const title = 'Ink - The reactive web component template engine.';
  const description = 'Ink is a template engine hat generates web components and support reactivity.';
  const snippet1 = `//on server:
    import ink from '@stackpress/ink/compiler';
    //make a ink compiler
    const compiler = ink();
    //import a ink document file
    const { document } = await compiler.import('./page.ink');
    //render final HTML
    const results = document.render();
    //show final HTML
    console.log(results);`;
  const snippet2 = `<style>
      body { 
        background-color: #DA532C; 
        color: #EFEFEF; 
      }
      .title { text-align: center; }
    </style>
    <script>
      const title = 'Hello World';
    </script>
    <html>
    <head>
      <title>{title}</title>
    </head>
    <body>
      <h1 class="title">{title}</h1>
    </body>
    </html>`;
  const APP_DATA = 'window.__APP_DATA__ = { title, description, url };';
  const BUILD_ID = 'a1b2c3d4';
  const MODE = 'development';
</script>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:image" content="https://stackpress.github.io/ink/ink-logo.png" />
    <meta property="og:url" content={`https://stackpress.github.io/ink${url}`} />
    <meta property="og:type" content="website" />
    <link rel="stylesheet" type="text/css" href="/ink/styles/theme.css" />
    <link rel="stylesheet" type="text/css" href={`/ink/build/${BUILD_ID}.css`} />
    
    <script src="https://cdn.jsdelivr.net/npm/highlightjs-line-numbers.js/dist/highlightjs-line-numbers.min.js"></script>
    <script>{APP_DATA}</script>
    <script>console.log('hello')</script>
    <script src={`/ink/build/${BUILD_ID}.js`}></script>
    <if true={MODE !== 'production'}>
      <script src="/dev.js"></script>
    </if>
  </head>
  <body class="dark panel with-head">
    <dollar>
      <div title={title}><span>$</span> Ok</div>
    </dollar>
    <p>{snippet1}</p>
    <p>{snippet2}</p>
    <div>{`
<style>
  body { 
    background-color: #DA532C; 
    color: #EFEFEF; 
  }
  .title { text-align: center; }
</style>
<script>
  const title = 'Hello World';
</script>
<html>
<head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:image" content="https://stackpress.github.io/ink/ink-logo.png" />
  <link rel="stylesheet" type="text/css" href="/ink/styles/theme.css" />
  <script src="https://cdn.jsdelivr.net/npm/highlightjs-line-numbers.js/dist/highlightjs-line-numbers.min.js"></script>
  <script>{APP_DATA}</script>
  <script>alert('hello')</script>
  <if true={MODE !== 'production'}>
    <script src="/dev.js"></script>
  </if>
</head>
<body>
  <h1 class="title">{title}</h1>
</body>
</html>
`}</div>
  </body>
</html>
