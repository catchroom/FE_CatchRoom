import axios from 'axios';
import nookies from 'nookies';
import { getNewToken } from './api';

export const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = nookies.get(null)['accessToken'];
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (outerError) => {
    const originalRequest = outerError.config;

    if (
      (outerError.response.data.code === 5000 ||
        outerError.response.data.code === 5001 ||
        outerError.response.status === 401) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const res = await getNewToken();
        const accessToken = res.data;

        console.log('재발급', res.data);

        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        const response = await apiClient.request(originalRequest);
        //헤더에 담긴지 확인

        nookies.set(null, 'accessToken', accessToken, {
          path: '/',
          maxAge: 60 * 30,
        });

        return response;
      } catch (innerError) {
        return Promise.reject(originalRequest);
      }
    }

    return Promise.reject(outerError);
  },
);
