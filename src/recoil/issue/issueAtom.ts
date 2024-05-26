import { atom } from 'recoil';
import { Issue } from '../../shared/types/issue';
import { ISSUE_INFO_STATE } from './constants/constants';

export const issuePageInfoState = atom<Issue>({
  key: 'issueInfoState',
  default: ISSUE_INFO_STATE,
})