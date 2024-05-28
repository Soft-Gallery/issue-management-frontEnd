import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { projectListDummy } from '../dummy/projectListDummy';
import ProjectCardItem from '../feature/project_dashboard/components/ProjectCardItem';
import { ProjectCardItemType } from '../shared/types/project';

const ProjectPage: React.FC = () => {
  const [projects, setProjects] = useState<ProjectCardItemType[]>([]);

  useEffect(() => {
    setProjects(projectListDummy);
  }, []);

  return (
    <PageContainer>
      <WelcomeText>babo님, 환영합니다</WelcomeText>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCardItem key={index} title={project.title} description={project.description} />
        ))}
      </ProjectList>
    </PageContainer>
  );
};

const WelcomeText = styled.h1`
    margin-top: 40px;
    margin-bottom: 60px;
`

const PageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

export default ProjectPage;