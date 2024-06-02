import React, { useState } from 'react';
import styled from 'styled-components';;
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import getTokenFromLocalStorage from '../../../auth/function/getTokenFromLocalStorage';
import { projectCreateIdState, projectCreateState } from '../../../../recoil/admin/components/addproject/atom';
import { userIdState } from '../../../../recoil/atom';
import postProject from '../../remote/postProject';
import AddMember from './AddMember';


const roles = ['ROLE_PL', 'ROLE_DEVELOPER', 'ROLE_TESTER'];

const AddProjectItem = () => {
  const userToken = getTokenFromLocalStorage();
  const [step, setStep] = useRecoilState(projectCreateState);
  const setProjectCreateId = useSetRecoilState(projectCreateIdState);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const userId = useRecoilValue(userIdState);

  const handleCreateProject = async () => {
    setName('');
    setDescription('');

    if(userToken) {
      const id = await postProject(name, description, "InProgress", userId, userToken);
      setProjectCreateId(id);
      alert(`Success, project number ${id}`);
    }

    setStep(2);
  };

  return (
    <Container>
      {step === 1 && (
        <>
          <Header>
            <Circle>1</Circle>
            <Title>Create Project</Title>
          </Header>
          <Input
            type="text"
            placeholder="Project Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextArea
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button onClick={handleCreateProject}>Create Project</Button>
        </>
      )}
      {step === 2 && <AddMember />}
    </Container>
  );
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

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Circle = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  font-weight: bold;
`;

const Title = styled.h2`
  margin-left: 10px;
  font-size: 24px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  height: 100px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default AddProjectItem;
