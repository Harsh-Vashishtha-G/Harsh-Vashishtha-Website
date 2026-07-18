const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.article.create({
    data: {
      title: 'The Future of AI Agents: From Chatbots to Digital Coworkers',
      slug: 'future-of-ai-agents',
      excerpt: 'Explore how the next generation of AI agents will move beyond simple text generation into autonomous task execution and digital collaboration.',
      content: `
# The Evolution of AI Agents

We are moving past the era of simple conversational AI. The next massive leap in artificial intelligence is the rise of **autonomous agents**. Unlike standard chatbots that wait for your prompt, AI agents can take a high-level goal, break it down into steps, and execute those steps across different applications.

## What is an AI Agent?

An AI agent is an intelligent system capable of acting autonomously in a digital environment to achieve a specific goal. It has access to tools, memory, and the ability to reason about its actions.

### Key Capabilities:
1. **Tool Use**: Accessing web browsers, APIs, and local files.
2. **Memory**: Remembering past interactions to provide better context.
3. **Reasoning**: Breaking complex tasks into smaller, executable steps.

The transition from AI as a "tool" to AI as a "coworker" will redefine how we work, build software, and interact with the digital world.
      `,
      thumbnail: '/assets/images/ai_agents_future.png',
      author: 'Harsh Vashishtha',
      publishedAt: new Date(),
      category: 'AI',
      readingTime: 4,
      seoTitle: 'Future of AI Agents & Digital Coworkers',
      seoDescription: 'Explore how the next generation of AI agents will move beyond simple text generation.',
      featured: true,
      status: 'published'
    }
  });

  await prisma.article.create({
    data: {
      title: 'Mastering Next.js 14 Server Actions',
      slug: 'mastering-nextjs-server-actions',
      excerpt: 'Learn how Next.js Server Actions are revolutionizing data mutations by securely blending frontend UI with backend logic.',
      content: `
# Why Server Actions Change Everything

Next.js 14 brought Server Actions to stable, fundamentally changing how we think about data mutations in React applications. Instead of manually writing API endpoints and managing loading states with \`useEffect\` or React Query, we can now call server-side functions directly from our client components.

## The Old Way vs. The New Way

### The Old Way (API Routes)
1. Build a \`/api/submit\` route.
2. Create a form in React.
3. Add a submit handler that uses \`fetch()\` to call the API.
4. Manually manage \`isLoading\` and \`error\` states.

### The New Way (Server Actions)
1. Write an \`async\` function with \`"use server"\`.
2. Pass it directly to the form's \`action\` attribute.

Next.js handles the rest, including secure serialization, progressive enhancement, and automated revalidation.

This shift dramatically reduces boilerplate and accelerates the speed at which developers can ship full-stack applications.
      `,
      thumbnail: '/assets/images/nextjs_server_actions.png',
      author: 'Harsh Vashishtha',
      publishedAt: new Date(),
      category: 'Engineering',
      readingTime: 3,
      seoTitle: 'Mastering Next.js Server Actions',
      seoDescription: 'Learn how Next.js Server Actions are revolutionizing data mutations.',
      featured: false,
      status: 'published'
    }
  });

  console.log('Successfully added new newsletter editions!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
