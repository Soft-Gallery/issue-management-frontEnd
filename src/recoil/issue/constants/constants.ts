import { IssuePriority, IssueStatus } from '../../../shared/types/issue';
import { DevUser } from '../../../shared/types/user';

export const ISSUE_CURRENT_VIEW_STATES = {
  VIEW_ISSUE_LIST: 'viewIssueList',
  VIEW_ISSUE_DETAIL: 'viewIssueDetail',
};

export const ISSUE_INFO_STATE = {
  id: 0,
  title: '',
  description: '',
  status: 'NEW' as IssueStatus,
  priority: 'MAJOR' as IssuePriority,
  reporter: '',
  devs: [],
  assignedDev: {
    id: 0,
    name: '',
    password: '',
    email: '',
    role: 'ROLE_DEVELOPER',
  } as DevUser,
  comments: [],
};