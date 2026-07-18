"use client";
import Link from 'next/link';

export default function SaaSBuildingPage() {
  return (
    <div className="section" style={{ minHeight: '80vh', paddingTop: '8rem', paddingBottom: '8rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="eyebrow">Service</div>
      <h1 className="section-title">SaaS <em>Building</em></h1>
      
      <p style={{ fontSize: '1.2rem', color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '2rem' }}>
        Building a Software-as-a-Service (SaaS) product is one of the most complex endeavors in software engineering. It requires perfectly synchronizing dozens of disparate systems: user authentication, multi-tenant databases, recurring billing, webhooks, transactional emails, and core application logic. We provide comprehensive, end-to-end SaaS product development. We handle the heavy lifting of infrastructure and architecture so that you as a founder can focus entirely on your core product value, customer acquisition, and business growth.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Auth & Security</h3>
          <p style={{ color: 'var(--gray-600)' }}>Secure user authentication (OAuth, Magic Links) and row-level security policies implemented flawlessly.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Payments & Subscriptions</h3>
          <p style={{ color: 'var(--gray-600)' }}>Seamless integration with Razorpay and Stripe to handle complex, multi-tiered subscription architectures.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Admin Dashboards</h3>
          <p style={{ color: 'var(--gray-600)' }}>Custom internal tooling and data visualizations to monitor and manage your SaaS metrics in real-time.</p>
        </div>
      </div>

      <article className="article-content" style={{ marginTop: '3rem', marginBottom: '4rem' }}>
        <h2>Bulletproof Authentication & Identity</h2>
        <p>
          Security is the absolute bedrock of any SaaS product. We implement enterprise-grade authentication using providers like Supabase Auth, Clerk, or NextAuth.js. This includes seamless support for OAuth providers (Google, GitHub, Apple), highly secure passwordless magic links, and robust Multi-Factor Authentication (MFA) systems.
        </p>
        <p>
          Furthermore, we implement strict Row-Level Security (RLS) policies directly at the database level. This guarantees that even if a catastrophic vulnerability were to occur in the application layer, users can physically only access and modify their own tenant data. This zero-trust architecture ensures maximum data privacy and compliance with frameworks like GDPR and SOC2.
        </p>

        <h2>Monetization: Stripe & Razorpay Integrations</h2>
        <p>
          A SaaS product isn't a business until it can accept money. Implementing recurring billing is notoriously difficult due to complex edge cases: failed payments, prorated upgrades/downgrades, grandfathered pricing, and webhook synchronization. We possess deep expertise in integrating robust billing engines like Stripe (globally) and Razorpay (in India).
        </p>
        <p>
          We build out complete billing portals, allowing your users to seamlessly manage their subscriptions, update their credit card information, and download invoices autonomously. We meticulously handle asynchronous webhooks to ensure your database stays perfectly synchronized with the payment gateway's state of truth, guaranteeing you never grant access to a user whose payment has failed.
        </p>

        <h2>Multi-Tenant Architecture and Data Modeling</h2>
        <p>
          Designing a database for a multi-tenant SaaS requires extreme care. We architect highly scalable PostgreSQL schemas using Prisma ORM that seamlessly partition data by organization or workspace. Whether you require a pooled schema approach for maximum efficiency or siloed databases for enterprise data isolation, we design the data layer to scale effortlessly as you acquire thousands of new organizations.
        </p>
        <p>
          We also build out comprehensive role-based access control (RBAC) systems, allowing your users to invite team members, assign specific granular permissions (e.g., Admin, Editor, Viewer), and collaboratively work within their designated workspaces without friction.
        </p>

        <h2>Transactional Emails and Engagement</h2>
        <p>
          Communication is key to user retention. We integrate powerful transactional email services like Resend, Postmark, or SendGrid to ensure critical communications—such as password resets, welcome sequences, and invoice receipts—land directly in the primary inbox, bypassing spam filters. 
        </p>
        <p>
          Using React Email, we code transactional templates using standard React components and Tailwind CSS, allowing us to build beautiful, highly customized, and dynamically personalized email templates that perfectly match your brand's aesthetic and provide a premium experience at every touchpoint.
        </p>
        
        <h2>Comprehensive Admin Tooling</h2>
        <p>
          Managing a SaaS requires powerful internal tooling. We build custom, highly secure admin dashboards that allow you to monitor key performance indicators (KPIs), visualize user growth, manage support tickets, and perform CRUD operations on user data. By having a centralized command center, you can efficiently operate your SaaS business and resolve customer issues in seconds.
        </p>
      </article>

      <Link href="/contact" className="btn-dark" style={{ display: 'inline-block', marginBottom: '4rem' }}>Start a SaaS Project &rarr;</Link>
    </div>
  );
}
