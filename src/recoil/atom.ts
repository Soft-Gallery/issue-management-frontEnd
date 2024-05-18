import { atom } from 'recoil';

export const userRoleState = atom<string>({
  key: 'userRoleState',
  default: 'guest',
});
