import React from 'react';
import styled from 'styled-components';
import { IssuePriority, IssueStatus } from '../../../shared/types/issue';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userRoleState } from '../../../recoil/atom';
import { useNavigate } from 'react-router-dom';
import { issueListDummy } from '../../../dummy/issueListDummy';
import { issuePageInfoState } from '../../../recoil/issue/issueAtom';

interface IssueListItemProps {
  id: number;
  title: string;
  status: IssueStatus;
  priority: IssuePriority;
}

const IssueListItem: React.FC<IssueListItemProps> = ({ id, title, status, priority }) => {
  const userRole = useRecoilValue(userRoleState);
  const [issueInfo, setIssueInfo] = useRecoilState(issuePageInfoState);
  const navigate = useNavigate();

  const handleIssueListClick = () => {
    const issue = issueListDummy.find(issue => issue.id === id);
    if (issue) {
      setIssueInfo(issue);

      let rolePath;
      switch (userRole) {
        case 'pl':
          rolePath = 'pl';
          break;
        case 'dev':
          rolePath = 'dev';
          break;
        case 'tester':
          rolePath = 'tester';
          break;
        default:
          rolePath = 'issue';
      }
      navigate(`/issue/${rolePath}/${id}`);
    }
  }

  return (
    <Container onClick={handleIssueListClick}>
      <IssueLabel priority={priority}>
        {priority}
      </IssueLabel>
      <StatusLabel>
        {status}
      </StatusLabel>
      <IssueTitle>
        {title || '이슈 제목 여기에 보여줍니다!'}
      </IssueTitle>
    </Container>
  );
}

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 6px 12px 6px 12px;
    display: flex;
    border-radius: 12px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1px solid ${({ theme: { color } }) => color.black200};

    background-color: ${({ theme: { color } }) => color.white};
    cursor: pointer;
`;

const Label = styled.div`
    border: none;
    border-radius: 4px;
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 3px 10px;
    font-weight: bold;
    font-size: 16px;
    margin-right: 16px;
`;

const StatusLabel = styled(Label)`
    color: black;
    border: 1px solid ${({ theme: { color } }) => color.gray1};
`;

const IssueLabel = styled(Label)<{ priority: IssuePriority }>`
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

export default IssueListItem;
