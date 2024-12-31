<link rel="import" href="@/components/header.ink" />
<link rel="import" href="@/components/paragraph.ink" />
<link rel="import" href="@/components/todo.ink" />
<style>
  :root {
    --primary: #1a1a2e;
    --secondary: #16213e;
    --accent: #0f3460;
    --text: #e94560;
  }

  body { 
    background-color: var(--primary);
    color: white;
    font-family: 'Segoe UI', system-ui, sans-serif;
    margin: 0;
    padding: 20px;
  }

  .title { 
    text-align: center;
    font-size: 2.5rem;
    color: var(--text);
    margin-bottom: 1rem;
  }

  .logo { 
    text-align: center;
    margin: 2rem 0;
  }

  .logo img { 
    width: 150px;
    height: auto;
    transition: transform 0.3s ease;
  }

  .logo img:hover {
    transform: scale(1.1);
  }

  .description { 
    text-align: center;
    color: #fff;
    max-width: 600px;
    margin: 2rem auto;
    line-height: 1.6;
  }

  .list { 
    text-align: center;
    background: var(--secondary);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  todo-item {
    background: var(--accent);
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 5px;
    display: block;
    color: white;
    transition: transform 0.2s;
  }

  todo-item:hover {
    transform: translateX(10px);
  }
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