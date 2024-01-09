import { atom } from 'recoil';

export const menuAtom = atom<string>({
  key: 'menuAtom',
  default: 'onSale',
});
