"use client";
import Link from 'next/link';

export default function MaintenanceSupportPage() {
  return (
    <div className="section" style={{ minHeight: '80vh', paddingTop: '8rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="eyebrow">Service</div>
      <h1 className="section-title">Website Maintenance & <em>Support</em></h1>
      
      <p style={{ fontSize: '1.2rem', color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '2rem' }}>
        Launching a digital product is not the finish line; it is merely the starting line. In an ecosystem where web browsers constantly update, dependencies become deprecated, and security vulnerabilities emerge daily, a "set it and forget it" mentality is a recipe for catastrophic failure. At Haqikos, we provide comprehensive, enterprise-grade website maintenance and support. We handle the intense technical heavy lifting, ensuring your digital assets remain secure, lightning-fast, and fully operational, allowing you to focus entirely on scaling your core business.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Proactive Monitoring</h3>
          <p style={{ color: 'var(--gray-600)' }}>24/7 uptime monitoring and synthetic testing to instantly detect and resolve anomalies before users notice.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Security Patching</h3>
          <p style={{ color: 'var(--gray-600)' }}>Continuous dependency updates and vulnerability scanning to protect against the latest cyber threats.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Performance Audits</h3>
          <p style={{ color: 'var(--gray-600)' }}>Routine Core Web Vitals optimization to ensure your application remains blazing fast as it scales.</p>
        </div>
      </div>

      <article className="article-content" style={{ marginTop: '3rem', marginBottom: '4rem' }}>
        <h2>The Hidden Cost of Technical Debt</h2>
        <p>
          Software entropy is a reality. As an application ages, frameworks release major breaking changes, NPM packages introduce vulnerabilities, and database indexes become inefficient. Ignoring these issues leads to mounting technical debt. Eventually, the application becomes so fragile that deploying a simple feature takes weeks instead of days, and random bugs plague the user experience.
        </p>
        <p>
          Our maintenance services are designed to proactively combat technical debt. We establish strict continuous integration pipelines (CI/CD) to safely automate dependency upgrades. By utilizing tools like Dependabot and Snyk, we routinely audit your node_modules, ensuring your stack runs on the latest, most stable, and most secure versions of its underlying technologies.
        </p>

        <h2>24/7 Reliability and Incident Response</h2>
        <p>
          Downtime is incredibly expensive. Every minute your application is offline translates directly to lost revenue and damaged brand reputation. We implement rigorous 24/7 observability and alerting systems using Datadog, Sentry, or Vercel Analytics. We don't just track if the server is "up"—we monitor latency spikes, API error rates, and crucial user flows (like the checkout process).
        </p>
        <p>
          If an anomaly is detected, our automated alerting infrastructure instantly pages our engineering team. We employ rapid incident response protocols to isolate the issue, implement a hotfix, and restore service, followed by a comprehensive blameless post-mortem to ensure the root cause is permanently eradicated.
        </p>

        <h2>Continuous Performance Optimization</h2>
        <p>
          A fast website on launch day can slowly degrade over time as marketing teams add heavy tracking scripts, editors upload unoptimized images, and databases fill up. We conduct routine performance audits against Google's Core Web Vitals (LCP, FID, CLS).
        </p>
        <p>
          Our optimization process involves aggressive asset minification, implementing Next.js Image Optimization, leveraging Edge caching networks (CDNs), and fine-tuning database queries. We ensure that your application consistently scores in the 90th percentile for performance, directly boosting your organic SEO rankings and user conversion rates.
        </p>

        <h2>Dedicated Support and Iterative Enhancements</h2>
        <p>
          Maintenance is not just about keeping the lights on; it's about continuous improvement. We act as an extension of your team, providing a dedicated Slack channel and a streamlined ticketing system for ongoing support. Whether you need a minor UI tweak, a new landing page integrated, or a third-party API updated, our engineering team is on standby to execute these iterative enhancements swiftly and safely.
        </p>
      </article>

      <Link href="/contact" className="btn-dark" style={{ display: 'inline-block', marginBottom: '4rem' }}>Request Support Services &rarr;</Link>
    </div>
  );
}
