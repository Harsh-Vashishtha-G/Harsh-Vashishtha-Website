import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study: QIA — Quantum Intelligent Architecture | Harsh Vashishtha',
  description: 'Detailed case study on building QIA, a Perplexity-style AI answer engine for Indian users.',
};

export default function QIAPage() {
  return (
    <main>
      <div className="section">
        <div className="eyebrow">Case Study</div>
        <div className="section-title">QIA — <em>Quantum Intelligent Architecture</em></div>
        
        <div className="project-tags" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <span className="proj-tag">React.js</span>
          <span className="proj-tag">Claude API</span>
          <span className="proj-tag">Tavily Search</span>
          <span className="proj-tag">Firebase</span>
          <span className="proj-tag">SSE Streaming</span>
        </div>

        <div style={{ maxWidth: '800px', lineHeight: '1.7' }}>
          <h3 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Overview</h3>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', color: 'var(--gray-600)' }}>
            QIA (Quantum Intelligent Architecture) is the flagship product of Haqikos. Designed as a Perplexity-style AI answer engine, it provides real-time, sourced, and accurate answers specifically tailored to Indian users. By integrating live web search, dynamic citation bubbles, and conversation memory injection, QIA offers a seamless, reliable AI experience that goes beyond standard conversational bots.
          </p>

          <h3 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>The Problem</h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--gray-600)' }}>
            Traditional search engines often require users to sift through dozens of pages to find a specific answer, while standard large language models frequently suffer from hallucinations or provide outdated information. Furthermore, existing AI tools built in the West often lack the localized context and specific nuances needed by Indian professionals, students, and businesses. There was a clear need for an intelligent architecture that could autonomously browse the web, aggregate facts, and deliver accurate, localized, and verifiable answers.
          </p>

          <h3 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>The Solution</h3>
          <p style={{ marginBottom: '1rem', color: 'var(--gray-600)' }}>
            I built QIA to bridge this gap. Instead of just relying on pre-trained data, QIA actively searches the internet in real-time to gather the most up-to-date information. 
          </p>
          <ul style={{ marginBottom: '1.5rem', color: 'var(--gray-600)', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Real-time Web Search & Aggregation:</strong> Using the Tavily Search API, QIA queries the web, reads multiple sources, and synthesizes the data into a cohesive, highly relevant answer.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Citation Bubbles:</strong> Trust is paramount. Every factual claim made by QIA is backed by inline citation bubbles that link directly to the original source, ensuring absolute transparency.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Conversation Memory Injection:</strong> The assistant retains contextual memory of the entire conversation session. It seamlessly injects past interactions into the current prompt, allowing for complex, multi-turn follow-up questions without losing the thread.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Typewriter Streaming Output:</strong> To provide a responsive, ChatGPT-like feel, QIA utilizes Server-Sent Events (SSE) to stream the AI's response token-by-token directly to the client interface.</li>
          </ul>

          <h3 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>Technical Architecture</h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--gray-600)' }}>
            Building a real-time answer engine required a robust and highly concurrent tech stack. The frontend is built using <strong>React.js</strong>, offering a fluid and highly responsive user interface. To power the actual intelligence, I integrated the <strong>Claude API (Anthropic)</strong>, selected for its superior reasoning capabilities, nuance handling, and low hallucination rate.
          </p>
          <p style={{ marginBottom: '1.5rem', color: 'var(--gray-600)' }}>
            The backend logic orchestrates the workflow: receiving the user query, triggering the <strong>Tavily Search API</strong> to fetch live context, combining the search results with the user's prompt via custom prompt engineering, and finally streaming the results back to the frontend using <strong>SSE (Server-Sent Events)</strong>. User authentication, conversation history, and session management are handled securely via <strong>Firebase</strong>.
          </p>

          <h3 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>The Impact</h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--gray-600)' }}>
            QIA demonstrates the capability to build world-class, complex AI infrastructure locally. It serves as the foundation for Haqikos's mission to make AI highly accessible, reliable, and culturally attuned to the Indian market. It successfully reduced information retrieval time for users by providing synthesized, cited summaries instantly, eliminating the need to manually browse multiple websites.
          </p>

          <div style={{ marginTop: '4rem', display: 'flex', gap: '1rem' }}>
            <Link className="btn-primary" href="/projects" style={{ padding: '0.6rem 1.2rem' }}>← Back to Projects</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
