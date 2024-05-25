import { Comments } from './comment';
import { DevUser } from './user';

export type Issue = {
  title: string;
  description: string;
  status: IssueStatus;
  priority: IssuePriority;
  reporter: string;
  assignee: DevUser[];
  comments: Comments[];
}


export type IssueStatus = 'NEW' | 'ASSIGNED' | 'FIXED' | 'RESOLVED' | 'CLOSED';

export type IssuePriority = 'BLOCKER' | 'CRITICAL' | 'MAJOR' | 'MINOR' | 'TRIVIAL';