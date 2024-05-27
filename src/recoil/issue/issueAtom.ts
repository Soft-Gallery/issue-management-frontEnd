import { atom } from 'recoil';
import { Issue } from '../../shared/types/issue';
import { ISSUE_CURRENT_VIEW_STATES, ISSUE_INFO_STATE } from './constants/constants';

export const issuePageViewState = atom<string>({
  key: 'issueCurrentViewState',
  default: ISSUE_CURRENT_VIEW_STATES.VIEW_ISSUE_DETAIL,
});

export const issuePageInfoState = atom<Issue>({
  key: 'issueInfoState',
  default: ISSUE_INFO_STATE,
})