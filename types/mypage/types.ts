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

export type BannerItemType = {
  TITLE: string;
  LOCATION: string;
  TYPE: 'heart' | 'shopping' | 'history';
  BOTTOM?: boolean;
};

export type Root = {
  ACCOUNT_BUTTON: AccountButton[];
  TOP_BANNER: TopBanner;
  BOTTOM_BANNER: BottomBanner;
};

export type AccountButton = {
  TITLE: string;
  LOCATION: string;
  BOTTOM?: boolean;
};

export type TopBanner = {
  TITLE: string;
  BANNERS: Banners[];
  BOTTOM?: boolean;
};

export type Banners = {
  TITLE: string;
  LOCATION: string;
  TYPE: 'heart' | 'shopping' | 'history';
  BOTTOM?: boolean;
};

export type BottomBanner = {
  TITLE: string;
  BANNERS: Banners2[];
  BOTTOM?: boolean;
};

export type Banners2 = {
  TITLE: string;
  LOCATION: string;
  BOTTOM?: boolean;
};
