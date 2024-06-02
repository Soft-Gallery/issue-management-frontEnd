import getTokenFromLocalStorage from '../../feature/auth/function/getTokenFromLocalStorage';

export const headerData = () =>{
  const userToken = getTokenFromLocalStorage();

  if (!userToken) {
    throw new Error('User token is missing');
  }

  const data = {
    headers: {
      Authorization: `${userToken}`,
    }
  }

  return data;
}