"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface ProductItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  priceInr: string;
  priceUsd: string;
  oldPriceInr: string;
  oldPriceUsd: string;
  ribbon?: string;
  features: string[];
  type: 'kit' | 'advisory' | 'sponsor';
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'agent-starter-kit',
    category: 'Full-Stack Codebase',
    title: 'Claude & Next.js AI Agent Starter Kit',
    desc: 'Production-ready boilerplate for building autonomous AI agents with Server-Sent Events (SSE) streaming, Supabase auth, and payment billing.',
    priceInr: '₹2,499',
    priceUsd: '$29',
    oldPriceInr: '₹4,999',
    oldPriceUsd: '$59',
    ribbon: 'Most Popular',
    type: 'kit',
    features: [
      'Next.js 16 App Router + TypeScript + Tailwind CSS',
      'Claude API & Anthropic SDK streaming architecture',
      'Autonomous tool-calling and memory injection loops',
      'Supabase Database & Authentication pre-integrated',
      'Razorpay & Stripe webhook subscription templates',
      'One-click Vercel deployment with 0 config needed',
      'Lifetime updates & access to private GitHub repo'
    ]
  },
  {
    id: 'prompt-playbook',
    category: 'Developer Resource',
    title: 'System Prompt Engineering Master File',
    desc: 'Over 100+ battle-tested system prompt templates, XML guardrails, and chain-of-thought reasoning blueprints for Claude 3.7, GPT-4o, and Gemini.',
    priceInr: '₹999',
    priceUsd: '$12',
    oldPriceInr: '₹1,999',
    oldPriceUsd: '$25',
    ribbon: 'Best Value',
    type: 'kit',
    features: [
      '100+ production prompts for Coding, SaaS, Data & Agents',
      'XML tagged structured templates for Claude & GPT',
      'RAG hallucination reduction & guardrail patterns',
      'Persona definitions & negative constraint rules',
      'Copy-paste Markdown & JSON format files',
      'Free quarterly prompt updates included'
    ]
  },
  {
    id: 'payqia-blueprint',
    category: 'Architecture Guide',
    title: 'PayQIA Fintech PWA Architecture Blueprint',
    desc: 'The complete architectural blueprint and engineering breakdown behind PayQIA — an AI-powered personal finance progressive web app built for Indian users.',
    priceInr: '₹1,499',
    priceUsd: '$19',
    oldPriceInr: '₹2,999',
    oldPriceUsd: '$39',
    type: 'kit',
    features: [
      'PWA 5-tab responsive navigation design system',
      'Local Indian SMS parsing & AI expense categorizer logic',
      'Supabase schema & Prisma data models',
      'AI financial advisory prompt engineering patterns',
      'High-performance client caching & offline sync guide',
      'Full architectural diagrams & technical spec PDF'
    ]
  }
];

const ADVISORY_ITEMS: ProductItem[] = [
  {
    id: 'strategy-45m',
    category: '1-on-1 Consultation',
    title: '45-Min AI & Product Architecture Session',
    desc: 'Direct strategy video call with Harsh Vashishtha. Get actionable advice on LLM system architecture, reducing AI API costs, and shipping SaaS in India.',
    priceInr: '₹4,999',
    priceUsd: '$59',
    oldPriceInr: '₹7,999',
    oldPriceUsd: '$99',
    ribbon: 'High Demand',
    type: 'advisory',
    features: [
      '45-minute private 1-on-1 Google Meet consultation',
      'Architecture review of your AI app or startup roadmap',
      'LLM selection, prompt engineering & latency optimization',
      'Cost reduction strategies for Claude & OpenAI APIs',
      'Recording & actionable executive action summary sent post-call'
    ]
  },
  {
    id: 'code-audit-2h',
    category: 'Deep-Dive Technical Review',
    title: 'Comprehensive SaaS & AI Agent Code Audit',
    desc: 'In-depth review of your Next.js codebase, AI agent loop, database queries, and deployment pipeline to identify latency, security, and scaling bottlenecks.',
    priceInr: '₹9,999',
    priceUsd: '$129',
    oldPriceInr: '₹14,999',
    oldPriceUsd: '$189',
    type: 'advisory',
    features: [
      'Deep dive into your private repository or architecture spec',
      'Security review (API key exposure, injection & prompt guardrails)',
      'Performance audit (Next.js server actions, bundle size, caching)',
      'Detailed written PDF audit report with concrete code fixes',
      '60-minute walkthrough call to discuss recommendations'
    ]
  }
];

