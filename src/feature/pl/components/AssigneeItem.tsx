import ElementContainer from '../../../shared/components/ElementContainer';
import React from 'react';
import styled from 'styled-components';
import DevInfoItem from '../../admin/components/addproject/DevInfoItem';


const AssigneeItem:React.FC = () => {

  return (
    <ElementContainer>
      <TitleText>Assignees</TitleText>
      <DevInfoItem />
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

export default AssigneeItem;