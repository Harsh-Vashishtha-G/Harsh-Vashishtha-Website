import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Development & Web Dev Services by Harsh Vashishtha — Hire Me",
  description: "Explore our premium digital services including Web Development, UI/UX Design, Cloud Infrastructure, and Custom AI Solutions.",
};

export default function Page() {
  return (
    <>
      <main>
  <div className="section" id="services">
    <div className="eyebrow">WHAT WE DO</div>
    <div className="section-title">Our <em>Services</em></div>
    
    <div className="services-list">
      {/* 1 */}
      <div className="service-row">
        <div className="service-visual"><i className="ti ti-layout"></i></div>
        <div className="service-content-block">
          <div className="service-subtitle">BUILDING DIGITAL EXPERIENCES</div>
          <h2 className="service-title">Website Design & <br/><em>Development</em></h2>
          <p className="service-desc-large" style={{ marginBottom: '0.8rem' }}>Your website is your digital storefront. We build fast, secure, and beautifully designed web experiences optimized for both users and conversions.</p>
          <p className="service-desc-detail" style={{ fontSize: '0.9rem', color: 'var(--gray-600)', marginBottom: '1.2rem', lineHeight: '1.6' }}>
            <strong>What's Included:</strong> Custom full-stack development using Next.js and React, responsive layouts, SEO setup, and Supabase integration.<br />
            <strong>Turnaround Time:</strong> 2 to 6 weeks depending on complexity.<br />
            <strong>Perfect For:</strong> Startups, growing businesses, and personal brands seeking a high-performance web presence.
          </p>
          <Link className="btn-dark" href="/services/web-development">Explore Web Development &rarr;</Link>
        </div>
      </div>

      {/* 2 */}
      <div className="service-row reverse">
        <div className="service-visual"><i className="ti ti-palette"></i></div>
        <div className="service-content-block">
          <div className="service-subtitle">INTUITIVE INTERFACES</div>
          <h2 className="service-title">UI/UX <br/><em>Design</em></h2>
          <p className="service-desc-large" style={{ marginBottom: '0.8rem' }}>Crafting user-centric designs that are not only visually stunning but also highly functional. We ensure every interaction feels natural, seamless, and engaging.</p>
          <p className="service-desc-detail" style={{ fontSize: '0.9rem', color: 'var(--gray-600)', marginBottom: '1.2rem', lineHeight: '1.6' }}>
            <strong>What's Included:</strong> Wireframing, prototyping in Figma, comprehensive design systems, user journey mapping, and developer handoff.<br />
            <strong>Turnaround Time:</strong> 1 to 3 weeks for complete UI/UX overhauls.<br />
            <strong>Perfect For:</strong> SaaS companies and mobile app developers needing intuitive, premium, and accessible interfaces.
          </p>
          <Link className="btn-dark" href="/services/ui-ux-design">Explore UI/UX Design &rarr;</Link>
        </div>
      </div>

      {/* 3 */}
      <div className="service-row">
        <div className="service-visual"><i className="ti ti-tool"></i></div>
        <div className="service-content-block">
          <div className="service-subtitle">KEEPING YOU ONLINE</div>
          <h2 className="service-title">Website Maintenance & <br/><em>Support</em></h2>
          <p className="service-desc-large" style={{ marginBottom: '0.8rem' }}>Focus on your business while we handle the technical heavy lifting. We ensure your digital assets are always updated, secure, and running at peak performance.</p>
          <p className="service-desc-detail" style={{ fontSize: '0.9rem', color: 'var(--gray-600)', marginBottom: '1.2rem', lineHeight: '1.6' }}>
            <strong>What's Included:</strong> Regular dependency updates, bug fixes, performance monitoring, uptime tracking, and daily database backups.<br />
            <strong>Turnaround Time:</strong> Ongoing monthly retainers with 24-hour SLA.<br />
            <strong>Perfect For:</strong> Established businesses who want peace of mind without hiring full-time engineering teams.
          </p>
          <Link className="btn-dark" href="/services/maintenance-support">Explore Maintenance &rarr;</Link>
        </div>
      </div>

      {/* 4 */}
      <div className="service-row reverse">
        <div className="service-visual"><i className="ti ti-api"></i></div>
        <div className="service-content-block">
          <div className="service-subtitle">CONNECTING YOUR TOOLS</div>
          <h2 className="service-title">API & System <br/><em>Integration</em></h2>
          <p className="service-desc-large" style={{ marginBottom: '0.8rem' }}>Seamlessly connect your software ecosystem. We build and integrate robust APIs to ensure your platforms talk to each other smoothly and efficiently.</p>
          <p className="service-desc-detail" style={{ fontSize: '0.9rem', color: 'var(--gray-600)', marginBottom: '1.2rem', lineHeight: '1.6' }}>
            <strong>What's Included:</strong> REST/GraphQL API development, third-party integrations (Stripe, Razorpay, LLMs), authentication flows, and webhook handling.<br />
            <strong>Turnaround Time:</strong> 1 to 4 weeks based on integration scale.<br />
            <strong>Perfect For:</strong> Platforms needing robust automation, custom backend logic, and scalable microservices architectures.
          </p>
          <Link className="btn-dark" href="/services/api-integration">Explore Integration &rarr;</Link>
        </div>
      </div>

      {/* 5 */}
      <div className="service-row">
        <div className="service-visual"><i className="ti ti-cloud"></i></div>
        <div className="service-content-block">
          <div className="service-subtitle">SCALABLE INFRASTRUCTURE</div>
          <h2 className="service-title">Cloud <br/><em>Services</em></h2>
          <p className="service-desc-large" style={{ marginBottom: '0.8rem' }}>Future-proof your business with robust cloud architecture. We design, deploy, and manage scalable cloud solutions that grow exactly when you need them to.</p>
          <p className="service-desc-detail" style={{ fontSize: '0.9rem', color: 'var(--gray-600)', marginBottom: '1.2rem', lineHeight: '1.6' }}>
            <strong>What's Included:</strong> Cloud migrations to AWS/Vercel, Docker containerization, CI/CD pipeline setup, serverless deployment, and cost optimization.<br />
            <strong>Turnaround Time:</strong> 2 to 5 weeks for complete migration and setup.<br />
            <strong>Perfect For:</strong> Scaling startups and enterprises looking to modernize their infrastructure and reduce operational overhead.
          </p>
          <Link className="btn-dark" href="/services/cloud-infrastructure">Explore Cloud Services &rarr;</Link>
        </div>
      </div>

      {/* 6 */}
      <div className="service-row reverse">
        <div className="service-visual"><i className="ti ti-shield-lock"></i></div>
        <div className="service-content-block">
          <div className="service-subtitle">PROTECTING YOUR ASSETS</div>
          <h2 className="service-title">Cyber<br/><em>Security</em></h2>
          <p className="service-desc-large" style={{ marginBottom: '0.8rem' }}>Safeguard your digital presence against evolving threats. We implement comprehensive security measures to protect your data, infrastructure, and user privacy.</p>
          <p className="service-desc-detail" style={{ fontSize: '0.9rem', color: 'var(--gray-600)', marginBottom: '1.2rem', lineHeight: '1.6' }}>
            <strong>What's Included:</strong> Vulnerability assessments, penetration testing, securing authentication flows, DDOS protection setup, and compliance audits.<br />
            <strong>Turnaround Time:</strong> 1 to 3 weeks for full security audits and implementation.<br />
            <strong>Perfect For:</strong> FinTech platforms, healthcare apps, and any business handling sensitive user data and transactions.
          </p>
          <Link className="btn-dark" href="/services/cybersecurity">Explore CyberSecurity &rarr;</Link>
        </div>
      </div>
    </div>
  </div>

  <div className="section" style={{ paddingTop: 0, paddingBottom: '4rem' }}>
    <div className="contact-section">
      <div className="contact-left">
        <h2>Don&apos;t see exactly what you need?</h2>
        <p>Every project is different. Send me a brief description of what you&apos;re trying to build and I&apos;ll get back to you with a clear plan and quote within 24 hours.</p>
      </div>
      <div className="contact-right">
        <Link className="contact-email-btn" href="mailto:vashishthaharsh97@gmail.com?subject=Project%20Inquiry">Get a Custom Quote →</Link>
      </div>
    </div>
  </div>
</main>

</>
  );
}
