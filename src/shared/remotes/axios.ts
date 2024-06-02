import axios, { CreateAxiosDefaults } from 'axios';
import { SERVER_URL } from './constants';

const defaultConfig: CreateAxiosDefaults = {
  baseURL: SERVER_URL,
}

const client = axios.create(defaultConfig);

export { client };
