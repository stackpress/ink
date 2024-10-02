import { Controller, Get, Res, Param } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { InkService } from './ink/ink.service';

@Controller()
export class AppController {
  constructor(
    private readonly inkService: InkService,
    private readonly appService: AppService
  ) {}

  @Get()
  getHomePage(@Res() res: Response) {
    return res.render('index', this.appService.getHomeProps());
  }

  @Get('/build/:filename')
  async getAsset(
    @Param('filename') filename: string, 
    @Res() res: Response
  ) {
    //get compiler
    const { compiler } = this.inkService;
    //get asset
    const { type, content } = await compiler.asset(filename);
    //send response
    res.type(type).send(content);
  }
}
