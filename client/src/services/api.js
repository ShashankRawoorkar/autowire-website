import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

/**
 * Submit the multi-step contact form.
 * @param {{ painPoints: string[], budget: string, name: string, email: string, company?: string }} data
 */
export async function submitContactForm(data) {
  const response = await api.post('/contact', data);
  return response.data;
}
