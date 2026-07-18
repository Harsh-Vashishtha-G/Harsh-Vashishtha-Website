'use client';

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

interface ChatSession {
  id: string;
  title: string;
  isStarred: boolean;
  projectId?: string;
  messages: Message[];
  updatedAt: number;
}

interface Project {
  id: string;
  name: string;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isStreaming?: boolean;
}



export function ChatComponent({ session }: { session?: any }) {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [chats, setChats] = useState<ChatSession[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([
    { id: 'p1', name: 'Research' },
    { id: 'p2', name: 'Code Generation' }
  ]);
  const [editingChatId, setEditingChatId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [menuOpenForId, setMenuOpenForId] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | null>(null);

  // Load from local storage on mount
  useEffect(() => {
    const savedChats = localStorage.getItem('qia_chats');
    if (savedChats) {
      try {
        setChats(JSON.parse(savedChats));
      } catch(e) {}
    }
  }, []);

  // Save to local storage when chats change
  useEffect(() => {
    if (chats.length > 0) {
      localStorage.setItem('qia_chats', JSON.stringify(chats));
    }
  }, [chats]);
  
  // When messages update, save to the active chat session
  useEffect(() => {
    if (activeChatId && messages.length > 0) {
      setChats(prev => prev.map(chat => 
        chat.id === activeChatId ? { ...chat, messages, updatedAt: Date.now(), title: chat.title === 'New Chat' ? messages[0].content.slice(0, 30) + '...' : chat.title } : chat
      ));
    } else if (!activeChatId && messages.length > 0) {
      // Create new chat
      const newChatId = Date.now().toString();
      setActiveChatId(newChatId);
      const newChat: ChatSession = {
        id: newChatId,
        title: messages[0].content.slice(0, 30) + '...',
        isStarred: false,
        messages,
        updatedAt: Date.now()
      };
      setChats(prev => [newChat, ...prev]);
    }
  }, [messages]);

  const loadChat = (chatId: string) => {
    const chat = chats.find(c => c.id === chatId);
    if (chat) {
      setActiveChatId(chatId);
      setMessages(chat.messages);
      setActiveSettingsView(null);
    }
  };

  const startNewChat = () => {
    setActiveChatId(null);
    setMessages([]);
    setActiveSettingsView(null);
  };
  
  const deleteChat = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setChats(prev => prev.filter(c => c.id !== id));
    if (activeChatId === id) {
      startNewChat();
    }
    setMenuOpenForId(null);
  };

  const toggleStar = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setChats(prev => prev.map(c => c.id === id ? { ...c, isStarred: !c.isStarred } : c));
    setMenuOpenForId(null);
  };

  const assignProject = (chatId: string, projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setChats(prev => prev.map(c => c.id === chatId ? { ...c, projectId } : c));
    setMenuOpenForId(null);
  };
  
  const handleRenameSubmit = (id: string) => {
    if (editTitle.trim()) {
      setChats(prev => prev.map(c => c.id === id ? { ...c, title: editTitle.trim() } : c));
    }
    setEditingChatId(null);
    setMenuOpenForId(null);
  };

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const [activeSettingsView, setActiveSettingsView] = useState<string | null>(null);
  const [agentMode, setAgentMode] = useState<'fast' | 'deep' | 'reason'>('fast');
  
  // Settings Form State
  const [fullName, setFullName] = useState('Harsh Vashishtha');
  const [username, setUsername] = useState('@harsh_qia');
  const [bio, setBio] = useState('Building QIA at Haqikos');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isTyping) return;

    setActiveSettingsView(null); // Ensure we switch to chat view when submitting

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input.trim() };
    const currentMessages = [...messages, userMsg];
    setMessages(currentMessages);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/qia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: currentMessages })
      });

      const data = await response.json();
      const fullResponse = data.reply || "Sorry, I encountered an error.";

      const assistantMsgId = (Date.now() + 1).toString();
      
      setMessages(prev => [
        ...prev, 
        { id: assistantMsgId, role: 'assistant', content: '', isStreaming: true }
      ]);

      let i = 0;
      const interval = setInterval(() => {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === assistantMsgId 
              ? { ...msg, content: fullResponse.slice(0, i + 1) } 
              : msg
          )
        );
        i++;
        if (i === fullResponse.length) {
          clearInterval(interval);
          setMessages(prev => 
            prev.map(msg => 
              msg.id === assistantMsgId 
                ? { ...msg, isStreaming: false } 
                : msg
            )
          );
          setIsTyping(false);
        }
      }, 15);

    } catch (error) {
      console.error(error);
      setIsTyping(false);
    }
  };

  const handleSidebarClick = (view: string) => {
    setActiveSettingsView(view);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#030303',
      color: '#fff',
      zIndex: 99999,
      display: 'flex',
      fontFamily: 'var(--font-inter), sans-serif',
      overflow: 'hidden'
    }}>
      <Head>
        <title>QIA Orchestrator | Harsh Vashishtha</title>
      </Head>

      {/* SIDEBAR */}
      <div style={{
        width: isSidebarOpen ? '280px' : '0px',
        height: '100vh',
        backgroundColor: '#0a0a0a',
        borderRight: isSidebarOpen ? '1px solid #1f1f1f' : 'none',
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0
      }}>
        {isSidebarOpen && (
          <div style={{ padding: '1rem 0.8rem', display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', padding: '0 0.5rem' }}>
              <div onClick={() => setActiveSettingsView(null)} style={{ cursor: 'pointer', fontFamily: 'var(--font-inter), sans-serif' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: '500', color: '#e8e8e8', letterSpacing: '-0.5px' }}>QIA</div>
              </div>
              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <button style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="ti ti-search" style={{ fontSize: '1.1rem' }}></i>
                </button>
                <button onClick={() => setIsSidebarOpen(false)} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="ti ti-layout-sidebar" style={{ fontSize: '1.1rem' }}></i>
                </button>
              </div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div onClick={startNewChat} style={{ padding: '0.6rem 0.8rem', color: '#e8e8e8', borderRadius: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', transition: 'background 0.2s', background: (!activeSettingsView && !activeChatId && messages.length === 0) ? '#222' : 'transparent' }}>
                <div style={{ background: '#333', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="ti ti-plus" style={{ fontSize: '0.9rem', color: '#e8e8e8' }}></i>
                </div> 
                <span style={{ fontSize: '0.95rem' }}>New chat</span>
              </div>
              


              <div onClick={() => handleSidebarClick('projects')} style={{ padding: '0.6rem 0.8rem', color: activeSettingsView === 'projects' ? '#e8e8e8' : '#a0a0a0', background: activeSettingsView === 'projects' ? '#222' : 'transparent', borderRadius: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', transition: 'background 0.2s' }}>
                <i className="ti ti-folder" style={{ fontSize: '1.1rem' }}></i> 
                <span style={{ fontSize: '0.95rem' }}>Projects</span>
              </div>
              
              <div onClick={() => handleSidebarClick('artifacts')} style={{ padding: '0.6rem 0.8rem', color: activeSettingsView === 'artifacts' ? '#e8e8e8' : '#a0a0a0', background: activeSettingsView === 'artifacts' ? '#222' : 'transparent', borderRadius: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', transition: 'background 0.2s' }}>
                <i className="ti ti-box-multiple" style={{ fontSize: '1.1rem' }}></i> 
                <span style={{ fontSize: '0.95rem' }}>Artifacts</span>
              </div>
              
              <div style={{ padding: '0.6rem 0.8rem', color: '#555', borderRadius: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'not-allowed' }}>
                <i className="ti ti-code" style={{ fontSize: '1.1rem' }}></i> 
                <span style={{ fontSize: '0.95rem' }}>Code</span>
                <span style={{ marginLeft: 'auto', fontSize: '0.7rem', padding: '0.1rem 0.5rem', border: '1px solid #333', borderRadius: '1rem', color: '#888' }}>Upgrade</span>
              </div>
              
              <div onClick={() => handleSidebarClick('profile')} style={{ padding: '0.6rem 0.8rem', color: activeSettingsView === 'profile' ? '#e8e8e8' : '#a0a0a0', borderRadius: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', background: activeSettingsView === 'profile' ? '#222' : 'transparent', transition: 'background 0.2s' }}>
                <i className="ti ti-briefcase" style={{ fontSize: '1.1rem' }}></i> 
                <span style={{ fontSize: '0.95rem' }}>Customize</span>
              </div>

              <div style={{ marginTop: '1.5rem', marginBottom: '0.2rem', padding: '0 0.8rem', fontSize: '0.8rem', color: '#666' }}>
                Products
              </div>
              
              <div onClick={() => handleSidebarClick('design')} style={{ padding: '0.6rem 0.8rem', color: activeSettingsView === 'design' ? '#e8e8e8' : '#a0a0a0', background: activeSettingsView === 'design' ? '#222' : 'transparent', borderRadius: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', transition: 'background 0.2s' }}>
                <i className="ti ti-palette" style={{ fontSize: '1.1rem' }}></i> 
                <span style={{ fontSize: '0.95rem' }}>Design</span>
              </div>
              
              <div style={{ padding: '0.6rem 0.8rem', color: '#a0a0a0', borderRadius: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', transition: 'background 0.2s', marginTop: 'auto' }}>
                <i className="ti ti-messages" style={{ fontSize: '1.1rem' }}></i> 
                <span style={{ fontSize: '0.95rem' }}>Chats</span>
              </div>

              {/* CHATS LIST */}
              <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2px', paddingLeft: '0.5rem' }}>
                {chats.map(chat => (
                  <div 
                    key={chat.id} 
                    onClick={() => loadChat(chat.id)}
                    style={{ padding: '0.5rem 0.8rem', color: activeChatId === chat.id ? '#fff' : '#a0a0a0', background: activeChatId === chat.id ? '#222' : 'transparent', borderRadius: '0.4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', fontSize: '0.85rem', position: 'relative' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden', flex: 1 }}>
                      {chat.isStarred && <i className="ti ti-star-filled" style={{ color: '#fbbf24', fontSize: '0.9rem' }}></i>}
                      {editingChatId === chat.id ? (
                        <input
                          autoFocus
                          value={editTitle}
                          onChange={e => setEditTitle(e.target.value)}
                          onBlur={() => handleRenameSubmit(chat.id)}
                          onKeyDown={e => e.key === 'Enter' && handleRenameSubmit(chat.id)}
                          onClick={e => e.stopPropagation()}
                          style={{ background: 'transparent', border: 'none', color: '#fff', outline: 'none', width: '100%' }}
                        />
                      ) : (
                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{chat.title}</span>
                      )}
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          if (menuOpenForId === chat.id) {
                            setMenuOpenForId(null);
                            setMenuPosition(null);
                          } else {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setMenuPosition({ top: rect.bottom + 4, left: rect.left - 140 });
                            setMenuOpenForId(chat.id);
                          }
                        }}
                        style={{ background: 'transparent', border: 'none', color: '#888', cursor: 'pointer', padding: '0.2rem' }}
                      >
                        <i className="ti ti-dots"></i>
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Footer Area */}
            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              <div onClick={() => handleSidebarClick('profile')} style={{ padding: '0.6rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', borderRadius: '0.4rem', transition: 'background 0.2s' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '4px', background: '#ddd', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  {session?.user?.user_metadata?.full_name?.[0] || 'H'}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#e8e8e8', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {session?.user?.user_metadata?.full_name || 'Harsh Vashishtha'}
                </div>
              </div>
              <div onClick={async () => {
                await supabase.auth.signOut();
                window.location.reload();
              }} style={{ padding: '0.6rem 0.8rem', color: '#888', display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', fontSize: '0.9rem' }}>
                <i className="ti ti-logout" style={{ fontSize: '1.1rem' }}></i> Log Out
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MAIN CONTENT AREA */}
      <div style={{
        flex: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: activeSettingsView ? 'none' : 'radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.05), transparent 70%), linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
        backgroundColor: '#030303',
        backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        backgroundPosition: 'center center',
        overflowY: 'auto'
      }}>
        {/* Top Navbar */}
        <div style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
          {!isSidebarOpen ? (
            <button onClick={() => setIsSidebarOpen(true)} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem', color: '#aaa', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>
              <i className="ti ti-settings" style={{ fontSize: '1.2rem' }}></i>
            </button>
          ) : <div></div>}
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            {messages.length > 0 && !activeSettingsView && (
              <button onClick={() => setIsCanvasOpen(!isCanvasOpen)} style={{ fontSize: '0.85rem', color: isCanvasOpen ? '#fff' : '#888', background: isCanvasOpen ? 'rgba(37, 99, 235, 0.2)' : 'rgba(255,255,255,0.05)', border: `1px solid ${isCanvasOpen ? 'rgba(37,99,235,0.4)' : 'rgba(255,255,255,0.1)'}`, padding: '0.4rem 0.8rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'all 0.3s', backdropFilter: 'blur(10px)' }}>
                <i className="ti ti-layout-sidebar-right"></i> Canvas
              </button>
            )}
            <Link href="/" style={{ fontSize: '0.85rem', color: '#aaa', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', border: '1px solid rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
              Exit QIA
            </Link>
          </div>
        </div>

        {activeSettingsView === 'profile' ? (
          /* SETTINGS PROFILE VIEW */
          <div style={{ maxWidth: '600px', margin: '0 auto', width: '100%', padding: '2rem' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', borderBottom: '2px solid #fff', display: 'inline-block', paddingBottom: '0.2rem', marginBottom: '2rem' }}>Profile</h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: '2rem', fontWeight: 'bold' }}>
                H
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{session?.user?.user_metadata?.full_name || fullName}</div>
                <div style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{session?.user?.email || 'AI Developer'}</div>
                <button style={{ background: 'transparent', border: '1px solid #333', color: '#888', padding: '0.4rem 1rem', borderRadius: '0.5rem', fontSize: '0.8rem', cursor: 'pointer' }}>
                  Change Avatar
                </button>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.7rem', color: '#666', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Full Name</label>
              <input 
                type="text" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{ width: '100%', background: '#0a0a0a', border: '1px solid #222', borderRadius: '0.5rem', padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none' }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.7rem', color: '#666', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '100%', background: '#0a0a0a', border: '1px solid #222', borderRadius: '0.5rem', padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none' }}
              />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.7rem', color: '#666', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Bio</label>
              <input 
                type="text" 
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                style={{ width: '100%', background: '#0a0a0a', border: '1px solid #222', borderRadius: '0.5rem', padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none' }}
              />
            </div>

            <button style={{ background: '#fff', color: '#000', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
              Save Changes
            </button>
          </div>
        ) : activeSettingsView ? (
          /* OTHER GENERIC SETTINGS VIEWS */
          <div style={{ maxWidth: '600px', margin: '0 auto', width: '100%', padding: '2rem' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', borderBottom: '2px solid #fff', display: 'inline-block', paddingBottom: '0.2rem', marginBottom: '2rem', textTransform: 'capitalize' }}>
              {activeSettingsView.replace(/([A-Z])/g, ' $1').trim()}
            </h1>
            
            {activeSettingsView === 'email' ? (
               <div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.7rem', color: '#666', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Current Email</label>
                    <input 
                      type="text" 
                      value={session?.user?.email || ''}
                      disabled
                      style={{ width: '100%', background: '#0a0a0a', border: '1px solid #222', borderRadius: '0.5rem', padding: '1rem', color: '#888', fontSize: '1rem', outline: 'none', cursor: 'not-allowed' }}
                    />
                  </div>
                  <button style={{ background: '#333', color: '#fff', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                    Change Email
                  </button>
               </div>
            ) : activeSettingsView === 'password' ? (
               <div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.7rem', color: '#666', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>New Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      style={{ width: '100%', background: '#0a0a0a', border: '1px solid #222', borderRadius: '0.5rem', padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none' }}
                    />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.7rem', color: '#666', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Confirm Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      style={{ width: '100%', background: '#0a0a0a', border: '1px solid #222', borderRadius: '0.5rem', padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none' }}
                    />
                  </div>
                  <button style={{ background: '#fff', color: '#000', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                    Update Password
                  </button>
               </div>
            ) : activeSettingsView === 'notifications' ? (
               <div>
                  <p style={{ color: '#888', marginBottom: '2rem' }}>Choose what kind of notifications you want to receive.</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #1a1a1a' }}>
                    <div>
                      <div style={{ fontWeight: 'bold', marginBottom: '0.3rem' }}>Email Notifications</div>
                      <div style={{ color: '#666', fontSize: '0.85rem' }}>Receive updates about your account via email.</div>
                    </div>
                    <div style={{ width: '40px', height: '22px', background: '#fff', borderRadius: '20px', position: 'relative', cursor: 'pointer' }}>
                      <div style={{ width: '18px', height: '18px', background: '#000', borderRadius: '50%', position: 'absolute', top: '2px', right: '2px' }}></div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #1a1a1a' }}>
                    <div>
                      <div style={{ fontWeight: 'bold', marginBottom: '0.3rem' }}>Product Updates</div>
                      <div style={{ color: '#666', fontSize: '0.85rem' }}>Get notified about new QIA features.</div>
                    </div>
                    <div style={{ width: '40px', height: '22px', background: '#222', borderRadius: '20px', position: 'relative', cursor: 'pointer' }}>
                      <div style={{ width: '18px', height: '18px', background: '#666', borderRadius: '50%', position: 'absolute', top: '2px', left: '2px' }}></div>
                    </div>
                  </div>
               </div>
            ) : activeSettingsView === 'searchMode' ? (
               <div>
                  <p style={{ color: '#888', marginBottom: '2rem' }}>Select the default depth and speed of the AI search engine.</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: '1px solid #333', borderRadius: '0.5rem', cursor: 'pointer', background: '#111' }}>
                      <input type="radio" name="searchMode" defaultChecked style={{ accentColor: '#fff', width: '18px', height: '18px' }} />
                      <div>
                        <div style={{ fontWeight: 'bold' }}>Balanced</div>
                        <div style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.2rem' }}>The best balance of speed and depth.</div>
                      </div>
                    </label>
                    
                    <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: '1px solid #222', borderRadius: '0.5rem', cursor: 'pointer' }}>
                      <input type="radio" name="searchMode" style={{ accentColor: '#fff', width: '18px', height: '18px' }} />
                      <div>
                        <div style={{ fontWeight: 'bold' }}>Deep Research</div>
                        <div style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.2rem' }}>Slower, but searches far more sources for accuracy.</div>
                      </div>
                    </label>
                  </div>
               </div>
            ) : activeSettingsView === 'aiResponseStyle' ? (
               <div>
                  <p style={{ color: '#888', marginBottom: '2rem' }}>Customize how the QIA Agent formats its responses.</p>
                  
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    <button style={{ flex: 1, padding: '1rem', background: '#fff', color: '#000', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer' }}>Concise</button>
                    <button style={{ flex: 1, padding: '1rem', background: '#111', color: '#888', border: '1px solid #333', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer' }}>Detailed</button>
                    <button style={{ flex: 1, padding: '1rem', background: '#111', color: '#888', border: '1px solid #333', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer' }}>Academic</button>
                  </div>
                  
                  <div style={{ padding: '1.5rem', background: '#0a0a0a', border: '1px solid #222', borderRadius: '0.5rem', color: '#ccc', fontStyle: 'italic', fontSize: '0.9rem' }}>
                    "QIA will prioritize direct answers, bullet points, and brevity over elaborate explanations."
                  </div>
               </div>
            ) : activeSettingsView === 'themePreference' ? (
               <div>
                  <p style={{ color: '#888', marginBottom: '2rem' }}>Choose your interface aesthetic.</p>
                  
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1, padding: '1.5rem', border: '2px solid #fff', borderRadius: '0.5rem', cursor: 'pointer', textAlign: 'center', background: '#050505' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#000', border: '1px solid #333', margin: '0 auto 1rem auto' }}></div>
                      <div style={{ fontWeight: 'bold', color: '#fff' }}>Dark Mode</div>
                    </div>
                    <div style={{ flex: 1, padding: '1.5rem', border: '1px solid #222', borderRadius: '0.5rem', cursor: 'pointer', textAlign: 'center', background: '#111' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fff', margin: '0 auto 1rem auto' }}></div>
                      <div style={{ fontWeight: 'bold', color: '#888' }}>Light Mode</div>
                    </div>
                    <div style={{ flex: 1, padding: '1.5rem', border: '1px solid #222', borderRadius: '0.5rem', cursor: 'pointer', textAlign: 'center', background: '#111' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #000 50%, #fff 50%)', border: '1px solid #333', margin: '0 auto 1rem auto' }}></div>
                      <div style={{ fontWeight: 'bold', color: '#888' }}>System</div>
                    </div>
                  </div>
               </div>
            ) : activeSettingsView === 'contentSuggestions' ? (
               <div>
                  <p style={{ color: '#888', marginBottom: '2rem' }}>Control how QIA suggests prompts to you.</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #1a1a1a' }}>
                    <div>
                      <div style={{ fontWeight: 'bold', marginBottom: '0.3rem' }}>Show Prompt Suggestions</div>
                      <div style={{ color: '#666', fontSize: '0.85rem' }}>Display recommended questions on the home screen.</div>
                    </div>
                    <div style={{ width: '40px', height: '22px', background: '#fff', borderRadius: '20px', position: 'relative', cursor: 'pointer' }}>
                      <div style={{ width: '18px', height: '18px', background: '#000', borderRadius: '50%', position: 'absolute', top: '2px', right: '2px' }}></div>
                    </div>
                  </div>
               </div>
            ) : activeSettingsView === 'projects' ? (
               <div>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Projects</h2>
                  <p style={{ color: '#888', marginBottom: '2rem' }}>Organize your chats into different projects and workspaces.</p>
                  
                  <div style={{ padding: '2rem', border: '1px dashed #333', borderRadius: '0.5rem', textAlign: 'center' }}>
                     <i className="ti ti-folder" style={{ fontSize: '2.5rem', color: '#555', marginBottom: '1rem', display: 'block' }}></i>
                     <p style={{ color: '#888' }}>Projects feature is coming soon.</p>
                  </div>
               </div>
            ) : activeSettingsView === 'artifacts' ? (
               <div>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Artifacts</h2>
                  <p style={{ color: '#888', marginBottom: '2rem' }}>View all code, documents, and designs generated by QIA.</p>
                  
                  <div style={{ padding: '2rem', border: '1px dashed #333', borderRadius: '0.5rem', textAlign: 'center' }}>
                     <i className="ti ti-box-multiple" style={{ fontSize: '2.5rem', color: '#555', marginBottom: '1rem', display: 'block' }}></i>
                     <p style={{ color: '#888' }}>Artifacts library is coming soon.</p>
                  </div>
               </div>
            ) : activeSettingsView === 'design' ? (
               <div>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Design</h2>
                  <p style={{ color: '#888', marginBottom: '2rem' }}>Manage the UI tokens and visual elements of your generated apps.</p>
                  
                  <div style={{ padding: '2rem', border: '1px dashed #333', borderRadius: '0.5rem', textAlign: 'center' }}>
                     <i className="ti ti-palette" style={{ fontSize: '2.5rem', color: '#555', marginBottom: '1rem', display: 'block' }}></i>
                     <p style={{ color: '#888' }}>Design studio is coming soon.</p>
                  </div>
               </div>
            ) : (
               <p style={{ color: '#888' }}>This section is coming soon.</p>
            )}
          </div>
        ) : (
          /* CHAT OR HERO VIEW */
          messages.length === 0 ? (
            /* HERO VIEW */
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
              
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h1 style={{ fontSize: '5rem', fontWeight: 'bold', margin: '0 0 0.5rem 0', letterSpacing: '-2px' }}>QIA</h1>
                <div style={{ fontSize: '0.8rem', letterSpacing: '2px', color: '#444', textTransform: 'uppercase' }}>Quantum Intelligent Architecture • AI Orchestrator</div>
              </div>

              {/* Search Input Box */}
              <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '700px', position: 'relative' }}>
                <div style={{ 
                  background: '#0a0a0a', 
                  border: '1px solid #333', 
                  borderRadius: '2rem', 
                  padding: '0.5rem', 
                  display: 'flex', 
                  alignItems: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}>
                  <i className="ti ti-search" style={{ color: '#666', fontSize: '1.5rem', margin: '0 1rem' }}></i>
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything to QIA..." 
                    style={{
                      flex: 1,
                      background: 'transparent',
                      border: 'none',
                      color: '#fff',
                      fontSize: '1.1rem',
                      outline: 'none'
                    }}
                  />
                  <button 
                    type="submit"
                    disabled={!input.trim()}
                    style={{
                      background: input.trim() ? '#fff' : '#222',
                      color: input.trim() ? '#000' : '#555',
                      border: 'none',
                      padding: '0.8rem 1.5rem',
                      borderRadius: '2rem',
                      fontWeight: 'bold',
                      cursor: input.trim() ? 'pointer' : 'not-allowed',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    Search <i className="ti ti-arrow-right" style={{ fontSize: '1.1rem' }}></i>
                  </button>
                </div>
              </form>

              {/* Active Swarm Nodes Status */}
              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid #1a1a1a', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.75rem', color: '#888', letterSpacing: '1px', textTransform: 'uppercase', backdropFilter: 'blur(10px)' }}>
                  <div style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981', animation: 'pulse 2s infinite' }}></div>
                  Data Node
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid #1a1a1a', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.75rem', color: '#888', letterSpacing: '1px', textTransform: 'uppercase', backdropFilter: 'blur(10px)' }}>
                  <div style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981', animation: 'pulse 2s infinite 0.5s' }}></div>
                  Logic Node
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid #1a1a1a', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.75rem', color: '#888', letterSpacing: '1px', textTransform: 'uppercase', backdropFilter: 'blur(10px)' }}>
                  <div style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981', animation: 'pulse 2s infinite 1s' }}></div>
                  Code Node
                </div>
              </div>

              {/* Suggestions */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.8rem', marginTop: '2rem', maxWidth: '800px' }}>
                {[
                  "Orchestrate full-stack build", 
                  "Deploy data analysis swarm", 
                  "What is AGI?", 
                  "Coordinate deep research",
                  "Who is Harsh?"
                ].map((text, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInput(text);
                      setTimeout(() => {
                        const evt = new Event('submit', { cancelable: true }) as unknown as React.FormEvent;
                        handleSubmit(evt);
                      }, 50);
                    }}
                    style={{
                      background: '#0a0a0a',
                      border: '1px solid #222',
                      color: '#888',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '2rem',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.borderColor = '#444'; e.currentTarget.style.color = '#fff'; }}
                    onMouseOut={(e) => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#888'; }}
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
              {/* Chat Column */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', maxWidth: isCanvasOpen ? '50%' : '900px', margin: isCanvasOpen ? '0' : '0 auto', width: '100%', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', borderRight: isCanvasOpen ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', overflowY: 'auto' }}>
                  {messages.map((msg) => (
                    <div key={msg.id} style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#888', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {msg.role === 'assistant' ? (
                          <><i className="ti ti-brain" style={{ color: '#2563eb' }}></i> QIA ORCHESTRATOR</>
                        ) : (
                          <>USER <i className="ti ti-user" style={{ color: '#fff' }}></i></>
                        )}
                      </div>
                      
                      <div style={{
                        background: msg.role === 'user' ? 'rgba(255,255,255,0.05)' : 'rgba(37, 99, 235, 0.05)',
                        border: msg.role === 'user' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(37, 99, 235, 0.2)',
                        padding: '1.2rem',
                        borderRadius: '12px',
                        color: '#e5e5e5',
                        fontSize: '1.05rem',
                        lineHeight: '1.7',
                        maxWidth: '85%',
                        boxShadow: msg.role === 'assistant' ? '0 0 20px rgba(37, 99, 235, 0.05)' : 'none',
                        backdropFilter: 'blur(10px)'
                      }}>
                        {msg.content}
                        {msg.isStreaming && <span style={{
                          display: 'inline-block',
                          width: '8px',
                          height: '18px',
                          background: '#2563eb',
                          marginLeft: '5px',
                          verticalAlign: 'middle',
                          animation: 'blink 1s step-end infinite',
                          boxShadow: '0 0 8px #2563eb'
                        }}></span>}
                      </div>
                    </div>
                  ))}
                  {isTyping && messages[messages.length - 1]?.role === 'user' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#2563eb', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                       <div className="cyber-spinner"></div>
                       <span>Orchestrating AI Swarm...</span>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Chat Input */}
                <div style={{ padding: '2rem', background: 'linear-gradient(to top, #030303 80%, transparent)' }}>
                  <form onSubmit={handleSubmit} style={{ width: '100%', position: 'relative' }}>
                    
                    {/* Futuristic Tools Bar */}
                    <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', padding: '0 0.5rem' }}>
                      <div onClick={() => setAgentMode('fast')} style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: agentMode === 'fast' ? '#fff' : '#666', background: agentMode === 'fast' ? 'rgba(255,255,255,0.1)' : 'transparent', padding: '0.4rem 0.8rem', borderRadius: '20px', cursor: 'pointer', border: '1px solid', borderColor: agentMode === 'fast' ? 'rgba(255,255,255,0.2)' : 'transparent', transition: 'all 0.2s' }}>
                         <i className="ti ti-bolt"></i> Fast
                      </div>
                      <div onClick={() => setAgentMode('reason')} style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: agentMode === 'reason' ? '#a855f7' : '#666', background: agentMode === 'reason' ? 'rgba(168, 85, 247, 0.1)' : 'transparent', padding: '0.4rem 0.8rem', borderRadius: '20px', cursor: 'pointer', border: '1px solid', borderColor: agentMode === 'reason' ? 'rgba(168, 85, 247, 0.2)' : 'transparent', transition: 'all 0.2s' }}>
                         <i className="ti ti-brain"></i> Reason
                      </div>
                      <div onClick={() => setAgentMode('deep')} style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: agentMode === 'deep' ? '#2563eb' : '#666', background: agentMode === 'deep' ? 'rgba(37, 99, 235, 0.1)' : 'transparent', padding: '0.4rem 0.8rem', borderRadius: '20px', cursor: 'pointer', border: '1px solid', borderColor: agentMode === 'deep' ? 'rgba(37, 99, 235, 0.2)' : 'transparent', transition: 'all 0.2s' }}>
                         <i className="ti ti-world-search"></i> Deep Research
                      </div>
                    </div>

                    <div style={{ 
                      background: 'rgba(10, 10, 10, 0.8)', 
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.1)', 
                      borderRadius: '16px', 
                      padding: '0.5rem', 
                      display: 'flex', 
                      alignItems: 'center',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}>
                      <div style={{ color: '#666', padding: '0 1rem', cursor: 'pointer' }}>
                        <i className="ti ti-paperclip" style={{ fontSize: '1.2rem' }}></i>
                      </div>
                      <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Initialize command sequence..." 
                        disabled={isTyping}
                        style={{
                          flex: 1,
                          background: 'transparent',
                          border: 'none',
                          color: '#fff',
                          fontSize: '1rem',
                          outline: 'none',
                          padding: '0.5rem 0'
                        }}
                      />
                      <button 
                        type="submit"
                        disabled={!input.trim() || isTyping}
                        style={{
                          background: input.trim() && !isTyping ? '#fff' : 'rgba(255,255,255,0.05)',
                          color: input.trim() && !isTyping ? '#000' : '#555',
                          border: 'none',
                          width: '40px',
                          height: '40px',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: input.trim() && !isTyping ? 'pointer' : 'not-allowed',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <i className="ti ti-arrow-up" style={{ fontSize: '1.2rem' }}></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              {/* Canvas Side Panel */}
              <div style={{ 
                width: isCanvasOpen ? '50%' : '0%', 
                background: '#0a0a0a', 
                borderLeft: isCanvasOpen ? '1px solid rgba(255,255,255,0.05)' : 'none',
                transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {isCanvasOpen && (
                  <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#aaa', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        <i className="ti ti-code" style={{ color: '#2563eb' }}></i> AI Canvas
                      </div>
                      <button onClick={() => setIsCanvasOpen(false)} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}>
                        <i className="ti ti-x" style={{ fontSize: '1.2rem' }}></i>
                      </button>
                    </div>
                    
                    <div style={{ flex: 1, border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', color: '#555', background: 'rgba(255,255,255,0.02)' }}>
                       <i className="ti ti-cube" style={{ fontSize: '3rem', opacity: 0.5 }}></i>
                       <div style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>ARTIFACT GENERATION AREA</div>
                       <div style={{ fontSize: '0.75rem', maxWidth: '60%', textAlign: 'center' }}>When QIA generates code, diagrams, or complex structures, they will render here in real-time.</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </div>
      
      {/* FIXED CONTEXT MENU - renders outside all overflow containers */}
      {menuOpenForId && menuPosition && (() => {
        const chat = chats.find(c => c.id === menuOpenForId);
        if (!chat) return null;
        return (
          <>
            {/* Backdrop to close menu */}
            <div 
              style={{ position: 'fixed', inset: 0, zIndex: 9998 }} 
              onClick={() => { setMenuOpenForId(null); setMenuPosition(null); }}
            />
            <div style={{ 
              position: 'fixed', 
              top: menuPosition.top, 
              left: Math.max(8, menuPosition.left), 
              background: '#1e1e1e', 
              border: '1px solid #2a2a2a', 
              borderRadius: '10px', 
              padding: '0.4rem', 
              zIndex: 9999, 
              width: '180px', 
              boxShadow: '0 8px 24px rgba(0,0,0,0.7)',
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.875rem',
              color: '#ccc'
            }}>
              <div 
                onClick={(e) => toggleStar(chat.id, e)} 
                style={{ padding: '0.5rem 0.7rem', display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', borderRadius: '6px', transition: 'background 0.15s' }}
                onMouseOver={e => (e.currentTarget.style.background = '#2a2a2a')}
                onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
              >
                <i className={chat.isStarred ? 'ti ti-star-off' : 'ti ti-star'} style={{ fontSize: '1rem', color: chat.isStarred ? '#fbbf24' : '#aaa' }}></i>
                <span>{chat.isStarred ? 'Unstar' : 'Star'}</span>
              </div>
              <div 
                onClick={(e) => { e.stopPropagation(); setEditingChatId(chat.id); setEditTitle(chat.title); setMenuOpenForId(null); setMenuPosition(null); }} 
                style={{ padding: '0.5rem 0.7rem', display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', borderRadius: '6px', transition: 'background 0.15s' }}
                onMouseOver={e => (e.currentTarget.style.background = '#2a2a2a')}
                onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
              >
                <i className="ti ti-pencil" style={{ fontSize: '1rem', color: '#aaa' }}></i>
                <span>Rename</span>
              </div>
              
              <div style={{ height: '1px', background: '#2a2a2a', margin: '0.3rem 0' }}></div>
              
              <div style={{ padding: '0.4rem 0.7rem', fontSize: '0.7rem', color: '#666', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Add to Project</div>
              {projects.map(p => (
                <div 
                  key={p.id} 
                  onClick={(e) => { assignProject(chat.id, p.id, e); setMenuOpenForId(null); setMenuPosition(null); }} 
                  style={{ padding: '0.4rem 0.7rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderRadius: '6px', transition: 'background 0.15s' }}
                  onMouseOver={e => (e.currentTarget.style.background = '#2a2a2a')}
                  onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <span style={{ fontSize: '0.875rem', color: '#ccc' }}>{p.name}</span>
                  {chat.projectId === p.id && <i className="ti ti-check" style={{ color: '#3b82f6', fontSize: '0.9rem' }}></i>}
                </div>
              ))}

              <div style={{ height: '1px', background: '#2a2a2a', margin: '0.3rem 0' }}></div>
              
              <div 
                onClick={(e) => { deleteChat(chat.id, e); setMenuOpenForId(null); setMenuPosition(null); }} 
                style={{ padding: '0.5rem 0.7rem', display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', borderRadius: '6px', color: '#ef4444', transition: 'background 0.15s' }}
                onMouseOver={e => (e.currentTarget.style.background = 'rgba(239,68,68,0.1)')}
                onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
              >
                <i className="ti ti-trash" style={{ fontSize: '1rem' }}></i>
                <span>Delete</span>
              </div>
            </div>
          </>
        );
      })()}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cyber-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top-color: #2563eb;
          border-right-color: #2563eb;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
