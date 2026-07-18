import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Harsh Vashishtha — AI Engineer, Founder of Haqikos',
  description: 'About Harsh Vashishtha — AI Engineer, Founder of Haqikos, MCA AI ML Graduate from LPU India',
};

export default function Page() {
  return (
    <>
      <main>
  {/* ABOUT HEADER */}
  <div className="section" style={{ paddingBottom: '2rem' }}>
    <div className="eyebrow">Discover</div>
    <div className="section-title" style={{ marginBottom: '1rem' }}>About <em>me</em></div>
    
    <div className="about-item" style={{ borderTop: 'none', paddingTop: 0, maxWidth: '800px' }}>
      <h3 className="eyebrow" style={{ fontSize: '0.85rem', letterSpacing: '1px', color: 'var(--black)', marginBottom: '1rem' }}>My Story</h3>
      <p style={{ fontSize: '0.95rem', marginBottom: '1.2rem', lineHeight: '1.8' }}>
        My journey into technology started with a simple fascination: understanding how intelligent systems could seamlessly interact with human intent. Since then, I&apos;ve transformed that childhood curiosity into a relentless drive to build software that matters. As an engineer, I specialize in architecting modern web applications, training AI models, and designing autonomous agents that bridge the gap between imagination and reality.
      </p>
      <p style={{ fontSize: '0.95rem', marginBottom: '1.2rem', lineHeight: '1.8' }}>
        I recently completed my Master of Computer Applications (MCA) with a specialized focus on Artificial Intelligence &amp; Machine Learning at Lovely Professional University, and I am currently seeking opportunities in Cloud Computing roles. However, I&apos;ve always believed that true mastery is forged in the trenches of actual development. From writing clean, scalable React code to engineering robust, cloud-native AI systems, I thrive on turning abstract concepts into concrete, usable products. I learn by building, breaking, and iterating.
      </p>
      <p style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
        Beyond the terminal, I am deeply passionate about human potential. I run a YouTube channel focused on mindset and personality development, because I believe that building oneself is just as critical as building software. Whether I am fine-tuning an LLM, deploying a cloud-native SaaS, or sharing insights on personal growth, my core philosophy is always the same: to continuously learn, push boundaries, and create work that adds genuine value to people&apos;s lives.
      </p>
      <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginTop: '1.2rem' }}>
        My expertise extends across the entire modern stack. From crafting intuitive user interfaces using React, Next.js, and Tailwind CSS to architecting scalable backend solutions with Python, Node.js, and Supabase, I pride myself on delivering complete, end-to-end applications. As the founder of Haqikos, I have spearheaded the development of robust platforms like QIA—a highly interactive, Perplexity-style AI answer engine powered by the Claude API and real-time web search capabilities. I also engineered PayQIA, a dedicated personal finance progressive web application designed specifically for the unique needs of Indian users, ensuring seamless financial management and tracking. Furthermore, my work on Gearist highlights my ability to create versatile SaaS ecosystems, offering 24 distinct AI utility tools tailored for Indian professionals and developers.
      </p>
      <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginTop: '1.2rem' }}>
        Through these varied projects, I have honed a deep understanding of Generative Engine Optimization (GEO) and search engine optimization, integrating complex JSON-LD schemas and canonical structures to maximize visibility. My academic background, culminating in a Master of Computer Applications (MCA) with a specialization in Artificial Intelligence and Machine Learning from Lovely Professional University, provided a strong theoretical foundation. However, it is the practical application of this knowledge—building production-ready AI agents, designing intricate RAG pipelines, and orchestrating cloud deployments on Vercel and AWS—that truly defines my professional journey. I am driven by the belief that AI should not just be a novelty, but a seamlessly integrated tool that enhances productivity, simplifies complex workflows, and empowers individuals across India and the globe. I am currently seeking freelance collaborations as well as full-time roles in Cloud Computing and AI Development to continue this mission.
      </p>
    </div>
  </div>

  <div className="divider" ></div>

  {/* ABOUT */}
  <div className="section" id="about">
    <div className="eyebrow">Expertise</div>
    <div className="section-title">What I do <em>best</em></div>
    <div className="roles-list">
      <span className="role-tag">AI Engineer</span>
      <span className="role-tag">AI Agent Builder</span>
      <span className="role-tag">Prompt Engineer</span>
      <span className="role-tag">React.js Engineer</span>
      <span className="role-tag">Next.js Engineer</span>
      <span className="role-tag">UI/UX Designer</span>
      <span className="role-tag">Cloud Enthusiast</span>
      <span className="role-tag">Full Stack Engineer</span>
      <span className="role-tag">SaaS Builder</span>
      <span className="role-tag">Content Creator</span>
    </div>
    <div className="about-grid">
      <div className="about-item">
        <h3>AI Development & Agents</h3>
        <p>Building intelligent AI systems, autonomous agents, and LLM-powered products using Claude API, prompt engineering, and modern AI frameworks. From chatbots to full answer engines.</p>
      </div>
      <div className="about-item">
        <h3>Web Development & Design</h3>
        <p>Crafting modern, responsive, pixel-perfect web apps using React.js, Next.js, TypeScript, and Tailwind CSS. From landing pages to full SaaS products — concept to deployment.</p>
      </div>
      <div className="about-item">
        <h3>SaaS & Product Building</h3>
        <p>End-to-end SaaS product development including auth, payments via Razorpay, Supabase database, streaming APIs, and cloud deployment. I ship products that actually work.</p>
      </div>
      <div className="about-item">
        <h3>Cloud & Infrastructure</h3>
        <p>Deploying scalable applications on Vercel, managing databases on Supabase, caching with Upstash Redis, and integrating Firebase — cloud-native from day one.</p>
      </div>
    </div>
  </div>

  <div className="divider" ></div>


</main>

</>
  );
}
