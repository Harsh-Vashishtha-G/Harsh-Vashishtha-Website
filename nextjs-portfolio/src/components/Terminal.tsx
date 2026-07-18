"use client";

import React, { useState, useRef, useEffect } from 'react';

type OutputLine = {
  type: 'command' | 'output' | 'error';
  content: React.ReactNode;
};

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<OutputLine[]>([
    { type: 'output', content: 'Welcome to HV Terminal v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.' }
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (history.length > 2) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setHistory((prev) => [...prev, { type: 'command', content: trimmed }]);

    const lowerCmd = trimmed.toLowerCase();
    
    let output: React.ReactNode = '';
    let isError = false;

    switch (lowerCmd) {
      case 'help':
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            <span>Available commands:</span>
            <span>  whoami   - Display bio information</span>
            <span>  skills   - List technical skills</span>
            <span>  clear    - Clear terminal output</span>
            <span>  resume   - Download resume</span>
          </div>
        );
        break;
      case 'whoami':
        output = 'Harsh Vashishtha. Cloud Engineer, AI Builder, and Founder of Haqikos. Passionate about scalable systems and intelligent interfaces.';
        break;
      case 'skills':
        output = 'Cloud (AWS, Vercel), AI/LLMs (OpenAI, Anthropic), Full-Stack (Next.js, TypeScript, React), Databases (PostgreSQL, Prisma).';
        break;
      case 'resume':
        output = 'Downloading resume...';
        // Trigger download
        const a = document.createElement('a');
        a.href = '/assets/resume/Harsh%20Vashishtha%20-%20Resume.pdf';
        a.download = 'Harsh_Vashishtha_Resume.pdf';
        a.click();
        break;
      case 'clear':
        setHistory([]);
        return; // Don't add output
      default:
        output = `Command not found: ${trimmed}. Type "help" for a list of commands.`;
        isError = true;
    }

    setHistory((prev) => [...prev, { type: isError ? 'error' : 'output', content: output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid #333',
      fontFamily: '"JetBrains Mono", monospace, "Courier New"',
      fontSize: '0.9rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      width: '100%',
      maxWidth: '600px',
      margin: '2rem auto'
    }}>
      {/* Terminal Header */}
      <div style={{
        backgroundColor: '#2d2d2d',
        padding: '0.5rem 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        borderBottom: '1px solid #111'
      }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
        <span style={{ color: '#888', fontSize: '0.8rem', marginLeft: 'auto' }}>guest@hv-portfolio:~</span>
      </div>

      {/* Terminal Body */}
      <div style={{
        padding: '1rem',
        height: '300px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
        color: '#e0e0e0'
      }}>
        {history.map((line, i) => (
          <div key={i} style={{
            color: line.type === 'error' ? '#ff5f56' : line.type === 'command' ? '#27c93f' : '#e0e0e0',
            wordBreak: 'break-word'
          }}>
            {line.type === 'command' && <span style={{ color: '#ffbd2e', marginRight: '0.5rem' }}>$</span>}
            {line.content}
          </div>
        ))}
        
        {/* Input Line */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#ffbd2e', marginRight: '0.5rem' }}>$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#e0e0e0',
              fontFamily: 'inherit',
              fontSize: 'inherit'
            }}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={endRef} />
      </div>
    </div>
  );
}
