import React from 'react';

const MiddleHeader = () => {
  return (
    <div className="h-20 flex px-4 gap-5 items-center justify-between text-xl text-p1 font-semibold">
      <div className="flex flex-col items-center">
        <p className="text-gray-500 font-normal">수</p>
        <p className="rounded-full bg-main text-white flex items-center justify-center w-10 h-10 font-extrabold">
          25
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-gray-500 font-normal">목</p>
        <p className="rounded-full flex items-center justify-center w-10 h-10 font-extrabold">
          26
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-gray-500 font-normal">금</p>
        <p className="rounded-full flex items-center justify-center w-10 h-10 font-extrabold">
          27
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-gray-500 font-normal">토</p>
        <p className="rounded-full flex items-center justify-center w-10 h-10 font-extrabold">
          28
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-gray-500 font-normal">일</p>
        <p className="rounded-full flex items-center justify-center w-10 h-10 font-extrabold">
          29
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-gray-500 font-normal">월</p>
        <p className="rounded-full flex items-center justify-center w-10 h-10 font-extrabold">
          30
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-gray-500 font-normal">화</p>
        <p className="rounded-full flex items-center justify-center w-10 h-10 font-extrabold">
          31
        </p>
      </div>
    </div>
  );
};

export default MiddleHeader;
