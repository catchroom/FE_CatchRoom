'use client';
import CheckInDateComponent from '@/components/common/checkInDateComponent';
import Image from 'next/image';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useQueryGetSaleProduct } from '@/api/sale/query';
import { formatDateWithDay } from '@/utils/get-dot-date';
import { useSetRecoilState } from 'recoil';
import { checkInDateState } from '@/atoms/sale/timeAtom';
import { productPriceState } from '@/atoms/sale/priceAtom';

type Props = {
  id: string | string[] | undefined;
};

const SaleInfoContainer = ({ id }: Props) => {
  const { data } = useQueryGetSaleProduct(+id! as number);

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

  return (
    <div className="flex flex-col w-full p-4 gap-5 bg-white border border-border-sub rounded">
      <div className="flex gap-5 w-full">
        <Link href="/" className="w-[100px] h-[100px] relative">
          <Image
            src={data?.accommdationUrl}
            alt="숙소 이미지"
            fill={true}
            className="rounded-[0.6rem]"
            sizes="(max-width: 480px) 100px, (max-width: 320px) 80px, 80px"
            priority
          />
        </Link>

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
