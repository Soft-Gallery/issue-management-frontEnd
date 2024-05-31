import React from 'react';
import styled from 'styled-components';
import { Issue } from '../shared/types/issue';
import IssueListItem from '../feature/issue/components/IssueListItem';
import { issueListDummy } from '../dummy/issueListDummy';
import { useParams } from 'react-router-dom';

const IssuePage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <Container>
      <h2>Project ID: {projectId}</h2>
      {issueListDummy.map((issue: Issue) => (
        <IssueListItem
          key={issue.id ?? 0}
          id={issue.id ?? 0}
          title={issue.title}
          status={issue.status}
          priority={issue.priority}
        />
      ))}
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

export default IssuePage;
