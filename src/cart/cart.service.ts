import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartModel: typeof Cart) {}

  /*
    카트 추가/수정/삭제/조회
   */ 
  async findAll(page: number = 0, limit: number = 15)
  : Promise<{
    rows: Cart[];
    count: number;
  }> {
    return this.cartModel.findAndCountAll({
      offset: page * limit,
      limit: limit
    })
  }

  async findOne(id: number): Promise<Cart> {
    return this.cartModel.findOne({
      where: {
        id
      }
    })
  }

  async create(cart: Cart): Promise<Cart> {
    return this.cartModel.create(cart);
  }

  async update(cart: Cart): Promise<[number, Cart[]]> {
    return this.cartModel.update(cart, { where: { id: cart.id }});
  }

  async delete(id: number): Promise<void> {
    const cart = await this.findOne(id);
    return cart.destroy();
  }
}