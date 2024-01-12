import { atom } from 'recoil';

export const regionCheckedState = atom({
  key: 'isRegionChecked',
  default: true,
});

export const roomCheckedState = atom({
  key: 'isRoomChecked',
  default: true,
});
