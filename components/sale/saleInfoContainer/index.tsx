'use client';
import CheckInDateComponent from '@/components/common/checkInDateComponent';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useConditionalQuery } from '@/api/sale/query';
import { formatDateWithDay } from '@/utils/get-dot-date';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { checkInDateState } from '@/atoms/sale/timeAtom';
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
import { catchState } from '@/atoms/sale/catchAtom';

type Props = {
  id: string | string[] | undefined;
};

const SaleInfoContainer = ({ id }: Props) => {
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

  useEffect(() => {
    if (isProduct && data) {
      const endDate = new Date(data?.endDate);
      console.log(endDate);
      if (data.isCatch) {
        const catchDate = new Date(data?.catchPriceStartDate);
        setCatchEndDate(catchDate);
      }
      setPercent(data?.discountRate);
      setPrice(data?.sellPrice);
      setIsCatch(data?.isAutoCatch);
      setEndDate(endDate);
      setIsNego(data?.isNego);
      setSellerContent(data?.introduction);
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

  if (isLoading) return <div>Loding...</div>;
  return (
    <div className="flex flex-col w-full p-4 gap-5 bg-white border border-border-sub rounded">
      <div className="flex gap-5 w-full">
        <div className="w-[100px] h-[100px] relative">
          <Image
            src={data?.accommdationUrl}
            alt="숙소 이미지"
            fill={true}
            className="rounded-[0.6rem]"
            sizes="(max-width: 480px) 100px, (max-width: 320px) 80px, 80px"
            priority
          />
        </div>

        <div className="flex flex-col">
          <p className="font-semibold text-h5">{data?.accommdationName}</p>
          <p className="font-semibold text-t2 opacity-50">{data?.roomType}</p>
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
