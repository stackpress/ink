<script observe="autocomplete,disabled,name,pattern,readonly,required,value">
  import type { ChangeEvent } from '@stackpress/ink/dist/types';
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import { 
    getProps, 
    getHandlers,
    setDefaultStyles,
  } from '../utilities/input';
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
  attributes.value = attributes.value instanceof Date 
    ? attributes.value.toISOString() 
    : attributes.value 
    ? new Date(attributes.value).toISOString()
    : new Date().toISOString();
  const [ date, min ] = attributes.value.split(':')
  attributes.value = [ date.split('T')[1], min ].join(':');
  //get handlers
  const handlers = getHandlers(this, change, update);
</script>
<template type="light">
  <input {...attributes} type="time" change={handlers.change} />
</template>
<template type="shadow">
  <slot></slot>
</template>