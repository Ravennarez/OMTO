import React from 'react';

const Header = () => {
  return (
    <header className="card mb-6 px-6 py-5 md:px-8 md:py-6">
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Municipality of Bulu Ban
          </p>
          <h1 className="mt-1 text-xl font-bold text-slate-900 md:text-2xl">
            Office of the Municipal Tourism Officer (OMTO)
          </h1>
          <p className="mt-1 text-sm text-slate-600 md:text-base">
            Fiscal Year Budget Allocation &amp; Obligation Tracker
          </p>
        </div>
        <div className="mt-3 flex items-center gap-2 md:mt-0">
          <span className="badge bg-primary/10 text-primary ring-1 ring-primary/20">
            Budget Monitoring
          </span>
          <span className="badge bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
            Tourism Office
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

