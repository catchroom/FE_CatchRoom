import { atom } from 'recoil';

export const catchState = atom<boolean>({
  key: 'catchState',
  default: false,
});
