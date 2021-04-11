import axios from 'axios';

const api = axios.create({
  baseURL: `http://${process.env.VERCEL_URL || 'localhost'}:3000/api`,
});

export { api };
