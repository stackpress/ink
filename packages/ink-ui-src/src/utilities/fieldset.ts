import type { MouseEvent, InkComponentClass } from '@stackpress/ink/dist/types';
import type StyleSet from '@stackpress/ink/dist/style/StyleSet';

import InkRegistry from '@stackpress/ink/dist/client/InkRegistry';
import InkComponent from '@stackpress/ink/dist/client/InkComponent';
import setColor from './style/color';
import setCurve from './style/curve';
import setPadding from './style/padding';

export function buttonStyles(props: Record<string, any>, styles: StyleSet) {
  const { 
    //font size
    size, xs,  sm,  md,  lg, 
    xl,   xl2, xl3, xl4, xl5,
    //layouts
    outline, solid, transparent,
    //others
    full
  } = props;

  //determine padding
  const pad = setPadding(props, styles, 'button');
  if (!pad) {
    //determine padding by size
    xs ? styles.add('button', 'padding', '2px 4px')
      : sm ? styles.add('button', 'padding', '5px 10px')
      : md ? styles.add('button', 'padding', '8px 16px')
      : lg ? styles.add('button', 'padding', '12px 24px')
      : xl ? styles.add('button', 'padding', '15px 30px')
      : xl2 ? styles.add('button', 'padding', '18px 36px')
      : xl3 ? styles.add('button', 'padding', '22px 44px')
      : xl4 ? styles.add('button', 'padding', '26px 52px')
      : xl5 ? styles.add('button', 'padding', '30px 60px')
      : size ? styles.add('button', 'padding', size)
      : styles.add('button', 'padding', '5px 10px');
  }

  //determine curve
  setCurve(props, styles, false, 'button');
  //determine width
  if (full) {
    styles.add('button', 'width', '100%');
  }
  //if outline or transparent
  if (outline || transparent) {
    setColor(props, styles, 'var(--muted)', 'button', 'color');
    setColor(props, styles, 'var(--muted)', 'button', 'border-color');
    styles.add('button', 'border-style', 'solid');
    styles.add('button', 'border-width', '1px');
    if (outline) {
      styles.add('button', 'background-color', 'var(--white)');
    }
  //it's solid
  } else if (solid) {
    styles.add('button', 'border', '0');
    styles.add('button', 'color', 'var(--white)');
    setColor(props, styles, 'var(--muted)', 'button', 'background-color');
  } else {
    styles.add('button', 'border', '0');
    styles.add('button', 'color', 'var(--white)');
    setColor(props, styles, 'var(--muted)', 'button', 'background-color');
  }
}

/**
   * Clones an element, adds to registry and returns it
   */
export function cloneElement(
  node: Node, 
  prepare: Function,
  andChildren = false
): Node {
  const component = node as InkComponent | HTMLElement & {
    definition?: InkComponentClass,
    props?: Record<string, any>,
    originalChildren?: Node[]
  };
  if (component.definition) {
    const children = component.originalChildren || [];
    const attributes = prepare(component);
    return InkRegistry.createComponent(
      component.nodeName.toLowerCase(), 
      component.definition, 
      attributes || {}, 
      andChildren ? children.map(
        element => cloneElement(element, prepare, andChildren)
      ) : []
    ).element;
  } else if (node instanceof HTMLElement) {
    const children = Array.from(node.childNodes);
    const attributes = prepare(component);
    return InkRegistry.createElement(
      node.nodeName.toLowerCase(), 
      attributes || {}, 
      andChildren 
        ? children.map(element => cloneElement(element, prepare, andChildren))
        : []
    ).element;
  }
  return node.cloneNode(andChildren);
}

