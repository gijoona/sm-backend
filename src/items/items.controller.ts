import { Get } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Controller } from '@nestjs/common';

@Controller('/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get('/findAll')
  findAll() {
    return this.itemsService.findAll();
  }
}