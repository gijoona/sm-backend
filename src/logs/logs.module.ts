import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LogsController } from './logs.controller';
import { LogsService } from './logs.service';
import { Logs } from './models/logs.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'sm-testdb-1.c9osvixk8s7x.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'tmaktjdrhd418!',
      database: 'testdb',
      models: [Logs],
    }),
    SequelizeModule.forFeature([Logs])
  ],
  controllers: [LogsController],
  providers: [LogsService]
})

export class LogsModule {}