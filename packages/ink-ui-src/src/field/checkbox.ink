<script form observe="checked,disabled,name,readonly,required,value">
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import setDisplay from '../utilities/style/display';
  import { getProps, setStyles, getHandlers } from '../utilities/option';
  //get ptops
  const { label = '', click, attributes } = getProps(this);
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //determine display
  setDisplay(this.props, styles, 'inline-block', ':host');
  //set option styles
  setStyles(this.props, styles, 'check');
  //handlers
  const handlers = getHandlers(this);
</script>
<label mount={handlers.mount}>
  <input 
    {...attributes} 
    type="checkbox" 
    change={handlers.change} 
    {click} 
  />
  <span>{label}</span>
</label>