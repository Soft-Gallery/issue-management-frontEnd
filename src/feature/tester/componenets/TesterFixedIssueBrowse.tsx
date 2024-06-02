import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TesterIssueDetail from './TesterIssueDetail';
import { client } from '../../../shared/remotes/axios';
import { headerData } from '../../../shared/components/header';
import { Issue } from '../../../shared/types/issue';
import { useRecoilValue } from 'recoil';
import { userIdState, userPageState } from '../../../recoil/atom';
import IssueListItem from '../../issue/components/IssueListItem';

const TesterFixedIssueBrowse = () => {
  const [selectedIssue, setSelectedIssue] = useState<number | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const userPageInfo = useRecoilValue(userPageState);
  const myId = useRecoilValue(userIdState);

  const getIssues = async () => {
    const data = await fetchIssueData();

    const fixedIssues = data.filter(
      (issue: Issue) =>
        issue.reporter.id.toString() === myId &&
        (issue.status === 'FIXED' || issue.status === 'REOPENED')
    );
    setIssues(fixedIssues);
    setLoading(false);
  };

  const fetchIssueData = async () => {
    try {
      const response = await client.get(`/issue/searching/${userPageInfo.projectId}/all`, headerData());
      const issueData = response.data.map((issue: any) => ({
        id: issue.id,
        title: issue.title,
        status: issue.status,
        priority: issue.priority,
        reporter: issue.reporter,
      }));
      return issueData;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    getIssues();
  }, []);

  const handleIssueClick = (index: number) => {
    if (selectedIssue === index) {
      setSelectedIssue(null);
    } else {
      setSelectedIssue(index);
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
  gap: 20px;
  border-radius: 30px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const LoadingIndicator = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-top: 50px;
`;


const ElementContainerButton = styled.button`
    width: 100%;
    box-sizing: border-box;
    padding: 24px;
    display: flex;
    border-radius: 12px;

    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    border: 1px solid ${({ theme: { color } }) => color.black200};

    background-color: ${({ theme: { color } }) => color.white};
    cursor: pointer;
    text-align: left;

    &:hover {
        background-color: ${({ theme: { color } }) => color.black100};
    }

    &:focus {
        outline: none;
    }
`;

const NoIssuesMessage = styled.div`
    font-size: 56px;
    font-weight: bold;
    margin-top: 50px;
`;
export default TesterFixedIssueBrowse;
