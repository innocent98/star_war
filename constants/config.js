import axios from 'axios';

export const userRequest = axios.create({
  baseURL: 'http://192.168.1.81:8800/api/',
});
