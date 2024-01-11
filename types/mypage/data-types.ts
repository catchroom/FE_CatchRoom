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
