import { client } from '../../../shared/remotes/axios';

export default function postLogin(id: string, password: string) {

  const userData = new FormData();
  userData.append('id', id);
  userData.append('password', password);

  const loginUser = async (userData: FormData) => {
    try {
      const response = await client.post('/user/signin', userData);
      const userToken = response.headers.authorization;
      console.log('User Login successfully:', response);
      return response;
    } catch (error) {
      console.error('Error Login user:');
      return false;
    }
  };

  return loginUser(userData);
}