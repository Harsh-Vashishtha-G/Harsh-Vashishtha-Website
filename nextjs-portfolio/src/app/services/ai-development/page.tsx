"use client";
import Link from 'next/link';

export default function AIDevelopmentPage() {
  return (
    <div className="section" style={{ minHeight: '80vh', paddingTop: '8rem', paddingBottom: '8rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="eyebrow">Service</div>
      <h1 className="section-title">AI Development & <em>Agents</em></h1>
      
      <p style={{ fontSize: '1.2rem', color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '2rem' }}>
        In today's rapidly evolving technological landscape, artificial intelligence is no longer just a futuristic concept—it is the foundational layer of modern software infrastructure. At Haqikos, we specialize in building highly intelligent, context-aware AI systems, autonomous agents, and LLM-powered products that transcend traditional automation. We leverage the most advanced foundation models, including OpenAI's GPT-4, Anthropic's Claude 3, and state-of-the-art open-source alternatives like Llama 3, to craft solutions that bring cognitive capabilities directly into your workflows.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Autonomous Agents</h3>
          <p style={{ color: 'var(--gray-600)' }}>Intelligent bots that can reason, plan, and execute multi-step tasks independently to automate your business operations.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>LLM Integrations</h3>
          <p style={{ color: 'var(--gray-600)' }}>Integrating OpenAI, Anthropic, and open-source models into your existing applications to provide natural language capabilities.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>RAG Systems</h3>
          <p style={{ color: 'var(--gray-600)' }}>Retrieval-Augmented Generation to allow AI to accurately answer questions based entirely on your own private company data.</p>
        </div>
      </div>

      <article className="article-content" style={{ marginTop: '3rem', marginBottom: '4rem' }}>
        <h2>The Paradigm Shift: From Software to Cognitive Engines</h2>
        <p>
          For decades, software development was predicated on deterministic logic: if X happens, execute Y. But the advent of Large Language Models (LLMs) has fundamentally altered this paradigm. We are now building systems that can comprehend nuance, understand human intent, and dynamically generate responses or take actions that were previously impossible to hardcode. Our AI development services are designed to help businesses navigate this transition, implementing intelligent systems that can drastically reduce operational overhead while simultaneously creating magical user experiences.
        </p>
        <p>
          We do not believe in throwing API wrappers over standard chatbot interfaces. Instead, we architect deeply integrated cognitive engines. This involves sophisticated prompt engineering, robust evaluation frameworks, and context-injection architectures that ensure the AI behaves predictably, safely, and accurately within the constraints of your specific business domain.
        </p>

        <h2>Mastering Retrieval-Augmented Generation (RAG)</h2>
        <p>
          One of the biggest limitations of foundation models is their inability to access real-time or proprietary company data. They hallucinate when they do not know the answer. To solve this, we engineer robust Retrieval-Augmented Generation (RAG) pipelines. By chunking your massive datasets—whether they are PDF manuals, internal knowledge bases, Confluence wikis, or real-time SQL databases—and converting them into high-dimensional vector embeddings, we create semantic search infrastructure. 
        </p>
        <p>
          When a user asks a question, our RAG system performs a similarity search against a vector database (such as Pinecone, Qdrant, or pgvector), retrieves the most mathematically relevant pieces of context, and injects them directly into the LLM's prompt in milliseconds. The result? The AI generates a perfectly accurate, highly contextualized answer, completely eliminating hallucinations and ensuring data privacy. 
        </p>

        <h2>The Rise of Autonomous AI Agents</h2>
        <p>
          While conversational AI is powerful, the true frontier of artificial intelligence lies in autonomous agents. We build AI systems that don't just chat—they act. By granting LLMs access to specific tools, APIs, and sandboxed environments, we create agents that can independently plan a sequence of actions, browse the web for live information, read and write files, execute code, and correct their own errors. 
        </p>
        <p>
          Imagine an AI agent that can automatically read incoming customer support emails, query your Stripe database for the user's billing history, cross-reference your documentation, draft a customized response, and issue a refund if applicable—all without human intervention. By utilizing frameworks like LangChain, AutoGen, and CrewAI, we are turning these futuristic concepts into highly reliable production-ready systems for our clients.
        </p>

        <h2>Fine-Tuning and Open Source Ecosystems</h2>
        <p>
          While commercial models like GPT-4 are incredibly capable, they are also expensive, heavily censored, and subject to rate limits. For enterprise clients requiring maximum control and privacy, we specialize in deploying and fine-tuning open-source models like Llama 3, Mistral, and Gemma. Through techniques like LoRA (Low-Rank Adaptation) and DPO (Direct Preference Optimization), we can train a smaller, incredibly fast, and cost-efficient open-source model to perfectly mimic your brand's voice or excel at a highly specific domain task, often outperforming much larger commercial models at a fraction of the inference cost.
        </p>
        
        <h2>Commitment to AI Safety and Guardrails</h2>
        <p>
          With great power comes great responsibility. Deploying AI in production requires rigorous safety mechanisms. We implement strict input and output guardrails to prevent prompt injection attacks, filter toxic content, and ensure the model never diverges from its designated persona. We utilize robust telemetry and observability platforms like LangSmith or Helicone to trace every single LLM call, monitor token usage, and analyze latency, ensuring your AI systems remain highly performant and secure at all times.
        </p>
      </article>

      <Link href="/contact" className="btn-dark" style={{ display: 'inline-block', marginBottom: '4rem' }}>Start an AI Project &rarr;</Link>
    </div>
  );
}
