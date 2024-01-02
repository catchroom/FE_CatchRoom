import React from 'react';
import DotsVertical from '../../../public/dotsVertical.svg';

const chatItem = async () => {
  return (
    <div className="bg-white w-full h-18 flex items-center px-4 py-3 border-solid border border-gray-300">
      <img src="/productImage.png" className="pr-3"></img>
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="font-semibold pr-2">판매자닉네임</div>
          <div className="text-xs text-grey">1주 전</div>
        </div>
        <div className="flex">
          <div>네 가능합니다.</div>
          <div className="bg-blue-gray-300 px-2 rounded-full text-white ml-2  ">
            1
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <DotsVertical />
      </div>
    </div>
  );
};

export default chatItem;
