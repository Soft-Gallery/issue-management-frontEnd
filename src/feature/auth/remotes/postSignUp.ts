import { client } from '../../../shared/remotes/axios';
import { UserAccountType } from '../type/types';

export default function postSignUp(id: string, password: string, name: string, email: string, role: string) {

  const userData = {
    "id": id,
    "name": name,
    "email": email,
    "password": password,
    "role": role,
  }

  const registerUser = async (userData: UserAccountType) => {
    try {
      const response = await client.post('/user/signup', userData);
      return true;
    } catch (error) {
      return error;
    }
  };

  return registerUser(userData);
}