const BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = async (path, options = {}) => {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const transactionService = {
  getAll:  (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return api(`/transactions${qs ? `?${qs}` : ''}`);
  },
  create:  (data)     => api('/transactions',       { method: 'POST',   body: JSON.stringify(data) }),
  update:  (id, data) => api(`/transactions/${id}`, { method: 'PUT',    body: JSON.stringify(data) }),
  remove:  (id)       => api(`/transactions/${id}`, { method: 'DELETE' }),
};
