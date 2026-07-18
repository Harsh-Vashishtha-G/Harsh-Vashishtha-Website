import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study: PayQIA — Personal Finance AI | Harsh Vashishtha',
  description: 'Detailed case study on building PayQIA, a mobile-first PWA for intelligent personal finance management.',
};

export default function PayQIAPage() {
  return (
    <main>
      <div className="section">
        <div className="eyebrow">Case Study</div>
        <div className="section-title">PayQIA — <em>Personal Finance AI</em></div>
        
        <div className="project-tags" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <span className="proj-tag">React</span>
          <span className="proj-tag">TypeScript</span>
          <span className="proj-tag">Tailwind CSS</span>
          <span className="proj-tag">Supabase</span>
          <span className="proj-tag">PWA</span>
        </div>

        <div style={{ maxWidth: '800px', lineHeight: '1.7' }}>
          <h3 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Overview</h3>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', color: 'var(--gray-600)' }}>
            PayQIA is a mobile-first Progressive Web Application (PWA) designed to revolutionize personal finance for the Indian demographic. Rather than presenting users with confusing spreadsheets and rigid budgeting categories, PayQIA introduces an AI financial assistant capable of parsing expenses, categorizing transactions, and explaining complex financial data in simple, natural language.
          </p>

          <h3 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>The Problem</h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--gray-600)' }}>
            Managing personal finances is traditionally tedious and intimidating. Existing applications often require high manual effort—users must manually input dates, precise amounts, and pick from rigid drop-down categories. For the average user in India, who conducts dozens of micro-transactions daily via UPI, this manual tracking becomes overwhelming, leading to high drop-off rates in budget adherence. Furthermore, raw financial charts do not tell a user "how" they are spending or "why" they are failing to save.
          </p>

          <h3 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>The Solution</h3>
          <p style={{ marginBottom: '1rem', color: 'var(--gray-600)' }}>
            PayQIA tackles these issues by making expense tracking conversational and intelligent. It offers a five-tab bottom navigation interface specifically optimized for mobile devices, ensuring the app feels native and accessible.
          </p>
          <ul style={{ marginBottom: '1.5rem', color: 'var(--gray-600)', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Natural Language Parsing:</strong> Users can simply type or speak "Spent 150 rupees on Swiggy for lunch," and PayQIA’s AI engine automatically extracts the amount, assigns the 'Food/Dining' category, and logs the timestamp.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>AI-Powered Expense Insights:</strong> Instead of just pie charts, PayQIA generates personalized, human-readable insights. It tells you things like, "You spent 30% more on transport this week compared to last week—consider taking the metro."</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Progressive Web App (PWA):</strong> To save storage space on user devices and bypass restrictive app store policies, PayQIA is built as a PWA, allowing it to be installed directly to the home screen from the browser with offline capabilities.</li>
          </ul>

          <h3 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>Technical Architecture</h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--gray-600)' }}>
            The frontend is engineered with <strong>React</strong> and <strong>TypeScript</strong> for a strictly-typed, scalable codebase. I utilized <strong>Tailwind CSS</strong> to rapidly build the custom five-tab mobile navigation and maintain a clean, modern aesthetic. The entire application is configured via service workers to function seamlessly as a PWA, offering native-like transitions.
          </p>
          <p style={{ marginBottom: '1.5rem', color: 'var(--gray-600)' }}>
            The backend is powered entirely by <strong>Supabase</strong>. Utilizing Supabase's real-time PostgreSQL database, user transactions are synced instantly across devices. Supabase Auth handles secure user authentication, and Row Level Security (RLS) ensures that personal financial data is strictly isolated and secure. The AI parsing logic interfaces via secure edge functions to interpret natural language inputs and map them to the database schema.
          </p>

          <h3 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>The Impact</h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--gray-600)' }}>
            By removing the friction of manual data entry and replacing raw graphs with conversational AI insights, PayQIA significantly lowers the barrier to financial literacy and tracking. It proves that utility applications do not need to be boring or overly complex—by integrating AI thoughtfully, we can create financial tools that users actually enjoy interacting with daily.
          </p>

          <div style={{ marginTop: '4rem', display: 'flex', gap: '1rem' }}>
            <Link className="btn-primary" href="/projects" style={{ padding: '0.6rem 1.2rem' }}>← Back to Projects</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
