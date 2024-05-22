import React from 'react';
import styled from 'styled-components';
import ProjectInfoItem from './ProjectInfoItem';
import PLInfoItem from './PLInfoItem';
import DevInfoItem from './DevInfoItem';
import TesterInfoItem from './TesterInfoItem';

const AddProjectItem = () => {
  return (
    <Container>
      <ProjectInfoItem />
      <PLInfoItem />
      <DevInfoItem />
      <TesterInfoItem />
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

const ElementTitleText = styled.text`
  display: flex;
  text-align: left;
  margin-bottom: 12px;
  font-size: 18px;
  color: ${({ theme: { color } }) => color.black};
`;

const ElementSubTitleText = styled.text`
  display: flex;
  text-align: left;
  margin-top: 12px;
  font-size: 14px;
  color: ${({ theme: { color } }) => color.gray1};
`;

const TitleTextInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid ${({ theme: { color } }) => color.gray1};
  border-radius: 4px;
  font-size: 14px;
`;

const DescriptionTextInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid ${({ theme: { color } }) => color.gray1};
  border-radius: 4px;
  font-size: 14px;
  height: 100px;
  vertical-align: top;
`;


export default AddProjectItem;
