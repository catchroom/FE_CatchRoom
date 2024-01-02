import React, { useEffect } from 'react';

export const useDebounceText = (text: string) => {
  const [debounceText, setDebounceText] = React.useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceText(text);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);
  return debounceText;
};
