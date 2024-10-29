<link rel="import" type="component" href="@stackpress/ink-ui/layout/table.ink" name="table-layout" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/head.ink" name="table-head" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/row.ink" name="table-row" />
<link rel="import" type="component" href="@stackpress/ink-ui/layout/table/col.ink" name="table-col" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/alert.ink" name="element-alert" />
<link rel="import" type="component" href="@stackpress/ink-ui/element/icon.ink" name="element-icon" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/overflow.ink" name="format-overflow" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/image.ink" name="format-image" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/yesno.ink" name="format-yesno" />
<link rel="import" type="component" href="@stackpress/ink-ui/format/date.ink" name="format-date" />
<script>
  const { rows = [], none = 'No results found.' } = this.props;
</script>
<if true={rows.length > 0}>
  <table-layout
    head="py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0 tx-bold" 
    body="py-16 px-12 b-solid b-black bt-1 bb-0 bx-0" 
    odd="bg-t-0"
    even="bg-t-1"
    top
  >
    <table-head class="tx-left">ID</table-head>
  <table-head class="tx-left">Name</table-head>
  <table-head class="tx-left">Image</table-head>
  <table-head class="tx-right">Active</table-head>
  <table-head class="tx-right"><a class="tx-primary cursor-pointer">Created</a></table-head>
  <table-head class="tx-right"><a class="tx-primary cursor-pointer">Updated</a></table-head>
    <each key=i value=data from={rows}>
      <table-row>
        <table-col class="tx-left" nowrap><format-overflow length={10} hellip={true} value={data.id} /></table-col>
      <table-col class="tx-left" nowrap><a class="tx-primary cursor-pointer" href={data._view}>{data.name.toString()}</a></table-col>
      <table-col class="tx-left" nowrap><format-image value={data.image} /></table-col>
      <table-col class="tx-right" nowrap><a class="tx-primary cursor-pointer"><format-yesno value={data.active} /></a></table-col>
      <table-col class="tx-right" nowrap><format-date value={data.created} /></table-col>
      <table-col class="tx-right" nowrap><format-date value={data.updated} /></table-col>
      </table-row>
    </each>
  </table-layout>
<else />
  <element-alert info>
    <element-icon name="info-circle" />
    {none}
  </element-alert>
</if>