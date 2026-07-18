import React from 'react';
import Link from 'next/link';

// Mock data to simulate markdown files
const notesContent: Record<string, string> = {
  'transitioning-to-cloud': `
## The Shift
Moving from pure AI engineering to Cloud Infrastructure has been a fascinating journey. When building QIA, I realized that the true bottleneck for AI systems isn't just the model—it's the infrastructure running it.

### Key Learnings:
- **Serverless vs. Edge:** Next.js Edge functions are great for quick LLM streaming, but you still need heavy-duty EC2/Lambda for intensive RAG processing.
- **State Management:** Distributed state is hard.
  `,
  'qia-orchestration-patterns': `
## Orchestration in QIA
In QIA, we don't just use single zero-shot prompts. We use an orchestrated agentic approach.

### The Agent Loop
1. **Plan:** The LLM breaks down the user request.
2. **Execute:** Tools are called asynchronously.
3. **Evaluate:** The output is verified against the initial plan.
  `,
  'nextjs-app-router-caching': `
## Caching in Next.js 13+
The App Router caching model is aggressive by default.

To opt out of cache for a specific route segment, you can use:
\`\`\`typescript
export const dynamic = 'force-dynamic';
\`\`\`
  `
};

export default function GardenNotePage({ params }: { params: { slug: string } }) {
  const content = notesContent[params.slug];

  if (!content) {
    return (
      <div style={{ paddingTop: '10rem', textAlign: 'center', color: 'white' }}>
        <h1>Note not found</h1>
        <Link href="/garden" style={{ color: 'var(--green)' }}>Return to Garden</Link>
      </div>
    );
  }

  return (
    <section className="section" style={{ paddingTop: '8rem', minHeight: '100vh', backgroundColor: 'var(--gray-900)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Link href="/garden" style={{ color: 'var(--green)', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
          &larr; Back to Garden
        </Link>
        <div style={{ backgroundColor: 'var(--gray-800)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--gray-700)', color: 'var(--gray-300)', lineHeight: '1.8' }}>
          <h1 style={{ color: 'white', marginBottom: '1.5rem', textTransform: 'capitalize' }}>
            {params.slug.replace(/-/g, ' ')}
          </h1>
          <div style={{ whiteSpace: 'pre-wrap' }}>
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}
