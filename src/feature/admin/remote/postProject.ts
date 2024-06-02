import {client } from '../../../shared/remotes/axios';

export default async function postProject(name: string, description: string, projectState:string, adminId: string, token:string) {

  try {
    const response = await client.post(
      '/project/create',
      {
        name,
        description,
        projectState,
        adminId
      },
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
