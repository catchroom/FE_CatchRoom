import { atom } from 'recoil';

export const isHeaderSate = atom<boolean>({
  key: 'isHeaderSate',
  default: false,
});
