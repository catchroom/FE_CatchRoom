import { atom } from 'recoil';

export const AlertOpenState = atom<boolean>({
  key: 'AlertOpenState',
  default: false,
});

export const AlertMessageState = atom<string>({
  key: 'AlertMessageState',
  default: '',
});
