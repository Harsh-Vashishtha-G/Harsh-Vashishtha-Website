'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { ChatComponent } from './ChatComponent';
import { SignupComponent } from './SignupComponent';
import { Session } from '@supabase/supabase-js';

export default function QIAMain() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div style={{ backgroundColor: '#050505', height: '100vh', width: '100vw' }} />;
  }

  return session ? <ChatComponent session={session} /> : <SignupComponent />;
}
