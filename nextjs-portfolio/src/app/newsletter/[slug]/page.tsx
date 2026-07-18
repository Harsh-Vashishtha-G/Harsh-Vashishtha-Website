import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

import { Metadata } from 'next';
import { cache } from 'react';

export const dynamic = 'force-dynamic';

const getArticle = cache(async (slug: string) => {
  return await prisma.article.findUnique({
    where: { slug },
  });
});

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.slug);

  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} — The Intelligent Edge`,
    description: article.excerpt ?? undefined,
    openGraph: {
      title: article.title,
      description: article.excerpt ?? undefined,
      type: 'article',
      publishedTime: new Date(article.publishedAt).toISOString(),
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt ?? undefined,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100 selection:text-blue-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            image: [article.thumbnail || 'https://images.unsplash.com/photo-1677442136019-21780ecad995'],
            datePublished: new Date(article.publishedAt).toISOString(),
            author: [{
              '@type': 'Person',
              name: article.author,
              url: 'https://harshvashishtha.space'
            }],
            publisher: {
              '@type': 'Organization',
              name: 'Haqikos',
              logo: {
                '@type': 'ImageObject',
                url: 'https://harshvashishtha.space/icon.png'
              }
            }
          })
        }}
      />
      {/* Navigation */}
      {/* Article Hero */}
      <section className="section" style={{ paddingTop: "6rem", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          
          <Link href="/newsletter" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--gray-500)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>
            ← Back to Newsletter
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--gray-500)", marginTop: "1rem" }}>
            <span style={{ fontWeight: 600, color: "#2563eb" }}>{article.category}</span>
            <span>•</span>
            <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>{article.readingTime} min read</span>
          </div>
          
          <h1 className="headline" style={{ marginBottom: "1rem", fontSize: "3rem", lineHeight: 1.1, textAlign: "left" }}>
            {article.title}
          </h1>
          
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", borderTop: "1px solid var(--gray-200)", borderBottom: "1px solid var(--gray-200)", padding: "1.5rem 0", marginTop: "1rem" }}>
             <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--gray-200)", overflow: "hidden", position: "relative" }}>
               {/* Simplified placeholder avatar since we don't have one in schema */}
               <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#000", color: "#fff", fontWeight: "bold" }}>HV</div>
             </div>
             <div>
                <p style={{ fontWeight: 600, margin: 0, fontSize: "0.95rem" }}>{article.author}</p>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--gray-500)" }}>Author at The Intelligent Edge</p>
             </div>
          </div>

          <div style={{ width: "100%", aspectRatio: "16/9", position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", marginTop: "1rem" }}>
             <Image src={article.thumbnail || "https://images.unsplash.com/photo-1677442136019-21780ecad995"} alt={article.title} fill style={{ objectFit: 'cover' }} priority />
          </div>

          <div 
            className="article-content"
            style={{ marginTop: "2rem", fontSize: "1.1rem", lineHeight: 1.8, color: "var(--gray-800)" }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--gray-50)", marginTop: "5rem", padding: "5rem 2.5rem", textAlign: "center" }}>
        <h2 className="section-title">Enjoyed this <em>article?</em></h2>
        <p style={{ maxWidth: "500px", margin: "1rem auto 2rem", color: "var(--gray-600)" }}>Subscribe to my LinkedIn Newsletter to get these directly in your inbox.</p>
        <Link href="https://www.linkedin.com/newsletters/the-intelligent-edge-7093083002045423617/" target="_blank" rel="noopener noreferrer" className="btn-dark">
          Subscribe on LinkedIn
        </Link>
      </section>
    </div>
  );
}
