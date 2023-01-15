import axios from 'axios';

const BASE_API_URL = 'http://localhost:3333';

const api = axios.create({
  baseURL: BASE_API_URL,
});

export default api;
