import { Comments, IssuePriority, IssueStatus } from '../../../shared/types/issue';
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

export const RECOMMEND_DEV_STATE = {
  name: '',
  reason: '',
  isSelected: false,
}

export const COMMENTS: Comments[] = [
  {
    author: "Author1",
    text: "This is the first comment",
    createdAt: "2024-06-01T10:00:00Z",
  },
  {
    author: "Author2",
    text: "This is the second comment",
    createdAt: "2024-06-01T11:00:00Z",
  },
  // 추가 코멘트를 여기다 추가할 수 있습니다.
];