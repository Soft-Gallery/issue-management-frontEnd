import { atom } from 'recoil';
import { USER_ROLE_STATES } from './constants/constants';

export const isAuthenticatedState = atom<boolean>({
  key: 'isAuthenticatedState',
  default: false, // 기본값은 로그인되지 않은 상태
});

export const userRoleState = atom<string>({
  key: 'userRoleState',
  default: USER_ROLE_STATES.GUEST,
});

export const userIdState = atom<string>({
  key: 'userIdState',
  default: '',
});
