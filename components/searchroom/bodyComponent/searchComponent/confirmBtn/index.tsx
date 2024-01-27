'use client';
import { useBtnLoading } from '@/hooks/useBtnLoading';
import { Button } from '@material-tailwind/react';
import React from 'react';

const ConfirmBtnComponent = () => {
  const { isBtnLoading, btnHandler } = useBtnLoading('/search-result/list');

  return (
    <div className="fixed bottom-0 max-w-[480px] w-full px-5 mb-5 ">
      <Button
        placeholder="button"
        loading={isBtnLoading ? true : false}
        type="button"
        onClick={btnHandler}
        className="font-pretendard flex items-center justify-center rounded-[4px] w-full h-11 bg-action-primary text-t2 text-white font-semibold shadow-none"
      >
        {isBtnLoading ? '검색중...' : '검색하기'}
      </Button>
    </div>
  );
};

export default ConfirmBtnComponent;
