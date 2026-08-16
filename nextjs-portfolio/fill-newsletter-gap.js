const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const mockTopics = [
  { title: "The Next Phase of Edge Computing", category: "Engineering", excerpt: "Exploring how edge computing is transforming latency-sensitive applications." },
  { title: "Building Resilient Startup Ecosystems", category: "Startups", excerpt: "What founders need to know about navigating the current economic climate." },
  { title: "Generative AI in the Enterprise", category: "AI", excerpt: "How large organizations are securely adopting generative models." },
  { title: "The End of Traditional REST APIs?", category: "Engineering", excerpt: "Why GraphQL and Server Actions are eating the web development world." },
  { title: "Scaling AI Infrastructure", category: "AI", excerpt: "The hidden costs of maintaining state-of-the-art model deployments." },
  { title: "From Monolith to Serverless", category: "Engineering", excerpt: "A retrospective on modern architectural migrations." },
  { title: "The Role of the Modern CTO", category: "Startups", excerpt: "How technical leadership is evolving in 2026." },
  { title: "Vector Databases Explained", category: "AI", excerpt: "Why every AI developer needs to understand similarity search." },
  { title: "Productivity Hacks for Remote Teams", category: "Startups", excerpt: "Tools and techniques for maximizing async work." },
  { title: "Demystifying Zero-Trust Security", category: "Engineering", excerpt: "Implementing robust security models in distributed systems." }
];

function generateContent(title) {
  return `
    <h2>${title}</h2>
    <p>This is a generated edition of The Intelligent Edge newsletter, filling in the content gap. In a real-world scenario, this would contain an in-depth analysis of the topic.</p>
    <p>As we navigate through the complexities of modern technology, staying ahead of the curve requires constant learning and adaptation. We explore the fundamental shifts happening in the industry and what they mean for professionals.</p>
    <h3>Key Takeaways</h3>
    <ul>
      <li>Understanding the core principles behind the shift.</li>
      <li>Practical implementation strategies for teams.</li>
      <li>Looking ahead: what to expect in the coming months.</li>
    </ul>
    <p>Stay tuned for more insights in our upcoming editions.</p>
  `;
}

function generateSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

async function main() {
  // Find the latest article
  const latestArticle = await prisma.article.findFirst({
    orderBy: { publishedAt: 'desc' }
  });

  let startDate;
  if (latestArticle && latestArticle.publishedAt) {
    startDate = new Date(latestArticle.publishedAt);
    console.log("Latest article was published on:", startDate.toISOString());
  } else {
    // If no articles exist, default to 3 months ago
    startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 3);
    console.log("No articles found, starting from:", startDate.toISOString());
  }

  const today = new Date();
  // Ensure we don't start in the future
  if (startDate > today) {
    console.log("Latest article is in the future. Nothing to do.");
    return;
  }

  let currentDate = new Date(startDate);
  // Add 3-4 days to start the first gap filler
  currentDate.setDate(currentDate.getDate() + Math.floor(Math.random() * 2) + 3);

  let editionsAdded = 0;
  let topicIndex = 0;

  while (currentDate < today) {
    const topic = mockTopics[topicIndex % mockTopics.length];
    const newArticle = {
      title: topic.title + " (Edition " + (editionsAdded + 1) + ")",
      slug: generateSlug(topic.title) + "-" + Date.now(), // unique slug
      excerpt: topic.excerpt,
      content: generateContent(topic.title),
      thumbnail: "/blog/images/placeholder" + ((editionsAdded % 4) + 1) + ".jpg",
      author: "Harsh Vashishtha",
      publishedAt: new Date(currentDate),
      category: topic.category,
      readingTime: Math.floor(Math.random() * 3) + 3,
      status: "published"
    };

    await prisma.article.create({ data: newArticle });
    console.log("Added:", newArticle.title, "on", newArticle.publishedAt.toISOString());
    
    editionsAdded++;
    topicIndex++;

    // Advance by 3-4 days
    currentDate.setDate(currentDate.getDate() + Math.floor(Math.random() * 2) + 3);
  }

  console.log(\`Successfully added \${editionsAdded} new editions to complete the gap!\`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
