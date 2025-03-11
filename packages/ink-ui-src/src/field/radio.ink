<script>
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import setDisplay from '../utilities/style/display';
  import { getProps, setStyles, getHandlers } from '../utilities/option';
  //get ptops
  const { 
    label = '', name, value, checked,
    //event handlers
    click,  change, update,
    //input elements
    attributes
  } = getProps(this);
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //determine display
  setDisplay(this.props, styles, 'inline-block', ':host');
  //set option styles
  setStyles(this.props, styles, 'circle');
  //handlers
  const handlers = getHandlers(this, click, change, update, false);
</script>
<template type="light">
  <input type="radio" {...attributes} />
</template>
<template type="shadow">
  <label>
    <input 
      type="radio" 
      change={handlers.change} 
      checked={attributes.checked} 
    />
    <span>{label}</span>
  </label>
</template>