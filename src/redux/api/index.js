import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ?
  process.env.REACT_APP_SERVER_URL_PRO :
  process.env.REACT_APP_SERVER_URL_DEV;

const API = axios.create({
  baseURL: baseURL
});

export default API;
