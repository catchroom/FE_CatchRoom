'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import LeftButtonIcon from './leftButtonIcon';
import { useRecoilState } from 'recoil';
import { isFromSalePageState } from '@/atoms/sale/pageAtom';

const LeftButton = () => {
  const router = useRouter();

  const [isFromSalePage, setIsFromSalePage] =
    useRecoilState(isFromSalePageState);

  const backPageHandler = () => {
    // 현재 경로가 /sale인지 확인
    if (isFromSalePage) {
      // /sale 경로일 경우 홈(/)으로 리다이렉트
      setIsFromSalePage(false);
      router.push('/');
    } else {
      // 그 외의 경우 이전 페이지로 돌아감
      router.back();
    }
  };

  return (
    <button
      className="flex items-center justify-center w-[1.75rem] h-[1.75rem] "
      onClick={backPageHandler}
    >
      <LeftButtonIcon />
    </button>
  );
};

export default LeftButton;
