import { atom } from 'recoil';

export const mypageRoutingAtom = atom<boolean>({
  key: 'mypageRoutingAtom',
  default: false,
});
