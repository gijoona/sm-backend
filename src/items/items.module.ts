import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Item } from './models/item.model';

import { Cart } from 'src/cart/models/cart.model';
import { User } from 'src/user/models/user.model';
import { Company } from 'src/user/models/comp.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'sm-testdb-1.c9osvixk8s7x.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'tmaktjdrhd418!',
      database: 'testdb',
      models: [Item, Cart, User, Company],
    }),
    SequelizeModule.forFeature([Item, Cart, User, Company])
  ],
  controllers: [ItemsController],
  providers: [ItemsService]
})

export class ItemsModule {}