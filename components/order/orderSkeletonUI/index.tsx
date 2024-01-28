import React from 'react';

const OrderSkeletonUI = () => {
  return (
    <div className="flex flex-col container mt-10 mx-auto w-full px-5 py-6">
      <div className="px-2 pt-2 mb-5">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
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
      <div className="flex flex-col mt-8 mb-6">
        <div className="mx-[-20px]">
          <div className="w-full border-t-8 bg-black opacity-5 mb-6"></div>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4.5"></div>
      </div>
      <div className="flex flex-col mt-8 mb-6">
        <div className="mx-[-20px]">
          <div className="w-full border-t-8 bg-black opacity-5 mb-6"></div>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4.5"></div>
      </div>
      <div className="flex flex-col mt-8 mb-8">
        <div className="mx-[-20px]">
          {/* <div className="w-full border-t-8 bg-black opacity-5 mb-6"></div> */}
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4.5"></div>
      </div>
      <div className="flex flex-col mt-8 mb-8">
        <div className="mx-[-20px]">
          <div className="w-full border-t-8 bg-black opacity-5 mb-6"></div>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4.5"></div>
      </div>
      <div className="flex flex-col mt-8 mb-8">
        <div className="mx-[-20px]">
          <div className="w-full border-t-8 bg-black opacity-5 mb-6"></div>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4.5"></div>
      </div>
      <div className="flex flex-col mt-8 mb-8">
        <div className="mx-[-20px]">
          <div className="w-full border-t-8 bg-black opacity-5 mb-6"></div>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4.5"></div>
      </div>
      <div className="flex flex-col mt-8 mb-8">
        <div className="mx-[-20px]">
          <div className="w-full border-t-8 bg-black opacity-5 mb-6"></div>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-4.5"></div>
      </div>
    </div>
  );
};

export default OrderSkeletonUI;
