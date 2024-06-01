import { atom } from 'recoil';
import { Issue, RecommendDevInfo } from '../../shared/types/issue';
import { ISSUE_CURRENT_VIEW_STATES, ISSUE_INFO_STATE, RECOMMEND_DEV_STATE } from './constants/constants';

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

