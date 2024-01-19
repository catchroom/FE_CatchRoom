import axios from 'axios';
import nookies from 'nookies';

export const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});

const refreshToken = nookies.get(null)['refreshToken'];

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = nookies.get(null)['accessToken'];
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log('리프레쉬 있닝', refreshToken);
    //로그아웃 할때는 재발급 요청 안되게 추가
    if (error.config.url === '/v1/mypage/logout') {
      return Promise.reject(error);
    }
    //재발급 요청
    if (
      error.response.code === 401 ||
      error.response.code === 5000 ||
      error.response.code === 5001
    ) {
      console.log(refreshToken);
      const res = await apiClient.post(
        '/v1/user/accesstoken',
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${refreshToken}`,
          },
        },
      );

      console.log(res.data);

      const accessToken = res.data.accessToken;
      if (accessToken) {
        nookies.set(null, 'accessToken', accessToken, {
          path: '/',
        });

        // 재시도
        error.config.headers['Authorization'] = `Bearer ${accessToken}`;
        return apiClient.request(error.config);
      }
    }

    return Promise.reject(error);
  },
);
