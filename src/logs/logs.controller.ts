import { Controller } from '@nestjs/common';
import { Body, Get, Post, Query } from '@nestjs/common';
import { LogsService } from './logs.service';
import { Logs } from './models/logs.model';
import { Public } from 'src/auth/public';

@Public()
@Controller('/logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}
  
  @Get('/findAll')
  findAll(@Query('page') page: string, @Query('limit') limit: string) {
    return this.logsService.findAll(+page, +limit);
  }
  
  @Post('/create')
  create(@Body() log: Logs) {
    return this.logsService.create(log);
  }
}