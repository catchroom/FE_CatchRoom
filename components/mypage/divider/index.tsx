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
  const { data } = useMyPageQuery(viewCase);
  console.log(data);

  return (
    <div>
      {data &&
        data.data.map((item: MypageSellingType) => (
          <MItem key={item.accommodationName} item={item} />
        ))}
    </div>
  );
};

export default Divide;
