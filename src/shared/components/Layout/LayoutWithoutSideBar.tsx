import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

interface LayOutContainerProps {
  isActive: boolean;
}

const LayoutWithoutSideBar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <LayoutContainer isActive={isActive}>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default LayoutWithoutSideBar;

const LayoutContainer = styled.main<LayOutContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: transform 1s, width 1s ease-in-out, margin-left 1s ease-in-out;

  width: ${({ isActive }) => isActive ? 'calc(100% - 240px)' : '100%'};
  height: 100vh;

  margin-left: ${({ isActive }) => isActive ? '240px' : '0px'};
  padding-left: 60px;
  padding-right: 28px;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  background-color: ${({ theme: { color } }) => color.background};
`;
