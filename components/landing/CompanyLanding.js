import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const companyStats = [
  { label: 'Partner Institutes', value: '120+' },
  { label: 'Students Mentored', value: '65K+' },
  { label: 'Placement Partners', value: '400+' },
];

const offerings = [
  {
    title: 'Institute Partnerships',
    description:
      'We onboard trusted institutes with quality checks, transparent outcomes, and centralized visibility for every batch.',
  },
  {
    title: 'Student Success Engine',
    description:
      'From counseling to enrollment and post-course support, every touchpoint is tracked to improve student outcomes.',
  },
  {
    title: 'Operational Intelligence',
    description:
      'Institute teams access batch analytics, conversion funnels, and completion trends in one dashboard.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discover Programs',
    description:
      'Students explore verified institutes and compare schedules, curriculum depth, and pricing.',
  },
  {
    step: '02',
    title: 'Authenticate & Verify',
    description:
      'Users enter a secure authentication flow before accessing batch purchase and enrollment actions.',
  },
  {
    step: '03',
    title: 'Purchase & Start Learning',
    description:
      'After verification, students purchase online batches and track progress from a dedicated portal.',
  },
];

const testimonials = [
  {
    quote:
      'EduBridge gave us a structured enrollment pipeline and improved our student conversion by 34% in one quarter.',
    author: 'Anita Sharma',
    role: 'Director, NextGen Institute',
  },
  {
    quote:
      'Our teams finally have one place for batches, payments, and student communication. Operations are much faster now.',
    author: 'Rohit Menon',
    role: 'Operations Head, DataBridge Academy',
  },
];

const faqs = [
  {
    question: 'How does EduBridge verify institutes?',
    answer:
      'Each institute goes through quality checks covering faculty profiles, curriculum standards, and learner outcomes before onboarding.',
  },
  {
    question: 'Can students access multiple institute batches?',
    answer:
      'Yes, authenticated students can compare and purchase batches across partner institutes from one portal account.',
  },
  {
    question: 'Do you support live and weekend cohorts?',
    answer:
      'Absolutely. Institutes can publish weekday, weekend, and hybrid online schedules with full visibility for students.',
  },
];

