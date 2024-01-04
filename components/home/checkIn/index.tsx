'use client';
import CatchSpecialComponent from '@/components/common/catchComponent';
import { ITEMS_INFO } from '@/constants/catchItems';
import { useRouter } from 'next/navigation';
import React from 'react';

const CheckInComponent = () => {
  const router = useRouter();
  return (
    <div className="relative w-full h-[51.9375rem] mt-14 ">
      <div className="text-h4 font-extrabold">체크인 마감임박!</div>
      {/* 날짜별 마감임박 상품조회 컴포넌트 */}
      <div className="relative w-full h-[34.375rem] rounded-lg border-2 border-border-sub bg-white pt-5 px-5 mt-3 mx-auto">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-20" />
        {/* 날짜 컴포넌트 */}
        <div className="flex flex-wrap items-center justify-between h-[4rem] mb-[1.75rem] text-p1 font-semibold">
          <button className="relative flex flex-col items-center">
            <div className="absolute -translate-y-2">
              <span className="w-[6px] h-[6px] rounded-full bg-main" />
            </div>
            <div className="text-text-sub mb-1">일</div>
            <div className="flex items-center justify-center w-[2rem] h-[2rem]">
              24
            </div>
          </button>
          <button className="relative flex flex-col items-center">
            <span className=""></span>
            <div className="text-text-sub mb-1">월</div>
            <div className="flex items-center justify-center w-[2rem] h-[2rem] text-white bg-black rounded-full">
              25
            </div>
          </button>
          <button className="relative flex flex-col items-center">
            <span className=""></span>
            <div className="text-text-sub mb-1">화</div>
            <div className="flex items-center justify-center w-[2rem] h-[2rem]">
              26
            </div>
          </button>
          <button className="relative flex flex-col items-center">
            <span className=""></span>
            <div className="text-text-sub mb-1">수</div>
            <div className="flex items-center justify-center w-[2rem] h-[2rem]">
              27
            </div>
          </button>
          <button className="relative flex flex-col items-center">
            <span className=""></span>
            <div className="text-text-sub mb-1">목</div>
            <div className="flex items-center justify-center w-[2rem] h-[2rem]">
              28
            </div>
          </button>
          <button className="relative flex flex-col items-center">
            <span className=""></span>
            <div className="text-text-sub mb-1">금</div>
            <div className="flex items-center justify-center w-[2rem] h-[2rem]">
              29
            </div>
          </button>
          <button className="relative flex flex-col items-center">
            <span className=""></span>
            <div className="text-text-sub mb-1">토</div>
            <div className="flex items-center justify-center w-[2rem] h-[2rem]">
              30
            </div>
          </button>
        </div>
        {/* 캐치특가 상품 컴포넌트 */}
        <div className="container w-full h-[27.14rem] flex flex-wrap gap-11 overflow-auto">
          {ITEMS_INFO.roomItems.slice(0, 3).map((item, index) => {
            return (
              <div
                key={item.roomName}
                className={`w-full ${index === 2 ? 'mb-24' : ''}`}
              >
                <CatchSpecialComponent
                  roomName={item.roomName}
                  roomType={item.roomType}
                  resDate={item.resDate}
                  oldPrice={item.oldPrice}
                  discount={item.discount}
                />
              </div>
            );
          })}
        </div>
        {/* 버튼 컴포넌트 */}
        <div className="relative w-full">
          <button
            className="absolute z-20 bottom-5 flex items-center justify-center w-full h-[2.75rem] rounded-md border border-border-primary text-text-primary font-bold bg-white"
            onClick={() => {
              router.push('/catchitems');
            }}
          >
            전체보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckInComponent;
