export type ProductItem = {
  id: number;
  accommdationName: string;
  checkIn: string;
  checkOut: string;
  accommdationUrl: string;
  roomType: string;
  price: number;
};

// api 데이터 타입
export type ApiDataType = {
  code: number;
  data: Data;
};

export type Data = {
  seller_id: number;
  accommodationName: string;
  userIdentity: string;
  chatRoomNumber: string;
  accommodationUrl: AccommodationUrl[];
  roomType: string;
  roomUrl: RoomUrl[];
  star: number;
  originalPrice: number;
  discountRate: number;
  sellPrice: number;
  checkIn: string;
  checkOut: string;
  introduction: string;
  latitude: string;
  longitude: string;
  address: string;
  roomNormalCapacity: number;
  roomMaxCapacity: number;
  accommodationService: string;
  roomService: string;
  totalRoomCapacity: number;
};

export type AccommodationUrl = {
  id: number;
  url: string;
};

export type RoomUrl = {
  id: number;
  url: string;
};
