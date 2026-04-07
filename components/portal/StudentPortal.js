import React from 'react';

const StudentPortal = ({ institutes, logoutAction }) => {
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

      <div className="absolute right-6 top-4 z-20 flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3 py-1.5 shadow-sm md:right-10 md:top-5 lg:right-16">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
            <path
              d="M21.35 11.1H12v2.98h5.38c-.23 1.5-1.76 4.4-5.38 4.4-3.24 0-5.88-2.67-5.88-5.97S8.76 6.54 12 6.54c1.84 0 3.07.78 3.78 1.46l2.58-2.5C16.74 4.01 14.56 3 12 3 7.03 3 3 7.03 3 12s4.03 9 9 9c5.19 0 8.62-3.65 8.62-8.79 0-.59-.06-1.03-.14-1.11z"
              fill="#FFC107"
            />
            <path
              d="M4.04 7.69l2.45 1.8C7.15 8.18 8.47 6.54 12 6.54c1.84 0 3.07.78 3.78 1.46l2.58-2.5C16.74 4.01 14.56 3 12 3 8.55 3 5.56 4.97 4.04 7.69z"
              fill="#FF3D00"
            />
            <path
              d="M12 21c2.5 0 4.6-.82 6.14-2.23l-2.84-2.27c-.76.54-1.78.98-3.3.98-3.61 0-5.15-2.89-5.39-4.39l-2.43 1.87C5.68 18.05 8.6 21 12 21z"
              fill="#4CAF50"
            />
            <path
              d="M21.35 11.1H12v2.98h5.38c-.11.71-.52 1.74-1.37 2.42l.01-.01 2.84 2.27c-.2.19 2.14-1.56 2.14-6.76 0-.59-.06-1.03-.14-1.11z"
              fill="#1976D2"
            />
          </svg>
        </span>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
          Google Student
        </p>
      </div>

      <section className="mx-auto max-w-6xl">
        <nav className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-orange-200/80 bg-white/90 px-4 py-4 shadow-sm backdrop-blur md:px-6">
          <div>
            <h1 className="font-display text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Student Batch Portal
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Browse institutes and purchase your ideal online batch.
            </p>
          </div>
          <form action={logoutAction}>
            <button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
              Logout
            </button>
          </form>
        </nav>

        <div className="animate-fade-in-up rounded-3xl border border-orange-200/80 bg-white/85 p-5 shadow-sm md:p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search institute, batch, or skill"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-orange-400"
              />
              <button className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
                Search
              </button>
            </div>
            <button className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400">
              Filter Batches
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-700">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">
              Live
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Weekend</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              Beginner
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              Job Support
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              Certificate
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl gap-5 lg:grid-cols-[1fr_300px]">
        <div className="space-y-5">
          {institutes.map((institute) => (
            <article
              key={institute.name}
              className="animate-fade-in-up-delay rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-700">
                    {institute.category}
                  </p>
                  <h2 className="font-display mt-1 text-3xl text-slate-900">
                    {institute.name}
                  </h2>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-orange-50 px-4 py-2 text-sm text-slate-700">
                  <p>
                    Rating:{' '}
                    <span className="font-semibold text-slate-900">
                      {institute.rating}
                    </span>
                  </p>
                  <p>
                    Learners:{' '}
                    <span className="font-semibold text-slate-900">
                      {institute.learners}
                    </span>
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {institute.batches.map((batch) => (
                  <div
                    key={batch.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                  >
                    <h3 className="font-semibold text-slate-900">
                      {batch.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {batch.schedule}
                    </p>
                    <p className="text-sm text-slate-600">{batch.duration}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="font-display text-3xl text-slate-900">
                        {batch.price}
                      </p>
                      <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Purchase Batch
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-3xl border border-orange-200/80 bg-linear-to-br from-amber-50 via-white to-orange-50 p-5 shadow-sm lg:sticky lg:top-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-700">
            Quick Summary
          </p>
          <h3 className="font-display mt-2 text-3xl text-slate-900">
            Your Cart
          </h3>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <div className="rounded-xl border border-orange-100 bg-white px-3 py-2">
              <p className="font-semibold text-slate-900">
                React + Next.js Pro Batch
              </p>
              <p>NextGen Institute</p>
            </div>
            <div className="rounded-xl border border-orange-100 bg-white px-3 py-2">
              <p className="font-semibold text-slate-900">
                Power BI + SQL Job Track
              </p>
              <p>DataBridge Academy</p>
            </div>
          </div>
          <div className="mt-5 rounded-xl border border-slate-200 bg-white px-4 py-3">
            <p className="text-sm text-slate-600">Total Payable</p>
            <p className="font-display text-4xl text-slate-900">$268</p>
          </div>
          <button className="mt-5 w-full rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
            Proceed to Checkout
          </button>
          <button className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400">
            View All Institutes
          </button>
        </aside>
      </section>

      <section className="mx-auto mt-8 max-w-6xl pb-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-600 shadow-sm">
          Need help choosing a batch? Chat with a counselor and get
          institute-wise recommendations based on your goals.
        </div>
      </section>
    </main>
  );
};

export default StudentPortal;
