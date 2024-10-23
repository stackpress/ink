<style>
  a {
    color: var(--error);
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    padding: 0 7px;
  }
  legend {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    margin-top: 7px;
    text-align: center;
  }
</style>
<script>
  import type { MouseEvent } from '@stackpress/ink/dist/types';
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import setDisplay from '../utilities/style/display';
  import { buttonStyles, getHandlers } from '../utilities/fieldset';
  //extract props
  const { multiple, value, add = 'Add' } = this.props;
  //override default styles
  const styles = new StyleSet();
  const css = this.styles();
  this.styles = () => css + styles.toString();
  //determine display
  setDisplay(this.props, styles, 'block', ':host');
  if (multiple) {
    //determine button styles
    buttonStyles(this.props, styles);
  }
  //get the row template
  const template = this.originalChildren;
  //set handlers
  const handlers = getHandlers(this, template);
  //make initial rows
  const type = Array.isArray(value) ? 'array' 
    : value?.constructor.name === 'Object' ? 'object'
    : value === null ? 'null'
    : typeof value;
  const rows = multiple && type === 'array' 
    ? value.map((valueset, index) => handlers.create(index, valueset)) 
    : !multiple
    ? [ handlers.set(type === 'object' ? value : {}) ] 
    : [];
</script>
<template type="light">
  {rows.map(row => row.slot)}
</template>
<template type="shadow">
  {rows.map(row => row.fieldset)}
  <if true={multiple}>
    <button type="button" click={handlers.add}>{add}</button>
  </if>
</template>