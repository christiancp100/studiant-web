import axios from 'axios';

const requestClient = axios.create({
  baseURL: process.env.backendUrl,
});

export default requestClient;
