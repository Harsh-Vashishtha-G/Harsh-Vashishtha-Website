"use client";
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
          This approach not only provides clarity and aligns expectations but drastically reduces engineering overhead. Engineers receive a living document that explicitly demonstrates exactly how every component should behave, eliminating guesswork and accelerating the development lifecycle.
        </p>

        <h2>Scalable Design Systems</h2>
        <p>
          For enterprise applications and rapidly growing startups, consistency is a massive challenge. When multiple engineers are building different features, the UI can quickly degrade into a fragmented mess. We solve this by engineering robust Design Systems. We define a singular source of truth for design tokens—colors, typography scales, spacing units, and border radii—and meticulously construct a library of reusable UI components.
        </p>
        <p>
          This atomic design approach ensures that a button looks and behaves exactly the same on the dashboard as it does on the settings page. When your brand evolves, updating a single design token propagates the change instantly across the entire application, making your product infinitely scalable and immensely maintainable.
        </p>
      </article>

      <Link href="/contact" className="btn-dark" style={{ display: 'inline-block', marginBottom: '4rem' }}>Start a Design Project &rarr;</Link>
    </div>
  );
}
