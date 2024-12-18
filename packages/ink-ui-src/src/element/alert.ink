<script>
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import setColor from '../utilities/style/color';
  import setCurve from '../utilities/style/curve';
  import setDisplay from '../utilities/style/display';
  //extract props
  const { 
    //layouts
    outline, solid, transparent, 
    //padding
    padding
  } = this.props;
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //determine display
  setDisplay(this.props, styles, 'block', ':host');
  //determine padding
  styles.add(':host', 'padding', padding ? `${padding}px` : '16px');
  //determine curve
  setCurve(this.props, styles, false, ':host');
  //if outline or transparent
  if (outline || transparent) {
    setColor(this.props, styles, 'var(--muted)', ':host', 'color');
    setColor(this.props, styles, 'var(--muted)', ':host', 'border-color');
    styles.add(':host', 'border-style', 'solid');
    styles.add(':host', 'border-width', '1px');
    if (outline) {
      styles.add(':host', 'background-color', 'var(--white)');
    }
  //it's solid
  } else {
    styles.add(':host', 'color', 'var(--white)');
    setColor(this.props, styles, 'var(--muted)', ':host', 'background-color');
  }
</script>
<slot></slot>