import { atom } from 'recoil';
import { USER_PAGE_STATE, USER_ROLE_STATES } from './constants/constants';
import { UserPage } from '../shared/types/user';


export const userRoleState = atom<string>({
  key: 'userRoleState',
  default: USER_ROLE_STATES.GUEST,
});

export const userIdState = atom<string>({
  key: 'userIdState',
  default: '',
});

export const userPageState = atom<UserPage>({
  key: 'userPageState',
  default: USER_PAGE_STATE,
});