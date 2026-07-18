'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { supabase } from '@/lib/supabase';

export default function QIALogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMsg(error.message);
      } else {
        router.push('/qia');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#050505',
      color: '#fff',
      zIndex: 99999,
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-inter), sans-serif',
      overflow: 'hidden'
    }}>
      <Head>
        <title>Login | QIA</title>
      </Head>

      {/* Top Bar */}
      <div style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>QIA</div>
      </div>

      {/* Centered Card */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <div style={{ 
          width: '100%', 
          maxWidth: '400px', 
          background: '#0a0a0a', 
          border: '1px solid #222', 
          borderRadius: '1rem', 
          padding: '2.5rem 2rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
        }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '500', textAlign: 'center', margin: '0 0 0.5rem 0' }}>Welcome back</h1>
          <p style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem', marginBottom: '2rem' }}>
            Log in to Quantum Intelligent Architecture
          </p>

          <form onSubmit={handleLogin}>
            {errorMsg && <div style={{ color: '#ff4d4f', fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center' }}>{errorMsg}</div>}
            <div style={{ marginBottom: '1rem' }}>
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  background: 'transparent',
                  border: '1px solid #333',
                  borderRadius: '0.5rem',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  marginBottom: '1rem'
                }}
                onFocus={(e) => e.target.style.borderColor = '#666'}
                onBlur={(e) => e.target.style.borderColor = '#333'}
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  background: 'transparent',
                  border: '1px solid #333',
                  borderRadius: '0.5rem',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#666'}
                onBlur={(e) => e.target.style.borderColor = '#333'}
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.8rem',
                background: loading ? '#888' : '#fff',
                color: '#000',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: loading ? 'not-allowed' : 'pointer',
                marginBottom: '1.5rem',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => !loading && (e.currentTarget.style.background = '#e5e5e5')}
              onMouseOut={(e) => !loading && (e.currentTarget.style.background = '#fff')}
            >
              {loading ? 'Logging in...' : 'Log in with Email'}
            </button>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0', color: '#444' }}>
            <div style={{ flex: 1, height: '1px', background: '#222' }}></div>
            <span style={{ padding: '0 1rem', fontSize: '0.8rem' }}>OR</span>
            <div style={{ flex: 1, height: '1px', background: '#222' }}></div>
          </div>

          <button 
            type="button"
            onClick={async () => {
              try {
                await supabase.auth.signInWithOAuth({
                  provider: 'google',
                  options: {
                    redirectTo: `${window.location.origin}/qia`
                  }
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={{
              width: '100%',
              padding: '0.8rem',
              background: 'transparent',
              color: '#fff',
              border: '1px solid #333',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = '#666'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = '#333'}
          >
            <i className="ti ti-brand-google" style={{ fontSize: '1.2rem' }}></i> Continue with Google
          </button>

          <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.85rem', color: '#888' }}>
            Don't have an account? <Link href="/qia" style={{ color: '#fff', textDecoration: 'underline' }}>Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
