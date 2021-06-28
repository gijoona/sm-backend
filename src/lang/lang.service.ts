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

  async findOneMaster(id: number): Promise<LangMaster> {
    return this.mstModel.findOne({
      where: { id }
    })
  }

  async findOneSlave(id: number): Promise<LangSlave> {
    return this.slvModel.findOne({
      where: { id }
    })
  }

  async createMaster(master: LangMaster): Promise<LangMaster> {
    return this.mstModel.create(master);
  }

  async createSlave(slave: LangSlave): Promise<LangSlave> {
    return this.slvModel.create(slave);
  }

  async updateMaster(master: LangMaster): Promise<[number, LangMaster[]]> {
    return this.mstModel.update(master, { where: { id: master.id }});
  }

  async updateSlave(slave: LangSlave): Promise<[number, LangSlave[]]> {
    return this.slvModel.update(slave, { where: { id: slave.id }});
  }

  async deleteMaster(id: number): Promise<void> {
    const master = await this.findOneMaster(id);
    master.destroy();
  }

  async deleteSlave(id: number): Promise<void> {
    const slave = await this.findOneSlave(id);
    slave.destroy();
  }

  async saveMaster(master: LangMaster): Promise<boolean> {
    return this.mstModel.upsert(master);
  }

  async saveSlave(slave: LangSlave): Promise<boolean> {
    return this.slvModel.upsert(slave);
  }

}