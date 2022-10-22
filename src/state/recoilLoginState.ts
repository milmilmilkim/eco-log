import { atom } from 'recoil';

export const recoilLoginState = atom({
  key: 'recoilLoginState',
  default: false,
});

export const recoilMyProfileState = atom({
  key: 'recoilMyProfileState',
  default: {
    userId: '',
    userNickname: '',
  },
});
