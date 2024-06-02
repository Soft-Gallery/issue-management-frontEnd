import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useRecoilState } from 'recoil';
import { headerData } from '../../../shared/components/header';
import { Comments, IssueStatus } from '../../../shared/types/issue';
import { UserWithRole, UserRole, DevUser } from '../../../shared/types/user';
import { userIdState, userPageState, userRoleState } from '../../../recoil/atom';
import { assignedDevInfoState, issuePageInfoState } from '../../../recoil/issue/issueAtom';
import { client } from '../../../shared/remotes/axios';

interface CommentSubmitProps {
  buttonText: string;
}

const CommentSubmit: React.FC<CommentSubmitProps> = ({ buttonText }) => {
  const myId = useRecoilValue(userIdState);
  const userRole = useRecoilValue(userRoleState);
  const userPageInfo = useRecoilValue(userPageState);
  const [issueInfo, setIssueInfo] = useRecoilState(issuePageInfoState);
  const [myComment, setMyComment] = useState<string>('');
  const assignedDev = useRecoilValue(assignedDevInfoState);

  const postComment = async (comment: Partial<Comments>) => {
    try {
      const data = {
        text: myComment,
      };
      await client.post(`/comment/new/${userPageInfo.issueId}`, data, headerData());
    } catch (error) {
      console.error('postComment 에러!!!', error);
    }
  };

  const postDev = async (dev: DevUser) => {
    try {
      await client.get(`/issue/assignment/${userPageInfo.issueId}/${dev.id}`, headerData());
    } catch (error) {
      console.error('postDev 에러!!!!!!', error);
    }
  };

  const getStatusClosed = async () => {
    try {
      await client.get(`/issue/closing/${userPageInfo.issueId}`, headerData());
    } catch (error) {
      console.error('getStatusClosed 에러!!!!!!', error);
    }
  };

  const getStatusFixed = async () => {
    try {
      await client.get(`/issue/fixing/${userPageInfo.issueId}`, headerData());
    } catch (error) {
      console.error('getStatusFixed 에러!!!!!!', error);
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMyComment(e.target.value);
  };

  const handleSubmit = async () => {
    const newComment = {
      authorId: myId,
      text: myComment,
      issueId: userPageInfo.issueId,
      createdAt: new Date().toISOString(),
    };

    if (userRole === 'pl') {
      if (buttonText === 'ASSIGNED') {
        if (myComment.trim() === '' || !assignedDev) return;

        setIssueInfo({
          ...issueInfo,
          status: 'ASSIGNED',
          comments: [...issueInfo.comments, newComment],
          assignedDev: assignedDev,
        });

        await postDev(assignedDev);

      } else if (buttonText === 'CLOSED') {
        if (myComment.trim() === '') return;

        console.log('Setting issueInfo to CLOSED');
        setIssueInfo((prev) => ({
          ...prev,
          status: 'CLOSED',
          comments: [...prev.comments, newComment],
        }));

        await getStatusClosed();

      }
    }else if(userRole === 'dev'){
      if (myComment.trim() === '') return;

      console.log('Setting issueInfo to CLOSED');
      setIssueInfo((prev) => ({
        ...prev,
        status: 'CLOSED',
        comments: [...prev.comments, newComment],
      }));

      await getStatusFixed();
    }

    await postComment(newComment);

    setMyComment('');
  };

  useEffect(() => {
    return () => {
      setMyComment('');
    };
  }, []);

  return (
    <CommentContainer>
      <CommentInput
        placeholder="Add a comment"
        value={myComment}
        onChange={handleCommentChange}
      />
      <SubmitButton onClick={handleSubmit} disabled={!myComment.trim() || (buttonText === 'ASSIGNED' && !assignedDev)}>
        {buttonText}
      </SubmitButton>
    </CommentContainer>
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

const SubmitButton = styled.button<{ disabled: boolean }>`
    height: 50px;
    width: 100px;
    margin-left: 10px;
    background-color: ${({ disabled }) => (disabled ? '#cccccc' : '#007bff')};
    color: ${({ disabled }) => (disabled ? '#666666' : 'white')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    border: none;
    border-radius: 4px;
`;

export default CommentSubmit;
