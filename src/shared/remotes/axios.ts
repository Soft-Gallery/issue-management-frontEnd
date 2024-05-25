import axios, { CreateAxiosDefaults } from 'axios';

const defaultConfig: CreateAxiosDefaults = {
  baseURL: 'https://localhost:8080/',
}

const client = axios.create(defaultConfig);

export { client };
