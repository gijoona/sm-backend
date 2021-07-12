import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "src/category/models/category.model";
import { Company } from "./models/comp.model";

@Injectable()
export class CompsService {
  constructor(@InjectModel(Company) private compModel: typeof Company) {}

  async findCmpNo(cmpNo: string): Promise<Company> {
    return this.compModel.findOne({
      include: [
        { model: Category }
      ],
      where: {
        cmpNo
      }
    })
  }

  async save(company: Company): Promise<Company> {
    const newComp = await this.compModel.create(company);
    for(let category of company.categorys) {
      const categoryModel = new Category(category);
      newComp.$add('categorys', categoryModel);
    }
    return newComp;
  }
}