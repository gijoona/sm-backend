import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Controller } from '@nestjs/common';
import { Item } from './models/item.model';

@Controller('/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get('/findAll')
  findAll() {
    return this.itemsService.findAll();
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