import { useRouter } from 'next/navigation';
import React, { MouseEventHandler, useEffect } from 'react';

/**
 * @function useBtnLoading - 버튼
 * @param pushURL - 클릭 시 다음페이지로 넘어갈 URL을 입력해주세요. `ex: /catch-items`
 * @returns { isActive, btnHandler }
 * @example const debounceText = useDebounceText(text, 500);
 */

export const useBtnLoading = (pushURL: string) => {
  const router = useRouter();
  const [isActive, setIsActive] = React.useState<boolean>(false);

  useEffect(() => {
    if (isActive) {
      const loading = setTimeout(() => {
        setIsActive(false);
      }, 4000);
      return () => clearTimeout(loading);
    }
  }, [isActive, setIsActive]);

  const btnHandler: MouseEventHandler<HTMLButtonElement> = () => {
    router.push(`${pushURL}`);
    setIsActive(true);
  };

  return { isActive, btnHandler };
};
