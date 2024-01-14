'use client';
import { useBtnLoading } from '@/hooks/useBtnLoading';
import { Button } from '@material-tailwind/react';
import React from 'react';

const ConfirmBtnComponent = () => {
  const { isLoading, btnHandler } = useBtnLoading('/search-result/list');

  return (
    <Button
      placeholder="button"
      loading={isLoading ? true : false}
      type="button"
      onClick={btnHandler}
      className="font-pretendard flex items-center justify-center rounded-[4px] h-11 bg-action-primary text-t2 text-white font-semibold shadow-none"
    >
      {isLoading ? '검색중...' : '검색하기'}
    </Button>
  );
};

export default ConfirmBtnComponent;
