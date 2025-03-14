<style>
  :host {
    background-color: var(--white);
    border: 1px solid var(--border);
    padding: 6px 6px 6px 0;
  }
  div {
    align-items: center;
    display: flex;
  }
  div span:last-child {
    flex: 1;
  }
  ::slotted(input) {
    background-color: transparent;
    border: 0;
    box-sizing: border-box;
    font-size: inherit;
    font-family: inherit;
    text-align: center;
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
    min = 0,  max = 100, 
    step = 1, width = 60,
    value,
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
  if (width) {
    styles.add('span:first-child', 'width', `${width}px`);
  }
  //handlers
  const handlers = {
    change: e => {
      const box = e.target;
      const input1 = this.querySelector('input');
      const input2 = this.shadowRoot?.querySelector('input');
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
  <input 
    {...attributes} 
    type="number" 
    min={String(min)} 
    max={String(max)} 
    step={String(step)}
    {value} 
    change={handlers.change} 
  />
</template>
<template type="shadow">
  <div>
    <span><slot></slot></span>
    <span>
      <input 
        type="range" 
        min={String(min)} 
        max={String(max)} 
        step={String(step)} 
        {value}
        change={handlers.change} 
      />
    </span>
  </div>
</template>