import { useRouter } from 'next/navigation';
import React, { MouseEventHandler, useEffect } from 'react';

/**
 * @function useBtnLoading - material tailwind 버튼의 로딩효과 및 페이지 전환을 위한 커스텀 훅입니다.
 * @param pushURL - 클릭 시 다음페이지로 넘어갈 URL을 입력해주세요. `ex: /catch-items`
 * @returns { isLoading, btnHandler } - isLoading는 버튼의 상태값, btnHandler는 버튼 핸들러 함수입니다.
 * @example const { isLoading, btnHandler } = useBtnLoading('/catch-items');
 */

export const useBtnLoading = (pushURL: string) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  useEffect(() => {
    if (isLoading) {
      const loading = setTimeout(() => {
        setIsLoading(false);
      }, 4000);
      return () => clearTimeout(loading);
    }
  }, [isLoading, setIsLoading]);

  const btnHandler: MouseEventHandler<HTMLButtonElement> = () => {
    router.push(`${pushURL}`);
    setIsLoading(true);
  };

  return { isLoading, btnHandler };
};
