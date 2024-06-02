import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { plIssuePageViewState } from '../../../recoil/issue/issueAtom';
import { PL_ISSUE_CURRENT_VIEW_STATES } from '../../../recoil/issue/constants/constants';


const PlIssueSideBarMenu = (): JSX.Element => {
  const setCurrentView = useSetRecoilState(plIssuePageViewState);

  const handleButtonClick = (view: string) => {
    setCurrentView(view);
  };

  return (
    <div>
      <StyledButton onClick={() => handleButtonClick(PL_ISSUE_CURRENT_VIEW_STATES.VIEW_ALL_ISSUE)}>
        View All Issues
      </StyledButton>
      <StyledButton onClick={() => handleButtonClick(PL_ISSUE_CURRENT_VIEW_STATES.VIEW_NEW_ISSUE)}>
        New Issues
      </StyledButton>
    </div>
  );
}

export default PlIssueSideBarMenu;

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
