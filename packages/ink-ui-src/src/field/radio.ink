<script form observe="checked,disabled,name,readonly,required,value">
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import setDisplay from '../utilities/style/display';
  import { getProps, setStyles, getHandlers } from '../utilities/option';
  //get ptops
  const { label = '', change, update, attributes } = getProps(this);
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //determine display
  setDisplay(this.props, styles, 'inline-block', ':host');
  //set option styles
  setStyles(this.props, styles, 'circle');
  //handlers
  const handlers = getHandlers(this, change, update);
</script>
<label mount={handlers.mount}>
  <input 
    {...attributes} 
    type="radio" 
    change={handlers.change} 
    click={handlers.click} 
  />
  <span>{label}</span>
</label>