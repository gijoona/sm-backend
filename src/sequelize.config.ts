import { Injectable } from '@nestjs/common';
import { SequelizeOptionsFactory, SequelizeModuleOptions } from '@nestjs/sequelize'

import { Company } from './user/models/comp.model';
import { User } from './user/models/user.model';
import { Cart } from './cart/models/cart.model';
import { Item } from './items/models/item.model';
import { Category } from './category/models/category.model';
import { CompanyCategory } from './user/models/comp-category.model';
import { LangMaster } from './lang/models/lang.master.model';
import { LangSlave } from './lang/models/lang.slave.model';
import { Logs } from './logs/models/logs.model';
import { CartItem } from './cart/models/cart-item.model';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  createSequelizeOptions(): SequelizeModuleOptions {
    return {
      dialect: 'mariadb',
      dialectOptions: { charset: "utf8mb4", dateStrings: true, typeCast: true },
      host: 'sm-testdb-1.c9osvixk8s7x.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'tmaktjdrhd418!',
      database: 'testdb',
      models: [Company, User, Cart, CartItem, Item, Category, CompanyCategory, LangMaster, LangSlave, Logs],
    }
  }
}