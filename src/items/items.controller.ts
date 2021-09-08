import { Body, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Controller } from '@nestjs/common';
import { Item } from './models/item.model';
import { Query } from '@nestjs/common';
import { Public } from 'src/auth/public';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/conf/multer.options';

@Controller('/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Public()
  @Get('/findAll')
  findAll(@Query('page') page: string, @Query('limit') limit: string, @Query('category') category?: string) {
    return this.itemsService.findAll(+page, +limit, category);
  }

  @Public()
  @Get('/find')
  find(@Query('page') page: string, @Query('limit') limit: string, @Query('search') search: string, @Query('category') category?: string) {
    return this.itemsService.find(+page, +limit, search, category);
  }

  @Post('/add')
  create(@Body() item: Item) {
    return this.itemsService.create(item);
  }

  @Post('/add/list')
  createList(@Body() items: Item[]) {
    return this.itemsService.createList(items);
  }

  @Patch('/modify')
  update(@Body() item: Item) {
    return this.itemsService.update(item);
  }

  @Post('/save')
  save(@Body() item: Item) {
    return this.itemsService.save(item);
  }

  @Delete('/remove/:code')
  delete(@Param('code') code: string) {
    return this.itemsService.delete(code);
  }

  @Public()
  @Post('/fileUpload')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return file;
  }
}