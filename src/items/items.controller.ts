import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Controller } from '@nestjs/common';
import { Item } from './models/item.model';
import { Query } from '@nestjs/common';

@Controller('/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get('/findAll')
  findAll(@Query('page') page: string, @Query('limit') limit: string, @Query('category') category?: string) {
    return this.itemsService.findAll(+page, +limit, category);
  }

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

  @Delete('/remove/:code')
  delete(@Param('code') code: string) {
    this.itemsService.delete(code);
  }
}