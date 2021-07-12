import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { LangMaster } from './models/lang.master.model';
import { LangSlave } from './models/lang.slave.model';
import { LangController } from './lang.controller';
import { LangService } from './lang.service';

@Module({
  imports: [
    SequelizeModule.forFeature([LangMaster, LangSlave])
  ],
  controllers: [LangController],
  providers: [LangService]
})

export class LangModule {}