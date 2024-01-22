'use client';
import React from 'react';
import SaleItems from '../bottomsheetContent/saleItems';
import { useQueryGetSalesHistory } from '@/api/home/query';

const Content = () => {
  const { data } = useQueryGetSalesHistory();
  console.log(data);

  return (
    <>
      {data.code === 4000 ? (
        <SaleItems salesItem={data.data} />
      ) : (
        <div className="w-full flex  flex-col items-center">
          <div className="flex flex-col items-center gap-2 max-w-[271px] mt-12">
            <p className="text-t2 font-semibold">
              판매 가능한 숙박권이 없습니다
            </p>
            <p className="text-t3 text-text-sub text-center">
              오늘 체크인이 가능하고 무료 취소가 불가한 숙박권만 판매할 수
              있어요.
            </p>
          </div>
          <button className=" disabled w-full h-[44px] rounded bg-action-secondary-disabled text-text-disabled text-t2 font-semibold mt-12">
            확인
          </button>
        </div>
      )}
    </>
  );
};

export default Content;
