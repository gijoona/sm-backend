import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Cart } from './models/cart.model';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';

import { User } from 'src/user/models/user.model';
import { Item } from 'src/items/models/item.model';
import { Company } from 'src/user/models/comp.model';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Cart, Item, Company])
  ],
  controllers: [CartController],
  providers: [CartService]
})

export class CartModule {}