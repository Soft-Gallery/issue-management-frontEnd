import React, { useEffect, useState } from 'react';
import {
  ElementTitleText,
  UserSelect,
  UserText,
  RemoveButton,
  AddButton,
  DropDownContainer, SubmitButton
} from '../../admin/styles/InfoItemStyles';
import { DevUser, UserRole, UserWithRole } from '../../../shared/types/user';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { issuePageInfoState } from '../../../recoil/issue/issueAtom';

interface UserInfoItemDropdownProps {
  title: string;
  itemList: UserWithRole<UserRole>[];
  itemType: string;
}

const UserInfoItemDropdown: React.FC<UserInfoItemDropdownProps> = ({ title, itemList, itemType }) => {
  const [issueInfo, setIssueInfo] = useRecoilState(issuePageInfoState);
  const [selectedItems, setSelectedItems] = useState<UserWithRole<UserRole>[]>([]);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  useEffect(()=>{
    handleFirstItemSelected();
  }, [selectedItems])

  const handleItemChange = (index: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value, 10);
    const updatedItems = [...selectedItems];
    const item = itemList.find(item => item.id === selectedId);
    if (item) {
      updatedItems[index] = item;
      setSelectedItems(updatedItems);
    }
  };

  const handleFirstItemSelected = ()=>{
    if(selectedItems.length > 0){
      setIsAvailable(true);
    } else{
      setIsAvailable(false);
    }
  }

  const handleSubmit = ()=>{
    if(isAvailable){
      const devUsers: DevUser[] = selectedItems.filter(
        (item): item is DevUser => item.role === 'ROLE_DEV'
      );
      setIssueInfo({
        ...issueInfo,
        devs: devUsers,
        status: 'ASSIGNED',
      });
    }
  }

  const addItem = () => {
    setSelectedItems(prevState => {
      const updatedItems = [...prevState, itemList[0]];
      return updatedItems;
    });
  };

  const removeItem = (index: number) => {
    setSelectedItems(prevState => {
      const updatedItems = [...prevState];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  return (
    <div>
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
      <ButtonContainer>
        <AddButton onClick={addItem}>Add {itemType}</AddButton>
        <SubmitButton onClick={handleSubmit} isAvailable={isAvailable}>Assign {itemType}</SubmitButton>
      </ButtonContainer>
    </div>
  );
};


const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    
`
export default UserInfoItemDropdown;
