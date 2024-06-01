import React, { useState } from 'react';
import styled from 'styled-components';
import { Issue } from '../../../shared/types/issue';
import ElementContainer from '../../../shared/components/ElementContainer';
import { ISSUE_STATUS_STATE } from '../../issue/issueStatusConstants';
import CommentItem from '../../CommentItem';

interface TesterIssueDetailProps {
  issue: Issue;
}

const TesterIssueDetail: React.FC<TesterIssueDetailProps> = ({ issue }) => {
  const [selectedStatus, setSelectedStatus] = useState<string>(issue.status);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <DetailContainer>
      <ElementContainer>
        <DetailTitle>{issue.title}</DetailTitle>
        <DetailDescription>{issue.description}</DetailDescription>
        <DetailItem>
          <strong>Status:</strong>
          <StatusContainer>
            {Object.values(ISSUE_STATUS_STATE).map((status) => (
              <StatusLabel key={status} color={getStatusColor(status)}>
                <StatusRadio
                  type="radio"
                  name="status"
                  value={status}
                  checked={selectedStatus === status}
                  onChange={handleStatusChange}
                />
                {status}
              </StatusLabel>
            ))}
          </StatusContainer>
        </DetailItem>
        <DetailItem>
          <strong>Priority:</strong> {issue.priority}
        </DetailItem>
        <DetailItem>
          <strong>Reporter:</strong> {issue.reporter.name}
        </DetailItem>
        { issue.assignedDev ? (
          <AssigneeContainer>
            <strong>Assignees:</strong>
            <Assignee>{issue.assignedDev.name}(issue.assignedDev.email)</Assignee>
          </AssigneeContainer>
        ) : (
          <></>
        )}
        <CommentItem />
      </ElementContainer>
    </DetailContainer>
  );
};

const getStatusColor = (status: string) => {
  switch (status) {
    case ISSUE_STATUS_STATE.NEW:
      return '#DB4035';
    case ISSUE_STATUS_STATE.ASSIGNED:
      return '#FF9933';
    case ISSUE_STATUS_STATE.FIXED:
      return '#FAD000';
    case ISSUE_STATUS_STATE.RESOLVED:
      return '#7ECC49';
    case ISSUE_STATUS_STATE.CLOSED:
      return '#14AAF5';
    default:
      return '#B8B8B8';
  }
};

const DetailContainer = styled.div`
    width: 100%;
    margin-top: 20px;
`;

const DetailTitle = styled.h1`
    font-size: 24px;
    margin: 0;
    padding: 0;
`;

const DetailDescription = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.color.gray};
`;

const DetailItem = styled.div`
    margin: 10px 0;
    font-size: 14px;
`;

const StatusContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
`;

const StatusLabel = styled.label<{ color: string }>`
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({ color }) => color};
    font-weight: bold;
`;

const StatusRadio = styled.input`
    accent-color: ${({ color }) => color};
`;

const AssigneeContainer = styled.div`
    margin: 10px 0;
`;

const Assignee = styled.div`
    margin-left: 20px;
    font-size: 14px;
`;

const CommentsContainer = styled.div`
    margin-top: 20px;
`;

export default TesterIssueDetail;
