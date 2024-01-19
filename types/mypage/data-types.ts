import { ReviewType } from '@/utils/get-dot-date';

export type MypageSellingType = {
  accommodationId: string;
  historyId: string;
  productNum: string;
  checkIn: string;
  checkOut: string;
  productName: string;
  thumbnailUrl: string;
  sellPrice: number;
  state: string;
  writeDate: string;
  productEndDate: string;
  isCatch: boolean;
  isReview: ReviewType;
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
