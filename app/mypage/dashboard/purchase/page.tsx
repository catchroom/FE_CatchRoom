import PurchasingItems from '@/components/mypage/items/purchasingItems';
import { TradeItem } from '@/types/mypage/types';
import React from 'react';

const examplesWithDummyData: TradeItem[] = [
  {
    user_id: 1,
    order_history_id: 11,
    state: 'purchased',
    name: 'Luxury Resort Paradise',
    sell_price: 95000,
    is_catch: true,
    start_date: '2022-08-10',
    end_date: '2022-08-15',
    check_in: '2022-08-15',
    check_out: '2022-08-17',
    url: 'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    is_review: false,
  },
  {
    user_id: 1,
    order_history_id: 12,
    state: 'purchased',
    name: 'Seaside Retreat Hotel',
    sell_price: 80000,
    is_catch: false,
    start_date: '2022-09-05',
    end_date: '2022-09-10',
    check_in: '2022-09-10',
    check_out: '2022-09-12',
    url: 'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    is_review: true,
  },
  {
    user_id: 1,
    order_history_id: 13,
    state: 'purchased',
    name: 'Mountain View Lodge',
    sell_price: 110000,
    is_catch: true,
    start_date: '2022-10-15',
    end_date: '2022-10-20',
    check_in: '2022-10-20',
    check_out: '2022-10-22',
    url: 'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    is_review: true,
  },
  {
    user_id: 1,
    order_history_id: 14,
    state: 'purchased',
    name: 'Cityscape Grand Hotel',
    sell_price: 75000,
    is_catch: false,
    start_date: '2022-11-10',
    end_date: '2022-11-15',
    check_in: '2022-11-15',
    check_out: '2022-11-17',
    url: 'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    is_review: false,
  },
  {
    user_id: 1,
    order_history_id: 15,
    state: 'purchased',
    name: 'Elegant Oasis Hotel',
    sell_price: 90000,
    is_catch: true,
    start_date: '2022-12-05',
    end_date: '2022-12-10',
    check_in: '2022-12-10',
    check_out: '2022-12-12',
    url: 'https://res.cloudinary.com/dtf6uf7vi/image/upload/v1699924550/Home/minseob12.png',
    is_review: false,
  },
];

const page = () => {
  return (
    <div className="flex flex-col w-full h-[calc(100vh-100px)] overflow-y-scroll gap-3">
      {examplesWithDummyData.map((example, index) => {
        return <PurchasingItems key={index} item={example} />;
      })}
    </div>
  );
};

export default page;
