import React from 'react';
import Header from './components/Header';
import TransactionPanel from './components/TransactionPanel';
import BudgetCards from './components/BudgetCards';
import ObligationChart from './components/Charts/ObligationChart';
import AllocationChart from './components/Charts/AllocationChart';
import TransactionsTable from './components/TransactionsTable';
import { BudgetProvider } from './context/BudgetContext';

const App = () => {
  return (
    <BudgetProvider>
      <div className="min-h-screen bg-slate-100">
        <div className="mx-auto max-w-7xl px-3 pb-8 pt-4 md:px-6 md:pt-6">
          <Header />
          <TransactionPanel />
          <BudgetCards />
          <section className="mb-2 grid gap-4 lg:grid-cols-2">
            <ObligationChart />
            <AllocationChart />
          </section>
          <TransactionsTable />
        </div>
      </div>
    </BudgetProvider>
  );
};

export default App;

