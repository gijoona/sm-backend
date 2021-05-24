import { Get, Post, Patch, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { Controller } from '@nestjs/common';

@Controller('/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('/findAll')
  findAll() {
    return this.cartService.findAll()
  }

  @Post('/add')
  addCart() {}

  @Patch('/update')
  updateCart() {}

  @Delete('/remove')
  removeCart() {}
}