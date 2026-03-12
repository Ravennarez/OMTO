import React, { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import { useBudget } from '../context/BudgetContext';

const TransactionPanel = () => {
  const { addMockTransaction, categories } = useBudget();
  const [reference, setReference] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    description: '',
    categoryId: categories[0]?.id ?? '',
    amount: '',
  });

  const handleQuickSubmit = () => {
    if (!reference.trim()) return;
    addMockTransaction({ type: 'quick', reference });
    alert(`Mock transaction submitted: ${reference}`);
    setReference('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleQuickSubmit();
    }
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!form.description || !form.amount) return;
    addMockTransaction({ type: 'detailed', ...form });
    alert('Mock detailed transaction submitted. Check console for payload.');
    setForm({
      description: '',
      categoryId: categories[0]?.id ?? '',
      amount: '',
    });
    closeModal();
  };

  return (
    <>
      <section className="card mb-6 px-6 py-4 md:px-8 md:py-4">
        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="btn-success"
              onClick={openModal}
            >
              <FiPlus className="mr-2" />
              New Transaction
            </button>
          </div>
          <div className="w-full md:max-w-md">
            <label className="block text-xs font-medium uppercase tracking-wide text-slate-500">
              Transaction Reference
            </label>
            <input
              type="text"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Press Enter to submit"
              className="mt-1 w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm shadow-inner outline-none transition focus:bg-white focus:ring-2 focus:ring-primary/60"
            />
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/40 px-4">
          <div className="card relative w-full max-w-lg px-6 py-5">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-3 top-3 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
            >
              <FiX />
            </button>
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              New Transaction (Mock)
            </h2>
            <p className="mb-4 text-sm text-slate-500">
              This form does not save data. Submissions are logged to the console for demonstration.
            </p>
            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={handleModalChange}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/60"
                  required
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Category
                  </label>
                  <select
                    name="categoryId"
                    value={form.categoryId}
                    onChange={handleModalChange}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/60"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Amount (₱)
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={form.amount}
                    onChange={handleModalChange}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/60"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-success">
                  Submit Mock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TransactionPanel;

