import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { issuePageViewState } from '../../../recoil/issue/issueAtom';
import { ISSUE_CURRENT_VIEW_STATES } from '../../../recoil/issue/constants/constants';


const IssueSideBarMenu = (): JSX.Element => {
  const setCurrentView = useSetRecoilState(issuePageViewState);

  const handleButtonClick = (view: string) => {
    setCurrentView(view);
  };

  return (
    <div>
      <StyledButton onClick={() => handleButtonClick(ISSUE_CURRENT_VIEW_STATES.VIEW_ISSUE_LIST)}>
        View Issues
      </StyledButton>
    </div>
  );
}

export default IssueSideBarMenu;

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
