'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSupabaseClient } from '@/lib/supabase/client';

const AuthCallbackClient = ({ code }) => {
  const router = useRouter();
  const [message, setMessage] = useState('Signing you in...');

  useEffect(() => {
    const handleCallback = async () => {
      if (!code) {
        router.replace('/auth/signin');
        return;
      }

      try {
        const supabase = getSupabaseClient();
        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);

        if (exchangeError) {
          setMessage('Unable to complete sign-in. Please try again.');
          router.replace('/auth/signin');
          return;
        }

        const { data, error } = await supabase.auth.getSession();

        if (error || !data?.session) {
          setMessage('Unable to complete sign-in. Please try again.');
          router.replace('/auth/signin');
          return;
        }

        document.cookie = `student_auth=1; path=/; max-age=${60 * 60 * 24 * 7}; samesite=lax`;
        router.replace('/portal');
      } catch (error) {
        setMessage(error?.message || 'Unable to complete sign-in.');
        router.replace('/auth/signin');
      }
    };

    handleCallback();
  }, [code, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 text-sm text-slate-600">
      {message}
    </div>
  );
};

export default AuthCallbackClient;
