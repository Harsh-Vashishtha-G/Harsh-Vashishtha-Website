import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Garden | Harsh Vashishtha',
  description: 'A collection of my raw notes, technical snippets, and ongoing learnings.',
};

// Mock data for now
const notes = [
  {
    slug: 'transitioning-to-cloud',
    title: 'Transitioning from AI to Cloud Engineering',
    date: '2026-07-10',
    tags: ['cloud', 'aws', 'career'],
  },
  {
    slug: 'qia-orchestration-patterns',
    title: 'LLM Orchestration Patterns in QIA',
    date: '2026-06-25',
    tags: ['ai', 'agents', 'architecture'],
  },
  {
    slug: 'nextjs-app-router-caching',
    title: 'Understanding Next.js App Router Caching',
    date: '2026-05-12',
    tags: ['nextjs', 'react', 'performance'],
  }
];

export default function GardenPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '8rem', minHeight: '100vh', backgroundColor: 'var(--gray-900)' }}>
        <div className="section-header">
          <h1 className="section-title" style={{ color: 'white' }}>Digital <em style={{ color: 'var(--green)' }}>Garden</em></h1>
          <p className="section-subtitle" style={{ color: 'var(--gray-400)' }}>
            Welcome to my digital garden. This is a collection of my raw, unpolished notes, code snippets, and thoughts.
          </p>
        </div>
        
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--gray-300)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            {notes.map((note) => (
              <Link href={`/garden/${note.slug}`} key={note.slug} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '1.5rem', backgroundColor: 'var(--gray-800)', borderRadius: '12px', border: '1px solid var(--gray-700)', transition: 'border-color 0.2s ease', cursor: 'pointer' }}>
                  <h2 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '0.5rem' }}>{note.title}</h2>
                  <div style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '1rem' }}>
                    {new Date(note.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {note.tags.map(tag => (
                      <span key={tag} style={{ padding: '0.2rem 0.6rem', backgroundColor: 'rgba(39, 201, 63, 0.1)', color: 'var(--green)', borderRadius: '4px', fontSize: '0.8rem' }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
