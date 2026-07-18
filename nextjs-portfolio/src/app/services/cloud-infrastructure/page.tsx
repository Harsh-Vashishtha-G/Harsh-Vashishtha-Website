"use client";
import Link from 'next/link';

export default function CloudInfrastructurePage() {
  return (
    <div className="section" style={{ minHeight: '80vh', paddingTop: '8rem', paddingBottom: '8rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="eyebrow">Service</div>
      <h1 className="section-title">Cloud & <em>Infrastructure</em></h1>
      
      <p style={{ fontSize: '1.2rem', color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '2rem' }}>
        The foundation of any successful digital product lies in its underlying infrastructure. In the modern era, traditional server management is an archaic, time-consuming bottleneck. We specialize in designing and deploying highly available, globally distributed, and infinitely scalable cloud architectures. By leveraging the power of Vercel, Supabase, Upstash Redis, and serverless technologies, we build cloud-native environments that automatically scale from zero to millions of users without requiring manual intervention, allowing your engineering teams to focus purely on product innovation.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Serverless Deployments</h3>
          <p style={{ color: 'var(--gray-600)' }}>Zero-maintenance global deployments via Vercel ensuring 99.99% uptime and instant edge rendering.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Database Architecture</h3>
          <p style={{ color: 'var(--gray-600)' }}>Designing resilient PostgreSQL schemas with Prisma ORM and Supabase for real-time edge capabilities.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Edge Caching</h3>
          <p style={{ color: 'var(--gray-600)' }}>Implementing Upstash Redis for sub-millisecond data retrieval and robust API rate limiting.</p>
        </div>
      </div>

      <article className="article-content" style={{ marginTop: '3rem', marginBottom: '4rem' }}>
        <h2>The Serverless Revolution: Vercel & The Edge</h2>
        <p>
          We have completely embraced the serverless paradigm. By deploying on Vercel's global Edge Network, your application is automatically distributed across dozens of data centers worldwide. When a user in Tokyo accesses your site, they are served from a server in Tokyo, not New York. This drastically reduces network latency and ensures instantaneous load times globally.
        </p>
        <p>
          Serverless architecture also means you never have to provision, patch, or scale a virtual machine again. If your application goes viral and traffic spikes by 10,000% in a single hour, Vercel automatically spins up the necessary compute resources to handle the load seamlessly, and spins them down when traffic subsides. You only pay for exactly what you consume, making this architecture incredibly cost-efficient while providing enterprise-grade reliability and 99.99% uptime.
        </p>

        <h2>Modern Database Architecture: Supabase and PostgreSQL</h2>
        <p>
          At the core of any application is its database. We rely heavily on PostgreSQL, the world's most advanced open-source relational database, powered by Supabase. Supabase provides a massively scalable, serverless-friendly database infrastructure that pairs perfectly with modern web frameworks. 
        </p>
        <p>
          We utilize Prisma as our Object-Relational Mapper (ORM) of choice. Prisma provides unparallelled type-safety, ensuring that database schema changes are instantly propagated throughout the entire TypeScript codebase. This eliminates an entire class of runtime errors and vastly accelerates development speed. Furthermore, we leverage connection pooling via Prisma Accelerate or Supabase's native PgBouncer to prevent database connections from being exhausted during serverless cold starts.
        </p>

        <h2>Sub-Millisecond Speed: Caching with Upstash Redis</h2>
        <p>
          Database queries, even highly optimized ones, take time. To achieve true sub-millisecond response times, we implement sophisticated caching layers using Upstash Redis. Redis is an in-memory data store that acts as a lightning-fast buffer between your application and your database.
        </p>
        <p>
          We use Redis not just for caching expensive database queries and API responses, but also for session management, real-time analytics, and implementing robust API rate limiting to protect your infrastructure from DDoS attacks or malicious scraping. Because Upstash is serverless and HTTP-based, it integrates perfectly into Edge environments, allowing us to cache data globally and serve it to users in less than 5 milliseconds.
        </p>

        <h2>CI/CD and Infrastructure as Code (IaC)</h2>
        <p>
          Reliability is born from predictability. We implement rigorous Continuous Integration and Continuous Deployment (CI/CD) pipelines using GitHub Actions. Every single commit triggers a suite of automated tests, linting, and type-checks before generating a unique preview URL. This allows your team to visually QA changes in a live environment before merging to production.
        </p>
        <p>
          When you are ready to ship, merging to the main branch automatically triggers a zero-downtime production deployment. This fully automated workflow eliminates manual errors, speeds up the release cycle, and allows your engineering team to deploy to production multiple times a day with complete confidence.
        </p>
      </article>

      <Link href="/contact" className="btn-dark" style={{ display: 'inline-block', marginBottom: '4rem' }}>Start a Cloud Project &rarr;</Link>
    </div>
  );
}
