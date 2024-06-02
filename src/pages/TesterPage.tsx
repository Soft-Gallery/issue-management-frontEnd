import { useNavigate } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import TesterIssueBrowse from '../feature/tester/componenets/TesterIssueBrowse';
import TesterIssueCreate from '../feature/tester/componenets/TesterIssueCreate';
import { TESTER_CURRENT_VIEW_STATES } from '../recoil/tester/constants/constants';
import { testerPageViewState } from '../recoil/tester/atom';
import { useRecoilValue } from 'recoil';
import TesterFixedIssueBrowse from '../feature/tester/componenets/TesterFixedIssueBrowse';

const TesterPage = () => {
  const currentView = useRecoilValue(testerPageViewState);

  return (
    <Container>
      {currentView === TESTER_CURRENT_VIEW_STATES.ISSUE_CREATE && <TesterIssueCreate />}
      {currentView === TESTER_CURRENT_VIEW_STATES.ISSUE_BROWSE && <TesterIssueBrowse />}
      {currentView === TESTER_CURRENT_VIEW_STATES.FIXED_ISSUE_BROWSE && <TesterFixedIssueBrowse />}
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
