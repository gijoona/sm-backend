import { Controller, Get, Param } from "@nestjs/common";
import { ExamService } from "./exam.service";

@Controller('/exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Get()
  getHello(): string {
    return this.examService.getHello();
  }

  @Get('/list')
  findAll() {
    return this.examService.findAll();
  }

  @Get(':seq')
  findOne(@Param('seq') seq: string) {
    return this.examService.findOne(+seq);
  }
}