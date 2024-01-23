import { atom } from 'recoil';

export const formSubmittedState = atom({
  key: 'formSubmissionState',
  default: false,
});
