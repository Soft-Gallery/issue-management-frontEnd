import { useNavigate } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { CURRENT_VIEW_STATES } from '../recoil/admin/constants/constants';
import AddProjectItem from '../feature/admin/components/addproject/AddProjectItem';
import ProjectDetailItem from '../feature/admin/components/projectdetail/ProjectDetailItem';
import { CURRENT_ACTION_STATES } from '../recoil/issue/constants/constants';
import IssueHeaderItem from '../feature/pl/components/IssueHeaderItem';
import IssueInfoItem from '../feature/pl/components/IssueInfoItem';

const PLIssuePage = () => {
  // const currentView = useRecoilValue(plPageViewState);

  return (
    <Container>
      <IssueHeaderItem />
      <IssueInfoItem />
      {/*<AssigneeItem />*/}
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
