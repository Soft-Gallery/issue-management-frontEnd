import React from 'react';
import styled from 'styled-components';
import { CURRENT_VIEW_STATES } from '../recoil/admin/constants/constants';
import IssueHeaderItem from '../feature/pl/components/IssueHeaderItem';
import IssueInfoItem from '../feature/pl/components/IssueInfoItem';
import AssigneeItem from '../feature/pl/components/AssigneeItem';
import CommentItem from '../feature/CommentItem';

const PLIssuePage = () => {
  // const currentView = useRecoilValue(plPageViewState);

  return (
    <Container>
      <IssueHeaderItem />
      <IssueInfoItem />
      <AssigneeItem />
      <CommentItem />
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

export default PLIssuePage;