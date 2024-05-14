import { useNavigate } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';

const AdminPage = () => {
  const navigate = useNavigate();

  return <Container>안녕</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 8px;
  border-radius: 30px;
  background-color: ${({ theme: { color } }) => color.black200};
`

export default AdminPage;
