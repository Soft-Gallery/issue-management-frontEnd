import React from 'react';
import styled from 'styled-components';
import { devListDummy } from '../../../dummy/devListDummy';
import { UserRole, UserWithRole } from '../../../shared/types/user';
import UserInfoItemDropdown from '../../issue/components/UserInfoItemDropdown';
import ElementContainer from '../../../shared/components/ElementContainer';

const AssigneeSelectItem: React.FC = () => {

  return (
    <ElementContainer>
      <TitleText>Assignees</TitleText>
      <UserInfoItemDropdown
        title="Dev 정보"
        itemList={devListDummy as UserWithRole<UserRole>[]}
        itemType="devs"
      />
    </ElementContainer>
  );
};

export const TitleText = styled.div`
    display: flex;
    text-align: left;
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.black};
`;


export default AssigneeSelectItem;
