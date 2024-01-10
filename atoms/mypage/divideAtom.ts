import { atom } from 'recoil';

export const divideAtom = atom<boolean>({
  key: 'divideAtom',
  default: true,
});
