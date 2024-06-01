import React, { useEffect, useState } from 'react';
import ElementContainer from '../shared/components/ElementContainer';
import { TitleText } from './pl/components/AssigneeSelectItem';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { userPageState } from '../recoil/atom';
import { Comments } from '../shared/types/issue';
import { client } from '../shared/remotes/axios';
import { headerData } from '../shared/components/header';

interface CommentsType {
  text: string,
  authorId: string,
  createdAt: string,
  issueId: number,
  commentId: string,
}

const CommentItem: React.FC = () => {
  const [comments, setComments] = useState<CommentsType[]>([]);
  const userPageInfo = useRecoilValue(userPageState);

  useEffect(() => {
    fetchComments();
  }, [userPageInfo.issueId]);

  const fetchComments = async () => {
    try {
      const response = await client.get(`/comment/get-list/${userPageInfo.issueId}`, headerData());
      const data: CommentsType[] = response.data;
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  return (
    <ElementContainer>
      <TitleText>
        Comments
      </TitleText>
      <CommentsList>
        {comments.map((comment) => (
          <Comment key={comment.commentId}>
            <CommentAuthor>{comment.authorId}</CommentAuthor>
            <CommentText>{comment.text}</CommentText>
            <CommentDate>{new Date(comment.createdAt).toLocaleString()}</CommentDate>
          </Comment>
        ))}
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

export default CommentItem;
