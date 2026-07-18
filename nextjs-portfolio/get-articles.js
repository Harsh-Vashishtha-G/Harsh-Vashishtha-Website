const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const articles = await prisma.article.findMany();
  
  articles.forEach(article => {
    const wordCount = article.content.split(/\s+/).length;
    console.log(`\n--- Article: ${article.title} (Slug: ${article.slug}) ---`);
    console.log(`Word count: ${wordCount}`);
    if (wordCount < 500) {
      console.log(`Needs expansion! Current content:\n${article.content}`);
    }
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
