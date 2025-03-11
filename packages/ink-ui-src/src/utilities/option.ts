//stackpress
import type { MouseEvent, ChangeEvent } from '@stackpress/ink/dist/types';
import type ClientField from '@stackpress/ink/dist/client/Field';
import type StyleSet from '@stackpress/ink/dist/style/StyleSet';

export function getProps(host: ClientField) {
  //get props
  const { 
    label,  error,  check,  
    circle, square, rounded, 
    blue,   orange, change, 
    update, click,
    //dont need these...
    style, 'class': _,
    //input attributes
    ...attributes
  } = host.props;

  return { 
    label,   error, check,  circle, square, 
    rounded, blue,  orange, change, update,
    attributes 
  };
};

export function setStyles(
  props: Record<string, any>, 
  styles: StyleSet, 
  initial: string
) {
  const { rounded, circle, square, check, blue, orange  } = props;
  //basic styles
  styles.add('label', 'font-family', 'Arial, Helvetica, sans-serif');
  styles.add('label', 'display', 'inline-block');
  styles.add('label', 'position', 'relative');
  styles.add('label', 'cursor', 'pointer');
  styles.add('span', 'align-items', 'center');
  styles.add('span', 'display', 'inline-flex');
  styles.add('span', 'font-weight', '400');
  styles.add('span', 'line-height', '18px');
  styles.add('span', 'margin', '0');
  styles.add('span', 'min-height', '18px');
  styles.add('span', 'min-width', '18px');
  styles.add('span', 'pointer-events', 'none');
  styles.add('span', 'position', 'relative');
  styles.add('span', 'z-index', '1');
  styles.add('span::before', 'border-width', '1px');
  styles.add('span::before', 'border-style', 'solid');
  styles.add('span::before', 'box-shadow', '0 1px 2px rgba(0, 0, 0, 0.05)');
  styles.add('span::before', 'content', '"\\a0"');
  styles.add('span::before', 'display', 'inline-block');
  styles.add('span::before', 'font-size', '11px');
  styles.add('span::before', 'font-weight', '400');
  styles.add('span::before', 'height', '18px');
  styles.add('span::before', 'min-width', '18px');
  styles.add('span::before', 'margin-right', '5px');
  styles.add('span::before', 'text-align', 'center');
  styles.add('input', 'height', '20px');
  styles.add('input', 'opacity', '0');
  styles.add('input', 'margin', '0');
  styles.add('input', 'position', 'absolute');
  styles.add('input', 'width', '20px');
  styles.add('input:checked', 'outline', '0 !important');
  styles.add('input:focus', 'outline', '0 !important');
  
  //state styles
  styles.add('input:checked + span::before', 'display', 'inline-block');
  styles.add('input:checked + span::before', 'box-shadow', [
    '0 1px 2px rgba(0, 0, 0, 0.05)', 
    'inset 0 -15px 10px -12px rgba(0, 0, 0, 0.05)', 
    'inset 15px 10px -12px rgba(255, 255, 255, 0.1)'
  ].join(', '));
  styles.add('input:checked + span::before', 'font-weight', '900');
  styles.add('input:active + span::before', 'box-shadow', [
    '0 1px 2px rgba(0, 0, 0, 0.05)', 
    'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
  ].join(', '));
  styles.add('input:checked:active + span::before', 'box-shadow', [
    '0 1px 2px rgba(0, 0, 0, 0.05)', 
    'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
  ].join(', '));
  styles.add('input:disabled + span::before', 'background-color', '#DDDDDD !important');
  styles.add('input:disabled + span::before', 'border-color', '#CCCCCC !important');
  styles.add('input:disabled + span::before', 'box-shadow', 'none !important');
  styles.add('input:disabled + span::before', 'color', '#BBBBBB');
  styles.add('input[disabled] + span::before', 'background-color', '#DDDDDD !important');
  styles.add('input[disabled] + span::before', 'border-color', '#CCCCCC !important');
  styles.add('input[disabled] + span::before', 'box-shadow', 'none !important');
  styles.add('input[disabled] + span::before', 'color', '#BBBBBB');

  if (rounded) {
    styles.add('span::before', 'border-radius', '100%');
  }

  const shape = circle ? 'circle' 
    : square ? 'square'
    : check ? 'check'
    : initial;

  if (shape === 'circle') {
    styles.add('input:checked + span::before', 'content', '"\\25CF"');
    styles.add('input:checked + span::before', 'font-size', '24px');
    styles.add('input:checked + span::before', 'line-height', '15px');
  } else if (shape === 'square') {
    styles.add('input:checked + span::before', 'content', '"\\25A0"');
    styles.add('input:checked + span::before', 'font-size', '20px');
    styles.add('input:checked + span::before', 'line-height', '15px');
  } else if (shape === 'check') {
    styles.add('input:checked + span::before', 'content', '"\\2713"');
    styles.add('input:checked + span::before', 'font-size', '14px');
    styles.add('input:checked + span::before', 'line-height', '18px');
  }

  if (blue) {
    styles.add('span::before', 'background-color', '#FAFAFA');
    styles.add('span::before', 'border-color', '#C8C8C8');
    styles.add('span::before', 'color', '#32A3CE');
    styles.add('span::before', 'text-shadow', '0 0 1px #32A3CE');
    styles.add('input:hover + span::before', 'background-color', '#F5F8FC');
    styles.add('input:hover + span::before', 'border-color', '#32A3CE');
    styles.add('input:checked + span::before', 'border-color', '#32A3CE');
    styles.add('span:hover::before', 'border-color', '#32A3CE');
  } else if (orange) {
    styles.add('input:hover + span::before', 'border-color', '#FF893C');
    styles.add('span:hover::before', 'border-color', '#FF893C');
    styles.add('span::before', 'background-color', '#FAFAFA');
    styles.add('span::before', 'border-color', '#C8C8C8');
    styles.add('span::before', 'color', '#FF893C');
    styles.add('span::before', 'text-shadow', '0 0 1px #FF893C');
    styles.add('input:checked + span::before', 'background-color', '#F5F8FC');
    styles.add('input:checked + span::before', 'border-color', '#FF893C');
  } else {
    styles.add('span::before', 'background-color', '#FAFAFA');
    styles.add('span::before', 'border-color', '#C8C8C8');
    styles.add('span::before', 'color', '#32A3CE');
    styles.add('span::before', 'text-shadow', '0 0 1px #32A3CE');
    styles.add('input:checked + span::before', 'background-color', '#F5F8FC');
    styles.add('input:checked + span::before', 'border-color', '#ADB8C0');
    styles.add('input:hover + span::before', 'border-color', '#FF893C');
    styles.add('span:hover::before', 'border-color', '#FF893C');
  }
}

