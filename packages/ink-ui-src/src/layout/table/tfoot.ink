<link rel="import" type="component" href="./row.ink" name="table-row" />
<script>
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //default host styles
  styles.add(':host', 'display', 'table-footer-group');
</script>
<table-row><slot></slot></table-row>