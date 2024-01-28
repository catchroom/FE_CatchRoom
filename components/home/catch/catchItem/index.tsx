'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { catchItems } from '@/types/common/catchItems/types';
import White from '@/public/svgComponent/marker/white';
import HeartButton from '@/components/common/heartButton';
import { useRouter } from 'next/navigation';
import CalendarIcon from '@/public/svgComponent/calendar';
import { formatDateWithDay } from '@/utils/get-dot-date';
import { useRoomItem, useRoomItemZim } from '@/api/room-info/query';
import { useToastAlert } from '@/hooks/useToastAlert';

const CatchItem = ({
  productId,
  accommodationName,
  checkIn,
  checkOut,
  originalPrice,
  discountRate,
  sellPrice,
  region,
  image,
}: catchItems) => {
  const router = useRouter();

  const { data } = useRoomItem(productId);
  const userZimState = data?.data.isWishChecked;
  const [isBtnActive, setIsBtnActive] = useState(userZimState);
  const mutation = useRoomItemZim();

  const id = productId!.toString();

  const [screenSize, setScreenSize] = useState('l');

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkScreenSize = () => {
      if (window.innerWidth >= 390) setScreenSize('l');
      else if (window.innerHeight >= 320 && window.innerWidth < 390)
        setScreenSize('m');
      else setScreenSize('s');
    };

    // 초기 화면 크기 체크
    checkScreenSize();

    // 창 크기 변경 시 이벤트 리스너 추가
    window.addEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    setIsBtnActive(userZimState);
  }, [userZimState]);

  const { alertOpenHandler } = useToastAlert(
    isBtnActive ? '찜을 취소했어요.' : '상품을 찜 했어요.',
  );

  const activeHandler = () => {
    alertOpenHandler();
    mutation.mutate(
      { id },
      {
        onSuccess() {
          setIsBtnActive(!isBtnActive);
        },
      },
    );
  };

  const handleItemClick = () => {
    router.push(`/room-info/${productId}`);
  };

  const checkInString = formatDateWithDay(checkIn!);
  const checkOutString = formatDateWithDay(checkOut!);

  return (
    <div className="flex flex-col relative w-full mt-5 rounded-lg border border-gray-200 cursor-pointer">
      <div className="absolute flex top-[12px] left-4 p-1.5 bg-black gap-1 lg:p-[10px] rounded-3xl items-center z-10 md:p-1.5 sm:p-1.5 md:text-t4 sm:text-t4">
        <White />
        <span className="text-white">{region}</span>
      </div>
      <div className="absolute flex top-[12px] right-4 justify-center items-center z-10">
        {data?.userIdentity === 'BUYER' ? (
          <div className="relative ">
            <Image
              src="/Ellipse-22.svg"
              width={screenSize === 'l' ? 40 : 28}
              height={screenSize === 'l' ? 40 : 28}
              className="md:w-[28px] md:h-[28px] sm:w-[28px] sm:h-[28px] w-[28px] h-[28px]"
              alt="찜하기 버튼"
            />
            <div className="absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 cursor-pointer">
              <HeartButton
                isButtonActive={isBtnActive}
                stateHandler={activeHandler}
                whiteStroke={true}
                width={screenSize === 'l' ? 24 : 16}
                height={screenSize === 'l' ? 24 : 16}
              />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div
        className="lg:h-[184px] md:h-[138px] sm:h-[138px] relative h-[138px]"
        onClick={handleItemClick}
      >
        <Image
          src={image!}
          alt="숙소이미지"
          fill={true}
          sizes="(max-width: 480px) 364px, (max-width: 390px) 240px, 240px"
          priority
          className="rounded-t-xl "
        />
      </div>
      <div
        className="flex flex-col gap-1 p-5 bg-surface rounded-b-lg"
        onClick={handleItemClick}
      >
        <div className="flex justify-between">
          <div className="flex">
            <CalendarIcon />
            <p className="lg:text-p2 ml-1 text-black font-semibold md:text-t4 sm:text-t4 text-t4">
              {checkInString} - {checkOutString}
            </p>
          </div>
          <p className="line-through lg:text-p2 text-text-sub md:text-[11px] sm:text-[11px] text-[11px]">
            구매가 {originalPrice?.toLocaleString()}
          </p>
        </div>
        <div className="flex justify-between font-bold">
          <div className="lg:text-h5 md:text-t3 md:font-semibold sm:text-t3 sm:font-semibold text-t3 font-semibold">
            {accommodationName.length > 7
              ? `${accommodationName.substring(0, 7)}...`
              : accommodationName}
          </div>
          <div className="lg:text-t1 md:text-p2 sm:text-p2 text-p2">
            <span className="text-main text-p1 mr-1">{discountRate}%</span>
            {sellPrice?.toLocaleString()}원
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatchItem;
