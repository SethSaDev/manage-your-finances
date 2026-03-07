export const formatMoney = (num) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);

export const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
