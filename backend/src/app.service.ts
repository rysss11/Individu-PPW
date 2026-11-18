import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      status: 'OK',
      message: 'Jelajah Destinasi Wisata API (NestJS + Prisma + Supabase)',
      endpoints: {
        getAllDestinations: 'GET /destinations',
        getOneDestination: 'GET /destinations/:id',
        createDestination: 'POST /destinations',
        updateDestination: 'PATCH /destinations/:id',
        deleteDestination: 'DELETE /destinations/:id',
      },
    };
  }
}
