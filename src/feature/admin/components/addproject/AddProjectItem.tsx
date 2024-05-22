import React from 'react';
import styled from 'styled-components';
import ProjectInfoItem from './ProjectInfoItem';
import PLInfoItem from './PLInfoItem';
import DevInfoItem from './DevInfoItem';
import TesterInfoItem from './TesterInfoItem';
import { useRecoilValue } from 'recoil';
import { adminPageAddProjectState } from '../../../../recoil/admin/atom';

const AddProjectItem = () => {
  const projectState = useRecoilValue(adminPageAddProjectState);

  const handlePrintState = () => {
    console.log(projectState);
    //이후에, api 연동하면 될 것 같아요.
  };

  return (
    <Container>
      <ProjectInfoItem />
      <PLInfoItem />
      <DevInfoItem />
      <TesterInfoItem />
      <Button onClick={handlePrintState}>Print Project State</Button>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  border-radius: 30px;
  
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default AddProjectItem;
