'use client';
import { catchItems } from '@/types/common/catchItems/types';
import Image from 'next/image';
import React from 'react';
import XSymbolIcon from '@/public/svgComponent/xSymbol';
import CalendarIcon from '@/public/svgComponent/calendar';
import HeartButton from '../heartButton';

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
  roomName,
  roomType,
  resDate,
  oldPrice,
  discount,
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
  const newPrice = Math.round(oldPrice - oldPrice * (discount / 100));

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteBtnHandler();
  };

  return (
    <div className="relative w-full h-36">
      <div className="flex flex-wrap cursor-pointer" onClick={pageHandler}>
        {/* 숙소 이미지 및 캐치특가 */}
        <div className="relative w-[120px] max-w-[120px] h-[140px] max-h-[140px] overflow-auto rounded-md mr-4">
          {discount >= 50 ? (
            <div className="absolute flex items-center z-10 px-2 ml-2 mt-2 rounded-full bg-main text-p2 text-white font-medium">
              캐치 특가
            </div>
          ) : (
            ''
          )}
          <Image
            src="/sample/room3.png"
            layout="fill"
            objectFit="cover"
            alt="숙소사진"
          />
        </div>

        {/* 숙소정보 */}
        <div className="flex-grow flex-col h-[140px]">
          <div className="mb-3 ">
            <div className="flex items-center gap-1 text-t3 font-semibold">
              <CalendarIcon />
              {resDate}
            </div>
            <div className="flex flex-col items-start mt-3 gap-3">
              <div className="text-t1 font-bold leading-none">{roomName}</div>
              <div className="text-t1 font-bold leading-none text-text-sub">
                {roomType}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex flex-wrap text-p2 text-gray-600">
              <p className="line-through">
                구매가&nbsp;{oldPrice.toLocaleString()}원
              </p>
            </div>
            <div className="flex flex-wrap items-center">
              <p className="text-t1 text-main font-bold">{discount}%</p>
              <p className=" text-t1 font-bold ml-2">
                {newPrice.toLocaleString()}원
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
