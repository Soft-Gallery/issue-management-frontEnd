import axios, { CreateAxiosDefaults } from 'axios';

const defaultConfig: CreateAxiosDefaults = {
  baseURL: 'http://localhost:8080/',
}

const client = axios.create(defaultConfig);

export { client };
