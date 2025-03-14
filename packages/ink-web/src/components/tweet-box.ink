<style>
  a, a:link, a:hover, a:active, a:visited {
    color: var(--info);
    text-decoration: none;
  }
  :host {
    display: block;
  }
  .tweet-box {
    background-color: var(--bg-2);
    border: 1px solid var(--bd-2);
    border-radius: 5px;
    display: flex;
    margin: 10px;
    padding: 20px;
  }
  .tweet-box .avatar {
    margin-right: 20px;
  }
  .tweet-box .avatar img {
    border-radius: 50%;
    width: 60px;
  }
  .tweet-box .content {
    flex: 1;
  }
  .tweet-box .content h3 {
    font-size: 16px;
    margin: 0;
  }
  .tweet-box .content a {
    font-size: 12px;
  }

  .tweet-box .content .message {
    font-size: 14px;
    line-height: 24px;
  }
</style>
<script>
  import { props, children } from '@stackpress/ink';
  const { name, handle, href, src } = props();
</script>
<main class="tweet-box">
  <aside class="avatar">
    <img src={src} alt={handle} />
  </aside>
  <section class="content">
    <h3>{name}</h3>
    <a {href} target="_blank">{handle}</a>
    <div class="message">{children()}</div>
  </section>
</main>
