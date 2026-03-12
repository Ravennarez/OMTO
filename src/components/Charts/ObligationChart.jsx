import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useBudget } from '../../context/BudgetContext';

const formatCurrencyShort = (value) =>
  `₱${value.toLocaleString('en-PH', {
    maximumFractionDigits: 0,
  })}`;

const ObligationChart = () => {
  const { categories } = useBudget();

  const data = categories.map((cat) => ({
    name: cat.code,
    Allocated: cat.allocated,
    Obligated: cat.obligated,
  }));

  return (
    <div className="card h-80 px-4 py-4 md:px-6">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="card-title">Obligation vs Allocation</h3>
        <span className="text-xs text-slate-500">Static mock data</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} />
          <YAxis
            tickFormatter={formatCurrencyShort}
            tickLine={false}
            width={80}
          />
          <Tooltip
            formatter={(value) => formatCurrencyShort(value)}
            labelFormatter={(label) => `Category: ${label}`}
          />
          <Legend />
          <Bar dataKey="Allocated" fill="#93c5fd" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Obligated" fill="#2563eb" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ObligationChart;

