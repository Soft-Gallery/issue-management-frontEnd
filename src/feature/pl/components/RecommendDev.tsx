import React from 'react';
import { useRecoilValue } from 'recoil';
import { recommendDevState } from '../../../recoil/issue/issueAtom';
import styled from 'styled-components';

const RecommendDev: React.FC = () => {
  const recommendDevInfo = useRecoilValue(recommendDevState);

  return (
    <Container>
      {recommendDevInfo.isSelected ? (
        <>
          <Name>추천 Dev : {recommendDevInfo.name}</Name>
          <Reason>추천 이유 : {recommendDevInfo.reason}</Reason>
        </>
      ) : (
        <>
          <Name>&nbsp;</Name>
          <Reason>&nbsp;</Reason>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`;

const Name = styled.h2``;

const Reason = styled.p``;

export default RecommendDev;