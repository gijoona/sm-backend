import { LangService } from './lang.service';
import { LangController } from './lang.controller';
import { LangSlave } from './models/lang.slave.model';
import { LangMaster } from './models/lang.master.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'sm-testdb-1.c9osvixk8s7x.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'tmaktjdrhd418!',
      database: 'testdb',
      models: [LangMaster, LangSlave],
    }),
    SequelizeModule.forFeature([LangMaster, LangSlave])
  ],
  controllers: [LangController],
  providers: [LangService]
})

export class LangModule {}