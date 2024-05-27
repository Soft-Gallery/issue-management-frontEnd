import { IssuePriority, IssueStatus } from '../../../shared/types/issue';
import {DevUser} from '../../../shared/types/user';

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