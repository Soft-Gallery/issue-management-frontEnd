import React, { useState } from 'react';
import styled from 'styled-components';
import IssueHeaderItem from '../feature/pl/components/IssueHeaderItem';
import IssueInfoItem from '../feature/pl/components/IssueInfoItem';
import AssigneeSelectItem from '../feature/pl/components/AssigneeSelectItem';
import CommentItem from '../feature/CommentItem';
import { useRecoilValue } from 'recoil';
import { issuePageInfoState } from '../recoil/issue/issueAtom';
import { DevUser } from '../shared/types/user';
import AssignedDevItem from '../feature/pl/components/AssignedDevItem'; // Import the AssignedDevItem component

interface Assignees {
  [id: number]: DevUser;
}

const PLPage: React.FC = () => {
  const issuePageInfo = useRecoilValue(issuePageInfoState);
  const devAssignees: DevUser[] = issuePageInfo.devs;

  const assignees: Assignees = devAssignees.reduce((acc: Assignees, curr: DevUser) => {
    acc[curr.id] = curr;
    return acc;
  }, {});

  const [isAssigned, setIsAssigned] = useState<string>('NOT_ASSIGNED');
  const handlePrintState = () => {
    console.log(devAssignees);
    setIsAssigned('ASSIGNED');
    // 이후에, API 연동하면 될 것 같아요.
  };

  return (
    <Container>
      <IssueHeaderItem />
      <IssueInfoItem />
      {isAssigned === 'ASSIGNED' ? (
        <AssignedDevItem assignees={assignees} />
      ) : (
        <>
          <AssigneeSelectItem />
          <Button onClick={handlePrintState}>Assign Devs</Button>
        </>
      )}
      <CommentItem />
    </Container>
  );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: start;
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

export default PLPage;
