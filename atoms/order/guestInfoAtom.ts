import { atom } from 'recoil';

export const guestInfoState = atom({
  key: 'guestInfoState',
  default: {
    name: '',
    phoneNumber: '',
  },
});
