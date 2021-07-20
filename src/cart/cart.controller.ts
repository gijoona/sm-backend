import { Cart } from './models/cart.model';
import { Param, Body, Get, Post, Patch, Delete, Query } from '@nestjs/common';
import { CartService } from './cart.service';
import { Controller } from '@nestjs/common';
import { CartItem } from './models/cart-item.model';

@Controller('/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('/findAll')
  findAll(@Query('page') page: string, @Query('limit') limit: string) {
    return this.cartService.findAll(+page, +limit);
  }

  @Get('/findCartList/:code')
  findCartList(@Param('code') userCd: string) {
    return this.cartService.findCartList(userCd);
  }

  @Post('/add')
  addCart(@Body() cart: Cart) {
    console.log('controller', cart);
    return this.cartService.createCart(cart);
  }

  @Post('/addItem')
  addCartItem(@Body() cartItem: CartItem) {
    return this.cartService.createItem(cartItem);
  }

  @Patch('/update')
  updateCart(@Body() cart: Cart) {
    return this.cartService.updateCart(cart);
  }

  @Patch('/updateItem')
  updateCartItem(@Body() cartItem: CartItem) {
    return this.cartService.updateItem(cartItem);
  }

  @Delete('/remove/:id') 
  removeCart(@Param('id') id: string) {
    return this.cartService.deleteCart(+id);
  }

  @Delete('/removeItem/:id')
  removeCartItem(@Param('id') id: string) {
    return this.cartService.deleteItem(+id);
  }

  @Post('/removeItems')
  removeCarts(@Body() param: any) {
    return this.cartService.deleteItems(param.cartItems);
  }
}