export function getHandlers(
  host: ClientField, 
  click: Function,
  change: Function, 
  update: Function, 
  flag = true
) {
  const name = host.props.name || '';
  const value = host.props.value || '';
  //handlers
  const handlers = {
    click(e: MouseEvent<HTMLInputElement>) {
      click && click(e);
    },
    /**
     * CASE: Someone clicked the inner input element
     * THEN: Trigger inner input change event
     * THEN: Update the component attribute
     */
    change(e: ChangeEvent<HTMLInputElement>) {
      //this is the light input element
      const input = host.querySelector('input') as HTMLInputElement;
      //this is the checked status from the shadow input element
      const checked = e.target.checked;
      if (checked) {
        host.setAttribute('checked', checked);
        input.setAttribute('checked', 'checked');
      } else {
        host.removeAttribute('checked');
        input.removeAttribute('checked');
      }
      change && change(e);
      update && update(checked ? value: '');
      if (!flag) handlers.uncheckAll();
    },
    uncheckAll() {
      //this is the light input element
      const input = host.querySelector('input') as HTMLInputElement;
      const items = input.form 
        ? input.form.elements.namedItem(name)
        : document.querySelectorAll(`[name="${name}"]`);
      const elements = items instanceof NodeList 
        ? Array.from(items) 
        : [items];
      if (!elements) return;
      for (const element of elements) {
        if (element === input 
          || element === host
          || element?.parentElement === host
        ) continue;
        if (element instanceof HTMLInputElement 
          || element instanceof HTMLElement
        ) {
          handlers.uncheck(element);
        }
      }
    },
    uncheck(element: HTMLInputElement|HTMLElement) {
      if (element instanceof HTMLInputElement) {
        element.checked = false;
      }
      element.removeAttribute('checked');
      if (element?.parentElement) {
        const parent = element.parentElement;
        parent.removeAttribute('checked');
        if (parent.shadowRoot) {
          const shadow = parent.shadowRoot;
          const input = shadow.querySelector('input');
          if (input) {
            input.checked = false;
            input.removeAttribute('checked');
          }
        }
      }
    }
  };
  return handlers;
};