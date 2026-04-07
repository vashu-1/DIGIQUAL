import React from 'react';
import AuthShell from '@/components/auth/AuthShell';
import GoogleSignInButton from '@/components/auth/GoogleSignInButton';

const SignInPage = () => {
  return (
    <AuthShell
      title="Sign In"
      subtitle="Use Google authentication to access the student batch purchasing portal."
    >
      <div className="space-y-3">
        <GoogleSignInButton />
        <p className="text-xs text-slate-500">
          Continue securely with your Google account.
        </p>
      </div>
    </AuthShell>
  );
};

export default SignInPage;
