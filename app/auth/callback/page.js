'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSupabaseClient } from '@/lib/supabase/client';

const AuthCallbackPage = ({ searchParams }) => {
  const router = useRouter();
  const [message, setMessage] = useState('Signing you in...');

  useEffect(() => {
    const handleCallback = async () => {
      if (!searchParams?.code) {
        router.replace('/auth/signin');
        return;
      }

      try {
        const supabase = getSupabaseClient();
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
  }, [router, searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 text-sm text-slate-600">
      {message}
    </div>
  );
};

export default AuthCallbackPage;
