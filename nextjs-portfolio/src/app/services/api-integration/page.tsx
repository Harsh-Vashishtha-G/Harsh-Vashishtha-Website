"use client";
import Link from 'next/link';

export default function APIIntegrationPage() {
  return (
    <div className="section" style={{ minHeight: '80vh', paddingTop: '8rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="eyebrow">Service</div>
      <h1 className="section-title">API & System <em>Integration</em></h1>
      
      <p style={{ fontSize: '1.2rem', color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '2rem' }}>
        Modern businesses rely on a complex ecosystem of specialized software—from CRM platforms like Salesforce and marketing automation tools like HubSpot, to payment gateways like Stripe and ERP systems like SAP. The sheer power of these tools is unlocked entirely when they communicate flawlessly with one another. We specialize in designing robust, highly scalable APIs and engineering complex system integrations that break down data silos, automate arduous workflows, and create a unified, deeply connected technological infrastructure.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Custom API Development</h3>
          <p style={{ color: 'var(--gray-600)' }}>Building secure, high-performance RESTful and GraphQL APIs using Node.js, Express, and tRPC.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Third-Party Integrations</h3>
          <p style={{ color: 'var(--gray-600)' }}>Seamlessly connecting your platform to Stripe, Twilio, Salesforce, AWS, and thousands of other services.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Webhook Architecture</h3>
          <p style={{ color: 'var(--gray-600)' }}>Designing resilient, event-driven webhook listeners to process real-time asynchronous data streams safely.</p>
        </div>
      </div>

      <article className="article-content" style={{ marginTop: '3rem', marginBottom: '4rem' }}>
        <h2>Architecting Modern APIs</h2>
        <p>
          Whether you need a dedicated backend to power your mobile application or a public-facing API to allow partners to integrate with your platform, we engineer APIs that are fast, secure, and incredibly well-documented. We utilize modern architectural patterns, choosing between RESTful principles for standard resource-based routing, or GraphQL for highly complex applications where the client needs precise control over the data payload.
        </p>
        <p>
          We build predominantly with TypeScript, utilizing tools like tRPC or strict OpenAPI (Swagger) specifications to guarantee end-to-end type safety. This ensures that any changes to the backend data models are immediately flagged as errors on the frontend during compilation, eliminating an entire class of runtime bugs and vastly improving engineer velocity.
        </p>

        <h2>Mastering the Third-Party Ecosystem</h2>
        <p>
          Reinventing the wheel is a waste of capital. Why build a proprietary email server when SendGrid exists? Why build a custom billing engine when Stripe is available? Our expertise lies in seamlessly stitching these powerful third-party services directly into your core product. 
        </p>
        <p>
          We have extensive experience integrating with massive, complex APIs. We handle the intricacies of OAuth 2.0 flows, secure token refresh lifecycles, and cryptographic signature verification. Whether it's synchronizing user data with Salesforce, triggering SMS notifications via Twilio, or processing complex B2B payments through Razorpay, we ensure the integration is flawless and invisible to the end-user.
        </p>

        <h2>Resilient Event-Driven Architecture</h2>
        <p>
          System integration is rarely synchronous. When a user pays an invoice on Stripe, Stripe sends a webhook to your server moments later. If your server happens to be restarting at that exact millisecond, you lose the event, and the user's account is never upgraded. This is unacceptable in production environments.
        </p>
        <p>
          We engineer highly resilient, asynchronous, event-driven architectures to handle webhooks and background jobs. By utilizing robust message queues like Redis BullMQ, Apache Kafka, or AWS SQS, we guarantee that every single event is successfully captured, queued, and processed. If a third-party API is temporarily down, our system automatically implements exponential backoff and retry logic, ensuring zero data loss and absolute system integrity.
        </p>

        <h2>Security, Rate Limiting, and Analytics</h2>
        <p>
          An exposed API is a prime target for malicious actors. We implement fortress-level security protocols on all API endpoints. This includes robust CORS configurations, strict JWT-based authentication, and deep payload validation using libraries like Zod to prevent SQL injection and cross-site scripting (XSS).
        </p>
        <p>
          Furthermore, to protect your infrastructure from DDoS attacks or abusive scraping, we implement sophisticated, Redis-backed rate limiting algorithms (like Token Bucket or Leaky Bucket). We also integrate comprehensive API analytics, giving you complete visibility into endpoint latency, usage spikes, and error rates in real-time.
        </p>
      </article>

      <Link href="/contact" className="btn-dark" style={{ display: 'inline-block', marginBottom: '4rem' }}>Discuss an Integration &rarr;</Link>
    </div>
  );
}
