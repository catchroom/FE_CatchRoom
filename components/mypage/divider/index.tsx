'use client';

import React from 'react';
import { useRecoilValue } from 'recoil';
import { menuAtom } from '@/atoms/mypage/menuAtom';

import MItem from '../items';
import { StateType } from '@/utils/get-dot-date';
import { TradeItem } from '@/types/mypage/types';

// test api 생기면 삭제
const DATA: TradeItem[] = [
  {
    user_id: 1,
    order_history_id: 1,
    state: 'onSale',
    name: '제주 신라호텔',
    sell_price: 70000,
    is_catch: true,
    start_date: '2021-10-10',
    end_date: '2021-10-13',
    check_in: '2021-10-13',
    check_out: '2021-10-14',
    url: 'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    is_review: true,
  },
  {
    user_id: 1,
    order_history_id: 2,
    state: 'onSale',
    name: '서울 그랜드 인터컨티넨탈 호텔',
    sell_price: 85000,
    is_catch: false,
    start_date: '2021-11-05',
    end_date: '2021-11-08',
    check_in: '2021-11-08',
    check_out: '2021-11-09',
    url: 'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    is_review: true,
  },
  {
    user_id: 1,
    order_history_id: 3,
    state: 'onSale',
    name: '부산 콘래드 호텔',
    sell_price: 95000,
    is_catch: true,
    start_date: '2021-12-20',
    end_date: '2021-12-23',
    check_in: '2021-12-23',
    check_out: '2021-12-24',
    url: 'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    is_review: true,
  },
  {
    user_id: 1,
    order_history_id: 4,
    state: 'soldOut',
    name: '경주 하와이안 호텔',
    sell_price: 75000,
    is_catch: false,
    start_date: '2022-01-15',
    end_date: '2022-01-18',
    check_in: '2022-01-18',
    check_out: '2022-01-19',
    url: 'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    is_review: true,
  },
  {
    user_id: 1,
    order_history_id: 5,
    state: 'soldOut',
    name: '인천 그랜드 하얏트 호텔',
    sell_price: 90000,
    is_catch: true,
    start_date: '2022-02-28',
    end_date: '2022-03-03',
    check_in: '2022-03-03',
    check_out: '2022-03-04',
    url: 'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    is_review: false,
  },
  {
    user_id: 1,
    order_history_id: 6,
    state: 'outDated',
    name: '서울 메리어트 호텔',
    sell_price: 120000,
    is_catch: false,
    start_date: '2022-03-10',
    end_date: '2022-03-15',
    check_in: '2022-03-15',
    check_out: '2022-03-17',
    url: 'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    is_review: true,
  },
  // Example 2
  {
    user_id: 1,
    order_history_id: 7,
    state: 'offSale',
    name: '부산 그랜드 부티크 호텔',
    sell_price: 80000,
    is_catch: true,
    start_date: '2022-04-05',
    end_date: '2022-04-08',
    check_in: '2022-04-08',
    check_out: '2022-04-10',
    url: 'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    is_review: true,
  },
  // Example 3
  {
    user_id: 1,
    order_history_id: 8,
    state: 'soldOut',
    name: '대구 센트럴 호텔',
    sell_price: 95000,
    is_catch: false,
    start_date: '2022-05-20',
    end_date: '2022-05-25',
    check_in: '2022-05-25',
    check_out: '2022-05-27',
    url: 'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    is_review: true,
  },
  // Example 4
  {
    user_id: 1,
    order_history_id: 9,
    state: 'outDated',
    name: '제주 그린 리조트',
    sell_price: 110000,
    is_catch: true,
    start_date: '2022-06-15',
    end_date: '2022-06-20',
    check_in: '2022-06-20',
    check_out: '2022-06-22',
    url: 'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    is_review: false,
  },
  // Example 5
  {
    user_id: 1,
    order_history_id: 10,
    state: 'outDated',
    name: '강릉 오션 뷰 호텔',
    sell_price: 85000,
    is_catch: false,
    start_date: '2022-07-10',
    end_date: '2022-07-15',
    check_in: '2022-07-15',
    check_out: '2022-07-17',
    url: 'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    is_review: true,
  },
];

const Divider = () => {
  const menuValue = useRecoilValue(menuAtom);

  const filterState = (state: StateType) => {
    const filtered =
      state === 'onSale'
        ? DATA.filter((item) => item.state === state)
        : DATA.filter((item) => item.state !== 'onSale');
    return filtered;
  };

  const ITEMS =
    menuValue === 'onSale' ? filterState('onSale') : filterState('soldOut');

  return (
    <div className="flex flex-col w-full h-[calc(100vh-160px)] pt-3 overflow-y-scroll gap-3">
      {ITEMS.map((item: TradeItem) => {
        return <MItem item={item} key={item.order_history_id} />;
      })}
    </div>
  );
};

export default Divider;
