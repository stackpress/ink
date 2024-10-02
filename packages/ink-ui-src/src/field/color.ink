<style>
  :host {
    background-color: var(--white);
    border: 1px solid var(--border);
  }
  div {
    align-items: stretch;
    display: flex;
  }
  div span:last-child {
    flex: 1;
    padding: 7px 7px 8px 0;
  }
  input {
    background-color: transparent;
    border: 0;
    box-sizing: border-box;
    font-size: inherit;
    font-family: inherit;
    height: 100%;
  }
  ::slotted(input) {
    background-color: transparent;
    border: 0;
    box-sizing: border-box;
    font-size: inherit;
    font-family: inherit;
    width: 100%;
  }
  ::slotted(input:focus) {
    outline: none;
  }
</style>
<script observe="autocomplete,disabled,name,readonly,required,value">
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import setDisplay from '../utilities/style/display';
  //get props
  const { 
    //dont need these...
    style, 'class': _,
    //input attributes
    ...attributes
  } = this.props;
  //override default styles
  const styles = new StyleSet();
  const css = this.styles();
  this.styles = () => css + styles.toString();
  //determine display
  setDisplay(this.props, styles, 'inline-block', ':host');
  //handlers
  const handlers = {
    change: e => {
      const box = e.target;
      const input1 = this.querySelector('input');
      const input2 = this.shadowRoot?.querySelector('input');
      console.log('change', box.value, input1, input2);
      if (!input1 || !input2) return;
      input1.value = box.value;
      input1.setAttribute('value', box.value);
      input2.value = box.value;
      input2.setAttribute('value', box.value);
    },
    attribute: e => {
      //accepts: error,accept,autocomplete,checked,disabled,max,min,
      //         multiple,name,pattern,readonly,required,step,value
      const { action, name, prev, value, target } = e.detail;
      const input1 = this.querySelector('input');
      const input2 = this.shadowRoot?.querySelector('input');
      if (!input1 || !input2) return;
      switch (action) {
        case 'add':
        case 'update':
          input1.setAttribute(name, value);
          input2.setAttribute(name, value);
          break;
        case 'remove':
          input1.removeAttribute(name);
          input2.removeAttribute(name);
          break;
      }
    }
  };
  this.on('attributechange', handlers.attribute);
</script>
<template type="light">
  <input {...attributes} change={handlers.change} />
</template>
<template type="shadow">
  <div>
    <span><input type="color" change={handlers.change} /></span>
    <span><slot></slot></span>
  </div>
</template>