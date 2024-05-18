import { useNavigate } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import ElementContainer from '../shared/components/ElementContainer';
import { useRecoilValue } from 'recoil';
import { adminPageViewState } from '../recoil/admin/atom';
import AddProjectItem from '../feature/admin/components/AddProjectItem';
import ProjectDetailItem from '../feature/admin/components/ProjectDetailItem';
import { CURRENT_VIEW_STATES } from '../recoil/admin/constants/constants';

const AdminPage = () => {
  const navigate = useNavigate();
  const currentView = useRecoilValue(adminPageViewState);

  return (
    <Container>
      {currentView === CURRENT_VIEW_STATES.ADD_PROJECT && <AddProjectItem />}
      {currentView === CURRENT_VIEW_STATES.VIEW_PROJECTS && <ProjectDetailItem />}
      {currentView === CURRENT_VIEW_STATES.NONE && null}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default AdminPage;
