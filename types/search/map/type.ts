export type MarkerProps = {
  latitude: number;
  longitude: number;
  price: number;
  discountRate: number;
  catchType: boolean;
};

export type MapProps = {
  markers: MarkerProps[];
};

export type ToggleViewButtonWrapperProps = {
  currentView: 'map' | 'list';
  onViewChange: () => void;
};
