import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study: Q-Verse — Adaptive Learning Ecosystem | Harsh Vashishtha',
  description: 'Detailed case study on building Q-Verse, an AI-powered adaptive learning platform.',
};

export default function QVersePage() {
  return (
    <main>
      <div className="section">
        <div className="eyebrow">Case Study</div>
        <div className="section-title">Q-Verse — <em>Adaptive Learning Ecosystem</em></div>
        
        <div className="project-tags" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <span className="proj-tag">React.js</span>
          <span className="proj-tag">Flask</span>
          <span className="proj-tag">TensorFlow</span>
          <span className="proj-tag">MySQL</span>
          <span className="proj-tag">NLTK</span>
        </div>

        <div style={{ maxWidth: '800px', lineHeight: '1.7' }}>
          <h3 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Overview</h3>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', color: 'var(--gray-600)' }}>
            Q-Verse is an advanced, AI-powered adaptive learning platform designed to personalize educational journeys. Serving as my capstone project for my final semester of the MCA program, Q-Verse moves beyond the traditional "one-size-fits-all" learning management systems (LMS) by leveraging machine learning to dynamically adjust the curriculum, difficulty, and content delivery based on real-time student performance.
          </p>

          <h3 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>The Problem</h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--gray-600)' }}>
            In traditional e-learning environments, a classroom of 50 students will receive the exact same lectures, assignments, and quizzes, regardless of their individual learning speeds or comprehension levels. Advanced students become bored, while struggling students fall further behind without personalized intervention. Furthermore, when students have questions outside of teaching hours, they have no reliable, instantly accessible academic support, slowing down their progress and reducing engagement.
          </p>

          <h3 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>The Solution</h3>
          <p style={{ marginBottom: '1rem', color: 'var(--gray-600)' }}>
            Q-Verse addresses these pedagogical shortcomings through a multi-faceted AI ecosystem that constantly measures and adapts to the learner.
          </p>
          <ul style={{ marginBottom: '1.5rem', color: 'var(--gray-600)', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>ML-Based Personalized Learning Paths:</strong> The platform tracks performance on real-time assessments and uses clustering algorithms to identify knowledge gaps. If a student fails a module on basic algorithms, the system dynamically inserts remedial content before allowing them to progress to advanced data structures.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>NLP Virtual Assistant:</strong> Q-Verse features an integrated, domain-specific chatbot powered by Natural Language Processing. Students can ask conceptual questions directly within the learning dashboard and receive immediate, context-aware explanations.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Real-time Quiz Assessment:</strong> The application features timed, dynamic quizzes where the difficulty of the next question is influenced by whether the student answered the previous question correctly—similar to the GMAT testing methodology.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Performance Analytics Dashboard:</strong> Both students and educators have access to a rich visualization dashboard that tracks metrics like learning velocity, module completion rates, and historical weak points.</li>
          </ul>

          <h3 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>Technical Architecture</h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--gray-600)' }}>
            To build a system capable of handling complex machine learning models alongside a reactive web interface, I adopted a decoupled architecture. The frontend is built using <strong>React.js</strong> to provide a fast, single-page application experience with rich state management for the learning dashboard.
          </p>
          <p style={{ marginBottom: '1.5rem', color: 'var(--gray-600)' }}>
            The backend is powered by a <strong>Flask (Python)</strong> API. Python was chosen as the backend language specifically to seamlessly integrate with data science libraries. The recommendation engine and clustering algorithms utilize <strong>TensorFlow</strong> and Scikit-learn, while the NLP virtual assistant leverages the <strong>NLTK</strong> (Natural Language Toolkit) library for text tokenization, stemming, and intent recognition. The relational data, including student profiles, course metadata, and grades, is robustly managed using <strong>MySQL</strong>.
          </p>

          <h3 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>The Impact</h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--gray-600)' }}>
            Q-Verse successfully demonstrates how AI can democratize quality education. By acting as a 24/7 personalized tutor, it ensures that no student is left behind due to a uniform curriculum pacing. The project received excellent evaluations during my MCA capstone presentation, validating the technical execution of bridging machine learning models with accessible web technologies.
          </p>

          <div style={{ marginTop: '4rem', display: 'flex', gap: '1rem' }}>
            <Link className="btn-primary" href="/projects" style={{ padding: '0.6rem 1.2rem' }}>← Back to Projects</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
