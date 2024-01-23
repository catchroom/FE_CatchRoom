import { atom } from 'recoil';

export const selectedPaymentMethodState = atom({
  key: 'selectedPaymentMethodState',
  default: '',
});
