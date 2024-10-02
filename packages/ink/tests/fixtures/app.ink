<link rel="import" href="./components/header.ink" />
<link rel="import" href="./components/paragraph.ink" />
<link rel="import" href="./components/todo.ink" />
<style>
  :host { 
    background-color: #DA532C; 
    color: #EFEFEF; 
    display: block;
    height: 100%;
    margin: 0px;
    padding: 1px;
    width: 100%;
  }
  img { width: 100px; height: 100px; }
  .title { text-align: center; }
  .logo { text-align: center; }
  .description { text-align: center; }
  .list { text-align: center; }
</style>
<script>
  import { globals } from '@stackpress/ink';
  const title = 'Ink';
  const description = 'Edit this file to change the content of the page.';
  const list = [
    'Edit this file',
    'Restyle this page',
    'Create your own component',
    'Star the Ink Repo',
    'Write a blog post about Ink',
    'Fork the respository',
    'Contribute to the project'
  ];
  const start = 0;
</script>
<header class="title">{title}</header>
<div class="logo">
  <img src="/ink-logo.png" alt="Logo" />
</div>
<paragraph classname="description">
  {description}
</paragraph>
<todo {list} {start} />