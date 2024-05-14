import { useNavigate } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div>안녕</div>
      <div>안녕</div>
      <div>안녕</div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 12px;
  border-radius: 30px;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme: { color } }) => color.black200};
  
  background-color: ${({ theme: { color } }) => color.white};
`

export default AdminPage;
