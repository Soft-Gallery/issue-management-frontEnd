import React from 'react';
import styled from 'styled-components';
import ElementContainer from '../../../../shared/components/ElementContainer';
import { projectListDummy } from '../../../../dummy/projectListDummy';
import { ProjectCardItemType } from '../../../../shared/types/project';

const ProjectDetailItem = () => {
  return (
    <Container>
      {projectListDummy.map((project: ProjectCardItemType, index: number) => (
        <ElementContainer key={index}>
          <DetailTitle>{project.title}</DetailTitle>
          <DetailDescription>{project.description}</DetailDescription>
        </ElementContainer>
      ))}
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
`;

const DetailTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const DetailDescription = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.color.gray2};
`;

export default ProjectDetailItem;
