import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';

import { Cart } from 'src/cart/models/cart.model';
import { Item } from 'src/items/models/item.model';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'sm-testdb-1.c9osvixk8s7x.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'tmaktjdrhd418!',
      database: 'testdb',
      models: [User, Cart, Item],
    }),
    SequelizeModule.forFeature([User, Cart, Item])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})

export class UserModule {}