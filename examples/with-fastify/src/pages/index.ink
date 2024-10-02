<link rel="import" href="@/components/header.ink" />
<link rel="import" href="@/components/paragraph.ink" />
<link rel="import" href="@/components/todo.ink" />
<style>
  body { 
    background-color: #DA532C; 
    color: #EFEFEF; 
  }
  img { width: 100px; height: 100px; }
  .title { text-align: center; }
  .logo { text-align: center; }
  .description { text-align: center; }
  .list { text-align: center; }
</style>
<script>
  import { env, props } from '@stackpress/ink';
  const { BUILD_ID, APP_DATA, NODE_ENV } = env();
  const { title, description, list, start } = props();
</script>
<html>
  <head>
    <title>{title}</title>
    <link rel="favicon" href="/favicon.ico" />
    <link rel="shortcut icon" type="image/png" href="/favicon.png" />
    <link rel="stylesheet" type="text/css" href={`/build/${BUILD_ID}.css`} />
    <script data-app={APP_DATA} src={`/build/${BUILD_ID}.js`}></script>
    <if true={NODE_ENV !== 'production'}>
      <script src="/dev.js"></script>
    </if>
  </head>
  <body class="light">
    <header class="title">
      {title} 
      <em>TODO</em>
    </header>
    <div class="logo">
      <img src="/ink-logo.png" alt="Logo" />
    </div>
    <paragraph classname="description">{description}</paragraph>
    <todo {list} {start} />
  </body>
</html>