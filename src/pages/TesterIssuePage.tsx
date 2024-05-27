import { useNavigate } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { testerPageViewState } from '../recoil/tester/atom';
import { TESTER_CURRENT_VIEW_STATES } from '../recoil/tester/constants/constants';

const TesterIssuePage = () => {
  const navigate = useNavigate();
  const currentView = useRecoilValue(testerPageViewState);

  return (
    <Container>
      {currentView === TESTER_CURRENT_VIEW_STATES.ISSUE_BROWSE && <div>브라우징</div>}
      {currentView === TESTER_CURRENT_VIEW_STATES.ISSUE_CREATE && <div>생성</div>}
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
`

export default TesterIssuePage;