export function getHandlers(host: InkComponent, template: Node[]) {
  const { name, legend } = host.props;
  const handlers = {
    add: (e: MouseEvent<HTMLButtonElement>) => {
      const shadow = host.shadowRoot;
      if (!shadow) return;
      const button = shadow.querySelector('button');
      if (!button) return;
      const { fieldset, slot } = handlers.create(host.childElementCount);
      button.before(fieldset);
      host.appendChild(slot);
    },
    create: (
      index: number, 
      input: Record<string, any> = {}, 
      errors: Record<string, any> = {}
    ) => {
      input = input?.constructor.name === 'Object' ? input : {};
      errors = errors?.constructor.name === 'Object' ? errors : {};
      const fields = template.map(
        element => cloneElement(element, (node: HTMLElement) => {
          const component = node as InkComponent | HTMLElement & {
            definition?: InkComponentClass,
            props?: Record<string, any>,
            originalChildren?: Node[]
          };

          const attributes = component.definition ? component.props || {}
            : node instanceof HTMLElement && InkRegistry.has(node)
            ? InkRegistry.get(node)?.attributes || {}
            : node instanceof HTMLElement
            ? Object.fromEntries(Array
              .from(node.attributes)
              .map(attribute => [ attribute.name, attribute.value ])
            ): {};
          if (attributes.field) {
            attributes.name = `${name}[${index}][${attributes.field}]`;
            if (typeof input[attributes.field] !== 'undefined') {
              attributes.value = input[attributes.field];
            }
            if (typeof errors[attributes.field] === 'string') {
              attributes.error = errors[attributes.field];
            }
          } else if (attributes.control 
            && typeof errors[attributes.control] === 'string'
          ) {
            attributes.error = errors[attributes.control];
          }
          return attributes;
        }, true)
      );
      const slot = InkRegistry.createElement(
        'div', { slot: `row-${index}`}, fields
      ).element as HTMLElement;
      const title = legend ? legend.replace('%s', index + 1): undefined;
      const remove = InkRegistry.createElement(
        'a', {}, [ '&times;' ]
      ).element as HTMLElement;
      const label = legend 
        ? InkRegistry.createElement('span', {}, [ title ]).element 
        : undefined;
      const fieldset = InkRegistry.createElement('fieldset', {}, [
        InkRegistry.createElement('legend', {}, [ label, remove ]).element,
        InkRegistry.createElement('slot', { name: `row-${index}` }).element
      ]).element as HTMLElement;
      remove.addEventListener('click', () => handlers.remove(fieldset, slot));
      return { fieldset, slot };
    },
    remove: (fieldset: HTMLElement, slot: HTMLElement) => {
      const shadow = host.shadowRoot;
      if (!shadow) return;
      fieldset.remove();
      slot.remove();
      shadow.querySelectorAll('fieldset slot').forEach((slot, index) => {
        slot.setAttribute('name', `row-${index}`);
      });
      host.querySelectorAll(':scope > div[slot]').forEach((slot, index) => {
        slot.setAttribute('slot', `row-${index}`);
        if (name) {
          Array.from(slot.querySelectorAll('[name]')).forEach(element => {
            const key = element.getAttribute('data-key');
            if (key) {
              element.setAttribute('name', `${name}[${index}][${key}]`);
            }
          });
        }
      });
      if (legend) {
        host.shadowRoot?.querySelectorAll(
          'fieldset legend span'
        ).forEach((span, index) => {
          span.textContent = legend.replace('%s', index + 1);
        });
      }
    },
    set: (
      input: Record<string, any> = {}, 
      errors: Record<string, any> = {}
    ) => {
      input = input?.constructor.name === 'Object' ? input : {};
      errors = errors?.constructor.name === 'Object' ? errors : {};
      const fields = template.map(
        element => cloneElement(element, (node: HTMLElement) => {
          const component = node as InkComponent | HTMLElement & {
            definition?: InkComponentClass,
            props?: Record<string, any>,
            originalChildren?: Node[]
          };

          const attributes = component.definition ? component.props || {}
            : node instanceof HTMLElement && InkRegistry.has(node)
            ? InkRegistry.get(node)?.attributes || {}
            : node instanceof HTMLElement
            ? Object.fromEntries(Array
              .from(node.attributes)
              .map(attribute => [ attribute.name, attribute.value ])
            ): {};
          if (attributes.field) {
            attributes.name = `${name}[${attributes.field}]`;
            if (typeof input[attributes.field] !== 'undefined') {
              attributes.value = input[attributes.field];
            }
            if (typeof errors[attributes.field] === 'string') {
              attributes.error = errors[attributes.field];
            }
          } else if (attributes.control 
            && typeof errors[attributes.control] === 'string'
          ) {
            attributes.error = errors[attributes.control];
          }
          return attributes;
        }, true)
      );
      const slot = InkRegistry.createElement(
        'div', {}, fields
      ).element as HTMLElement;
      const fieldset = InkRegistry.createElement('fieldset', {}, [
        InkRegistry.createElement('slot').element
      ]).element as HTMLElement;
      return { fieldset, slot };
    }
  };
  return handlers;
}