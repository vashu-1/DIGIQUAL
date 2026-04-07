import Link from 'next/link';
import React from 'react';

const AuthShell = ({
  title,
  subtitle,
  children,
  helperText,
  helperHref,
  helperLabel,
}) => {
  return (
    <main className="landing-shell relative isolate overflow-hidden px-6 py-8 md:px-10 lg:px-16">
      <div
        className="landing-bg-shape landing-bg-shape-one"
        aria-hidden="true"
      />
      <div
        className="landing-bg-shape landing-bg-shape-two"
        aria-hidden="true"
      />

      <section className="mx-auto max-w-lg rounded-3xl border border-orange-200/80 bg-white/95 p-6 shadow-sm md:p-8">
        <Link
          href="/"
          className="text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          Back to Company Page
        </Link>
        <h1 className="font-display mt-4 text-4xl text-slate-900">{title}</h1>
        <p className="mt-2 text-sm text-slate-600">{subtitle}</p>

        <div className="mt-6">{children}</div>

        {helperText && helperHref && helperLabel ? (
          <p className="mt-5 text-sm text-slate-600">
            {helperText}{' '}
            <Link
              href={helperHref}
              className="font-semibold text-orange-700 hover:text-orange-800"
            >
              {helperLabel}
            </Link>
          </p>
        ) : null}
      </section>
    </main>
  );
};

export default AuthShell;
