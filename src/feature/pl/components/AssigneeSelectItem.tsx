import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { devListDummy } from '../../../dummy/devListDummy';
import { DevUser, UserRole, UserWithRole } from '../../../shared/types/user';
import UserInfoItemDropdown from '../../issue/components/UserInfoItemDropdown';
import { useRecoilState } from 'recoil';
import { recommendedDevState } from '../../../recoil/issue/issueAtom';

const AssigneeSelectItem: React.FC = () => {
  const [recommendedDev, setRecommendedDev] = useRecoilState(recommendedDevState);

  useEffect(() => {
    const fetchRecommendedDev = async () => {
      try {
        const response = await fetch('/api/recommend-dev');
        const data: DevUser = await response.json();
        setRecommendedDev(data);
        // 그리고 나서 issue info 업데이트하기
      } catch (error) {
        console.error('Error fetching recommended developer:', error);
      }
    };

    fetchRecommendedDev();
  }, [setRecommendedDev]);

  return (
    <Container>
      <SelectContainer>
        <TitleText>Assignee</TitleText>
        <UserInfoItemDropdown
          title="Dev 정보"
          itemList={devListDummy as UserWithRole<UserRole>[]}
          itemType="devs"
        />
      </SelectContainer>
      {recommendedDev !== null ? (
        <RecommendContainer>
          추천할 내용
        </RecommendContainer>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  border-radius: 12px;
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${({ theme: { color } }) => color.black200};
  
  background-color: ${({ theme: { color } }) => color.white};
`

const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const RecommendContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const TitleText = styled.div`
    display: flex;
    text-align: left;
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.black};
`;


export default AssigneeSelectItem;
