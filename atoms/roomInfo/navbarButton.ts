import { ButtonType } from '@/types/roomInfo/types';
import { atom } from 'recoil';

export const activeButtonState = atom({
  key: 'activeButton',
  default: 'info' as ButtonType,
});
