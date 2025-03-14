<style>
  :host {
    display: inline-block;
  }

  label {
    position: relative;
    margin: 0;
  }

  span {
    display: inline-block;
    font-weight: normal;
    line-height: 20px;
    margin: 0 4px;
    min-height: 24px;
    min-width: 18px;
    position: relative;
  }

  span::before {
    font-family: Arial, Helvetica, sans-serif;
    border-style: solid;
    border-width: 1px;
    box-shadow: inset 0px 2px 2px 0px rgba(0, 0, 0, .2);
    color: #999999;
    display: inline-block;
    font-weight: bold;
    height: 20px;
    margin-right: 8px;
    overflow: hidden;
    padding: 0;
    position: relative;
    text-align: left;
    text-indent: -19px;
    top: 5px;
    transition: text-indent .4s ease;
    width: 52px;
  }

  span::after {
    -webkit-box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, .3);
    -webkit-transition: left .4s ease;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, .3);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    font-weight: lighter;
    left: -3px;
    line-height: 20px;
    height: 22px;
    padding: 0;
    position: absolute;
    text-align: center;
    text-shadow: -1px 0px 0 rgba(0, 0, 0, 0.15);
    top: 4px;
    transition: left .4s ease;
    width: 22px;
  }

  input {
    cursor: pointer;
    height: 25px;
    opacity: 0;
    position: absolute;
    width: 55px;
  }

  input:checked + span::before {
    text-indent: 9px;
  }

  input:checked + span::after {
    left: 34px;
  }
</style>
<script>
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import { getHandlers } from '../utilities/option';
  //get props
  const {   
    error,  rounded, onoff,
    yesno,  checkex, sunmoon,
    ridge,  smooth,  blue,
    orange, green,   label = '',
    name,   value,   checked,
    //event handlers
    change, update,  click,   
  } = this.props;
  //override default styles
  const styles = new StyleSet();
  const css = this.styles();
  this.styles = () => css + styles.toString();
  const space = '\\a0';
  //set default styles
  if (onoff) {
    styles.add('span::before', 'content', `"ON${space.repeat(8)}OFF"`);
    styles.add('span::before', 'font-size', '11px');
  } else if (yesno) {
    styles.add('span::before', 'content', `"YES${space.repeat(9)}NO"`);
    styles.add('span::before', 'font-size', '10px');
  } else if (checkex) {
    styles.add('span::before', 'content', `"${space}\\2713${space.repeat(9)}\\2716"`);
    styles.add('span::before', 'font-size', '13px');
  } else if (sunmoon) {
    styles.add('span::before', 'content', `"\\263C${space.repeat(6)}\\263D"`);
    styles.add('span::before', 'font-size', '18px');
  } else {
    styles.add('span::before', 'content', `"${space}\\2713${space.repeat(9)}\\2716"`);
    styles.add('span::before', 'font-size', '13px');
  }

  if (rounded) {
    styles.add('span::before', 'border-radius', '12px');
    styles.add('span::after', 'border-radius', '100%');
  }

  if (ridge) {
    styles.add('span::after', 'content', '"|||"');
  } else if (smooth) {
    styles.add('span::after', 'content', '" "');
  } else {
    styles.add('span::after', 'content', '" "');
  }

  if (green) {
    styles.add('span::before', 'background-color', '#DC3545');
    styles.add('span::before', 'border-color', '#DC3545');
    styles.add('span::before', 'color', '#FFFFFF');
    styles.add('span::after', 'background-color', '#F9F9F9');
    styles.add('span::after', 'color', '#DC3545');
    styles.add('input:checked + span::before', 'background-color', '#28A745');
    styles.add('input:checked + span::before', 'border-color', '#28A745');
    styles.add('input:checked + span::before', 'color', '#FFFFFF');
    styles.add('input:checked + span::after', 'background-color', '#F9F9F9');
    styles.add('input:checked + span::after', 'color', '#28A745');
  } else if (orange) {
    styles.add('span::before', 'background-color', '#888888');
    styles.add('span::before', 'border-color', '#CCCCCC');
    styles.add('span::before', 'color', '#DDDDDD');
    styles.add('span::after', 'background-color', '#FFFFFF');
    styles.add('span::after', 'color', '#D5D5D5');
    styles.add('input:checked + span::before', 'background-color', '#FF893C');
    styles.add('input:checked + span::before', 'border-color', '#FF893C');
    styles.add('input:checked + span::before', 'color', '#FFFFFF');
    styles.add('input:checked + span::after', 'background-color', '#FFFFFF');
    styles.add('input:checked + span::after', 'color', '#FF893C');
  } else if (blue) {
    styles.add('span::before', 'background-color', '#8B9AA3');
    styles.add('span::before', 'border-color', '#8B9AA3');
    styles.add('span::before', 'color', '#FFFFFF');
    styles.add('span::after', 'background-color', '#FFFFFF');
    styles.add('span::after', 'color', '#D5D5D5');
    styles.add('input:checked + span::before', 'background-color', '#468FCC');
    styles.add('input:checked + span::before', 'border-color', '#468FCC');
    styles.add('input:checked + span::before', 'color', '#FFFFFF');
    styles.add('input:checked + span::after', 'background-color', '#F9F9F9');
    styles.add('input:checked + span::after', 'color', '#468FCC');
  } else {
    styles.add('span::before', 'background-color', '#F5F5F5');
    styles.add('span::before', 'border-color', '#CCCCCC');
    styles.add('span::before', 'color', '#999999');
    styles.add('span::after', 'background-color', '#FFFFFF');
    styles.add('span::after', 'color', '#D5D5D5');
    styles.add('input:checked + span::before', 'background-color', '#8AB2C9');
    styles.add('input:checked + span::before', 'border-color', '#468FCC');
    styles.add('input:checked + span::before', 'color', '#FFFFFF');
    styles.add('input:checked + span::after', 'background-color', '#FFFFFF');
    styles.add('input:checked + span::after', 'color', '#8AB2C9');
  }
  
  //handlers
  const handlers = getHandlers(this, click, change, update);
</script>
<template type="light">
  <input type="checkbox" name={name} value={value} checked={checked} />
</template>
<template type="shadow">
  <label>
    <input 
      type="checkbox" 
      change={handlers.change}
      checked={checked}
    />
    <span>{label}</span>
  </label>
</template>