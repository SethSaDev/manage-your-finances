export const exportToCSV = (transactions) => {
  const headers = ['Date', 'Description', 'Category', 'Amount'];
  const rows = transactions.map((t) => [t.date, `"${t.text}"`, t.category, t.amount]);
  const csv = [headers, ...rows].map((r) => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'transactions.csv';
  a.click();
  URL.revokeObjectURL(url);
};
