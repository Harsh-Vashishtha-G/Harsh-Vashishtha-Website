import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Contact Harsh Vashishtha — AI Engineer & Freelancer India",
};

export default function Page() {
  return (
    <>
      <main>
  <div className="section" id="contact" style={{ paddingBottom: '2rem' }}>
    <div className="eyebrow">Contact</div>
    <div className="section-title" style={{ marginBottom: 0 }}>Let&apos;s work <em>together</em></div>
    <p className="hero-desc" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>Have a project in mind? Reach out and I will get back to you within 24 hours.</p>
  </div>
  
  <div className="contact-section">
    <div className="contact-left">
      <h2>Open for opportunities</h2>
      <p>I&apos;m currently available for AI development, web development, SaaS projects, collaborations, and consulting. Based in Jaipur, India — working with clients globally.</p>
    </div>
    <div className="contact-right">
      <Link className="contact-link" href="mailto:vashishthaharsh97@gmail.com"><i className="ti ti-mail"></i> vashishthaharsh97@gmail.com </Link>
      <Link className="contact-link" href="https://linkedin.com/in/theharshvashishtha" target="_blank" rel="noopener"><i className="ti ti-brand-linkedin"></i> linkedin.com/in/theharshvashishtha </Link>
      <Link className="contact-link" href="https://github.com/Harsh-Vashishtha-G" target="_blank" rel="noopener"><i className="ti ti-brand-github"></i> github.com/Harsh-Vashishtha-G </Link>
      <Link className="contact-link" href="https://haqikos.com" target="_blank" rel="noopener"><i className="ti ti-world"></i> haqikos.com</Link>
    <Link className="contact-link" href="https://www.linkedin.com/newsletters/the-intelligent-edge-7093083002045423617/" target="_blank" rel="noopener"><i className="ti ti-news"></i> The Intelligent Edge (Newsletter)</Link>
    <Link className="contact-link" href="mailto:haqikos.ai@gmail.com"><i className="ti ti-mail"></i> haqikos.ai@gmail.com (Haqikos)</Link>
      <Link className="contact-email-btn" href="mailto:vashishthaharsh97@gmail.com">Send me a message →</Link>
    </div>
  </div>
</main>

</>
  );
}
