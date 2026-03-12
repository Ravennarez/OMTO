export const budgetCategories = [
  {
    id: 'capacityDevelopment',
    name: 'Capacity Development',
    code: 'Cap. Dev.',
    allocated: 400000,
    obligated: 100000,
    color: '#2563eb',
  },
  {
    id: 'tmPromotions',
    name: 'TM & Promotions',
    code: 'TM & Promo.',
    allocated: 500000,
    obligated: 0,
    color: '#16a34a',
  },
  {
    id: 'socioCulturalEco',
    name: 'Socio-Cultural & Eco',
    code: 'Socio-Cultural',
    allocated: 3000000,
    obligated: 200000,
    color: '#f97316',
  },
  {
    id: 'productMarketDev',
    name: 'Product & Market Dev',
    code: 'Product & Mkt Dev',
    allocated: 1500000,
    obligated: 0,
    color: '#6366f1',
  },
];

export const transactions = [
  {
    id: 1,
    date: 'Feb 7, 2026',
    description: 'Kasanggyahan',
    category: 'SCET',
    aroRef: 'T12',
    allocated: 200000,
    obligated: 200000,
    balance: 0,
    formula: 'PO',
    notes: '—',
  },
  {
    id: 2,
    date: 'Feb 7, 2026',
    description: 'Dive Bulusan',
    category: 'Cap. Dev.',
    aroRef: '—',
    allocated: 100000,
    obligated: 100000,
    balance: 0,
    formula: 'PO',
    notes: '—',
  },
];

const totalAllocated = budgetCategories.reduce(
  (sum, cat) => sum + cat.allocated,
  0,
);
const totalObligated = budgetCategories.reduce(
  (sum, cat) => sum + cat.obligated,
  0,
);

export const summaryStats = {
  totalAllocated,
  totalObligated,
  totalBalance: totalAllocated - totalObligated,
  overallObligationRate:
    totalAllocated === 0 ? 0 : (totalObligated / totalAllocated) * 100,
};

