import React, { useState } from 'react';
import styled from 'styled-components';
import { issueListDummy } from '../../../dummy/issueListDummy';
import TesterIssueDetail from './TesterIssueDetail';

const TesterIssueBrowse = () => {
  const [selectedIssue, setSelectedIssue] = useState<number | null>(null);

  const handleIssueClick = (index: number) => {
    if (selectedIssue === index) {
      setSelectedIssue(null);
    } else {
      setSelectedIssue(index);
    }
  };

  return (
    <Container>
      <IssueListContainer>
        {issueListDummy.map((issue, index) => (
          <React.Fragment key={index}>
            <ElementContainerButton onClick={() => handleIssueClick(index)}>
              <IssueTitle>{issue.title}</IssueTitle>
              <IssueDescription>{issue.description}</IssueDescription>
            </ElementContainerButton>
            {selectedIssue === index && (
              <IssueDetailContainer>
                <TesterIssueDetail issue={issueListDummy[selectedIssue]} />
              </IssueDetailContainer>
            )}
          </React.Fragment>
        ))}
      </IssueListContainer>
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
