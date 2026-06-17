import axios from 'axios';

const axiosInstance: any = axios.create({
  baseURL: 'https://vortexwebteam.ir:3000',
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
