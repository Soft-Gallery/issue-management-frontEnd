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
  const [isAssigned, setIsAssigned] = useState<boolean>(false);
  const [assignedDev, setAssignedDev] = useState<AssignedDev>({name: '', email: ''});

  useEffect(()=>{
    if(issueInfo.assignedDev.name !== ''){
      setIsAssigned(true);
      setAssignedDev({
        name: issueInfo.assignedDev.name,
        email: issueInfo.assignedDev.email,
        }
      )
    }
  }, [issueInfo])

  return (
    <ElementContainer>
      <TitleText>Issue Information</TitleText>
      <IssueDescription>이슈 상세 내용 description 보여죠라</IssueDescription>
      <hr/>
      <DetailDescription>Reported by tester01 : tester01@cau.ac.kr </DetailDescription>
      {isAssigned? (
        <DetailDescription>Assigned to {assignedDev.name} : {assignedDev.email}</DetailDescription>
      ): (
        <></>
      )}
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