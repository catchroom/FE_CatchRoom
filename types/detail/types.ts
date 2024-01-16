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
  accommodationName: string;
  roomName: string;
  normalCapacity: number;
  maxCapacity: number;
  imageUrl: string;
  reservationNumber: number;
  transportation: string;
  checkIn: string;
  checkOut: string;
  sellPrice: number;
  commission: number;
  nikName: string;
};
