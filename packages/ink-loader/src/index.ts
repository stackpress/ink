//modules
import path from 'node:path';
import { urlToRequest } from 'loader-utils';
//stackpress
import type { InkOptions } from '@stackpress/ink/dist/types';
import Component from '@stackpress/ink/dist/compiler/Component';
import ComponentTranspiler from '@stackpress/ink/dist/compiler/Transpiler';
import { toJS } from '@stackpress/ink/dist/helpers';



//local
import type { WebpackLoader, LoaderFunction } from './types';

const componentLoader: LoaderFunction = function () {
  const self = this as unknown as WebpackLoader;
  const callback = this.async();
  //get compiler options from webpack.config.js
  const options: InkOptions = self.getOptions() || {};
  //get the input path (this is the resource path from the entry or any import)
  const inputPath = urlToRequest(self.resourcePath).replace('.//', '/');
  //create a new compiler
  const compiler = new Component(inputPath, { ...options });
  //determine the tsconfig path
  const tsconfig = compiler.loader.absolute(
    options.tsconfig || path.resolve(__dirname, '../tsconfig.json'), 
    compiler.cwd
  );
  //create a new generator
  const transpiler = new ComponentTranspiler(compiler, tsconfig);
  const code = toJS(transpiler.transpile());
  callback(null, code);
};

export default componentLoader;