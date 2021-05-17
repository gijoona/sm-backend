import { Module } from "@nestjs/common";
import { ExamController } from "./exam.controller";
import { ExamService } from "./exam.service";
import { SequelizeModule } from '@nestjs/sequelize';
import { Exam } from "./models/exam.model";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'sm-testdb-1.c9osvixk8s7x.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'tmaktjdrhd418!',
      database: 'testdb',
      models: [Exam],
    }),
    SequelizeModule.forFeature([Exam])
  ],
  controllers: [ExamController],
  providers: [ExamService]
})

export class ExamModule {}