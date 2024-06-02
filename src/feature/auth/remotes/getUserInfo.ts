import { client } from '../../../shared/remotes/axios';
import getTokenFromLocalStorage from '../function/getTokenFromLocalStorage';
import { UserRole, UserWithRole } from '../../../shared/types/user';

export const getUserInfo = async () => {
  const userToken = getTokenFromLocalStorage();
  if (!userToken) {
    throw new Error('User token is missing');
  }

  const response = await client.get<UserWithRole<UserRole>>('/user/info', {
    headers: {
      Authorization: `${userToken}`,
    }
  });

  return response.data;
};
