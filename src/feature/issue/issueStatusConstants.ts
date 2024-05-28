import { IssueStatus } from '../../shared/types/issue';

export const CURRENT_ACTION_STATES = {
  NOT_DONE: 'not_done',
  DONE: 'done',
};

export const ISSUE_STATUS_STATE = {
  NEW: 'NEW',
  ASSIGNED: 'ASSIGNED',
  FIXED: 'FIXED',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED',
}

export const ADMIN_ISSUE_STATUS_STATE = {
  CLOSED: 'CLOSED',
}

export const PL_ISSUE_STATUS_STATE= {
  ASSIGNED: 'ASSIGNED',
  CLOSED: 'CLOSED',
};

export const TESTER_ISSUE_STATUS_STATE: { [key: string]: IssueStatus} = {
  ASSIGNED: 'NEW',
  RESOLVED: 'RESOLVED',
}

export const DEV_ISSUE_STATUS_STATE: { [key: string]: IssueStatus} = {
  ASSIGNED: 'ASSIGNED',
  FIXED: 'FIXED',
}