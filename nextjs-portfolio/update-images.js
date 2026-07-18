const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'rise-small-language-models-slms',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000'
  },
  {
    slug: 'database-connection-pooling-serverless',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000'
  },
  {
    slug: 'websockets-massive-comeback-2026',
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000'
  },
  {
    slug: 'css-in-2026-beyond-tailwind',
    thumbnail: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2000'
  }
];

async function main() {
  for (const update of updates) {
    try {
      await prisma.article.update({
        where: { slug: update.slug },
        data: { thumbnail: update.thumbnail }
      });
      console.log('Updated image for ' + update.slug);
    } catch (e) {
      console.error('Failed to update ' + update.slug, e);
    }
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
