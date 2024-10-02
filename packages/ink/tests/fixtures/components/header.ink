<style>
  :host h1 { 
    font-size: 21px; 
    font-weight: bold;
    text-transform: uppercase;
  }
</style>
<script>
  import { props } from '@stackpress/ink';
  const { className, children } = props();
</script>
<h1 class=className>{children}</h1>