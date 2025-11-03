import axios from './axiosInstance.js';

export async function fetchTransactions() {
  // Placeholder. Replace with your backend endpoint when available.
  const { data } = await axios.get('/transactions');
  return data;
}

export async function createTransaction(payload) {
  const { data } = await axios.post('/transactions', payload);
  return data;
}


