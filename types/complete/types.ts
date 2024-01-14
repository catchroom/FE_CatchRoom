export type ReservationInfoProps = {
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
};
