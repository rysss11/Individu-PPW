import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Aktifkan CORS agar endpoint API bisa diakses dari Frontend React (View) maupun Postman
  app.enableCors();

  // Validasi otomatis payload request menggunakan DTO & class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(3001);
  console.log('Backend NestJS berjalan di http://localhost:3001');
}
bootstrap();
