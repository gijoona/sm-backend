import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Logs } from './models/logs.model';
import { LogsController } from './logs.controller';
import { LogsService } from './logs.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Logs])
  ],
  controllers: [LogsController],
  providers: [LogsService]
})

export class LogsModule {}