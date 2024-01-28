export type ReservationDetailProps = {
  bookingHolder: {
    name: string;
    phoneNumber: string;
  };
  guest: {
    name: string;
    phoneNumber: string;
  };
  totalPrice: number;
  paymentMethod: string;
  sellPrice: number;
  commission: number;
  nickName: string;
};
