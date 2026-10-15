import Link from 'next/link';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import Terminal from '@/components/Terminal';

export default async function Page() {
  const latestArticles = await prisma.article.findMany({
    orderBy: { publishedAt: 'desc' },
    take: 2,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                '@id': 'https://harshvashishtha.space/#person',
                name: 'Harsh Vashishtha',
                url: 'https://harshvashishtha.space',
                jobTitle: 'AI Engineer & Founder',
                sameAs: [
                  'https://linkedin.com/in/theharshvashishtha',
                  'https://github.com/Harsh-Vashishtha-G',
                  'https://youtube.com/@TheHarshVashishtha'
                ]
              },
              {
                '@type': 'Organization',
                '@id': 'https://haqikos.com/#organization',
                name: 'Haqikos',
                url: 'https://haqikos.com',
                founder: { '@id': 'https://harshvashishtha.space/#person' }
              }
            ]
          })
        }}
      />
      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '0.5rem' }}>
            <div className="avail-badge"><div className="green-dot"></div> Available for freelance work</div>
            <Link href="/tools" className="avail-badge" style={{ textDecoration: 'none', background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe' }}>
              <span className="nav-badge" style={{ margin: 0, padding: '0.1rem 0.35rem', fontSize: '0.6rem' }}>NEW</span> AI Studio Live &rarr;
            </Link>
          </div>
          <h1 className="headline">AI Engineer.<br /><em>Builder.</em><br />Founder.</h1>
          <p className="hero-desc">I build intelligent AI products, autonomous agents, and modern web experiences. Founder of Haqikos — An emerging AI technology company based in India.</p>
          <div className="hero-actions">
            <Link className="btn-dark" href="/tools" style={{ background: 'linear-gradient(135deg, #1d4ed8, #0a0a0a)', border: '1px solid #3b82f6' }}>
              <i className="ti ti-sparkles"></i> AI Tools &amp; Store
            </Link>
            <Link className="btn-outline" href="/assets/resume/Harsh%20Vashishtha%20-%20Resume.pdf" target="_blank" rel="noopener" download="Harsh_Vashishtha_Resume.pdf"><i className="ti ti-download"></i> Resume</Link>
            <Link className="btn-outline" href="/projects">View Projects</Link>
            <Link className="btn-icon" href="https://linkedin.com/in/theharshvashishtha" target="_blank" rel="noopener" title="LinkedIn"><i className="ti ti-brand-linkedin"></i></Link>
            <Link className="btn-icon" href="https://github.com/Harsh-Vashishtha-G" target="_blank" rel="noopener" title="GitHub"><i className="ti ti-brand-github"></i></Link>
            <Link className="btn-icon" href="https://youtube.com/@TheHarshVashishtha" target="_blank" rel="noopener" title="YouTube"><i className="ti ti-brand-youtube"></i></Link>
          </div>
        </div>
        <div className="hero-right">
          <div className="stat-row">
            <Link href="/projects" className="stat-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div className="stat-num">4</div>
              <div className="stat-label">AI Products Built</div>
            </Link>
            <Link href="/tools" className="stat-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block', background: '#f8faff', border: '1px solid #bfdbfe' }}>
              <div className="stat-num" style={{ color: '#2563eb' }}>3+</div>
              <div className="stat-label">Free AI Tools Live &rarr;</div>
            </Link>
          </div>
          <div className="stat-card dark">
            <div className="haqikos-name">Haqikos</div>
            <div className="haqikos-desc">India&apos;s AI Technology Company — building QIA & <Link href="https://payqia.com" target="_blank" rel="noopener" style={{textDecoration: "underline", color: "inherit"}}>PayQIA</Link> to make AI accessible to every Indian.</div>
          </div>
          <div className="stat-card">
            <div style={{ color: 'var(--green)', fontWeight: '600', marginBottom: '0.6rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <span className="green-dot" style={{ display: 'inline-block' }}></span> Seeking Cloud Roles
            </div>
            <div style={{ fontWeight: '600', fontSize: '1.15rem', color: 'var(--black)', marginBottom: '0.4rem', letterSpacing: '-0.3px' }}>
              MCA (AI &amp; ML) Graduate
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)', lineHeight: '1.6', marginBottom: '1rem' }}>
              Recently graduated from Lovely Professional University. I am now actively seeking full-time opportunities in Cloud Computing to architect scalable, resilient, and AI-driven cloud infrastructure.
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--gray-500)', fontWeight: '500', borderTop: '1px solid var(--gray-200)', paddingTop: '0.8rem' }}>
              Available for full-time roles &amp; freelance projects
            </div>
          </div>
        </div>
      </div>
      
      <div className="section" style={{ paddingBottom: '0' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--gray-700)', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          Harsh Vashishtha is an AI Engineer and Founder based in India, specializing in building LLM-powered products, AI agents, and modern web applications. As the founder of Haqikos, he has built QIA — a Perplexity-style AI answer engine, PayQIA — a personal finance AI for Indian users, and Gearist — a 24-tool AI platform for Indian professionals and students. He holds an MCA degree with specialization in AI & ML from Lovely Professional University and is currently available for freelance AI development projects and full-time Cloud Computing roles.
        </p>
      </div>
      <div className="section" style={{ paddingBottom: '0', textAlign: 'center' }}>
        <div className="eyebrow" style={{ marginBottom: '1rem' }}>Interactive Terminal</div>
        <Terminal />
      </div>

      <div className="divider"></div>

      {/* ABOUT */}
      <div className="section" id="about">
        <div className="eyebrow">About</div>
        <div className="section-title">What I do <em>best</em></div>
        
        <div className="home-bento">
          {/* Card 1: Marquee Roles (Span 4) */}
          <div className="bento-card bento-span-4" style={{ padding: '1.5rem 0' }}>
            <div className="marquee-container">
              <div className="marquee-content">
                <span className="role-tag">AI Engineer</span>
                <span className="role-tag">Machine Learning</span>
                <span className="role-tag">Agentic AI</span>
                <span className="role-tag">React.js Engineer</span>
                <span className="role-tag">Next.js Engineer</span>
                <span className="role-tag">Python</span>
                <span className="role-tag">TypeScript</span>
                <span className="role-tag">Full Stack Engineer</span>
                <span className="role-tag">SaaS Builder</span>
                <span className="role-tag">Content Creator</span>
                {/* Duplicate for infinite scroll */}
                <span className="role-tag">React.js Engineer</span>
                <span className="role-tag">Next.js Engineer</span>
                <span className="role-tag">UI/UX Designer</span>
              </div>
            </div>
          </div>

          {/* Card 2: AI Development (Span 2, Row 2) */}
          <Link href="/services/ai-development" className="bento-card bento-span-2 bento-row-2" style={{ textDecoration: 'none' }}>
            <div className="bento-image-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800)' }}></div>
            <div className="bento-icon"><i className="ti ti-brain"></i></div>
            <div>
              <h3>AI Development & Agents</h3>
              <p>Building intelligent AI systems, autonomous agents, and LLM-powered products using Claude API, prompt engineering, and modern AI frameworks. From chatbots to full answer engines.</p>
            </div>
          </Link>

          {/* Card 3: Web Dev (Span 2) */}
          <Link href="/services/web-development" className="bento-card bento-span-2" style={{ textDecoration: 'none' }}>
            <div className="bento-icon"><i className="ti ti-code"></i></div>
            <div>
              <h3>Web Development & Design</h3>
              <p>Crafting modern, responsive, pixel-perfect web apps using React.js, Next.js, TypeScript, and Tailwind CSS. From landing pages to full SaaS products.</p>
            </div>
          </Link>

          {/* Card 4: Cloud (Span 1) */}
          <Link href="/services/cloud-infrastructure" className="bento-card dark" style={{ textDecoration: 'none' }}>
            <div className="bento-icon"><i className="ti ti-cloud"></i></div>
            <div>
              <h3 style={{ color: '#fff' }}>Cloud & Infra</h3>
              <p style={{ color: '#aaa' }}>Deploying scalable apps on Vercel, caching with Redis, & integrating Firebase.</p>
            </div>
          </Link>

          {/* Card 5: SaaS (Span 1) */}
          <Link href="/services/saas-building" className="bento-card" style={{ textDecoration: 'none' }}>
            <div className="bento-icon"><i className="ti ti-rocket"></i></div>
            <div>
              <h3>SaaS Building</h3>
              <p>End-to-end development: auth, Razorpay, Supabase.</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="divider"></div>

      {/* FEATURED PROJECTS & PRODUCTS SHOWCASE */}
      <div className="section" id="projects">
        <div className="eyebrow">Portfolio &amp; Innovations</div>
        <div className="section-title">Featured <em>Work &amp; Tools</em></div>
        
        <div className="showcase-grid">
          {/* Showcase 1: QIA */}
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
                <h3 className="showcase-title">QIA — Quantum Intelligent Architecture</h3>
              </div>
              <p className="showcase-desc">
                Perplexity-style AI answer engine with real-time web retrieval, citation bubbles, streaming thought synthesis, and deep research neural graph. Flagship product of Haqikos.
              </p>
              <div className="showcase-tags">
                <span className="showcase-tag">Claude 3.5</span>
                <span className="showcase-tag">Tavily Web Search</span>
                <span className="showcase-tag">Next.js / React</span>
                <span className="showcase-tag">SSE Streaming</span>
                <span className="showcase-tag">Vector DB</span>
              </div>
              <div className="showcase-actions">
                <Link href="/qia" className="btn-dark" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}>
                  Try QIA Live &rarr;
                </Link>
                <Link href="/projects/qia" className="btn-outline" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}>
                  Case Study
                </Link>
              </div>
            </div>
          </div>

          {/* Showcase 2: PayQIA */}
          <div className="showcase-card">
            <div className="showcase-media">
              <span className="showcase-pill-float">Fintech AI Platform</span>
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
                <h3 className="showcase-title">PayQIA — AI Financial Assistant</h3>
              </div>
              <p className="showcase-desc">
                Mobile-first PWA for Indian personal finance with an AI assistant that explains bank transactions in natural language, tracks monthly budgets, and generates intelligent saving tips.
              </p>
              <div className="showcase-tags">
                <span className="showcase-tag">Next.js</span>
                <span className="showcase-tag">TypeScript</span>
                <span className="showcase-tag">Supabase</span>
                <span className="showcase-tag">Indian SMS AI</span>
                <span className="showcase-tag">PWA</span>
              </div>
              <div className="showcase-actions">
                <Link href="https://payqia.com" target="_blank" rel="noopener noreferrer" className="btn-dark" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}>
                  Visit PayQIA &rarr;
                </Link>
                <Link href="/projects/payqia" className="btn-outline" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}>
                  Case Study
                </Link>
              </div>
            </div>
          </div>

          {/* Showcase 3: AI Developer Studio & Marketplace */}
          <div className="showcase-card" style={{ border: '2px solid #2563eb' }}>
            <div className="showcase-media">
              <span className="showcase-pill-float" style={{ background: '#2563eb' }}>Tools &amp; Store</span>
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
                <h3 className="showcase-title">AI Tools &amp; Developer Studio</h3>
              </div>
              <p className="showcase-desc">
                Interactive utilities for developers: AI Prompt Architect, API Token Cost Calculator, production Next.js AI agent boilerplates, and 1-on-1 architecture strategy consultations.
              </p>
              <div className="showcase-tags">
                <span className="showcase-tag">Free Prompt Optimizer</span>
                <span className="showcase-tag">Cost Estimator</span>
                <span className="showcase-tag">Agent Starters</span>
                <span className="showcase-tag">1-on-1 Advisory</span>
              </div>
              <div className="showcase-actions">
                <Link href="/tools" className="btn-dark" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem', background: '#2563eb' }}>
                  Explore Studio &amp; Store &rarr;
                </Link>
                <Link href="/tools#cost-calculator" className="btn-outline" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}>
                  Cost Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Link href="/projects" className="btn-outline" style={{ marginRight: '1rem' }}>View all projects &rarr;</Link>
          <Link href="/tools" className="btn-dark">Visit AI Tools Studio &rarr;</Link>
        </div>
      </div>

      <div className="divider"></div>

      {/* LATEST INSIGHTS */}
      <div className="section" id="insights">
        <div className="eyebrow">Newsletter</div>
        <div className="section-title">Latest <em>Insights</em></div>
        
        <div className="articles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {latestArticles.map((article) => (
            <Link key={article.id} href={`/newsletter/${article.slug}`} className="bento-card" style={{ textDecoration: 'none', padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {article.thumbnail ? (
                <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                  <Image src={article.thumbnail} alt={article.title} fill style={{ objectFit: 'cover' }} />
                </div>
              ) : (
                <div style={{ width: '100%', height: '200px', background: 'var(--gray-200)' }}></div>
              )}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--gray-500)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>{article.readingTime} min read</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>{article.title}</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>
                  {article.excerpt || article.content.substring(0, 100) + '...'}
                </p>
                <span style={{ color: 'var(--black)', fontWeight: '500', fontSize: '0.9rem' }}>Read article &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Link href="/newsletter" className="btn-outline">Read all editions &rarr;</Link>
        </div>
      </div>

      <div className="divider"></div>
      {/* CONTACT */}
      <div className="section" id="contact" >
        <div className="eyebrow">Contact</div>
        <div className="section-title" >Let&apos;s work <em>together</em></div>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Have a project in mind?</h2>
          <p>Open for AI development, web development, SaaS projects, collaborations, and consulting. Based in India — working with clients globally. Response within 24 hours.</p>
        </div>
        <div className="contact-right">
          <Link className="contact-link" href="mailto:vashishthaharsh97@gmail.com"><i className="ti ti-mail"></i> vashishthaharsh97@gmail.com </Link>
          <Link className="contact-link" href="https://linkedin.com/in/theharshvashishtha" target="_blank" rel="noopener"><i className="ti ti-brand-linkedin"></i> linkedin.com/in/theharshvashishtha </Link>
          <Link className="contact-link" href="https://github.com/Harsh-Vashishtha-G" target="_blank" rel="noopener"><i className="ti ti-brand-github"></i> github.com/Harsh-Vashishtha-G </Link>
          <Link className="contact-link" href="https://haqikos.com" target="_blank" rel="noopener"><i className="ti ti-world"></i> haqikos.com</Link>
          <Link className="contact-link" href="https://www.linkedin.com/newsletters/the-intelligent-edge-7093083002045423617/" target="_blank" rel="noopener"><i className="ti ti-news"></i> The Intelligent Edge (Newsletter)</Link>
          <Link className="contact-link" href="mailto:haqikos.ai@gmail.com"><i className="ti ti-mail"></i> haqikos.ai@gmail.com (Haqikos)</Link>
          <Link className="contact-email-btn" href="mailto:vashishthaharsh97@gmail.com">Send me a message →</Link>
        </div>
      </div>

      </>
  );
}
