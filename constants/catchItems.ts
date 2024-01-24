export type RoomItemType = {
  wishId?: number;
  id?: number;
  accommodationName?: string;
  roomName?: string;
  roomType?: string;
  checkIn?: string;
  resDate?: string;
  sellPrice?: number;
  oldPrice?: number;
  discountRate?: 30 | 40 | 50 | 60 | 70 | 80 | 90;
  location: string;
  discount?: 30 | 40 | 50 | 60 | 70 | 80 | 90;
};

export type ItemType = {
  wishId: number;
  accommodationName: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  sellPrice: number;
  discoutPrice: number;
  discountRate: 30 | 40 | 50 | 60 | 70 | 80 | 90;
  location: string;
};

type ItemsInfoType = {
  roomItems: RoomItemType[];
};

export const ITEMS_INFO: ItemsInfoType = {
  roomItems: [
    {
      id: 1,
      roomName: '블루캐치호텔',
      roomType: '스위트',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 180000,
      discount: 30,
      location: '제주',
    },
    {
      id: 2,
      roomName: '그린리조트',
      roomType: '패밀리 스위트',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 250000,
      discount: 40,
      location: '서울',
    },
    {
      id: 3,
      roomName: '핑크모텔',
      roomType: '오션 뷰',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 120000,
      discount: 50,
      location: '부산',
    },
    {
      id: 4,
      roomName: '옐로우게스트하우스',
      roomType: '에코 룸',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 300000,
      discount: 60,
      location: '제주',
    },
    {
      id: 5,
      roomName: '블랙호스텔',
      roomType: '스탠다드',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 400000,
      discount: 70,
      location: '제주',
    },
    {
      id: 6,
      roomName: '화이트인',
      roomType: '스탠다드',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 150000,
      discount: 80,
      location: '제주',
    },
    {
      id: 7,
      roomName: '블루머신',
      roomType: '프리미엄 더블',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 450000,
      discount: 90,
      location: '제주',
    },
    {
      id: 8,
      roomName: '레드스팟',
      roomType: '스위트룸',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 280000,
      discount: 30,
      location: '제주',
    },
    {
      id: 9,
      roomName: '옐로우기묘한머신',
      roomType: '리조트',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 180000,
      discount: 50,
      location: '제주',
    },
  ],
};
