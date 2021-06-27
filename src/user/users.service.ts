import { User } from './models/user.model';
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op, fn, col, literal } from 'sequelize';

import { Cart } from './../cart/models/cart.model';
import { Item } from 'src/items/models/item.model';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    @InjectModel(Cart) private cartModel: typeof Cart
  ) {}

  async findAll(page: number = 0, limit: number = 15, category: string = '00')
  : Promise<{
    rows: User[];
    count: number; 
  }> {
    return this.userModel.findAndCountAll({
      offset: page * limit,
      limit: limit,
    });
  }

  async find(page: number = 0, limit: number = 15, search: string = '')
  : Promise<{
    rows: User[];
    count: number;
  }> {
    return this.userModel.findAndCountAll({
      offset: page * limit,
      limit: limit,
      where: {
        [Op.or]: [
          {id: {[Op.like]: '%' + search + '%'}},
          {name: {[Op.like]: '%' + search + '%'}},
          {email: {[Op.like]: '%' + search + '%'}},
          {tel: {[Op.like]: '%' + search + '%'}},
          {phone: {[Op.like]: '%' + search + '%'}},
          {fax: {[Op.like]: '%' + search + '%'}},
          {zipCode: {[Op.like]: '%' + search + '%'}},
          {addr1: {[Op.like]: '%' + search + '%'}},
          {addr2: {[Op.like]: '%' + search + '%'}},
          {companyNo: {[Op.like]: '%' + search + '%'}},
          {corpNo: {[Op.like]: '%' + search + '%'}},
          {ceoNm: {[Op.like]: '%' + search + '%'}}
        ]
      }
    });
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      include: [
        { model: Cart, attributes: [ [fn('COUNT', 'code'), 'cartCnt'] ] }
      ],
      where: {
        id,
      }
    })
  }

  findByCode(code: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        code,
      }
    })
  }

  async save(user: User): Promise<[User, boolean]> {
    return this.userModel.upsert(user);
  }

  async create(user: User): Promise<User> {
    user['code'] = await this.getMaxSeq();
    return this.userModel.create(user);
  }

  async createList(users: User[]): Promise<User[]> {
    return this.userModel.bulkCreate(users);
  }

  async update(user: User): Promise<[number, User[]]> {
    return this.userModel.update(user, { where: { id: user.id }});
  }

  async delete(code: string): Promise<void> {
    const user = await this.findByCode(code);
    return user.destroy();
  }

  async findCartAll(page: number = 0, limit: number = 15, id: string)
  :Promise<{
    rows: Cart[];
    count: number;
  }> {
    // TODO :: quantity와 buyPrice를 곱해서 합계를 가져와야 함.
    return this.cartModel.findAndCountAll({ 
      include: [
        { 
          model: User,
          where: { id }
        },
        { model: Item }
      ],
      offset: page * limit,
      limit: limit
    });
  }

  async findCart(page: number = 0, limit: number = 15, id: string, categorys: string[], search: string)
  :Promise<{
    rows: Cart[];
    count: number;
  }> {
    return this.cartModel.findAndCountAll({
      include: [
        {
          model: User,
          where: { id }
        },
        {
          model: Item,
          where: {
            [Op.and]: {
              code: {[Op.regexp]: '^' + categorys.join('|^') },
              [Op.or]: {
                code: {[Op.like]: '%' + search + '%'},
                nameKor: {[Op.like]: '%' + search + '%'},
                nameEng: {[Op.like]: '%' + search + '%'}
              }
            },
          },
        }
      ],
      offset: page * limit,
      limit: limit
    })
  }

  private async getMaxSeq(): Promise<string> {
    const maxCode: string = await this.userModel.max('code');
    const tempCode: string = maxCode ? maxCode : 'C100000';

    const genCode: string = 'C' + (parseInt(tempCode.substring(1)) + 1);
    return genCode;
  }
}