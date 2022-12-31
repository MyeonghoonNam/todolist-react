import axios from 'axios';
import interceptor from './interceptor';

import type { Instance } from './types';

const createInterceptor = () => {
  const instance: Instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  interceptor(instance);

  return instance;
};

const config = createInterceptor();

export default config;
