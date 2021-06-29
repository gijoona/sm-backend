import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Logs } from './models/logs.model';


@Injectable()
export class LogsService {
  constructor(
    @InjectModel(Logs) private logsModel: typeof Logs
  ) {}

  async findAll(page: number = 0, limit: number = 15)
  : Promise<{
    rows: Logs[];
    count: number; 
  }> {
    return this.logsModel.findAndCountAll({
      offset: page * limit,
      limit: limit,
    });
  }

  async create(log: Logs): Promise<Logs> {
    return this.logsModel.create(log);
  }
}