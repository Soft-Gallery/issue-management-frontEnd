import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  isActive: boolean;
}

interface SideBarProps {
  isActive: boolean;
  onMouseSideBarEnter: () => void;
  onMouseSideBarLeave: () => void;
  SideBarMenu: React.ReactNode;
}

const SideBar = ({ SideBarMenu, isActive, onMouseSideBarEnter, onMouseSideBarLeave }: SideBarProps) => {

  return (
    <Container
      isActive={isActive}
      onMouseEnter={onMouseSideBarEnter}
      onMouseLeave={onMouseSideBarLeave}
    >
      <ServiceLogo>프로젝트 판다</ServiceLogo>
      {SideBarMenu}
    </Container>
  )
}

export default SideBar;

const Container = styled.div<ContainerProps>`
  width: 240px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 15px;
  transition: transform 1s, width 1s ease-in-out;
  flex-direction: column;
  align-items: flex-start;

  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  border: 1px solid ${({ theme: { color } }) => color.black200};

  border: 1px solid ${({ theme: { color } }) => color.black200};

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
