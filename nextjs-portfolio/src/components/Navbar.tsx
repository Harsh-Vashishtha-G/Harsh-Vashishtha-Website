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
          <Link className="nav-cta" href="mailto:vashishthaharsh97@gmail.com">Hire me</Link>
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            <i className="ti ti-menu-2"></i>
          </button>
        </div>
      </nav>
      {/* The original JS toggled a class, likely 'active' or modified style.display. 
          Here we conditionally add an 'active' class, which is standard for such CSS. */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} id="mobileMenu" style={{ display: isMobileMenuOpen ? 'flex' : 'none' }}>
        <Link href="/qia" onClick={closeMenu}>QIA</Link>
        <Link href="/projects" onClick={closeMenu}>Projects</Link>
        <Link href="/services" onClick={closeMenu}>Services</Link>
        <Link href="/skills" onClick={closeMenu}>Skills</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/uses" onClick={closeMenu}>Uses</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <Link href="mailto:vashishthaharsh97@gmail.com" onClick={closeMenu}>Hire me →</Link>
      </div>
    </>
  );
}
