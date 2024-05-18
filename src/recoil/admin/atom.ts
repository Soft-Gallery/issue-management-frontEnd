import { atom } from 'recoil';
export const adminPageViewState = atom({
  key: 'currentViewState',
  default: 'none',
});
