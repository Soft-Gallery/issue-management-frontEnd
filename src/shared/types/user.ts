export interface UserInfo {
  id: number;
  name: string;
  email: string;
}

export type UserRole = 'admin' | 'pl' | 'dev' | 'tester';

export type UserWithRole<T extends UserRole> = UserInfo & {
  role: T;
};

export type AdminUser = UserWithRole<'admin'>;
export type PLUser = UserWithRole<'pl'>;
export type DevUser = UserWithRole<'dev'>;
export type TesterUser = UserWithRole<'tester'>;
