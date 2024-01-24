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
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      // nookies.destroy(null, 'accessToken'); //액세스 토큰 만료시 지워버리기

      return getNewToken()
        .then((res) => {
          // console.log('발급요청 성공 토큰', res.data);

          const accessToken = res.data;

          nookies.set(null, 'accessToken', accessToken, {
            path: '/',
            maxAge: 60 * 30,
          });

          // 재시도
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          return apiClient.request(originalRequest).then(
            (response) => {
              console.log('재시도 성공:', response.data);
              return response;
            },
            (error) => {
              console.log('재시도 실패:', error);
              return Promise.reject(error);
            },
          );
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(error);
        });
    }

    return Promise.reject(error);
  },
);
