import axios from 'axios';
import nookies from 'nookies';

//fetch로 추후에 바꿀지 결정

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
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    //토큰 만료시 재요청
    //5000은 액세스 만료, 5001일때는 아마도 리프레쉬 만료..?, 5002는 서비스에러
    if (error.response.status === 401 || error.response.status === 5000) {
      const refreshToken = nookies.get(null)['refreshToken'];
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
