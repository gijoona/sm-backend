import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "src/category/models/category.model";
import { CompanyCategory } from "./models/comp-category.model";
import { Company } from "./models/comp.model";
import { Op } from 'sequelize';

@Injectable()
export class CompsService {
  constructor(
    @InjectModel(Company) private compModel: typeof Company,
    @InjectModel(CompanyCategory) private compCatModel: typeof CompanyCategory
  ) {}

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

  async findCompany(search: string): Promise<Company[]> {
    return this.compModel.findAll({
      where: {
        [Op.or]: [
          {name: {[Op.like]: '%' + search + '%'}},
          {cmpNo: {[Op.like]: '%' + search + '%'}},
        ]
      }
    });
  }

  async save(company: Company): Promise<Company> {
    const newComp = await this.compModel.create(company);
    for(let category of company.categorys) {
      const categoryModel = new Category(category);
      newComp.$add('categorys', categoryModel);
    }
    return newComp;
  }

  async update(company: Company): Promise<Company> {
    // 업체정보 UPDATE
    this.compModel.update(company, { where: { id: company.id } });

    // 취급품목 갱신
    //  1. 취급품목 삭제
    const delDatas: CompanyCategory[] = await this.compCatModel.findAll({ where: { cmpId: company.id } });
    for(let delData of delDatas) {
      delData.destroy();
    }
    //  2. 취급품목 생성
    const updateComp = await this.findCmpNo(company.cmpNo);
    for(let category of company.categorys) {
      const categoryModel = new Category(category);
      await updateComp.$add('categorys', categoryModel);
    }

    return updateComp;
  }
}