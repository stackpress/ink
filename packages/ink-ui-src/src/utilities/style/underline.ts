//stackpress
import type StyleSet from '@stackpress/ink/dist/style/StyleSet';

export default function underline(
  props: Record<string, any>,
  styles: StyleSet, 
  selector = ':host'
) {
  const { underline } = props;
  
  if (underline) {
    styles.add(selector, 'text-decoration', 'underline');
  } else {
    styles.add(selector, 'text-decoration', 'none');
  }

  return underline;
}