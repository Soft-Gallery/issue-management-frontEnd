import React, { useEffect, useState } from 'react';
import { UserSelect, UserText, DropDownContainer, AddButton } from '../../admin/styles/InfoItemStyles';
import { DevUser, UserRole, UserWithRole } from '../../../shared/types/user';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { issuePageInfoState, recommendDevState } from '../../../recoil/issue/issueAtom';

interface UserInfoItemDropdownProps {
  title: string;
  itemList: UserWithRole<UserRole>[];
  itemType: string;
}

const UserInfoItemDropdown: React.FC<UserInfoItemDropdownProps> = ({ itemList, itemType }) => {
  const [issueInfo, setIssueInfo] = useRecoilState(issuePageInfoState);
  const [selectedItem, setSelectedItem] = useState<UserWithRole<UserRole> | null>(itemList.length > 0 ? itemList[0] : null);
  const [isRecommendationFetched, setIsRecommendationFetched] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const recommendDevInfo = useRecoilValue(recommendDevState);
  const setRecommendDevInfo = useRecoilState(recommendDevState)[1];

  useEffect(() => {
    setIsRecommendationFetched(!!recommendDevInfo.name && !!recommendDevInfo.reason);
  }, [recommendDevInfo]);

  const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const item = itemList.find(item => item.id.toString() === event.target.value);
    if (item) {
      setSelectedItem(item);
    }
  };

  const handleSubmit = () => {
    if (selectedItem) {
      const devUser: DevUser = {
        id: selectedItem.id,
        password: 'garbage',
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

      // assignedDev post 하는 요청하기
      // status 상태 바꾸는 post 하기
    }
  };

  const handleRecommendation = () => {
    setRecommendDevInfo((prev) => ({
      ...prev,
      isSelected: true,
    }));
    setIsSelected(true);
  };

  return (
    <div>
      <DropDownContainer>
        <UserText>{itemType}</UserText>
        <UserSelect value={selectedItem ? selectedItem.id : ''} onChange={handleItemChange}>
          <option value="">{itemType}를 선택하세요</option>
          {itemList.map(item => (
            <option key={item.id} value={item.id}>
              {item.id}
            </option>
          ))}
        </UserSelect>
        <RecommendationButton
          onClick={handleRecommendation}
          disabled={recommendDevInfo.isSelected || isSelected}
        >
          추천받기
        </RecommendationButton>
      </DropDownContainer>
      <AddButton onClick={handleSubmit}>Assign</AddButton>
    </div>
  );
};

const RecommendationButton = styled.button<{ disabled: boolean }>`
    width: 100px;
    margin-left: 10px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: ${({ disabled }) => (disabled ? '#cccccc' : '#007bff')};
    color: ${({ disabled }) => (disabled ? '#666666' : 'white')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    align-self: center;

    &:hover {
        background-color: ${({ disabled }) => (disabled ? '#cccccc' : '#0056b3')};
    }
`;

export default UserInfoItemDropdown;