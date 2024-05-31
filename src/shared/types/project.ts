import { DevUser, PLUser, TesterUser } from './user';
import { Issue } from './issue';

export interface Project {
  title: string;
  description: string;
  pl: PLUser[];
  dev: DevUser[];
  tester: TesterUser[];
  issues: Issue[];
}

export interface ProjectCardItemType {
  id: number;
  title: string;
  description: string;
}
