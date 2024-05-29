import { Comments } from './comment';
import { DevUser } from './user';

export type IssueStatus = 'NEW' | 'ASSIGNED' | 'FIXED' | 'RESOLVED' | 'CLOSED';

export type IssuePriority = 'BLOCKER' | 'CRITICAL' | 'MAJOR' | 'MINOR' | 'TRIVIAL';

export interface Issue {
  id?: number;
  title: string;
  description: string;
  status: IssueStatus;
  priority: IssuePriority;
  reporter: string;
  devs: DevUser[];
  assignedDev: DevUser;
  comments: Comments[];
}
