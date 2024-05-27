import React from 'react';
import styled from 'styled-components';
import ElementContainer from '../../../shared/components/ElementContainer';

const TesterIssueBrowse = () => {
  return(
    <Container>
      <ElementContainer>
        <div>안녕</div>
      </ElementContainer>
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

export default TesterIssueBrowse;
