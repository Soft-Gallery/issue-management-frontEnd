import React, { useState } from 'react';
import styled from 'styled-components';
import ElementContainer from '../../../../shared/components/ElementContainer';
import { useRecoilState } from 'recoil';
import { adminPageAddProjectState } from '../../../../recoil/admin/atom';
import { DevUser } from '../../../../shared/types/user';
import { devListDummy } from '../../../../dummy/devListDummy';

const DevInfoItem = () => {
  const [projectState, setProjectState] = useRecoilState(adminPageAddProjectState);
  const [selectedDevs, setSelectedDevs] = useState<DevUser[]>([]);

  const handleDevChanges = (index: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    const updatedDevs = [...selectedDevs];
    const dev = devListDummy.find(dev => dev.id === selectedId);
    if (dev) {
      updatedDevs[index] = dev;
      setSelectedDevs(updatedDevs);
      setProjectState((prev) => ({
        ...prev,
        dev: updatedDevs,
      }));
    }
  };

  const addDev = () => {
    setSelectedDevs(prevState => [...prevState, devListDummy[0]]);
  };

  const removePL = (index: number) => {
    setSelectedDevs(prevState => {
      const updatedDevs = [...prevState];
      updatedDevs.splice(index, 1);
      return updatedDevs;
    });
  };

  return (
    <ElementContainer>
      <ElementTitleText>Dev 정보</ElementTitleText>
      {selectedDevs.map((selectedDev, index) => (
        <DropDownContainer key={index}>
          <PLText>Dev</PLText>
          <PLSelect value={selectedDev.id} onChange={handleDevChanges(index)}>
            <option value="">Dev를 선택하세요</option>
            {devListDummy.map(dev => (
              <option key={dev.id} value={dev.id}>
                {dev.name}
              </option>
            ))}
          </PLSelect>
          <RemoveButton onClick={() => removePL(index)}>Remove</RemoveButton>
        </DropDownContainer>
      ))}
      <AddButton onClick={addDev}>Add PL</AddButton>
    </ElementContainer>
  );
}

const ElementTitleText = styled.div`
  display: flex;
  text-align: left;
  margin-bottom: 12px;
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};
`;

const PLSelect = styled.select`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid ${({ theme }) => theme.color.gray1};
  border-radius: 4px;
  font-size: 14px;
`;

const PLText = styled.text`
  display: flex;
  text-align: left;
  font-size: 14px;
  color: ${({ theme }) => theme.color.gray1};
  align-self: center;
  justify-self: center;
  margin-right: 8px;
`

const RemoveButton = styled.button`
  margin-top: 4px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.red};
  color: white;
  cursor: pointer;
  align-self: center;
  margin-left: 8px;
`;

const AddButton = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 20px;
  text-align: center;

  margin-top: 12px;
  height: 40px;
  font-size: 16px;
  width: auto;

  border: 1.5px solid ${({ theme: { color } }) => color.black200};

  color: ${({ theme: { color } }) => color.gray1};
  background: ${({ theme: { color } }) => color.white};

  &:hover {
    color: ${({ theme: { color } }) => color.white};
    background: ${({ theme: { color } }) => color.indigo};
  }

  &:active {
    color: ${({ theme: { color } }) => color.white};
    background: ${({ theme: { color } }) => color.indigo};
  }
`;

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 4px;
`;

export default DevInfoItem;
