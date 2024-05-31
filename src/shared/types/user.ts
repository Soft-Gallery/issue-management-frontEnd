export interface UserInfo {
  id: number;
  name: string;
  email: string;
  password: string;
}

export type UserRole = 'ROLE_ADMIN' | 'ROLE_PL' | 'ROLE_DEVELOPER' | 'ROLE_TESTER';

export type UserWithRole<T extends UserRole> = UserInfo & {
  role: T;
};

export type AdminUser = UserWithRole<'ROLE_ADMIN'>;
export type PLUser = UserWithRole<'ROLE_PL'>;
export type DevUser = UserWithRole<'ROLE_DEVELOPER'>;
export type TesterUser = UserWithRole<'ROLE_TESTER'>;

export interface UserPage {
  projectId: number;
  issueId: number;
}
