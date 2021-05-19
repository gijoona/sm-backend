import { Module } from '@nestjs/common';
import { ExamModule } from './exam/exam.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ExamModule,
    CategoryModule
  ],
})
export class AppModule {}
