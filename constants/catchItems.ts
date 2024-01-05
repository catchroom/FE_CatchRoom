type RoomItemType = {
  roomName: string;
  roomType: string;
  resDate: string;
  oldPrice: number;
  discount: 30 | 40 | 50 | 60 | 70 | 80 | 90;
  location: string;
};

type ItemsInfoType = {
  roomItems: RoomItemType[];
};

export const ITEMS_INFO: ItemsInfoType = {
  roomItems: [
    {
      roomName: '블루캐치호텔',
      roomType: '호텔',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 180000,
      discount: 30,
      location: '제주',
    },
    {
      roomName: '그린리조트',
      roomType: '리조트',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 250000,
      discount: 40,
      location: '서울',
    },
    {
      roomName: '핑크모텔',
      roomType: '모텔',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 120000,
      discount: 50,
      location: '부산',
    },
    {
      roomName: '옐로우게스트하우스',
      roomType: '게스트하우스',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 300000,
      discount: 60,
      location: '제주',
    },
    {
      roomName: '블랙호스텔',
      roomType: '호스텔',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 400000,
      discount: 70,
      location: '제주',
    },
    {
      roomName: '화이트인',
      roomType: '모텔',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 150000,
      discount: 80,
      location: '제주',
    },
    {
      roomName: '블루머신',
      roomType: '팬션',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 450000,
      discount: 90,
      location: '제주',
    },
    {
      roomName: '레드스팟',
      roomType: '풀빌라',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 280000,
      discount: 30,
      location: '제주',
    },
    {
      roomName: '옐로우기묘한머신',
      roomType: '리조트',
      resDate: '12.25(금) - 12.26(토)',
      oldPrice: 180000,
      discount: 50,
      location: '제주',
    },
  ],
};
