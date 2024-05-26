import React, { useState, useEffect } from 'react';
import ElementContainer from '../../../shared/components/ElementContainer';
import styled from 'styled-components';
import IssueStatusChangeModal from './IssueStatusChangeModal';
import { issueListDummy } from '../../../dummy/issueListDummy';
import { useRecoilState } from 'recoil';
import { issuePageInfoState } from '../../../recoil/issue/issueAtom';
import { IssuePriority, IssueStatus } from '../../../shared/types/issue';

const IssueHeaderItem: React.FC = () => {
  const [issueIdx, setIssueIdx] = useState<number>(0);
  const [issue, setIssue] = useRecoilState(issuePageInfoState);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const currentIssue = issueListDummy[issueIdx];
    setIssue(currentIssue);
  }, [issueIdx, setIssue]);

  const priority: IssuePriority = issue.priority;

  // todo : user role 받아오는 함수로 나중에 고치기
  const tempUserRole = 'ROLE_PL';

  const handleStatusChange = (newStatus: IssueStatus) => {
    setIssue({ ...issue, status: newStatus });
    setShowModal(false);
  };

  return (
    <ElementContainer>
      <Container>
        <IssuePriorityContainer priority={priority}>
          {priority}
        </IssuePriorityContainer>
        <IssueTitle>
          {issue.title || '이슈 제목 여기에 보여줍니다!'}
        </IssueTitle>
        <ButtonContainer onClick={() => setShowModal(true)}>
          {issue.status}
          <Triangle />
        </ButtonContainer>
        {showModal && (
          <IssueStatusChangeModal
            onConfirm={handleStatusChange}
            onClose={() => setShowModal(false)}
            defaultStatus={issue.status}
            role={tempUserRole}
          />
        )}
      </Container>
    </ElementContainer>
  );
}

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: start;
`;

const ButtonContainer = styled.button`
    width: fit-content;
    height: 50px;
    border: 2px solid ${({ theme: { color } }) => color.black200};
    border-radius: 10px;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-weight: bold;
    font-size: 22px;
    margin-right: 16px;
    cursor: pointer;
    gap: 12px;
`;

const Triangle = styled.div`
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid black;
`;

const IssuePriorityContainer = styled.div<{ priority: IssuePriority }>`
    width: fit-content;
    height: 50px;
    border: none;
    border-radius: 6px;
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 0 16px 0 16px;
    font-weight: bold;
    font-size: 18px;
    margin-right: 16px;
    color: white;
    background-color: ${({ priority }) => {
        switch (priority) {
            case 'BLOCKER':
                return '#DB4035';
            case 'CRITICAL':
                return '#FF9933';
            case 'MAJOR':
                return '#FAD000';
            case 'MINOR':
                return '#7ECC49';
            case 'TRIVIAL':
                return '#14AAF5';
            default:
                return '#B8B8B8';
        }
    }};
`;

const IssueTitle = styled.h3`
    flex-grow: 1;
    text-align: left;
    font-size: 18px;
`;

export default IssueHeaderItem;
