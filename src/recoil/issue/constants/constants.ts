import { IssuePriority, IssueStatus } from '../../../shared/types/issue';

export const ISSUE_CURRENT_VIEW_STATES = {
  VIEW_PROJECT_DETAIL: 'viewProjectDetail',
  VIEW_ISSUE_DETAIL: 'viewIssueDetail',
  NONE: 'none',
};

export const ISSUE_INFO_STATE = {
  id: 0,
  title: '',
  description: '',
  status: 'NEW' as IssueStatus,
  priority: 'MAJOR' as IssuePriority,
  reporter: '',
  devs: [],
  comments: [],
}