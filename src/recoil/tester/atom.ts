import { atom } from 'recoil';
import { TESTER_CURRENT_VIEW_STATES } from './constants/constants';

export const testerPageViewState = atom<string>({
  key: 'currentViewState',
  default: TESTER_CURRENT_VIEW_STATES.ISSUE_CREATE,
});
