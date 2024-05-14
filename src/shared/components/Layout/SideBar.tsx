import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  isActive: boolean;
}

interface SideBarProps {
  SideBarMenu: React.ReactNode;
}

const SideBar = ({ SideBarMenu }: SideBarProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Container
      isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <ServiceLogo>Service Logo</ServiceLogo>
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
