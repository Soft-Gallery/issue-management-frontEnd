import { atom } from 'recoil';
import { USER_ROLE_STATES } from './constants/constants';

export const userRoleState = atom<string>({
  key: 'userRoleState',
  default: USER_ROLE_STATES.PL,
});
