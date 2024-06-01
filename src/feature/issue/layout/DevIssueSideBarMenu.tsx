import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { devIssuePageViewState } from '../../../recoil/issue/issueAtom';
import { DEV_ISSUE_CURRENT_VIEW_STATES } from '../../../recoil/issue/constants/constants';


const DevIssueSideBarMenu = (): JSX.Element => {
  const setCurrentView = useSetRecoilState(devIssuePageViewState);

  const handleButtonClick = (view: string) => {
    setCurrentView(view);
  };

  return (
    <div>
      <StyledButton onClick={() => handleButtonClick(DEV_ISSUE_CURRENT_VIEW_STATES.VIEW_ALL_ISSUE)}>
        View All Issues
      </StyledButton>
      <StyledButton onClick={() => handleButtonClick(DEV_ISSUE_CURRENT_VIEW_STATES.VIEW_ASSIGNED_ISSUE)}>
        View Assigned Issues
      </StyledButton>
    </div>
  );
}

export default DevIssueSideBarMenu;

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
  &:hover {
    color: ${({ theme: { color } }) => color.white};
    background: ${({ theme: { color } }) => color.indigo};
  }
  &:active {
    color: ${({ theme: { color } }) => color.white};
    background: ${({ theme: { color } }) => color.indigo};
  }
`;
