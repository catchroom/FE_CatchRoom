'use client';
import { catchItems } from '@/types/common/catchItems/types';
import Image from 'next/image';
import React from 'react';
import XSymbolIcon from '@/public/svgComponent/xSymbol';
import CalendarIcon from '@/public/svgComponent/calendar';
import HeartButton from '../heartButton';
import { formatDateWithDay } from '@/utils/get-dot-date';

/**
 * 상품들을 조회할 수 있는 컴포넌트입니다.
 *
 * props로 roomName, roomType, resDate, oldPrice, discount를 입력받아야 하며,
 * discount는 30~90까지 10 단위로 입력할 수 있습니다.
 *
 * 할인률이 50%이상일 시 캐치특가 문구가 img 위에 뜨게 됩니다.
 *
 * 또한, 할인된 가격은 oldPrice와 discount를 반영하여 자동으로 값이 도출되게 됩니다.
 *
 * @param roomName : 숙소의 명칭입니다.
 * @param roomType - (선택) 숙소의 타입입니다. (ex. 호텔, 팬션, 풀빌라 등)
 * @param resDate - 숙소가 예약된 날짜입니다.
 * @param oldPrice - 숙소의 이전 구매 가격입니다.
 * @param discount - 캐치 특가 할인률로, 30부터 10씩 증가하여 90까지 설정이 가능합니다.
 * @param isDelete - (선택) 삭제버튼을 활성화 할 수 있습니다. Default값은 false입니다.
 * @param isHeart - (선택) 찜버튼을 활성화 할 수 있습니다. Default값은 false입니다.
 * @param pageHandler - (선택) 상품 컴포넌트를 눌렀을 때 실행되는 함수를 넣을 수 있는 props입니다.
 * @param heartState - (선택) 찜버튼의 토글 상태 전달을 위한 props입니다.
 * @param heartStateHandler - (선택) 찜버튼을 눌렀을 때 실행되는 함수를 넣을 수 있는 props입니다.
 * @param deleteBtnHandler - (선택) 삭제버튼을 눌렀을 때 실행되는 함수를 넣을 수 있는 props입니다.
 * @returns {JSX.Element} CatchSpecialComponent 컴포넌트 반환
 */

const CatchSpecialComponent = ({
  image = '/sample/room3.png',
  accommodationName,
  roomName,
  checkIn,
  checkOut,
  catchType,
  originalPrice,
  discountRate,
  sellPrice,
  isDelete = false,
  isHeart = false,
  heartState = true,
  pageHandler = () => {
    console.log('상품이 클릭됐습니다.');
  },
  heartBtnHandler = () => {
    console.log('찜버튼이 클릭됐습니다.');
  },
  deleteBtnHandler = () => {
    console.log('삭제버튼이 클릭됐습니다.');
  },
}: catchItems) => {
  const checkInString = formatDateWithDay(checkIn!);
  const checkOutString = formatDateWithDay(checkOut!);

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteBtnHandler();
  };

  const truncateString = (str: string) => {
    if (str.length > 12) return str.substring(0, 10) + '...';
    else return str;
  };

  return (
    <div className="relative w-full">
      <div className="flex cursor-pointer" onClick={pageHandler}>
        {/* 숙소 이미지 및 캐치특가 */}
        <div className="relative flex flex-shrink-0 w-[80px] sm:w-[80px] acc:w-[100px] lg:w-[120px] max-w-[120px] overflow-hidden rounded-md mr-4">
          {catchType ? (
            <div className="absolute flex items-center z-[4] px-2 ml-2 mt-2 rounded-full bg-main text-p2 text-white font-medium">
              캐치 특가
            </div>
          ) : (
            ''
          )}
          <div className="relative w-32 ">
            {image ? (
              <Image
                src={image}
                fill
                sizes="(max-width: 640px) 100vw, 100vw"
                priority
                alt="숙소사진"
                className=" object-cover"
              />
            ) : (
              <div className="relative w-32 bg-gray-300 animate-pulse">
                <svg
                  className="object-cover w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="100%" height="100%" rx="8" fill="gray" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* 숙소정보 */}
        <div className="flex-grow flex-col">
          <div className="truncate mb-1 md:mb-1 lg:mb-3 ">
            <div className="flex items-center gap-1 font-semibold text-t4 sm:text-t4 md:text-t4 lg:text-t3  ">
              <CalendarIcon />
              {checkInString} - {checkOutString}
            </div>
            <div className=" flex flex-col items-start mt-1">
              <div className="font-bold  text-p2 sm:text-p2 md:text-t2 lg:text-t1 ">
                {truncateString(accommodationName)}
              </div>
              <div className="font-bold text-p2 text-text-sub sm:text-p2 md:text-t2 lg:text-t1">
                {truncateString(roomName!)}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end acc:items-end">
            <div className="flex flex-wrap text-p2 text-gray-600">
              <p className="line-through">
                구매가&nbsp;{originalPrice?.toLocaleString('us-EN')}원
              </p>
            </div>
            <div className="flex flex-wrap items-center">
              <p className="text-t1 text-main font-semibold">{discountRate}%</p>
              <p className="text-t1 font-bold ml-2 ">
                {sellPrice?.toLocaleString('us-EN')}원
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 찜버튼 */}
      {isHeart && (
        <div className="absolute top-0 right-0 text-h2 cursor-pointer">
          <HeartButton
            isButtonActive={heartState}
            stateHandler={heartBtnHandler}
          />
        </div>
      )}
      {/* 삭제버튼 */}
      {isDelete && (
        <button
          onClick={deleteHandler}
          className="absolute top-0 right-0 text-h2 cursor-pointer"
        >
          <XSymbolIcon />
        </button>
      )}
    </div>
  );
};

export default CatchSpecialComponent;
