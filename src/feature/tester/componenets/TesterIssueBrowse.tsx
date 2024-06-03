import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TesterIssueDetail from './TesterIssueDetail';
import { client } from '../../../shared/remotes/axios';
import { headerData } from '../../../shared/components/header';
import { Issue } from '../../../shared/types/issue';
import { useRecoilValue } from 'recoil';
import { userPageState } from '../../../recoil/atom';

const TesterIssueBrowse = () => {
  const [selectedIssue, setSelectedIssue] = useState<number | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const userPageInfo = useRecoilValue(userPageState);

  const getIssues = async () => {
    const data = await fetchIssueData();
    setIssues(data);
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
      {loading? (
        <LoadingIndicator>Loading...</LoadingIndicator>
      ) : (
        <IssueListContainer>
          {issues.map((issue, index) => (
            <React.Fragment key={index}>
              <ElementContainerButton onClick={() => handleIssueClick(index)}>
                <IssueTitle>{issue.title}</IssueTitle>
                <IssueDescription>{issue.description}</IssueDescription>
              </ElementContainerButton>
              {selectedIssue === index && (
                <IssueDetailContainer>
                  <TesterIssueDetail issue={issues[selectedIssue]} />
                </IssueDetailContainer>
              )}
            </React.Fragment>
          ))}
        </IssueListContainer>
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

const IssueListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const IssueTitle = styled.h2`
  font-size: 18px;
  margin: 0;
  padding: 0;
`;

const IssueDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.gray};
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

const IssueDetailContainer = styled.div`
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
`;

export default TesterIssueBrowse;
