import { atom } from 'recoil';
export const adminPageViewState = atom<string>({
  key: 'currentViewState',
  default: 'none',
});
