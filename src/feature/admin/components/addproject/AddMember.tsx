import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { projectCreateIdState } from '../../../../recoil/admin/components/addproject/atom';
import getMemberAll from '../../remote/getMemberAll';
import postMembers from '../../remote/postMember';
import getTokenFromLocalStorage from '../../../auth/function/getTokenFromLocalStorage';

const roles = ['ROLE_PL', 'ROLE_DEVELOPER', 'ROLE_TESTER'];

interface User {
  id: string;
  name: string;
  role: string;
}

interface Member {
  projectId: number;
  userId: string;
  role: string;
}

const AddMember = () => {
  const userToken = getTokenFromLocalStorage();
  const projectCreateId = useRecoilValue(projectCreateIdState);
  const [selectedRole, setSelectedRole] = useState<string>(roles[0]);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  const [plUsers, setPLUsers] = useState<User[]>([]);
  const [devUsers, setDevUsers] = useState<User[]>([]);
  const [testerUsers, setTesterUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        if(userToken) {
          const pl = await getMemberAll('ROLE_PL', userToken);
          const dev = await getMemberAll('ROLE_DEVELOPER', userToken);
          const tester = await getMemberAll('ROLE_TESTER', userToken);

          setPLUsers(pl);
          console.log(pl);
          setDevUsers(dev);
          setTesterUsers(tester);
        }
      } catch (error) {
        console.error(error);
        alert('Failed to fetch users');
      }
    };

    void fetchMembers();
  }, [userToken]);

  const handleSelectUser = (user: User) => {
    const isSelected = selectedUsers.some(u => u.id === user.id);
    let updatedUsers: User[];
    if (isSelected) {
      updatedUsers = selectedUsers.filter(u => u.id !== user.id);
    } else {
      updatedUsers = [...selectedUsers, { ...user, role: selectedRole }];
    }
    setSelectedUsers(updatedUsers);
  };

  const getUsersByRole = (role: string): User[] => {
    switch (role) {
      case 'ROLE_PL':
        return plUsers;
      case 'ROLE_DEVELOPER':
        return devUsers;
      case 'ROLE_TESTER':
        return testerUsers;
      default:
        return [];
    }
  };

  const users = getUsersByRole(selectedRole);
  const onClickConfirmButton = async () => {
    const membersToPost: Member[] = selectedUsers.map(user => ({
      projectId: projectCreateId,
      userId: user.id,
      role: user.role,
    }));

    console.log(membersToPost);

    try {
      if(userToken) {
        await postMembers(membersToPost, userToken);
        alert('프로젝트 생성 성공입니다.');
      }
    } catch (error) {
      console.error('Failed to add members:', error);
    }
  };

  return (
    <Container>
      <Header>
        <Circle>2</Circle>
        <Title>Add Member</Title>
      </Header>
      <RoleContainer>
        {roles.map((role, index) => (
          <RoleButton
            key={index}
            onClick={() => setSelectedRole(role)}
            isSelected={selectedRole === role}
          >
            {role.replace('ROLE_', '')}
          </RoleButton>
        ))}
      </RoleContainer>
      <ListContainer>
        {users.map((user) => {
          const isSelected = selectedUsers.some(u => u.id === user.id);
          return (
            <UserButton
              key={user.id}
              onClick={() => handleSelectUser(user)}
              isSelected={isSelected}
            >
              {user.id}
            </UserButton>
          );
        })}
      </ListContainer>
      <Button onClick={onClickConfirmButton}>Confirm Members</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 16px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-top: 14px;
`;

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

const RoleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 16px;
`;

const RoleButton = styled.button<{ isSelected: boolean }>`
  padding: 12px;
  border-radius: 5px;
  background-color: ${({ isSelected }) => (isSelected ? '#007bff' : '#ccc')};
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? '#0056b3' : '#bbb')};
  }
`;

const ListContainer = styled.div`
  max-height: 450px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const UserButton = styled.div<{ isSelected: boolean }>`
  padding: 12px;
  border-bottom: 1px solid #eee;
  background-color: ${({ isSelected }) => (isSelected ? '#007bff' : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? 'white' : '#333')};
  cursor: pointer;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? '#0056b3' : '#f0f0f0')};
  }
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

export default AddMember;
