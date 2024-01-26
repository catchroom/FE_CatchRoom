import React from 'react';

const SaleInfoSkeletonUI = () => {
  return (
    <div className="flex flex-col w-full p-4 gap-5 bg-white border border-border-sub rounded">
      <div
        role="status"
        className="flex-col w-full space-y-8 animate-pulse  md:space-y-0 rtl:space-x-reverse md:items-center"
      >
        <div className="flex w-full gap-5">
          <div className="w-[100px] h-[100px] relative rounded">
            <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-300 rounded  dark:bg-gray-700">
              <svg
                className="w-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col h-[100px] mb-7">
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[130px] mb-4"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[90px] mb-4"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[157px] mt-4"></div>
          </div>
        </div>
        <div className="relative flex flex-wrap w-full h-[5.625rem] mt-7 items-center justify-around bg-surface-gray rounded-[4px]">
          <div className="text-center flex flex-col items-center">
            <div className="h-4 bg-white rounded-full dark:bg-gray-700 w-[80px]"></div>
            <div className="h-4 bg-white rounded-full dark:bg-gray-700 w-[130px] mt-1"></div>
          </div>
          <div className="absolute h-[37px] w-[1px] bg-gray-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="text-center flex flex-col items-center">
            <div className="h-4 bg-white rounded-full dark:bg-gray-700 w-[80px]"></div>
            <div className="h-4 bg-white rounded-full dark:bg-gray-700 w-[130px] mt-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleInfoSkeletonUI;
