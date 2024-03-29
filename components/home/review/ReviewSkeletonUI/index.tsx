import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const ReviewSkeletonUI = () => {
  return (
    <Swiper spaceBetween={12} slidesPerView={1.2} loop={true}>
      <SwiperSlide>
        <div
          role="status"
          className="space-y-8 animate-pulse sm:w-72 md:w-80 md:space-y-0 rtl:space-x-reverse md:items-center border border-gray-200 mt-3 rounded flex"
        >
          <div className="flex items-center justify-center lg:w-full h-[140px] bg-gray-300 rounded  dark:bg-gray-700">
            <svg
              className="w-10 h-[184px] text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-full flex flex-col p-5 gap-3">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[90px] mb-4"></div>
            <div className="flex flex-col w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[157px] mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[157px] mb-4"></div>
            </div>

            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[120px] mb-4"></div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          role="status"
          className="space-y-8 animate-pulse sm:w-72 md:w-80 md:space-y-0 rtl:space-x-reverse md:items-center border border-gray-200 mt-3 rounded flex"
        >
          <div className="flex items-center justify-center lg:w-full h-[140px] bg-gray-300 rounded  dark:bg-gray-700">
            <svg
              className="w-10 h-[184px] text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-full flex flex-col p-5 gap-3">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[90px] mb-4"></div>
            <div className="flex flex-col w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[157px] mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[157px] mb-4"></div>
            </div>

            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[120px] mb-4"></div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          role="status"
          className="space-y-8 animate-pulse sm:w-72 md:w-80 md:space-y-0 rtl:space-x-reverse md:items-center border border-gray-200 mt-3 rounded flex"
        >
          <div className="flex items-center justify-center lg:w-full h-[140px] bg-gray-300 rounded  dark:bg-gray-700">
            <svg
              className="w-10 h-[184px] text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-full flex flex-col p-5 gap-3">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[90px] mb-4"></div>
            <div className="flex flex-col w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[157px] mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[157px] mb-4"></div>
            </div>

            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[120px] mb-4"></div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          role="status"
          className="space-y-8 animate-pulse sm:w-72 md:w-80 md:space-y-0 rtl:space-x-reverse md:items-center border border-gray-200 mt-3 rounded flex"
        >
          <div className="flex items-center justify-center lg:w-full h-[140px] bg-gray-300 rounded  dark:bg-gray-700">
            <svg
              className="w-10 h-[184px] text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-full flex flex-col p-5 gap-3">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[90px] mb-4"></div>
            <div className="flex flex-col w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[157px] mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[157px] mb-4"></div>
            </div>

            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[120px] mb-4"></div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewSkeletonUI;
