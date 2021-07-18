import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from './models/user.model';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { Cart } from 'src/cart/models/cart.model';
import { Item } from 'src/items/models/item.model';
import { Category } from 'src/category/models/category.model';
import { Company } from './models/comp.model';
import { CompsController } from './comps.controller';
import { CompsService } from './comps.service';
import { CompanyCategory } from './models/comp-category.model';
import { CartItem } from 'src/cart/models/cart-item.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Company, User, Cart, CartItem, Item, Category, CompanyCategory])
  ],
  controllers: [UsersController, CompsController],
  providers: [UsersService, CompsService],
  exports: [UsersService]
})

export class UsersModule {}