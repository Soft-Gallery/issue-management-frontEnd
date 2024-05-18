import ElementContainer from '../../../shared/components/ElementContainer';
import React from 'react';
import styled from 'styled-components';

const ProjectDetailItem = () => {
  return (
    <Container>
      <ElementContainer>
        <div>디테일이다</div>
      </ElementContainer>
      <ElementContainer>
        <div>디테일이야</div>
      </ElementContainer>
      <ElementContainer>
        <div>어쩔저쩔</div>
      </ElementContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  border-radius: 30px;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default ProjectDetailItem;
