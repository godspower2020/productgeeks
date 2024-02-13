import axios from 'axios';

const API = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export default API;
