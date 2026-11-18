import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { DestinationsModule } from './destinations/destinations.module.js';

@Module({
  imports: [PrismaModule, DestinationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
