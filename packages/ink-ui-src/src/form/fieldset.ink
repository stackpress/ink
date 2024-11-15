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
  import { 
    buttonStyles, 
    borderStyles,
    getHandlers 
  } from '../utilities/fieldset';

  //extract props
  const { multiple, inputs, errors, add = 'Add' } = this.props;
  //override default styles
  const styles = new StyleSet();
  const css = this.styles();
  this.styles = () => css + styles.toString();
  //determine display
  setDisplay(this.props, styles, 'block', ':host');
  //determine border
  borderStyles(this.propsTree, styles);
  if (multiple) {
    //determine button styles
    buttonStyles(this.props, styles);
  }
  //get the row template
  const template = this.originalChildren;
  //set handlers
  const handlers = getHandlers(this, template);
  //make initial rows
  const initial = {
    inputs: (Array.isArray(inputs) ? inputs : [ inputs ]).map(
      input => input?.constructor.name === 'Object' ? input : {}
    ),
    errors: (Array.isArray(errors) ? errors : [ errors ]).map(
      errors => errors?.constructor.name === 'Object' ? errors : {}
    )
  };
  if (multiple && typeof inputs === 'undefined') {
    initial.inputs = [];
  }
  const rows = multiple ? initial.inputs.map(
    (input, index) => handlers.create(
      index, 
      input || {}, 
      initial.errors[index] || {}
    )
  ) : [ handlers.set(
    initial.inputs[0] || {}, 
    initial.errors[0] || {}
  ) ];
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