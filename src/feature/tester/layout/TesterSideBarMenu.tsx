import React from 'react';
import styled from 'styled-components';

import { useSetRecoilState } from 'recoil';
import { testerPageViewState } from '../../../recoil/tester/atom';
import { TESTER_CURRENT_VIEW_STATES } from '../../../recoil/tester/constants/constants';

const TesterSideBarMenu = (): JSX.Element => {
  const setCurrentView = useSetRecoilState(testerPageViewState);

  const handleButtonClick = (view: string) => {
    setCurrentView(view);
  };

  return(
    <div>
      <StyledButton onClick={() => handleButtonClick(TESTER_CURRENT_VIEW_STATES.ISSUE_CREATE)}>Create Issue</StyledButton>
      <StyledButton onClick={() => handleButtonClick(TESTER_CURRENT_VIEW_STATES.ISSUE_BROWSE)}>
        Browse Issues
      </StyledButton>
    </div>
  )
}

export default TesterSideBarMenu;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  padding: 16px;
  text-align: left;

  margin-top: 8px;
  height: 40px;
  font-size: 16px;
  width: 100%;

  color: ${({ theme: { color } }) => color.gray1};
  background: ${({ theme: { color } }) => color.white};
  &:hover{
    color: ${({ theme: { color } }) => color.white};
    background: ${({ theme: { color } }) => color.indigo};
  }
  &:active{
    color: ${({ theme: { color } }) => color.white};
    background: ${({ theme: { color } }) => color.indigo};
  }
`
