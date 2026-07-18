import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Now | Harsh Vashishtha',
  description: 'What I am currently focused on, building, and learning right now.',
};

// Next.js fetch with revalidation
async function getGitHubEvents() {
  try {
    // We fetch public events for the GitHub user
    const res = await fetch('https://api.github.com/users/Harsh-Vashishtha-G/events/public', {
      next: { revalidate: 3600 }, // revalidate every hour
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    });
    
    if (!res.ok) return [];
    
    const events = await res.json();
    return events.slice(0, 5); // Return top 5 events
  } catch (error) {
    console.error("Failed to fetch GitHub events:", error);
    return [];
  }
}

export default async function NowPage() {
  const events = await getGitHubEvents();

  return (
    <>
      <section className="section" style={{ paddingTop: '8rem', minHeight: '100vh', backgroundColor: 'var(--gray-900)' }}>
        <div className="section-header">
          <h1 className="section-title" style={{ color: 'white' }}>What I'm doing <em style={{ color: 'var(--green)' }}>Now</em></h1>
          <p className="section-subtitle" style={{ color: 'var(--gray-400)' }}>
            A live feed of my current projects, public GitHub activity, and what I'm actively learning.
          </p>
        </div>
        
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--gray-300)' }}>
          
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem', borderBottom: '1px solid var(--gray-800)', paddingBottom: '0.5rem' }}>🎯 Current Focus</h2>
            <div style={{ padding: '1.5rem', backgroundColor: 'var(--gray-800)', borderRadius: '12px', border: '1px solid var(--gray-700)', lineHeight: '1.8' }}>
              <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><strong>Cloud Infrastructure:</strong> Actively seeking full-time Cloud Computing roles and building out AWS/Vercel architectures.</li>
                <li><strong>AI Agent Frameworks:</strong> Expanding QIA's orchestration capabilities and fine-tuning reasoning models.</li>
                <li><strong>Content Creation:</strong> Growing "The Intelligent Edge" newsletter and my YouTube channel.</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem', borderBottom: '1px solid var(--gray-800)', paddingBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <i className="ti ti-brand-github" style={{ fontSize: '2rem' }}></i> Latest GitHub Activity
            </h2>
            
            {events.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--gray-800)', borderRadius: '12px', border: '1px dashed var(--gray-700)' }}>
                Unable to load recent GitHub activity right now.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {events.map((event: any) => {
                  let actionText = '';
                  if (event.type === 'PushEvent') {
                    actionText = `Pushed to ${event.payload.ref?.replace('refs/heads/', '')} in`;
                  } else if (event.type === 'CreateEvent') {
                    actionText = `Created ${event.payload.ref_type} in`;
                  } else if (event.type === 'WatchEvent') {
                    actionText = 'Starred';
                  } else if (event.type === 'ForkEvent') {
                    actionText = 'Forked';
                  } else {
                    actionText = 'Interacted with';
                  }

                  return (
                    <div key={event.id} style={{ padding: '1.5rem', backgroundColor: 'var(--gray-800)', borderRadius: '12px', border: '1px solid var(--gray-700)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                        <div style={{ fontWeight: '500', color: 'white' }}>
                          <span style={{ color: 'var(--green)' }}>{actionText}</span>{' '}
                          <Link href={`https://github.com/${event.repo.name}`} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>
                            {event.repo.name}
                          </Link>
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>
                          {new Date(event.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                        </div>
                      </div>
                      
                      {event.type === 'PushEvent' && event.payload.commits?.length > 0 && (
                        <div style={{ fontSize: '0.9rem', color: 'var(--gray-400)', marginTop: '0.8rem', paddingLeft: '1rem', borderLeft: '2px solid var(--gray-700)' }}>
                          {event.payload.commits.slice(0, 2).map((commit: any) => (
                            <div key={commit.sha} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              <span style={{ fontFamily: 'monospace', color: '#888' }}>{commit.sha.substring(0, 7)}</span> {commit.message.split('\n')[0]}
                            </div>
                          ))}
                          {event.payload.commits.length > 2 && (
                            <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.2rem' }}>
                              + {event.payload.commits.length - 2} more commit(s)
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
            
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="https://github.com/Harsh-Vashishtha-G" target="_blank" rel="noopener noreferrer" className="btn-outline">
                View all on GitHub &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
