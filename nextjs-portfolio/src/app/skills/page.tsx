"use client";
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <main>
  {/* SKILLS */}
  <div className="section" id="skills" style={{ paddingBottom: 0 }}>
    <div className="eyebrow">Stack</div>
    <div className="section-title">Technologies I <em>work with</em></div>
  </div>
  <div className="bento-container section" style={{ paddingTop: 0, marginBottom: '2rem' }}>
    <div className="bento-grid">
      
      {/* 1. Frontend & UX */}
      <div className="bento-card col-span-2">
        <div className="bento-glow"></div>
        <div className="bento-inner">
          <div className="bento-header">
            <div className="bento-icon-wrap"><i className="ti ti-layout-dashboard"></i></div>
            <h3>Frontend & UX</h3>
          </div>
          <p className="bento-desc">Building fast, responsive, and beautiful interfaces.</p>
          <div className="bento-badges">
            <div className="bento-badge">⚛️ React.js</div>
            <div className="bento-badge">▲ Next.js 14</div>
            <div className="bento-badge">🎨 Tailwind CSS</div>
            <div className="bento-badge">📱 PWA</div>
          </div>
        </div>
      </div>

      {/* 2. Backend & Database */}
      <div className="bento-card col-span-2 row-span-2">
        <div className="bento-glow"></div>
        <div className="bento-inner">
          <div className="bento-header">
            <div className="bento-icon-wrap"><i className="ti ti-server"></i></div>
            <h3>Backend & Database</h3>
          </div>
          <p className="bento-desc">Architecting robust and scalable server-side systems.</p>
          <div className="bento-list">
            <div className="bento-list-item"><span className="icon">🐍</span> Python/Flask</div>
            <div className="bento-list-item"><span className="icon">☕</span> Java</div>
            <div className="bento-list-item"><span className="icon">🗄️</span> Supabase</div>
            <div className="bento-list-item"><span className="icon">🔥</span> Firebase</div>
            <div className="bento-list-item"><span className="icon">🗃️</span> MySQL</div>
            <div className="bento-list-item"><span className="icon">🔴</span> Redis</div>
          </div>
        </div>
      </div>

      {/* 3. AI & ML */}
      <div className="bento-card col-span-2">
        <div className="bento-glow"></div>
        <div className="bento-inner">
          <div className="bento-header">
            <div className="bento-icon-wrap"><i className="ti ti-brain"></i></div>
            <h3>AI & ML</h3>
          </div>
          <p className="bento-desc">Integrating next-gen LLMs and machine learning models.</p>
          <div className="bento-badges">
             <div className="bento-badge dark">🤖 Claude API</div>
             <div className="bento-badge dark">🧠 TensorFlow</div>
          </div>
        </div>
      </div>

      {/* 4. Ecosystem & Cloud */}
      <div className="bento-card col-span-4">
        <div className="bento-glow"></div>
        <div className="bento-inner horizontal-inner">
          <div className="horizontal-text">
            <div className="bento-header">
              <div className="bento-icon-wrap"><i className="ti ti-cloud-computing"></i></div>
              <h3>Ecosystem & Cloud</h3>
            </div>
            <p className="bento-desc">Deployments, typing, and third-party integrations.</p>
          </div>
          <div className="bento-badges auto-wrap">
            <div className="bento-badge">🔷 TypeScript</div>
            <div className="bento-badge">☁️ Vercel</div>
            <div className="bento-badge">💳 Razorpay</div>
            <div className="bento-badge">🐙 Git/GitHub</div>
          </div>
        </div>
      </div>

    </div>
  </div>

  {/* NEW: FEATURED SPOTLIGHTS */}
  <div className="section" style={{ paddingTop: '2rem' }}>
    <div className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Featured <em>Expertise</em></div>
    
    <div className="spotlights-container">
      {/* Spotlight 1 */}
      <div className="spotlight-row">
        <div className="spotlight-text">
          <div className="spotlight-eyebrow">Architecture & Scale</div>
          <h2 className="spotlight-title">Modern Web Engineering</h2>
          <p className="spotlight-desc">
            Building robust, high-performance web applications using the latest 
            technologies like Next.js, React, and serverless architectures. 
            Focused on delivering pixel-perfect UI with lightning-fast load times.
          </p>
        </div>
        <div className="spotlight-image-wrap">
          <img src="/assets/images/web_dev_feature.png" alt="Modern Web Engineering" className="spotlight-img" />
        </div>
      </div>

      {/* Spotlight 2 */}
      <div className="spotlight-row reverse">
        <div className="spotlight-text">
          <div className="spotlight-eyebrow">Innovation & Intelligence</div>
          <h2 className="spotlight-title">AI & Machine Learning Integration</h2>
          <p className="spotlight-desc">
            Leveraging cutting-edge large language models like Claude and 
            frameworks like TensorFlow to build intelligent, context-aware 
            applications that solve complex business problems.
          </p>
        </div>
        <div className="spotlight-image-wrap">
          <img src="/assets/images/ai_feature.png" alt="AI & Machine Learning" className="spotlight-img" />
        </div>
      </div>
    </div>
  </div>

</main>

</>
  );
}
