import { client } from '../../../shared/remotes/axios';
import { UserAccountType } from '../type/userAccotunType';

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
      console.log(userData)
      const response = await client.post('/user/signup', userData);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  return registerUser(userData);
}
