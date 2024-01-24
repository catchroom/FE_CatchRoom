export type salesItem = {
  id: number;
  accommdationName: string;
  price: number;
  checkIn: string;
  checkOut: string;
};

export type ReviewItemType = {
  productName: string;
  image: string;
  userName: string;
  date: string;
  content: string;
  region?: string;
};
