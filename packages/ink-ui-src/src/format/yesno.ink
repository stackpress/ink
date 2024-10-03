<script>
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import setBold from '../utilities/style/bold';
  import setColor from '../utilities/style/color';
  import setDisplay from '../utilities/style/display';
  import setSize from '../utilities/style/size';
  //extract props
  const { value, yes = 'Yes', no = 'No' } = this.props;
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //determine display
  setDisplay(this.props, styles, 'inline-block');
  //determine color
  setColor(this.props, styles, false, ':host', 'color');
  //determine size
  setSize(this.props, styles, false, ':host', 'font-size');
  //determine font weight
  setBold(this.props, styles, ':host');
</script>
{value ? yes : no}