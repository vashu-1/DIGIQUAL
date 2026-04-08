'use client';

import React, { useState } from 'react';
import { getSupabaseClient } from '@/lib/supabase/client';

const GoogleSignInButton = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const signInWithGoogle = async () => {
    setLoading(true);
    setErrorMessage('');

    try {
      const supabase = getSupabaseClient();

      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error?.message || 'Unable to start Google sign-in.');
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={signInWithGoogle}
        disabled={loading}
        className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? 'Redirecting...' : 'Sign in with Google'}
      </button>
      {errorMessage ? (
        <p className="text-xs text-red-600">{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default GoogleSignInButton;
