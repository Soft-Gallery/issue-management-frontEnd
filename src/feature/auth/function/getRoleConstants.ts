import { USER_ROLE_STATES } from '../../../recoil/constants/constants';

export default function getRoleConstants(role:string):string {
  switch (role) {
    case 'ROLE_ADMIN':
      return USER_ROLE_STATES.ADMIN;
    case 'ROLE_PL':
      return USER_ROLE_STATES.PL;
    case 'ROLE_DEV':
      return USER_ROLE_STATES.DEV;
    case 'ROLE_TESTER':
      return USER_ROLE_STATES.TESTER;
    default:
      return USER_ROLE_STATES.GUEST;
  }
}
