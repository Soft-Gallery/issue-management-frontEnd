import { atom } from 'recoil';

export const userRoleState = atom({
  key: 'userRoleState',
  default: 'guest',
});
