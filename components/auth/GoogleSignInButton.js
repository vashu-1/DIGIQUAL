'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase/client';

const GoogleSignInButton = () => {
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.log('Error logging in: ', error.message);
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={signInWithGoogle}
      disabled={loading}
      className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading ? 'Redirecting...' : 'Sign in with Google'}
    </button>
  );
};

export default GoogleSignInButton;
