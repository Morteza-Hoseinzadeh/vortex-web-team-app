import axios from 'axios';

const axiosInstance: any = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
