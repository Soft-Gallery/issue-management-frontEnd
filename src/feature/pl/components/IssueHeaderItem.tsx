import React from 'react';
import ElementContainer from '../../../shared/components/ElementContainer';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { issuePageInfoState } from '../../../recoil/issue/issueAtom';
import { Issue, IssuePriority, IssueStatus } from '../../../shared/types/issue';

const IssueHeaderItem: React.FC = () => {
  const issue = useRecoilValue(issuePageInfoState);

  return (
    <ElementContainer>
      <Container>
        <LabelContainer>
          <IssueLabel priority={issue.priority}>
            {issue.priority}
          </IssueLabel>
          <StatusLabel>
            {issue.status}
          </StatusLabel>
        </LabelContainer>
        <IssueTitle>
          {issue.title || '이슈 제목 여기에 보여줍니다!'}
        </IssueTitle>
      </Container>
    </ElementContainer>
  );
}

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: start;
    justify-content: start;
`;

const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
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

export default IssueHeaderItem;
