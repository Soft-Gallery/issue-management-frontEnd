import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IssueHeaderItem from '../../pl/components/IssueHeaderItem';
import IssueInfoItem from '../../pl/components/IssueInfoItem';
import CommentItem from '../../CommentItem';
import CommentSubmit from '../../issue/components/CommentSubmit';
import { useRecoilState, useRecoilValue } from 'recoil';
import { issuePageInfoState, recommendDevState } from '../../../recoil/issue/issueAtom';
import { client } from '../../../shared/remotes/axios';
import { headerData } from '../../../shared/components/header';
import { userPageState, userIdState } from '../../../recoil/atom';

const TesterIssueDetail: React.FC = () => {
  const [userPageInfo, setUserPageInfo] = useRecoilState(userPageState);
  const [issueInfo, setIssueInfo] = useRecoilState(issuePageInfoState);
  const [loading, setLoading] = useState<boolean>(true);
  const myId = useRecoilValue(userIdState);

  useEffect(() => {
    const fetchData = async () => {
      await getUserIssue();
    };
    fetchData();
  }, [userPageInfo.issueId]);

  const fetchIssueData = async () => {
    try {
      const response = await client.get(`/issue/searching/id/${userPageInfo.issueId}`, headerData());
      const issueData = {
        id: response.data.id,
        title: response.data.title,
        description: response.data.description,
        status: response.data.status,
        priority: response.data.priority,
        reporter: response.data.reporter,
        devs: response.data.devs || [],
        assignedDev: response.data.assignee || null,
        comments: response.data.comments,
      };
      return issueData;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getUserIssue = async () => {
    const data = await fetchIssueData();
    if (data) {
      setIssueInfo(data);
    }
    setLoading(false);
  };

  const renderCommentSubmit = () => {
    if (issueInfo.status === 'FIXED' || issueInfo.status === 'REOPENED') {
      if (issueInfo.reporter!.id.toString() === myId) {
        const buttonText = 'RESOLVED';
        return <CommentSubmit buttonText={buttonText} />;
      }
    }
    return null;
  };

  useEffect(() => {
    if (!loading) {
      console.log(issueInfo);
    }
  }, [issueInfo, loading]);

  return (
    <Container>
      {loading ? (
        <LoadingIndicator>Loading...</LoadingIndicator>
      ) : (
        <>
          <IssueHeaderItem />
          <IssueInfoItem />
          {renderCommentSubmit()}
          <CommentItem />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const LoadingIndicator = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-top: 50px;
`;

export default TesterIssueDetail;
