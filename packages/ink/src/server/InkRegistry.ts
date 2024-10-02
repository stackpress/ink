import type { ServerNode, Hash } from '../types';
import InkText from './InkText';
import InkElement from './InkElement';

export default class InkRegistry {
  /**
   * Converts the markup to HTML
   */
  public static render(markup: ServerNode[]) {
    return markup
      .filter(Boolean)
      .map(child => child.toString())
      .join('');
  }

  /**
   * Returns an ordered registry of all elements in the markup
   */
  public static registry(
    markup: ServerNode[], 
    registry = new Set<InkElement>()
  ) {
    markup.forEach(node => {
      if (node instanceof InkElement) {
        if (!['html', 'head', 'body'].includes(node.name)) {
          registry.add(node);
        }
        if (node.name !=='head' && node.children.length > 0) {
          this.registry(node.children.toArray(), registry);
        }
      }
    });
    return registry;
  }

  /**
   * Creates a new InkElement instance
   */
  public static createElement(
    name: string, 
    attributes: Hash, 
    props: string,
    children: ServerNode[] = []
  ) {
    return new InkElement(name, attributes, props, children);
  }

  /**
   * Creates a new InkText instance
   */
  public static createText(value: string, escape = true) {
    return new InkText(value, escape);
  }
}