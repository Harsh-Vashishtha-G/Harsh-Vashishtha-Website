import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Intelligent Edge Newsletter by Harsh Vashishtha — AI Insights",
  description: "Insights on Artificial Intelligence, Technology & Innovation. Join over 2,500 readers discovering the cutting edge of AI.",
};

import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function NewsletterHub({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams?.category;

  const articles = await prisma.article.findMany({
    where: category && category !== 'All' ? { category: category } : undefined,
    orderBy: { publishedAt: 'desc' },
    take: 12 // increasing to 12 just in case they add more
  });

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      {/* Hero Section */}
      <section className="section" style={{ textAlign: "center", paddingTop: "6rem", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1rem", borderRadius: "50px", backgroundColor: "#eff6ff", color: "#2563eb", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#2563eb", animation: "pulse 2s infinite" }}></span>
            The Intelligent Edge
          </div>
          
          <h1 className="headline" style={{ marginBottom: "1rem" }}>
            Insights on Artificial Intelligence, <br />
            <em>Technology & Innovation.</em>
          </h1>
          
          <p className="hero-desc" style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
            Exploring the future of work, startups, and automation. Join readers discovering the cutting edge of AI.
          </p>
          
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1rem" }}>
            <Link href="https://www.linkedin.com/newsletters/the-intelligent-edge-7093083002045423617/" target="_blank" rel="noopener noreferrer" className="btn-dark">
              Subscribe on LinkedIn
            </Link>
            <Link href="#latest" className="btn-outline">
              Read Latest Edition
            </Link>
            <Link href="/tools" className="btn-outline" style={{ borderStyle: 'dashed', color: '#2563eb', borderColor: '#93c5fd' }}>
              <i className="ti ti-speakerphone"></i> Sponsor Newsletter
            </Link>
          </div>
          
          <div style={{ display: "flex", gap: "3rem", justifyContent: "center", marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid var(--gray-200)", width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "2.5rem", color: "var(--black)", lineHeight: 1 }}>2,500+</span>
              <span style={{ fontSize: "0.85rem", color: "var(--gray-500)", marginTop: "0.5rem" }}>Subscribers</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "2.5rem", color: "var(--black)", lineHeight: 1 }}>14</span>
              <span style={{ fontSize: "0.85rem", color: "var(--gray-500)", marginTop: "0.5rem" }}>Articles</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "2.5rem", color: "var(--black)", lineHeight: 1 }}>~5 min</span>
              <span style={{ fontSize: "0.85rem", color: "var(--gray-500)", marginTop: "0.5rem" }}>Avg. Read Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured & Grid Section */}
      <section id="latest" className="section" style={{ backgroundColor: "var(--gray-50)", maxWidth: "100%", padding: "5rem 2.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div className="eyebrow">Archive</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Latest <em>Editions</em></h2>
            </div>
            
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <Link href="/newsletter" className={!category || category === 'All' ? "btn-dark" : "btn-outline"} style={{ borderRadius: "50px", backgroundColor: !category || category === 'All' ? undefined : "white", textDecoration: "none" }}>All</Link>
              <Link href="/newsletter?category=AI" className={category === 'AI' ? "btn-dark" : "btn-outline"} style={{ borderRadius: "50px", backgroundColor: category === 'AI' ? undefined : "white", textDecoration: "none" }}>AI</Link>
              <Link href="/newsletter?category=Startups" className={category === 'Startups' ? "btn-dark" : "btn-outline"} style={{ borderRadius: "50px", backgroundColor: category === 'Startups' ? undefined : "white", textDecoration: "none" }}>Startups</Link>
              <Link href="/newsletter?category=Engineering" className={category === 'Engineering' ? "btn-dark" : "btn-outline"} style={{ borderRadius: "50px", backgroundColor: category === 'Engineering' ? undefined : "white", textDecoration: "none" }}>Engineering</Link>
            </div>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
            {articles.map((article) => (
              <Link href={`/newsletter/${article.slug}`} key={article.id} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <div style={{ width: "100%", aspectRatio: "16/9", backgroundColor: "var(--gray-200)", borderRadius: "var(--radius-lg)", overflow: "hidden", position: "relative" }}>
                  <Image src={article.thumbnail || "https://images.unsplash.com/photo-1677442136019-21780ecad995"} alt={article.title} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top right, transparent, rgba(0,0,0,0.1))" }}></div>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", color: "var(--gray-500)" }}>
                    <span style={{ fontWeight: 600, color: "#2563eb" }}>{article.category}</span>
                    <span>•</span>
                    <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{article.readingTime} min read</span>
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 600, lineHeight: 1.4, color: "var(--black)" }}>{article.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--gray-600)", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          
        </div>
      </section>
      
      {/* Footer */}
      </div>
  );
}
