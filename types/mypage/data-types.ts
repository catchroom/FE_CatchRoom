// import { ReviewType } from '@/utils/get-dot-date';

export type MypageSellingType = {
  id: number;
  accommodationName: string;
  checkIn: string;
  checkOut: string;
  writeDate: string;
  endDate: string;
  sellPrice: number;
  thumbNailUrl: string;
  isCatch: boolean;
  orderHistoryId: string;
  productId: string;

  // 판매완료에서 보이는 애들
  dealState?: string;
  reviewId?: number;
  reviewStatusType?: string;
};

export type MypagePurchaseType = {
  id: number;
  accommodationName: string;
  checkIn: string;
  checkOut: string;
  buyDate: string;
  buyPrice: number;
  thumbNailUrl: string;
  isCatch: boolean;
  reviewId: number;
  reviewStatusType: string;
  productId: string;
};

export type AccommodationType = {
  id: string;
  thumbnail_url: string;
  logitude: number;
  grade: number;
  address?: string;
  introduction: string;
  service: string[];
  latitude: number;
  region: number;
  name: string;
  type: number;
};

export type sellingHistoryType = {
  order_history_id: string;
  productName: string;
  transportation: string;
  room_id: string;
  price: number;
  accommodation_id: string;
  check_out: string;
  check_in: string;
  user_id: string;
};
