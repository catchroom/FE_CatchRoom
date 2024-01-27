import { atom } from 'recoil';

export const menuAtom = atom<string>({
  key: 'menuAtom',
  default: 'onSale',
});

export const isWithDrawAtom = atom<boolean>({
  key: 'isWithDrawAtom',
  default: false,
});
