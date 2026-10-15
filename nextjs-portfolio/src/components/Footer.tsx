"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">Harsh Vashishtha</div>
            <div className="footer-tagline">AI Engineer, Agent Builder & Founder of Haqikos. Building intelligent products for India and the world.</div>
            <div className="footer-social">
              <Link className="social-btn" href="https://linkedin.com/in/theharshvashishtha" target="_blank" rel="noopener" title="LinkedIn"><i className="ti ti-brand-linkedin"></i></Link>
              <Link className="social-btn" href="https://github.com/Harsh-Vashishtha-G" target="_blank" rel="noopener" title="GitHub"><i className="ti ti-brand-github"></i></Link>
              <Link className="social-btn" href="https://youtube.com/@TheHarshVashishtha" target="_blank" rel="noopener" title="YouTube"><i className="ti ti-brand-youtube"></i></Link>
              <Link className="social-btn" href="https://x.com/TheHVashishtha" target="_blank" rel="noopener" title="X"><i className="ti ti-brand-x"></i></Link>
            </div>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><Link href="/tools" style={{ color: '#60a5fa', fontWeight: 600 }}>AI Tools &amp; Store (New)</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/skills">Skills</Link></li>
              <li><Link href="/uses">Uses</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/newsletter">Newsletter</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Products &amp; Studio</h4>
            <ul className="footer-links">
              <li><Link href="/tools#prompt-architect">AI Prompt Architect</Link></li>
              <li><Link href="/tools#cost-calculator">API Cost Estimator</Link></li>
              <li><Link href="/tools">SaaS Agent Starters</Link></li>
              <li><Link href="https://haqikos.com" target="_blank" rel="noopener">Haqikos</Link></li>
              <li><Link href="/qia">QIA Answer Engine</Link></li>
              <li><Link href="https://payqia.com" target="_blank" rel="noopener">PayQIA</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li><Link href="mailto:vashishthaharsh97@gmail.com">Email Me</Link></li>
              <li><Link href="https://linkedin.com/in/theharshvashishtha" target="_blank" rel="noopener">LinkedIn</Link></li>
              <li><Link href="https://www.linkedin.com/newsletters/the-intelligent-edge-7093083002045423617/" target="_blank" rel="noopener">Newsletter</Link></li>
              <li><Link href="https://github.com/Harsh-Vashishtha-G" target="_blank" rel="noopener">GitHub</Link></li>
              <li><Link href="https://youtube.com/@TheHarshVashishtha" target="_blank" rel="noopener">YouTube</Link></li>
              <li><Link href="/assets/resume/Harsh%20Vashishtha%20-%20Resume.pdf" target="_blank" rel="noopener" download="Harsh_Vashishtha_Resume.pdf">Download Resume</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-copy">© 2026 Harsh Vashishtha · India · <span>All rights reserved</span></div>
          <div className="footer-badges">
            <span className="badge available">● Available for Work</span>
            <span className="badge">Founder @ Haqikos</span>
            <span className="badge">Made in India 🇮🇳</span>
          </div>
          <div className="footer-legal">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </footer>

      <button 
        className={`scroll-top ${showScroll ? 'show' : ''}`} 
        id="scrollTop" 
        onClick={scrollToTop} 
        aria-label="Scroll to top"
        style={{ display: showScroll ? 'flex' : 'none' }}
      >
        <i className="ti ti-arrow-up"></i>
      </button>
    </>
  );
}
