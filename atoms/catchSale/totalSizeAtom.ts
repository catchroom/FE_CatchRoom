import { atom } from 'recoil';

export const totalSizeState = atom<number>({
  key: 'totalSizeState',
  default: 0,
});
