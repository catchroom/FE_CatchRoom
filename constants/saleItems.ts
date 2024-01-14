type SaleItemType = {
  roomName: string;
  roomType: string;
  price: number;
  checkInDate: string;
  checkOutDate: string;
};

type SaleItemsType = {
  saleItems: SaleItemType[];
};

export const SALE_ITEMS: SaleItemsType = {
  saleItems: [
    {
      roomName: '제주신라호텔',
      roomType: '스탠다드 더블',
      price: 180000,
      checkInDate: '12.08(월) 15:00',
      checkOutDate: '12.09(화) 12:00',
    },
    {
      roomName: '글래드 마포',
      roomType: '스탠다드 더블',
      price: 180000,
      checkInDate: '12.11(수) 15:00',
      checkOutDate: '12.12(목) 11:00',
    },
  ],
};
