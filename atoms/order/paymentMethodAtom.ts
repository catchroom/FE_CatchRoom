import { atom } from 'recoil';

export const selectedPaymentMethodState = atom({
  key: 'selectedPaymentMethodState',
  default: '',
});

// export const selectedPaymentState = atom({
//   key: 'selectedPaymentState',
//   default: '',
// });

export const selectedEasyPaymentState = atom({
  key: 'selectedEasyPaymentState',
  default: 'kakaoPay',
});
