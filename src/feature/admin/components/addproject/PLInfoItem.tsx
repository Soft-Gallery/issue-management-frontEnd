import React from 'react';
import styled from 'styled-components';
import ElementContainer from '../../../../shared/components/ElementContainer';

const PLInfoItem = () => {
  return (
    <ElementContainer>
      <ElementTitleText>프로젝트 정보</ElementTitleText>
      <ElementSubTitleText>프로젝트 제목</ElementSubTitleText>
      <TitleTextInput placeholder="프로젝트 제목을 입력하세요" />
      <ElementSubTitleText>프로젝트 설명</ElementSubTitleText>
      <DescriptionTextInput placeholder="프로젝트 설명을 입력하세요" />
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

export default PLInfoItem;
