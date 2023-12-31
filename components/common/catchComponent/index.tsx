'use client';
import { catchItems } from '@/types/common/catchItems/types';
import Image from 'next/image';
import React from 'react';
import XSymbolIcon from '@/public/svgComponent/xSymbol';
import CallendarIcon from '@/public/svgComponent/calendar';

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
 * @props {string} roomName - 숙소의 명칭입니다.
 * @props {string} roomType - 숙소의 타입입니다. (ex. 호텔, 팬션, 풀빌라 등)
 * @props {string} resDate - 숙소가 예약된 날짜입니다.
 * @props {number} oldPrice - 숙소의 이전 구매 가격입니다.
 * @props {30|40|50|60|70|80|90} discount - 캐치 특가 할인률로, 30부터 10씩 증가하여 90까지 설정이 가능합니다.
 * @props {boolean} isDelete - 삭제 버튼을 활성화 할 수 있습니다. Default값은 false입니다.
 * @props {()=>void} buttonFunc - 삭제 버튼을 눌렀을 때 실행되는 함수를 넣을 수 있는 props입니다.
 * @returns {JSX.Element} CatchSpecialComponent 컴포넌트 반환
 */

const CatchSpecialComponent = ({
  roomName,
  roomType,
  resDate,
  oldPrice,
  discount,
  isDelete = false,
  buttonFunc = () => {
    console.log('삭제버튼이 클릭 됐습니다.');
  },
}: catchItems) => {
  const newPrice = Math.round(oldPrice - oldPrice * (discount / 100));

  return (
    <div className="relative w-full h-36 flex flex-wrap pointer-events-auto ">
      {isDelete ? (
        <button
          onClick={() => buttonFunc()}
          className="absolute top-0 right-0 text-h2"
        >
          <XSymbolIcon />
        </button>
      ) : (
        ''
      )}

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
      <div className="flex-grow flex-col h-[140px]">
        <div className="mb-5 ">
          <div className="flex items-center gap-1 text-p2 font-semibold">
            <CallendarIcon />
            {resDate}
          </div>
          <div className="flex flex-col items-start mt-2">
            <div className="text-t1 font-bold leading-none">{roomName}</div>
            <div className="text-t1 font-bold leading-none text-text-sub mt-1">
              {roomType}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex flex-wrap text-p2 text-gray-600">
            <span>구매가&nbsp;</span>
            <p className="line-through">{oldPrice.toLocaleString()}원</p>
          </div>
          <div className="flex flex-wrap items-center mt-1">
            <p className="text-t1 text-main font-bold">{discount}%</p>
            <p className=" text-t1 font-semibold ml-2">
              {newPrice.toLocaleString()}원
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatchSpecialComponent;
