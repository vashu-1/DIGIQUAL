import Link from 'next/link';
import React from 'react';
import AuthShell from '@/components/auth/AuthShell';

const AuthIndexPage = () => {
  return (
    <AuthShell
      title="Welcome to Authentication"
      subtitle="Google sign-in is required to continue to the student portal."
    >
      <div className="grid gap-3">
        <Link
          href="/auth/signin"
          className="rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Sign in with Google
        </Link>
      </div>
    </AuthShell>
  );
};

export default AuthIndexPage;
