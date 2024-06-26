import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IssueHeaderItem from '../feature/pl/components/IssueHeaderItem';
import IssueInfoItem from '../feature/pl/components/IssueInfoItem';
import AssigneeSelectItem from '../feature/pl/components/AssigneeSelectItem';
import CommentItem from '../feature/CommentItem';
import CommentSubmit from '../feature/issue/components/CommentSubmit';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { issuePageInfoState, recommendDevState } from '../recoil/issue/issueAtom';
import { client } from '../shared/remotes/axios';
import { headerData } from '../shared/components/header';
import { userPageState } from '../recoil/atom';

const PLPage: React.FC = () => {
  const [userPageInfo, setUserPageInfo] = useRecoilState(userPageState);
  const [issueInfo, setIssueInfo] = useRecoilState(issuePageInfoState);
  const [loading, setLoading] = useState<boolean>(true);
  const resetRecommendDevInfo = useResetRecoilState(recommendDevState);
  const [recommendDevInfo, setRecommendDevInfo] = useRecoilState(recommendDevState);

  const fetchRecommendDev = async () => {
    try {
      console.log('추천 패치갑니다잉');
      const response = await client.get(`/gpt/recommendation/${userPageInfo.issueId}`, headerData());
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching recommended developer:', error);
      return null;
    }
  };

  const getRecommendDev = async () => {
    const data = await fetchRecommendDev();
    if (data) {
      console.log('data 받아았습니다.');
      console.log(data);
      setRecommendDevInfo({
        name: data.answer,
        reason: data.reason,
        isSelected: false,
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getUserIssue();
      await getRecommendDev();
    };
    fetchData();

    return () => {
      resetRecommendDevInfo();
    };
  }, [userPageInfo.issueId, resetRecommendDevInfo]);

  useEffect(() => {
    console.log('Updated recommendDevInfo:', recommendDevInfo);
  }, [recommendDevInfo]);

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
    if(issueInfo.status === 'NEW'){
      const buttonText = 'ASSIGNED';
      return <CommentSubmit buttonText={buttonText} />
    } else if(issueInfo.status === 'RESOLVED'){
      const buttonText = 'CLOSED';
      return <CommentSubmit buttonText={buttonText} />
    } else if(issueInfo.status === 'CLOSED'){
      const buttonText = 'REOPEN';
      return <CommentSubmit buttonText={buttonText} />
    }
    return null;
  }

  return (
    <Container>
      {loading ? (
        <LoadingIndicator>Loading...</LoadingIndicator>
      ) : (
        <>
          <IssueHeaderItem />
          <IssueInfoItem />
          {issueInfo.status === 'NEW' && <AssigneeSelectItem />}
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

export default PLPage;