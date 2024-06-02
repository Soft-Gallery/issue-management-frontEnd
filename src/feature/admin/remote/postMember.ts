import { client } from '../../../shared/remotes/axios';

export interface Member {
  projectId: number;
  userId: string;
  role: string;
}

export default async function postMembers(users: Member[], token: string) {
  try {
    const response = await client.post(
      '/member/add',
      users,
      {
        headers: {
          Authorization: `${token}`,
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('response error', error);
    throw error;
  }
}
