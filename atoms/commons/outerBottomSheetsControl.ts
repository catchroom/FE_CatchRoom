import { atom } from 'recoil';

export const outerBottomSheetsControl = atom<boolean>({
  key: 'outerBottomSheetsControl',
  default: false,
});

export const outerSaleBottomSheetsControl = atom<boolean>({
  key: 'outerSaleBottomSheetsControl',
  default: false,
});

export const outerCatchBottomSheetsControl = atom<boolean>({
  key: 'outerCatchBottomSheetsControl',
  default: false,
});

export const outerDatePickerBottomSheetsControl = atom<boolean>({
  key: 'outerDatePickerBottomSheetsControl',
  default: false,
});
