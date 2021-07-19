import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';
import { Injectable, Query } from '@nestjs/common';
import { CartItem } from './models/cart-item.model';
import { Op, fn, literal, col } from 'sequelize';
import * as moment from 'moment-timezone';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart) private cartModel: typeof Cart,
    @InjectModel(CartItem) private cartItemModel: typeof CartItem
  ) {}

  /*
    카트 추가/수정/삭제/조회
   */ 

  /**
   * Cart List
   */
  async findCartList(userCd: string): Promise<Cart[]> {
    return this.cartModel.findAll({
      attributes: [ 'id', 'createdAt', 'seq', 'cmpNm',
        [literal('(SELECT COUNT(SM_TSP_CART_DTL.CART_ID) FROM SM_TSP_CART_DTL WHERE SM_TSP_CART_DTL.CART_ID = `Cart`.`CART_ID`)'), 'count']
      ],
      where: {
        userCd
      },
      order: [
        ['createdAt', 'DESC'],
        'seq'
      ]
    })
  }

  async saveCart(cart: Cart): Promise<boolean> {
    const findCart = await this.cartModel.findOne({
      attributes: [ [fn('MAX', col('seq')), 'maxSeq'] ],
      where: {
        userCd: cart.userCd,
        createdAt: {
          [Op.between]: [moment().startOf('day').format(), moment().format()]
        }
      },
      raw: true
    })

    const seq = findCart && findCart['maxSeq'] ? parseInt(findCart['maxSeq']) + 1 : 1;
    console.log(findCart['maxSeq'], seq);
    return false;
    // cart.seq = findCart && findCart['maxSeq'] ? parseInt(findCart['maxSeq']) + 1 : 1;
    // return this.cartModel.upsert(cart);
  }

  async deleteCart(id: number): Promise<void> {
    const cart = await this.cartModel.findOne({ where: { id }});
    cart.destroy();
  }

  /**
   * Cart Item
   */
  async addCartItem(cartItem: CartItem): Promise<boolean> {
    const findCart = await this.cartItemModel.findOne({
      where: {
        cartId: cartItem.cartId,
        itemCd: cartItem.itemCd
      }
    });
    if (findCart) {
      cartItem.id = findCart.id;
      cartItem.quantity += findCart.quantity;
    }
  
    return this.cartItemModel.upsert(cartItem);
  }

  async createItem(cartItem: CartItem): Promise<boolean> {
    const findCartItem = await this.cartItemModel.findOne({
      where: {
        cartId: cartItem.cartId,
        itemCd: cartItem.itemCd
      }
    });
    if (findCartItem) {
      cartItem.id = findCartItem.id;
    }
  
    return this.cartItemModel.upsert(cartItem);
  }
  
  
  async updateItem(cartItem: CartItem): Promise<[number, CartItem[]]> {
    return this.cartItemModel.update(cartItem, { where: { id: cartItem.id }});
  }
  
  async deleteItem(id: number): Promise<void> {
    const cartItem = await this.cartItemModel.findOne({ where: { id }});
    return cartItem.destroy();
  }
  
  async deleteItems(cartItems: CartItem[]): Promise<number> {
    return this.cartItemModel.destroy({
      where: {
        id: cartItems.map(cartItem => cartItem.id)
      }
    })
  }

  // ETC
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
  
  
}