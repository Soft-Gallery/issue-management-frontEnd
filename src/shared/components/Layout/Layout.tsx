import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from './SideBar';

const Layout = () => {
  return (
    <>
      <SideBar />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default Layout;

const LayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme: { color } }) => color.background};
`;
