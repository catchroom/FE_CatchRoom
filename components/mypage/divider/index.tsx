'use client';

import React from 'react';
import { QueryData, useMyPageQuery } from '@/api/mypage/query';
import { MypageSellingType } from '@/types/mypage/data-types';
import { useRecoilValue } from 'recoil';
import { divideAtom } from '@/atoms/mypage/divideAtom';
import MItem from '@/components/mypage/items/sellingItems';

const checkViewState = (viewState: boolean): keyof QueryData => {
  return viewState ? 'ing' : 'done';
};

const Divide = () => {
  const viewState = useRecoilValue(divideAtom);
  const viewCase = checkViewState(viewState);
  const { data: mypageData } = useMyPageQuery(viewCase);

  return (
    <div>
      {mypageData &&
        mypageData.data.salesList.map((item: MypageSellingType) => (
          <MItem key={item.productNum} item={item} />
        ))}
    </div>
  );
};

export default Divide;
