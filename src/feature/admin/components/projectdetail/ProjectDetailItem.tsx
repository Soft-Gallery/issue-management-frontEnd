import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ElementContainer from '../../../../shared/components/ElementContainer';
import { client } from '../../../../shared/remotes/axios';
import { headerData } from '../../../../shared/components/header';

interface ProjectItem {
  title: string;
  description: string;
}

const ProjectDetailItem = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [projectItems, setProjectItems] = useState<ProjectItem[]>([]);

  const fetchProjectData = async () => {
    try {
      const response = await client.get(`/project/adminid`, headerData());
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getProjectData = async () => {
    const projects = await fetchProjectData();
    if (projects !== null) {
      const filteredProjects = projects.map((project: any) => ({
        title: project.name,
        description: project.description
      }));
      setProjectItems(filteredProjects);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProjectData();
    console.log(projectItems);
  }, []);

  return (
    <Container>
      {loading ? (
        <LoadingIndicator>Loading...</LoadingIndicator>
      ) : (
        projectItems.map((project: ProjectItem, index: number) => (
          <ElementContainer key={index}>
            <DetailTitle>{project.title}</DetailTitle>
            <DetailDescription>{project.description}</DetailDescription>
          </ElementContainer>
        ))
      )}
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

const LoadingIndicator = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-top: 50px;
`;

export default ProjectDetailItem;
