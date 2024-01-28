'use client';
import CheckInDateComponent from '@/components/common/checkInDateComponent';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useConditionalQuery } from '@/api/sale/query';
import { formatDateWithDay } from '@/utils/get-dot-date';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  checkInDateState,
  hourState,
  minuteState,
  timeState,
} from '@/atoms/sale/timeAtom';
import {
  percentState,
  priceState,
  productPriceState,
} from '@/atoms/sale/priceAtom';
import {
  isNegoState,
  isProductState,
  sellerContentState,
} from '@/atoms/sale/productAtom';
import {
  catchSingleDate,
  saleSingleDate,
} from '@/atoms/search-detail/searchStates';
import { catchPriceState, catchState } from '@/atoms/sale/catchAtom';
import SaleInfoSkeletonUI from './saleInfoSkeletonUI';

type Props = {
  id: string | string[] | undefined;
};

const SaleInfoContainer = ({ id }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isProduct = useRecoilValue(isProductState);

  const { data, isLoading } = useConditionalQuery(isProduct, +id!);
  console.log(data);

  const setPercent = useSetRecoilState(percentState); //할인율
  const setPrice = useSetRecoilState(priceState); //판매가
  const setEndDate = useSetRecoilState(saleSingleDate); //판매종료시점
  const setIsCatch = useSetRecoilState(catchState); //캐치특가 자동설정 여부
  const setCatchEndDate = useSetRecoilState(catchSingleDate); //캐치특가 종료시점
  const setIsNego = useSetRecoilState(isNegoState);
  const setSellerContent = useSetRecoilState(sellerContentState);
  const setTime = useSetRecoilState(timeState);
  const setHour = useSetRecoilState(hourState);
  const setMinute = useSetRecoilState(minuteState);
  const setCatchPrice = useSetRecoilState(catchPriceState);
  useEffect(() => {
    if (isProduct && data) {
      const endDate = new Date(data?.endDate);
      const hour = endDate.getHours();
      if (hour < 12 || hour === 0) {
        setTime('오전');
        if (hour === 0) setHour(hour + 12);
        else setHour(hour);
      } else {
        setTime('오후');
        if (hour === 12) setHour(hour);
        else setHour(hour - 12);
      }
      setMinute(endDate.getMinutes());
      if (data.isAutoCatch) {
        console.log('데이터 받아올때 캐치특가 가격 출력, ', data.catchPrice);
        const catchDate = new Date(data?.catchPriceStartDate);
        setCatchEndDate(catchDate);
        setCatchPrice(data.catchPrice);
      }
      setPercent(data?.discountRate);
      setPrice(data?.sellPrice);
      setIsCatch(data?.isAutoCatch);
      setEndDate(endDate);
      setIsNego(data?.isNego);
      setSellerContent(data?.introduction);
      console.log('hi');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const checkInString = formatDateWithDay(data?.checkIn);
  const checkOutString = formatDateWithDay(data?.checkOut);

  const setCheckInDate = useSetRecoilState(checkInDateState);
  const setProductPrice = useSetRecoilState(productPriceState);

  useEffect(() => {
    setCheckInDate(data?.checkIn);
  }, [data, setCheckInDate]);

  useEffect(() => {
    setProductPrice(data?.price);
  }, [data, setProductPrice]);

  if (isLoading) return <SaleInfoSkeletonUI />;
  return (
    <div className="flex flex-col w-full p-4 gap-5 bg-white border border-border-sub rounded">
      <div className="flex gap-5 w-full">
        <div className="lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] sm:w-[80px] sm:h-[80px] relative flex-shrink-0">
          <Image
            src={data?.accommdationUrl}
            alt="숙소 이미지"
            fill={true}
            className="rounded-[0.6rem] object-cover"
            sizes="(max-width: 480px) 80vw, (max-width: 320px) 100vw"
            priority
          />
        </div>

        <div className="flex flex-col">
          <p className="font-semibold text-h5 lg:whitespace-normal md:whitespace-nowrap md:overflow-hidden md:text-ellipsis md:w-[154px] sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis sm:w-[154px]">
            {data?.accommdationName}
          </p>
          <p className="font-semibold text-t2 opacity-50 lg:whitespace-normal md:whitespace-nowrap md:overflow-hidden md:text-ellipsis md:w-[154px] sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis sm:w-[154px]">
            {data?.roomType}
          </p>
          <p className="text-p1 mt-4">
            <span className="opacity-50 mr-2">구매가</span>
            {data?.price.toLocaleString()}원
          </p>
        </div>
      </div>
      <CheckInDateComponent
        CheckInDate={checkInString}
        CheckOutDate={checkOutString}
      />
    </div>
  );
};

export default SaleInfoContainer;
