import axios from 'axios';
import nookies from 'nookies';

export const apiChatClient = axios.create({
  baseURL: `https://catchroom.store/`,
});

apiChatClient.interceptors.request.use(
  (config) => {
    console.log('config', config);
    const accessToken = nookies.get(null)['accessToken'];
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

apiChatClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    //로그아웃 할때는 재발급 요청 안되게 추가
    if (error.config.url === '/v1/mypage/logout') {
      return Promise.reject(error);
    }
    //재발급 요청
    if (
      error.response.status === 401 ||
      error.response.status === 5000 ||
      error.response.status === 5001
    ) {
      const refreshToken = nookies.get(null)['refreshToken'];
      const res = await apiChatClient.post(
        '/v1/user/accesstoken',
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${refreshToken}`,
          },
        },
      );

      const accessToken = res.data.accessToken;
      if (accessToken) {
        nookies.set(null, 'accessToken', accessToken, {
          path: '/',
        });

        // 재시도
        error.config.headers['Authorization'] = `Bearer ${accessToken}`;
        return apiChatClient.request(error.config);
      }
    }

    return Promise.reject(error);
  },
);
