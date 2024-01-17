import axios from 'axios';
import nookies from 'nookies';

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
    if (
      error.response.status === 401 ||
      error.response.status === 5000 ||
      error.response.status === 5001
    ) {
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
