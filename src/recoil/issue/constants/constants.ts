import { Comments, IssuePriority, IssueStatus } from '../../../shared/types/issue';
import { TesterUser, DevUser } from '../../../shared/types/user';

export const PL_ISSUE_CURRENT_VIEW_STATES = {
  VIEW_ALL_ISSUE: 'viewALLIssue',
  VIEW_NEW_ISSUE: 'viewNewIssue',
};

export const DEV_ISSUE_CURRENT_VIEW_STATES = {
  VIEW_ALL_ISSUE: 'viewALLIssue',
  VIEW_ASSIGNED_ISSUE: 'viewAssignedIssue',
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

export const RECOMMEND_DEV_STATE = {
  name: '',
  reason: '',
  isSelected: false,
}

export const COMMENTS: Comments[] = [];