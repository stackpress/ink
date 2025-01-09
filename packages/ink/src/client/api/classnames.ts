//local
import type ClientComponent from '../Component';
import getComponent from './component';
import props from './props';

type Component = ClientComponent|'body'|'head'|'document';

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
  return (component as ClientComponent)?.classList;
}

/**
 * Get the current classnames where this is being called from
 * ie. const classes = classnames();
 */
export default function classnames(pointer: ClientComponent|null = null) {
  return props<{'class': string}>(pointer)['class'] || '';
}