import React from 'react';
import styled from 'styled-components';
import projectPandaImg from '../../../assets/imgs/project_panda.png';
import { ProjectCardItemType } from '../../../shared/types/project';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userRoleState } from '../../../recoil/atom';
import { useNavigate } from 'react-router-dom';

const ProjectCardItem: React.FC<ProjectCardItemType> = ({ title, description }) => {

  const userRole = useRecoilValue(userRoleState);
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate(`/${userRole}`);
  }
  return (
    <Container onClick={onClickButton}>
      <ProjectImg src={projectPandaImg} alt="프로젝트 판다 캐릭터" />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
    </Container>
  );
};

const Container = styled.button`
    width: 300px;
    height: 450px;
    background-color: bisque;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
    border: transparent;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const ProjectImg = styled.img`
    width: 285px;
    height: 285px;
    border-radius: 5px 5px 0 0;
`;

const ProjectTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

const ProjectDescription = styled.p`
    font-size: 16px;
    margin: 0 16px;
    text-align: center;
`;

export default ProjectCardItem;
