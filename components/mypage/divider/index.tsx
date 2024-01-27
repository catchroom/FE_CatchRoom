'use client';

import React from 'react';
import { QueryData, useMyPageQuery } from '@/api/mypage/query';
import { MypageSellingType } from '@/types/mypage/data-types';
import { useRecoilValue } from 'recoil';
import { divideAtom } from '@/atoms/mypage/divideAtom';
import MItem from '@/components/mypage/items/sellingItems';
import MItemSkeleton from './skeleton';

const checkViewState = (viewState: boolean): keyof QueryData => {
  return viewState ? 'ing' : 'done';
};

const Divide = () => {
  const viewState = useRecoilValue(divideAtom);
  const viewCase = checkViewState(viewState);
  const { data, isLoading } = useMyPageQuery(viewCase);

  if (isLoading) return <MItemSkeleton />;
  return (
    <div className="flex flex-col gap-[28px]">
      {data &&
        data.data.map((item: MypageSellingType) => (
          <MItem key={item.productId} item={item} />
        ))}
    </div>
  );
};

export default Divide;
