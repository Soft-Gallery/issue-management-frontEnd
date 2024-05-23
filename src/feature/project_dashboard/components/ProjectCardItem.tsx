import { projectListDummy } from '../../../dummy/projectListDummy';
import React from 'react';
import styled from 'styled-components';

const ProjectCardItem:React.FC = () => {
  return (
      <Container>
        <ProjectImg />
        <ProjectTitle />
        <ProjectDescription />
      </Container>
  );
};

const Container = styled.div`
    width: 400px;
    height: 600px;
`

const ProjectImg = styled.img`

`

const ProjectTitle = styled.p`

`

const ProjectDescription = styled.p`

`

export default ProjectCardItem;
