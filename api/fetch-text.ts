import { getCurrentUrl } from '@/utils/get-current-url';

export const fetchText = async () => {
  const url = getCurrentUrl();
  const response = await fetch(`${url}/api/testing/get`);

  if (!response.ok) {
    throw new Error('api error');
  }

  const data = await response.json();
  return data;
};
