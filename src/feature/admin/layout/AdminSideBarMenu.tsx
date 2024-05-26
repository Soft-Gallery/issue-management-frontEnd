import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { adminPageViewState } from '../../../recoil/admin/atom';
import { CURRENT_VIEW_STATES } from '../../../recoil/admin/constants/constants';


const AdminSideBarMenu = (): JSX.Element => {
  const setCurrentView = useSetRecoilState(adminPageViewState);

  const handleButtonClick = (view: string) => {
    setCurrentView(view);
  };

  return (
    <div>
      <StyledButton onClick={() => handleButtonClick(CURRENT_VIEW_STATES.ADD_PROJECT)}>
        Add Project
      </StyledButton>
      <StyledButton onClick={() => handleButtonClick(CURRENT_VIEW_STATES.VIEW_PROJECTS)}>
        View Projects
      </StyledButton>
    </div>
  );
}

export default AdminSideBarMenu;

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
