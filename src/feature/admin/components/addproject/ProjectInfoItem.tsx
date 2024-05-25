import React from 'react';
import styled from 'styled-components';
import ElementContainer from '../../../../shared/components/ElementContainer';
import { adminPageAddProjectState } from '../../../../recoil/admin/atom';
import { useRecoilState } from 'recoil';

const ProjectInfoItem = () => {
  const [projectState, setProjectState] = useRecoilState(adminPageAddProjectState);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectState((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProjectState((prev) => ({
      ...prev,
      description: e.target.value,
    }));
  };

  return (
    <ElementContainer>
      <ElementTitleText>Project Information</ElementTitleText>
      <ElementSubTitleText>Title</ElementSubTitleText>
      <TitleTextInput
        placeholder="title"
        value={projectState.title}
        onChange={handleTitleChange}
      />
      <ElementSubTitleText>Description</ElementSubTitleText>
      <DescriptionTextInput
        placeholder="description"
        value={projectState.description}
        onChange={handleDescriptionChange}
      />
    </ElementContainer>
  )
}

const ElementTitleText = styled.text`
  display: flex;
  text-align: left;
  margin-bottom: 12px;
  font-size: 18px;
  color: ${({ theme: { color } }) => color.black};
`;

export const ElementSubTitleText = styled.text`
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

const DescriptionTextInput = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid ${({ theme: { color } }) => color.gray1};
  border-radius: 4px;
  font-size: 14px;
  height: 100px;
  vertical-align: top;
  resize: none;
`;
export default ProjectInfoItem;
