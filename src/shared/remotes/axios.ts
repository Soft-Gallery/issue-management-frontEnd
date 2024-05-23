import axios, { CreateAxiosDefaults } from 'axios';

const defaultConfig: CreateAxiosDefaults = {
  baseURL: 'https://89b5f462588c.ngrok.app',
}

const client = axios.create(defaultConfig);

export { client };