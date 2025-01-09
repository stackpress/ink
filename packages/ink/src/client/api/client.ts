//common
import type { ClientComponentClass } from '../../types';
//local
import type ClientRegistry from '../Registry';
import type { ClientEmitter } from '../Emitter';
import type { TemplateData } from './data';

declare global { 
  interface Window {
    InkAPI: {
      ClientRegistry: ClientRegistry,
      emitter: ClientEmitter,
      data: TemplateData,
      components: Record<string, ClientComponentClass>,
      elements: Record<string, ClientComponentClass>
    }
  }
}

export default () => window.InkAPI;
