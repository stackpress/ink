//local
import type InkComponent from './InkComponent';
import getComponent from './component';
import props from './props';

type Component = InkComponent|'body'|'head'|'document';

/**
 * Get the classlist of the current component
 */
export function classlist(pointer: Component|null = null) {
  if (pointer === 'body') {
    return document.body.classList;
  } else if (pointer === 'head') {
    return document.head.classList;
  } else if (pointer === 'document') {
    return document.body.parentElement?.classList;
  } 
  const component = getComponent(pointer);
  return (component as InkComponent)?.classList;
}

/**
 * Get the current classnames where this is being called from
 * ie. const classes = classnames();
 */
export default function classnames(pointer: InkComponent|null = null) {
  return props<{'class': string}>(pointer)['class'] || '';
}