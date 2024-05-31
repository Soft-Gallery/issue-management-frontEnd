import React from 'react';
import ElementContainer from '../../../shared/components/ElementContainer';
import { TitleText } from './IssueInfoItem';
import { DevUser } from '../../../shared/types/user';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { issuePageInfoState } from '../../../recoil/issue/issueAtom';

const AssignedDevItem: React.FC = () => {
  const issuePageInfo = useRecoilValue(issuePageInfoState);
  const assignee = issuePageInfo.assignedDev;

  return (
    <ElementContainer>
      <TitleText>Assigned Dev</TitleText>
        <ElementSubText>{assignee!.name} : {assignee!.email}</ElementSubText>
    </ElementContainer>
  );
};

const ElementSubText = styled.li`
  font-size: 16px;
`;

export default AssignedDevItem;
