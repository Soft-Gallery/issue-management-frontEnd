import React, { useEffect, useState } from 'react';
import {
  ElementTitleText,
  UserSelect,
  UserText,
  DropDownContainer,
  AddButton
} from '../../admin/styles/InfoItemStyles';
import { DevUser, UserRole, UserWithRole } from '../../../shared/types/user';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { issuePageInfoState } from '../../../recoil/issue/issueAtom';
import { recommendedDevState } from '../../../recoil/issue/issueAtom';

interface UserInfoItemDropdownProps {
  title: string;
  itemList: UserWithRole<UserRole>[];
  itemType: string;
}

const UserInfoItemDropdown: React.FC<UserInfoItemDropdownProps> = ({ title, itemList, itemType }) => {
  const [issueInfo, setIssueInfo] = useRecoilState(issuePageInfoState);
  const recommendedDev = useRecoilValue(recommendedDevState); // Recoil 상태에서 추천받은 개발자 정보 가져오기
  const [selectedItem, setSelectedItem] = useState<UserWithRole<UserRole>>(itemList[0]);

  useEffect(() => {
    if (itemList.length > 0) {
      setSelectedItem(itemList[0]);
    }
  }, [itemList]);

  const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value, 10);
    const item = itemList.find(item => item.id === selectedId);
    if (item) {
      setSelectedItem(item);
    }
  };

  const handleSubmit = () => {
    const devUser: DevUser = {
      id: selectedItem.id,
      password: 'garbage', // This should be properly handled in a real application
      name: selectedItem.name,
      email: selectedItem.email,
      role: 'ROLE_DEVELOPER',
    };

    console.log(devUser);

    setIssueInfo({
      ...issueInfo,
      assignedDev: devUser,
      status: 'ASSIGNED',
    });
  };

  const handleRecommendation = () => {
    if (recommendedDev) {
      setSelectedItem(recommendedDev);
    } else {
      console.error('No recommended developer available');
    }
  };

  return (
    <div>
      <DropDownContainer>
        <UserText>{itemType}</UserText>
        <UserSelect value={selectedItem.id} onChange={handleItemChange}>
          <option value="">{itemType}를 선택하세요</option>
          {itemList.map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </UserSelect>
        <RecommendationButton onClick={handleRecommendation}>추천받기</RecommendationButton>
      </DropDownContainer>
      <AddButton onClick={handleSubmit}>Assign</AddButton>
    </div>
  );
};

const RecommendationButton = styled.button`
  width: 100px;
  margin-left: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: #0056b3;
  }
`;

export default UserInfoItemDropdown;
