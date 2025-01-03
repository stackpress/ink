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
    try {
      attributes.value = attributes.value instanceof Date 
        ? attributes.value.toISOString() 
        : new Date(attributes.value).toISOString();
      attributes.value = attributes.value.replace('Z', '');
    } catch(e) {
      delete attributes.value;
    }
  }
  //get handlers
  const handlers = {
    change(e: ChangeEvent<HTMLInputElement>) {
      const utc = new Date(e.target.value).toUTCString();
      const datetime = new Date(utc).toISOString().replace('Z', '');
      change && change(e);
      update && update(datetime);
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
            value = new Date(utc).toISOString().replace('Z', '');
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
  <input {...attributes} type="datetime-local" change={handlers.change} />
</template>
<template type="shadow">
  <slot></slot>
</template>