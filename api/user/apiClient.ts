import axios from 'axios';
import nookies from 'nookies';
import { getNewToken } from './api';

export const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});

const accessToken = nookies.get(null)['accessToken'];
const refreshToken = nookies.get(null)['refreshToken'];

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
    console.log('기존 액세스', accessToken);
    const originalRequest = error.config;
    console.log(error);

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      console.log('refresh', refreshToken);

      const res = await getNewToken();
      console.log('발급요청 성공 토큰', res.data);

      const accessToken = res.data;

      if (accessToken) {
        nookies.set(null, 'accessToken', accessToken, {
          path: '/',
        });
        console.log('집어넣는 토큰', accessToken);

        // 재시도
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return apiClient.request(originalRequest);
      }
    }

    //재발급 수정 필요
    console.log(Promise.reject(error));

    return Promise.reject(error);
  },
);