const CompanyLanding = () => {
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

      <section className="w-full rounded-3xl border border-orange-200/80 bg-white/90 p-6 shadow-sm md:p-8">
        <nav className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-display text-3xl text-slate-900">
            EduBridge Company
          </h1>
          <Link
            href="/auth"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Getting Started
          </Link>
        </nav>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="animate-fade-in-up">
            <p className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-orange-700">
              Company Overview
            </p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-slate-900 md:text-6xl">
              One Platform. Many Institutes. Real Career Outcomes.
            </h2>
            <p className="mt-5 text-base text-slate-600 md:text-lg">
              EduBridge partners with top institutes to deliver trusted online
              batches, practical learning paths, and structured student outcomes
              under one unified platform.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/auth/signin"
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Continue to Login
              </Link>
              <a
                href="#about"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up-delay rounded-2xl bg-linear-to-br from-orange-100 via-amber-50 to-white p-6">
            <h3 className="font-display text-2xl text-slate-900">
              Learning Moments Across Partner Institutes
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Real classrooms, real mentorship, and real outcomes powered by
              EduBridge ecosystem.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="group relative h-36 overflow-hidden rounded-2xl border border-white/80 shadow-sm md:h-44">
                <Image
                  src="/1.jpg"
                  alt="Students learning in a live online batch"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 to-transparent px-3 py-2">
                  <p className="text-xs font-semibold text-white">Live Cohort</p>
                </div>
              </div>

              <div className="group relative h-36 overflow-hidden rounded-2xl border border-white/80 shadow-sm md:h-44">
                <Image
                  src="/2.jpg"
                  alt="Instructor guiding students in online session"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 to-transparent px-3 py-2">
                  <p className="text-xs font-semibold text-white">Mentor Support</p>
                </div>
              </div>

              <div className="group relative h-36 overflow-hidden rounded-2xl border border-white/80 shadow-sm md:h-44">
                <Image
                  src="/3.jpg"
                  alt="Students collaborating on projects"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 to-transparent px-3 py-2">
                  <p className="text-xs font-semibold text-white">Project Labs</p>
                </div>
              </div>

              <div className="group relative h-36 overflow-hidden rounded-2xl border border-white/80 shadow-sm md:h-44">
                <Image
                  src="/4.jpg"
                  alt="Career outcomes and institute partnerships"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 to-transparent px-3 py-2">
                  <p className="text-xs font-semibold text-white">Career Outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mt-8 grid w-full gap-5 md:grid-cols-3">
        {companyStats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-sm"
          >
            <p className="font-display text-4xl text-slate-900">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
              {stat.label}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-8 w-full rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-700">
              What We Offer
            </p>
            <h3 className="font-display mt-2 text-3xl text-slate-900 md:text-4xl">
              Built for Institutes and Students
            </h3>
          </div>
          <Link
            href="/auth"
            className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
          >
            Explore Auth Flow
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {offerings.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-orange-100 bg-orange-50/40 p-5"
            >
              <h4 className="font-display text-2xl text-slate-900">{item.title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 w-full rounded-3xl border border-orange-200/70 bg-linear-to-br from-orange-50 via-white to-amber-50 p-6 shadow-sm md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-700">
          How It Works
        </p>
        <h3 className="font-display mt-2 text-3xl text-slate-900 md:text-4xl">
          Systematic Journey from Landing to Learning
        </h3>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {processSteps.map((item) => (
            <article
              key={item.step}
              className="rounded-2xl border border-orange-100 bg-white/90 p-5"
            >
              <p className="font-display text-4xl text-orange-500">{item.step}</p>
              <h4 className="mt-2 text-lg font-semibold text-slate-900">
                {item.title}
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 w-full rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-700">
          Voices of Partners
        </p>
        <h3 className="font-display mt-2 text-3xl text-slate-900 md:text-4xl">
          Trusted by Education Leaders
        </h3>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.author}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5"
            >
              <p className="text-sm leading-7 text-slate-700">"{item.quote}"</p>
              <footer className="mt-4 text-sm text-slate-900">
                <span className="font-semibold">{item.author}</span>
                <span className="text-slate-600">, {item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mt-8 w-full rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-700">
          FAQ
        </p>
        <h3 className="font-display mt-2 text-3xl text-slate-900 md:text-4xl">
          Common Questions
        </h3>
        <div className="mt-6 space-y-4">
          {faqs.map((item) => (
            <article key={item.question} className="rounded-2xl border border-slate-200 p-5">
              <h4 className="text-base font-semibold text-slate-900">
                {item.question}
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 w-full pb-10">
        <div className="rounded-3xl border border-orange-200 bg-linear-to-r from-orange-100 via-amber-50 to-orange-100 p-8 text-center shadow-sm md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-700">
            Ready to Begin
          </p>
          <h3 className="font-display mt-2 text-3xl text-slate-900 md:text-5xl">
            Launch Student Access with a Secure Auth Flow
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-700 md:text-base">
            Start from the company experience, move users to authentication, and
            then unlock the student portal for verified batch purchase journeys.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/auth"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Getting Started
            </Link>
            <Link
              href="/auth/signup"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
            >
              Create Student Account
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-2 mb-6 w-full rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="font-display text-2xl text-slate-900">EduBridge</h4>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              A company-first education platform connecting students with trusted
              institutes, secure authentication, and outcome-focused batches.
            </p>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Company
            </h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <a href="#about" className="transition hover:text-slate-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-slate-900">
                  Partner Institutes
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-slate-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-slate-900">
                  Press & Media
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Student Links
            </h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/auth/signin" className="transition hover:text-slate-900">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/auth/signup" className="transition hover:text-slate-900">
                  Create Account
                </Link>
              </li>
              <li>
                <Link href="/auth" className="transition hover:text-slate-900">
                  Getting Started
                </Link>
              </li>
              <li>
                <a href="#" className="transition hover:text-slate-900">
                  Student Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Contact
            </h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>support@edubridge.com</li>
              <li>+91 98765 43210</li>
              <li>Bangalore, India</li>
              <li>Mon - Sat | 9:00 AM - 7:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 text-xs text-slate-500">
          <p>Copyright 2026 EduBridge. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-slate-700">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-slate-700">
              Terms of Service
            </a>
            <a href="#" className="transition hover:text-slate-700">
              Refund Policy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default CompanyLanding;
