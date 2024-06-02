import axios, { AxiosRequestConfig } from 'axios';
import { SERVER_URL } from './constants';

const defaultConfig: AxiosRequestConfig = {
  baseURL: SERVER_URL,
}

const client = axios.create(defaultConfig);

export { client };