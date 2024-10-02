import type { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { view } from '@stackpress/ink-express';
import { InkService } from './ink/ink.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const cwd = path.dirname(__dirname);
  app.useStaticAssets(path.join(cwd, 'public'));
  app.setBaseViewsDir(path.join(cwd, 'pages'));

  const { compiler } = app.get<InkService>(InkService);

  app.engine('ink', view(compiler));
  app.setViewEngine('ink');

  await app.listen(3000);
}
bootstrap();
