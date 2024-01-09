import React, { useEffect } from 'react';

/**
 * @function useDebounceText - text를 받아서 delay 시간만큼 기다렸다가 text를 반환하는 hook
 * @param text - debounce를 적용할 text
 * @param delay - debounce를 적용할 시간
 * @returns debounceText - delay 시간만큼 기다렸다가 text를 반환하는 text
 * @example const debounceText = useDebounceText(text, 500);
 * @summary debounce를 적용할 text를 params로 넣어서 활용, react-hook-form에서 watch를 사용할 때 watch로 받은 text를 debounceText로 넣어서 사용
 */

export const useDebounceText = (text: string, delay: number) => {
  const [debounceText, setDebounceText] = React.useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceText(text);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [text, delay]);
  return debounceText;
};
