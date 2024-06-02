import { client } from '../../../shared/remotes/axios';

export default async function getMemberAll(role: string, token: string) {
  try {
    const data = await client.get(`/user/role/${role}`, {
      headers: {
        Authorization: `${token}`,
      }
    });
    return data.data;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
}
