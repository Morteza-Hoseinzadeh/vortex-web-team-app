import axios from 'axios';

const axiosInstance: any = axios.create({
  baseURL: process.env.BASE_URL || 'https://vortexwebteam.ir',
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
