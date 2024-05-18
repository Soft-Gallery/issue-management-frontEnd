import { useNavigate } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import ElementContainer from '../shared/components/ElementContainer';

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ElementContainer>
        <div>어쩔저쩔</div>
      </ElementContainer>
      <ElementContainer>
        <div>어쩔저쩔</div>
      </ElementContainer>
      <ElementContainer>
        <div>어쩔저쩔</div>
      </ElementContainer>
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
