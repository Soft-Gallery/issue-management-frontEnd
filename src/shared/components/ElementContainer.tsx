import React from 'react';
import styled from 'styled-components';

interface ElementContainerProps {
  children: React.ReactNode;
}

const ElementContainer = ({ children }: ElementContainerProps) => {

  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  border-radius: 30px;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme: { color } }) => color.black200};
  
  background-color: ${({ theme: { color } }) => color.white};
`

export default ElementContainer;
