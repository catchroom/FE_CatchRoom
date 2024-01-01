import axios from 'axios';

export const getSocialAuth = (authCode: string) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/callback`,
    { authCode: authCode },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
};
