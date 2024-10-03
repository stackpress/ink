<link rel="import" href="@/components/header.ink" />
<link rel="import" href="@/components/paragraph.ink" />
<link rel="import" href="@/components/todo.ink" />
<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
<script>
  import { env, props } from '@stackpress/ink';
  const { BUILD_ID, APP_DATA } = env();
  const { title, description, list, start } = props();
</script>
<html>
  <head>
    <title>{title}</title>
    <link rel="favicon" href="/favicon.ico" />
    <link rel="shortcut icon" type="image/png" href="/favicon.png" />
    <link rel="stylesheet" type="text/css" href={`/build/${BUILD_ID}.css`} />
    <script data-app={APP_DATA} src={`/build/${BUILD_ID}.js`}></script>
    <script src="/dev.js"></script>
  </head>
  <body class="bg-orange-700 text-white text-center">
    <header class="text-3xl py-4 block font-bold">
      {title} 
      <em>TODO</em>
    </header>
    <div class="text-center">
      <img class="inline-block w-24" src="/ink-logo.png" alt="Logo" />
    </div>
    <paragraph classname="py-4">{description}</paragraph>
    <todo {list} {start} />
  </body>
</html>