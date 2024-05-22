import axios, { CreateAxiosDefaults } from 'axios';

const defaultConfig: CreateAxiosDefaults = {
  baseURL: 'https://c9a7ae4e4be9.ngrok.app',
}

const client = axios.create(defaultConfig);

export { client };