import { client } from '../../../shared/remotes/axios';
import saveTokenToLocalStorage from '../function/saveTokenToLocalStorage';

export default function postLogin(id: string, password: string){

  const userData = new FormData();
  userData.append('id', id);
  userData.append('password', password);

  const loginUser = async (userData: FormData)=> {
    try {
      const response = await client.post('/user/signin', userData);
      const userToken = response.headers.authorization;
      saveTokenToLocalStorage(userToken);
      return true;
    } catch (error) {
      return error;
    }
  }
  return loginUser(userData);
}