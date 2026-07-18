import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TiltCard from '@/components/TiltCard';

export const metadata: Metadata = {
  title: 'Uses | Harsh Vashishtha',
  description: 'A detailed look at my development workspace, hardware, and the software tools I use daily to build AI products.',
};

export default function UsesPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '8rem', minHeight: '100vh', backgroundColor: 'var(--gray-900)' }}>
        <div className="section-header" style={{ marginBottom: '4rem' }}>
          <h1 className="section-title" style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1rem' }}>
            My <em style={{ color: 'var(--green)' }}>Workspace</em>
          </h1>
          <p className="section-subtitle" style={{ color: 'var(--gray-400)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.7' }}>
            A deep dive into the exact hardware setup, software environment, and cloud infrastructure I use every day to engineer AI systems and modern web applications.
          </p>
        </div>
        
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', color: 'var(--gray-300)', padding: '0 1rem' }}>
          
          {/* HARDWARE SECTION */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
              <i className="ti ti-device-desktop" style={{ fontSize: '2rem', color: 'var(--green)' }}></i>
              <h2 style={{ color: 'white', fontSize: '2rem', margin: 0 }}>Hardware & Setup</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', perspective: '1000px' }}>
              <TiltCard delay={0.1}>
                <div className="bento-icon" style={{ marginBottom: '1rem' }}><i className="ti ti-device-laptop"></i></div>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>MacBook Pro 16" (M-Series)</h3>
                <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  My primary machine. The Apple Silicon architecture provides an unbeatable combination of battery life and raw processing power. It handles local Docker containers, heavy Node.js builds, and lightweight local LLM inference without ever turning on the fans.
                </p>
              </TiltCard>

              <TiltCard delay={0.2}>
                <div className="bento-icon" style={{ marginBottom: '1rem' }}><i className="ti ti-device-tv"></i></div>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>Dual 27" 4K Monitors</h3>
                <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Screen real estate is critical for full-stack engineering. I use a multi-monitor setup: one screen dedicated entirely to my IDE and terminal, while the other holds API documentation, live browser previews, and Figma designs.
                </p>
              </TiltCard>

              <TiltCard delay={0.3}>
                <div className="bento-icon" style={{ marginBottom: '1rem' }}><i className="ti ti-keyboard"></i></div>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>Keychron K2 Keyboard</h3>
                <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  A wireless mechanical keyboard with a tactile layout. The 75% layout is perfectly compact while retaining the function row. It keeps typing fatigue to an absolute minimum during long debugging marathons.
                </p>
              </TiltCard>
            </div>
          </div>

          {/* SOFTWARE SECTION */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
              <i className="ti ti-code" style={{ fontSize: '2rem', color: 'var(--green)' }}></i>
              <h2 style={{ color: 'white', fontSize: '2rem', margin: 0 }}>Software & Editor</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', perspective: '1000px' }}>
              <TiltCard delay={0.4}>
                <div className="bento-icon" style={{ marginBottom: '1rem' }}><i className="ti ti-brand-vscode"></i></div>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>Cursor IDE</h3>
                <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Built on top of VS Code, Cursor is my AI-first code editor. The built-in Claude 3.5 Sonnet integrations drastically speed up prototyping, writing boilerplate, and understanding complex orchestration logic.
                </p>
              </TiltCard>

              <TiltCard delay={0.5}>
                <div className="bento-icon" style={{ marginBottom: '1rem' }}><i className="ti ti-typography"></i></div>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>JetBrains Mono</h3>
                <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  My absolute favorite monospace font. I use it everywhere—from my editor to my terminal. It's highly legible at small sizes, and the programming ligatures make reading modern TypeScript/React code much cleaner.
                </p>
              </TiltCard>

              <TiltCard delay={0.6}>
                <div className="bento-icon" style={{ marginBottom: '1rem' }}><i className="ti ti-terminal-2"></i></div>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>Warp Terminal</h3>
                <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  A blazing fast, Rust-based terminal that works like a modern text editor. The IDE-like text navigation and built-in AI command search save me from constantly Googling obscure shell commands.
                </p>
              </TiltCard>
            </div>
          </div>

          {/* CLOUD & STACK SECTION */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
              <i className="ti ti-cloud-computing" style={{ fontSize: '2rem', color: 'var(--green)' }}></i>
              <h2 style={{ color: 'white', fontSize: '2rem', margin: 0 }}>Cloud & Tech Stack</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', perspective: '1000px' }}>
              <div style={{ gridColumn: '1 / -1' }}>
                <TiltCard delay={0.7}>
                  <div className="bento-icon" style={{ marginBottom: '1rem' }}><i className="ti ti-brand-nextjs"></i></div>
                  <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>Next.js, TypeScript & Tailwind CSS</h3>
                  <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.95rem', maxWidth: '800px' }}>
                    The holy trinity of my modern web development stack. Next.js provides the robust App Router and SSR capabilities needed for SEO-friendly platforms. TypeScript ensures type safety across large codebases, preventing runtime errors. Tailwind CSS allows me to rapidly build stunning, responsive user interfaces without writing custom CSS files.
                  </p>
                </TiltCard>
              </div>

              <TiltCard delay={0.8}>
                <div className="bento-icon" style={{ marginBottom: '1rem' }}><i className="ti ti-server"></i></div>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>Vercel & AWS</h3>
                <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Vercel serves as the edge deployment network for my frontends (like this portfolio and PayQIA), offering unparalleled CI/CD. AWS handles the heavy lifting—running EC2 instances for background tasks and S3 for storage.
                </p>
              </TiltCard>

              <TiltCard delay={0.9}>
                <div className="bento-icon" style={{ marginBottom: '1rem' }}><i className="ti ti-brain"></i></div>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>OpenAI & Anthropic</h3>
                <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  The core intelligence behind my AI products. I leverage OpenAI (GPT-4o) and Anthropic (Claude 3.5 Sonnet) via their APIs to build autonomous agents, intelligent chatbots, and complex reasoning pipelines.
                </p>
              </TiltCard>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

