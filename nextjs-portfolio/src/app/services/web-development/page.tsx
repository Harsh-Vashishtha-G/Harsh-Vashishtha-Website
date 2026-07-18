"use client";
import Link from 'next/link';

export default function WebDevelopmentPage() {
  return (
    <div className="section" style={{ minHeight: '80vh', paddingTop: '8rem', paddingBottom: '8rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="eyebrow">Service</div>
      <h1 className="section-title">Web Development & <em>Design</em></h1>
      
      <p style={{ fontSize: '1.2rem', color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '2rem' }}>
        In the digital age, your website is often the very first interaction a potential customer has with your brand. It is your digital storefront, your 24/7 salesperson, and the ultimate reflection of your company's quality and vision. We specialize in crafting modern, highly responsive, pixel-perfect web applications using the most advanced technologies in the ecosystem: React.js, Next.js, TypeScript, and Tailwind CSS. We don't just build websites; we architect scalable digital experiences that drive engagement and maximize conversions.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Frontend Development</h3>
          <p style={{ color: 'var(--gray-600)' }}>Lightning-fast UIs built with React and Next.js, optimized for Core Web Vitals, accessibility, and SEO.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>UI/UX Design</h3>
          <p style={{ color: 'var(--gray-600)' }}>Figma prototypes translated into pixel-perfect code with smooth micro-interactions and animations.</p>
        </div>
        <div style={{ padding: '2rem', background: 'var(--gray-50)', borderRadius: '1rem', border: '1px solid var(--gray-200)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>E-Commerce</h3>
          <p style={{ color: 'var(--gray-600)' }}>High-converting digital storefronts tailored for your products with robust inventory and payment flows.</p>
        </div>
      </div>

      <article className="article-content" style={{ marginTop: '3rem', marginBottom: '4rem' }}>
        <h2>The Next.js Revolution: Performance Meets Engineer Experience</h2>
        <p>
          The era of slow, monolithic web applications is over. Today's users demand instantaneous load times and seamless navigation. We build exclusively using Next.js, the industry-leading React framework that powers some of the largest websites in the world. By leveraging Next.js App Router, React Server Components (RSC), and advanced rendering strategies like Static Site Generation (SSG) and Incremental Static Regeneration (ISR), we deliver web applications that are blisteringly fast right out of the box. 
        </p>
        <p>
          This architecture fundamentally changes how data is fetched and rendered. By moving heavy computational workloads and database queries to the server, we drastically reduce the amount of JavaScript sent to the browser. This results in massive improvements in Time to First Byte (TTFB) and Largest Contentful Paint (LCP), metrics that are utterly crucial for both SEO rankings and user retention.
        </p>

        <h2>Pixel-Perfect Design Engineering</h2>
        <p>
          A brilliant backend is useless if the frontend looks unpolished. We bridge the gap between design and engineering. Using utility-first CSS frameworks like Tailwind CSS alongside custom styling architectures, we translate high-fidelity Figma prototypes into living, breathing code with absolute precision. We obsess over typography, spacing, color theory, and responsive behavior, ensuring that your web application looks stunning on a 4K desktop monitor, an iPad, and the smallest mobile devices.
        </p>
        <p>
          Furthermore, static designs are no longer enough. We breathe life into the web using advanced micro-interactions and animations. Utilizing libraries like Framer Motion and GSAP, we implement scroll-triggered animations, seamless page transitions, and interactive physics-based elements that create a premium, "wow" factor for your visitors, keeping them engaged for longer.
        </p>

        <h2>Type Safety and Robust Architecture</h2>
        <p>
          We are deeply committed to writing maintainable, enterprise-grade code. By strictly enforcing TypeScript across our entire stack, we catch errors at compile-time rather than runtime. This robust type safety acts as living documentation, ensuring that data structures remain consistent from the database layer all the way to the frontend UI components. 
        </p>
        <p>
          We employ modular, component-driven architectures using Storybook to build isolated UI libraries. This allows for immense scalability; as your application grows, your design system remains consistent, allowing new features to be developed and integrated at unprecedented speeds without incurring technical debt.
        </p>

        <h2>SEO and Accessibility (a11y) Built-In</h2>
        <p>
          A beautiful website is invisible if search engines cannot crawl it, and useless if users with disabilities cannot navigate it. We implement comprehensive Technical SEO from day one. Utilizing Next.js's powerful metadata API, dynamic sitemap generation, and structured JSON-LD data, we ensure that Google's crawlers can perfectly index your content, giving you a massive competitive advantage in organic search rankings.
        </p>
        <p>
          Simultaneously, we adhere strictly to WCAG accessibility guidelines. We ensure proper semantic HTML structure, keyboard navigability, high-contrast ratios, and robust ARIA labels, guaranteeing that your web application is accessible and inclusive to every single user on the internet.
        </p>
      </article>

      <Link href="/contact" className="btn-dark" style={{ display: 'inline-block', marginBottom: '4rem' }}>Start a Web Project &rarr;</Link>
    </div>
  );
}
