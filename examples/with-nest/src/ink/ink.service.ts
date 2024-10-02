import type { InkOptions, InkCompiler } from '@stackpress/ink/compiler';

import { Inject, Injectable } from '@nestjs/common';
import ink from '@stackpress/ink/compiler';


@Injectable()
export class InkService {
  protected _compiler: InkCompiler;
  public constructor(
    @Inject('INK_CONFIG')
    config: InkOptions
  ) {
    this._compiler = ink(config);
  }

  public get compiler() {
    return this._compiler;
  }
}