import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { Exam } from "./models/exam.model";

@Injectable()
export class ExamService {
  constructor(@InjectModel(Exam) private examModel: typeof Exam) {}

  getHello(): string {
    return 'hello example';
  }

  async findAll(): Promise<Exam[]> {
    return this.examModel.findAll();
  }

  findOne(seq: number): Promise<Exam> {
    return this.examModel.findOne({
      where: {
        seq,
      },
    });
  }

  async remove(seq: number): Promise<void> {
    const exam = await this.findOne(seq);
    await exam.destroy();
  }
}