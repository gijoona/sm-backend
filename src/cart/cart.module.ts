import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Module } from '@nestjs/common';

import { User } from 'src/user/models/user.model';
import { Item } from 'src/items/models/item.model';
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
      models: [User, Cart, Item, Company],
    }),
    SequelizeModule.forFeature([User, Cart, Item, Company])
  ],
  controllers: [CartController],
  providers: [CartService]
})

export class CartModule {}