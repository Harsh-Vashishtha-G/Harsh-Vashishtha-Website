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
          <div className="avail-badge"><div className="green-dot"></div> Available for freelance work</div>
          <h1 className="headline">AI Engineer.<br /><em>Builder.</em><br />Founder.</h1>
          <p className="hero-desc">I build intelligent AI products, autonomous agents, and modern web experiences. Founder of Haqikos — An emerging AI technology company based in India.</p>
          <div className="hero-actions">
            <Link className="btn-dark" href="/assets/resume/Harsh%20Vashishtha%20-%20Resume.pdf" target="_blank" rel="noopener" download="Harsh_Vashishtha_Resume.pdf"><i className="ti ti-download"></i> Resume</Link>
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
            <Link href="https://haqikos.com" target="_blank" rel="noopener noreferrer" className="stat-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div className="stat-num">1</div>
              <div className="stat-label">Company Founded</div>
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

      {/* FEATURED PROJECTS */}
      <div className="section" id="projects">
        <div className="eyebrow">Selected Work</div>
        <div className="section-title">Featured <em>Projects</em></div>
        
        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {/* Project 1 */}
          <Link href="https://haqikos.com" target="_blank" rel="noopener noreferrer" className="bento-card" style={{ textDecoration: 'none', background: 'var(--gray-50)' }}>
            <div className="bento-icon"><i className="ti ti-brand-openai"></i></div>
            <div style={{ marginTop: '1rem' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Haqikos</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>An AI technology startup building autonomous agents, specialized LLM tools, and advanced software infrastructure for the Indian market.</p>
              <span className="btn-outline" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>Visit Haqikos &rarr;</span>
            </div>
          </Link>
          
          {/* Project 2 */}
          <Link href="https://payqia.com" target="_blank" rel="noopener noreferrer" className="bento-card dark" style={{ textDecoration: 'none' }}>
            <div className="bento-icon"><i className="ti ti-credit-card"></i></div>
            <div style={{ marginTop: '1rem' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#fff' }}>PayQIA</h3>
              <p style={{ color: '#aaa', marginBottom: '1.5rem' }}>A next-generation financial technology platform integrating deep AI capabilities with seamless payment infrastructure.</p>
              <span className="btn-outline" style={{ borderColor: '#333', color: '#fff', fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>View Platform &rarr;</span>
            </div>
          </Link>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Link href="/projects" className="btn-outline">View all projects &rarr;</Link>
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
