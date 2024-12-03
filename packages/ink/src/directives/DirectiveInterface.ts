//compiler
import type Component from '../compiler/Component';
//common
import type { MarkupToken, NextDirective } from '../types';

export default interface DirectiveInterface {
  name: string;
  markup(
    parent: MarkupToken|null, 
    token: MarkupToken, 
    components: Component[], 
    next: NextDirective
  ): string;
}