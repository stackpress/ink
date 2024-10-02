<link rel="import" type="component" href="./manifest.ink" />
<style>
  :host { display: block; }
</style>
<script>
  import { props, children } from '@stackpress/ink';
  const { year, href } = props();
  const company = children();
</script>
<manifest {year} {href} {company} />