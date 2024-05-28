import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { issuePageInfoState } from '../../../recoil/issue/issueAtom';
import { IssueStatus } from '../../../shared/types/issue';  // Import the IssueStatus type

interface IssueStatusChangeButtonProps {
  status: IssueStatus;  // Ensure the status prop is of type IssueStatus
}

const IssueStatusChangeButton: React.FC<IssueStatusChangeButtonProps> = ({ status }) => {
  const [issueInfo, setIssueInfo] = useRecoilState(issuePageInfoState);

  const handleStatusChange = () => {
    setIssueInfo({
      ...issueInfo,
      status: status,  // No need to use template string
    });
  };

  return (
    <StatusChangeButton onClick={handleStatusChange}>
      {status}
    </StatusChangeButton>
  );
};

export const StatusChangeButton = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 20px;
  text-align: center;

  margin-top: 12px;
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
