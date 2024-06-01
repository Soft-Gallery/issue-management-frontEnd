import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IssueHeaderItem from '../feature/pl/components/IssueHeaderItem';
import IssueInfoItem from '../feature/pl/components/IssueInfoItem';
import AssigneeSelectItem from '../feature/pl/components/AssigneeSelectItem';
import CommentItem from '../feature/CommentItem';
import { useRecoilState } from 'recoil';
import { issuePageInfoState } from '../recoil/issue/issueAtom';
import IssueStatusChangeButton from '../feature/pl/components/IssueStatusChangeButton';
import { client } from '../shared/remotes/axios';
import { headerData } from '../shared/components/header';
import { userPageState } from '../recoil/atom';

const PLPage: React.FC = () => {
  const [userPageInfo, setUserPageInfo] = useRecoilState(userPageState);
  const [issueInfo, setIssueInfo] = useRecoilState(issuePageInfoState);
  const [loading, setLoading] = useState<boolean>(true);

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
      console.log(issueData);
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

  useEffect(() => {
    getUserIssue();
  }, []);

  const renderContent = () => {
    switch (issueInfo.status) {
      case 'NEW':
        return <AssigneeSelectItem />;
      case 'ASSIGNED':
        return <IssueStatusChangeButton status="RESOLVED" />;
      default:
        return null;
    }
  };

  return (
    <Container>
      {loading ? (
        <LoadingIndicator>Loading...</LoadingIndicator>
      ) : (
        <>
          <IssueHeaderItem />
          <IssueInfoItem />
          {renderContent()}
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
