import { User } from './models/user.model';
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize';


@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async findAll(page: number = 0, limit: number = 15, category: string = '00')
  : Promise<{
    rows: User[];
    count: number; 
  }> {
    return this.userModel.findAndCountAll({
      offset: page * limit,
      limit: limit,
      where: {
        code: {[Op.startsWith]: category}
      }
    });
  }

  async find(page: number = 0, limit: number = 15, search: string = '', category: string = '00')
  : Promise<{
    rows: User[];
    count: number;
  }> {
    return this.userModel.findAndCountAll({
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

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      }
    })
  }

  async create(user: User): Promise<User> {
    return this.userModel.create(user);
  }

  async createList(users: User[]): Promise<User[]> {
    return this.userModel.bulkCreate(users);
  }

  async update(user: User): Promise<[number, User[]]> {
    return this.userModel.update(user, { where: { id: user.id }});
  }

  async delete(id: string): Promise<void> {
    const user = await this.findOne(id);
    return user.destroy();
  }
}