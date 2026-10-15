import { Metadata } from 'next';
import ToolsClient from './ToolsClient';

export const metadata: Metadata = {
  title: 'AI Developer Studio & Monetization Hub — Free Tools, Kits & Advisory | Harsh Vashishtha',
  description: 'Free interactive AI Prompt Architect, Token & Monthly API Cost Calculator, Claude & Next.js AI Agent Starter Kits, and 1-on-1 AI strategy advisory by Harsh Vashishtha.',
  keywords: [
    'AI Tools',
    'AI Prompt Generator',
    'AI Token Cost Calculator',
    'Claude API Starter Kit',
    'Next.js AI Boilerplate',
    'AI Agent Builder India',
    'Harsh Vashishtha',
    'Haqikos',
    'AI Strategy Consultation',
    'Hire AI Engineer India'
  ],
  openGraph: {
    title: 'AI Developer Studio & Marketplace — Free Tools & Starter Kits | Harsh Vashishtha',
    description: 'Free AI prompt generators, token cost estimators, production Next.js agent boilerplates, and 1-on-1 AI strategy advisory.',
    url: 'https://harshvashishtha.space/tools',
    images: [{
      url: '/assets/images/ai_tools_studio.jpg',
      width: 1200,
      height: 675,
      alt: 'AI Developer Studio & Marketplace by Harsh Vashishtha'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Developer Studio & Marketplace — Free Tools & Starter Kits | Harsh Vashishtha',
    description: 'Free AI prompt generators, token cost estimators, production Next.js agent boilerplates, and 1-on-1 AI strategy advisory.',
    images: ['/assets/images/ai_tools_studio.jpg'],
  },
  alternates: {
    canonical: 'https://www.harshvashishtha.space/tools',
  }
};

export default function ToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'AI Developer Studio & Prompt Architect',
            url: 'https://harshvashishtha.space/tools',
            description: 'Free interactive AI Prompt Architect, API Token Cost Estimator, and developer toolkits by Harsh Vashishtha.',
            author: {
              '@type': 'Person',
              name: 'Harsh Vashishtha',
              url: 'https://harshvashishtha.space'
            },
            applicationCategory: 'DeveloperApplication',
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'INR',
              lowPrice: '0',
              highPrice: '9999',
              offerCount: '6'
            }
          })
        }}
      />
      <main>
        <ToolsClient />
      </main>
    </>
  );
}
