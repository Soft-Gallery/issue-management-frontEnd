import { atom } from 'recoil';
import {  Issue, RecommendDevInfo } from '../../shared/types/issue';
import {
  PL_ISSUE_CURRENT_VIEW_STATES,
  ISSUE_INFO_STATE,
  RECOMMEND_DEV_STATE,
  DEV_ISSUE_CURRENT_VIEW_STATES
} from './constants/constants';

import { DevUser } from '../../shared/types/user';

export const plIssuePageViewState = atom<string>({
  key: 'plIssuePageViewState',
  default: PL_ISSUE_CURRENT_VIEW_STATES.VIEW_ALL_ISSUE,
});

export const devIssuePageViewState = atom<string>({
  key: 'devIssuePageViewState',
  default: DEV_ISSUE_CURRENT_VIEW_STATES.VIEW_ALL_ISSUE,
});

export const issuePageInfoState = atom<Issue>({
  key: 'issueInfoState',
  default: ISSUE_INFO_STATE,
})

export const recommendDevState = atom<RecommendDevInfo>({
  key: 'recommendDevState',
  default: RECOMMEND_DEV_STATE,
});

export const assignedDevInfoState = atom<DevUser | null>({
  key: 'assignedDevInfoState',
  default: null,
})

