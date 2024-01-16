export type ProductDetailsProps = {
  accommodationName: string;
  roomName: string;
  normalCapacity: number;
  maxCapacity: number;
  imageUrl: string;
};

export type BasicProductDetailsProps = Pick<
  ProductDetailsProps,
  'accommodationName' | 'roomName'
>;
