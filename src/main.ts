import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/public', express.static(join(__dirname, '..', 'public')));
  app.enableCors();
  await app.listen(5000);
}
bootstrap();
