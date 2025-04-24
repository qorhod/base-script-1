import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://172.20.10.13:3000/api', // استخدام Proxy بدلاً من localhost:3000
   baseURL : import.meta.env.NEXT_PUBLIC_API_BASE_URL || "http://172.20.10.13:3000/api",

  // baseURL: 'https://api.blokah.com/api', // استخدام Proxy بدلاً من localhost:3000

  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
