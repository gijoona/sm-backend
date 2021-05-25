import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize';
import { Item } from './models/item.model'


@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item) private itemModel: typeof Item) {}

  async findAll(page: number = 0, limit: number = 30, category: string = '00'): Promise<Item[]> {
    return this.itemModel.findAll({
      offset: page * limit,
      limit: limit,
      where: {
        code: {[Op.startsWith]: category}
      }
    });
  }

  async find(page: number = 0, limit: number = 30, search: string = '', category: string = '00'): Promise<Item[]> {
    return this.itemModel.findAll({
      offset: page * limit,
      limit: limit,
      where: {
        [Op.and]: [
          {code: {[Op.startsWith]: category}},
          {[Op.or]: [
            {code: {[Op.like]: '%' + search + '%'}},
            {nameKor: {[Op.like]: '%' + search + '%'}},
            {nameEng: {[Op.like]: '%' + search + '%'}}
          ]}
        ]
      }
    });
  }

  findOne(code: string): Promise<Item> {
    return this.itemModel.findOne({
      where: {
        code,
      }
    })
  }

  async create(item: Item): Promise<Item> {
    return this.itemModel.create(item);
  }

  async createList(items: Item[]): Promise<Item[]> {
    return this.itemModel.bulkCreate(items);
  }

  async update(item: Item): Promise<[number, Item[]]> {
    return this.itemModel.update(item, { where: { code: item.code }});
  }

  async delete(code: string): Promise<void> {
    const item = await this.findOne(code);
    return item.destroy();
  }
}