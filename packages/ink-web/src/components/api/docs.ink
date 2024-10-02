<script>
  import { children, classlist } from '@stackpress/ink';
  classlist().add(
    'block', 'w-full', 'h-full', 
    'scroll-y-auto', 'scroll-x-hidden'
  );
</script>
<article class="block p-10 tx-t-1">{children()}</article>