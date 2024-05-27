import ElementContainer from '../../../shared/components/ElementContainer';
import React from 'react';
import styled from 'styled-components';
import { devListDummy } from '../../../dummy/devListDummy';
import { DevUser } from '../../../shared/types/user';
import UserInfoItemDropdown from '../../issue/components/UserInfoItemDropdown';


const AssigneeItem:React.FC = () => {

  return (
    <ElementContainer>
      <TitleText>Assignees</TitleText>
      <UserInfoItemDropdown
        title="Dev 정보"
        itemList={devListDummy as DevUser[]}
        itemType="assignee"
      />
    </ElementContainer>
  );
}

export const TitleText = styled.div`
  display: flex;
  text-align: left;
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
`;

export default AssigneeItem;