import { DevUser, TesterUser, UserWithRole } from './user';

export type IssueStatus = 'NEW' | 'ASSIGNED' | 'FIXED' | 'RESOLVED' | 'CLOSED' | 'REOPENED';

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
  authorId: string;
  text: string;
  issueId: number;
  createdAt: string;
}

export interface TesterIssue {
  title: string;
  description: string;
  projectId: number;
  priority: IssuePriority;
}
