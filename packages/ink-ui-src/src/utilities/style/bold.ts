//stackpress
import type StyleSet from '@stackpress/ink/dist/style/StyleSet';

export default function bold(
  props: Record<string, any>,
  styles: StyleSet, 
  selector = ':host'
) {
  const { bold } = props;
  
  if (bold) {
    styles.add(selector, 'font-weight', 'bold');
  }

  return bold;
}