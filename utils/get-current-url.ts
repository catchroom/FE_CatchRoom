import { headers } from 'next/headers';

/**
 * @function getCurrentUrl - 서버 컴포넌트에서 api 요청할 때 /api 앞에 붙여줄 url을 만들어주는 함수
 * - 개발 환경에서는 http://localhost:3000, 배포 환경에서는 배포주소를 반환한다.
 * @example const url = getCurrentUrl(); const response = await fetch(`${url}/api/...`);
 * @returns 현재 url
 */

export const getCurrentUrl = () => {
  const host = headers().get('host');
  const protocol = process?.env.NODE_ENV === 'production' ? 'https' : 'https';
  const url = `${protocol}://${host}`;

  return url;
};
