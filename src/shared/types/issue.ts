import { DevUser, TesterUser, UserWithRole } from './user';

export type IssueStatus = 'NEW' | 'ASSIGNED' | 'FIXED' | 'RESOLVED' | 'CLOSED';

export type IssuePriority = 'BLOCKER' | 'CRITICAL' | 'MAJOR' | 'MINOR' | 'TRIVIAL';

export interface Issue {
  id?: number;
  title: string;
  description: string;
  status: IssueStatus;
  priority: IssuePriority;
  reporter: TesterUser;
  devs: DevUser[],
  assignedDev: DevUser | null;
  comments: Comments[];
}

export interface RecommendDevInfo{
  name: string;
  reason: string;
  isSelected: boolean;
}

export interface Comments {
  text: string;
  createdAt: string;
  author: string;
}
