"use client";
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
