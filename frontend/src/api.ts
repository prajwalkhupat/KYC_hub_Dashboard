import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchCustomers = () => axios.get(`${API_URL}/customers`);
export const updateStatus = (id: string, status: string) =>
  axios.put(`${API_URL}/customers/${id}/status`, { status });
export const postAlert = (payload: any) =>
  axios.post(`${API_URL}/alerts`, payload);
