import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects by Harsh Vashishtha — QIA, PayQIA, Gearist, Q-Verse",
  description: "A showcase of custom digital products, SaaS platforms, and AI applications built by Haqikos.",
};

export default function Page() {
  return (
    <>
      <main>
  {/* PROJECTS */}
  <div className="section" id="projects">
    <div className="eyebrow">Work</div>
    <div className="section-title">Selected <em>projects</em></div>
    <p className="hero-desc" style={{ marginTop: '-1.5rem', marginBottom: '2.5rem' }}>A collection of my work in AI, web development, and product building.</p>
    
    <div>
      <div className="project-row" id="qia">
        <div className="proj-num">01</div>
        <div>
          <div className="proj-name">QIA — Quantum Intelligent Architecture <span className="proj-tag" style={{ background: 'var(--gray-200)', color: 'var(--black)', marginLeft: '0.5rem' }}>Private Project</span></div>
          <div className="proj-desc">Perplexity-style AI answer engine with real-time web search, citation bubbles, typewriter streaming output, and conversation memory injection. Flagship product of Haqikos — built for Indian users seeking accurate, sourced answers.</div>
          <div className="proj-tags">
            <span className="proj-tag">React.js</span><span className="proj-tag">Claude API</span><span className="proj-tag">Tavily Search</span><span className="proj-tag">Firebase</span><span className="proj-tag">SSE Streaming</span>
          </div>
          <div style={{ marginTop: '1.2rem' }}>
            <Link className="btn-outline" href="/projects/qia" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>Read Case Study →</Link>
          </div>
        </div>
        <div></div>
      </div>
      <div className="project-row" id="payqia">
        <div className="proj-num">02</div>
        <div>
          <div className="proj-name">PayQIA — Personal Finance AI <span className="proj-tag" style={{ background: 'var(--gray-200)', color: 'var(--black)', marginLeft: '0.5rem' }}>Private Project</span></div>
          <div className="proj-desc">Mobile-first PWA for Indian personal finance with an AI assistant that explains financial data in natural language. Five-tab bottom navigation, real-time Supabase backend, and AI-powered expense insights.</div>
          <div className="proj-tags">
            <span className="proj-tag">React</span><span className="proj-tag">TypeScript</span><span className="proj-tag">Tailwind CSS</span><span className="proj-tag">Supabase</span><span className="proj-tag">PWA</span>
          </div>
          <div style={{ marginTop: '1.2rem' }}>
            <Link className="btn-outline" href="/projects/payqia" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>Read Case Study →</Link>
          </div>
        </div>
        <div></div>
      </div>
      <div className="project-row" id="q-verse">
        <div className="proj-num">03</div>
        <div>
          <div className="proj-name">Q-Verse — Adaptive Learning Ecosystem <span className="proj-tag" style={{ background: 'var(--gray-200)', color: 'var(--black)', marginLeft: '0.5rem' }}>Private Project</span></div>
          <div className="proj-desc">AI-powered adaptive learning platform with ML-based personalized learning paths, NLP virtual assistant (QIA), real-time quiz assessment, and performance analytics dashboard. MCA final semester capstone.</div>
          <div className="proj-tags">
            <span className="proj-tag">React.js</span><span className="proj-tag">Flask</span><span className="proj-tag">TensorFlow</span><span className="proj-tag">MySQL</span><span className="proj-tag">NLTK</span>
          </div>
          <div style={{ marginTop: '1.2rem' }}>
            <Link className="btn-outline" href="/projects/q-verse" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>Read Case Study →</Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</main>

</>
  );
}
