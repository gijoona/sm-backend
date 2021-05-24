import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Item } from './models/item.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'sm-testdb-1.c9osvixk8s7x.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'tmaktjdrhd418!',
      database: 'testdb',
      models: [Item],
    }),
    SequelizeModule.forFeature([Item])
  ],
  controllers: [ItemsController],
  providers: [ItemsService]
})

export class ItemsModule {}