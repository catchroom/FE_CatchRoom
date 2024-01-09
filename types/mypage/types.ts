import { StateType } from '@/utils/get-dot-date';

export type PrivacyItemsProps = {
  title: string;
  function: (string: string) => string;
  key: string;
};

export type TradeItem = {
  user_id: number;
  order_history_id: number;
  state: StateType;
  name: string;
  sell_price: number;
  is_catch: boolean;
  start_date: string;
  end_date: string;
  check_in: string;
  check_out: string;
  url: string;
  is_review: boolean;
};
