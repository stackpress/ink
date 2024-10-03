<link rel="import" type="component" href="../layout/table.ink" name="interface-table" />
<link rel="import" type="component" href="../layout/table/row.ink" name="table-row" />
<link rel="import" type="component" href="../layout/table/col.ink" name="table-col" />
<script>
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import setColor from '../utilities/style/color';
  //extract props
  const { 
    value = [],
    //styles
    padding, align, format, 
    //sub-props: colors for bg, head, stripe, border-top
    background, border, stripe
  } = this.propsTree;
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //default host styles
  styles.add(':host', 'display', 'block');
  styles.add('table', 'width', '100%');
  styles.add('table', 'border', '0');
  styles.add('table', 'border-spacing', '0');
  //determine padding (Y)
  if (padding) {
    styles.add('td', 'padding', `${padding}px`);
  }
  //determine text alignment
  if (align) {
    styles.add('td', 'text-align', align);
  }
  //determine font color
  setColor(this.props, styles, false, ':host', 'color');
  //determine general background color
  if (background) {
    setColor(background, styles, false, 'td', 'background-color');
  }
  //determine stripe colors
  if (stripe) {
    setColor(
      stripe, 
      styles, 
      false, 
      'tr:nth-child(odd) td', 
      'background-color'
    );
  }
  //determine border top colors
  if (border) {
    styles.add('td', 'border-bottom-width', '0');
    styles.add('td', 'border-left-width', '0');
    styles.add('td', 'border-right-width', '0');
    styles.add('td', 'border-top-width', '1px');
    styles.add('td', 'border-top-style', 'solid');
    setColor(border, styles, false, 'td', 'border-top-color');
  }
  const data = format 
    ? Object.fromEntries(
        Object.entries(value).map(
          ([ key, value ]) => [ 
            key.replace(/[\-\_]/g, ' ').split(' ').map(
              word => word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' '), 
            value 
          ]
        )
      ) 
    : value;
</script>
<table>
  <each value=value key=key from=data>
    <tr>
      <td>{key}</td>
      <td>{value}</td>
    </tr>
  </each>
</table>