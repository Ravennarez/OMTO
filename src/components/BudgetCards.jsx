import React from 'react';
import { useBudget } from '../context/BudgetContext';

const formatCurrency = (value) =>
  `₱${value.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const BudgetCards = () => {
  const { categories } = useBudget();

  return (
    <section className="mb-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((cat) => {
          const balance = cat.allocated - cat.obligated;
          const percent =
            cat.allocated === 0 ? 0 : Math.round((cat.obligated / cat.allocated) * 100);

          return (
            <div key={cat.id} className="card px-5 py-4">
              <div className="card-header">
                <span className="uppercase tracking-wide text-[11px] text-slate-500">
                  {cat.name}
                </span>
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
              </div>
              <div className="mt-1 flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs text-slate-500">Total Allocation</p>
                  <p className="text-lg font-semibold text-slate-900">
                    {formatCurrency(cat.allocated)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">Obligated</p>
                  <p className="font-medium text-slate-800">
                    {formatCurrency(cat.obligated)}{' '}
                    <span className="text-xs text-slate-500">({percent}%)</span>
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Balance</span>
                  <span>{formatCurrency(balance)}</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{
                      width: `${percent}%`,
                      background: `linear-gradient(to right, ${cat.color}, ${cat.color}CC)`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BudgetCards;

