import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateDestinationDto } from './dto/create-destination.dto.js';
import { UpdateDestinationDto } from './dto/update-destination.dto.js';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1000&q=80';

@Injectable()
export class DestinationsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.destination.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const destination = await this.prisma.destination.findUnique({
      where: { id },
    });

    if (!destination) {
      throw new NotFoundException(
        `Destinasi dengan ID ${id} tidak ditemukan`,
      );
    }

    return destination;
  }

  create(dto: CreateDestinationDto) {
    return this.prisma.destination.create({
      data: {
        name: dto.name,
        location: dto.location,
        tag: dto.tag ?? 'Alam',
        image: dto.image ?? DEFAULT_IMAGE,
        description: dto.description,
      },
    });
  }

  async update(id: number, dto: UpdateDestinationDto) {
    await this.findOne(id);
    return this.prisma.destination.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.destination.delete({
      where: { id },
    });
  }
}
