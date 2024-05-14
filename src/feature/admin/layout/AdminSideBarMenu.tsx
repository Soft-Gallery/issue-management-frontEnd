import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

const AdminSideBarMenu = (): JSX.Element => {
  const [showProjects, setShowProjects] = useState<boolean>(false);

  return(
    <div>
      <StyledButton>Add Project</StyledButton>
      <StyledButton
        onClick={() => setShowProjects(!showProjects)}
      >
        Projects
      </StyledButton>
      {showProjects && (
        <div>
          <StyledButton>
            Project 1
          </StyledButton>
          <StyledButton>
            Project 2
          </StyledButton>
          <StyledButton>
            Project 3
          </StyledButton>
        </div>
      )}
    </div>
  )
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
  &:hover{
    color: ${({ theme: { color } }) => color.white};
    background: ${({ theme: { color } }) => color.indigo};
  }
  &:active{
    color: ${({ theme: { color } }) => color.white};
    background: ${({ theme: { color } }) => color.indigo};
  }
`