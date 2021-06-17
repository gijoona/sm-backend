import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';
import { Injectable, Query } from '@nestjs/common';

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

  async create(cart: Cart): Promise<[Cart, boolean]> {
    const findCart = await this.cartModel.findOne({
      where: {
        userCd: cart.userCd,
        itemCd: cart.itemCd
      }
    });
    if (findCart) {
      cart.id = findCart.id;
      cart.quantity += findCart.quantity;
    }

    return this.cartModel.upsert(cart);
  }

  async update(cart: Cart): Promise<[number, Cart[]]> {
    return this.cartModel.update(cart, { where: { id: cart.id }});
  }

  async delete(id: number): Promise<void> {
    const cart = await this.findOne(id);
    return cart.destroy();
  }

  async deleteList(carts: Cart[]): Promise<number> {
    return this.cartModel.destroy({
      where: {
        id: carts.map(cart => cart.id)
      }
    })
  }
}