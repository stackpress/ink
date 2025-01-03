<link rel="import" type="component" href="../element/badge.ink" name="element-badge" />
<script>
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import setDisplay from '../utilities/style/display';
  //extract props
  const { 
    curved, rounded,     pill,    
    info,   warning,     success, 
    error,  muted,       primary, 
    color,  secondary,   outline,
    solid,  transparent, value = [] 
  } = this.props;
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //determine display
  setDisplay(this.props, styles, 'inline-block');
  const defaultColor = !info && !color
    && !warning && !success && !error 
    && !muted && !primary && !secondary;
</script>
<each value=tag from={value}>
  <element-badge 
    curved={!!curved} 
    rounded={!!rounded} 
    pill={!!pill} 
    info={!!info} 
    warning={!!warning || defaultColor} 
    success={!!success} 
    error={!!error} 
    muted={!!muted} 
    primary={!!primary} 
    color={color} 
    secondary={!!secondary} 
    outline={!!outline} 
    solid={!!solid} 
    transparent={!!transparent} 
  >{tag}</element-badge>
</each>