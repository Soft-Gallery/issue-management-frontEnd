import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DevUser, UserRole, UserWithRole } from '../../../shared/types/user';
import UserInfoItemDropdown from '../../issue/components/UserInfoItemDropdown';
import { useRecoilValue } from 'recoil';
import { headerData } from '../../../shared/components/header';
import { userPageState } from '../../../recoil/atom';
import { client } from '../../../shared/remotes/axios';
import RecommendDev from './RecommendDev';

const AssigneeSelectItem: React.FC = () => {
  const userPageInfo = useRecoilValue(userPageState);
  const [devsInProject, setDevsInProject] = useState<DevUser[]>([]);

  const fetchDevsInProject = async () => {
    try {
      const response = await client.get(`/member/get/user/${userPageInfo.projectId}/ROLE_DEVELOPER`, headerData());
      const data: DevUser[] = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching developers in project:', error);
      return null;
    }
  };

  const getDevsInProject = async () => {
    const data = await fetchDevsInProject();
    if (data) {
      setDevsInProject(data);
    }
  };

  useEffect(() => {
    getDevsInProject();
  }, []);

  return (
    <Container>
      <SelectContainer>
        <TitleText>Assignee</TitleText>
        <UserInfoItemDropdown
          title="Dev 정보"
          itemList={devsInProject as UserWithRole<UserRole>[]}
          itemType="devs"
        />
      </SelectContainer>
      <RecommendDev />
    </Container>
  );
};

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 24px;
    display: flex;
    border-radius: 12px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border: 1px solid ${({ theme: { color } }) => color.black200};

    background-color: ${({ theme: { color } }) => color.white};
`;

const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

export const TitleText = styled.div`
    display: flex;
    text-align: left;
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.black};
`;

export default AssigneeSelectItem;
