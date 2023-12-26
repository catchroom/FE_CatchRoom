import { getCurrentUrl } from '@/utils/get-current-url';

// 셈플

export const fetchText = async () => {
  const url = getCurrentUrl();
  const response = await fetch(`${url}/api/do`, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('api error');
  }

  const data = await response.text();
  return data;
};
