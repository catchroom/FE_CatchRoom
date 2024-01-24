export type MarkerProps = {
  productId: number;
  image: string;
  accommodationName: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  catchType: boolean;
  originalPrice: number;
  discountRate: number;
  sellPrice: number;
  latitude: number;
  longitude: number;
};

export type MapProps = {
  markers: MarkerProps[];
};

export type ToggleViewButtonWrapperProps = {
  currentView: 'map' | 'list';
  onViewChange: () => void;
};

export type CatchSpecialComponentWrapperProps = {
  selectedMarkerInfo?: MarkerProps | null;
};
