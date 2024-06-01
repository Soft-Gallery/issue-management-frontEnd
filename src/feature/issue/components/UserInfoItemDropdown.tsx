import React, { useState, useEffect } from 'react';
import { UserSelect, UserText, DropDownContainer } from '../../admin/styles/InfoItemStyles';
import { DevUser, UserRole, UserWithRole } from '../../../shared/types/user';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { assignedDevInfoState, recommendDevState } from '../../../recoil/issue/issueAtom';

interface UserInfoItemDropdownProps {
  title: string;
  itemList: UserWithRole<UserRole>[];
  itemType: string;
}

const UserInfoItemDropdown: React.FC<UserInfoItemDropdownProps> = ({ itemList, itemType }) => {
  const [selectedItem, setSelectedItem] = useState<UserWithRole<UserRole> | null>(itemList.length > 0 ? itemList[0] : null);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const recommendDevInfo = useRecoilValue(recommendDevState);
  const setRecommendDevInfo = useRecoilState(recommendDevState)[1];
  const [assignedDev, setAssignedDev] = useRecoilState(assignedDevInfoState);

  useEffect(() => {
    setIsSelected(recommendDevInfo.name !== null);
  }, [recommendDevInfo.name]);

  const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const item = itemList.find(item => item.id.toString() === event.target.value);
    if (item) {
      setSelectedItem(item);
      setAssignedDev(item as DevUser);
    }
  };

  const handleRecommendation = () => {
    setRecommendDevInfo((prev) => ({
      ...prev,
      isSelected: true,
    }));
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
          isNameNull={recommendDevInfo.name === null}
        >
          추천받기
        </RecommendationButton>
      </DropDownContainer>
    </div>
  );
};

const RecommendationButton = styled.button<{ isNameNull: boolean }>`
    width: 80px;
    margin-left: 10px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: ${({ isNameNull }) => (isNameNull ? '#cccccc' : '#007bff')};
    color: ${({ isNameNull }) => (isNameNull ? '#666666' : 'white')};
    cursor: ${({ isNameNull }) => (isNameNull ? 'not-allowed' : 'pointer')};
    align-self: center;

    &:hover {
        background-color: ${({ isNameNull }) => (isNameNull ? '#cccccc' : '#0056b3')};
    }
`;

export default UserInfoItemDropdown;
