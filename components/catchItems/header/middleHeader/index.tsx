import React from 'react';

const MiddleHeader = () => {
  const istoday = true;
  return (
    <div className="py-3 ">
      <div className=" flex px-5 gap-3 items-center justify-between text-xl text-p1 font-semibold">
        <div className="flex flex-col items-center">
          {istoday ? (
            <div className="w-[6px] h-[6px] rounded bg-main z-10" />
          ) : (
            <div className="w-[6px] h-[6px] rounded bg-main z-10" />
          )}
          <p className="text-gray-500 font-normal mb-1">수</p>
          <p className="rounded-full bg-black text-white flex items-center justify-center w-[2rem] h-[2rem] font-extrabold">
            25
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-500 font-normal mb-1">목</p>
          <p className="rounded-full flex items-center justify-center w-[2rem] h-[2rem] font-extrabold">
            26
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-500 font-normal mb-1">금</p>
          <p className="rounded-full flex items-center justify-center w-[2rem] h-[2rem] font-extrabold">
            27
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-500 font-normal mb-1">토</p>
          <p className="rounded-full flex items-center justify-center w-[2rem] h-[2rem] font-extrabold">
            28
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-500 font-normal mb-1">일</p>
          <p className="rounded-full flex items-center justify-center w-[2rem] h-[2rem] font-extrabold">
            29
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-500 font-normal mb-1">월</p>
          <p className="rounded-full flex items-center justify-center w-[2rem] h-[2rem] font-extrabold">
            30
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-500 font-normal mb-1">화</p>
          <p className="rounded-full flex items-center justify-center w-[2rem] h-[2rem] font-extrabold">
            31
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
