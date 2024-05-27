import React from 'react';
import ElementContainer from '../../../shared/components/ElementContainer';
import { TitleText} from './IssueInfoItem';
import { DevUser } from '../../../shared/types/user';
import styled from 'styled-components';

interface Assignees {
  [id: number]: DevUser;
}

const AssignedDevItem: React.FC<{ assignees: Assignees }> = ({ assignees }) => (
  <ElementContainer>
    <TitleText>Assigned Devs</TitleText>
    <ul>
      {Object.values(assignees).map((assignee) => (
        <li key={assignee.id}>{assignee.name}</li>
      ))}
    </ul>
  </ElementContainer>
);

const ElementSubText = styled.li`
    font-size: 16px;
`

export default AssignedDevItem;
