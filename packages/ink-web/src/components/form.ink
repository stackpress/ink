<link rel="import" type="component" href="@stackpress/ink-ui/form/button.ink" name="form-button" />
<script>
  const { action } = this.props;
</script>
<form method="post" {action}>
  <form-button md success>Inside</form-button>
</form>