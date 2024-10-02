<script>
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //default host styles
  styles.add(':host', 'display', 'table-row-group');
</script>
<slot></slot>