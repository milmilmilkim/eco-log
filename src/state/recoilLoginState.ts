import { atom } from 'recoil';

const recoilLoginState = atom({
  key: 'recoilLoginState',
  default: [],
});

export default recoilLoginState;