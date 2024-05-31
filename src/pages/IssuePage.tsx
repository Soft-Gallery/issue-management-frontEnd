import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Issue } from '../shared/types/issue';
import IssueListItem from '../feature/issue/components/IssueListItem';
import { useParams } from 'react-router-dom';
import { client } from '../shared/remotes/axios';
import { headerData } from '../shared/components/header';

const IssuePage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getIssues = async () => {
      const data = await fetchIssueData();
      setIssues(data);
      setLoading(false);
    };
    getIssues();
  }, [projectId]);

  const fetchIssueData = async () => {
    try {
      const response = await client.get(`/issue/searching/${projectId}/all`, headerData());
      const issueData = response.data.map((issue: any) => ({
        id: issue.id,
        title: issue.title,
        status: issue.status,
        priority: issue.priority,
      }));
      return issueData;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return (
    <Container>
      {loading ? (
        <LoadingIndicator>Loading...</LoadingIndicator>
      ) : (
        issues.length > 0 ? (
          issues.map((issue) => (
            <IssueListItem
              key={issue.id}
              id={issue.id!}
              title={issue.title}
              status={issue.status}
              priority={issue.priority}
            />
          ))
        ) : (
          <NoIssuesMessage>텅~</NoIssuesMessage>
        )
      )}
    </Container>
  );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 48px 24px 48px 24px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    
`;

const LoadingIndicator = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-top: 50px;
`;

const NoIssuesMessage = styled.div`
    font-size: 56px;
    font-weight: bold;
    margin-top: 50px;
`;

export default IssuePage;
