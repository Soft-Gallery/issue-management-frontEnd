import React, { useState } from 'react';
import styled from 'styled-components';
import { Issue } from '../../../shared/types/issue';
import ElementContainer from '../../../shared/components/ElementContainer';
import { ISSUE_STATUS_STATE } from '../../issue/issueStatusConstants';

interface TesterIssueDetailProps {
  issue: Issue;
}

const TesterIssueDetail: React.FC<TesterIssueDetailProps> = ({ issue }) => {
  const [selectedStatus, setSelectedStatus] = useState<string>(issue.status);
  const [newComment, setNewComment] = useState<string>('');
  const [comments, setComments] = useState(issue.comments);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStatus(event.target.value);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const newCommentObject = {
        author: 'Current User', // This should be replaced with actual user info
        text: newComment,
        createdAt: new Date().toLocaleString(),
      };
      setComments([...comments, newCommentObject]);
      setNewComment('');
    }
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
        <AssigneeContainer>
          <strong>Assignees:</strong>
          {issue.devs.map((dev) => (
            <Assignee key={dev.id}>{dev.name}</Assignee>
          ))}
        </AssigneeContainer>
        <CommentsContainer>
          <strong>Comments:</strong>
          {comments.map((comment, index) => (
            <Comment key={index}>
              <CommentAuthor>{comment.author}</CommentAuthor>
              <CommentText>{comment.text}</CommentText>
              <CommentDate>{comment.createdAt}</CommentDate>
            </Comment>
          ))}
          <CommentForm>
            <CommentInput
              type="text"
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Add a comment"
            />
            <CommentButton onClick={handleCommentSubmit}>Submit</CommentButton>
          </CommentForm>
        </CommentsContainer>
      </ElementContainer>
    </DetailContainer>
  );
};

const getStatusColor = (status: string) => {
  switch (status) {
    case ISSUE_STATUS_STATE.NEW:
      return '#ff0000';
    case ISSUE_STATUS_STATE.ASSIGNED:
      return '#ffa500';
    case ISSUE_STATUS_STATE.FIXED:
      return '#542cc9';
    case ISSUE_STATUS_STATE.RESOLVED:
      return '#008000';
    case ISSUE_STATUS_STATE.CLOSED:
      return '#0000ff';
    default:
      return '#000';
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

const Comment = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray};
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

const CommentForm = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 5px;
`;

const CommentButton = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.blue};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default TesterIssueDetail;
