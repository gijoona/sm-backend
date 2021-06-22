import { Get, Post, Query, Body, Controller } from '@nestjs/common';
import { Public } from './../auth/public';
import { LangSlave } from './models/lang.slave.model';
import { LangMaster } from './models/lang.master.model';
import { LangService } from './lang.service';

@Public()
@Controller('/lang')
export class LangController {
  constructor(private readonly langService: LangService) {}

  @Get('/findAll')
  findAll() {
    return this.langService.findAll();
  }
  
  @Get('/find')
  find(@Query('mid') id: string, @Query('type') type: string) {
    return this.langService.find(+id, type);
  }

  @Post('/master/add')
  addMaster (@Body() master: LangMaster) {
    return this.langService.createMaster(master);
  }

  @Post('/slave/add')
  addSlave(@Body() slave: LangSlave) {
    return this.langService.createSlave(slave);
  }
}