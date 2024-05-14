import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from './SideBar';
import AdminSideBarMenu from '../../../feature/admin/layout/AdminSideBarMenu';
import { useState } from 'react';

interface LayOutContainerProps {
  isActive: boolean;
}

const Layout = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onMouseSideBarEnter = () => {
    setIsActive(true);
  }

  const onMouseSideBarLeave = () => {
    setIsActive(false);
  }

  return (
    <>
      <SideBar isActive={isActive} SideBarMenu={<AdminSideBarMenu />} onMouseSideBarEnter={onMouseSideBarEnter} onMouseSideBarLeave={onMouseSideBarLeave}/>
      <LayoutContainer isActive={isActive}>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default Layout;

const LayoutContainer = styled.main<LayOutContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: margin-left 1s ease-in-out, width 1s ease-in-out;

  width: ${({ isActive }) => isActive ? 'calc(100% - 240px)' : '100%'};
  height: 100vh;

  margin-left: ${({ isActive }) => isActive ? '240px' : '0px'};  // 사이드바 활성화 시 오른쪽으로 밀기

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  background-color: ${({ theme: { color } }) => color.background};
`;
