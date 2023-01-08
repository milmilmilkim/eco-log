import { atom } from 'recoil';

export const recoilLoginState = atom({
  key: 'recoilLoginState',
  default: !!window.localStorage.token,
});

export const recoilMyProfileState = atom({
  key: 'recoilMyProfileState',
  default: {
    userId: '',
    userNickname: '',
  },
});
