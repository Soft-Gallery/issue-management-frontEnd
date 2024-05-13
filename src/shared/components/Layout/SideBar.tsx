import React, { useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  isActive: boolean;
}

const SideBar: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Container
      isActive={isActive}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <p>메뉴 1</p>
      <p>메뉴 2</p>
      <p>메뉴 3</p>
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
  padding: 0 30px;
  transition: transform 1s;
  flex-direction: column;
  align-items: flex-start;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  
  background-color: ${({ theme: { color } }) => color.white};
  transform: ${({ isActive }) => isActive ? 'translateX(0%)' : 'translateX(-90%)'};
`;
