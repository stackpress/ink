import { events } from '@stackpress/ink/dist/client/InkEmitter';

export function removeEvents(props: Record<string, any>) {
  const attributes = { ...props };
  for (const key in attributes) {
    if (events.includes(key)) {
      delete attributes[key];
    }
  }
  return attributes;
}