import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Company } from "./models/comp.model";

@Injectable()
export class CompsService {
  constructor(@InjectModel(Company) private compModel: typeof Company) {}

  async findCmpNo(cmpNo: string): Promise<Company> {
    return this.compModel.findOne({
      where: {
        cmpNo
      }
    })
  }

  async save(company: Company): Promise<Company> {
    return this.compModel.create(company);
  }
}