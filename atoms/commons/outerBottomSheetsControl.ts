import { atom } from 'recoil';

export const outerBottomSheetsControl = atom<boolean>({
  key: 'outerBottomSheetsControl',
  default: false,
});
