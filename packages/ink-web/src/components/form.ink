<link rel="import" type="component" href="@stackpress/ink-ui/form/control.ink" name="form-control" />
<link rel="import" type="component" href="@stackpress/ink-ui/field/input.ink" name="field-input" />
<link rel="import" type="component" href="@stackpress/ink-ui/form/fieldset.ink" name="form-fieldset" />
<script>
  const { input = {}, errors = {}, action } = this.props;
</script>
<form method="post" {action}>
  <form-control class="pt-20" label="Files">
    <form-fieldset legend="Files %s" name="files" value={input.files} multiple={true}>
      <form-control class="pt-20" label="Name" error={errors.name}>
        <field-input class="block" name="name" type={"text"} />
      </form-control>
      <form-control class="pt-20" label="URL" error={errors.url}>
        <field-input class="block" name="url" type={"url"} />
      </form-control>
    </form-fieldset>
  </form-control>
</form>