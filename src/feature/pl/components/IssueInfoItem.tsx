import ElementContainer from '../../../shared/components/ElementContainer';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { issuePageInfoState } from '../../../recoil/issue/issueAtom';

interface AssignedDev {
  name: string;
  email: string;
}

const IssueInfoItem:React.FC = () => {
  const issueInfo = useRecoilValue(issuePageInfoState);

  return (
    <ElementContainer>
      <TitleText>Issue Information</TitleText>
      <IssueDescription>{issueInfo.description}</IssueDescription>
      <hr/>
      <ul>
        <DetailDescription>Reported by {issueInfo.reporter.name} ({issueInfo.reporter.email}) </DetailDescription>
        {issueInfo.assignedDev && (
          <DetailDescription>Assigned to {issueInfo.assignedDev.name} ({issueInfo.assignedDev.email})</DetailDescription>
        )}
      </ul>
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
    font-size: 18px;
`

const DetailDescription = styled.li`
    font-size: 15px;
    color: ${({ theme }) => theme.color.gray2};
    margin-bottom: 6px;
`;

export default IssueInfoItem;
