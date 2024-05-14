import React, { useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  isActive: boolean;
}

const SideBar: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [showProjects, setShowProjects] = useState<boolean>(false);

  return (
    <Container
      isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <ServiceLogo>Service Logo</ServiceLogo>
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
    </Container>
  )
}

export default SideBar;

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

const Container = styled.div<ContainerProps>`
  width: 240px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 15px;
  transition: transform 1s;
  flex-direction: column;
  align-items: flex-start;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  background-color: ${({ theme: { color } }) => color.white};
  transform: ${({ isActive }) => isActive ? 'translateX(0%)' : 'translateX(-90%)'};
`;

const ServiceLogo = styled.text`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  align-self: center;
  justify-self: center;
  font-size: 24px;
  color: ${({ theme: { color } }) => color.black};
`;
