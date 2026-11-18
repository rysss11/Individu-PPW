import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const count = await prisma.destination.count();
  if (count === 0) {
    await prisma.destination.createMany({
      data: [
        {
          name: 'Raja Ampat',
          location: 'Papua Barat Daya',
          tag: 'Laut',
          image:
            'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=1200&q=80',
          description:
            'Ratusan pulau karst di atas laut toska. Salah satu spot snorkeling dan diving terbaik di dunia, terumbu karangnya masih sangat terjaga.',
        },
        {
          name: 'Gunung Bromo',
          location: 'Jawa Timur',
          tag: 'Gunung',
          image:
            'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=80',
          description:
            'Sunrise di atas lautan pasir dan kabut. Berangkat dini hari ke Penanjakan, dijamin sepadan.',
        },
        {
          name: 'Candi Borobudur',
          location: 'Magelang, Jawa Tengah',
          tag: 'Budaya',
          image:
            'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1000&q=80',
          description:
            'Candi Buddha terbesar di dunia dengan ratusan stupa dan relief. Paling cantik saat pagi berkabut.',
        },
      ],
    });
    console.log('Seeded 3 destinations into Supabase!');
  } else {
    console.log(`Database already has ${count} destinations.`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
