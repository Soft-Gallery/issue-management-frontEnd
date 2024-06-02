import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { issuePageInfoState } from '../../../recoil/issue/issueAtom';
import { IssueStatus } from '../../../shared/types/issue';
import { client } from '../../../shared/remotes/axios';
import { headerData } from '../../../shared/components/header';
import { userIdState, userPageState, userRoleState } from '../../../recoil/atom';

interface IssueStatusChangeButtonProps {
  status: IssueStatus;
}

const IssueStatusChangeButton: React.FC<IssueStatusChangeButtonProps> = ({ status }) => {
  const [issueInfo, setIssueInfo] = useRecoilState(issuePageInfoState);
  const userPageInfo = useRecoilValue(userPageState);
  const userId = useRecoilValue(userIdState);
  const userRole = useRecoilValue(userRoleState);

  const currentStatus = issueInfo.status;

  const getStatusChangeAPICall = async () => {
    try {
      const response = await client.get(`/issue/assignment/${userPageInfo.issueId}/${userId}`, headerData());
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleStatusChange = async () => {
    const data = await getStatusChangeAPICall();
    if (data) {
      setIssueInfo({
        ...issueInfo,
        status: status,
      });
    }
  };

  const shouldShowButton = (): boolean => {
    if (userRole === 'ROLE_PL' && currentStatus === 'RESOLVED' && status === 'CLOSED') {
      return true;
    }
    if (userRole === 'ROLE_TESTER' && currentStatus === 'FIXED' && status === 'RESOLVED') {
      return true;
    }
    if (userRole === 'ROLE_DEV' && currentStatus === 'ASSIGNED' && status === 'FIXED') {
      return true;
    }
    return false;
  };

  if (!shouldShowButton()) {
    return null;
  }

  return (
    <Container>
      <StatusChangeButton onClick={handleStatusChange}>
        {status}
      </StatusChangeButton>
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: end;
    align-items: center;
`;

export const StatusChangeButton = styled.button`
    display: inline-flex;
    align-items: center;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    padding: 10px 20px;
    text-align: center;

    margin-bottom: 12px;
    height: 40px;
    font-size: 16px;
    width: auto;

    border: 1.5px solid ${({ theme: { color } }) => color.black200};

    color: ${({ theme: { color } }) => color.gray1};
    background: ${({ theme: { color } }) => color.white};

    &:hover {
        color: ${({ theme: { color } }) => color.white};
        background: ${({ theme: { color } }) => color.indigo};
    }

    &:active {
        color: ${({ theme: { color } }) => color.white};
        background: ${({ theme: { color } }) => color.indigo};
    }
`;

export default IssueStatusChangeButton;
