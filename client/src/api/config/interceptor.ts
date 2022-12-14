import axios from 'axios';
import { removeCookie, setCookie } from '@utils/cookies';

import type { Instance, ApiError, Refresh } from './types';

const interceptor = (instance: Instance) => {
  const baseURL = process.env.REACT_APP_API_URL;

  let lock = false;
  let subscribers: ((token: string) => void)[] = [];

  const RESOURCE = 'users';
  const refreshURL = `${baseURL}/${RESOURCE}/refresh`;

  const subscribeTokenRefresh = (cb: (token: string) => void) => {
    subscribers.push(cb);
  };

  const onRrefreshed = (token: string) => {
    subscribers.forEach((cb) => cb(token));
  };

  const onRefresh = async (): Promise<string | void> => {
    try {
      const {
        token: { accessToken, refreshToken },
      } = await instance.get<Refresh>(refreshURL);

      lock = false;
      onRrefreshed(accessToken);
      subscribers = [];
      localStorage.setItem('token', accessToken);

      if (refreshToken !== null) {
        setCookie('token', refreshToken);
      }

      return accessToken;
    } catch (e) {
      lock = false;
      subscribers = [];
      localStorage.removeItem('token');
      removeCookie('token');
    }
  };

  instance.interceptors.request.use((config) => {
    if (!config.headers) return config;

    let token: string | null = null;

    if (config.url !== refreshURL) {
      token = localStorage.getItem('token');
    }

    if (token !== null) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  });

  instance.interceptors.response.use(
    (res) => res.data,
    async ({ config, response: { status } }) => {
      const originalRequest = config;
      originalRequest.headers = { ...originalRequest.headers };

      const error = {
        status,
        message: `${status} 네트워크 오류가 발생하였습니다.`,
      };

      if (config.url === refreshURL || status !== 401) {
        console.log('401');
        return Promise.reject(error);
      }

      if (lock) {
        return new Promise((resolve) => {
          subscribeTokenRefresh((token: string) => {
            originalRequest.headers.authorization = `Bearer ${token}`;
            resolve(axios(originalRequest));
          });
        });
      }

      lock = true;
      const accessToken = await onRefresh();

      if (typeof accessToken === 'string') {
        config.headers.authorization = `Bearer ${accessToken}`;
        return axios(config);
      }

      return Promise.reject<ApiError>(error);
    },
  );
};

export default interceptor;
