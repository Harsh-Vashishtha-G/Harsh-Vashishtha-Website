"use client";

import React, { useState, useRef, useEffect } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function HVChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm HV, an AI assistant trained on Harsh's resume and projects. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });
      
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply || "Sorry, I couldn't process that request." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Network error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      {isOpen && (
        <div 
          style={{ 
            width: '380px', 
            height: '550px', 
            marginBottom: '1rem',
            background: 'rgba(10, 10, 10, 0.85)', 
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px', 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(34, 197, 94, 0.1)',
            overflow: 'hidden',
            animation: 'chatFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            transformOrigin: 'bottom right'
          }}
        >
          {/* Header */}
          <div style={{ 
            padding: '1.2rem 1.5rem', 
            background: 'linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(30,30,30,0.9) 100%)',
            borderBottom: '1px solid rgba(255,255,255,0.05)', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ 
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--green), #10b981)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="ti ti-robot" style={{ color: '#000', fontSize: '1.2rem' }}></i>
                </div>
                <div style={{ position: 'absolute', bottom: -2, right: -2, width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981', border: '2px solid #1a1a1a' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <strong style={{ color: 'white', fontSize: '1.05rem', letterSpacing: '0.3px' }}>HV Assistant</strong>
                <span style={{ color: '#aaa', fontSize: '0.75rem' }}>AI Agent • Online</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              style={{ 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                color: '#aaa', 
                cursor: 'pointer', 
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#aaa'; }}
            >
              <i className="ti ti-x"></i>
            </button>
          </div>
          
          {/* Messages */}
          <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.2rem', scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ 
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                background: msg.role === 'user' 
                  ? 'linear-gradient(135deg, var(--green), #10b981)' 
                  : 'rgba(255,255,255,0.05)',
                color: msg.role === 'user' ? '#000' : '#f0f0f0',
                padding: '1rem 1.2rem',
                borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                maxWidth: '85%',
                fontSize: '0.95rem',
                lineHeight: '1.5',
                border: msg.role === 'user' ? 'none' : '1px solid rgba(255,255,255,0.08)',
                boxShadow: msg.role === 'user' ? '0 4px 15px rgba(34,197,94,0.2)' : 'none'
              }}>
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div style={{ 
                alignSelf: 'flex-start', 
                background: 'rgba(255,255,255,0.05)',
                padding: '0.8rem 1.2rem',
                borderRadius: '18px 18px 18px 4px',
                display: 'flex',
                gap: '4px',
                alignItems: 'center'
              }}>
                <div className="typing-dot"></div>
                <div className="typing-dot" style={{ animationDelay: '0.2s' }}></div>
                <div className="typing-dot" style={{ animationDelay: '0.4s' }}></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <form onSubmit={handleSubmit} style={{ padding: '1.2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '0.8rem', background: 'rgba(0,0,0,0.3)' }}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message HV..."
              style={{
                flex: 1,
                padding: '0.8rem 1.2rem',
                borderRadius: '100px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)',
                color: 'white',
                outline: 'none',
                fontSize: '0.95rem',
                transition: 'border 0.2s'
              }}
              onFocus={(e) => e.target.style.border = '1px solid var(--green)'}
              onBlur={(e) => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()} 
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                background: input.trim() ? 'var(--green)' : 'rgba(255,255,255,0.1)',
                color: input.trim() ? '#000' : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s'
              }}
            >
              <i className="ti ti-send" style={{ fontSize: '1.2rem', marginLeft: '2px' }}></i>
            </button>
          </form>
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes chatFadeIn {
              from { opacity: 0; transform: scale(0.9) translateY(20px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
            .typing-dot {
              width: 6px;
              height: 6px;
              background-color: #aaa;
              border-radius: 50%;
              animation: typingBounce 1.4s infinite ease-in-out both;
            }
            @keyframes typingBounce {
              0%, 80%, 100% { transform: scale(0); }
              40% { transform: scale(1); }
            }
          `}} />
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '65px',
          height: '65px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--green), #10b981)',
          color: '#000',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem',
          boxShadow: '0 8px 25px rgba(34, 197, 94, 0.4)',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: isOpen ? 'scale(0.9)' : 'scale(1)'
        }}
        onMouseEnter={(e) => { if (!isOpen) e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)'; }}
        onMouseLeave={(e) => { if (!isOpen) e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <i className={isOpen ? "ti ti-x" : "ti ti-message-chatbot"} style={{ transition: 'transform 0.3s', transform: isOpen ? 'rotate(90deg)' : 'rotate(0)' }}></i>
      </button>
    </div>
  );
}
