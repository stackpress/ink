import { Module } from '@nestjs/common';
import { InkService } from './ink.service';

@Module({
  providers: [ InkService ],
  imports: [],
  exports: [ InkService ]
})

export class InkModule {
  static forRoot(config: Record<string, unknown>) {
    const configProvider: any = { provide: 'INK_CONFIG' };

    if (config.useFactory) {
      configProvider.useFactory = config.useFactory;
      configProvider.inject = config.inject || [];
    } else {
      configProvider.useValue = config;
    }

    return {
      module: InkModule,
      providers: [ configProvider, InkService ],
      exports: [ InkService ]
    };
  }
}