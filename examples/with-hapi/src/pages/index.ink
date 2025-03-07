<link rel="import" href="@/components/header.ink" />
<link rel="import" href="@/components/paragraph.ink" />
<link rel="import" href="@/components/todo.ink" />
<style>
  body { 
    background-color: #CDD9E4; 
    color: #222222; 
  }
  img { width: 100px; height: 100px; }
  .title { display: block; text-align: center; }
  .logo { text-align: center; }
  .description { display: block; text-align: center; }
  .list { text-align: center; }
</style>
<script>
  import { env, props } from '@stackpress/ink';
  const { BUILD_ID, PUBLIC_ENV } = env();
  const { title, description, list, start } = props();
</script>
<html>
  <head>
    <title>{title}</title>
    <link rel="favicon" href="/favicon.ico" />
    <link rel="shortcut icon" type="image/png" href="/favicon.png" />
    <link rel="stylesheet" type="text/css" href={`/build/${BUILD_ID}.css`} />
    <script data-template type="application/json">__TEMPLATE_DATA__</script>
    <script src={`/build/${BUILD_ID}.js`}></script>
  </head>
  <body class="light">
    <header class="title">
      {title} 
      <em>TODO</em>
    </header>
    <div class="logo">
      <img src="/ink-icon.png" alt="Logo" />
    </div>
    <paragraph classname="description">{description}</paragraph>
    <todo {list} {start} />
  </body>
</html>