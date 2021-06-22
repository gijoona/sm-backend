import { Get, Post, Query, Body, Controller, Patch, Delete, Param } from '@nestjs/common';
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
  addMaster(@Body() master: LangMaster) {
    return this.langService.createMaster(master);
  }

  @Post('/slave/add')
  addSlave(@Body() slave: LangSlave) {
    return this.langService.createSlave(slave);
  }

  @Post('/master/save')
  saveMaster(@Body() master: LangMaster) {
    return this.langService.saveMaster(master);
  }

  @Post('/slave/save')
  saveSlave(@Body() slave: LangSlave) {
    return this.langService.saveSlave(slave);
  }

  @Patch('/master/update')
  updateMaster(@Body() master: LangMaster) {
    return this.langService.updateMaster(master);
  }

  @Patch('/slave/update')
  updateSlave(@Body() slave: LangSlave) {
    return this.langService.updateSlave(slave);
  }

  @Delete('/master/remove/:id')
  removeMaster(@Param('id') id: string) {
    return this.langService.deleteMaster(+id);
  }

  @Delete('/slave/remove/:id')
  removeSlave(@Param('id') id: string) {
    return this.langService.deleteSlave(+id);
  }
}