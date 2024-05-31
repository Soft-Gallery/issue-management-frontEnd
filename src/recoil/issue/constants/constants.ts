import { IssuePriority, IssueStatus } from '../../../shared/types/issue';
import { TesterUser, DevUser } from '../../../shared/types/user';

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
  reporter: {
    id: 0,
    name: '',
    password: '',
    email: '',
    role: 'ROLE_TESTER',
  } as TesterUser,
  devs: [],
  assignedDev: null as DevUser | null,
  comments: [],
};
