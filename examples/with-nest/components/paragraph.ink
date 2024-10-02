<script>
  import { props, children } from '@stackpress/ink';
  const { classname } = props();
</script>
<p class={classname}>{children()}</p>