import CheckInDateComponent from '@/components/common/checkInDateComponent';
import { ProductItem } from '@/types/common/product/types';
import Image from 'next/image';
import React from 'react';
import roomImg from '@/public/sample/Rectangle-70.png';
import Link from 'next/link';

const item: ProductItem = {
  id: 1,
  productName: '제주신라호텔',
  check_in: new Date(),
  check_out: new Date(),
  accommodation_url: 'https://www.google.com',
  roomType: '스탠다드 더블',
  price: 180000,
};

const SaleInfoContainer = () => {
  return (
    <div className="flex flex-col w-full p-4 gap-5 border border-border-sub rounded">
      <div className="flex gap-5 w-full">
        <Link
          href={item.accommodation_url}
          className="w-[100px] h-[100px] relative"
        >
          <Image
            src={roomImg}
            alt="숙소 이미지"
            layout="fill"
            objectFit="cover"
            className="rounded-[0.6rem]"
          />
        </Link>

        <div className="flex flex-col">
          <p className="font-semibold text-h5">{item.productName}</p>
          <p className="font-semibold text-t2 opacity-50">{item.roomType}</p>
          <p className="text-p1 mt-4">
            <span className="opacity-50 mr-2">구매가</span>
            {item.price.toLocaleString()}원
          </p>
        </div>
      </div>
      <CheckInDateComponent
        CheckInDate="01.12 (월)"
        CheckOutDate="01.13 (화)"
      />
    </div>
  );
};

export default SaleInfoContainer;
