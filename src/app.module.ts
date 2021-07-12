import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfigService } from './sequelize.config';
import { AppController } from './app.controller';
import { LangModule } from './lang/lang.module';
import { UsersModule } from './user/users.module';
import { CartModule } from './cart/cart.module';
import { ItemsModule } from './items/items.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useClass: SequelizeConfigService
    }),
    CategoryModule,
    ItemsModule,
    CartModule,
    UsersModule,
    AuthModule,
    LangModule,
    LogsModule
  ],
  controllers: [AppController]
})
export class AppModule {}
