import type { InkComponentClass } from '../types';
import type InkException from '../Exception';
import type InkRegistry from './InkRegistry';
import type { InkEmitter } from './InkEmitter';
import type { InkDataMap } from './data';

declare global { 
  interface Window {
    InkAPI: {
      InkException: InkException,
      InkRegistry: InkRegistry,
      emitter: InkEmitter,
      data: InkDataMap,
      components: Record<string, InkComponentClass>,
      registered: Record<string, InkComponentClass>
    }
  }
}

export default () => window.InkAPI;
