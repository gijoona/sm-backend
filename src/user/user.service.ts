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
      where: {
        id,
      }
    })
  }

  async save(user: User): Promise<[User, boolean]> {
    return this.userModel.upsert(user);
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