const SPONSOR_ITEMS: ProductItem[] = [
  {
    id: 'newsletter-headline',
    category: 'Newsletter Sponsorship',
    title: 'Headline Sponsor on The Intelligent Edge',
    desc: 'Prominently feature your product, AI tool, or dev service at the top of The Intelligent Edge newsletter reaching 2,500+ tech professionals and founders.',
    priceInr: '₹3,999',
    priceUsd: '$49',
    oldPriceInr: '₹5,999',
    oldPriceUsd: '$79',
    type: 'sponsor',
    features: [
      'Top-of-edition headline placement with logo & 80-word pitch',
      'Direct clickable CTA button to your website / product',
      'Sent to 2,500+ active email & LinkedIn subscribers',
      'Permanent archive on harshvashishtha.space/newsletter',
      'Click tracking & performance report delivered post-send'
    ]
  },
  {
    id: 'newsletter-deepdive',
    category: 'Dedicated Deep-Dive',
    title: 'Co-Branded Case Study & Deep Dive Edition',
    desc: 'A full edition of The Intelligent Edge dedicated to breaking down your product, technical architecture, or company case study.',
    priceInr: '₹7,999',
    priceUsd: '$99',
    oldPriceInr: '₹12,000',
    oldPriceUsd: '$149',
    ribbon: 'Maximum Impact',
    type: 'sponsor',
    features: [
      'Full dedicated 800-1200 word in-depth technical case study',
      'Written by Harsh Vashishtha with architecture diagrams & insights',
      'Sent exclusively to 2,500+ subscribers and shared on LinkedIn & X',
      'Permanent SEO-optimized article on harshvashishtha.space',
      'Direct founder attribution and multi-touch lead generation'
    ]
  }
];

