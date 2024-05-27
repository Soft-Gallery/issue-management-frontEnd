import React from 'react';
import styled from 'styled-components';
import { Issue } from '../../../shared/types/issue';
import ElementContainer from '../../../shared/components/ElementContainer';

interface TesterIssueDetailProps {
  issue: Issue;
}

const TesterIssueDetail: React.FC<TesterIssueDetailProps> = ({ issue }) => {
  return (
    <DetailContainer>
      <ElementContainer>
        <DetailTitle>{issue.title}</DetailTitle>
        <DetailDescription>{issue.description}</DetailDescription>
        <DetailItem>
          <strong>Status:</strong> {issue.status}
        </DetailItem>
        <DetailItem>
          <strong>Priority:</strong> {issue.priority}
        </DetailItem>
        <DetailItem>
          <strong>Reporter:</strong> {issue.reporter}
        </DetailItem>
        <AssigneeContainer>
          <strong>Assignees:</strong>
          {issue.assignee.map((assignee) => (
            <Assignee key={assignee.id}>{assignee.name}</Assignee>
          ))}
        </AssigneeContainer>
        <CommentsContainer>
          <strong>Comments:</strong>
          {issue.comments.map((comment, index) => (
            <Comment key={index}>
              <CommentAuthor>{comment.author}</CommentAuthor>
              <CommentText>{comment.text}</CommentText>
              <CommentDate>{comment.createdAt}</CommentDate>
            </Comment>
          ))}
        </CommentsContainer>
      </ElementContainer>
    </DetailContainer>
  );
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
  color: ${({ theme }) => theme.color.gray500};
`;

const DetailItem = styled.div`
  margin: 10px 0;
  font-size: 14px;
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

const Comment = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray300};
  border-radius: 5px;
`;

const CommentAuthor = styled.div`
  font-weight: bold;
`;

const CommentText = styled.p`
  margin: 5px 0;
`;

const CommentDate = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.color.gray};
`;

export default TesterIssueDetail;
