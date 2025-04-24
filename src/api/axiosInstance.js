import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://172.20.10.13:3000/api', // استخدام Proxy بدلاً من localhost:3000

  baseURL: 'https://api.blokah.com', // استخدام Proxy بدلاً من localhost:3000

  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
