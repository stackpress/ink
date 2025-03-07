
import type { IncomingMessage, ServerResponse } from 'node:http';
//stackpress
import type Component from '@stackpress/ink/dist/compiler/Component';
import type EventEmitter from '@stackpress/ink/dist/EventEmitter';

//standard http request and response types
export type IM = IncomingMessage;
export type SR = ServerResponse<IM> & {
  req: IM;
};

export type OptionIgnore = (string|RegExp|((string: string) => boolean))[];

export type DevelopOptions = {
  cwd?: string,
  whatwg?: boolean,
  emitter?: EventEmitter,
  include?: string[],
  ignore?: OptionIgnore,
  route?: string,
  tsconfig?: string,
  extname?: string
};

export type ServerOptions = {
  cwd: string,
  timeout?: number,
  emitter?: EventEmitter,
  include?: string[],
  ignore?: OptionIgnore,
  tsconfig?: string,
  extname?: string
};

export type ClientOptions = {
  path?: string
};

export type UpdateOptions = {
  tsconfig?: string,
  extname?: string
};

export type Dependants = Record<string, {
  component: Component,
  type: string
}>;