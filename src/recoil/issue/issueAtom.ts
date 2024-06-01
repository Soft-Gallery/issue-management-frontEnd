import { atom } from 'recoil';
import { Comments, Issue, RecommendDevInfo } from '../../shared/types/issue';
import { COMMENTS, ISSUE_CURRENT_VIEW_STATES, ISSUE_INFO_STATE, RECOMMEND_DEV_STATE } from './constants/constants';
import { DevUser } from '../../shared/types/user';

export const issuePageViewState = atom<string>({
  key: 'issueCurrentViewState',
  default: ISSUE_CURRENT_VIEW_STATES.VIEW_ISSUE_DETAIL,
});

export const issuePageInfoState = atom<Issue>({
  key: 'issueInfoState',
  default: ISSUE_INFO_STATE,
})

export const recommendDevState = atom<RecommendDevInfo>({
  key: 'recommendDevState',
  default: RECOMMEND_DEV_STATE,
});

export const statusChangeState = atom<boolean>({
  key: 'statusChangeState',
  default: false,
});

export const assignedDevInfoState = atom<DevUser | null>({
  key: 'assignedDevInfoState',
  default: null,
})

