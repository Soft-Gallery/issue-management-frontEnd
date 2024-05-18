import { useNavigate } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import ElementContainer from '../shared/components/ElementContainer';
import { useRecoilValue } from 'recoil';
import { adminPageViewState } from '../recoil/admin/atom';
import AddProjectItem from '../feature/admin/components/AddProjectItem';

const AdminPage = () => {
  const navigate = useNavigate();
  const currentView = useRecoilValue(adminPageViewState);

  return (
    <Container>
      {currentView === 'addProject' && <AddProjectItem />}
      {currentView === 'none' && null}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  border-radius: 30px;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default AdminPage;
