import { Cart } from './models/cart.model';
import { Public } from './../auth/public';
import { Param, Body, Get, Post, Patch, Delete, Query } from '@nestjs/common';
import { CartService } from './cart.service';
import { Controller } from '@nestjs/common';

@Public()
@Controller('/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('/findAll')
  findAll(@Query('page') page: string, @Query('limit') limit: string) {
    return this.cartService.findAll(+page, +limit);
  }

  @Post('/add')
  addCart(@Body() cart: Cart) {
    return this.cartService.create(cart);
  }

  @Patch('/update')
  updateCart(@Body() cart: Cart) {
    return this.cartService.update(cart);
  }

  @Delete('/remove/:id')
  removeCart(@Param('id') id: string) {
    return this.cartService.delete(+id);
  }
}