import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { projectListDummy } from '../dummy/projectListDummy';
import ProjectCardItem from '../feature/project_dashboard/components/ProjectCardItem';
import { ProjectCardItemType } from '../shared/types/project';
import { client } from '../shared/remotes/axios';
import { useRecoilValue } from 'recoil';
import { userIdState } from '../recoil/atom';
import { headerData } from '../shared/components/header';

const ProjectPage: React.FC = () => {
  const [projects, setProjects] = useState<ProjectCardItemType[]>([]);
  const userId = useRecoilValue(userIdState);

  const fetchProjectData = async () => {
    try {
      const response = await client.get(`/member/get/project/${userId}`, headerData());
      const projectData = response.data.map((project: any) => ({
        id: project.id,
        title: project.name,
        description: project.description,
      }));
      return projectData;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjectData();
      setProjects(data);
    };
    getProjects();
  }, [userId]);

  return (
    <PageContainer>
      <WelcomeText>{userId}님, 환영합니다</WelcomeText>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCardItem key={index} id={project.id} title={project.title} description={project.description} />
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