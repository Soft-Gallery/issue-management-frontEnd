import React from 'react';
import styled from 'styled-components';
import { IssuePriority, IssueStatus } from '../../../shared/types/issue';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userPageState, userRoleState } from '../../../recoil/atom';
import { useNavigate, useParams } from 'react-router-dom';

interface IssueListItemProps {
  id: number;
  title: string;
  status: IssueStatus;
  priority: IssuePriority;
}

const IssueListItem: React.FC<IssueListItemProps> = ({ id, title, status, priority }) => {
  const userRole = useRecoilValue(userRoleState);
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();
  const [userPageInfo, setUserPageInfo] = useRecoilState(userPageState);

  const handleIssueListClick = () => {
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

      setUserPageInfo((prev) => ({
        ...prev,
        issueId: id,
      }));

      navigate(`/project/${projectId}/${rolePath}/issue/${id}`);
  }

  return (
    <Container onClick={handleIssueListClick}>
      <StatusLabel>
        {status}
      </StatusLabel>
      <IssueLabel priority={priority}>
        {priority}
      </IssueLabel>
      <IssueTitle>
        {title || '이슈 제목 여기에 보여줍니다!'}
      </IssueTitle>
    </Container>
  );
}

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 6px 18px 6px 18px;
    display: flex;
    border-radius: 12px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1px solid ${({ theme: { color } }) => color.black200};

    background-color: ${({ theme: { color } }) => color.white};
    cursor: pointer;
    
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    
    &:hover {
        transform: scale(1.01);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const Label = styled.div`
    border: none;
    border-radius: 4px;
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 6px 10px;
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
