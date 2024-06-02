import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useRecoilState } from 'recoil';
import { headerData } from '../../../shared/components/header';
import { Comments, IssueStatus } from '../../../shared/types/issue';
import { UserWithRole, UserRole, DevUser } from '../../../shared/types/user';
import { userIdState, userPageState, userRoleState } from '../../../recoil/atom';
import { assignedDevInfoState, issuePageInfoState } from '../../../recoil/issue/issueAtom';
import { client } from '../../../shared/remotes/axios';
import { testerIssueCreateState, testerPageViewState } from '../../../recoil/tester/atom';
import { TESTER_CURRENT_VIEW_STATES } from '../../../recoil/tester/constants/constants';

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
  const [testerViewState, setTesterViewState ] = useRecoilState(testerPageViewState);
  const testerIssueInfo = useRecoilValue(testerIssueCreateState);

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

  const getStatusResolved= async () => {
    try {
      await client.get(`/issue/resolving/${userPageInfo.issueId}`, headerData());
    } catch (error) {
      console.error('getStatusResolved 에러!!!!!!', error);
    }
  };

  const postIssue= async (newComment : {text: string}) => {
    try {
      const data = {
        issue: {
          ...testerIssueInfo,
          startDate: new Date().toISOString(),
        },
        comment: newComment,
      };

      await client.post(`/issue/new`, data ,headerData());

    } catch (error) {
      console.error('postIssue 에러!!!!!!', error);
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMyComment(e.target.value);
  };

  const handleSubmit = async () => {

    if (userRole === 'pl') {
      const newComment = {
        authorId: myId,
        text: myComment,
        issueId: userPageInfo.issueId,
        createdAt: new Date().toISOString(),
      };

      if (buttonText === 'ASSIGNED') {
        if (myComment.trim() === '' || !assignedDev) return;

        setIssueInfo({
          ...issueInfo,
          status: 'ASSIGNED',
          comments: [...issueInfo.comments, newComment],
          assignedDev: assignedDev,
        });

        await postDev(assignedDev);
        await postComment(newComment);

      } else if (buttonText === 'CLOSED') {
        if (myComment.trim() === '') return;

        setIssueInfo((prev) => ({
          ...prev,
          status: 'CLOSED',
          comments: [...prev.comments, newComment],
        }));

        await getStatusClosed();
        await postComment(newComment);
      }
    }else if(userRole === 'dev'){
      if (myComment.trim() === '') return;

      const newComment = {
        authorId: myId,
        text: myComment,
        issueId: userPageInfo.issueId,
        createdAt: new Date().toISOString(),
      };
      setIssueInfo((prev) => ({
        ...prev,
        status: 'FIXED',
        comments: [...prev.comments, newComment],
      }));

      await getStatusFixed();
      await postComment(newComment);

    }else if(userRole === 'tester'){
      if(testerViewState === TESTER_CURRENT_VIEW_STATES.ISSUE_CREATE){
        if (myComment.trim() === '') return;

        const newComment = {
          text: myComment,
        };

        await postIssue(newComment);
        alert('이슈를 생성했습니다!');
        setTesterViewState(TESTER_CURRENT_VIEW_STATES.ISSUE_BROWSE);

      }else{
        if (myComment.trim() === '') return;

        const newComment = {
          authorId: myId,
          text: myComment,
          issueId: userPageInfo.issueId,
          createdAt: new Date().toISOString(),
        };

        setIssueInfo((prev) => ({
          ...prev,
          status: 'RESOLVED',
          comments: [...prev.comments, newComment],
        }));

        await getStatusResolved();
        await postComment(newComment);
      }

    }

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
