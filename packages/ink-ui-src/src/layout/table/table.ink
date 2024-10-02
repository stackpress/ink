<script>
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //default host styles
  styles.add(':host', 'display', 'table');
  styles.add(':host', 'width', '100%');
</script>
<slot></slot>