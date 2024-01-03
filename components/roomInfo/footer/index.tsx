import HeartButton from '@/components/common/heartButton';
import React from 'react';

const FooterComponent = () => {
  return (
    <div className="fixed flex justify-center bottom-0 w-full max-w-[476px] h-[84px] bg-white border border-t-black z-10">
      <div className="flex items-center justify-between w-full">
        <div className="mx-3">
          <HeartButton />
        </div>
        <button className="flex justify-center items-center mr-3 w-2/5 h-[54px] border border-black">
          채팅하기
        </button>
        <button className="flex justify-center items-center mr-5 w-3/5 h-[54px] bg-black text-white">
          구매하기
        </button>
      </div>
    </div>
  );
};

export default FooterComponent;
