import React, { useMemo, useState } from 'react';
import { useBudget } from '../context/BudgetContext';

const formatCurrency = (value) =>
  `₱${value.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const TransactionsTable = () => {
  const { transactions } = useBudget();
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    if (!term) return transactions;
    return transactions.filter(
      (tx) =>
        tx.description.toLowerCase().includes(term) ||
        tx.category.toLowerCase().includes(term),
    );
  }, [transactions, search]);

  return (
    <section className="card mt-6 px-4 py-4 md:px-6 md:py-5">
      <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h3 className="card-title">Transactions</h3>
        <div className="w-full md:max-w-xs">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by description or category..."
            className="w-full rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:bg-white focus:ring-2 focus:ring-primary/60"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="whitespace-nowrap px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Date
              </th>
              <th className="whitespace-nowrap px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Description
              </th>
              <th className="whitespace-nowrap px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Category
              </th>
              <th className="whitespace-nowrap px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                ARO Ref
              </th>
              <th className="whitespace-nowrap px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                Allocated (₱)
              </th>
              <th className="whitespace-nowrap px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                Obligated (₱)
              </th>
              <th className="whitespace-nowrap px-3 py-2 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                Balance
              </th>
              <th className="whitespace-nowrap px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Formula
              </th>
              <th className="whitespace-nowrap px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {filtered.map((tx) => (
              <tr key={tx.id} className="hover:bg-slate-50">
                <td className="whitespace-nowrap px-3 py-2 text-xs text-slate-600">
                  {tx.date}
                </td>
                <td className="whitespace-nowrap px-3 py-2 text-sm font-medium text-slate-800">
                  {tx.description}
                </td>
                <td className="whitespace-nowrap px-3 py-2 text-xs text-slate-600">
                  {tx.category}
                </td>
                <td className="whitespace-nowrap px-3 py-2 text-xs text-slate-600">
                  {tx.aroRef}
                </td>
                <td className="whitespace-nowrap px-3 py-2 text-right text-xs text-slate-700">
                  {formatCurrency(tx.allocated)}
                </td>
                <td className="whitespace-nowrap px-3 py-2 text-right text-xs text-slate-700">
                  {formatCurrency(tx.obligated)}
                </td>
                <td className="whitespace-nowrap px-3 py-2 text-right text-xs text-slate-700">
                  {formatCurrency(tx.balance)}
                </td>
                <td className="whitespace-nowrap px-3 py-2 text-xs text-slate-600">
                  {tx.formula}
                </td>
                <td className="whitespace-nowrap px-3 py-2 text-xs text-slate-500">
                  {tx.notes}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={9}
                  className="px-3 py-6 text-center text-xs text-slate-500"
                >
                  No transactions match the current search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionsTable;

