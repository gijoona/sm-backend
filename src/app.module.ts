import { UserModule as UsersModule } from './user/users.module';
import { CartModule } from './cart/cart.module';
import { ItemsModule } from './items/items.module';
import { Module } from '@nestjs/common';
import { ExamModule } from './exam/exam.module';
import { CategoryModule } from './category/category.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ExamModule,
    CategoryModule,
    ItemsModule,
    CartModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController]
})
export class AppModule {}
