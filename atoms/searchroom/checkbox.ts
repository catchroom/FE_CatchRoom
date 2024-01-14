import { atom } from 'recoil';

// 아래 atom은 추후 코드 수정 후 삭제예정

// export const regionCheckedState = atom<boolean>({
//   key: 'isRegionChecked',
//   default: true,
// });

// export const roomCheckedState = atom<boolean>({
//   key: 'isRoomChecked',
//   default: true,
// });

export const adultCountState = atom<number>({
  key: 'adultCountState',
  default: 2,
});

export const childCountState = atom<number>({
  key: 'childCountState',
  default: 0,
});
