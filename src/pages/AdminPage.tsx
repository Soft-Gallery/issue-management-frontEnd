import { useNavigate } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { adminPageViewState } from '../recoil/admin/atom';
import AddProjectItem from '../feature/admin/components/addproject/AddProjectItem';
import { CURRENT_VIEW_STATES } from '../recoil/admin/constants/constants';
import ProjectDetailItem from '../feature/admin/components/projectdetail/ProjectDetailItem';


const AdminPage = () => {
  const currentView = useRecoilValue(adminPageViewState);

  return (
    <Container>
      {currentView === CURRENT_VIEW_STATES.ADD_PROJECT && <AddProjectItem />}
      {currentView === CURRENT_VIEW_STATES.VIEW_PROJECTS && <ProjectDetailItem />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 24px;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default AdminPage;
