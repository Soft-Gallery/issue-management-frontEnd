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
  display: inline-flex;
  align-items: center;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 20px;
  text-align: center;

  height: 40px;
  font-size: 16px;
  width: auto;

  border: 1px solid ${({ theme: { color } }) => color.black200};
  
  color: ${({ theme: { color } }) => color.gray1};
  background: ${({ theme: { color } }) => color.white};

  &:hover {
    color: ${({ theme: { color } }) => color.white};
    background: ${({ theme: { color } }) => color.indigo};
  }

  &:active {
    color: ${({ theme: { color } }) => color.white};
    background: ${({ theme: { color } }) => color.indigo};
  }
`;

export default AddProjectItem;
