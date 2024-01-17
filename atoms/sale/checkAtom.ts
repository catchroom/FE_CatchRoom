import { atom } from 'recoil';

export const allCheckState = atom<boolean>({
  key: 'allCheckState',
  default: false,
});
