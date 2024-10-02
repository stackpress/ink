import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InkModule } from './ink/ink.module';

@Module({
  imports: [
    InkModule.forRoot({
      useFactory: () => ({})
    })
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [InkModule]
})
export class AppModule {}
