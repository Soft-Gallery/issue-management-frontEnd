import { useNavigate } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { testerPageViewState } from '../recoil/tester/atom';
import { TESTER_CURRENT_VIEW_STATES } from '../recoil/tester/constants/constants';
import TesterIssueBrowse from '../feature/tester/componenets/TesterIssueBrowse';
import TesterIssueCreate from '../feature/tester/componenets/TesterIssueCreate';

const TesterPage = () => {
  const navigate = useNavigate();
  const currentView = useRecoilValue(testerPageViewState);

  return (
    <Container>
      {currentView === TESTER_CURRENT_VIEW_STATES.ISSUE_BROWSE && <TesterIssueBrowse />}
      {currentView === TESTER_CURRENT_VIEW_STATES.ISSUE_CREATE && <TesterIssueCreate />}
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

export default TesterPage;
