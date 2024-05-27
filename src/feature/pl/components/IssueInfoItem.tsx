import ElementContainer from '../../../shared/components/ElementContainer';
import React from 'react';
import styled from 'styled-components';


const IssueInfoItem:React.FC = () => {

  return (
    <ElementContainer>
      <TitleText>Issue Information</TitleText>
      <DetailDescription>reporter : tester 이름</DetailDescription>
      <IssueDescription>이슈 상세 내용 description 보여죠라</IssueDescription>
    </ElementContainer>
  );
}

export const TitleText = styled.div`
  display: flex;
  text-align: left;
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
`;

const IssueDescription = styled.p`
    font-size: 16px;
`

const DetailDescription = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.color.gray2};
`;
export default IssueInfoItem;