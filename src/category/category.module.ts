import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Company } from 'src/user/models/comp.model';
import { CompanyCategory } from 'src/user/models/comp-category.model';
import { Category } from './models/category.model';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Category, Company, CompanyCategory])
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})

export class CategoryModule {}