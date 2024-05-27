import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import ElementContainer from '../../../shared/components/ElementContainer';
import {
  ElementTitleText,
  UserSelect,
  UserText,
  RemoveButton,
  AddButton,
  DropDownContainer
} from '../../admin/styles/InfoItemStyles';
import { UserRole, UserWithRole } from '../../../shared/types/user';
import { Issue } from '../../../shared/types/issue';
import { issuePageInfoState } from '../../../recoil/issue/issueAtom';

interface InfoItemProps {
  title: string;
  itemList: UserWithRole<UserRole>[];
  itemType: keyof Issue;
}

const UserInfoItem = ({ title, itemList, itemType }: InfoItemProps) => {
  const setIssueState = useSetRecoilState<Issue>(issuePageInfoState);
  const [selectedItems, setSelectedItems] = useState<UserWithRole<UserRole>[]>([]);

  const handleItemChange = (index: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value, 10);
    const updatedItems = [...selectedItems];
    const item = itemList.find(item => item.id === selectedId);
    if (item) {
      updatedItems[index] = item;
      setSelectedItems(updatedItems);
      setIssueState((prev) => ({
        ...prev,
        [itemType]: updatedItems,
      }));
    }
  };

  const addItem = () => {
    setSelectedItems(prevState => [...prevState, itemList[0]]);
  };

  const removeItem = (index: number) => {
    setSelectedItems(prevState => {
      const updatedItems = [...prevState];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  return (
    <ElementContainer>
      <ElementTitleText>{title}</ElementTitleText>
      {selectedItems.map((selectedItem, index) => (
        <DropDownContainer key={index}>
          <UserText>{itemType}</UserText>
          <UserSelect value={selectedItem.id} onChange={handleItemChange(index)}>
            <option value="">{itemType}를 선택하세요</option>
            {itemList.map(item => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </UserSelect>
          <RemoveButton onClick={() => removeItem(index)}>Remove</RemoveButton>
        </DropDownContainer>
      ))}
      <AddButton onClick={addItem}>Add {itemType}</AddButton>
    </ElementContainer>
  );
};

export default UserInfoItem;
