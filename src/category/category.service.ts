import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "./models/category.model";

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private categoryModel: typeof Category) {}

  async findAll(): Promise<Category[]> {
    return this.categoryModel.findAll();
  }

  findOne(code: string): Promise<Category> {
    return this.categoryModel.findOne({
      where: {
        code,
      }
    })
  }

  async create(category: Category): Promise<Category> {
    return this.categoryModel.create(category);
  }

  async createList(categorys: Category[]): Promise<Category[]> {
    return this.categoryModel.bulkCreate(categorys);
  }

  async update(category: Category): Promise<[number, Category[]]> {
    return this.categoryModel.update(category, { where: { code: category.code } });
  }

  async delete(code: string): Promise<void> {
    const category = await this.findOne(code);
    await category.destroy();
  }
}