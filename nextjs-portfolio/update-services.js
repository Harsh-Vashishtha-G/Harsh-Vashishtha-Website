const fs = require('fs');
const path = require('path');

const uiuxContent = `"use client";
import Link from 'next/link';

export default function UIUXDesignPage() {
  return (
    <div className="section" style={{ minHeight: '80vh', paddingTop: '8rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="eyebrow">Service</div>
      <h1 className="section-title">UI/UX <em>Design</em></h1>
      
      <p style={{ fontSize: '1.2rem', color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '2rem' }}>
        In today’s hyper-competitive digital landscape, aesthetics alone are no longer sufficient to capture and retain user attention. True design excellence lies at the intersection of stunning visual appeal and flawless functionality. At Haqikos, we specialize in User Interface (UI) and User Experience (UX) design that transcends superficial beauty. We engineer digital experiences that are deeply empathetic to the user's needs, minimizing cognitive load while maximizing engagement, retention, and conversion rates. Our design philosophy is rooted in psychology, data, and an unwavering commitment to craftsmanship.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>User Research</h3>
          <p style={{ color: 'var(--gray-600)' }}>Deep diving into user personas, behavior analytics, and usability testing to inform every design decision.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Wireframing & Prototyping</h3>
          <p style={{ color: 'var(--gray-600)' }}>Rapid iteration of user flows using low-fidelity and high-fidelity interactive Figma prototypes.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Design Systems</h3>
          <p style={{ color: 'var(--gray-600)' }}>Building scalable, token-based design systems to ensure UI consistency across massive applications.</p>
        </div>
      </div>

      <article className="article-content" style={{ marginTop: '3rem', marginBottom: '4rem' }}>
        <h2>The Psychology of User Experience</h2>
        <p>
          Every interaction a user has with your software triggers a subconscious reaction. Frustration caused by confusing navigation or delight sparked by a seamless micro-interaction can ultimately dictate whether that user becomes a lifelong customer or abandons your platform entirely. We approach UX design as applied psychology. By understanding Hick’s Law (decision fatigue), Fitts’s Law (target acquisition), and the Gestalt principles of visual perception, we architect user flows that feel inherently intuitive.
        </p>
        <p>
          Before a single pixel is pushed on a canvas, we invest heavily in user research. We conduct competitive analysis, define user personas, and map out extensive user journeys. This ensures that the architecture of the application aligns perfectly with the user's mental model, creating a frictionless path to value.
        </p>

        <h2>Visual Hierarchy and Interface Design</h2>
        <p>
          Once the UX foundation is solidified, we transition into high-fidelity UI design. A great User Interface guides the user’s eye effortlessly across the screen. We establish a clear visual hierarchy using precise typography, intentional negative space, and strategic color theory. We do not use color simply to make things look "pretty"—we use it to communicate state, priority, and emotion.
        </p>
        <p>
          Our team is highly proficient in modern design trends, from sleek glassmorphism and neubrutalism to ultra-minimalist Swiss design. We tailor the aesthetic specifically to your brand identity, ensuring that your digital product looks premium, trustworthy, and distinctly recognizable in a crowded market.
        </p>

        <h2>Interactive Prototyping in Figma</h2>
        <p>
          Static designs often fail to communicate the true "feel" of a digital product. To bridge this gap, we build comprehensive, highly interactive prototypes in Figma. These prototypes simulate complex states, page transitions, hover effects, and modal interactions, allowing you and your stakeholders to physically interact with the product long before a single line of code is written. 
        </p>
        <p>
          This approach not only provides clarity and aligns expectations but drastically reduces engineering overhead. Developers receive a living document that explicitly demonstrates exactly how every component should behave, eliminating guesswork and accelerating the development lifecycle.
        </p>

        <h2>Scalable Design Systems</h2>
        <p>
          For enterprise applications and rapidly growing startups, consistency is a massive challenge. When multiple developers are building different features, the UI can quickly degrade into a fragmented mess. We solve this by engineering robust Design Systems. We define a singular source of truth for design tokens—colors, typography scales, spacing units, and border radii—and meticulously construct a library of reusable UI components.
        </p>
        <p>
          This atomic design approach ensures that a button looks and behaves exactly the same on the dashboard as it does on the settings page. When your brand evolves, updating a single design token propagates the change instantly across the entire application, making your product infinitely scalable and immensely maintainable.
        </p>
      </article>

      <Link href="/contact" className="btn-dark" style={{ display: 'inline-block', marginBottom: '4rem' }}>Start a Design Project &rarr;</Link>
    </div>
  );
}
`;

const maintenanceContent = `"use client";
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
`;

const apiContent = `"use client";
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
          We build predominantly with TypeScript, utilizing tools like tRPC or strict OpenAPI (Swagger) specifications to guarantee end-to-end type safety. This ensures that any changes to the backend data models are immediately flagged as errors on the frontend during compilation, eliminating an entire class of runtime bugs and vastly improving developer velocity.
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
`;

