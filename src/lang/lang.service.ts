import { LangSlave } from './models/lang.slave.model';
import { LangMaster } from './models/lang.master.model';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LangService {
  constructor(
    @InjectModel(LangMaster) private mstModel: typeof LangMaster,
    @InjectModel(LangSlave) private slvModel: typeof LangSlave) {}

  async findAll()
  : Promise<{
    rows: LangMaster[];
    count: number;
  }> {
    return this.mstModel.findAndCountAll({
      include: [{
        model: LangSlave
      }]
    })
  }

  async find(id: number, type: string): Promise<LangMaster> {
    return this.mstModel.findOne({
      include:[{
        model: LangSlave,
        where: { type }
      }],
      where: { id }
    })
  }

  async createMaster(master: LangMaster): Promise<LangMaster> {
    return this.mstModel.create(master);
  }

  async createSlave(slave: LangSlave): Promise<LangSlave> {
    return this.slvModel.create(slave);
  }
}