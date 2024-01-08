import ReviewForm from '@/components/mypage/form/reviewForm';
import ReviewHeader from '@/components/mypage/review';
import { TradeItem } from '@/types/mypage/types';
import React from 'react';

const DATA: TradeItem = {
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
};

const page = ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) => {
  // 해당 숙소 id로 fetch 요청
  const { id } = searchParams;

  return (
    <div className="w-full h-full px-5">
      <ReviewHeader DATA={DATA} />
      <p>{id}</p>
      <ReviewForm />
    </div>
  );
};

export default page;
