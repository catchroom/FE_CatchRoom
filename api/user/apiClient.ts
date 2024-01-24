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
    console.log('outerError.response', JSON.stringify(outerError.response));
    console.log(outerError.response.data.code); //5001

    if (
      (outerError.response.data.code === 401 ||
        outerError.response.data.code === 5000 ||
        outerError.response.data.code === 5001 ||
        outerError.response.status === 401) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const res = await getNewToken();
        const accessToken = res.data;
        nookies.set(null, 'accessToken', accessToken, {
          path: '/',
          maxAge: 60 * 30,
        });

        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        const response = await apiClient.request(originalRequest);
        console.log('재시도 성공:', response.data);

        return response;
      } catch (innerError) {
        console.log('재시도 실패:', innerError);
        return Promise.reject(originalRequest);
      }
    }

    return Promise.reject(outerError);
  },
);
