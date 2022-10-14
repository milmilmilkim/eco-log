import { atom } from 'recoil';

export const recoilDateState = atom({
  key: 'recoilDateState',
  default: new Date(),
});

export default recoilDateState;
