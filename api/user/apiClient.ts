import axios from 'axios';
import nookies from 'nookies';
import { getNewToken } from './api';

export const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});

const accessToken = nookies.get(null)['accessToken'];
// const refreshToken = nookies.get(null)['refreshToken'];

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

    if (error.isAxiosError && !originalRequest._retry) {
      originalRequest._retry = true;

      // console.log('originalRequest', originalRequest);
      // console.log('refresh', refreshToken);

      return getNewToken().then((res) => {
        console.log('발급요청 성공 토큰', res.data);

        const accessToken = res.data;

        nookies.set(null, 'accessToken', accessToken, {
          path: '/',
          maxAge: 60 * 30,
        });
        console.log('집어넣는 토큰', accessToken);

        // 재시도
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
            apiClient.request(originalRequest).then(
              (response) => {
                console.log('재시도 요청 성공:', response.data);
                resolve(response);
              },
              (error) => {
                console.log('재시도 요청 실패:', error);
                reject(error);
              },
            );
          }, 3000); // 3초 대기
        });
      });
    }

    //재발급 수정 필요 --> 콘솔 확인하기
    console.log('재시도 테스트, 리턴값:', Promise.reject(error));

    return Promise.reject(error);
  },
);
