<script>

// NEW COLOR.ink SOURCE FOR HIDING THE BOX COLOR

  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import setBold from '../utilities/style/bold';
  import setDisplay from '../utilities/style/display';
  import setSize from '../utilities/style/size';

  // Extract props
  const { value } = this.props;
  // Sub-props (box size, text size)
  let { box, text } = this.propsTree;

  // Only set defaults if box is undefined (not explicitly false), preserve box={false}
  if (box === undefined && text !== false) {
    box = {};
    text = true;
  }

  // Override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();

  // Determine display
  const display = setDisplay(this.props, styles, 'inline-flex');
  if (display === 'flex' || display === 'inline-flex') {
    styles.add(':host', 'align-items', 'center');
  }

  // Determine size for text
  setSize(this.props, styles, false, ':host', 'font-size');

  // Determine font weight
  setBold(this.props, styles, ':host');

  // If there is box props (truthy, excludes false)
  if (box) {
    // Build box class list
    styles.add(':host .box', 'display', 'inline-block');
    styles.add(':host .box', 'border-radius', '4px');
    styles.add(':host .box', 'border', '1px solid var(--black)');
    styles.add(':host .box', 'background-color', value);
    // Determine box class size
    setSize(box, styles, '16px', '.box', 'width');
    setSize(box, styles, '16px', '.box', 'height');
  }

  // If there is text props
  if (text) {
    // Add margin-right to the box class list only if box is present
    if (box) {
      styles.add(':host .box', 'margin-right', '5px');
    }
  }
</script>

<if true={box}>
  <span class="box"></span>
</if>
<if true={text}>
  <span class="text">{value}</span>
</if>