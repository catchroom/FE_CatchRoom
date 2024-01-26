'use client';
import React from 'react';

const DeadLineSkeletonUI = () => {
  return (
    <div className="flex flex-col gap-[2rem] animate-pulse">
      <div className="flex h-[140px]">
        <div className="flex flex-shrink-0 items-center justify-center w-[120px] max-w-[120px] h-full overflow-hidden rounded-md mr-4 bg-gray-300">
          <svg
            className="flex items-center justify-center text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="-10 0 40 18"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="flex-grow flex-col">
          <div className="mb-3">
            <div className="w-[157px] h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
            <div className=" w-[140px] h-5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
            <div className="w-[100px] h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <div className="w-[80px] h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
            <div className="w-[120px] h-5 bg-gray-200 rounded-full dark:bg-gray-700" />
          </div>
        </div>
      </div>

      <div className="flex h-[140px]">
        <div className="flex flex-shrink-0 items-center justify-center w-[120px] max-w-[120px] h-full overflow-hidden rounded-md mr-4 bg-gray-300">
          <svg
            className="flex items-center justify-center text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="-10 0 40 18"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="flex-grow flex-col">
          <div className="mb-3">
            <div className="w-[117px] h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
            <div className=" w-[110px] h-5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
            <div className="w-[140px] h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <div className="w-[140px] h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
            <div className="w-[90px] h-5 bg-gray-200 rounded-full dark:bg-gray-700" />
          </div>
        </div>
      </div>

      <div className="flex h-[140px]">
        <div className="flex flex-shrink-0 items-center justify-center w-[120px] max-w-[120px] h-full overflow-hidden rounded-md mr-4 bg-gray-300">
          <svg
            className="flex items-center justify-center text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="-10 0 40 18"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="flex-grow flex-col">
          <div className="mb-3">
            <div className="w-[137px] h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
            <div className=" w-[157px] h-5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
            <div className="w-[100px] h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <div className="w-[130px] h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
            <div className="w-[90px] h-5 bg-gray-200 rounded-full dark:bg-gray-700" />
          </div>
        </div>
      </div>

      <div className="flex h-[140px]">
        <div className="flex flex-shrink-0 items-center justify-center w-[120px] max-w-[120px] h-full overflow-hidden rounded-md mr-4 bg-gray-300">
          <svg
            className="flex items-center justify-center text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="-10 0 40 18"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="flex-grow flex-col">
          <div className="mb-3">
            <div className="w-[177px] h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
            <div className=" w-[80px] h-5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
            <div className="w-[60px] h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <div className="w-[80px] h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4" />
            <div className="w-[120px] h-5 bg-gray-200 rounded-full dark:bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeadLineSkeletonUI;
