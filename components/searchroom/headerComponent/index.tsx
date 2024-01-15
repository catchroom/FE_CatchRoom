// import Header from '@/components/common/header';
'use client';
import React from 'react';
import LeftArrowComponent from '@/public/svgComponent/leftArrow';
import { useRouter } from 'next/navigation';

const HeaderComponent = () => {
  const router = useRouter();

  const backPageHandler = () => {
    router.back();
  };
  return (
    <>
      {/* 공동컴포넌트가 수정되면, 교체 될 예정! */}
      {/* <Header title="숙소 찾기" showBackButton={true} showMoreButton={true} /> */}
      <div className="relative flex w-full h-14 p-4 items-center justify-center bg-gray-100 border-gray-300 border-b-[1px] text-t1 font-semibold">
        <button className="absolute left-0 p-3" onClick={backPageHandler}>
          <LeftArrowComponent />
        </button>
        <p className="text-t1 font-semibold">숙소 찾기</p>
      </div>
    </>
  );
};

export default HeaderComponent;
