import { atom } from 'recoil';

export const regionCheckedState = atom({
  key: 'isRegionChecked',
  default: false,
});

export const roomCheckedState = atom({
  key: 'isRoomChecked',
  default: false,
});
