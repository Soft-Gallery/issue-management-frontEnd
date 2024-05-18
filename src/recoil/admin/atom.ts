import { atom } from 'recoil';
import { CURRENT_VIEW_STATES } from './constants/constants';
export const adminPageViewState = atom<string>({
  key: 'currentViewState',
  default: CURRENT_VIEW_STATES.NONE,
});
