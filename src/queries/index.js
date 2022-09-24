import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://prod.sogogi.shop:9000/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
