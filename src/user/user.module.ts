import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'sm-testdb-1.c9osvixk8s7x.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'tmaktjdrhd418!',
      database: 'testdb',
      models: [User],
    }),
    SequelizeModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [UserService]
})

export class UserModule {}