//local
import { Plugin, InkCSSOptions } from './types';

export default function css(options: InkCSSOptions = {}) {
  const { brand = 'ink' } = options;
  const plugins = new Set<Plugin>();
  return {
    brand,
    plugin(plugin: Plugin) {
      plugins.add(plugin);
      return this;
    },
    upgrade(sheet: string) {
      for (const plugin of plugins) {
        sheet = plugin(sheet, brand);
      }
      return sheet;
    }
  };
}