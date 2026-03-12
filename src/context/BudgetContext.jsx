import React, { createContext, useContext, useMemo, useState } from 'react';
import { budgetCategories as baseCategories, transactions as baseTx, summaryStats as baseSummary } from '../data/mockData';

const BudgetContext = createContext(null);

export const BudgetProvider = ({ children }) => {
  const [transactions] = useState(baseTx);
  const [categories] = useState(baseCategories);

  const summary = useMemo(() => {
    return baseSummary;
  }, []);

  const addMockTransaction = (payload) => {
    // Mock only – no state mutation, just log to console
    // This keeps behavior simple while demonstrating flow.
    // eslint-disable-next-line no-console
    console.log('New mock transaction submitted:', payload);
  };

  const value = {
    categories,
    transactions,
    summary,
    addMockTransaction,
  };

  return <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>;
};

export const useBudget = () => {
  const ctx = useContext(BudgetContext);
  if (!ctx) {
    throw new Error('useBudget must be used within BudgetProvider');
  }
  return ctx;
};

