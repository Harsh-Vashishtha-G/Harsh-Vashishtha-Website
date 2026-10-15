"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav>
        <Link href="/" className="nav-logo">Harsh Vashishtha</Link>
        <ul className="nav-links">
          <li><Link href="/tools" style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 600, color: 'var(--black)' }}>Tools &amp; Store <span className="nav-badge">Hot</span></Link></li>
          <li><Link href="/qia">QIA</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/newsletter">Newsletter</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/uses">Uses</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div>
          <Link className="nav-cta" href="/tools">Visit Studio &rarr;</Link>
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            <i className="ti ti-menu-2"></i>
          </button>
        </div>
      </nav>
      {/* The original JS toggled a class, likely 'active' or modified style.display. 
          Here we conditionally add an 'active' class, which is standard for such CSS. */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} id="mobileMenu" style={{ display: isMobileMenuOpen ? 'flex' : 'none' }}>
        <Link href="/tools" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 600 }}><span>Tools &amp; Store</span> <span className="nav-badge">Hot</span></Link>
        <Link href="/qia" onClick={closeMenu}>QIA</Link>
        <Link href="/projects" onClick={closeMenu}>Projects</Link>
        <Link href="/services" onClick={closeMenu}>Services</Link>
        <Link href="/skills" onClick={closeMenu}>Skills</Link>
        <Link href="/newsletter" onClick={closeMenu}>Newsletter</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/uses" onClick={closeMenu}>Uses</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <Link href="/tools" onClick={closeMenu}>Explore AI Studio →</Link>
      </div>
    </>
  );
}
