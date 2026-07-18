const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const articles = [
  {
    title: "The Agentic Shift: How Autonomous AI is Redefining the Modern Enterprise",
    slug: "agentic-shift-autonomous-ai-enterprise",
    excerpt: "We are moving past chatbots. The next era of AI belongs to autonomous agents capable of executing complex, multi-step workflows across entire organizations.",
    content: `
      <p>We are currently witnessing a massive paradigm shift in Artificial Intelligence. For the past two years, the focus has entirely been on chat interfaces and generative text. However, we are now entering the era of <strong>Autonomous Agents</strong>.</p>
      <h2>What is the Agentic Shift?</h2>
      <p>Unlike standard LLMs that wait for a prompt, autonomous agents are goal-oriented. You give them a high-level objective like "Research our competitors and compile a pricing matrix," and the agent will independently break this down into a sequence of tasks, browse the web, scrape data, format a CSV, and email it to you.</p>
      <h3>The Impact on Enterprise Workflows</h3>
      <p>Enterprises are adopting frameworks like AutoGen, LangChain, and BabyAGI to build customized workforces of AI agents. These agents can communicate with each other. A "Researcher Agent" might gather data, pass it to an "Analyst Agent" for insights, who then hands it to a "Writer Agent" to draft a final report.</p>
      <ul>
        <li><strong>Customer Support:</strong> Agents resolving complex multi-step refunds directly in the CRM without human intervention.</li>
        <li><strong>Software Engineering:</strong> AI agents that review code, write unit tests, and automatically open pull requests to fix bugs.</li>
        <li><strong>Sales:</strong> Autonomous outbound agents that research prospects, craft personalized emails, and schedule meetings.</li>
      </ul>
      <p>The companies that master agentic workflows in 2026 will achieve unprecedented operational leverage. The bottleneck is no longer intelligence; it is system orchestration.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    author: "Harsh Vashishtha",
    publishedAt: new Date(new Date().setDate(new Date().getDate() - 2)),
    category: "AI",
    readingTime: 6,
    seoTitle: "The Agentic Shift: Autonomous AI in Enterprise",
    seoDescription: "Discover how autonomous AI agents are replacing traditional workflows.",
    featured: true,
    status: "published"
  },
  {
    title: "Building Haqikos: Architecture of a Next-Gen AI Startup",
    slug: "building-haqikos-architecture-ai-startup",
    excerpt: "A deep dive into the technical stack, infrastructure choices, and system design decisions we made while building the foundation for Haqikos.",
    content: `
      <p>When starting Haqikos, our core philosophy was speed of iteration without sacrificing reliability. We needed a stack that allowed us to rapidly prototype AI features while handling production-scale data streams.</p>
      <h2>The Core Technical Stack</h2>
      <p>We settled on a modern, battle-tested ecosystem:</p>
      <ul>
        <li><strong>Frontend:</strong> Next.js 14 with App Router, deployed on Vercel for instant edge-caching and serverless execution.</li>
        <li><strong>Backend & Database:</strong> Prisma ORM with PostgreSQL (hosted on Neon) for a serverless, scalable data layer.</li>
        <li><strong>AI Orchestration:</strong> Custom Python microservices utilizing LangChain and FastAPI to handle heavy LLM inferences.</li>
      </ul>
      <h3>Why Not a Monolith?</h3>
      <p>While a monolith is great for MVP, AI workloads require specific hardware. Our Node.js frontend needed to remain lightweight and responsive, while our AI processing required GPU clusters and long-running background tasks. By decoupling the AI logic into asynchronous Python workers, our UI never blocks.</p>
      <p>Building a startup is 10% coding and 90% iterating based on user feedback. The Haqikos architecture is designed exactly for that: resilient, scalable, and built for speed.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    author: "Harsh Vashishtha",
    publishedAt: new Date(new Date().setDate(new Date().getDate() - 14)),
    category: "Startups",
    readingTime: 8,
    seoTitle: "Building Haqikos: AI Startup Architecture",
    seoDescription: "Technical deep dive into the infrastructure of Haqikos.",
    featured: false,
    status: "published"
  },
  {
    title: "Prompt Engineering is Dead. Long Live Prompt Engineering.",
    slug: "prompt-engineering-evolution-2026",
    excerpt: "Why the traditional concept of 'prompt engineering' has become obsolete, and what the new skillset for AI developers actually looks like.",
    content: `
      <p>In 2023, "Prompt Engineer" was touted as the job of the future. By 2026, the concept has entirely morphed. The raw skill of appending "Think step by step" to a text string is no longer a differentiator.</p>
      <h2>The Evolution of the LLM Interface</h2>
      <p>Modern frontier models are remarkably adept at deducing intent. You no longer need to trick them with magical incantations. Instead, the focus has shifted from prompt syntax to <strong>Context Engineering</strong> and <strong>System Architecture</strong>.</p>
      <h3>What AI Developers Actually Do Now:</h3>
      <ul>
        <li><strong>RAG Pipeline Design:</strong> Connecting models to vector databases to ensure they have the right external knowledge before generating a response.</li>
        <li><strong>Evaluation & Testing:</strong> Building CI/CD pipelines that systematically test prompt changes against hundreds of edge cases using an LLM-as-a-judge approach.</li>
        <li><strong>Tool Calling:</strong> Structuring JSON schemas so that an LLM can flawlessly execute API requests to external services.</li>
      </ul>
      <p>Prompt engineering is dead. What remains is software engineering, elevated by an understanding of probabilistic systems.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
    author: "Harsh Vashishtha",
    publishedAt: new Date(new Date().setDate(new Date().getDate() - 30)),
    category: "AI",
    readingTime: 5,
    seoTitle: "The Evolution of Prompt Engineering",
    seoDescription: "How prompt engineering is changing in the age of advanced LLMs.",
    featured: false,
    status: "published"
  },
  {
    title: "Scaling Next.js for Data-Intensive AI Dashboards",
    slug: "scaling-nextjs-data-intensive-ai-dashboards",
    excerpt: "Lessons learned from scaling a Next.js application to handle real-time streaming data from thousands of concurrent LLM inferences.",
    content: `
      <p>Building an AI dashboard presents unique challenges. Unlike a traditional CRUD app, AI responses stream in token-by-token, requiring continuous UI updates. Here is how we scaled Next.js to handle it.</p>
      <h2>Streaming Tokens with React Server Components</h2>
      <p>The introduction of React Server Components and the Next.js App Router fundamentally changed how we handle data fetching. By utilizing Next.js Server Actions and the AI SDK, we can stream UI components directly from the server as the LLM generates them.</p>
      <h3>Optimizing Rendering</h3>
      <p>When rendering a markdown stream, using naive state updates causes immense layout thrashing. We optimized this by:</p>
      <ul>
        <li>Implementing custom React hooks that debounce markdown parsing.</li>
        <li>Using CSS grid to pre-allocate space for anticipated UI components to prevent cumulative layout shift (CLS).</li>
        <li>Moving heavy client-side computations to Web Workers.</li>
      </ul>
      <p>The result is a buttery smooth chat interface that handles massive data payloads without dropping a single frame.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    author: "Harsh Vashishtha",
    publishedAt: new Date(new Date().setDate(new Date().getDate() - 45)),
    category: "Engineering",
    readingTime: 7,
    seoTitle: "Scaling Next.js AI Dashboards",
    seoDescription: "How to handle real-time LLM streams in Next.js.",
    featured: false,
    status: "published"
  },
  {
    title: "The Unspoken Reality of Bootstrapping an AI SaaS in India",
    slug: "bootstrapping-ai-saas-india",
    excerpt: "Navigating payment gateways, cloud costs, and global GTM strategies as an independent founder building from India.",
    content: `
      <p>Building a startup is hard. Building an AI SaaS startup from India, without venture capital backing, introduces an entirely unique set of obstacles.</p>
      <h2>The USD to INR Infrastructure Gap</h2>
      <p>The primary challenge is infrastructure cost. OpenAI, Anthropic, and AWS bill in USD. When you are bootstrapping in INR, the exchange rate dictates your runway. Every API call is a tangible expense.</p>
      <h3>Overcoming the Payment Gateway Nightmare</h3>
      <p>Setting up global subscriptions using Indian payment gateways involves mountains of compliance paperwork. We eventually navigated this by leveraging merchant of record (MoR) services like Lemon Squeezy and Paddle, which abstract away international tax compliance.</p>
      <p>Despite these hurdles, the Indian engineering talent pool is phenomenal. By running lean and optimizing our LLM pipelines, we proved that you don't need a massive Silicon Valley seed round to build a globally competitive AI product.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
    author: "Harsh Vashishtha",
    publishedAt: new Date(new Date().setDate(new Date().getDate() - 60)),
    category: "Startups",
    readingTime: 6,
    seoTitle: "Bootstrapping an AI SaaS in India",
    seoDescription: "The reality of building an AI startup from India.",
    featured: true,
    status: "published"
  },
  {
    title: "Mastering RAG: Beyond Basic Vector Search",
    slug: "mastering-rag-beyond-vector-search",
    excerpt: "Advanced techniques for Retrieval-Augmented Generation, including hybrid search, query rewriting, and semantic chunking.",
    content: `
      <p>Every AI developer eventually builds a simple RAG (Retrieval-Augmented Generation) app: embed documents, store them in Pinecone, and perform a cosine similarity search. But this naive approach falls apart in production.</p>
      <h2>Why Naive RAG Fails</h2>
      <p>Basic vector search struggles with keyword precision. If a user searches for "Error Code 404 in Module XYZ", semantic search might return documents about general errors in entirely different modules because the mathematical vectors are "similar".</p>
      <h3>The Hybrid Search Solution</h3>
      <p>To build production-grade RAG, you need <strong>Hybrid Search</strong>: combining traditional BM25 keyword search with dense vector embeddings. Furthermore, we implement:</p>
      <ul>
        <li><strong>Query Rewriting:</strong> Using a fast LLM to rewrite the user's ambiguous query into a highly specific search string.</li>
        <li><strong>Semantic Chunking:</strong> Instead of splitting documents blindly by character count, we split them logically by paragraph or HTML header to preserve context.</li>
        <li><strong>Re-ranking:</strong> Passing the retrieved documents through a cross-encoder model to properly score their relevance before feeding them to the generation model.</li>
      </ul>
      <p>These techniques reduce hallucinations from 15% to near zero, making enterprise data reliable.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=1000",
    author: "Harsh Vashishtha",
    publishedAt: new Date(new Date().setDate(new Date().getDate() - 75)),
    category: "Engineering",
    readingTime: 9,
    seoTitle: "Advanced RAG Techniques",
    seoDescription: "How to implement advanced RAG architectures.",
    featured: false,
    status: "published"
  }
];

async function seed() {
  console.log('Clearing existing mock articles...');
  await prisma.article.deleteMany({});
  
  console.log('Seeding new articles...');
  for (const article of articles) {
    await prisma.article.create({ data: article });
  }
  
  console.log('Done!');
}

seed()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
