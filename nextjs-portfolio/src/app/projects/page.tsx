import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Innovations by Harsh Vashishtha — QIA, PayQIA, Gearist, Q-Verse",
  description: "A showcase of custom digital products, SaaS platforms, AI answer engines, and autonomous systems built by Harsh Vashishtha.",
};

export default function ProjectsPage() {
  return (
    <>
      <main>
        <div className="section" id="projects">
          <div className="eyebrow">PORTFOLIO &amp; ARCHITECTURE</div>
          <h1 className="section-title">Selected <em>Projects &amp; AI Systems</em></h1>
          <p className="hero-desc" style={{ marginTop: '-1.5rem', marginBottom: '3rem' }}>
            Production applications, autonomous AI agents, fintech progressive web apps, and developer platforms engineered by Harsh Vashishtha.
          </p>

          {/* MEDIA SHOWCASE GRID */}
          <div className="showcase-grid" style={{ marginBottom: '3.5rem' }}>
            {/* 01: QIA */}
            <div className="showcase-card">
              <div className="showcase-media">
                <span className="showcase-pill-float">AI Answer Engine</span>
                <span className="showcase-badge-live">● Live App</span>
                <Image
                  src="/assets/images/qia_showcase.jpg"
                  alt="QIA — Quantum Intelligent Architecture UI Mockup"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="showcase-body">
                <div className="showcase-header">
                  <h2 className="showcase-title">01 · QIA (Quantum Intelligent Architecture)</h2>
                </div>
                <p className="showcase-desc">
                  Perplexity-style AI answer engine with real-time web search, citation chips, streaming typewriter synthesis, and conversation memory. Flagship AI product of Haqikos engineered for accuracy and transparent citations.
                </p>
                <div className="showcase-tags">
                  <span className="showcase-tag">Claude 3.5 Sonnet</span>
                  <span className="showcase-tag">Tavily Web API</span>
                  <span className="showcase-tag">React.js</span>
                  <span className="showcase-tag">SSE Streaming</span>
                  <span className="showcase-tag">Firebase</span>
                </div>
                <div className="showcase-actions">
                  <Link className="btn-dark" href="/qia" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}>
                    Try QIA Live &rarr;
                  </Link>
                  <Link className="btn-outline" href="/projects/qia" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}>
                    Read Case Study
                  </Link>
                </div>
              </div>
            </div>

            {/* 02: PayQIA */}
            <div className="showcase-card">
              <div className="showcase-media">
                <span className="showcase-pill-float">Fintech AI Assistant</span>
                <span className="showcase-badge-live" style={{ background: '#0284c7' }}>● PWA System</span>
                <Image
                  src="/assets/images/payqia_showcase.jpg"
                  alt="PayQIA — AI Personal Finance Assistant Dashboard"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="showcase-body">
                <div className="showcase-header">
                  <h2 className="showcase-title">02 · PayQIA — Personal Finance AI</h2>
                </div>
                <p className="showcase-desc">
                  Mobile-first progressive web application for Indian personal finance with an AI assistant that explains bank transactions in natural language, tracks monthly budgets, and generates smart saving tips.
                </p>
                <div className="showcase-tags">
                  <span className="showcase-tag">Next.js</span>
                  <span className="showcase-tag">TypeScript</span>
                  <span className="showcase-tag">Supabase</span>
                  <span className="showcase-tag">Tailwind CSS</span>
                  <span className="showcase-tag">PWA</span>
                </div>
                <div className="showcase-actions">
                  <Link className="btn-dark" href="https://payqia.com" target="_blank" rel="noopener noreferrer" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}>
                    Visit PayQIA &rarr;
                  </Link>
                  <Link className="btn-outline" href="/projects/payqia" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}>
                    Read Case Study
                  </Link>
                </div>
              </div>
            </div>

            {/* 03: AI Developer Studio */}
            <div className="showcase-card" style={{ border: '2px solid #2563eb' }}>
              <div className="showcase-media">
                <span className="showcase-pill-float" style={{ background: '#2563eb' }}>Interactive Tools &amp; Store</span>
                <span className="showcase-badge-live" style={{ background: '#8b5cf6' }}>★ Monetized</span>
                <Image
                  src="/assets/images/ai_tools_studio.jpg"
                  alt="AI Tools Studio & Digital Marketplace"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="showcase-body">
                <div className="showcase-header">
                  <h2 className="showcase-title">03 · AI Developer Studio &amp; Marketplace</h2>
                </div>
                <p className="showcase-desc">
                  Interactive developer suite featuring free AI Prompt Architect, Token Cost Calculator, Next.js AI agent production starter kits, and 1-on-1 strategy sessions.
                </p>
                <div className="showcase-tags">
                  <span className="showcase-tag">Prompt Architect</span>
                  <span className="showcase-tag">Token Calculator</span>
                  <span className="showcase-tag">SaaS Boilerplates</span>
                  <span className="showcase-tag">Advisory</span>
                </div>
                <div className="showcase-actions">
                  <Link className="btn-dark" href="/tools" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem', background: '#2563eb' }}>
                    Open AI Studio &rarr;
                  </Link>
                  <Link className="btn-outline" href="/tools#kits" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}>
                    Browse Starter Kits
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          {/* DETAILED PROJECT BREAKDOWN */}
          <div style={{ marginTop: '3rem' }}>
            <div className="eyebrow">ARCHITECTURAL ARCHIVE</div>
            <h2 className="section-title">Deep <em>Case Studies</em></h2>

            <div className="project-row" id="qia">
              <div className="proj-num">01</div>
              <div>
                <div className="proj-name">QIA — Quantum Intelligent Architecture <span className="proj-tag" style={{ background: '#eff6ff', color: '#1d4ed8', marginLeft: '0.5rem' }}>Haqikos Flagship</span></div>
                <div className="proj-desc">Perplexity-style AI answer engine with real-time web search, citation bubbles, typewriter streaming output, and conversation memory injection. Built for users seeking accurate, sourced answers with deep neural synthesis.</div>
                <div className="proj-tags">
                  <span className="proj-tag">React.js</span><span className="proj-tag">Claude API</span><span className="proj-tag">Tavily Search</span><span className="proj-tag">Firebase</span><span className="proj-tag">SSE Streaming</span>
                </div>
                <div style={{ marginTop: '1.2rem', display: 'flex', gap: '0.8rem' }}>
                  <Link className="btn-dark" href="/qia" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>Try QIA Live →</Link>
                  <Link className="btn-outline" href="/projects/qia" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>Read Case Study →</Link>
                </div>
              </div>
              <div></div>
            </div>

            <div className="project-row" id="payqia">
              <div className="proj-num">02</div>
              <div>
                <div className="proj-name">PayQIA — Personal Finance AI <span className="proj-tag" style={{ background: '#f0fdf4', color: '#15803d', marginLeft: '0.5rem' }}>Indian Fintech</span></div>
                <div className="proj-desc">Mobile-first PWA for Indian personal finance with an AI assistant that explains financial data in natural language. Five-tab bottom navigation, real-time Supabase backend, and AI-powered expense insights.</div>
                <div className="proj-tags">
                  <span className="proj-tag">React</span><span className="proj-tag">TypeScript</span><span className="proj-tag">Tailwind CSS</span><span className="proj-tag">Supabase</span><span className="proj-tag">PWA</span>
                </div>
                <div style={{ marginTop: '1.2rem', display: 'flex', gap: '0.8rem' }}>
                  <Link className="btn-dark" href="https://payqia.com" target="_blank" rel="noopener noreferrer" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>Visit Platform →</Link>
                  <Link className="btn-outline" href="/projects/payqia" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>Read Case Study →</Link>
                </div>
              </div>
              <div></div>
            </div>

            <div className="project-row" id="q-verse">
              <div className="proj-num">03</div>
              <div>
                <div className="proj-name">Q-Verse — Adaptive Learning Ecosystem <span className="proj-tag" style={{ background: 'var(--gray-200)', color: 'var(--black)', marginLeft: '0.5rem' }}>MCA Capstone</span></div>
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

          {/* CTA Banner */}
          <div className="stat-card dark" style={{ textAlign: 'center', padding: '3rem 2rem', marginTop: '3.5rem' }}>
            <div className="haqikos-name" style={{ fontSize: '1.6rem', color: '#fff' }}>Want to build something similar?</div>
            <div className="haqikos-desc" style={{ maxWidth: '650px', margin: '0.8rem auto 1.5rem', color: '#aaa', fontSize: '0.95rem' }}>
              Explore production-ready starter kits, prompt engineering playbooks, or book a 1-on-1 architecture strategy session directly with Harsh.
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/tools" className="btn-dark" style={{ background: '#2563eb', color: '#fff' }}>
                Visit AI Tools &amp; Store &rarr;
              </Link>
              <Link href="mailto:vashishthaharsh97@gmail.com" className="btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
                Hire Harsh for Freelance &rarr;
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
