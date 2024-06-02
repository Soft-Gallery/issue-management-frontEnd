import React from 'react';
import ElementContainer from '../shared/components/ElementContainer';
import { TitleText } from './pl/components/AssigneeSelectItem';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { issuePageInfoState } from '../recoil/issue/issueAtom';

const CommentItem: React.FC = () => {
  const issueInfo = useRecoilValue(issuePageInfoState);
  const { comments } = issueInfo;

  return (
    <ElementContainer>
      <TitleText>
        Comments
      </TitleText>
      <CommentsList>
        {comments.length > 0 ? (
          comments.map((comment, idx) => (
            <Comment key={idx}>
              <CommentAuthor>{comment.authorId}</CommentAuthor>
              <CommentText>{comment.text}</CommentText>
              <CommentDate>{new Date(comment.createdAt).toLocaleString()}</CommentDate>
            </Comment>
          ))
        ) : (
          <></>
        )}
      </CommentsList>
    </ElementContainer>
  );
};

const CommentsList = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const Comment = styled.div`
    border-bottom: 1px solid ${({ theme: { color } }) => color.gray1};
    padding: 10px 0;
`;

const CommentAuthor = styled.div`
    font-weight: bold;
`;

const CommentText = styled.div`
    margin: 5px 0;
`;

const CommentDate = styled.div`
    font-size: 12px;
    color: ${({ theme: { color } }) => color.gray2};
`;

const NoCommentsMessage = styled.div`
    font-size: 16px;
    color: ${({ theme: { color } }) => color.gray2};
`;

export default CommentItem;
