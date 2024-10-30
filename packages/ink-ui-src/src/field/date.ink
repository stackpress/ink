<script observe="autocomplete,disabled,name,pattern,readonly,required,value">
  import type { ChangeEvent } from '@stackpress/ink/dist/types';
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import { getProps, setDefaultStyles } from '../utilities/input';
  //extract props
  const { 
    //handlers
    change, update,
    //input attributes
    attributes, 
    //the rest of the props
    ...props
  } = getProps(this);
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //set default styles
  setDefaultStyles(props, styles);
  //set the input value
  if (attributes.value) {
    attributes.value = attributes.value instanceof Date 
      ? attributes.value.toISOString() 
      : new Date(attributes.value).toISOString()
    if (isNaN(attributes.value.getTime())) {
      delete attributes.value;
    } else {
      attributes.value = attributes.value.split('T')[0];
    }
  }
  //get handlers
  const handlers = {
    change(e: ChangeEvent<HTMLInputElement>) {
      const utc = new Date(e.target.value).toUTCString();
      const datetime = new Date(utc).toISOString();
      const date = datetime.split('T')[0];
      change && change(e);
      update && update(date);
    },
    attribute(e: AttributeChangeEvent) {
      //accepts: error,accept,autocomplete,checked,disabled,max,min,
      //         multiple,name,pattern,readonly,required,step,value
      let { action, name, value, target } = e.detail;
      const input = target.querySelector('input');
      switch (action) {
        case 'add':
        case 'update':
          if (name === 'value') {
            const utc = new Date(value).toUTCString();
            const datetime = new Date(utc).toISOString();
            value = datetime.split('T')[0];
          }
          input?.setAttribute(name, value);
          break;
        case 'remove':
          input?.removeAttribute(name);
          break;
      }
    }
  };
  this.on('attributechange', handlers.attribute);
</script>
<template type="light">
  <input {...attributes} type="date" change={handlers.change} />
</template>
<template type="shadow">
  <slot></slot>
</template>