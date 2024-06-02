import { IssuePriority } from '../../../shared/types/issue';

export const TESTER_CURRENT_VIEW_STATES = {
  ISSUE_CREATE: 'createIssue',
  ISSUE_BROWSE: 'browseIssue',
  FIXED_ISSUE_BROWSE: 'fixedIssueBrowse',
};

export const TESTER_ISSUE_STATE = {
  title: '',
  description: '',
  projectId: 0,
  priority: 'MAJOR' as IssuePriority,
}