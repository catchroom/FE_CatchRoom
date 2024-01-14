'use client';
import { Button } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ConfirmBtnComponent = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      const loading = setTimeout(() => {
        setIsActive(false);
      }, 4000);
      return () => clearTimeout(loading);
    }
  }, [isActive, setIsActive]);

  const searchHandler = () => {
    router.push('/search-result/list');
    setIsActive(true);
  };

  return (
    <Button
      placeholder="button"
      loading={isActive ? true : false}
      type="button"
      onClick={searchHandler}
      className="font-pretendard flex items-center justify-center rounded-[4px] h-11 bg-action-primary text-t2 text-white font-semibold shadow-none"
    >
      {isActive ? '검색중...' : '검색하기'}
    </Button>
  );
};

export default ConfirmBtnComponent;
