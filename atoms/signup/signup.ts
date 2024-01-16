import { atom } from 'recoil';

export const emailState = atom({
  key: 'emailState',
  default: '',
});

export const passwordState = atom({
  key: 'passwordState',
  default: '',
});

//소셜시 추가로 필요한 정보들
// export const phonenumberState = atom({
//   key: 'phonenumberState',
//   default: '',
// });

// export const nameState = atom({
//   key: 'nameState',
//   default: '',
// });
