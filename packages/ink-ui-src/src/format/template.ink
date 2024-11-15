<script>
  import mustache from 'mustache';
  //extract props
  const { template, value = {} } = this.props;
  const output = mustache.render(template, value);
</script>
{output}