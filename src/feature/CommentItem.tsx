import React, { useEffect, useState } from 'react';
import ElementContainer from '../shared/components/ElementContainer';
import { TitleText } from './pl/components/AssigneeSelectItem';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { userIdState, userPageState } from '../recoil/atom';
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
  const myId = useRecoilValue(userIdState);
  const [comments, setComments] = useState<CommentsType[]>([]);
  const [myComment, setMyComment] = useState<string>('');
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

  const postComment = async (comment: Partial<Comments>) => {
    try {
      await client.post(`/comment/new/${userPageInfo.issueId}`, comment, headerData());
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMyComment(e.target.value);
  };

  const handleSubmit = async () => {
    if (myComment.trim() === '') return;

    const newComment = {
      authorId: myId,
      text: myComment,
      issueId: userPageInfo.issueId,
      createdAt: new Date().toISOString(),
    };

    await postComment(newComment);
    await fetchComments();
    setMyComment('');
  };

  return (
    <ElementContainer>
      <TitleText>
        Comments
      </TitleText>
      <CommentContainer>
        <CommentInput
          placeholder="Add a comment"
          value={myComment}
          onChange={handleCommentChange}
        />
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </CommentContainer>
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

const CommentInput = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    margin-top: 4px;
    border: 1px solid ${({ theme: { color } }) => color.gray1};
    border-radius: 4px;
    font-size: 14px;
    height: 50px;
    vertical-align: top;
    resize: none;
`;

const CommentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const SubmitButton = styled.button`
    height: 50px;
    width: 100px;
    margin-left: 10px;
`;

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
