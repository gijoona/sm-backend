import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Item } from './models/item.model';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';

import { Cart } from 'src/cart/models/cart.model';
import { User } from 'src/user/models/user.model';
import { Company } from 'src/user/models/comp.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Item, Cart, User, Company])
  ],
  controllers: [ItemsController],
  providers: [ItemsService]
})

export class ItemsModule {}