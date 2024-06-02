import { atom } from 'recoil';
import { TESTER_CURRENT_VIEW_STATES, TESTER_ISSUE_STATE } from './constants/constants';
import { TesterIssue } from '../../shared/types/issue';

export const testerPageViewState = atom<string>({
  key: 'currentViewState',
  default: TESTER_CURRENT_VIEW_STATES.ISSUE_BROWSE,
});

export const testerIssueCreateState = atom<TesterIssue>({
  key: 'testerIssueCreateState',
  default: TESTER_ISSUE_STATE,
});