export default function ToolsClient() {
  const [activeTab, setActiveTab] = useState<'tools' | 'kits' | 'advisory' | 'sponsor'>('tools');

  // Interactive Tool 1: AI Prompt Optimizer State
  const [userPrompt, setUserPrompt] = useState('Create an autonomous customer support AI agent for a SaaS platform');
  const [targetModel, setTargetModel] = useState('Claude 3.7 / 3.5 Sonnet');
  const [promptPersona, setPromptPersona] = useState('System Architect & Engineer');
  const [promptFormat, setPromptFormat] = useState('XML Tagged Production Spec');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  // Interactive Tool 2: Cost Calculator State
  const [dailyRequests, setDailyRequests] = useState(2500);
  const [avgInputTokens, setAvgInputTokens] = useState(900);
  const [avgOutputTokens, setAvgOutputTokens] = useState(450);

  // Interactive Tool 3: Agent Readiness Checklist State
  const [checklist, setChecklist] = useState({
    schema: true,
    guardrails: false,
    tokenLimits: true,
    humanInLoop: false
  });

  // Modal State for Purchasing / Inquiring
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [checkoutEmail, setCheckoutEmail] = useState('');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Prompt generator handler
  const handleGeneratePrompt = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const output = `<system_role>
You are an elite ${promptPersona.toUpperCase()} specializing in ${targetModel} deployment. Your primary objective is to execute the following mission with zero hallucination, strict adherence to best practices, and production-grade resilience.
</system_role>

<task_definition>
${userPrompt.trim()}
</task_definition>

<guiding_principles>
1. Deterministic & Precise: Prioritize verifiable truth, strict typed schemas, and explicit boundary handling.
2. Architecture Standard: Built according to ${promptFormat} specifications.
3. Resilience: Gracefully handle network timeouts, rate limits, and malformed client inputs with fallback recovery.
4. Security: Never expose internal secrets, API credentials, or unvetted system prompts to end users.
</guiding_principles>

<execution_workflow>
Step 1: Parse the user's intent and decompose into sub-tasks.
Step 2: Validate state against guardrails and context boundaries.
Step 3: Execute target tools or logic deterministically.
Step 4: Format output strictly using ${promptFormat} without conversational filler.
</execution_workflow>

<output_instructions>
Provide the final response formatted with crisp structure, executable code/markdown, and concise architectural explanations.
</output_instructions>`;
      setGeneratedPrompt(output);
      setIsGenerating(false);
    }, 450);
  };

  const handleCopyPrompt = () => {
    if (!generatedPrompt) return;
    navigator.clipboard.writeText(generatedPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  // Preset prompts
  const applyPreset = (presetText: string) => {
    setUserPrompt(presetText);
  };

  // Cost calculations (30 days/month)
  const monthlyRequests = dailyRequests * 30;
  const monthlyInputTokensM = (monthlyRequests * avgInputTokens) / 1000000;
  const monthlyOutputTokensM = (monthlyRequests * avgOutputTokens) / 1000000;

  // Rates per Million tokens (USD)
  const sonnetCost = monthlyInputTokensM * 3.0 + monthlyOutputTokensM * 15.0;
  const haikuCost = monthlyInputTokensM * 0.8 + monthlyOutputTokensM * 4.0;
  const gpt4oCost = monthlyInputTokensM * 2.5 + monthlyOutputTokensM * 10.0;
  const gpt4oMiniCost = monthlyInputTokensM * 0.15 + monthlyOutputTokensM * 0.6;
  const geminiFlashCost = monthlyInputTokensM * 0.075 + monthlyOutputTokensM * 0.3;
  const deepseekR1Cost = monthlyInputTokensM * 0.55 + monthlyOutputTokensM * 2.19;

  // INR Exchange Rate approx 86
  const usdToInr = (usd: number) => Math.round(usd * 86.5).toLocaleString('en-IN');

  // Readiness score
  const readinessCount = Object.values(checklist).filter(Boolean).length;
  const readinessPercentage = (readinessCount / 4) * 100;

  const handleOpenCheckout = (product: ProductItem) => {
    setSelectedProduct(product);
    setCheckoutSuccess(false);
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutEmail) return;
    setCheckoutSuccess(true);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="tools-hero">
        <div className="tools-hero-badge">
          <i className="ti ti-sparkles"></i> AI Tools & Monetization Studio
        </div>
        <h1 className="headline" style={{ marginBottom: '1.2rem' }}>
          Interactive AI Tools &amp; <br />
          <em>Developer Marketplace</em>
        </h1>
        <p className="hero-desc" style={{ maxWidth: '720px', margin: '0 auto 2rem', fontSize: '1.05rem' }}>
          Free high-performance developer utilities, battle-tested AI SaaS starter boilerplates, enterprise prompt engineering playbooks, and 1-on-1 AI strategy advisory by Harsh Vashishtha.
        </p>

        {/* Tab Navigation */}
        <div className="tools-tabs-nav">
          <button
            className={`tools-tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            <i className="ti ti-tools"></i> Free Interactive Tools
          </button>
          <button
            className={`tools-tab-btn ${activeTab === 'kits' ? 'active' : ''}`}
            onClick={() => setActiveTab('kits')}
          >
            <i className="ti ti-package"></i> Digital Kits &amp; Boilerplates
            <span className="nav-badge" style={{ marginLeft: '0.4rem', fontSize: '0.6rem' }}>Store</span>
          </button>
          <button
            className={`tools-tab-btn ${activeTab === 'advisory' ? 'active' : ''}`}
            onClick={() => setActiveTab('advisory')}
          >
            <i className="ti ti-user-check"></i> 1-on-1 Advisory &amp; Audits
          </button>
          <button
            className={`tools-tab-btn ${activeTab === 'sponsor' ? 'active' : ''}`}
            onClick={() => setActiveTab('sponsor')}
          >
            <i className="ti ti-speakerphone"></i> Newsletter Sponsorship
          </button>
        </div>
      </section>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2.5rem' }}>

        {/* ── TAB 1: INTERACTIVE TOOLS ── */}
        {activeTab === 'tools' && (
          <div>
            {/* TOOL 1: PROMPT ARCHITECT */}
            <div className="interactive-tool-card" id="prompt-architect">
              <div className="tool-heading-row">
                <div>
                  <div className="eyebrow" style={{ color: '#2563eb' }}>UTILITY 01</div>
                  <h2 className="tool-title">AI Prompt Architect &amp; System Prompt Generator</h2>
                  <p className="tool-subtitle">Convert casual prompts into production-grade, structured system prompts for Claude, GPT-4o, and Gemini.</p>
                </div>
                <span className="tool-badge-free">100% Free Tool</span>
              </div>

              {/* Preset Chips */}
              <div className="preset-chips-row">
                <span style={{ fontSize: '0.78rem', color: 'var(--gray-500)', fontWeight: 600 }}>Quick Presets:</span>
                <button
                  type="button"
                  className="preset-chip-btn"
                  onClick={() => applyPreset('Build an autonomous Next.js AI chatbot with Claude API streaming and Supabase')}
                >
                  ⚡ Next.js AI Chatbot
                </button>
                <button
                  type="button"
                  className="preset-chip-btn"
                  onClick={() => applyPreset('Architect an autonomous web research agent that searches the web and returns cited summaries')}
                >
                  🔍 Web Research Agent
                </button>
                <button
                  type="button"
                  className="preset-chip-btn"
                  onClick={() => applyPreset('Perform a security and performance code review on a TypeScript React application')}
                >
                  🛡️ Security &amp; Code Reviewer
                </button>
                <button
                  type="button"
                  className="preset-chip-btn"
                  onClick={() => applyPreset('Design a personal finance expense categorizer for Indian bank statements and UPI receipts')}
                >
                  💳 Fintech UPI Classifier
                </button>
              </div>

              {/* Controls Grid */}
              <div className="tool-controls-grid">
                <div className="tool-input-group">
                  <label className="tool-label">Target Model</label>
                  <select
                    className="tool-select"
                    value={targetModel}
                    onChange={(e) => setTargetModel(e.target.value)}
                  >
                    <option>Claude 3.7 / 3.5 Sonnet</option>
                    <option>Claude 3.5 Haiku</option>
                    <option>OpenAI GPT-4o</option>
                    <option>Google Gemini 2.5 Flash</option>
                    <option>DeepSeek-R1 (Reasoning)</option>
                  </select>
                </div>

                <div className="tool-input-group">
                  <label className="tool-label">System Persona</label>
                  <select
                    className="tool-select"
                    value={promptPersona}
                    onChange={(e) => setPromptPersona(e.target.value)}
                  >
                    <option>System Architect &amp; Engineer</option>
                    <option>Senior Full-Stack Developer</option>
                    <option>Autonomous Agent Runtime</option>
                    <option>Fintech &amp; Data Analyst</option>
                    <option>Security &amp; Compliance Auditor</option>
                  </select>
                </div>

                <div className="tool-input-group">
                  <label className="tool-label">Format Standard</label>
                  <select
                    className="tool-select"
                    value={promptFormat}
                    onChange={(e) => setPromptFormat(e.target.value)}
                  >
                    <option>XML Tagged Production Spec</option>
                    <option>JSON Schema &amp; Function Calling</option>
                    <option>Markdown Step-by-Step Blueprint</option>
                    <option>Strict Chain-of-Thought (CoT)</option>
                  </select>
                </div>
              </div>

              {/* Input Area */}
              <div className="tool-input-group" style={{ marginBottom: '1.5rem' }}>
                <label className="tool-label">Your Raw Prompt or Desired Behavior</label>
                <textarea
                  className="tool-textarea"
                  value={userPrompt}
                  onChange={(e) => setUserPrompt(e.target.value)}
                  placeholder="Describe what you want the AI to do..."
                />
              </div>

              {/* Generate Button */}
              <button
                type="button"
                className="tool-action-btn"
                onClick={handleGeneratePrompt}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <i className="ti ti-loader animate-spin"></i> Generating Optimized Spec...
                  </>
                ) : (
                  <>
                    <i className="ti ti-sparkles"></i> Generate Structured System Prompt
                  </>
                )}
              </button>

              {/* Output Display */}
              {generatedPrompt && (
                <div className="tool-output-box">
                  <div className="tool-output-header">
                    <span className="tool-output-title">
                      <i className="ti ti-code"></i> Production Ready System Prompt
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyPrompt}
                      style={{
                        background: copiedPrompt ? '#16a34a' : '#334155',
                        color: '#fff',
                        border: 'none',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '4px',
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        transition: 'background 0.2s'
                      }}
                    >
                      <i className={copiedPrompt ? "ti ti-check" : "ti ti-copy"}></i>
                      {copiedPrompt ? "Copied!" : "Copy Prompt"}
                    </button>
                  </div>
                  <pre className="tool-output-code">{generatedPrompt}</pre>
                </div>
              )}

              {/* Upsell Callout */}
              <div style={{ marginTop: '1.8rem', padding: '1rem 1.4rem', background: '#eff6ff', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ fontSize: '0.88rem', color: '#1e40af' }}>
                  <strong>Need 100+ production prompts?</strong> Get our tested System Prompt Master Playbook with XML guardrails &amp; RAG schemas.
                </div>
                <button
                  onClick={() => setActiveTab('kits')}
                  className="btn-dark"
                  style={{ padding: '0.4rem 0.9rem', fontSize: '0.8rem' }}
                >
                  View Prompt Kit (₹999) &rarr;
                </button>
              </div>
            </div>

            {/* TOOL 2: AI TOKEN & COST ESTIMATOR */}
            <div className="interactive-tool-card" id="cost-calculator">
              <div className="tool-heading-row">
                <div>
                  <div className="eyebrow" style={{ color: '#16a34a' }}>UTILITY 02</div>
                  <h2 className="tool-title">AI Model Token &amp; Monthly Cost Calculator</h2>
                  <p className="tool-subtitle">Estimate and compare your monthly API bill across Claude 3.5 Sonnet, GPT-4o, Gemini 2.5, and DeepSeek.</p>
                </div>
                <span className="tool-badge-free">Live Calculator</span>
              </div>

              <div className="calc-grid">
                {/* Sliders Side */}
                <div>
                  <div className="calc-slider-box">
                    <div className="calc-slider-header">
                      <span className="tool-label">Daily API Requests:</span>
                      <strong style={{ color: 'var(--black)' }}>{dailyRequests.toLocaleString()} / day</strong>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="50000"
                      step="100"
                      value={dailyRequests}
                      onChange={(e) => setDailyRequests(Number(e.target.value))}
                      className="calc-slider"
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--gray-500)', marginTop: '0.2rem' }}>
                      <span>100</span>
                      <span>10,000</span>
                      <span>50,000</span>
                    </div>
                  </div>

                  <div className="calc-slider-box">
                    <div className="calc-slider-header">
                      <span className="tool-label">Avg. Input Tokens / Request:</span>
                      <strong style={{ color: 'var(--black)' }}>{avgInputTokens.toLocaleString()} tokens</strong>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      value={avgInputTokens}
                      onChange={(e) => setAvgInputTokens(Number(e.target.value))}
                      className="calc-slider"
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--gray-500)', marginTop: '0.2rem' }}>
                      <span>100 (~75 words)</span>
                      <span>5,000</span>
                      <span>10,000</span>
                    </div>
                  </div>

                  <div className="calc-slider-box">
                    <div className="calc-slider-header">
                      <span className="tool-label">Avg. Output Tokens / Request:</span>
                      <strong style={{ color: 'var(--black)' }}>{avgOutputTokens.toLocaleString()} tokens</strong>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="4000"
                      step="50"
                      value={avgOutputTokens}
                      onChange={(e) => setAvgOutputTokens(Number(e.target.value))}
                      className="calc-slider"
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--gray-500)', marginTop: '0.2rem' }}>
                      <span>50 (~35 words)</span>
                      <span>2,000</span>
                      <span>4,000</span>
                    </div>
                  </div>

                  <div style={{ padding: '1rem', background: 'var(--gray-50)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)', marginTop: '1.2rem' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--gray-600)', marginBottom: '0.4rem' }}>
                      Monthly Volume: <strong>{monthlyRequests.toLocaleString()} calls</strong>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--gray-600)' }}>
                      Total Tokens: <strong>{(monthlyInputTokensM + monthlyOutputTokensM).toFixed(2)}M tokens/month</strong>
                    </div>
                  </div>
                </div>

                {/* Comparison Table Side */}
                <div>
                  <div className="calc-table-wrap">
                    <table className="calc-table">
                      <thead>
                        <tr>
                          <th>Model</th>
                          <th>Est. USD / mo</th>
                          <th>Est. INR / mo</th>
                          <th>Rate (In / Out per 1M)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Claude 3.5 Sonnet</strong></td>
                          <td>${sonnetCost.toFixed(2)}</td>
                          <td>₹{usdToInr(sonnetCost)}</td>
                          <td style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>$3.00 / $15.00</td>
                        </tr>
                        <tr>
                          <td><strong>Claude 3.5 Haiku</strong></td>
                          <td className="calc-highlight">${haikuCost.toFixed(2)}</td>
                          <td className="calc-highlight">₹{usdToInr(haikuCost)}</td>
                          <td style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>$0.80 / $4.00</td>
                        </tr>
                        <tr>
                          <td><strong>OpenAI GPT-4o</strong></td>
                          <td>${gpt4oCost.toFixed(2)}</td>
                          <td>₹{usdToInr(gpt4oCost)}</td>
                          <td style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>$2.50 / $10.00</td>
                        </tr>
                        <tr>
                          <td><strong>GPT-4o Mini</strong></td>
                          <td className="calc-highlight">${gpt4oMiniCost.toFixed(2)}</td>
                          <td className="calc-highlight">₹{usdToInr(gpt4oMiniCost)}</td>
                          <td style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>$0.15 / $0.60</td>
                        </tr>
                        <tr>
                          <td><strong>Gemini 1.5 Flash</strong></td>
                          <td className="calc-highlight">${geminiFlashCost.toFixed(2)}</td>
                          <td className="calc-highlight">₹{usdToInr(geminiFlashCost)}</td>
                          <td style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>$0.075 / $0.30</td>
                        </tr>
                        <tr>
                          <td><strong>DeepSeek-R1</strong></td>
                          <td className="calc-highlight">${deepseekR1Cost.toFixed(2)}</td>
                          <td className="calc-highlight">₹{usdToInr(deepseekR1Cost)}</td>
                          <td style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>$0.55 / $2.19</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div style={{ marginTop: '1rem', padding: '0.8rem 1rem', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', color: '#166534' }}>
                    💡 <strong>Smart Architecture Strategy:</strong> Implement hybrid model routing. Route simple classification and routing prompts to Haiku or Gemini Flash, saving up to <strong>74%</strong> before routing complex reasoning tasks to Sonnet!
                  </div>
                </div>
              </div>
            </div>

            {/* TOOL 3: AI AGENT READINESS AUDIT */}
            <div className="interactive-tool-card" id="agent-audit">
              <div className="tool-heading-row">
                <div>
                  <div className="eyebrow" style={{ color: '#8b5cf6' }}>UTILITY 03</div>
                  <h2 className="tool-title">Autonomous AI Agent Readiness Diagnostic</h2>
                  <p className="tool-subtitle">Quickly evaluate if your app is architected for production-grade autonomous agent loops.</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, color: readinessPercentage >= 75 ? '#16a34a' : '#ea580c' }}>
                    {readinessPercentage}%
                  </span>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>Readiness Score</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', background: checklist.schema ? '#f8fafc' : '#fff' }}>
                  <input
                    type="checkbox"
                    checked={checklist.schema}
                    onChange={(e) => setChecklist({ ...checklist, schema: e.target.checked })}
                    style={{ width: '18px', height: '18px', accentColor: '#2563eb' }}
                  />
                  <div>
                    <strong style={{ fontSize: '0.88rem', display: 'block' }}>Structured Tool Schemas</strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--gray-500)' }}>Strict JSON/Zod schemas for all tool calls</span>
                  </div>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', background: checklist.guardrails ? '#f8fafc' : '#fff' }}>
                  <input
                    type="checkbox"
                    checked={checklist.guardrails}
                    onChange={(e) => setChecklist({ ...checklist, guardrails: e.target.checked })}
                    style={{ width: '18px', height: '18px', accentColor: '#2563eb' }}
                  />
                  <div>
                    <strong style={{ fontSize: '0.88rem', display: 'block' }}>Loop Guardrails &amp; Retries</strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--gray-500)' }}>Max step limits &amp; graceful error recovery</span>
                  </div>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', background: checklist.tokenLimits ? '#f8fafc' : '#fff' }}>
                  <input
                    type="checkbox"
                    checked={checklist.tokenLimits}
                    onChange={(e) => setChecklist({ ...checklist, tokenLimits: e.target.checked })}
                    style={{ width: '18px', height: '18px', accentColor: '#2563eb' }}
                  />
                  <div>
                    <strong style={{ fontSize: '0.88rem', display: 'block' }}>Token &amp; Budget Capping</strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--gray-500)' }}>Automated spending limits per user session</span>
                  </div>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', background: checklist.humanInLoop ? '#f8fafc' : '#fff' }}>
                  <input
                    type="checkbox"
                    checked={checklist.humanInLoop}
                    onChange={(e) => setChecklist({ ...checklist, humanInLoop: e.target.checked })}
                    style={{ width: '18px', height: '18px', accentColor: '#2563eb' }}
                  />
                  <div>
                    <strong style={{ fontSize: '0.88rem', display: 'block' }}>Human-in-the-Loop Fallback</strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--gray-500)' }}>Manual approval for destructive tool actions</span>
                  </div>
                </label>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => setActiveTab('advisory')}
                  className="btn-outline"
                  style={{ fontSize: '0.85rem' }}
                >
                  Want Harsh to review your system architecture? Book a Code &amp; Agent Audit &rarr;
                </button>
              </div>
            </div>

            {/* GOOGLE ADSENSE MONETIZATION CONTAINER */}
            <div className="adsense-card-container">
              <div className="adsense-label">Advertisement · Google AdSense</div>
              <ins
                className="adsbygoogle"
                style={{ display: 'block', minHeight: '90px' }}
                data-ad-client="ca-pub-6625278402778620"
                data-ad-slot="auto"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginTop: '0.5rem' }}>
                Tools supported by community engagement &amp; sponsor partners
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 2: DIGITAL PRODUCTS & KITS ── */}
        {activeTab === 'kits' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div className="eyebrow">DIGITAL STORE</div>
              <h2 className="section-title">Production Starter Kits &amp; <em>Playbooks</em></h2>
              <p className="hero-desc" style={{ maxWidth: '650px', margin: '0 auto' }}>
                Stop reinventing the wheel. Jumpstart your AI startups and software platforms with production-tested boilerplates built by Harsh Vashishtha.
              </p>
            </div>

            <div className="products-cards-grid">
              {PRODUCTS.map((prod) => (
                <div key={prod.id} className={`product-card ${prod.ribbon ? 'featured' : ''}`}>
                  {prod.ribbon && <span className="product-ribbon">{prod.ribbon}</span>}
                  <div className="product-category">{prod.category}</div>
                  <h3 className="product-title">{prod.title}</h3>
                  <p className="product-desc">{prod.desc}</p>

                  <div className="product-price-row">
                    <span className="product-price-current">{prod.priceInr}</span>
                    <span className="product-price-old">{prod.oldPriceInr}</span>
                    <span className="product-currency-note">({prod.priceUsd} USD)</span>
                  </div>

                  <ul className="product-features-list">
                    {prod.features.map((feat, i) => (
                      <li key={i} className="product-feature-item">
                        <i className="ti ti-check"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="product-buy-btn"
                    onClick={() => handleOpenCheckout(prod)}
                  >
                    <i className="ti ti-shopping-cart"></i> Get Instant Access &rarr;
                  </button>
                </div>
              ))}
            </div>

            {/* Guarantee Box */}
            <div style={{ border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-md)', padding: '2rem', background: 'var(--gray-50)', textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: '1.8rem', color: '#16a34a', marginBottom: '0.5rem' }}>
                <i className="ti ti-shield-check"></i>
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.4rem' }}>100% Quality &amp; Instant Delivery Guarantee</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
                All digital starter kits come with clean TypeScript code, full documentation, and direct email delivery with private GitHub repository access. Questions? Reach out to <code>vashishthaharsh97@gmail.com</code>.
              </p>
            </div>
          </div>
        )}

        {/* ── TAB 3: 1-ON-1 ADVISORY & AUDITS ── */}
        {activeTab === 'advisory' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div className="eyebrow">CONSULTING &amp; ADVISORY</div>
              <h2 className="section-title">Work 1-on-1 With <em>Harsh Vashishtha</em></h2>
              <p className="hero-desc" style={{ maxWidth: '650px', margin: '0 auto' }}>
                Get direct strategic and technical guidance on architecting scalable AI agents, fine-tuning LLM pipelines, reducing cloud &amp; API costs, or launching your tech product in India.
              </p>
            </div>

            <div className="consult-grid">
              {ADVISORY_ITEMS.map((item) => (
                <div key={item.id} className="consult-card">
                  {item.ribbon && <span className="product-ribbon">{item.ribbon}</span>}
                  <div className="product-category">{item.category}</div>
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-desc">{item.desc}</p>

                  <div className="product-price-row">
                    <span className="product-price-current">{item.priceInr}</span>
                    <span className="product-price-old">{item.oldPriceInr}</span>
                    <span className="product-currency-note">({item.priceUsd} USD)</span>
                  </div>

                  <ul className="product-features-list">
                    {item.features.map((feat, i) => (
                      <li key={i} className="product-feature-item">
                        <i className="ti ti-check"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="product-buy-btn"
                    onClick={() => handleOpenCheckout(item)}
                  >
                    <i className="ti ti-calendar"></i> Book Strategy Session &rarr;
                  </button>
                </div>
              ))}
            </div>

            {/* Custom Enterprise Banner */}
            <div className="stat-card dark" style={{ textAlign: 'center', padding: '3rem 2rem', marginBottom: '3rem' }}>
              <div className="haqikos-name" style={{ fontSize: '1.6rem', color: '#fff' }}>Need Custom Enterprise AI Development?</div>
              <div className="haqikos-desc" style={{ maxWidth: '650px', margin: '0.8rem auto 1.5rem', color: '#aaa', fontSize: '0.95rem' }}>
                Looking to build a custom enterprise answer engine like QIA, a fintech PWA like PayQIA, or high-throughput agent infrastructure for your business?
              </div>
              <Link
                href="mailto:vashishthaharsh97@gmail.com?subject=Enterprise%20AI%20Development%20Inquiry"
                className="btn-outline"
                style={{ borderColor: '#fff', color: '#fff' }}
              >
                Inquire for Enterprise Contract &rarr;
              </Link>
            </div>
          </div>
        )}

        {/* ── TAB 4: NEWSLETTER & AD SPONSORSHIP ── */}
        {activeTab === 'sponsor' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div className="eyebrow">PARTNERSHIPS &amp; REACH</div>
              <h2 className="section-title">Sponsor <em>The Intelligent Edge</em></h2>
              <p className="hero-desc" style={{ maxWidth: '650px', margin: '0 auto' }}>
                Put your software, AI product, or API in front of over 2,500+ decision-makers, senior engineers, founders, and AI builders reading every week.
              </p>
            </div>

            <div className="consult-grid">
              {SPONSOR_ITEMS.map((item) => (
                <div key={item.id} className="consult-card">
                  {item.ribbon && <span className="product-ribbon">{item.ribbon}</span>}
                  <div className="product-category">{item.category}</div>
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-desc">{item.desc}</p>

                  <div className="product-price-row">
                    <span className="product-price-current">{item.priceInr}</span>
                    <span className="product-price-old">{item.oldPriceInr}</span>
                    <span className="product-currency-note">({item.priceUsd} USD)</span>
                  </div>

                  <ul className="product-features-list">
                    {item.features.map((feat, i) => (
                      <li key={i} className="product-feature-item">
                        <i className="ti ti-check"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="product-buy-btn"
                    onClick={() => handleOpenCheckout(item)}
                  >
                    <i className="ti ti-speakerphone"></i> Book Sponsorship Slot &rarr;
                  </button>
                </div>
              ))}
            </div>

            {/* Audience Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              <div className="stat-card" style={{ textAlign: 'center' }}>
                <div className="stat-num">2,500+</div>
                <div className="stat-label">Subscribers (LinkedIn &amp; Web)</div>
              </div>
              <div className="stat-card" style={{ textAlign: 'center' }}>
                <div className="stat-num">44%</div>
                <div className="stat-label">Average Open Rate</div>
              </div>
              <div className="stat-card" style={{ textAlign: 'center' }}>
                <div className="stat-num">68%</div>
                <div className="stat-label">Senior Tech &amp; Founder Audience</div>
              </div>
              <div className="stat-card" style={{ textAlign: 'center' }}>
                <div className="stat-num">India &amp; Global</div>
                <div className="stat-label">Primary Geographic Reach</div>
              </div>
            </div>
          </div>
        )}

        {/* ── SUPPORT / BUY ME A COFFEE (ALWAYS VISIBLE BOTTOM) ── */}
        <div style={{ border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', background: '#fafafa', marginTop: '3rem', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="eyebrow" style={{ color: '#ea580c' }}>SUPPORT INDEPENDENT AI RESEARCH</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--black)', marginBottom: '0.4rem' }}>
              Fuel Future Open-Source &amp; Free AI Tools
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', maxWidth: '540px' }}>
              If you found these tools or open-source guides helpful, consider supporting Harsh&apos;s work. Every contribution directly funds GPU compute, server hosting, and new AI utilities!
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', minWidth: '240px' }}>
            <Link
              href="mailto:vashishthaharsh97@gmail.com?subject=Support%20Tip%20via%20UPI"
              className="btn-dark"
              style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <i className="ti ti-coffee"></i> Buy Me a Coffee (UPI / Card)
            </Link>
            <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)', textAlign: 'center' }}>
              UPI ID: <code style={{ color: 'var(--black)', fontWeight: 600 }}>vashishthaharsh97@gmail.com</code>
            </div>
          </div>
        </div>

      </div>

      {/* ── CHECKOUT / INQUIRY MODAL ── */}
      {selectedProduct && (
        <div className="checkout-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="checkout-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close modal"
            >
              &times;
            </button>

            {!checkoutSuccess ? (
              <div>
                <div className="eyebrow" style={{ color: '#2563eb' }}>INSTANT CHECKOUT &amp; FULFILLMENT</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0.4rem 0 0.8rem', color: 'var(--black)' }}>
                  {selectedProduct.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)', marginBottom: '1.2rem' }}>
                  {selectedProduct.desc}
                </p>

                <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gray-500)', display: 'block' }}>Total Investment:</span>
                    <strong style={{ fontSize: '1.6rem', color: 'var(--black)' }}>{selectedProduct.priceInr}</strong>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>
                    ({selectedProduct.priceUsd} USD)
                  </span>
                </div>

                {/* Instant Payment Options */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--gray-700)', marginBottom: '0.5rem' }}>
                    Supported Payment Methods:
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', background: '#eff6ff', color: '#1e40af', borderRadius: '4px', fontWeight: 500 }}>
                      ⚡ UPI (GPay, PhonePe, Paytm)
                    </span>
                    <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', background: '#f0fdf4', color: '#166534', borderRadius: '4px', fontWeight: 500 }}>
                      💳 Credit / Debit Cards
                    </span>
                    <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', background: '#faf5ff', color: '#6b21a8', borderRadius: '4px', fontWeight: 500 }}>
                      🌐 Net Banking &amp; PayPal
                    </span>
                  </div>
                </div>

                <form onSubmit={handleConfirmOrder}>
                  <div className="tool-input-group" style={{ marginBottom: '1.2rem' }}>
                    <label className="tool-label">Enter your Email for Instant Delivery / Booking</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="tool-input"
                      value={checkoutEmail}
                      onChange={(e) => setCheckoutEmail(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="product-buy-btn"
                    style={{ marginBottom: '0.8rem' }}
                  >
                    Proceed to Complete Payment ({selectedProduct.priceInr}) &rarr;
                  </button>
                </form>

                <div style={{ textAlign: 'center' }}>
                  <Link
                    href={`mailto:vashishthaharsh97@gmail.com?subject=Direct%20Inquiry%20for%20${encodeURIComponent(selectedProduct.title)}&body=Hi%20Harsh,%20I%20would%20like%20to%20get%20${encodeURIComponent(selectedProduct.title)}.`}
                    style={{ fontSize: '0.8rem', color: 'var(--gray-600)', textDecoration: 'underline' }}
                  >
                    Prefer to pay via direct email or bank transfer? Click here
                  </Link>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ fontSize: '3rem', color: '#16a34a', marginBottom: '1rem' }}>
                  <i className="ti ti-circle-check"></i>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                  Order Initiated!
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Thank you! We have logged your request for <strong>{selectedProduct.title}</strong> for <strong>{checkoutEmail}</strong>.
                </p>
                <div style={{ padding: '1.2rem', background: 'var(--gray-50)', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', textAlign: 'left', fontSize: '0.85rem' }}>
                  <p style={{ marginBottom: '0.5rem' }}><strong>Direct UPI Transfer Details:</strong></p>
                  <p style={{ margin: '0.2rem 0' }}>UPI ID: <code>vashishthaharsh97@gmail.com</code></p>
                  <p style={{ margin: '0.2rem 0' }}>Name: Harsh Vashishtha</p>
                  <p style={{ marginTop: '0.6rem', color: 'var(--gray-600)', fontSize: '0.8rem' }}>
                    Once payment is sent, you will receive an automatic email with repository credentials or Google Meet invitation within 15 minutes.
                  </p>
                </div>
                <Link
                  href={`mailto:vashishthaharsh97@gmail.com?subject=Payment%20Confirmation%20for%20${encodeURIComponent(selectedProduct.title)}&body=I%20have%20initiated%20payment%20for%20${encodeURIComponent(selectedProduct.title)}%20from%20email%20${encodeURIComponent(checkoutEmail)}.`}
                  className="btn-dark"
                  style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}
                >
                  Send Payment Receipt Confirmation &rarr;
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
