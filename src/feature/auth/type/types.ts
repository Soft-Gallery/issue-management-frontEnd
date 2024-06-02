export interface ValidationErrorType {
  id?: string;
  password?: string;
  username?: string;
  email?: string;
  role?: string;
}

export interface UserAccountType {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}