const securityContent = `"use client";
import Link from 'next/link';

export default function CyberSecurityPage() {
  return (
    <div className="section" style={{ minHeight: '80vh', paddingTop: '8rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="eyebrow">Service</div>
      <h1 className="section-title">Cyber<em>Security</em></h1>
      
      <p style={{ fontSize: '1.2rem', color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '2rem' }}>
        In an increasingly interconnected digital world, security cannot be an afterthought—it must be fundamentally woven into the fabric of your software architecture. A single data breach can devastate a company's reputation, incur massive legal liabilities, and destroy customer trust overnight. At Haqikos, we treat cybersecurity with uncompromising rigor. We employ "Shift Left" security methodologies, implementing comprehensive defensive protocols, continuous vulnerability scanning, and robust cryptographic architectures to safeguard your digital presence, your infrastructure, and your users' privacy against rapidly evolving cyber threats.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Application Security</h3>
          <p style={{ color: 'var(--gray-600)' }}>Rigorous defense against OWASP Top 10 vulnerabilities, including SQLi, XSS, and CSRF attacks.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Identity & Access</h3>
          <p style={{ color: 'var(--gray-600)' }}>Implementing Zero-Trust architectures, Multi-Factor Authentication (MFA), and strict Row-Level Security.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Data Encryption</h3>
          <p style={{ color: 'var(--gray-600)' }}>Military-grade AES-256 encryption for data at rest, and TLS 1.3 for all data in transit.</p>
        </div>
      </div>

      <article className="article-content" style={{ marginTop: '3rem', marginBottom: '4rem' }}>
        <h2>Defeating the OWASP Top 10</h2>
        <p>
          The vast majority of data breaches occur due to well-known, entirely preventable vulnerabilities. We meticulously engineer our web applications to be impervious to the OWASP Top 10 security risks. We utilize modern ORMs (like Prisma) to inherently immunize the database against SQL Injection attacks. We leverage React's built-in escaping mechanisms to neutralize Cross-Site Scripting (XSS), and we implement strict SameSite cookie attributes and synchronizer token patterns to definitively block Cross-Site Request Forgery (CSRF).
        </p>
        <p>
          Security is validated at every boundary. We implement rigorous server-side payload validation using schemas like Zod, ensuring that malicious or malformed data is rejected before it ever reaches your core business logic or database infrastructure.
        </p>

        <h2>Zero-Trust Architecture and Authentication</h2>
        <p>
          We operate on a strict "Zero Trust" model: assume the network is already compromised, and verify every single request. We implement robust, enterprise-grade authentication systems supporting OAuth 2.0, OpenID Connect (OIDC), and SAML for Single Sign-On (SSO). We heavily encourage and implement Multi-Factor Authentication (MFA) utilizing TOTP authenticator apps or hardware security keys (WebAuthn/FIDO2).
        </p>
        <p>
          Authorization is just as critical. We engineer sophisticated Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC) systems. Furthermore, we push security directly down to the database layer by enforcing Row-Level Security (RLS) in PostgreSQL, physically guaranteeing that an authenticated user can only query or modify rows that belong to their specific tenant ID.
        </p>

        <h2>Cryptographic Standards and Data Privacy</h2>
        <p>
          Protecting sensitive user data is paramount. We ensure that all data in transit is secured using modern Transport Layer Security (TLS 1.3) protocols, enforcing strict HTTP Strict Transport Security (HSTS) policies to prevent downgrade attacks. 
        </p>
        <p>
          For data at rest, we utilize industry-standard AES-256 encryption algorithms. Sensitive credentials and secrets are never hardcoded; they are managed dynamically through highly secure vaults like AWS Secrets Manager, HashiCorp Vault, or Vercel Environment Variables. We also implement irreversible, salt-hashed algorithms (like bcrypt or Argon2) for password storage, ensuring that even in the worst-case scenario of a database leak, user passwords remain computationally impossible to crack.
        </p>

        <h2>Continuous Auditing and Compliance</h2>
        <p>
          Security is not a static state; it is a continuous process. We integrate automated security scanning (SAST and DAST) directly into your CI/CD pipelines. Every pull request is automatically analyzed for vulnerable NPM dependencies, exposed API keys, and insecure coding patterns using tools like Snyk and GitHub Advanced Security.
        </p>
        <p>
          By establishing these rigorous, automated defensive postures, we not only protect your application from malicious actors but also ensure that your software architecture strictly adheres to regulatory compliance frameworks such as GDPR, HIPAA, and SOC2, giving your enterprise clients absolute peace of mind.
        </p>
      </article>

      <Link href="/contact" className="btn-dark" style={{ display: 'inline-block', marginBottom: '4rem' }}>Secure Your Infrastructure &rarr;</Link>
    </div>
  );
}
`;

fs.mkdirSync(path.join(__dirname, 'src/app/services/ui-ux-design'), { recursive: true });
fs.mkdirSync(path.join(__dirname, 'src/app/services/maintenance-support'), { recursive: true });
fs.mkdirSync(path.join(__dirname, 'src/app/services/api-integration'), { recursive: true });
fs.mkdirSync(path.join(__dirname, 'src/app/services/cybersecurity'), { recursive: true });

fs.writeFileSync(path.join(__dirname, 'src/app/services/ui-ux-design/page.tsx'), uiuxContent);
fs.writeFileSync(path.join(__dirname, 'src/app/services/maintenance-support/page.tsx'), maintenanceContent);
fs.writeFileSync(path.join(__dirname, 'src/app/services/api-integration/page.tsx'), apiContent);
fs.writeFileSync(path.join(__dirname, 'src/app/services/cybersecurity/page.tsx'), securityContent);

console.log("Successfully created 4 new service pages!");
