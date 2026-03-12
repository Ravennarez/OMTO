import React from 'react';
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { useBudget } from '../../context/BudgetContext';

const formatCurrencyShort = (value) =>
  `₱${value.toLocaleString('en-PH', {
    maximumFractionDigits: 0,
  })}`;

const AllocationChart = () => {
  const { categories } = useBudget();

  const data = categories.map((cat) => ({
    name: cat.name,
    value: cat.allocated,
    color: cat.color,
  }));

  return (
    <div className="card h-80 px-4 py-4 md:px-6">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="card-title">Budget Allocation</h3>
        <span className="text-xs text-slate-500">By category</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, _name, props) => [
              formatCurrencyShort(value),
              props.payload.name,
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-2 flex flex-wrap gap-3 text-xs">
        {data.map((entry) => (
          <div key={entry.name} className="inline-flex items-center gap-1">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-slate-600">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllocationChart;

