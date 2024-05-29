import React from 'react';
import styled from 'styled-components';
import IssueHeaderItem from '../feature/pl/components/IssueHeaderItem';
import IssueInfoItem from '../feature/pl/components/IssueInfoItem';
import AssigneeSelectItem from '../feature/pl/components/AssigneeSelectItem';
import CommentItem from '../feature/CommentItem';
import { useRecoilValue } from 'recoil';
import { issuePageInfoState } from '../recoil/issue/issueAtom';
import AssignedDevItem from '../feature/pl/components/AssignedDevItem';
import IssueStatusChangeButton from '../feature/pl/components/IssueStatusChangeButton';

const DevPage: React.FC = () => {
  const issueInfo = useRecoilValue(issuePageInfoState);
  const issueStatus = issueInfo.status;

  const renderContent = () => {
    switch (issueStatus) {
      case 'ASSIGNED':
        return (
          <>
            <AssignedDevItem />
            <IssueStatusChangeButton status="FIXED" />
          </>
        );
      default:
        return <AssignedDevItem />;
    }
  };

  return (
    <Container>
      <IssueHeaderItem />
      <IssueInfoItem />
      {renderContent()}
      <CommentItem />
    </Container>
  );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    gap: 20px;
`;

const Button = styled.button`
    display: inline-flex;
    align-items: center;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    padding: 10px 20px;
    text-align: center;
    height: 40px;
    font-size: 16px;
    width: auto;
    border: 1px solid ${({ theme: { color } }) => color.black200};
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

export default DevPage;
