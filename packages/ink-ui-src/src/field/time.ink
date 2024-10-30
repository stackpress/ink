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
  if (attributes.value) {
    attributes.value = attributes.value instanceof Date 
      ? attributes.value.toISOString() 
      : new Date(attributes.value).toISOString()
    if (isNaN(attributes.value.getTime())) {
      delete attributes.value;
    } else {
      const [ date, min ] = attributes.value.split(':')
      attributes.value = [ date.split('T')[1], min ].join(':');
    }
  }
  //get handlers
  const handlers = getHandlers(this, change, update);
</script>
<template type="light">
  <input {...attributes} type="time" change={handlers.change} />
</template>
<template type="shadow">
  <slot></slot>
</template>